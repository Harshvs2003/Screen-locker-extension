# Screen Locker Chrome Extension
A Chrome extension to lock the current tab and prevent accidental navigation or closure with a customizable shortcut (default: Ctrl+Shift+L).

## Features
- Locks a tab with an overlay, blocking all interactions (e.g., clicks, navigation).
- Unlocks with the shortcut, an on-screen button, or the popup.
- Tested and confirmed working on: Online GDB, Google Docs, YouTube, Trello, Khan Academy.

## Uses
- **Students**: Lock coding editors (e.g., Online GDB) or notes during study sessions to stay focused.
- **Professionals**: Secure work tabs (e.g., Google Docs, Trello) during breaks in shared spaces.
- **Parents**: Child-proof educational tabs (e.g., Khan Academy) to keep kids on task.
- **Casual Users**: Lock media (e.g., YouTube) or recipes while cooking or exercising.

## Installation Options
### Option 1: For Developers (Clone with Git)
1. Install Git: [git-scm.com](https://git-scm.com/downloads).
2. Clone this repo: `git clone https://github.com/Harshvs2003/screen-locker-extension.git`.
3. Open Chrome/Brave > `chrome://extensions/`.
4. Enable "Developer mode" (top right toggle).
5. Click "Load unpacked" and select the `chrome-source-code` folder.
6. Use `Ctrl+Shift+L` to lock/unlock (customize if needed—see Notes).

### Option 2: For Firefox Developers (Clone Firefox Source)
1. Install Git: [git-scm.com](https://git-scm.com/downloads).
2. Clone this repo: `git clone https://github.com/Harshvs2003/screen-locker-extension.git`.
3. Open Firefox > `about:debugging#/runtime/this-firefox`.
4. Click "Load Temporary Add-on…".
5. Select `firefox-source-code/manifest.json` from the cloned folder.
6. Use `Ctrl+Shift+L` to lock/unlock (temporary; see Firefox Direct Install below for permanent use).

### Firefox Direct Install (No Developer Mode Needed)
- A pre-built `.xpi` file is available in the `firefox-direct-xpi-installation` folder for easy installation on Firefox.
- **Installation Process**:
  1. Download the [xpi](https://github.com/Harshvs2003/screen-locker-extension/raw/main/firefox-direct-xpi-installation) file.
  2. Open Firefox > `about:addons` (Menu > Add-ons and Themes).
  3. Click the gear icon (top right) > "Install Add-on From File…".
  4. Navigate to the downloaded `.xpi` and select it.
  5. Click "Add" when prompted to install permanently.
  6. Use `Ctrl+Shift+L` to lock/unlock the tab.
- **Note**: This method installs the extension permanently without requiring Developer mode, tested on Firefox 137.0.1 (April 2025).

## Feedback
Report issues, suggest features, or share ideas [here](https://github.com/Harshvs2003/screen-locker-extension/issues). I’d love to hear how it works for you!

## Notes
- **Shortcut Conflicts**: The default shortcut (`Ctrl+Shift+L`) may conflict with other extensions (e.g., AI tools like MaxAI). If it doesn’t work, go to `chrome://extensions/shortcuts` (Chrome/Brave) or check Firefox shortcuts, and assign a new key (e.g., `Ctrl+Alt+Shift+L` or `Ctrl+Shift+P` or `Ctrl+Q`). Let me know via Issues if you face this!
- **Tested Browsers**: Works on Chrome, Brave, and Firefox (latest versions as of April 2025).

## Author
B.Tech 3rh Year Student  
LinkedIn: www.linkedin.com/in/harshvardhan-sinha-3408a0290 | [GitHub](https://github.com/Harshvs2003)  
Built with help from exploring extension development—thanks for the journey!
