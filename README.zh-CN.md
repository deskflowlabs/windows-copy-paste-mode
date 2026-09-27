# Windows Copy Paste Mode

🌐 [日本語](README.md) | [English](README.en.md) | **简体中文** | [繁體中文](README.zh-TW.md) | [한국어](README.ko.md) | [Español](README.es.md) | [Français](README.fr.md)

**让 VS Code / Cursor 的复制粘贴，用起来更像普通 Windows 应用的扩展。**
无需复杂设置，一键减少复制粘贴时的“别扭感”。

## 先做这三步

1. **安装**：打开扩展视图（`Ctrl+Shift+X`），搜索 **Windows Copy Paste Mode**，点击 **Install**
2. **开启推荐设置**：按 `Ctrl+Shift+P`，选择 **Windows Copy Paste Mode: Apply Recommended Settings（应用推荐设置）**
3. **随时可以还原**：想恢复时，同样按 `Ctrl+Shift+P`，选择 **Windows Copy Paste Mode: Restore Previous Settings（恢复之前的设置）**

---

## 能解决这些烦恼

- 什么都没选就按了 `Ctrl+C`，结果整行都被复制了
- 复制的文字带着颜色和格式，粘贴后排版乱了
- 往终端里粘贴时，担心命令会被自动执行
- Cursor / VS Code 的复制粘贴，和平时用的 Windows 应用感觉不一样

## 适合这些用户

- 刚开始使用 Cursor 的 Windows 用户
- 对 VS Code 复制粘贴行为感到别扭的新手
- 以 AI 开发、无代码／低代码为目的、非工程师背景的用户
- 还不熟悉终端操作的人

---

## 最简单的用法

### 使用 Cursor 时

1. 打开 Cursor。
2. 打开 **Extensions（扩展）** 视图。
   - 快捷键：`Ctrl+Shift+X`
3. 在搜索框中输入 **Windows Copy Paste Mode**。
4. 在 **Windows Copy Paste Mode** 上点击 **Install**。
5. 安装完成后，按 `Ctrl+Shift+P`。
6. 在上方出现的输入框中输入 `Apply Recommended`，
   选择 **Windows Copy Paste Mode: Apply Recommended Settings（应用推荐设置）**。

这样，Cursor 的复制粘贴就更接近普通的 Windows 应用了。

想还原时，按 `Ctrl+Shift+P`，选择
**Windows Copy Paste Mode: Restore Previous Settings（恢复之前的设置）**。
设置会回到使用推荐设置之前的状态。

### 使用 VS Code 时

1. 打开 VS Code。
2. 打开 **Extensions（扩展）** 视图。
   - 快捷键：`Ctrl+Shift+X`
3. 在搜索框中输入 **Windows Copy Paste Mode**。
4. 在 **Windows Copy Paste Mode** 上点击 **Install**。
5. 按 `Ctrl+Shift+P`，选择 **Windows Copy Paste Mode: Apply Recommended Settings（应用推荐设置）**。

还原方法与 Cursor 相同（选择 **Restore Previous Settings**）。

### 使用其他功能

按 `Ctrl+Shift+P` 并输入 `Windows Copy Paste Mode`，就会列出本扩展的所有功能。
各功能的说明见下方的“主要功能”。

### 搜索不到时（备用方法）

通常只需上面的步骤即可。只有在搜索不到时，才尝试以下方法。

