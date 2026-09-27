/**
 * UI メッセージ文字列の一元管理（7 言語対応: ja / en / zh-cn / zh-tw / ko / es / fr）。
 * 各言語の文字列は src/i18n/ に置き、ここでは型定義と言語の選択だけを行う。
 * 言語は設定 windowsCopyPaste.language で切替。auto は VS Code の表示言語に従う（対応外は英語）。
 */
import * as vscode from "vscode";
import { CONFIG, EXTENSION_ID } from "./constants";
import { asLang, mapLocale, Lang } from "./locale";
import { ja } from "../i18n/ja";
import { en } from "../i18n/en";
import { zhCn } from "../i18n/zh-cn";
import { zhTw } from "../i18n/zh-tw";
import { ko } from "../i18n/ko";
import { es } from "../i18n/es";
import { fr } from "../i18n/fr";

/** 現在の言語に応じた表示文字列の集合。 */
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

/** 言語ごとの文字列（すべての言語で Messages の全項目が必須）。 */
export const MESSAGES: Readonly<Record<Lang, Messages>> = {
  ja,
  en,
  "zh-cn": zhCn,
  "zh-tw": zhTw,
  ko,
  es,
  fr,
};

/** 設定と VS Code の表示言語から、使う言語を決める。 */
export function resolveLang(): Lang {
  const configured = vscode.workspace
    .getConfiguration(EXTENSION_ID)
    .get<string>(CONFIG.language, "auto");
  return asLang(configured) ?? mapLocale(vscode.env.language);
}

export function getMessages(): Messages {
  return MESSAGES[resolveLang()];
}
