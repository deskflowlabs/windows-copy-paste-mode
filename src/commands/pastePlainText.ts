/**
 * クリップボードのテキストをプレーンテキストとして貼り付けるコマンド。
 * 選択中は置換、複数カーソル対応。非テキストは扱わない。
 */
import * as vscode from "vscode";
import { CONFIG } from "../utils/constants";
import { ensureEnabled } from "../utils/featureToggle";
import { getMessages } from "../utils/messages";
import { notify, errorMessage } from "../services/notificationService";
import { readClipboard } from "../services/clipboardService";

export async function pastePlainText(): Promise<void> {
  if (!(await ensureEnabled(CONFIG.featurePastePlainText))) {
    return;
  }
  const msg = getMessages();
  try {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      await notify.info(msg.noActiveEditor);
      return;
    }
    const text = await readClipboard();
    if (!text) {
      await notify.info(msg.clipboardEmpty);
      return;
    }
    await editor.edit((editBuilder) => {
      for (const selection of editor.selections) {
        if (selection.isEmpty) {
          editBuilder.insert(selection.active, text);
        } else {
          editBuilder.replace(selection, text);
        }
      }
    });
  } catch (error) {
    await notify.error(errorMessage(error));
  }
}
