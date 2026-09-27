# Windows Copy Paste Mode

🌐 [日本語](README.md) | [English](README.en.md) | [简体中文](README.zh-CN.md) | **繁體中文** | [한국어](README.ko.md) | [Español](README.es.md) | [Français](README.fr.md)

**讓 VS Code / Cursor 的複製貼上，用起來更像一般 Windows 應用程式的擴充功能。**
不需要複雜的設定，一鍵就能減少複製貼上的「卡卡的感覺」。

## 先做這三步

1. **安裝**：開啟擴充功能畫面（`Ctrl+Shift+X`），搜尋 **Windows Copy Paste Mode**，按下 **Install**
2. **開啟建議設定**：按 `Ctrl+Shift+P`，選擇 **Windows Copy Paste Mode: Apply Recommended Settings（套用建議設定）**
3. **隨時都能還原**：想還原時，一樣按 `Ctrl+Shift+P`，選擇 **Windows Copy Paste Mode: Restore Previous Settings（還原先前的設定）**

---

## 能解決這些困擾

- 什麼都沒選就按了 `Ctrl+C`，結果整行都被複製了
- 複製的文字帶著顏色和格式，貼上後版面跑掉了
- 貼到終端機時，擔心指令會被自動執行
- Cursor / VS Code 的複製貼上，和平常用的 Windows 應用程式感覺不一樣

## 適合這些使用者

- 剛開始使用 Cursor 的 Windows 使用者
- 對 VS Code 複製貼上行為感到不順手的新手
- 以 AI 開發、無程式碼／低程式碼為目的、非工程師背景的使用者
- 還不熟悉終端機操作的人

---

## 最簡單的用法

### 使用 Cursor 時

1. 開啟 Cursor。
2. 開啟 **Extensions（擴充功能）** 畫面。
   - 快速鍵：`Ctrl+Shift+X`
3. 在搜尋欄輸入 **Windows Copy Paste Mode**。
4. 在 **Windows Copy Paste Mode** 上按下 **Install**。
5. 安裝完成後，按 `Ctrl+Shift+P`。
6. 在上方出現的輸入欄輸入 `Apply Recommended`，
   選擇 **Windows Copy Paste Mode: Apply Recommended Settings（套用建議設定）**。

這樣 Cursor 的複製貼上就會更接近一般的 Windows 應用程式。

想還原時，按 `Ctrl+Shift+P`，選擇
**Windows Copy Paste Mode: Restore Previous Settings（還原先前的設定）**。
設定會回到使用建議設定之前的狀態。

### 使用 VS Code 時

1. 開啟 VS Code。
2. 開啟 **Extensions（擴充功能）** 畫面。
   - 快速鍵：`Ctrl+Shift+X`
3. 在搜尋欄輸入 **Windows Copy Paste Mode**。
4. 在 **Windows Copy Paste Mode** 上按下 **Install**。
5. 按 `Ctrl+Shift+P`，選擇 **Windows Copy Paste Mode: Apply Recommended Settings（套用建議設定）**。

還原方式與 Cursor 相同（選擇 **Restore Previous Settings**）。

### 使用其他功能

按 `Ctrl+Shift+P` 並輸入 `Windows Copy Paste Mode`，就會列出這個擴充功能的所有功能。
各功能的說明請見下方的「主要功能」。

### 搜尋不到時（備用方法）

通常只要上面的步驟就夠了。只有在搜尋不到時，才試試以下方法。

