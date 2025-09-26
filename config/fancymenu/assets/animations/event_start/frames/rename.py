import os

def rename_files_in_order():
    folder_path = "C:\\Users\\Pipo\\Documents\\intro thingy" #almost ran this on my windows home dir
    # Get a sorted list of all files in the folder
    files = sorted(f for f in os.listdir(folder_path)
               if os.path.isfile(os.path.join(folder_path, f)) and f.lower().endswith('.png'))


    print(files)
    # Rename each file
    for index, filename in enumerate(files):
        new_name = f"{index}.png"
        old_path = os.path.join(folder_path, filename)
        new_path = os.path.join(folder_path, new_name)
        os.rename(old_path, new_path)

    print(f"Renamed {len(files)} files.")

rename_files_in_order()
