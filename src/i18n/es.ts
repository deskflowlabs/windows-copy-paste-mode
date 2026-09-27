/** Español. */
import type { Messages } from "../utils/messages";

export const es: Messages = {
  applied:
    "Se aplicó la configuración de copiar y pegar al estilo de Windows. Ahora copiar y pegar en VS Code / Cursor se comporta más como en una aplicación normal de Windows.",
  applyFailed: (reason) => `No se pudo aplicar la configuración: ${reason}`,
  restored: "Se restauró tu configuración anterior de copiar y pegar.",
  restoreNoBackup:
    'No se encontró ninguna copia de seguridad de la configuración anterior. Ejecuta primero "Apply Recommended Settings" (aplicar configuración recomendada) para crear una copia que puedas restaurar.',
  restoreFailed: (reason) =>
    `No se pudo restaurar la configuración: ${reason}`,
  noActiveEditor:
    "No hay ningún editor activo. Abre un editor de texto e inténtalo de nuevo.",
  selectTextToCopy: "Selecciona el texto que quieres copiar.",
  copiedPlain: "Se copió la selección como texto sin formato.",
  clipboardEmpty: "El portapapeles no contiene texto.",
  noTerminalCreate: "No hay ninguna terminal. ¿Quieres crear una nueva?",
  create: "Crear",
  cancel: "Cancelar",
  paste: "Pegar",
  cancelled: "Se canceló el pegado.",
  multiLineTerminalConfirmTitle:
    "Vas a pegar varias líneas en la terminal. Pueden contener comandos que se ejecutarían. ¿Quieres pegarlas?",
  multiLineTerminalConfirmDetail: (preview) =>
    `Contenido que se pegará (vista previa):\n${preview}`,
  moreLines: (n) => `…y ${n} línea(s) más`,
  masterDisabled:
    "Windows Copy Paste Mode está desactivado. Activa la opción windowsCopyPaste.enabled.",
  featureDisabled: (configKey) =>
    `Esta función está desactivada. Activa la opción ${configKey} para usarla.`,
  onboardingPrompt:
    "¿Quieres activar Windows Copy Paste Mode? Hace que copiar y pegar en VS Code / Cursor se parezca más a una aplicación normal de Windows.",
  applyNow: "Aplicar configuración recomendada",
  later: "Más tarde",
  seeDetails: "Ver detalles",
  imageUnsupportedOs:
    "Por ahora, pegar imágenes solo funciona en Windows. terminal-image-paste no está disponible en este sistema operativo.",
  imageNoImage:
    "No hay ninguna imagen en el portapapeles. Copia una captura de pantalla (u otra imagen) e inténtalo de nuevo.",
  imageSaveFailed: (reason) => `No se pudo guardar la imagen: ${reason}`,
  imagePasted: (path) =>
    `Se guardó la imagen y se insertó su ruta en la terminal: ${path}`,
  settingsPanelTitle: "Configuración de Windows Copy Paste Mode",
  settingsPanelHeading: "Configuración de Windows Copy Paste Mode",
  settingsPanelIntro:
    "Activa o desactiva cada función con los interruptores. Los cambios se guardan al instante y se sincronizan con settings.json.",
  settingsMasterOffHint:
    "El interruptor principal está desactivado, así que todas las funciones están desactivadas. Actívalo para habilitar las funciones individuales.",
  toggleOn: "SÍ",
  toggleOff: "NO",
  toggleLabels: {
    master: {
      title: "Windows Copy Paste Mode (principal)",
      description:
        "Interruptor principal de toda la extensión. Si lo desactivas, se desactivan todos los comandos.",
    },
    terminalImagePaste: {
      title: "terminal-image-paste (imagen → terminal)",
      description:
        "Guarda la imagen del portapapeles e inserta su ruta en la terminal activa (Windows).",
    },
    settings: {
      title: "Aplicar / restaurar la configuración recomendada",
      description:
        "Comandos para aplicar y restaurar la configuración de copiar y pegar al estilo de Windows.",
    },
    copyPlainText: {
      title: "Copiar como texto sin formato",
      description: "Copia la selección sin formato (texto sin formato).",
    },
    pastePlainText: {
      title: "Pegar como texto sin formato",
      description: "Pega el texto del portapapeles sin formato.",
    },
    safePasteToTerminal: {
      title: "Pegado seguro en la terminal",
      description:
        "Pide confirmación antes de pegar varias líneas en la terminal (evita ejecuciones accidentales).",
    },
  },
};
