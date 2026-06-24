/**
 * 拡張機能全体で使う定数の一元管理。
 * コマンドID・設定キー・推奨設定・グローバル状態キーをここにまとめる。
 */

/** 設定（configuration）の名前空間。package.json の contributes.configuration と一致させる。 */
export const EXTENSION_ID = "windowsCopyPaste";

/** コマンドID。package.json の contributes.commands と一致させる。 */
export const COMMANDS = {
  applyRecommendedSettings: "windowsCopyPaste.applyRecommendedSettings",
  restorePreviousSettings: "windowsCopyPaste.restorePreviousSettings",
  copyPlainText: "windowsCopyPaste.copyPlainText",
  pastePlainText: "windowsCopyPaste.pastePlainText",
  safePasteToTerminal: "windowsCopyPaste.safePasteToTerminal",
  pasteImageToTerminal: "windowsCopyPaste.pasteImageToTerminal",
  openSettings: "windowsCopyPaste.openSettings",
} as const;

/**
 * 設定キー（EXTENSION_ID 名前空間からの相対）。
 * getConfiguration(EXTENSION_ID).get(<ここの値>) で読む。
 */
export const CONFIG = {
  /** マスタートグル。false なら全機能を無効化。 */
  enabled: "enabled",
  showOnboarding: "showOnboarding",
  backupSettings: "backupSettings",
  confirmMultiLineTerminalPaste: "confirmMultiLineTerminalPaste",
  multiLinePreviewMaxLines: "multiLinePreviewMaxLines",
  language: "language",
  // 機能ごとのオン/オフ
  featureSettings: "features.settings",
  featureCopyPlainText: "features.copyPlainText",
  featurePastePlainText: "features.pastePlainText",
  featureSafePasteToTerminal: "features.safePasteToTerminal",
  featureTerminalImagePaste: "features.terminalImagePaste",
  // terminal-image-paste の挙動設定
  imageSaveDirectory: "terminalImagePaste.saveDirectory",
  imageFileNamePattern: "terminalImagePaste.fileNamePattern",
  imageAppendTrailingSpace: "terminalImagePaste.appendTrailingSpace",
} as const;

/** terminal-image-paste の既定値。package.json の default と一致させる。 */
export const IMAGE_PASTE_DEFAULTS = {
  /** 空文字なら globalStorage を使う。 */
  saveDirectory: "",
  /** ファイル名パターン。YYYY/MM/DD/HH/mm/ss を日時に置換する。 */
  fileNamePattern: "shot-YYYYMMDD-HHmmss.png",
  /** 挿入パスの末尾に半角スペースを付けるか。 */
  appendTrailingSpace: true,
} as const;

/**
 * Apply コマンドで適用する Windows 風推奨設定。
 * キーは VS Code のグローバル設定名（名前空間なしのフルキー）。
 */
export const RECOMMENDED_SETTINGS: Readonly<Record<string, unknown>> = {
  "editor.emptySelectionClipboard": false,
  "editor.copyWithSyntaxHighlighting": false,
  "terminal.integrated.copyOnSelection": true,
  "terminal.integrated.rightClickBehavior": "copyPaste",
};

/** context.globalState に保存するキー。 */
export const GLOBAL_STATE_KEYS = {
  /** Apply 前の設定値バックアップ（初回適用時のみ保存）。 */
  settingsBackup: "windowsCopyPaste.settingsBackup",
  /** オンボーディング表示済みフラグ。 */
  onboardingShown: "windowsCopyPaste.onboardingShown",
} as const;
