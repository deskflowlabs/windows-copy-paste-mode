# Windows Copy Paste Mode

🌐 [日本語](README.md) | [English](README.en.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | **한국어** | [Español](README.es.md) | [Français](README.fr.md)

**VS Code / Cursor의 복사·붙여넣기를 일반 Windows 앱처럼 편하게 만들어 주는 확장 기능입니다.**
복잡한 설정은 필요 없습니다. 클릭 한 번으로 복사·붙여넣기의 '어색함'을 줄일 수 있습니다.

## 먼저 할 일 (3단계)

1. **설치**: 확장 기능 화면(`Ctrl+Shift+X`)에서 **Windows Copy Paste Mode**를 검색하고 **Install**을 누릅니다
2. **추천 설정 켜기**: `Ctrl+Shift+P`를 누르고 **Windows Copy Paste Mode: Apply Recommended Settings(추천 설정 적용)**을 선택합니다
3. **언제든 되돌릴 수 있습니다**: 되돌리고 싶을 때도 `Ctrl+Shift+P`에서 **Windows Copy Paste Mode: Restore Previous Settings(이전 설정으로 복원)**을 선택합니다

---

## 이런 고민을 해결합니다

- 아무것도 선택하지 않고 `Ctrl+C`를 눌렀더니 줄 전체가 복사되었다
- 복사한 글자에 색이나 서식이 따라와서 붙여넣은 곳에서 모양이 깨졌다
- 터미널에 붙여넣으면 명령이 멋대로 실행될까 봐 무섭다
- Cursor / VS Code의 복사·붙여넣기가 평소 쓰는 Windows 앱과 느낌이 다르다

## 이런 분께 추천합니다

- Cursor를 막 쓰기 시작한 Windows 사용자
- VS Code의 복사·붙여넣기 동작이 어색한 초보자
- AI 개발이나 노코드/로우코드가 목적인, 개발자가 아닌 사용자
- 터미널 조작에 익숙하지 않은 분

---

## 가장 쉬운 사용법

### Cursor에서

1. Cursor를 엽니다.
2. **Extensions(확장)** 화면을 엽니다.
   - 단축키: `Ctrl+Shift+X`
3. 검색창에 **Windows Copy Paste Mode**를 입력합니다.
4. 표시된 **Windows Copy Paste Mode**의 **Install**을 누릅니다.
5. 설치가 끝나면 `Ctrl+Shift+P`를 누릅니다.
6. 위쪽에 나타나는 입력창에 `Apply Recommended`를 입력하고
   **Windows Copy Paste Mode: Apply Recommended Settings(추천 설정 적용)**을 선택합니다.

이제 Cursor의 복사·붙여넣기가 일반 Windows 앱에 가까운 느낌이 됩니다.

되돌리고 싶다면 `Ctrl+Shift+P`에서
**Windows Copy Paste Mode: Restore Previous Settings(이전 설정으로 복원)**을 선택하세요.
추천 설정을 쓰기 전 상태로 돌아갑니다.

### VS Code에서

1. VS Code를 엽니다.
2. **Extensions(확장)** 화면을 엽니다.
   - 단축키: `Ctrl+Shift+X`
3. 검색창에 **Windows Copy Paste Mode**를 입력합니다.
4. 표시된 **Windows Copy Paste Mode**의 **Install**을 누릅니다.
5. `Ctrl+Shift+P`를 누르고 **Windows Copy Paste Mode: Apply Recommended Settings(추천 설정 적용)**을 선택합니다.

되돌리는 방법은 Cursor와 같습니다(**Restore Previous Settings** 선택).

### 다른 기능을 쓰려면

`Ctrl+Shift+P`를 누르고 `Windows Copy Paste Mode`를 입력하면 이 확장 기능으로 할 수 있는 일이 목록으로 나옵니다.
각 기능은 아래 '주요 기능'에서 설명합니다.

### 검색해도 나오지 않을 때(예비 방법)

보통은 위 단계만으로 충분합니다. 검색해도 나오지 않을 때만 다음 방법을 시도하세요.

1. 확장 기능 페이지를 엽니다.
   - Cursor: [Open VSX의 Windows Copy Paste Mode 페이지](https://open-vsx.org/extension/deskflowlabs/windows-copy-paste-mode)
   - VS Code: [Visual Studio Marketplace의 Windows Copy Paste Mode 페이지](https://marketplace.visualstudio.com/items?itemName=deskflowlabs.windows-copy-paste-mode)
2. 페이지의 다운로드 버튼으로 `.vsix`로 끝나는 파일을 저장합니다.
3. Cursor / VS Code에서 `Ctrl+Shift+P`를 누릅니다.
4. **Extensions: Install from VSIX...**를 선택합니다.
5. 저장한 `.vsix` 파일을 선택합니다.

---

## 주요 기능

| 명령(명령 팔레트에서 검색) | 하는 일 |
|---|---|
| **Windows Copy Paste Mode: Apply Recommended Settings** | Windows 스타일 추천 설정을 한 번에 적용합니다(적용 전 자동 백업). |
| **Windows Copy Paste Mode: Restore Previous Settings** | 추천 설정을 적용하기 전 상태로 되돌립니다. |
| **Windows Copy Paste Mode: Copy as Plain Text** | 선택한 텍스트를 서식 없는 일반 텍스트로 복사합니다. |
| **Windows Copy Paste Mode: Paste as Plain Text** | 클립보드의 텍스트를 서식 없이 붙여넣습니다. |
| **Windows Copy Paste Mode: Safe Paste to Terminal** | 터미널에 붙여넣습니다. 여러 줄이면 붙여넣기 전에 확인합니다(자동 실행하지 않음). |
| **Windows Copy Paste Mode: Paste Image to Terminal** | 클립보드의 이미지를 저장하고 저장 경로를 현재 터미널에 입력합니다(Windows 전용). |
| **Windows Copy Paste Mode: Open Settings** | 스위치로 각 기능을 켜고 끌 수 있는 설정 패널을 엽니다. |

### 키보드 단축키(기본값)

- `Ctrl+Alt+C` … 서식 없이 복사(편집기에 포커스가 있을 때)
- `Ctrl+Alt+V` … 일반 텍스트로 붙여넣기(편집기에 포커스가 있을 때)
- `Ctrl+Alt+Shift+V` … 터미널에 안전하게 붙여넣기(터미널에 포커스가 있을 때)
- `Ctrl+Alt+Shift+I` … 클립보드 이미지를 저장하고 경로를 터미널에 입력(Windows)

> 기본 `Ctrl+C` / `Ctrl+V`는 **덮어쓰지 않습니다**. 지금까지의 조작은 그대로 쓸 수 있습니다.

### 표시 언어

메시지, 명령 이름, 설정 설명은 7개 언어를 지원합니다: 일본어, 영어, 중국어 간체, 중국어 번체, 한국어, 스페인어, 프랑스어.
기본적으로 Cursor / VS Code의 표시 언어를 따릅니다(지원하지 않는 언어는 영어).
직접 고르려면 설정 `windowsCopyPaste.language`를 바꾸세요.
(이 설정으로 바뀌는 것은 알림과 설정 패널의 문구입니다. 명령 이름과 설정 설명은 항상 Cursor / VS Code 자체의 표시 언어를 따릅니다.)

---

## 이미지를 터미널로(terminal-image-paste) ※Windows 전용

스크린샷 등을 클립보드에 복사한 상태에서 `Ctrl+Alt+Shift+I`를 누르면(또는 명령 팔레트에서 **Paste Image to Terminal** 실행),

1. 이미지를 PNG로 저장하고(기본값은 확장 기능의 저장 폴더, 파일 이름 `shot-YYYYMMDD-HHmmss.png`),
2. 그 **저장 경로를 현재 터미널에 자동으로 입력**합니다(Enter는 누르지 않습니다).

ChatGPT에 붙여넣는 느낌으로, Claude Code처럼 이미지 경로를 받는 CLI에 이미지를 넘길 수 있습니다.

- `PrintScreen`, `Win+Shift+S`, 캡처 도구(Snipping Tool)로 찍은 스크린샷 모두 사용할 수 있습니다.
- **지원 OS**: 현재 **Windows 전용**입니다. macOS / Linux에서는 기능이 꺼지고 안내가 표시됩니다.
- 클립보드에 이미지가 없으면 알기 쉽게 알려 줍니다.

| 설정 | 기본값 | 설명 |
|---|---|---|
| `windowsCopyPaste.features.terminalImagePaste` | `true` | 기능 켜기/끄기 |
| `windowsCopyPaste.terminalImagePaste.saveDirectory` | `""` | 저장 폴더(비우면 확장 기능의 globalStorage/images) |
| `windowsCopyPaste.terminalImagePaste.fileNamePattern` | `shot-YYYYMMDD-HHmmss.png` | 파일 이름 패턴(날짜·시간으로 바뀜) |
| `windowsCopyPaste.terminalImagePaste.appendTrailingSpace` | `true` | 입력한 경로 끝에 공백 추가 |

---

## 스위치식 설정 패널

**Open Settings** 명령을 실행하면 스위치로 각 기능을 켜고 끌 수 있는 설정 패널이 열립니다.
변경 사항은 바로 저장되며 `settings.json`과 양방향으로 동기화됩니다.

---

## 적용되는 설정(Apply Recommended Settings)

'추천 설정 적용'을 실행하면 다음 4가지가 사용자 설정(전역)에 기록됩니다.

| 설정 | 값 | 효과 |
|---|---|---|
| `editor.emptySelectionClipboard` | `false` | 아무것도 선택하지 않고 `Ctrl+C`를 눌러도 줄 전체를 복사하지 않음 |
| `editor.copyWithSyntaxHighlighting` | `false` | 복사할 때 색·서식을 붙이지 않음(일반 텍스트에 가깝게) |
| `terminal.integrated.copyOnSelection` | `true` | 터미널에서 선택만 해도 복사됨 |
| `terminal.integrated.rightClickBehavior` | `copyPaste` | 터미널에서 오른쪽 클릭으로 복사·붙여넣기 |

- 적용 **전**에 현재 설정을 자동으로 백업합니다(처음 한 번만).
- **되돌리려면** 'Restore Previous Settings'를 실행하세요.

---

## 기능 켜기/끄기

모든 기능은 설정에서 개별적으로 켜고 끌 수 있습니다(설정 화면에서 'Windows Copy Paste Mode' 검색).

| 설정 | 기본값 | 설명 |
|---|---|---|
| `windowsCopyPaste.enabled` | `true` | 마스터 스위치. 끄면 모든 기능이 비활성화됩니다. |
| `windowsCopyPaste.features.settings` | `true` | 추천 설정 적용/복원 |
| `windowsCopyPaste.features.copyPlainText` | `true` | 서식 없이 복사 |
| `windowsCopyPaste.features.pastePlainText` | `true` | 일반 텍스트로 붙여넣기 |
| `windowsCopyPaste.features.safePasteToTerminal` | `true` | 터미널에 안전하게 붙여넣기 |
| `windowsCopyPaste.features.terminalImagePaste` | `true` | 클립보드 이미지 → 터미널에 경로 입력(Windows) |
| `windowsCopyPaste.showOnboarding` | `true` | 처음 안내를 표시할지 여부 |
| `windowsCopyPaste.backupSettings` | `true` | 적용 전에 백업할지 여부 |
| `windowsCopyPaste.confirmMultiLineTerminalPaste` | `true` | 터미널에 여러 줄을 붙여넣기 전에 확인할지 여부 |
| `windowsCopyPaste.multiLinePreviewMaxLines` | `5` | 확인 시 미리보기 최대 줄 수(1~20) |
| `windowsCopyPaste.language` | `auto` | 표시 언어(`auto`/`ja`/`en`/`zh-cn`/`zh-tw`/`ko`/`es`/`fr`) |

꺼 둔 기능의 명령을 실행하면 다시 켜는 방법을 안내합니다.

---

## 개인정보 처리방침

이 확장 기능은 사용자의 개인정보를 최우선으로 설계되었습니다.

- **외부 서버와 전혀 통신하지 않습니다.**
- **원격 분석(사용 현황 전송)을 하지 않습니다.**
- **클립보드 내용을 외부로 보내지 않습니다.**
- **클립보드 기록을 영구 저장하지 않습니다**(이 버전에는 기록 기능 자체가 없습니다).
- VS Code / Cursor의 설정값만 바꾸며, OS 전체의 클립보드 동작은 바꾸지 않습니다.

## 할 수 없는 것(이 버전에서 지원하지 않음)

- 이미지를 **편집기에** 붙여넣기(이미지는 '터미널에 경로 입력'만 지원, Windows 전용)
- HTML·RTF·Excel 등 텍스트가 아닌 내용의 복사·붙여넣기
- macOS / Linux에서 이미지를 터미널로 보내기(현재 Windows 전용)
- 클립보드 기록 / 클라우드 동기화
- OS 전체의 복사·붙여넣기 동작 변경
- AI 연동·라이선스 인증·결제(**무료**이며 외부 전송도 없습니다)

## 자주 묻는 질문

**Q. 기본 `Ctrl+C` / `Ctrl+V`를 못 쓰게 되나요?**
A. 아니요. 기본 단축키는 덮어쓰지 않습니다.

**Q. 추천 설정을 적용한 뒤 되돌릴 수 있나요?**
A. 네. 'Restore Previous Settings'로 적용 전 상태로 되돌릴 수 있습니다(적용 전 자동 백업).

**Q. 터미널에 붙여넣으면 멋대로 실행되나요?**
A. 아니요. 붙여넣기만 하고 Enter(실행)는 누르지 않습니다. 여러 줄이면 미리 확인합니다.

---

개발자 정보(빌드, 패키징, 파일 구성)는 [일본어 README](README.md#開発者向け)를 참고하세요.

## 라이선스

MIT License(`LICENSE` 참고).
