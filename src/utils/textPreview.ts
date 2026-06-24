/**
 * テキストのプレビュー生成・複数行判定ユーティリティ。
 * ターミナルへの複数行貼り付け確認で使用する。
 */

export interface PreviewResult {
  /** 表示用に整形したプレビュー本文（最大 maxLines 行）。 */
  text: string;
  /** プレビューに含めなかった残り行数（0 なら全行表示済み）。 */
  hiddenLines: number;
}

/** 改行（\n / \r\n / \r）を含むかどうか。 */
export function isMultiLine(text: string): boolean {
  return /\r\n|\r|\n/.test(text);
}

/**
 * 先頭 maxLines 行のプレビューを作る。
 * 1 行が長すぎる場合は 200 文字で省略。maxLines は 1〜20 に丸める。
 */
export function buildPreview(text: string, maxLines: number): PreviewResult {
  const normalized = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const lines = normalized.split("\n");
  const max = Math.max(1, Math.min(Math.floor(maxLines), 20));
  const shown = lines
    .slice(0, max)
    .map((line) => (line.length > 200 ? `${line.slice(0, 200)}…` : line));
  const hiddenLines = Math.max(0, lines.length - max);
  return { text: shown.join("\n"), hiddenLines };
}
