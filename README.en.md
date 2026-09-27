# Windows Copy Paste Mode

🌐 [日本語](README.md) | **English** | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [한국어](README.ko.md) | [Español](README.es.md) | [Français](README.fr.md)

**An extension that makes copy & paste in VS Code / Cursor feel like a regular Windows app.**
No complicated setup. One click removes the "something feels off" of copy & paste.

## Get started (3 steps)

1. **Install**: open the Extensions view (`Ctrl+Shift+X`), search for **Windows Copy Paste Mode**, and click **Install**
2. **Turn on the recommended settings**: press `Ctrl+Shift+P` and choose **Windows Copy Paste Mode: Apply Recommended Settings**
3. **You can always undo it**: press `Ctrl+Shift+P` and choose **Windows Copy Paste Mode: Restore Previous Settings**

---

## Problems it solves

- You pressed `Ctrl+C` with nothing selected and a whole line got copied
- Copied text brought colors and formatting along and looked broken where you pasted it
- You are afraid a paste into the terminal might run a command by itself
- Copy & paste in Cursor / VS Code just doesn't feel like the Windows apps you use every day

## Who it's for

- Windows users who have just started using Cursor
- Beginners who find VS Code's copy & paste behavior confusing
- People who are not primarily engineers and use AI tools or no-code / low-code
- Anyone not yet comfortable with the terminal

---

## The easiest way to use it

### In Cursor

1. Open Cursor.
2. Open the **Extensions** view.
   - Shortcut: `Ctrl+Shift+X`
3. Type **Windows Copy Paste Mode** in the search box.
4. Click **Install** on **Windows Copy Paste Mode**.
5. When the installation finishes, press `Ctrl+Shift+P`.
6. Type `Apply Recommended` in the box that appears at the top and choose
   **Windows Copy Paste Mode: Apply Recommended Settings**.

That's it. Copy & paste in Cursor now feels much closer to a regular Windows app.

To undo it, press `Ctrl+Shift+P` and choose
**Windows Copy Paste Mode: Restore Previous Settings**.
Your settings go back to how they were before.

### In VS Code

1. Open VS Code.
2. Open the **Extensions** view.
   - Shortcut: `Ctrl+Shift+X`
3. Type **Windows Copy Paste Mode** in the search box.
4. Click **Install** on **Windows Copy Paste Mode**.
5. Press `Ctrl+Shift+P` and choose **Windows Copy Paste Mode: Apply Recommended Settings**.

Undoing works the same way as in Cursor (choose **Restore Previous Settings**).

### Using the other features

