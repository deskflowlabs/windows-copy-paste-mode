# Changelog

このプロジェクトの主な変更点を記録します。

## [0.2.0] - 2026-06-24

### Added

- **terminal-image-paste（画像→ターミナル）**: クリップボードの画像（スクリーンショット等）を PNG 保存し、
  保存パスをアクティブな統合ターミナルへ自動挿入する新コマンド
  `Windows Copy Paste Mode: Paste Image to Terminal`（既定キー `Ctrl+Alt+Shift+I`）。
  Claude Code 等の CLI に画像パスを渡しやすくします。**Windows 専用**（PowerShell の
  `System.Windows.Forms.Clipboard.GetImage()` で取得・保存）。末尾は Enter を送らず実行はユーザーに委ねます。
  - 設定: `features.terminalImagePaste`（オン/オフ）／`terminalImagePaste.saveDirectory`（保存先）／
    `terminalImagePaste.fileNamePattern`（既定 `shot-YYYYMMDD-HHmmss.png`）／
    `terminalImagePaste.appendTrailingSpace`（末尾スペース付与）。
- **スイッチ式設定UI**: 新コマンド `Windows Copy Paste Mode: Open Settings` で開く Webview パネル。
  CSS トグルスイッチでマスター・各機能（terminal-image-paste 含む）の ON/OFF を切り替え、
  `settings.json` と双方向同期します。未対応 OS では画像機能のスイッチを無効表示にします。

### Notes

- 既存 0.1.0 のコマンド・設定・キーバインドは後方互換（変更なし）。
- 外部通信・テレメトリなし。保存画像は指定フォルダ（既定は拡張の globalStorage）にのみ保存し、外部送信しません。

## [0.1.0] - 2026-06-17

### Added（MVP 初回リリース）

- おすすめ設定の適用コマンド（`Apply Recommended Settings`）。適用前に設定をバックアップ（初回のみ）。
- 設定の復元コマンド（`Restore Previous Settings`）。
- 書式なしコピー（`Copy as Plain Text`）。
- プレーンテキスト貼り付け（`Paste as Plain Text`）。
- ターミナルへの安全な貼り付け（`Safe Paste to Terminal`）。複数行は確認ダイアログ。
- 初回オンボーディング案内。
- 各機能のオン/オフ設定（マスタースイッチ＋機能ごとのトグル）。
- ja/en の表示言語切替（`auto`/`ja`/`en`）。

### Privacy

- 外部通信・テレメトリ・行動追跡なし。クリップボード内容や履歴を永続保存しない。
