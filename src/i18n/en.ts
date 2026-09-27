/** English. */
import type { Messages } from "../utils/messages";

export const en: Messages = {
  applied:
    "Applied Windows-style copy & paste settings. Copy/paste now behaves more like a regular Windows app.",
  applyFailed: (reason) => `Failed to apply settings: ${reason}`,
  restored: "Restored your previous copy & paste settings.",
  restoreNoBackup:
    'No previous settings backup was found. Run "Apply Recommended Settings" first to create a backup you can restore.',
  restoreFailed: (reason) => `Failed to restore settings: ${reason}`,
  noActiveEditor: "No active editor. Open a text editor and try again.",
  selectTextToCopy: "Please select the text you want to copy.",
  copiedPlain: "Copied the selection as plain text.",
  clipboardEmpty: "The clipboard has no text.",
  noTerminalCreate: "There is no terminal. Create a new one?",
  create: "Create",
  cancel: "Cancel",
  paste: "Paste",
  cancelled: "Paste cancelled.",
  multiLineTerminalConfirmTitle:
    "You are about to paste multiple lines into the terminal. It may contain commands to run. Paste it?",
  multiLineTerminalConfirmDetail: (preview) => `Preview:\n${preview}`,
  moreLines: (n) => `…and ${n} more line(s)`,
  masterDisabled:
    "Windows Copy Paste Mode is disabled. Enable the setting windowsCopyPaste.enabled.",
  featureDisabled: (configKey) =>
    `This feature is disabled. Enable the setting ${configKey} to use it.`,
  onboardingPrompt:
    "Enable Windows Copy Paste Mode? It makes VS Code / Cursor copy & paste feel more like a regular Windows app.",
  applyNow: "Apply recommended settings",
  later: "Later",
  seeDetails: "See details",
  imageUnsupportedOs:
    "Image paste currently supports Windows only. terminal-image-paste is unavailable on this OS.",
  imageNoImage:
    "No image found on the clipboard. Copy a screenshot (or other image) and try again.",
  imageSaveFailed: (reason) => `Failed to save the image: ${reason}`,
  imagePasted: (path) =>
    `Saved the image and inserted its path into the terminal: ${path}`,
  settingsPanelTitle: "Windows Copy Paste Mode Settings",
  settingsPanelHeading: "Windows Copy Paste Mode Settings",
  settingsPanelIntro:
    "Toggle each feature on or off with the switches. Changes are saved instantly and stay in sync with settings.json.",
  settingsMasterOffHint:
    "The master switch is off, so all features are disabled. Turn it on to enable individual features.",
  toggleOn: "ON",
  toggleOff: "OFF",
  toggleLabels: {
    master: {
      title: "Windows Copy Paste Mode (master)",
      description:
        "Master switch for the whole extension. Turning it off disables every command.",
    },
    terminalImagePaste: {
      title: "terminal-image-paste",
      description:
        "Save the clipboard image and insert its path into the active terminal (Windows).",
    },
    settings: {
      title: "Apply / restore recommended settings",
      description:
        "Commands to apply and restore Windows-style copy & paste settings.",
    },
    copyPlainText: {
      title: "Copy as plain text",
      description: "Copy the selection without formatting (plain text).",
    },
    pastePlainText: {
      title: "Paste as plain text",
      description: "Paste clipboard text without formatting.",
    },
    safePasteToTerminal: {
      title: "Safe paste to terminal",
      description:
        "Confirm before pasting multiple lines into the terminal (prevents accidental runs).",
    },
  },
};
