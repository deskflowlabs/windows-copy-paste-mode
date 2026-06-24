/**
 * クリップボード画像の保存サービス（Windows / PowerShell）。
 *
 * VS Code の clipboard API はテキストのみで画像を読めないため、
 * Windows では PowerShell の System.Windows.Forms.Clipboard.GetImage() で
 * 画像を取得し、指定パスへ PNG 保存する方式を採る。
 * ターミナルへ生の画像バイトは流せないので「保存 + パス挿入」が現実解。
 *
 * 外部送信は一切行わない（ローカル完結）。
 */
import { spawn } from "child_process";

/** 画像保存の結果種別。 */
export type SaveImageResult =
  | { kind: "saved"; path: string }
  | { kind: "noImage" }
  | { kind: "unsupportedOs" }
  | { kind: "error"; message: string };

/** 現在の OS が画像取得に対応しているか（Windows のみ）。 */
export function isImagePasteSupported(): boolean {
  return process.platform === "win32";
}

/**
 * クリップボードの画像を outPath へ PNG 保存する。
 * - 画像が無ければ noImage。
 * - Windows 以外は unsupportedOs。
 * - PowerShell 実行失敗は error。
 *
 * 注入を避けるため、保存先パスは引数ではなく環境変数(WCP_OUT)で PowerShell へ渡す。
 */
export async function saveClipboardImage(
  outPath: string
): Promise<SaveImageResult> {
  if (!isImagePasteSupported()) {
    return { kind: "unsupportedOs" };
  }

  // Clipboard.GetImage() は STA スレッドを要求するため -STA を付ける。
  // パスは $env:WCP_OUT 経由で渡し、コマンド文字列に直接埋め込まない。
  const script = [
    "$ErrorActionPreference='Stop'",
    "Add-Type -AssemblyName System.Windows.Forms",
    "Add-Type -AssemblyName System.Drawing",
    "$img=[System.Windows.Forms.Clipboard]::GetImage()",
    "if($null -eq $img){[Console]::Out.Write('NO_IMAGE');exit 0}",
    "$dir=Split-Path -Parent $env:WCP_OUT",
    "if(-not (Test-Path $dir)){New-Item -ItemType Directory -Force -Path $dir | Out-Null}",
    "$img.Save($env:WCP_OUT,[System.Drawing.Imaging.ImageFormat]::Png)",
    "$img.Dispose()",
    "[Console]::Out.Write('SAVED')",
  ].join(";");

  return new Promise<SaveImageResult>((resolve) => {
    const child = spawn(
      "powershell.exe",
      [
        "-NoProfile",
        "-NonInteractive",
        "-STA",
        "-ExecutionPolicy",
        "Bypass",
        "-Command",
        script,
      ],
      {
        env: { ...process.env, WCP_OUT: outPath },
        windowsHide: true,
      }
    );

    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (d) => (stdout += d.toString()));
    child.stderr.on("data", (d) => (stderr += d.toString()));

    child.on("error", (err) => {
      resolve({ kind: "error", message: err.message });
    });

    child.on("close", (code) => {
      const out = stdout.trim();
      if (out.includes("SAVED")) {
        resolve({ kind: "saved", path: outPath });
        return;
      }
      if (out.includes("NO_IMAGE")) {
        resolve({ kind: "noImage" });
        return;
      }
      const detail = stderr.trim() || out || `exit code ${code}`;
      resolve({ kind: "error", message: detail });
    });
  });
}
