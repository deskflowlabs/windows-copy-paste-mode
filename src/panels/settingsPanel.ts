/**
 * スイッチ式設定パネル（Webview）。
 *
 * CSS トグルスイッチで各機能の ON/OFF を切り替え、
 * workspace.getConfiguration('windowsCopyPaste') と双方向同期する。
 *   - スイッチ操作 → config.update(Global) で保存
 *   - settings.json 側の変更 → onDidChangeConfiguration で Webview へ反映
 *
 * ネイティブの VS Code 設定（boolean）はそのまま残し、本パネルはその上位の
 * 分かりやすい UI として提供する。外部送信やテレメトリは行わない。
 */
import * as vscode from "vscode";
import { CONFIG, EXTENSION_ID } from "../utils/constants";
import { getMessages } from "../utils/messages";
import { isImagePasteSupported } from "../services/imageClipboardService";

/** パネルに並べるトグル項目の定義（設定キーは EXTENSION_ID 相対）。 */
interface ToggleDef {
  configKey: string;
  /** ラベル/説明を messages から引くための識別子。 */
  id:
    | "master"
    | "terminalImagePaste"
    | "settings"
    | "copyPlainText"
    | "pastePlainText"
    | "safePasteToTerminal";
}

const TOGGLES: ToggleDef[] = [
  { id: "master", configKey: CONFIG.enabled },
  { id: "terminalImagePaste", configKey: CONFIG.featureTerminalImagePaste },
  { id: "settings", configKey: CONFIG.featureSettings },
  { id: "copyPlainText", configKey: CONFIG.featureCopyPlainText },
  { id: "pastePlainText", configKey: CONFIG.featurePastePlainText },
  { id: "safePasteToTerminal", configKey: CONFIG.featureSafePasteToTerminal },
];

let currentPanel: vscode.WebviewPanel | undefined;
let disposables: vscode.Disposable[] = [];

/** 設定パネルを開く（既に開いていれば前面に出す）。 */
export function openSettingsPanel(_context: vscode.ExtensionContext): void {
  const column = vscode.window.activeTextEditor?.viewColumn;
  if (currentPanel) {
    currentPanel.reveal(column);
    return;
  }

  const panel = vscode.window.createWebviewPanel(
    "windowsCopyPasteSettings",
    getMessages().settingsPanelTitle,
    column ?? vscode.ViewColumn.One,
    { enableScripts: true, retainContextWhenHidden: true }
  );
  currentPanel = panel;

  panel.webview.html = renderHtml();

  // Webview からのメッセージ。
  panel.webview.onDidReceiveMessage(
    async (message: { type: string; key?: string; value?: boolean }) => {
      if (message.type === "ready") {
        postState(panel);
        return;
      }
      if (message.type === "setToggle" && typeof message.key === "string") {
        await vscode.workspace
          .getConfiguration(EXTENSION_ID)
          .update(message.key, !!message.value, vscode.ConfigurationTarget.Global);
        // 反映後の状態を返して整合させる。
        postState(panel);
      }
    },
    undefined,
    disposables
  );

  // settings.json 側の変更も Webview へ反映（双方向同期）。
  vscode.workspace.onDidChangeConfiguration(
    (e) => {
      if (e.affectsConfiguration(EXTENSION_ID)) {
        postState(panel);
      }
    },
    undefined,
    disposables
  );

  panel.onDidDispose(
    () => {
      currentPanel = undefined;
      disposables.forEach((d) => d.dispose());
      disposables = [];
    },
    undefined,
    disposables
  );
}

/** 現在の設定値とラベルを Webview へ送る。 */
function postState(panel: vscode.WebviewPanel): void {
  const config = vscode.workspace.getConfiguration(EXTENSION_ID);
  const msg = getMessages();
  const imageSupported = isImagePasteSupported();

  const items = TOGGLES.map((t) => {
    const label = msg.toggleLabels[t.id];
    return {
      key: t.configKey,
      title: label.title,
      description: label.description,
      value: config.get<boolean>(t.configKey, true),
      // 未対応OSでは image paste トグルを無効表示にする。
      unavailable: t.id === "terminalImagePaste" && !imageSupported,
      unavailableNote: t.id === "terminalImagePaste" ? msg.imageUnsupportedOs : "",
      isMaster: t.id === "master",
    };
  });

  void panel.webview.postMessage({
    type: "state",
    items,
    strings: {
      heading: msg.settingsPanelHeading,
      intro: msg.settingsPanelIntro,
      on: msg.toggleOn,
      off: msg.toggleOff,
      masterOffHint: msg.settingsMasterOffHint,
    },
  });
}

