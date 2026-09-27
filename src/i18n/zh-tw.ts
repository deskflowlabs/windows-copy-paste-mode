/** 繁體中文。 */
import type { Messages } from "../utils/messages";

export const zhTw: Messages = {
  applied:
    "已套用 Windows 風格的複製貼上設定。VS Code / Cursor 的複製貼上現在更接近一般的 Windows 應用程式。",
  applyFailed: (reason) => `套用設定失敗：${reason}`,
  restored: "已還原先前的複製貼上設定。",
  restoreNoBackup:
    "找不到先前的設定備份。請先執行「Apply Recommended Settings（套用建議設定）」，即可建立用於還原的備份。",
  restoreFailed: (reason) => `還原設定失敗：${reason}`,
  noActiveEditor: "沒有使用中的編輯器。請先開啟文字編輯器再試一次。",
  selectTextToCopy: "請選取要複製的文字。",
  copiedPlain: "已將選取的文字以純文字（無格式）複製。",
  clipboardEmpty: "剪貼簿中沒有文字。",
  noTerminalCreate: "沒有終端機。要建立新的終端機嗎？",
  create: "建立",
  cancel: "取消",
  paste: "貼上",
  cancelled: "已取消貼上。",
  multiLineTerminalConfirmTitle:
    "即將把多行文字貼到終端機，其中可能包含會被執行的指令。確定要貼上嗎？",
  multiLineTerminalConfirmDetail: (preview) => `貼上內容（預覽）：\n${preview}`,
  moreLines: (n) => `…還有 ${n} 行`,
  masterDisabled:
    "Windows Copy Paste Mode 已停用。請啟用設定 windowsCopyPaste.enabled。",
  featureDisabled: (configKey) =>
    `此功能已停用。啟用設定 ${configKey} 後即可使用。`,
  onboardingPrompt:
    "要啟用 Windows Copy Paste Mode 嗎？它會讓 VS Code / Cursor 的複製貼上更接近一般的 Windows 應用程式。",
  applyNow: "套用建議設定",
  later: "稍後",
  seeDetails: "查看詳細資訊",
  imageUnsupportedOs:
    "圖片貼上目前僅支援 Windows。此作業系統無法使用 terminal-image-paste。",
  imageNoImage: "剪貼簿中沒有圖片。請先複製螢幕擷取畫面等圖片後再試一次。",
  imageSaveFailed: (reason) => `儲存圖片失敗：${reason}`,
  imagePasted: (path) => `已儲存圖片，並將路徑插入終端機：${path}`,
  settingsPanelTitle: "Windows Copy Paste Mode 設定",
  settingsPanelHeading: "Windows Copy Paste Mode 設定",
  settingsPanelIntro:
    "可用開關逐項開啟或關閉各項功能。變更會立即儲存，並與 settings.json 保持同步。",
  settingsMasterOffHint:
    "總開關已關閉，所有功能皆無法使用。開啟上方的開關即可啟用各項功能。",
  toggleOn: "開",
  toggleOff: "關",
  toggleLabels: {
    master: {
      title: "Windows Copy Paste Mode（總開關）",
      description: "整個擴充功能的開關。關閉後所有指令都會停用。",
    },
    terminalImagePaste: {
      title: "terminal-image-paste（圖片→終端機）",
      description: "儲存剪貼簿中的圖片，並將其路徑插入目前的終端機（Windows）。",
    },
    settings: {
      title: "套用／還原建議設定",
      description: "一次套用或還原 Windows 風格複製貼上設定的指令。",
    },
    copyPlainText: {
      title: "純文字複製",
      description: "以無格式的純文字複製選取的內容。",
    },
    pastePlainText: {
      title: "純文字貼上",
      description: "以無格式方式貼上剪貼簿中的文字。",
    },
    safePasteToTerminal: {
      title: "安全貼到終端機",
      description: "將多行內容貼到終端機前先確認（防止誤執行）。",
    },
  },
};
