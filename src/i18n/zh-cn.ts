/** 简体中文。 */
import type { Messages } from "../utils/messages";

export const zhCn: Messages = {
  applied:
    "已应用 Windows 风格的复制粘贴设置。VS Code / Cursor 的复制粘贴现在更接近普通 Windows 应用。",
  applyFailed: (reason) => `应用设置失败：${reason}`,
  restored: "已恢复之前的复制粘贴设置。",
  restoreNoBackup:
    "未找到之前的设置备份。请先运行“Apply Recommended Settings（应用推荐设置）”，即可创建用于恢复的备份。",
  restoreFailed: (reason) => `恢复设置失败：${reason}`,
  noActiveEditor: "没有活动的编辑器。请先打开一个文本编辑器再试。",
  selectTextToCopy: "请选择要复制的文本。",
  copiedPlain: "已将所选文本以纯文本（无格式）复制。",
  clipboardEmpty: "剪贴板中没有文本。",
  noTerminalCreate: "没有终端。要新建一个吗？",
  create: "新建",
  cancel: "取消",
  paste: "粘贴",
  cancelled: "已取消粘贴。",
  multiLineTerminalConfirmTitle:
    "即将向终端粘贴多行文本，其中可能包含会被执行的命令。确定要粘贴吗？",
  multiLineTerminalConfirmDetail: (preview) => `粘贴内容（预览）：\n${preview}`,
  moreLines: (n) => `…另有 ${n} 行`,
  masterDisabled:
    "Windows Copy Paste Mode 已停用。请启用设置 windowsCopyPaste.enabled。",
  featureDisabled: (configKey) =>
    `此功能已停用。启用设置 ${configKey} 后即可使用。`,
  onboardingPrompt:
    "要启用 Windows Copy Paste Mode 吗？它会让 VS Code / Cursor 的复制粘贴更接近普通 Windows 应用。",
  applyNow: "应用推荐设置",
  later: "稍后",
  seeDetails: "查看详情",
  imageUnsupportedOs:
    "图片粘贴目前仅支持 Windows。此操作系统无法使用 terminal-image-paste。",
  imageNoImage: "剪贴板中没有图片。请先复制截图等图片后再试。",
  imageSaveFailed: (reason) => `保存图片失败：${reason}`,
  imagePasted: (path) => `已保存图片，并将路径插入终端：${path}`,
  settingsPanelTitle: "Windows Copy Paste Mode 设置",
  settingsPanelHeading: "Windows Copy Paste Mode 设置",
  settingsPanelIntro:
    "可用开关逐项打开或关闭各功能。更改会立即保存，并与 settings.json 保持同步。",
  settingsMasterOffHint:
    "总开关已关闭，所有功能均不可用。打开上方的开关即可启用各项功能。",
  toggleOn: "开",
  toggleOff: "关",
  toggleLabels: {
    master: {
      title: "Windows Copy Paste Mode（总开关）",
      description: "整个扩展的开关。关闭后所有命令都将停用。",
    },
    terminalImagePaste: {
      title: "terminal-image-paste（图片→终端）",
      description: "保存剪贴板中的图片，并将其路径插入当前终端（Windows）。",
    },
    settings: {
      title: "应用／恢复推荐设置",
      description: "一键应用或恢复 Windows 风格复制粘贴设置的命令。",
    },
    copyPlainText: {
      title: "纯文本复制",
      description: "以无格式的纯文本复制所选内容。",
    },
    pastePlainText: {
      title: "纯文本粘贴",
      description: "以无格式方式粘贴剪贴板中的文本。",
    },
    safePasteToTerminal: {
      title: "安全粘贴到终端",
      description: "向终端粘贴多行内容前先确认（防止误执行）。",
    },
  },
};
