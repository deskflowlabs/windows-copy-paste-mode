/**
 * Windows 風おすすめ設定を適用するコマンド。
 * 適用前にバックアップ（初回のみ）し、グローバル設定を更新する。
 */
import * as vscode from "vscode";
import { CONFIG, RECOMMENDED_SETTINGS } from "../utils/constants";
import { ensureEnabled } from "../utils/featureToggle";
import { getMessages } from "../utils/messages";
import { notify, errorMessage } from "../services/notificationService";
import { backupIfNeeded } from "../services/settingsBackupService";

export async function applyRecommendedSettings(
  context: vscode.ExtensionContext
): Promise<void> {
  if (!(await ensureEnabled(CONFIG.featureSettings))) {
    return;
  }
  const msg = getMessages();
  try {
    await backupIfNeeded(context);
    const config = vscode.workspace.getConfiguration();
    for (const [key, value] of Object.entries(RECOMMENDED_SETTINGS)) {
      await config.update(key, value, vscode.ConfigurationTarget.Global);
    }
    await notify.info(msg.applied);
  } catch (error) {
    await notify.error(msg.applyFailed(errorMessage(error)));
  }
}
