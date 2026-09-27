# Changelog

このプロジェクトの主な変更点を記録します。

## [0.3.0] - 2026-09-27

### Added

- **7 か国語対応**: 日本語・英語・中国語（簡体字）・中国語（繁体字）・韓国語・スペイン語・フランス語。
  - 通知・確認ダイアログ・設定パネルのメッセージを 7 言語に翻訳。
  - コマンド名と設定画面の説明文も各言語で表示（`package.nls.*.json`）。コマンド名は英語名を先頭に残すため、
    英語名（例: Apply Recommended Settings）でもコマンドパレットから検索できます。
  - 設定 `windowsCopyPaste.language` の選択肢に `zh-cn` / `zh-tw` / `ko` / `es` / `fr` を追加。
    `auto`（既定）は Cursor / VS Code の表示言語に従い、対応外の言語は英語で表示します。
  - README を 7 言語で用意（冒頭の言語リンクから切り替え）。
- 機能・コマンド ID・設定キー・キーボードショートカットは変更なし。

## [0.2.1] - 2026-09-26

### Changed

- README の使い方を初心者向けに書き直しました（ドキュメントのみの変更。機能・コマンド・設定は変更なし）。
  - 冒頭に「まずやること（3ステップ）」を追加。
  - インストールは「拡張機能の画面で検索 → Install」を基本手順にし、`.vsix` からのインストールは
    「検索で見つからない場合」の予備手順に変更。

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
