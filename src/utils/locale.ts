/**
 * 表示言語の判定（vscode に依存しない純粋関数。テスト用に分離）。
 */

/** 対応している表示言語。 */
export const SUPPORTED_LANGS = [
  "ja",
  "en",
  "zh-cn",
  "zh-tw",
  "ko",
  "es",
  "fr",
] as const;

export type Lang = (typeof SUPPORTED_LANGS)[number];

/** 設定値が対応言語そのものなら返す（"auto" や未知の値は undefined）。 */
export function asLang(value: string | undefined): Lang | undefined {
  const v = (value ?? "").toLowerCase();
  return (SUPPORTED_LANGS as readonly string[]).includes(v)
    ? (v as Lang)
    : undefined;
}

/**
 * VS Code の表示言語（vscode.env.language。例: "ja", "zh-cn", "zh-tw", "pt-br"）を対応言語へ丸める。
 * 中国語は繁体字圏（台湾・香港・マカオ・Hant）を zh-tw、それ以外を zh-cn とする。
 * 対応外の言語は英語。
 */
export function mapLocale(locale: string | undefined): Lang {
  const l = (locale ?? "").toLowerCase().replace(/_/g, "-");
  if (l.startsWith("zh")) {
    return /^zh-(tw|hk|mo|hant)/.test(l) ? "zh-tw" : "zh-cn";
  }
  for (const lang of ["ja", "ko", "es", "fr"] as const) {
    if (l === lang || l.startsWith(`${lang}-`)) {
      return lang;
    }
  }
  return "en";
}
