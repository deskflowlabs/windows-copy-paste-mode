/** Français. */
import type { Messages } from "../utils/messages";

export const fr: Messages = {
  applied:
    "Les réglages de copier-coller façon Windows ont été appliqués. Le copier-coller de VS Code / Cursor se comporte désormais davantage comme dans une application Windows classique.",
  applyFailed: (reason) => `Impossible d'appliquer les réglages : ${reason}`,
  restored: "Vos réglages de copier-coller précédents ont été restaurés.",
  restoreNoBackup:
    "Aucune sauvegarde des réglages précédents n'a été trouvée. Exécutez d'abord « Apply Recommended Settings » (appliquer les réglages recommandés) pour créer une sauvegarde restaurable.",
  restoreFailed: (reason) =>
    `Impossible de restaurer les réglages : ${reason}`,
  noActiveEditor:
    "Aucun éditeur actif. Ouvrez un éditeur de texte, puis réessayez.",
  selectTextToCopy: "Sélectionnez le texte à copier.",
  copiedPlain: "La sélection a été copiée en texte brut.",
  clipboardEmpty: "Le presse-papiers ne contient pas de texte.",
  noTerminalCreate: "Aucun terminal n'est ouvert. En créer un nouveau ?",
  create: "Créer",
  cancel: "Annuler",
  paste: "Coller",
  cancelled: "Collage annulé.",
  multiLineTerminalConfirmTitle:
    "Vous allez coller plusieurs lignes dans le terminal. Elles peuvent contenir des commandes qui seraient exécutées. Coller quand même ?",
  multiLineTerminalConfirmDetail: (preview) =>
    `Contenu à coller (aperçu) :\n${preview}`,
  moreLines: (n) => `…et ${n} ligne(s) de plus`,
  masterDisabled:
    "Windows Copy Paste Mode est désactivé. Activez le réglage windowsCopyPaste.enabled.",
  featureDisabled: (configKey) =>
    `Cette fonction est désactivée. Activez le réglage ${configKey} pour l'utiliser.`,
  onboardingPrompt:
    "Activer Windows Copy Paste Mode ? Le copier-coller de VS Code / Cursor ressemblera davantage à celui d'une application Windows classique.",
  applyNow: "Appliquer les réglages recommandés",
  later: "Plus tard",
  seeDetails: "Voir les détails",
  imageUnsupportedOs:
    "Le collage d'images n'est actuellement pris en charge que sous Windows. terminal-image-paste n'est pas disponible sur ce système.",
  imageNoImage:
    "Aucune image dans le presse-papiers. Copiez une capture d'écran (ou une autre image), puis réessayez.",
  imageSaveFailed: (reason) => `Impossible d'enregistrer l'image : ${reason}`,
  imagePasted: (path) =>
    `Image enregistrée et chemin inséré dans le terminal : ${path}`,
  settingsPanelTitle: "Réglages de Windows Copy Paste Mode",
  settingsPanelHeading: "Réglages de Windows Copy Paste Mode",
  settingsPanelIntro:
    "Activez ou désactivez chaque fonction avec les interrupteurs. Les modifications sont enregistrées immédiatement et synchronisées avec settings.json.",
  settingsMasterOffHint:
    "L'interrupteur principal est désactivé : toutes les fonctions sont donc inactives. Activez-le pour utiliser chaque fonction.",
  toggleOn: "OUI",
  toggleOff: "NON",
  toggleLabels: {
    master: {
      title: "Windows Copy Paste Mode (principal)",
      description:
        "Interrupteur principal de toute l'extension. Le désactiver désactive toutes les commandes.",
    },
    terminalImagePaste: {
      title: "terminal-image-paste (image → terminal)",
      description:
        "Enregistre l'image du presse-papiers et insère son chemin dans le terminal actif (Windows).",
    },
    settings: {
      title: "Appliquer / restaurer les réglages recommandés",
      description:
        "Commandes pour appliquer et restaurer les réglages de copier-coller façon Windows.",
    },
    copyPlainText: {
      title: "Copier en texte brut",
      description: "Copie la sélection sans mise en forme (texte brut).",
    },
    pastePlainText: {
      title: "Coller en texte brut",
      description: "Colle le texte du presse-papiers sans mise en forme.",
    },
    safePasteToTerminal: {
      title: "Collage sécurisé dans le terminal",
      description:
        "Demande une confirmation avant de coller plusieurs lignes dans le terminal (évite les exécutions accidentelles).",
    },
  },
};
