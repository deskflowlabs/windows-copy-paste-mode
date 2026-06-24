/**
 * 通知の薄いラッパ。表示方法を一箇所に集約しておく。
 */
import * as vscode from "vscode";

export const notify = {
  info: (message: string): Thenable<string | undefined> =>
    vscode.window.showInformationMessage(message),
  warn: (message: string): Thenable<string | undefined> =>
    vscode.window.showWarningMessage(message),
  error: (message: string): Thenable<string | undefined> =>
    vscode.window.showErrorMessage(message),
};

/** unknown な例外から安全にメッセージ文字列を取り出す。 */
export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
