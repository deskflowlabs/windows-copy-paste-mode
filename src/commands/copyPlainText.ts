/**
 * 選択テキストを書式なし（プレーンテキスト）でコピーするコマンド。
 * 選択が無ければ何もせず通知する。複数選択は改行で結合。
 */
import * as vscode from "vscode";
import { CONFIG } from "../utils/constants";
import { ensureEnabled } from "../utils/featureToggle";
import { getMessages } from "../utils/messages";
import { notify, errorMessage } from "../services/notificationService";
import { getSelectedText, writeClipboard } from "../services/clipboardService";

export async function copyPlainText(): Promise<void> {
  if (!(await ensureEnabled(CONFIG.featureCopyPlainText))) {
    return;
  }
  const msg = getMessages();
  try {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      await notify.info(msg.noActiveEditor);
      return;
    }
    const text = getSelectedText(editor);
    if (text === null) {
      await notify.info(msg.selectTextToCopy);
      return;
    }
    await writeClipboard(text);
    await notify.info(msg.copiedPlain);
  } catch (error) {
    await notify.error(errorMessage(error));
  }
}