Press `Ctrl+Shift+P` and type `Windows Copy Paste Mode` to see everything this extension can do.
Each feature is explained in [Main features](#main-features) below.

### If you can't find it by searching (backup method)

Normally the steps above are all you need. Only if the extension does not show up in the search, try this:

1. Open the extension page.
   - Cursor: [Windows Copy Paste Mode on Open VSX](https://open-vsx.org/extension/deskflowlabs/windows-copy-paste-mode)
   - VS Code: [Windows Copy Paste Mode on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=deskflowlabs.windows-copy-paste-mode)
2. Use the download button on the page to save the file that ends in `.vsix`.
3. In Cursor / VS Code, press `Ctrl+Shift+P`.
4. Choose **Extensions: Install from VSIX...**.
5. Select the `.vsix` file you saved.

---

## Main features

| Command (search in the Command Palette) | What it does |
|---|---|
| **Windows Copy Paste Mode: Apply Recommended Settings** | Applies Windows-style recommended settings in one go (your current settings are backed up first). |
| **Windows Copy Paste Mode: Restore Previous Settings** | Puts your settings back to how they were before the recommended settings were applied. |
| **Windows Copy Paste Mode: Copy as Plain Text** | Copies the selected text without formatting (plain text). |
| **Windows Copy Paste Mode: Paste as Plain Text** | Pastes the clipboard text without formatting. |
| **Windows Copy Paste Mode: Safe Paste to Terminal** | Pastes into the terminal. For multiple lines it asks first (nothing is run automatically). |
| **Windows Copy Paste Mode: Paste Image to Terminal** | Saves the clipboard image and types its file path into the active terminal (Windows only). |
| **Windows Copy Paste Mode: Open Settings** | Opens a settings panel with switches to turn each feature on or off. |

### Keyboard shortcuts (defaults)

- `Ctrl+Alt+C` … copy as plain text (when the editor has focus)
- `Ctrl+Alt+V` … paste as plain text (when the editor has focus)
- `Ctrl+Alt+Shift+V` … safe paste to terminal (when the terminal has focus)
- `Ctrl+Alt+Shift+I` … save the clipboard image and type its path into the terminal (Windows)

> The normal `Ctrl+C` / `Ctrl+V` are **not changed**. Everything you are used to keeps working.

### Languages

Messages, command names and setting descriptions are available in 7 languages:
Japanese, English, Simplified Chinese, Traditional Chinese, Korean, Spanish and French.
By default the extension follows the display language of Cursor / VS Code (other languages fall back to English).
To choose a language yourself, change the setting `windowsCopyPaste.language`.
(This setting changes the notifications and the settings panel. Command names and setting descriptions always follow the display language of Cursor / VS Code itself.)

---

## Images to the terminal (terminal-image-paste) — Windows only

With a screenshot (or another image) on the clipboard, press `Ctrl+Alt+Shift+I`
(or run **Paste Image to Terminal** from the Command Palette). The extension will:

1. save the image as a PNG (by default in the extension's storage folder, named `shot-YYYYMMDD-HHmmss.png`), and
2. **type the saved file path into the active terminal** (Enter is not pressed).

This makes it easy to hand images to CLIs that take an image path, such as Claude Code — just like pasting into ChatGPT.

- Works with screenshots taken with `PrintScreen`, `Win+Shift+S` or the Snipping Tool.
- **Supported OS**: currently **Windows only**. On macOS / Linux the feature is turned off and you will see a notice.
- If there is no image on the clipboard, you get a clear message.

| Setting | Default | Description |
|---|---|---|
| `windowsCopyPaste.features.terminalImagePaste` | `true` | Turn the feature on/off |
| `windowsCopyPaste.terminalImagePaste.saveDirectory` | `""` | Save folder (empty = the extension's globalStorage/images) |
| `windowsCopyPaste.terminalImagePaste.fileNamePattern` | `shot-YYYYMMDD-HHmmss.png` | File name pattern (date/time tokens are replaced) |
| `windowsCopyPaste.terminalImagePaste.appendTrailingSpace` | `true` | Add a space after the inserted path |

---

## Settings panel with switches

Run **Open Settings** to open a panel where you can turn each feature on or off with switches.
Changes are saved immediately and stay in sync with `settings.json` in both directions.

---

## What "Apply Recommended Settings" changes

It writes these 4 settings to your user (global) settings:

| Setting | Value | Effect |
|---|---|---|
| `editor.emptySelectionClipboard` | `false` | `Ctrl+C` with nothing selected no longer copies the whole line |
| `editor.copyWithSyntaxHighlighting` | `false` | Copies without colors or formatting (closer to plain text) |
| `terminal.integrated.copyOnSelection` | `true` | Selecting text in the terminal copies it |
| `terminal.integrated.rightClickBehavior` | `copyPaste` | Right-click in the terminal copies / pastes |

- Your current settings are backed up automatically **before** applying (first time only).
- To **undo**, run "Restore Previous Settings".

---

## Turning features on/off

Every feature can be turned on or off individually (search for "Windows Copy Paste Mode" in the Settings UI).

| Setting | Default | Description |
|---|---|---|
| `windowsCopyPaste.enabled` | `true` | Master switch. Off disables everything. |
| `windowsCopyPaste.features.settings` | `true` | Apply / restore recommended settings |
| `windowsCopyPaste.features.copyPlainText` | `true` | Copy as plain text |
| `windowsCopyPaste.features.pastePlainText` | `true` | Paste as plain text |
| `windowsCopyPaste.features.safePasteToTerminal` | `true` | Safe paste to terminal |
| `windowsCopyPaste.features.terminalImagePaste` | `true` | Clipboard image → path in terminal (Windows) |
| `windowsCopyPaste.showOnboarding` | `true` | Show the first-run guide |
| `windowsCopyPaste.backupSettings` | `true` | Back up before applying |
| `windowsCopyPaste.confirmMultiLineTerminalPaste` | `true` | Confirm before pasting multiple lines into the terminal |
| `windowsCopyPaste.multiLinePreviewMaxLines` | `5` | Max preview lines in the confirmation (1–20) |
| `windowsCopyPaste.language` | `auto` | Display language (`auto`/`ja`/`en`/`zh-cn`/`zh-tw`/`ko`/`es`/`fr`) |

If you run a command whose feature is turned off, the extension tells you how to turn it back on.

---

## Privacy policy

This extension is designed with your privacy first.

- **It never communicates with external servers.**
- **No telemetry (usage data is never sent).**
- **Clipboard contents are never sent anywhere.**
- **Clipboard history is not stored** (this version has no history feature at all).
- It only changes VS Code / Cursor settings; it does not change clipboard behavior for the whole OS.

## What it can't do (not supported in this version)

- Pasting images **into the editor** (images can only be inserted into the terminal as a path, on Windows)
- Copy & paste of non-text content such as HTML, RTF or Excel
- Images to the terminal on macOS / Linux (Windows only for now)
- Clipboard history / cloud sync
- Changing copy & paste behavior for the whole OS
- AI features, license activation or payments (it is **free** and sends nothing out)

## FAQ

**Q. Will the normal `Ctrl+C` / `Ctrl+V` stop working?**
A. No. The standard shortcuts are not changed.

**Q. Can I undo the recommended settings?**
A. Yes. "Restore Previous Settings" puts things back as they were (a backup is made before applying).

**Q. Will pasting into the terminal run commands by itself?**
A. No. It only pastes and never presses Enter. For multiple lines it asks first.

---

Developer information (build, packaging, file layout) is in the [Japanese README](README.md#開発者向け).

## License

MIT License (see `LICENSE`).
