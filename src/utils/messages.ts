/**
 * UI メッセージ文字列の一元管理（ja/en 両対応）。
 * 将来の i18n に備え、すべての表示文字列をここに集約する。
 * 言語は設定 windowsCopyPaste.language（auto/ja/en）で切替。auto は VS Code の表示言語に従う。
 */
import * as vscode from "vscode";
import { CONFIG, EXTENSION_ID } from "./constants";

type Lang = "ja" | "en";

function resolveLang(): Lang {
  const configured = vscode.workspace
    .getConfiguration(EXTENSION_ID)
    .get<string>(CONFIG.language, "auto");
  if (configured === "ja" || configured === "en") {
    return configured;
  }
  return vscode.env.language.toLowerCase().startsWith("ja") ? "ja" : "en";
}

/** 現在の言語に応じた表示文字列の集合を返す。 */
export interface Messages {
  // 設定適用 / 復元
  applied: string;
  applyFailed: (reason: string) => string;
  restored: string;
  restoreNoBackup: string;
  restoreFailed: (reason: string) => string;
  // プレーンコピー / 貼り付け
  noActiveEditor: string;
  selectTextToCopy: string;
  copiedPlain: string;
  clipboardEmpty: string;
  // ターミナル安全貼り付け
  noTerminalCreate: string;
  create: string;
  cancel: string;
  paste: string;
  cancelled: string;
  multiLineTerminalConfirmTitle: string;
  multiLineTerminalConfirmDetail: (preview: string) => string;
  moreLines: (n: number) => string;
  // 機能トグル
  masterDisabled: string;
  featureDisabled: (configKey: string) => string;
  // オンボーディング
  onboardingPrompt: string;
  applyNow: string;
  later: string;
  seeDetails: string;
  // terminal-image-paste
  imageUnsupportedOs: string;
  imageNoImage: string;
  imageSaveFailed: (reason: string) => string;
  imagePasted: (path: string) => string;
  // 設定パネル（Webview）
  settingsPanelTitle: string;
  settingsPanelHeading: string;
  settingsPanelIntro: string;
  settingsMasterOffHint: string;
  toggleOn: string;
  toggleOff: string;
  toggleLabels: Record<
    | "master"
    | "terminalImagePaste"
    | "settings"
    | "copyPlainText"
    | "pastePlainText"
    | "safePasteToTerminal",
    { title: string; description: string }
  >;
}

