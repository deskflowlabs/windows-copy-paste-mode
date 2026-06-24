/**
 * 推奨設定の適用前バックアップと復元。
 * ユーザーの既存設定を壊さないために、Apply 前に現在のグローバル設定値を保存する。
 * 復元できるよう、バックアップは初回適用時のみ保存し、以後は上書きしない。
 */
import * as vscode from "vscode";
import {
  CONFIG,
  EXTENSION_ID,
  GLOBAL_STATE_KEYS,
  RECOMMENDED_SETTINGS,
} from "../utils/constants";

/** 設定キー -> 適用前のグローバル値（undefined は「未設定＝既定値」を意味する）。 */
type SettingsBackup = Record<string, unknown>;

/** バックアップが既に存在するか。 */
export function hasBackup(context: vscode.ExtensionContext): boolean {
  return (
    context.globalState.get<SettingsBackup>(GLOBAL_STATE_KEYS.settingsBackup) !==
    undefined
  );
}

/**
 * 必要ならバックアップを作成する。
 * - 設定 windowsCopyPaste.backupSettings が false なら何もしない。
 * - 既にバックアップ済みなら上書きしない（初回のみ保存）。
 */
export async function backupIfNeeded(
  context: vscode.ExtensionContext
): Promise<void> {
  const enabled = vscode.workspace
    .getConfiguration(EXTENSION_ID)
    .get<boolean>(CONFIG.backupSettings, true);
  if (!enabled) {
    return;
  }
  if (hasBackup(context)) {
    return;
  }

  const config = vscode.workspace.getConfiguration();
  const backup: SettingsBackup = {};
  for (const key of Object.keys(RECOMMENDED_SETTINGS)) {
    // globalValue を保存。未設定なら undefined となり、復元時に既定へ戻せる。
    backup[key] = config.inspect(key)?.globalValue;
  }
  await context.globalState.update(GLOBAL_STATE_KEYS.settingsBackup, backup);
}

/**
 * バックアップした値へ復元する。
 * バックアップが無ければ false を返す。
 * 初期版ではバックアップは復元後も保持する（再度復元できるようにするため）。
 */
export async function restore(
  context: vscode.ExtensionContext
): Promise<boolean> {
  const backup = context.globalState.get<SettingsBackup>(
    GLOBAL_STATE_KEYS.settingsBackup
  );
  if (backup === undefined) {
    return false;
  }
  const config = vscode.workspace.getConfiguration();
  for (const [key, value] of Object.entries(backup)) {
    // value が undefined の場合は update(key, undefined) で既定値へ戻る。
    await config.update(key, value, vscode.ConfigurationTarget.Global);
  }
  return true;
}
