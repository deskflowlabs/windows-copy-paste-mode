/**
 * Apply 前の設定値へ戻すコマンド。
 * バックアップが無ければその旨を通知する。
 */
import * as vscode from "vscode";
import { CONFIG } from "../utils/constants";
import { ensureEnabled } from "../utils/featureToggle";
import { getMessages } from "../utils/messages";
import { notify, errorMessage } from "../services/notificationService";
import { restore } from "../services/settingsBackupService";

export async function restorePreviousSettings(
  context: vscode.ExtensionContext
): Promise<void> {
  if (!(await ensureEnabled(CONFIG.featureSettings))) {
    return;
  }
  const msg = getMessages();
  try {
    const restored = await restore(context);
    if (!restored) {
      await notify.warn(msg.restoreNoBackup);
      return;
    }
    await notify.info(msg.restored);
  } catch (error) {
    await notify.error(msg.restoreFailed(errorMessage(error)));
  }
}
