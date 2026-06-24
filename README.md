# Windows Copy Paste Mode

**VS Code / Cursor のコピー＆ペーストを、Windows の普通のアプリに近い感覚にする拡張機能です。**
むずかしい設定はいりません。ワンクリックでコピペの「違和感」を減らせます。

> この拡張の価値は「高機能なクリップボード管理」ではありません。
> **「VS Code / Cursor のコピペの違和感を、初心者でもワンクリックで減らせること」** が価値です。

---

## こんな悩みを解決します

- 何も選択せずに `Ctrl+C` したら、思っていない行までコピーされた
- コピーした文字に色や書式がついてきて、貼り付け先で崩れた
- ターミナルにコピペしたら、勝手にコマンドが実行されてしまいそうで怖い
- Cursor / VS Code のコピペが、いつも使う Windows アプリと感覚が違う

## 対象ユーザー

- Cursor を使い始めたばかりの Windows ユーザー
- VS Code のコピペ挙動に違和感がある初心者
- AI 開発・ノーコード／ローコード目的の非エンジニア寄りのユーザー
- ターミナル操作に慣れていない方

---

## 主な機能

| コマンド（コマンドパレットで検索） | 何をするか |
|---|---|
| **Windows Copy Paste Mode: Apply Recommended Settings** | Windows 風のおすすめ設定をまとめて適用します（適用前に自動バックアップ）。 |
| **Windows Copy Paste Mode: Restore Previous Settings** | おすすめ設定を適用する前の状態に戻します。 |
| **Windows Copy Paste Mode: Copy as Plain Text** | 選択したテキストを書式なし（プレーンテキスト）でコピーします。 |
| **Windows Copy Paste Mode: Paste as Plain Text** | クリップボードのテキストを書式なしで貼り付けます。 |
| **Windows Copy Paste Mode: Safe Paste to Terminal** | ターミナルへの貼り付け。複数行のときは貼り付け前に確認します（自動実行しません）。 |
| **Windows Copy Paste Mode: Paste Image to Terminal** | クリップボードの画像を保存し、保存パスをアクティブなターミナルへ挿入します（Windows 専用）。 |
| **Windows Copy Paste Mode: Open Settings** | スイッチ式の設定パネル（Webview）を開き、各機能を ON/OFF できます。 |

### キーボードショートカット（初期設定）

- `Ctrl+Alt+C` … 書式なしコピー（エディタにフォーカス時）
- `Ctrl+Alt+V` … プレーンテキスト貼り付け（エディタにフォーカス時）
- `Ctrl+Alt+Shift+V` … ターミナルへ安全に貼り付け（ターミナルにフォーカス時）
- `Ctrl+Alt+Shift+I` … クリップボード画像を保存してターミナルへパス挿入（Windows）

> 通常の `Ctrl+C` / `Ctrl+V` は**上書きしません**。今までの操作はそのまま使えます。

---

## 画像をターミナルへ（terminal-image-paste）※Windows 専用

スクリーンショットなどをクリップボードにコピーした状態で `Ctrl+Alt+Shift+I`（または
コマンドパレットの **Paste Image to Terminal**）を実行すると、

1. 画像を PNG として保存し（既定は拡張の保存フォルダ、ファイル名 `shot-YYYYMMDD-HHmmss.png`）、
2. その**保存パスをアクティブなターミナルへ自動入力**します（Enter は送りません）。

Claude Code など、画像をパスで受け取る CLI に「ChatGPT に貼る感覚」で画像を渡せます。

- **仕組み**: VS Code のクリップボード API はテキストのみを扱えるため、Windows では PowerShell の
  `System.Windows.Forms.Clipboard.GetImage()` で画像を取得・保存し、そのパスを挿入します。
- **対応 OS**: 現在は **Windows のみ**。mac/Linux では機能を無効化し、その旨を案内します。
- 画像がクリップボードに無いときは分かりやすく通知します。

| 設定 | 既定 | 説明 |
|---|---|---|
| `windowsCopyPaste.features.terminalImagePaste` | `true` | 機能のオン/オフ |
| `windowsCopyPaste.terminalImagePaste.saveDirectory` | `""` | 保存先フォルダ（空なら拡張の globalStorage/images） |
| `windowsCopyPaste.terminalImagePaste.fileNamePattern` | `shot-YYYYMMDD-HHmmss.png` | ファイル名パターン（日時トークン置換） |
| `windowsCopyPaste.terminalImagePaste.appendTrailingSpace` | `true` | 挿入パス末尾に半角スペースを付ける |

---

## スイッチ式の設定パネル

**Open Settings** コマンドを実行すると、トグルスイッチで各機能を ON/OFF できる設定パネルが開きます。
スイッチの変更は即座に保存され、`settings.json` とも双方向に同期します（どちらで変えても整合します）。

---

## 適用される設定（Apply Recommended Settings）

「おすすめ設定を適用」を実行すると、次の 4 つがユーザー設定（グローバル）に書き込まれます。

| 設定 | 値 | 効果 |
|---|---|---|
| `editor.emptySelectionClipboard` | `false` | 何も選択していないときに `Ctrl+C` しても行全体をコピーしない |
| `editor.copyWithSyntaxHighlighting` | `false` | コピー時に色・書式をつけない（プレーンに近づける） |
| `terminal.integrated.copyOnSelection` | `true` | ターミナルで選択しただけでコピーされる |
| `terminal.integrated.rightClickBehavior` | `copyPaste` | ターミナルの右クリックでコピー＆ペースト |

- 適用**前**に現在の設定を自動でバックアップします（初回のみ）。
- **元に戻す**には「Restore Previous Settings」を実行してください。