1. 開啟擴充功能頁面。
   - Cursor：[Open VSX 上的 Windows Copy Paste Mode 頁面](https://open-vsx.org/extension/deskflowlabs/windows-copy-paste-mode)
   - VS Code：[Visual Studio Marketplace 上的 Windows Copy Paste Mode 頁面](https://marketplace.visualstudio.com/items?itemName=deskflowlabs.windows-copy-paste-mode)
2. 用頁面上的下載按鈕，儲存以 `.vsix` 結尾的檔案。
3. 在 Cursor / VS Code 中按 `Ctrl+Shift+P`。
4. 選擇 **Extensions: Install from VSIX...**。
5. 選擇剛才儲存的 `.vsix` 檔案。

---

## 主要功能

| 指令（在命令選擇區中搜尋） | 作用 |
|---|---|
| **Windows Copy Paste Mode: Apply Recommended Settings** | 一次套用 Windows 風格的建議設定（套用前會自動備份）。 |
| **Windows Copy Paste Mode: Restore Previous Settings** | 還原到套用建議設定之前的狀態。 |
| **Windows Copy Paste Mode: Copy as Plain Text** | 以無格式的純文字複製選取的文字。 |
| **Windows Copy Paste Mode: Paste as Plain Text** | 以無格式方式貼上剪貼簿中的文字。 |
| **Windows Copy Paste Mode: Safe Paste to Terminal** | 貼到終端機。多行時會先確認（不會自動執行）。 |
| **Windows Copy Paste Mode: Paste Image to Terminal** | 儲存剪貼簿中的圖片，並把儲存路徑輸入到目前的終端機（僅限 Windows）。 |
| **Windows Copy Paste Mode: Open Settings** | 開啟有開關的設定面板，可逐項開啟／關閉各功能。 |

### 鍵盤快速鍵（預設）

- `Ctrl+Alt+C` … 純文字複製（焦點在編輯器時）
- `Ctrl+Alt+V` … 純文字貼上（焦點在編輯器時）
- `Ctrl+Alt+Shift+V` … 安全貼到終端機（焦點在終端機時）
- `Ctrl+Alt+Shift+I` … 儲存剪貼簿圖片並把路徑輸入到終端機（Windows）

> **不會覆寫**一般的 `Ctrl+C` / `Ctrl+V`，原本的操作照常可用。

### 顯示語言

訊息、指令名稱和設定說明支援 7 種語言：日文、英文、簡體中文、繁體中文、韓文、西班牙文、法文。
預設會依照 Cursor / VS Code 的顯示語言（不支援的語言會顯示英文）。
如要手動指定，請修改設定 `windowsCopyPaste.language`。
（此設定改變的是通知和設定面板的文字。指令名稱和設定說明一律依照 Cursor / VS Code 本身的顯示語言。）

---

## 把圖片送到終端機（terminal-image-paste）※僅限 Windows

把螢幕擷取畫面等圖片複製到剪貼簿後，按 `Ctrl+Alt+Shift+I`（或在命令選擇區執行 **Paste Image to Terminal**），擴充功能會：

1. 把圖片儲存為 PNG（預設存在擴充功能的儲存資料夾，檔名為 `shot-YYYYMMDD-HHmmss.png`），
2. 並把**儲存路徑自動輸入到目前的終端機**（不會按 Enter）。

這樣就能像把圖片貼到 ChatGPT 一樣，把圖片交給 Claude Code 等以路徑接收圖片的 CLI。

- 用 `PrintScreen`、`Win+Shift+S` 或剪取工具（Snipping Tool）擷取的圖片都能使用。
- **支援的作業系統**：目前**僅限 Windows**。在 macOS / Linux 上此功能會停用並顯示提示。
- 剪貼簿中沒有圖片時，會清楚地提示。

| 設定 | 預設值 | 說明 |
|---|---|---|
| `windowsCopyPaste.features.terminalImagePaste` | `true` | 功能開關 |
| `windowsCopyPaste.terminalImagePaste.saveDirectory` | `""` | 儲存資料夾（空白則為擴充功能的 globalStorage/images） |
| `windowsCopyPaste.terminalImagePaste.fileNamePattern` | `shot-YYYYMMDD-HHmmss.png` | 檔名格式（替換日期時間） |
| `windowsCopyPaste.terminalImagePaste.appendTrailingSpace` | `true` | 在輸入的路徑後加一個空格 |

---

## 有開關的設定面板

執行 **Open Settings** 指令，會開啟可用開關逐項開啟／關閉各功能的設定面板。
變更會立即儲存，並與 `settings.json` 雙向同步。

---

## 套用的設定（Apply Recommended Settings）

執行「套用建議設定」後，以下 4 項會寫入使用者設定（全域）：

| 設定 | 值 | 效果 |
|---|---|---|
| `editor.emptySelectionClipboard` | `false` | 沒有選取任何內容時按 `Ctrl+C` 不再複製整行 |
| `editor.copyWithSyntaxHighlighting` | `false` | 複製時不帶顏色和格式（更接近純文字） |
| `terminal.integrated.copyOnSelection` | `true` | 在終端機中選取即複製 |
| `terminal.integrated.rightClickBehavior` | `copyPaste` | 在終端機中按右鍵即複製／貼上 |

- 套用**前**會自動備份目前的設定（僅第一次）。
- 如要**還原**，請執行「Restore Previous Settings」。

---

## 功能的開啟／關閉

所有功能都可以個別開啟或關閉（在設定畫面中搜尋「Windows Copy Paste Mode」）。

| 設定 | 預設值 | 說明 |
|---|---|---|
| `windowsCopyPaste.enabled` | `true` | 總開關。關閉後所有功能停用。 |
| `windowsCopyPaste.features.settings` | `true` | 套用／還原建議設定 |
| `windowsCopyPaste.features.copyPlainText` | `true` | 純文字複製 |
| `windowsCopyPaste.features.pastePlainText` | `true` | 純文字貼上 |
| `windowsCopyPaste.features.safePasteToTerminal` | `true` | 安全貼到終端機 |
| `windowsCopyPaste.features.terminalImagePaste` | `true` | 剪貼簿圖片 → 終端機路徑（Windows） |
| `windowsCopyPaste.showOnboarding` | `true` | 是否顯示第一次使用的說明 |
| `windowsCopyPaste.backupSettings` | `true` | 套用前是否備份 |
| `windowsCopyPaste.confirmMultiLineTerminalPaste` | `true` | 貼上多行到終端機前是否確認 |
| `windowsCopyPaste.multiLinePreviewMaxLines` | `5` | 確認時預覽的最大行數（1〜20） |
| `windowsCopyPaste.language` | `auto` | 顯示語言（`auto`/`ja`/`en`/`zh-cn`/`zh-tw`/`ko`/`es`/`fr`） |

執行已關閉功能的指令時，會提示如何重新開啟。

---

## 隱私權政策

這個擴充功能以使用者的隱私為最優先來設計。

- **完全不與外部伺服器通訊。**
- **不收集遙測資料（不傳送使用狀況）。**
- **不會對外傳送剪貼簿內容。**
- **不會永久保存剪貼簿歷程**（此版本本身沒有歷程功能）。
- 只變更 VS Code / Cursor 的設定，不會改變整個作業系統的剪貼簿行為。

## 做不到的事（此版本不支援）

- 把圖片貼**到編輯器**（圖片只支援以路徑形式輸入到終端機，且僅限 Windows）
- HTML、RTF、Excel 等非文字內容的複製貼上
- 在 macOS / Linux 上把圖片送到終端機（目前僅限 Windows）
- 剪貼簿歷程／雲端同步
- 改變整個作業系統的複製貼上行為
- AI 功能、授權認證、付費（**免費**，也不會對外傳送任何資料）

## 常見問題

**問：一般的 `Ctrl+C` / `Ctrl+V` 會不能用嗎？**
答：不會。標準快速鍵不會被覆寫。

**問：套用建議設定後，還能還原嗎？**
答：可以。執行「Restore Previous Settings」就能回到套用前的狀態（套用前會自動備份）。

**問：貼到終端機後會自動執行嗎？**
答：不會。只會貼上，不會按 Enter（執行）。多行時會先確認。

---

開發者資訊（建置、打包、檔案結構）請參閱[日文 README](README.md#開発者向け)。

## 授權

MIT License（請參閱 `LICENSE`）。
