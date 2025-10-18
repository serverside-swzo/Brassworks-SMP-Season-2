import requests
import toml
import json
import hashlib
import os
from concurrent.futures import ThreadPoolExecutor, as_completed

BASE_URL = "https://raw.githubusercontent.com/serverside-swzo/Brassworks-SMP-Season-2/master/"

OUTPUT_FILE = "brassworks_launcher_index.json"

MAX_WORKERS = 10

def get_file_details(url: str):
    """
    Downloads a file from a URL to calculate its size and MD5 hash.
    Used for files listed in metafiles.
    Returns a dictionary with 'size' and 'md5' or None on failure.
    """
    try:
        print(f"Downloading (meta): {url}...")
        response = requests.get(url, timeout=60)
        response.raise_for_status()

        file_content = response.content
        file_size = len(file_content)
        md5_hash = hashlib.md5(file_content).hexdigest()

        return {
            "size": file_size,
            "md5": md5_hash
        }
    except requests.exceptions.RequestException as e:
        print(f"Error downloading {url}: {e}")
        return None

def get_local_file_details(path: str):
    """
    Reads a local file to calculate its size and MD5 hash.
    Used for files directly listed in the index.
    Returns a dictionary with 'size' and 'md5' or None on failure.
    """
    try:
        with open(path, 'rb') as f:
            file_content = f.read()
        file_size = len(file_content)
        md5_hash = hashlib.md5(file_content).hexdigest()
        return {"size": file_size, "md5": md5_hash}
    except FileNotFoundError:
        print(f"Error: Local file not found at {path}")
        return None
    except IOError as e:
        print(f"Error reading local file {path}: {e}")
        return None

def process_file_entry(file_info: dict):
    """
    Processes a single file entry from the Packwiz index.
    Fetches necessary data and returns a dictionary in the Helios format.
    """
    is_metafile = file_info.get("metafile", False)

    final_url = ""
    display_name = ""
    details = None

    local_path = file_info.get("file", "").replace("\\", "/")

    if not local_path:
        print(f"Skipping entry with no file path: {file_info}")
        return None

    if is_metafile:

        try:
            with open(local_path, 'r', encoding='utf-8') as f:
                meta_data = toml.load(f)

            display_name = meta_data.get("name", "Unknown")

            final_url = meta_data.get("download", {}).get("url", "")

            file_path = os.path.join(os.path.dirname(local_path), meta_data.get("filename", "")).replace("\\", "/")

            if not final_url:
                print(f"Could not determine download URL in metafile {local_path}. Skipping.")
                return None

            details = get_file_details(final_url)

        except (FileNotFoundError, toml.TomlDecodeError) as e:
            print(f"Error processing local metafile {local_path}: {e}")
            return None
    else:

        display_name = os.path.basename(local_path)
        file_path = local_path

        final_url = BASE_URL + local_path
        print(f"Processing (local): {display_name}...")

        details = get_local_file_details(local_path)

    if not details:
        print(f"Failed to get details for {display_name}. Skipping.")
        return None

    file_id = os.path.basename(file_path)
    file_type = "File"

    if file_path.lower().startswith("mods/"):
        file_type = "ForgeMod"
        id_name = display_name.replace(" ", "_")
        file_id = f"generated.forgemod:{id_name}:{os.path.basename(file_path)}"

    helios_entry = {
        "id": file_id,
        "name": display_name,
        "type": file_type,
        "artifact": {
            "size": details["size"],
            "url": final_url,
            "MD5": details["md5"]
        }
    }

    if file_type == "File":
        helios_entry["artifact"]["path"] = file_path

    return helios_entry

def main():
    """
    Main function to run the conversion process.
    """
    print("Looking for index.toml in the current directory...")

    try:
        with open("index.toml", 'r', encoding='utf-8') as f:
            packwiz_data = toml.load(f)
    except FileNotFoundError:
        print(
            "FATAL: 'index.toml' not found in the current directory. Make sure you are running the script in the same folder as your packwiz files.")
        return
    except toml.TomlDecodeError as e:
        print(f"FATAL: Could not parse index.toml. Error: {e}")
        return

    files_to_process = packwiz_data.get("files", [])
    if not files_to_process:
        print("No files found in index.toml.")
        return

    print(f"Found {len(files_to_process)} files to process. Starting...")

    helios_output = []

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        future_to_file = {executor.submit(process_file_entry, file_info): file_info for file_info in files_to_process}

        for i, future in enumerate(as_completed(future_to_file)):
            result = future.result()
            if result:
                helios_output.append(result)
            print(f"Progress: {i + 1}/{len(files_to_process)} completed.")

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(helios_output, f, indent=2)

    print(f"\nConversion complete! Output saved to '{OUTPUT_FILE}'.")
    print(f"Successfully processed {len(helios_output)} out of {len(files_to_process)} files.")

if __name__ == "__main__":
    main()
