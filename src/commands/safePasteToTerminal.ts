/**
 * ターミナルへの安全な貼り付けコマンド。
 * 複数行の場合は貼り付け前に確認ダイアログを出す。単一行はそのまま貼り付ける。
 * sendText の第2引数は false（勝手に Enter で実行しない）。
 */
import * as vscode from "vscode";
import { CONFIG, EXTENSION_ID } from "../utils/constants";
import { ensureEnabled } from "../utils/featureToggle";
import { getMessages } from "../utils/messages";
import { notify, errorMessage } from "../services/notificationService";
import { readClipboard } from "../services/clipboardService";
import { buildPreview, isMultiLine } from "../utils/textPreview";

export async function safePasteToTerminal(): Promise<void> {
  if (!(await ensureEnabled(CONFIG.featureSafePasteToTerminal))) {
    return;
  }
  const msg = getMessages();
  try {
    const text = await readClipboard();
    if (!text) {
      await notify.info(msg.clipboardEmpty);
      return;
    }

    // ターミナルが無ければ作成するか確認
    let terminal = vscode.window.activeTerminal;
    if (!terminal) {
      const choice = await vscode.window.showWarningMessage(
        msg.noTerminalCreate,
        msg.create,
        msg.cancel
      );
      if (choice !== msg.create) {
        return;
      }
      terminal = vscode.window.createTerminal();
    }

    const config = vscode.workspace.getConfiguration(EXTENSION_ID);
    const confirm = config.get<boolean>(
      CONFIG.confirmMultiLineTerminalPaste,
      true
    );

    if (confirm && isMultiLine(text)) {
      const maxLines = config.get<number>(CONFIG.multiLinePreviewMaxLines, 5);
      const preview = buildPreview(text, maxLines);
      const detailBody =
        preview.hiddenLines > 0
          ? `${preview.text}\n${msg.moreLines(preview.hiddenLines)}`
          : preview.text;
      // モーダルにすると Cancel が自動追加されるため、確認ボタンのみ渡す。
      const choice = await vscode.window.showWarningMessage(
        msg.multiLineTerminalConfirmTitle,
        { modal: true, detail: msg.multiLineTerminalConfirmDetail(detailBody) },
        msg.paste
      );
      if (choice !== msg.paste) {
        await notify.info(msg.cancelled);
        return;
      }
    }

    terminal.show();
    // 第2引数 false: 自動で改行（Enter）を送らない。安全のため実行はユーザーに委ねる。
    terminal.sendText(text, false);
  } catch (error) {
    await notify.error(errorMessage(error));
  }
}
