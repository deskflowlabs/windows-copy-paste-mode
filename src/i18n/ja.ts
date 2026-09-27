/** 日本語。 */
import type { Messages } from "../utils/messages";

export const ja: Messages = {
  applied:
    "Windows 風コピー＆ペースト設定を適用しました。VS Code / Cursor のコピペ挙動を Windows アプリに近づけました。",
  applyFailed: (reason) => `設定の適用に失敗しました: ${reason}`,
  restored: "以前のコピー＆ペースト設定に戻しました。",
  restoreNoBackup:
    "以前の設定バックアップが見つかりませんでした。先に「おすすめ設定を適用」を実行すると、復元用のバックアップが作成されます。",
  restoreFailed: (reason) => `設定の復元に失敗しました: ${reason}`,
  noActiveEditor:
    "アクティブなエディタがありません。テキストエディタを開いてからお試しください。",
  selectTextToCopy: "コピーするテキストを選択してください。",
  copiedPlain: "選択したテキストを書式なし（プレーンテキスト）でコピーしました。",
  clipboardEmpty: "クリップボードにテキストがありません。",
  noTerminalCreate: "ターミナルがありません。新規作成しますか？",
  create: "作成する",
  cancel: "キャンセル",
  paste: "貼り付ける",
  cancelled: "貼り付けをキャンセルしました。",
  multiLineTerminalConfirmTitle:
    "複数行のテキストをターミナルに貼り付けようとしています。実行コマンドが含まれる可能性があります。貼り付けますか？",
  multiLineTerminalConfirmDetail: (preview) =>
    `貼り付ける内容（プレビュー）:\n${preview}`,
  moreLines: (n) => `…ほか ${n} 行`,
  masterDisabled:
    "Windows Copy Paste Mode は無効になっています。設定 windowsCopyPaste.enabled を有効にしてください。",
  featureDisabled: (configKey) =>
    `この機能は無効です。設定 ${configKey} を有効にすると使えます。`,
  onboardingPrompt:
    "Windows Copy Paste Mode を有効にしますか？ VS Code / Cursor のコピー＆ペースト設定を Windows アプリに近づけます。",
  applyNow: "おすすめ設定を適用",
  later: "あとで",
  seeDetails: "詳細を見る",
  imageUnsupportedOs:
    "画像の貼り付けは現在 Windows のみ対応しています。この OS では terminal-image-paste は利用できません。",
  imageNoImage:
    "クリップボードに画像がありません。スクリーンショットなどをコピーしてからお試しください。",
  imageSaveFailed: (reason) => `画像の保存に失敗しました: ${reason}`,
  imagePasted: (path) =>
    `画像を保存し、パスをターミナルに挿入しました: ${path}`,
  settingsPanelTitle: "Windows Copy Paste Mode 設定",
  settingsPanelHeading: "Windows Copy Paste Mode 設定",
  settingsPanelIntro:
    "各機能のオン/オフをスイッチで切り替えられます。変更は即座に保存され、settings.json とも同期します。",
  settingsMasterOffHint:
    "マスタースイッチがオフのため、各機能は無効です。上のスイッチをオンにすると個別機能が有効になります。",
  toggleOn: "オン",
  toggleOff: "オフ",
  toggleLabels: {
    master: {
      title: "Windows Copy Paste Mode（マスター）",
      description:
        "拡張機能全体のオン/オフ。オフにするとすべてのコマンドが無効になります。",
    },
    terminalImagePaste: {
      title: "terminal-image-paste（画像→ターミナル）",
      description:
        "クリップボードの画像を保存し、保存パスをアクティブなターミナルへ挿入します（Windows）。",
    },
    settings: {
      title: "おすすめ設定の適用／復元",
      description: "Windows 風のコピペ設定をまとめて適用・復元するコマンド。",
    },
    copyPlainText: {
      title: "書式なしコピー",
      description: "選択テキストを書式なし（プレーンテキスト）でコピーします。",
    },
    pastePlainText: {
      title: "プレーンテキスト貼り付け",
      description: "クリップボードのテキストを書式なしで貼り付けます。",
    },
    safePasteToTerminal: {
      title: "ターミナルへの安全な貼り付け",
      description:
        "複数行はターミナルへ貼り付ける前に確認します（誤実行を防止）。",
    },
  },
};
