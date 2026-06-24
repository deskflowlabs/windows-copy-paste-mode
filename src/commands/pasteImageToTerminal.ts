/**
 * クリップボード画像を保存し、保存パスをアクティブな統合ターミナルへ挿入するコマンド。
 *
 * 流れ（機能有効・Windows のみ）:
 *   1. クリップボード画像を PowerShell で PNG 保存（imageClipboardService）
 *   2. アクティブターミナル（無ければ確認のうえ作成）へ保存パスを sendText
 *
 * Claude Code 等の CLI に画像パスを渡しやすくするのが目的。
 * 末尾の改行（Enter）は送らない＝実行はユーザーに委ねる（安全側）。
 */
import * as vscode from "vscode";
import { CONFIG, EXTENSION_ID, IMAGE_PASTE_DEFAULTS } from "../utils/constants";
import { ensureEnabled } from "../utils/featureToggle";
import { getMessages } from "../utils/messages";
import { notify, errorMessage } from "../services/notificationService";
import { formatFileName } from "../utils/imageNaming";
import {
  isImagePasteSupported,
  saveClipboardImage,
} from "../services/imageClipboardService";

export async function pasteImageToTerminal(
  context: vscode.ExtensionContext
): Promise<void> {
  if (!(await ensureEnabled(CONFIG.featureTerminalImagePaste))) {
    return;
  }
  const msg = getMessages();

  if (!isImagePasteSupported()) {
    await notify.warn(msg.imageUnsupportedOs);
    return;
  }

  try {
    const config = vscode.workspace.getConfiguration(EXTENSION_ID);

    // 保存先ディレクトリ: 設定が空なら globalStorage/images を使う。
    const configuredDir = config
      .get<string>(CONFIG.imageSaveDirectory, IMAGE_PASTE_DEFAULTS.saveDirectory)
      .trim();
    const saveDir = configuredDir
      ? vscode.Uri.file(configuredDir)
      : vscode.Uri.joinPath(context.globalStorageUri, "images");

    // ファイル名: 日時トークンを置換。
    const pattern = config.get<string>(
      CONFIG.imageFileNamePattern,
      IMAGE_PASTE_DEFAULTS.fileNamePattern
    );
    const fileName = formatFileName(pattern, new Date());
    const outUri = vscode.Uri.joinPath(saveDir, fileName);

    // 先にターミナルを用意（画像保存に成功してから show する）。
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

    const result = await saveClipboardImage(outUri.fsPath);

    if (result.kind === "noImage") {
      await notify.info(msg.imageNoImage);
      return;
    }
    if (result.kind === "unsupportedOs") {
      await notify.warn(msg.imageUnsupportedOs);
      return;
    }
    if (result.kind === "error") {
      await notify.error(msg.imageSaveFailed(result.message));
      return;
    }

    // 保存成功: パスをターミナルへ挿入。
    const appendSpace = config.get<boolean>(
      CONFIG.imageAppendTrailingSpace,
      IMAGE_PASTE_DEFAULTS.appendTrailingSpace
    );
    const insertText = appendSpace ? `${result.path} ` : result.path;
    terminal.show();
    // 第2引数 false: 自動で Enter を送らない。
    terminal.sendText(insertText, false);
    await notify.info(msg.imagePasted(result.path));
  } catch (error) {
    await notify.error(msg.imageSaveFailed(errorMessage(error)));
  }
}
