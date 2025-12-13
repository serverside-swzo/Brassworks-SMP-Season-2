import sys
import json
import time
import subprocess
from pathlib import Path
import platform

from PyQt6.QtWidgets import (
    QApplication,
    QWidget,
    QVBoxLayout,
    QLabel,
    QLineEdit,
    QTextEdit,
    QPushButton,
    QMessageBox
)


BASE_DIR = Path.cwd()

PACK_TOML = BASE_DIR / "pack.toml"
META_JSON = BASE_DIR / "modpack-info" / "meta.json"
VERSIONS_DIR = BASE_DIR / "modpack-info" / "versions"
UPDATE_CHECKER_JSON = BASE_DIR / "config" / "modpack-update-checker" / "config.json"


class ModpackVersionTool(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Modpack Version Tool")
        self.setMinimumWidth(500)

        layout = QVBoxLayout(self)

        layout.addWidget(QLabel("Version (example: 2.3.5):"))
        self.version_input = QLineEdit()
        layout.addWidget(self.version_input)

        layout.addWidget(QLabel("Changelog text:"))
        self.changelog_input = QTextEdit()
        self.changelog_input.setPlaceholderText("Write changelog here...")
        layout.addWidget(self.changelog_input)

        self.apply_button = QPushButton("Apply Version")
        self.apply_button.clicked.connect(self.apply_version)
        layout.addWidget(self.apply_button)

    def apply_version(self):
        version = self.version_input.text().strip()
        changelog = self.changelog_input.toPlainText().strip()

        if not version:
            self.error("Version cannot be empty")
            return

        if not changelog:
            self.error("Changelog cannot be empty")
            return

        try:
            self.update_pack_toml(version)
            self.update_meta_json(version)
            changelog_path = self.create_changelog_file(version, changelog)
            self.git_add_file(changelog_path)
            self.update_update_checker(version)
            self.run_packwiz_refresh()

            QMessageBox.information(
                self,
                "Success",
                "Version updated, changelog added to git, and packwiz refresh completed"
            )

        except Exception as e:
            self.error(str(e))

    def update_pack_toml(self, version: str):
        if not PACK_TOML.exists():
            raise FileNotFoundError("pack.toml not found")

        lines = PACK_TOML.read_text(encoding="utf-8").splitlines()
        new_lines = []

        for line in lines:
            if line.strip().startswith("version ="):
                new_lines.append(f'version = "{version}"')
            else:
                new_lines.append(line)

        PACK_TOML.write_text("\n".join(new_lines), encoding="utf-8")

    def update_meta_json(self, version: str):
        if not META_JSON.exists():
            raise FileNotFoundError("meta.json not found")

        data = json.loads(META_JSON.read_text(encoding="utf-8"))

        released_at = int(time.time() * 1000)

        new_entry = {
            "id": version,
            "releasedAt": released_at,
            "promotions": {
                "downloads": {
                    "modrinth": "https://modrinth.com/modpack/brassworks-smp-modpack/",
                    "generic": "https://brassworks.opnsoc.org/"
                }
            }
        }

        data.setdefault("versions", []).append(new_entry)

        META_JSON.write_text(
            json.dumps(data, indent=2),
            encoding="utf-8"
        )

    def create_changelog_file(self, version: str, changelog: str) -> Path:
        version_dir = VERSIONS_DIR / version
        version_dir.mkdir(parents=True, exist_ok=True)

        changelog_file = version_dir / "changelog.txt"
        changelog_file.write_text(changelog, encoding="utf-8")

        return changelog_file

    def git_add_file(self, file_path: Path):
        git_cmd = "git.exe" if platform.system() == "Windows" else "git"

        result = subprocess.run(
            [git_cmd, "add", str(file_path)],
            cwd=BASE_DIR,
            capture_output=True,
            text=True,
            shell=(platform.system() == "Windows")
        )

        if result.returncode != 0:
            raise RuntimeError(
                "git add failed:\n" + result.stderr
            )

    def update_update_checker(self, version: str):
        if not UPDATE_CHECKER_JSON.exists():
            raise FileNotFoundError("update checker config.json not found")

        data = json.loads(UPDATE_CHECKER_JSON.read_text(encoding="utf-8"))
        data["currentVersion"] = version

        UPDATE_CHECKER_JSON.write_text(
            json.dumps(data, indent=2),
            encoding="utf-8"
        )

    def run_packwiz_refresh(self):
        system = platform.system()

        if system == "Windows":
            packwiz_cmd = ["packwiz.exe", "refresh"]
            shell = True
        elif system == "Linux":
            packwiz_cmd = ["./packwiz-linux", "refresh"]
            shell = False
        elif system == "Darwin":
            packwiz_cmd = ["./packwiz", "refresh"]
            shell = False
        else:
            raise RuntimeError(f"Unsupported OS: {system}")

        result = subprocess.run(
            packwiz_cmd,
            cwd=BASE_DIR,
            capture_output=True,
            text=True,
            shell=shell
        )

        if result.returncode != 0:
            raise RuntimeError(
                "packwiz refresh failed:\n" + result.stderr
            )

    def error(self, message: str):
        QMessageBox.critical(self, "Error", message)


def main():
    app = QApplication(sys.argv)
    window = ModpackVersionTool()
    window.show()
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
