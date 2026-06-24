/**
 * 最小限のテスト雛形。
 * VS Code 拡張テスト（@vscode/test-electron + Mocha）を導入したら、ここに動作確認テストを追加する。
 * 現状は純粋関数（textPreview）の例のみ。実行環境の整備は README「テスト」を参照。
 */
import * as assert from "assert";
import { buildPreview, isMultiLine } from "../src/utils/textPreview";
import {
  formatFileName,
  sanitizeFileName,
  ensurePngExtension,
} from "../src/utils/imageNaming";

suite("textPreview", () => {
  test("isMultiLine: 単一行は false", () => {
    assert.strictEqual(isMultiLine("hello"), false);
  });

  test("isMultiLine: \\n を含むと true", () => {
    assert.strictEqual(isMultiLine("a\nb"), true);
  });

  test("buildPreview: maxLines を超えた行は hiddenLines に数える", () => {
    const result = buildPreview("1\n2\n3\n4", 2);
    assert.strictEqual(result.text, "1\n2");
    assert.strictEqual(result.hiddenLines, 2);
  });

  test("buildPreview: maxLines は 1〜20 に丸められる", () => {
    const result = buildPreview("1\n2\n3", 0);
    assert.strictEqual(result.hiddenLines, 2);
  });
});

suite("imageNaming", () => {
  // 固定日時: 2026-06-24 09:05:07
  const date = new Date(2026, 5, 24, 9, 5, 7);

  test("formatFileName: 日時トークンを置換し .png を保つ", () => {
    assert.strictEqual(
      formatFileName("shot-YYYYMMDD-HHmmss.png", date),
      "shot-20260624-090507.png"
    );
  });

  test("formatFileName: 拡張子が無ければ .png を付与", () => {
    assert.strictEqual(
      formatFileName("img-YYYY-MM-DD", date),
      "img-2026-06-24.png"
    );
  });

  test("formatFileName: jpg 拡張子はそのまま保持", () => {
    assert.strictEqual(formatFileName("a-HHmmss.jpg", date), "a-090507.jpg");
  });

  test("sanitizeFileName: 予約文字をアンダースコアへ", () => {
    assert.strictEqual(sanitizeFileName('a/b:c*?.png'), "a_b_c__.png");
  });

  test("sanitizeFileName: 空になれば shot を返す", () => {
    assert.strictEqual(sanitizeFileName("   "), "shot");
  });

  test("ensurePngExtension: 既に画像拡張子なら変更しない", () => {
    assert.strictEqual(ensurePngExtension("x.bmp"), "x.bmp");
    assert.strictEqual(ensurePngExtension("x"), "x.png");
  });
});
