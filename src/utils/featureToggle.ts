/**
 * 機能のオン/オフ判定。
 * マスタートグル（windowsCopyPaste.enabled）と機能ごとのトグルを確認し、
 * 無効ならユーザーへ理由を通知する。
 */
import * as vscode from "vscode";
import { CONFIG, EXTENSION_ID } from "./constants";
import { getMessages } from "./messages";
import { notify } from "../services/notificationService";

/** マスタートグルが有効か。 */
export function isMasterEnabled(): boolean {
  return vscode.workspace
    .getConfiguration(EXTENSION_ID)
    .get<boolean>(CONFIG.enabled, true);
}

/** 指定した機能トグルが有効か（マスターは見ない）。 */
export function isFeatureEnabled(featureConfigKey: string): boolean {
  return vscode.workspace
    .getConfiguration(EXTENSION_ID)
    .get<boolean>(featureConfigKey, true);
}

/**
 * 機能が使えるか確認する。
 * マスターまたは機能トグルが無効なら通知して false を返す。
 * コマンドの先頭で `if (!(await ensureEnabled(CONFIG.featureXxx))) return;` の形で使う。
 */
export async function ensureEnabled(featureConfigKey: string): Promise<boolean> {
  const msg = getMessages();
  if (!isMasterEnabled()) {
    await notify.info(msg.masterDisabled);
    return false;
  }
  if (!isFeatureEnabled(featureConfigKey)) {
    await notify.info(msg.featureDisabled(`${EXTENSION_ID}.${featureConfigKey}`));
    return false;
  }
  return true;
}
