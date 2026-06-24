/**
 * 拡張機能エントリポイント。
 * コマンド登録と初回オンボーディングのみを担当し、実処理は各 command モジュールへ委譲する。
 */
import * as vscode from "vscode";
import { COMMANDS, CONFIG, EXTENSION_ID, GLOBAL_STATE_KEYS } from "./utils/constants";
import { getMessages } from "./utils/messages";
import { applyRecommendedSettings } from "./commands/applyRecommendedSettings";
import { restorePreviousSettings } from "./commands/restorePreviousSettings";
import { copyPlainText } from "./commands/copyPlainText";
import { pastePlainText } from "./commands/pastePlainText";
import { safePasteToTerminal } from "./commands/safePasteToTerminal";
import { pasteImageToTerminal } from "./commands/pasteImageToTerminal";
import { openSettingsPanel } from "./panels/settingsPanel";

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand(COMMANDS.applyRecommendedSettings, () =>
      applyRecommendedSettings(context)
    ),
    vscode.commands.registerCommand(COMMANDS.restorePreviousSettings, () =>
      restorePreviousSettings(context)
    ),
    vscode.commands.registerCommand(COMMANDS.copyPlainText, () =>
      copyPlainText()
    ),
    vscode.commands.registerCommand(COMMANDS.pastePlainText, () =>
      pastePlainText()
    ),
    vscode.commands.registerCommand(COMMANDS.safePasteToTerminal, () =>
      safePasteToTerminal()
    ),
    vscode.commands.registerCommand(COMMANDS.pasteImageToTerminal, () =>
      pasteImageToTerminal(context)
    ),
    vscode.commands.registerCommand(COMMANDS.openSettings, () =>
      openSettingsPanel(context)
    )
  );

  // 起動直後にオンボーディングを検討（失敗しても拡張の動作は止めない）。
  void maybeShowOnboarding(context);
}

export function deactivate(): void {
  // 永続リソースは持たないため、特に処理は不要。
}

/**
 * 初回のみオンボーディング案内を表示する。
 * - 設定 windowsCopyPaste.showOnboarding が false なら出さない。
 * - 表示済みフラグを globalState に保存し、しつこく出さない。
 */
async function maybeShowOnboarding(
  context: vscode.ExtensionContext
): Promise<void> {
  const showOnboarding = vscode.workspace
    .getConfiguration(EXTENSION_ID)
    .get<boolean>(CONFIG.showOnboarding, true);
  if (!showOnboarding) {
    return;
  }
  if (context.globalState.get<boolean>(GLOBAL_STATE_KEYS.onboardingShown)) {
    return;
  }
  // 先にフラグを立てて、何度も出ないようにする。
  await context.globalState.update(GLOBAL_STATE_KEYS.onboardingShown, true);

  const msg = getMessages();
  const choice = await vscode.window.showInformationMessage(
    msg.onboardingPrompt,
    msg.applyNow,
    msg.later,
    msg.seeDetails
  );

  if (choice === msg.applyNow) {
    await vscode.commands.executeCommand(COMMANDS.applyRecommendedSettings);
  } else if (choice === msg.seeDetails) {
    await openReadme(context);
  }
}

/** README をプレビュー表示する（失敗時は通常のエディタで開く）。 */
async function openReadme(context: vscode.ExtensionContext): Promise<void> {
  const readmeUri = vscode.Uri.joinPath(context.extensionUri, "README.md");
  try {
    await vscode.commands.executeCommand("markdown.showPreview", readmeUri);
  } catch {
    await vscode.commands.executeCommand("vscode.open", readmeUri);
  }
}
