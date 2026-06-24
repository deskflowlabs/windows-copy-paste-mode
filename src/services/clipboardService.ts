/**
 * クリップボード／選択テキストの取得・書き込み。
 * VS Code 標準 API（vscode.env.clipboard）のみを使用し、テキストのみを扱う。
 * クリップボード内容は永続保存しない（プライバシー配慮）。
 */
import * as vscode from "vscode";

export async function writeClipboard(text: string): Promise<void> {
  await vscode.env.clipboard.writeText(text);
}

export async function readClipboard(): Promise<string> {
  return vscode.env.clipboard.readText();
}

/**
 * エディタの選択テキストを取得する。
 * 複数選択は document 上の出現順に並べ替えて改行で結合する。
 * 空選択しかない場合は null を返す。
 */
export function getSelectedText(editor: vscode.TextEditor): string | null {
  const nonEmpty = editor.selections
    .filter((selection) => !selection.isEmpty)
    .slice()
    .sort((a, b) => a.start.compareTo(b.start));
  if (nonEmpty.length === 0) {
    return null;
  }
  return nonEmpty
    .map((selection) => editor.document.getText(selection))
    .join("\n");
}
