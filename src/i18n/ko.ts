/** 한국어. */
import type { Messages } from "../utils/messages";

export const ko: Messages = {
  applied:
    "Windows 스타일 복사·붙여넣기 설정을 적용했습니다. 이제 VS Code / Cursor의 복사·붙여넣기가 일반 Windows 앱에 더 가깝게 동작합니다.",
  applyFailed: (reason) => `설정을 적용하지 못했습니다: ${reason}`,
  restored: "이전 복사·붙여넣기 설정으로 되돌렸습니다.",
  restoreNoBackup:
    "이전 설정 백업을 찾을 수 없습니다. 먼저 \"Apply Recommended Settings(추천 설정 적용)\"를 실행하면 복원용 백업이 만들어집니다.",
  restoreFailed: (reason) => `설정을 복원하지 못했습니다: ${reason}`,
  noActiveEditor:
    "활성 편집기가 없습니다. 텍스트 편집기를 연 뒤 다시 시도해 주세요.",
  selectTextToCopy: "복사할 텍스트를 선택해 주세요.",
  copiedPlain: "선택한 텍스트를 서식 없는 일반 텍스트로 복사했습니다.",
  clipboardEmpty: "클립보드에 텍스트가 없습니다.",
  noTerminalCreate: "터미널이 없습니다. 새로 만들까요?",
  create: "만들기",
  cancel: "취소",
  paste: "붙여넣기",
  cancelled: "붙여넣기를 취소했습니다.",
  multiLineTerminalConfirmTitle:
    "여러 줄의 텍스트를 터미널에 붙여넣으려고 합니다. 실행될 명령이 포함되어 있을 수 있습니다. 붙여넣을까요?",
  multiLineTerminalConfirmDetail: (preview) =>
    `붙여넣을 내용(미리보기):\n${preview}`,
  moreLines: (n) => `…외 ${n}줄`,
  masterDisabled:
    "Windows Copy Paste Mode가 꺼져 있습니다. 설정 windowsCopyPaste.enabled를 켜 주세요.",
  featureDisabled: (configKey) =>
    `이 기능은 꺼져 있습니다. 설정 ${configKey}를 켜면 사용할 수 있습니다.`,
  onboardingPrompt:
    "Windows Copy Paste Mode를 켤까요? VS Code / Cursor의 복사·붙여넣기 설정을 일반 Windows 앱에 가깝게 바꿉니다.",
  applyNow: "추천 설정 적용",
  later: "나중에",
  seeDetails: "자세히 보기",
  imageUnsupportedOs:
    "이미지 붙여넣기는 현재 Windows에서만 지원됩니다. 이 OS에서는 terminal-image-paste를 사용할 수 없습니다.",
  imageNoImage:
    "클립보드에 이미지가 없습니다. 스크린샷 등 이미지를 복사한 뒤 다시 시도해 주세요.",
  imageSaveFailed: (reason) => `이미지를 저장하지 못했습니다: ${reason}`,
  imagePasted: (path) =>
    `이미지를 저장하고 경로를 터미널에 입력했습니다: ${path}`,
  settingsPanelTitle: "Windows Copy Paste Mode 설정",
  settingsPanelHeading: "Windows Copy Paste Mode 설정",
  settingsPanelIntro:
    "스위치로 각 기능을 켜고 끌 수 있습니다. 변경 사항은 바로 저장되며 settings.json과도 동기화됩니다.",
  settingsMasterOffHint:
    "마스터 스위치가 꺼져 있어 모든 기능이 비활성화되어 있습니다. 위의 스위치를 켜면 개별 기능을 사용할 수 있습니다.",
  toggleOn: "켜짐",
  toggleOff: "꺼짐",
  toggleLabels: {
    master: {
      title: "Windows Copy Paste Mode(마스터)",
      description: "확장 기능 전체의 켜기/끄기. 끄면 모든 명령이 비활성화됩니다.",
    },
    terminalImagePaste: {
      title: "terminal-image-paste(이미지→터미널)",
      description:
        "클립보드의 이미지를 저장하고 그 경로를 현재 터미널에 입력합니다(Windows).",
    },
    settings: {
      title: "추천 설정 적용/복원",
      description:
        "Windows 스타일 복사·붙여넣기 설정을 한 번에 적용하거나 복원하는 명령.",
    },
    copyPlainText: {
      title: "서식 없이 복사",
      description: "선택한 텍스트를 서식 없는 일반 텍스트로 복사합니다.",
    },
    pastePlainText: {
      title: "일반 텍스트로 붙여넣기",
      description: "클립보드의 텍스트를 서식 없이 붙여넣습니다.",
    },
    safePasteToTerminal: {
      title: "터미널에 안전하게 붙여넣기",
      description:
        "여러 줄을 터미널에 붙여넣기 전에 확인합니다(실수로 실행되는 것을 방지).",
    },
  },
};