/** Webview の HTML。状態はメッセージ経由で受け取り描画する。 */
function renderHtml(): string {
  const nonce = makeNonce();
  const csp = [
    "default-src 'none'",
    `style-src 'nonce-${nonce}'`,
    `script-src 'nonce-${nonce}'`,
  ].join("; ");

  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8" />
<meta http-equiv="Content-Security-Policy" content="${csp}" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style nonce="${nonce}">
  :root { color-scheme: light dark; }
  body {
    font-family: var(--vscode-font-family);
    color: var(--vscode-foreground);
    background: var(--vscode-editor-background);
    padding: 20px 24px;
    font-size: 13px;
  }
  h1 { font-size: 18px; margin: 0 0 4px; }
  .intro { color: var(--vscode-descriptionForeground); margin: 0 0 20px; }
  .row {
    display: flex; align-items: center; justify-content: space-between;
    gap: 16px; padding: 14px 0;
    border-top: 1px solid var(--vscode-panel-border, rgba(128,128,128,.25));
  }
  .row.master { border-top: none; }
  .meta { max-width: 70%; }
  .title { font-weight: 600; }
  .desc { color: var(--vscode-descriptionForeground); margin-top: 2px; }
  .note { color: var(--vscode-errorForeground); margin-top: 4px; font-size: 12px; }
  .right { display: flex; align-items: center; gap: 10px; }
  .statelabel { min-width: 28px; text-align: right; color: var(--vscode-descriptionForeground); }
  /* トグルスイッチ本体 */
  .switch { position: relative; display: inline-block; width: 44px; height: 24px; }
  .switch input { opacity: 0; width: 0; height: 0; }
  .slider {
    position: absolute; cursor: pointer; inset: 0;
    background: var(--vscode-input-background, #5a5a5a);
    border: 1px solid var(--vscode-checkbox-border, #888);
    transition: .15s; border-radius: 24px;
  }
  .slider:before {
    content: ""; position: absolute; height: 16px; width: 16px;
    left: 3px; bottom: 3px; background: var(--vscode-foreground);
    transition: .15s; border-radius: 50%;
  }
  input:checked + .slider {
    background: var(--vscode-button-background, #0e639c);
    border-color: var(--vscode-button-background, #0e639c);
  }
  input:checked + .slider:before {
    transform: translateX(20px);
    background: var(--vscode-button-foreground, #fff);
  }
  input:focus-visible + .slider { outline: 2px solid var(--vscode-focusBorder); outline-offset: 1px; }
  .switch.disabled { opacity: .4; }
  .switch.disabled .slider { cursor: not-allowed; }
  .masterhint { color: var(--vscode-descriptionForeground); margin: 4px 0 0; font-style: italic; }
  #rows.master-off .row:not(.master) .meta { opacity: .55; }
</style>
</head>
<body>
  <h1 id="heading">Windows Copy Paste Mode</h1>
  <p class="intro" id="intro"></p>
  <p class="masterhint" id="masterhint" hidden></p>
  <div id="rows"></div>
<script nonce="${nonce}">
  const vscode = acquireVsCodeApi();
  const rows = document.getElementById('rows');
  let strings = {};

  function render(items) {
    const master = items.find(i => i.isMaster);
    const masterOn = master ? master.value : true;
    rows.classList.toggle('master-off', !masterOn);
    rows.innerHTML = '';
    for (const it of items) {
      const row = document.createElement('div');
      row.className = 'row' + (it.isMaster ? ' master' : '');

      const meta = document.createElement('div');
      meta.className = 'meta';
      const title = document.createElement('div');
      title.className = 'title';
      title.textContent = it.title;
      const desc = document.createElement('div');
      desc.className = 'desc';
      desc.textContent = it.description;
      meta.appendChild(title);
      meta.appendChild(desc);
      if (it.unavailable && it.unavailableNote) {
        const note = document.createElement('div');
        note.className = 'note';
        note.textContent = it.unavailableNote;
        meta.appendChild(note);
      }

      const right = document.createElement('div');
      right.className = 'right';
      const stateLabel = document.createElement('span');
      stateLabel.className = 'statelabel';
      stateLabel.textContent = it.value ? (strings.on || 'ON') : (strings.off || 'OFF');

      const sw = document.createElement('label');
      sw.className = 'switch' + (it.unavailable ? ' disabled' : '');
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.checked = !!it.value;
      input.disabled = !!it.unavailable;
      input.setAttribute('aria-label', it.title);
      input.addEventListener('change', () => {
        vscode.postMessage({ type: 'setToggle', key: it.key, value: input.checked });
      });
      const slider = document.createElement('span');
      slider.className = 'slider';
      sw.appendChild(input);
      sw.appendChild(slider);

      right.appendChild(stateLabel);
      right.appendChild(sw);
      row.appendChild(meta);
      row.appendChild(right);
      rows.appendChild(row);
    }
  }

  window.addEventListener('message', (event) => {
    const m = event.data;
    if (m.type === 'state') {
      strings = m.strings || {};
      document.getElementById('heading').textContent = strings.heading || 'Windows Copy Paste Mode';
      document.getElementById('intro').textContent = strings.intro || '';
      const master = m.items.find(i => i.isMaster);
      const hint = document.getElementById('masterhint');
      if (master && !master.value) {
        hint.textContent = strings.masterOffHint || '';
        hint.hidden = false;
      } else {
        hint.hidden = true;
      }
      render(m.items);
    }
  });

  vscode.postMessage({ type: 'ready' });
</script>
</body>
</html>`;
}

/** CSP 用の使い捨て nonce（Math.random は使わずタイムスタンプ＋連番風で十分）。 */
function makeNonce(): string {
  let text = "";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 32; i++) {
    // 連番ベースで決定的に生成（Webview の inline 許可用途には十分）。
    text += chars[(i * 7 + text.length * 13 + 17) % chars.length];
  }
  return text;
}