---

## 機能のオン/オフ

すべての機能は設定で個別にオン/オフできます（設定 UI で「Windows Copy Paste Mode」を検索）。

| 設定 | 既定 | 説明 |
|---|---|---|
| `windowsCopyPaste.enabled` | `true` | マスタースイッチ。オフで全機能無効。 |
| `windowsCopyPaste.features.settings` | `true` | おすすめ設定の適用／復元 |
| `windowsCopyPaste.features.copyPlainText` | `true` | 書式なしコピー |
| `windowsCopyPaste.features.pastePlainText` | `true` | プレーンテキスト貼り付け |
| `windowsCopyPaste.features.safePasteToTerminal` | `true` | ターミナルへの安全な貼り付け |
| `windowsCopyPaste.features.terminalImagePaste` | `true` | クリップボード画像→ターミナルへパス挿入（Windows） |
| `windowsCopyPaste.showOnboarding` | `true` | 初回案内を表示するか |
| `windowsCopyPaste.backupSettings` | `true` | 適用前にバックアップするか |
| `windowsCopyPaste.confirmMultiLineTerminalPaste` | `true` | ターミナル複数行貼り付け前に確認するか |
| `windowsCopyPaste.multiLinePreviewMaxLines` | `5` | 確認時のプレビュー最大行数（1〜20） |
| `windowsCopyPaste.language` | `auto` | 表示言語（`auto`/`ja`/`en`） |

無効にした機能のコマンドを実行すると、「有効化の方法」を案内します。

---

## 使い方

1. コマンドパレットを開く（`Ctrl+Shift+P`）。
2. `Windows Copy Paste Mode` と入力すると、各コマンドが出てきます。
3. まずは **Apply Recommended Settings** を試すのがおすすめです。
4. 元に戻したくなったら **Restore Previous Settings** を実行します。

## Cursor での使い方

Cursor は VS Code 互換のため、同じように使えます。

1. Cursor の拡張機能ビューを開く。
2. 右上の「…」メニュー →「Install from VSIX...」で本拡張の `.vsix` を選択。
3. 再読み込み後、コマンドパレットから各コマンドを実行できます。

---

## プライバシーポリシー

この拡張は、利用者のプライバシーを最優先に設計しています。

- **外部サーバーへ一切通信しません。**
- **テレメトリ（利用状況の送信）を行いません。**
- **クリップボードの内容を外部送信しません。**
- **クリップボードの履歴を永続保存しません**（このバージョンには履歴機能自体がありません）。
- 変更するのは VS Code / Cursor の設定値のみで、OS 全体のクリップボード挙動は変えません。

## できないこと（このバージョンの非対応）

- 画像を**エディタへ**貼り付けること（画像は「ターミナルへパス挿入」のみ対応・Windows）
- HTML・RTF・Excel など、テキスト以外のコピー＆ペースト
- mac/Linux での画像→ターミナル（現在は Windows 専用）
- クリップボード履歴／クラウド同期
- OS 全体のコピペ挙動の変更
- AI 連携・ライセンス認証・課金（**無料**で、外部送信もありません）

## FAQ

**Q. 通常の `Ctrl+C` / `Ctrl+V` は使えなくなりますか？**
A. いいえ。標準のショートカットは上書きしません。

**Q. おすすめ設定を適用したら、元に戻せますか？**
A. はい。「Restore Previous Settings」で適用前の状態に戻せます（適用前に自動バックアップ）。

**Q. ターミナルに貼り付けたら勝手に実行されますか？**
A. いいえ。貼り付けるだけで、Enter（実行）は送りません。複数行のときは事前に確認します。

---

## 開発者向け

### ビルド

```bash
npm install
npm run compile      # tsc で out/ にコンパイル
```

### VSIX のパッケージ化

```bash
npm install                   # 初回のみ（devDependencies に @vscode/vsce 同梱）
npm run package               # windows-copy-paste-mode-0.2.0.vsix が生成される
```

### 配布（無料公開）

本拡張は**無料配布**（ライセンス認証・課金コードなし）です。公開手順は文書化のみで、実際の publish は
人間が行います。

- **Open VSX**: `npx ovsx publish windows-copy-paste-mode-0.2.0.vsix -p <TOKEN>`（Cursor 向けに推奨）
- **VS Code Marketplace**: `vsce publish`（要 publisher アカウント・Personal Access Token）
- どちらも `package.json` の `publisher` / `repository` 等を実値へ更新してから実施してください
  （現状 `REPLACE_ME` のプレースホルダ）。

### テスト

- 純粋関数（`imageNaming` / `textPreview`）は `test/extension.test.ts` に Mocha 形式のテストがあります。
- ランナー未整備のため、コンパイル後に検証スクリプトでも確認できます:
  `npm run compile && node ../scripts/verify_image_naming.js`
- VS Code 統合テストを動かす場合は `@vscode/test-electron` と Mocha を追加してください（未同梱）。

### ファイル構成

```
windows-copy-paste-mode/
  src/
    extension.ts            … エントリ（コマンド登録・オンボーディング）
    commands/               … 各コマンドの処理（画像→ターミナル含む）
    panels/                 … スイッチ式設定パネル（Webview）
    services/               … 設定バックアップ／クリップボード／画像保存(PowerShell)／通知
    utils/                  … 定数・メッセージ(ja/en)・プレビュー・機能トグル・画像ファイル名
  test/                     … テスト雛形（純粋関数）
  package.json              … commands / configuration / keybindings
```

## ライセンス

MIT License（`LICENSE` 参照）。
