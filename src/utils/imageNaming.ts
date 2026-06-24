/**
 * 画像保存ファイル名の生成（純粋関数）。
 * terminal-image-paste で使う。日時トークンを置換し、安全な拡張子を保証する。
 * 副作用を持たないためユニットテストしやすい。
 */

/** 2桁ゼロ埋め。 */
function pad2(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

/**
 * パターン内の日時トークンを date の値で置換する。
 * 対応トークン: YYYY(年) MM(月) DD(日) HH(時) mm(分) ss(秒)。
 * 長いトークンから先に置換するため、誤置換は起きない。
 */
export function formatFileName(pattern: string, date: Date): string {
  const tokens: Array<[string, string]> = [
    ["YYYY", String(date.getFullYear())],
    ["MM", pad2(date.getMonth() + 1)],
    ["DD", pad2(date.getDate())],
    ["HH", pad2(date.getHours())],
    ["mm", pad2(date.getMinutes())],
    ["ss", pad2(date.getSeconds())],
  ];
  let result = pattern;
  for (const [token, value] of tokens) {
    result = result.split(token).join(value);
  }
  return ensurePngExtension(sanitizeFileName(result));
}

/** ファイル名に使えない文字（Windows 予約文字）をアンダースコアへ置換する。 */
export function sanitizeFileName(name: string): string {
  // パス区切りや予約文字を除去。前後の空白・ドットも整理する。
  const cleaned = name.replace(/[\\/:*?"<>|\r\n\t]/g, "_").trim();
  const trimmed = cleaned.replace(/^\.+/, "").replace(/\.+$/, (m) =>
    // 拡張子ドットは残したいので、ここでは末尾ドットのみ畳む（後段で .png を保証）
    m.length > 0 ? "" : m
  );
  return trimmed.length > 0 ? trimmed : "shot";
}

/** 末尾が画像拡張子でなければ .png を付ける。 */
export function ensurePngExtension(name: string): string {
  return /\.(png|jpg|jpeg|bmp|gif)$/i.test(name) ? name : `${name}.png`;
}