1. 打开扩展页面。
   - Cursor：[Open VSX 上的 Windows Copy Paste Mode 页面](https://open-vsx.org/extension/deskflowlabs/windows-copy-paste-mode)
   - VS Code：[Visual Studio Marketplace 上的 Windows Copy Paste Mode 页面](https://marketplace.visualstudio.com/items?itemName=deskflowlabs.windows-copy-paste-mode)
2. 用页面上的下载按钮，保存以 `.vsix` 结尾的文件。
3. 在 Cursor / VS Code 中按 `Ctrl+Shift+P`。
4. 选择 **Extensions: Install from VSIX...**。
5. 选择刚才保存的 `.vsix` 文件。

---

## 主要功能

| 命令（在命令面板中搜索） | 作用 |
|---|---|
| **Windows Copy Paste Mode: Apply Recommended Settings** | 一次性应用 Windows 风格的推荐设置（应用前会自动备份）。 |
| **Windows Copy Paste Mode: Restore Previous Settings** | 恢复到应用推荐设置之前的状态。 |
| **Windows Copy Paste Mode: Copy as Plain Text** | 以无格式的纯文本复制所选文字。 |
| **Windows Copy Paste Mode: Paste as Plain Text** | 以无格式方式粘贴剪贴板中的文字。 |
| **Windows Copy Paste Mode: Safe Paste to Terminal** | 粘贴到终端。多行时会先确认（不会自动执行）。 |
| **Windows Copy Paste Mode: Paste Image to Terminal** | 保存剪贴板中的图片，并把保存路径输入到当前终端（仅限 Windows）。 |
| **Windows Copy Paste Mode: Open Settings** | 打开带开关的设置面板，可逐项开启／关闭各功能。 |

### 键盘快捷键（默认）

- `Ctrl+Alt+C` … 纯文本复制（焦点在编辑器时）
- `Ctrl+Alt+V` … 纯文本粘贴（焦点在编辑器时）
- `Ctrl+Alt+Shift+V` … 安全粘贴到终端（焦点在终端时）
- `Ctrl+Alt+Shift+I` … 保存剪贴板图片并把路径输入到终端（Windows）

> **不会覆盖**普通的 `Ctrl+C` / `Ctrl+V`，原来的操作照常可用。

### 显示语言

消息、命令名和设置说明支持 7 种语言：日语、英语、简体中文、繁体中文、韩语、西班牙语、法语。
默认跟随 Cursor / VS Code 的显示语言（不支持的语言显示为英语）。
如需手动指定，请修改设置 `windowsCopyPaste.language`。
（该设置改变的是通知和设置面板的文字。命令名和设置说明始终跟随 Cursor / VS Code 本身的显示语言。）

---

## 把图片发送到终端（terminal-image-paste）※仅限 Windows

把截图等图片复制到剪贴板后，按 `Ctrl+Alt+Shift+I`（或在命令面板中运行 **Paste Image to Terminal**），扩展会：

1. 把图片保存为 PNG（默认保存在扩展的存储文件夹，文件名为 `shot-YYYYMMDD-HHmmss.png`），
2. 并把**保存路径自动输入到当前终端**（不会按 Enter）。

这样就能像往 ChatGPT 里贴图一样，把图片交给 Claude Code 等通过路径接收图片的 CLI。

- 用 `PrintScreen`、`Win+Shift+S` 或截图工具（Snipping Tool）截的图都可以使用。
- **支持的系统**：目前**仅限 Windows**。在 macOS / Linux 上该功能会停用并给出提示。
- 剪贴板中没有图片时，会给出清楚的提示。

| 设置 | 默认值 | 说明 |
|---|---|---|
| `windowsCopyPaste.features.terminalImagePaste` | `true` | 功能开关 |
| `windowsCopyPaste.terminalImagePaste.saveDirectory` | `""` | 保存文件夹（留空则为扩展的 globalStorage/images） |
| `windowsCopyPaste.terminalImagePaste.fileNamePattern` | `shot-YYYYMMDD-HHmmss.png` | 文件名格式（替换日期时间） |
| `windowsCopyPaste.terminalImagePaste.appendTrailingSpace` | `true` | 在输入的路径后加一个空格 |

---

## 带开关的设置面板

运行 **Open Settings** 命令，会打开可用开关逐项开启／关闭各功能的设置面板。
更改会立即保存，并与 `settings.json` 双向同步。

---

## 应用的设置（Apply Recommended Settings）

运行“应用推荐设置”后，以下 4 项会写入用户设置（全局）：

| 设置 | 值 | 效果 |
|---|---|---|
| `editor.emptySelectionClipboard` | `false` | 未选择任何内容时按 `Ctrl+C` 不再复制整行 |
| `editor.copyWithSyntaxHighlighting` | `false` | 复制时不带颜色和格式（更接近纯文本） |
| `terminal.integrated.copyOnSelection` | `true` | 在终端中选中即复制 |
| `terminal.integrated.rightClickBehavior` | `copyPaste` | 在终端中右键即复制／粘贴 |

- 应用**前**会自动备份当前设置（仅首次）。
- 如需**还原**，请运行“Restore Previous Settings”。

---

## 功能的开启／关闭

所有功能都可以单独开启或关闭（在设置界面中搜索“Windows Copy Paste Mode”）。

| 设置 | 默认值 | 说明 |
|---|---|---|
| `windowsCopyPaste.enabled` | `true` | 总开关。关闭后所有功能停用。 |
| `windowsCopyPaste.features.settings` | `true` | 应用／恢复推荐设置 |
| `windowsCopyPaste.features.copyPlainText` | `true` | 纯文本复制 |
| `windowsCopyPaste.features.pastePlainText` | `true` | 纯文本粘贴 |
| `windowsCopyPaste.features.safePasteToTerminal` | `true` | 安全粘贴到终端 |
| `windowsCopyPaste.features.terminalImagePaste` | `true` | 剪贴板图片 → 终端路径（Windows） |
| `windowsCopyPaste.showOnboarding` | `true` | 是否显示首次使用引导 |
| `windowsCopyPaste.backupSettings` | `true` | 应用前是否备份 |
| `windowsCopyPaste.confirmMultiLineTerminalPaste` | `true` | 向终端粘贴多行前是否确认 |
| `windowsCopyPaste.multiLinePreviewMaxLines` | `5` | 确认时预览的最大行数（1〜20） |
| `windowsCopyPaste.language` | `auto` | 显示语言（`auto`/`ja`/`en`/`zh-cn`/`zh-tw`/`ko`/`es`/`fr`） |

运行已关闭功能的命令时，会提示如何重新开启。

---

## 隐私政策

本扩展以用户隐私为最优先进行设计。

- **完全不与外部服务器通信。**
- **不收集遥测数据（不发送使用情况）。**
- **不会向外发送剪贴板内容。**
- **不会永久保存剪贴板历史**（本版本本身没有历史功能）。
- 只修改 VS Code / Cursor 的设置，不改变整个操作系统的剪贴板行为。

## 做不到的事（本版本不支持）

- 把图片粘贴**到编辑器**（图片只支持以路径形式输入到终端，且仅限 Windows）
- HTML、RTF、Excel 等非文本内容的复制粘贴
- 在 macOS / Linux 上把图片发送到终端（目前仅限 Windows）
- 剪贴板历史／云同步
- 改变整个操作系统的复制粘贴行为
- AI 功能、许可证认证、付费（**免费**，也不会向外发送任何数据）

## 常见问题

**问：普通的 `Ctrl+C` / `Ctrl+V` 会不能用吗？**
答：不会。标准快捷键不会被覆盖。

**问：应用推荐设置后，还能还原吗？**
答：可以。运行“Restore Previous Settings”即可恢复到应用前的状态（应用前会自动备份）。

**问：粘贴到终端后会自动执行吗？**
答：不会。只粘贴，不会按 Enter（执行）。多行时会先确认。

---

开发者信息（构建、打包、文件结构）请参阅[日语 README](README.md#開発者向け)。

## 许可证

MIT License（参见 `LICENSE`）。