export function getMessages(): Messages {
  const lang = resolveLang();
  const pick = <T>(ja: T, en: T): T => (lang === "ja" ? ja : en);

  return {
    applied: pick(
      "Windows 風コピー＆ペースト設定を適用しました。VS Code / Cursor のコピペ挙動を Windows アプリに近づけました。",
      "Applied Windows-style copy & paste settings. Copy/paste now behaves more like a regular Windows app."
    ),
    applyFailed: (reason) =>
      pick(
        `設定の適用に失敗しました: ${reason}`,
        `Failed to apply settings: ${reason}`
      ),
    restored: pick(
      "以前のコピー＆ペースト設定に戻しました。",
      "Restored your previous copy & paste settings."
    ),
    restoreNoBackup: pick(
      "以前の設定バックアップが見つかりませんでした。先に「おすすめ設定を適用」を実行すると、復元用のバックアップが作成されます。",
      "No previous settings backup was found. Run \"Apply Recommended Settings\" first to create a backup you can restore."
    ),
    restoreFailed: (reason) =>
      pick(
        `設定の復元に失敗しました: ${reason}`,
        `Failed to restore settings: ${reason}`
      ),
    noActiveEditor: pick(
      "アクティブなエディタがありません。テキストエディタを開いてからお試しください。",
      "No active editor. Open a text editor and try again."
    ),
    selectTextToCopy: pick(
      "コピーするテキストを選択してください。",
      "Please select the text you want to copy."
    ),
    copiedPlain: pick(
      "選択したテキストを書式なし（プレーンテキスト）でコピーしました。",
      "Copied the selection as plain text."
    ),
    clipboardEmpty: pick(
      "クリップボードにテキストがありません。",
      "The clipboard has no text."
    ),
    noTerminalCreate: pick(
      "ターミナルがありません。新規作成しますか？",
      "There is no terminal. Create a new one?"
    ),
    create: pick("作成する", "Create"),
    cancel: pick("キャンセル", "Cancel"),
    paste: pick("貼り付ける", "Paste"),
    cancelled: pick("貼り付けをキャンセルしました。", "Paste cancelled."),
    multiLineTerminalConfirmTitle: pick(
      "複数行のテキストをターミナルに貼り付けようとしています。実行コマンドが含まれる可能性があります。貼り付けますか？",
      "You are about to paste multiple lines into the terminal. It may contain commands to run. Paste it?"
    ),
    multiLineTerminalConfirmDetail: (preview) =>
      pick(`貼り付ける内容（プレビュー）:\n${preview}`, `Preview:\n${preview}`),
    moreLines: (n) => pick(`…ほか ${n} 行`, `…and ${n} more line(s)`),
    masterDisabled: pick(
      "Windows Copy Paste Mode は無効になっています。設定 windowsCopyPaste.enabled を有効にしてください。",
      "Windows Copy Paste Mode is disabled. Enable the setting windowsCopyPaste.enabled."
    ),
    featureDisabled: (configKey) =>
      pick(
        `この機能は無効です。設定 ${configKey} を有効にすると使えます。`,
        `This feature is disabled. Enable the setting ${configKey} to use it.`
      ),
    onboardingPrompt: pick(
      "Windows Copy Paste Mode を有効にしますか？ VS Code / Cursor のコピー＆ペースト設定を Windows アプリに近づけます。",
      "Enable Windows Copy Paste Mode? It makes VS Code / Cursor copy & paste feel more like a regular Windows app."
    ),
    applyNow: pick("おすすめ設定を適用", "Apply recommended settings"),
    later: pick("あとで", "Later"),
    seeDetails: pick("詳細を見る", "See details"),
    imageUnsupportedOs: pick(
      "画像の貼り付けは現在 Windows のみ対応しています。この OS では terminal-image-paste は利用できません。",
      "Image paste currently supports Windows only. terminal-image-paste is unavailable on this OS."
    ),
    imageNoImage: pick(
      "クリップボードに画像がありません。スクリーンショットなどをコピーしてからお試しください。",
      "No image found on the clipboard. Copy a screenshot (or other image) and try again."
    ),
    imageSaveFailed: (reason) =>
      pick(
        `画像の保存に失敗しました: ${reason}`,
        `Failed to save the image: ${reason}`
      ),
    imagePasted: (path) =>
      pick(
        `画像を保存し、パスをターミナルに挿入しました: ${path}`,
        `Saved the image and inserted its path into the terminal: ${path}`
      ),
    settingsPanelTitle: pick(
      "Windows Copy Paste Mode 設定",
      "Windows Copy Paste Mode Settings"
    ),
    settingsPanelHeading: pick(
      "Windows Copy Paste Mode 設定",
      "Windows Copy Paste Mode Settings"
    ),
    settingsPanelIntro: pick(
      "各機能のオン/オフをスイッチで切り替えられます。変更は即座に保存され、settings.json とも同期します。",
      "Toggle each feature on or off with the switches. Changes are saved instantly and stay in sync with settings.json."
    ),
    settingsMasterOffHint: pick(
      "マスタースイッチがオフのため、各機能は無効です。上のスイッチをオンにすると個別機能が有効になります。",
      "The master switch is off, so all features are disabled. Turn it on to enable individual features."
    ),
    toggleOn: pick("オン", "ON"),
    toggleOff: pick("オフ", "OFF"),
    toggleLabels: {
      master: {
        title: pick(
          "Windows Copy Paste Mode（マスター）",
          "Windows Copy Paste Mode (master)"
        ),
        description: pick(
          "拡張機能全体のオン/オフ。オフにするとすべてのコマンドが無効になります。",
          "Master switch for the whole extension. Turning it off disables every command."
        ),
      },
      terminalImagePaste: {
        title: pick("terminal-image-paste（画像→ターミナル）", "terminal-image-paste"),
        description: pick(
          "クリップボードの画像を保存し、保存パスをアクティブなターミナルへ挿入します（Windows）。",
          "Save the clipboard image and insert its path into the active terminal (Windows)."
        ),
      },
      settings: {
        title: pick("おすすめ設定の適用／復元", "Apply / restore recommended settings"),
        description: pick(
          "Windows 風のコピペ設定をまとめて適用・復元するコマンド。",
          "Commands to apply and restore Windows-style copy & paste settings."
        ),
      },
      copyPlainText: {
        title: pick("書式なしコピー", "Copy as plain text"),
        description: pick(
          "選択テキストを書式なし（プレーンテキスト）でコピーします。",
          "Copy the selection without formatting (plain text)."
        ),
      },
      pastePlainText: {
        title: pick("プレーンテキスト貼り付け", "Paste as plain text"),
        description: pick(
          "クリップボードのテキストを書式なしで貼り付けます。",
          "Paste clipboard text without formatting."
        ),
      },
      safePasteToTerminal: {
        title: pick("ターミナルへの安全な貼り付け", "Safe paste to terminal"),
        description: pick(
          "複数行はターミナルへ貼り付ける前に確認します（誤実行を防止）。",
          "Confirm before pasting multiple lines into the terminal (prevents accidental runs)."
        ),
      },
    },
  };
}
