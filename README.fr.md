# Windows Copy Paste Mode

🌐 [日本語](README.md) | [English](README.en.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [한국어](README.ko.md) | [Español](README.es.md) | **Français**

**Une extension qui rend le copier-coller de VS Code / Cursor aussi naturel que dans une application Windows classique.**
Aucun réglage compliqué. Un clic suffit pour faire disparaître cette impression que « quelque chose cloche » au copier-coller.

## Pour commencer (3 étapes)

1. **Installer** : ouvrez la vue Extensions (`Ctrl+Shift+X`), recherchez **Windows Copy Paste Mode** et cliquez sur **Install**
2. **Activer les réglages recommandés** : appuyez sur `Ctrl+Shift+P` et choisissez **Windows Copy Paste Mode: Apply Recommended Settings (Appliquer les réglages recommandés)**
3. **Vous pouvez toujours revenir en arrière** : appuyez sur `Ctrl+Shift+P` et choisissez **Windows Copy Paste Mode: Restore Previous Settings (Restaurer les réglages précédents)**

---

## Les problèmes qu'elle résout

- Vous avez appuyé sur `Ctrl+C` sans rien sélectionner et toute la ligne a été copiée
- Le texte copié a emporté ses couleurs et sa mise en forme, et s'est affiché de travers une fois collé
- Vous craignez qu'un collage dans le terminal lance une commande tout seul
- Le copier-coller de Cursor / VS Code ne ressemble pas à celui des applications Windows que vous utilisez tous les jours

## Pour qui ?

- Les utilisateurs de Windows qui débutent avec Cursor
- Les débutants que le copier-coller de VS Code déroute
- Les personnes qui ne sont pas développeuses de métier et utilisent l'IA ou le no-code / low-code
- Toute personne encore peu à l'aise avec le terminal

---

## La façon la plus simple de l'utiliser

### Dans Cursor

1. Ouvrez Cursor.
2. Ouvrez la vue **Extensions**.
   - Raccourci : `Ctrl+Shift+X`
3. Tapez **Windows Copy Paste Mode** dans le champ de recherche.
4. Cliquez sur **Install** sous **Windows Copy Paste Mode**.
5. Une fois l'installation terminée, appuyez sur `Ctrl+Shift+P`.
6. Tapez `Apply Recommended` dans le champ qui apparaît en haut et choisissez
   **Windows Copy Paste Mode: Apply Recommended Settings (Appliquer les réglages recommandés)**.

C'est tout. Le copier-coller de Cursor ressemble maintenant beaucoup plus à celui d'une application Windows classique.

Pour revenir en arrière, appuyez sur `Ctrl+Shift+P` et choisissez
**Windows Copy Paste Mode: Restore Previous Settings (Restaurer les réglages précédents)**.
Vos réglages reviennent à leur état d'avant.

### Dans VS Code

1. Ouvrez VS Code.
2. Ouvrez la vue **Extensions**.
   - Raccourci : `Ctrl+Shift+X`
3. Tapez **Windows Copy Paste Mode** dans le champ de recherche.
4. Cliquez sur **Install** sous **Windows Copy Paste Mode**.
5. Appuyez sur `Ctrl+Shift+P` et choisissez **Windows Copy Paste Mode: Apply Recommended Settings (Appliquer les réglages recommandés)**.

Pour revenir en arrière, c'est comme dans Cursor (choisissez **Restore Previous Settings**).

### Utiliser les autres fonctions

Appuyez sur `Ctrl+Shift+P` et tapez `Windows Copy Paste Mode` pour voir tout ce que l'extension sait faire.
Chaque fonction est expliquée plus bas, dans « Fonctions principales ».

### Si la recherche ne la trouve pas (solution de secours)

En temps normal, les étapes ci-dessus suffisent. Seulement si l'extension n'apparaît pas dans la recherche, essayez ceci :

1. Ouvrez la page de l'extension.
   - Cursor : [Windows Copy Paste Mode sur Open VSX](https://open-vsx.org/extension/deskflowlabs/windows-copy-paste-mode)
   - VS Code : [Windows Copy Paste Mode sur le Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=deskflowlabs.windows-copy-paste-mode)
2. Avec le bouton de téléchargement de la page, enregistrez le fichier qui se termine par `.vsix`.
3. Dans Cursor / VS Code, appuyez sur `Ctrl+Shift+P`.
4. Choisissez **Extensions: Install from VSIX...**.
5. Sélectionnez le fichier `.vsix` enregistré.

---

## Fonctions principales

| Commande (à rechercher dans la palette de commandes) | Ce qu'elle fait |
|---|---|
| **Windows Copy Paste Mode: Apply Recommended Settings** | Applique en une fois les réglages recommandés façon Windows (une sauvegarde est faite avant). |
| **Windows Copy Paste Mode: Restore Previous Settings** | Remet les réglages dans l'état où ils étaient avant l'application des réglages recommandés. |
| **Windows Copy Paste Mode: Copy as Plain Text** | Copie le texte sélectionné sans mise en forme (texte brut). |
| **Windows Copy Paste Mode: Paste as Plain Text** | Colle le texte du presse-papiers sans mise en forme. |
| **Windows Copy Paste Mode: Safe Paste to Terminal** | Colle dans le terminal. Pour plusieurs lignes, demande d'abord une confirmation (rien n'est exécuté automatiquement). |
| **Windows Copy Paste Mode: Paste Image to Terminal** | Enregistre l'image du presse-papiers et saisit son chemin dans le terminal actif (Windows uniquement). |
| **Windows Copy Paste Mode: Open Settings** | Ouvre un panneau de réglages avec des interrupteurs pour activer ou désactiver chaque fonction. |

### Raccourcis clavier (par défaut)

- `Ctrl+Alt+C` … copier en texte brut (quand l'éditeur a le focus)
- `Ctrl+Alt+V` … coller en texte brut (quand l'éditeur a le focus)
- `Ctrl+Alt+Shift+V` … collage sécurisé dans le terminal (quand le terminal a le focus)
- `Ctrl+Alt+Shift+I` … enregistrer l'image du presse-papiers et saisir son chemin dans le terminal (Windows)

> Les `Ctrl+C` / `Ctrl+V` habituels **ne sont pas modifiés**. Tout ce que vous faisiez déjà continue de fonctionner.

### Langues

Les messages, les noms de commandes et les descriptions des réglages sont disponibles en 7 langues :
japonais, anglais, chinois simplifié, chinois traditionnel, coréen, espagnol et français.
Par défaut, l'extension suit la langue d'affichage de Cursor / VS Code (les autres langues s'affichent en anglais).
Pour choisir vous-même la langue, modifiez le réglage `windowsCopyPaste.language`.
(Ce réglage modifie les notifications et le panneau de réglages. Les noms de commandes et les descriptions des réglages suivent toujours la langue d'affichage de Cursor / VS Code.)

---

## Images vers le terminal (terminal-image-paste) — Windows uniquement

Avec une capture d'écran (ou une autre image) dans le presse-papiers, appuyez sur `Ctrl+Alt+Shift+I`
(ou lancez **Paste Image to Terminal** depuis la palette de commandes). L'extension :

1. enregistre l'image en PNG (par défaut dans le dossier de stockage de l'extension, sous le nom `shot-YYYYMMDD-HHmmss.png`), puis
2. **saisit le chemin du fichier enregistré dans le terminal actif** (sans appuyer sur Entrée).

Vous pouvez ainsi transmettre des images aux outils en ligne de commande qui reçoivent un chemin d'image, comme Claude Code, aussi simplement qu'un collage dans ChatGPT.

- Fonctionne avec les captures faites avec `PrintScreen`, `Win+Shift+S` ou l'Outil Capture d'écran (Snipping Tool).
- **Système pris en charge** : pour l'instant **Windows uniquement**. Sous macOS / Linux, la fonction est désactivée et un message l'indique.
- S'il n'y a pas d'image dans le presse-papiers, un message clair s'affiche.

| Réglage | Valeur par défaut | Description |
|---|---|---|
| `windowsCopyPaste.features.terminalImagePaste` | `true` | Activer/désactiver la fonction |
| `windowsCopyPaste.terminalImagePaste.saveDirectory` | `""` | Dossier d'enregistrement (vide = globalStorage/images de l'extension) |
| `windowsCopyPaste.terminalImagePaste.fileNamePattern` | `shot-YYYYMMDD-HHmmss.png` | Modèle de nom de fichier (date et heure remplacées) |
| `windowsCopyPaste.terminalImagePaste.appendTrailingSpace` | `true` | Ajouter une espace après le chemin inséré |

---

## Panneau de réglages avec interrupteurs

Lancez **Open Settings** pour ouvrir un panneau où vous pouvez activer ou désactiver chaque fonction avec des interrupteurs.
Les modifications sont enregistrées immédiatement et synchronisées avec `settings.json` dans les deux sens.

---

## Ce que change « Apply Recommended Settings »

Ces 4 réglages sont écrits dans vos réglages utilisateur (globaux) :

| Réglage | Valeur | Effet |
|---|---|---|
| `editor.emptySelectionClipboard` | `false` | `Ctrl+C` sans sélection ne copie plus toute la ligne |
| `editor.copyWithSyntaxHighlighting` | `false` | Copie sans couleurs ni mise en forme (plus proche du texte brut) |
| `terminal.integrated.copyOnSelection` | `true` | Sélectionner du texte dans le terminal le copie |
| `terminal.integrated.rightClickBehavior` | `copyPaste` | Le clic droit dans le terminal copie / colle |

- Vos réglages actuels sont sauvegardés automatiquement **avant** l'application (la première fois seulement).
- Pour **revenir en arrière**, lancez « Restore Previous Settings ».

---

## Activer ou désactiver les fonctions

Chaque fonction peut être activée ou désactivée séparément (recherchez « Windows Copy Paste Mode » dans les réglages).

| Réglage | Valeur par défaut | Description |
|---|---|---|
| `windowsCopyPaste.enabled` | `true` | Interrupteur principal. Désactivé, tout est désactivé. |
| `windowsCopyPaste.features.settings` | `true` | Appliquer / restaurer les réglages recommandés |
| `windowsCopyPaste.features.copyPlainText` | `true` | Copier en texte brut |
| `windowsCopyPaste.features.pastePlainText` | `true` | Coller en texte brut |
| `windowsCopyPaste.features.safePasteToTerminal` | `true` | Collage sécurisé dans le terminal |
| `windowsCopyPaste.features.terminalImagePaste` | `true` | Image du presse-papiers → chemin dans le terminal (Windows) |
| `windowsCopyPaste.showOnboarding` | `true` | Afficher le guide de premier démarrage |
| `windowsCopyPaste.backupSettings` | `true` | Sauvegarder avant d'appliquer |
| `windowsCopyPaste.confirmMultiLineTerminalPaste` | `true` | Confirmer avant de coller plusieurs lignes dans le terminal |
| `windowsCopyPaste.multiLinePreviewMaxLines` | `5` | Nombre maximal de lignes d'aperçu dans la confirmation (1–20) |
| `windowsCopyPaste.language` | `auto` | Langue d'affichage (`auto`/`ja`/`en`/`zh-cn`/`zh-tw`/`ko`/`es`/`fr`) |

Si vous lancez une commande dont la fonction est désactivée, l'extension vous indique comment la réactiver.

---

## Politique de confidentialité

Cette extension a été conçue en plaçant votre vie privée au premier plan.

- **Elle ne communique jamais avec des serveurs externes.**
- **Aucune télémétrie (aucune donnée d'utilisation n'est envoyée).**
- **Le contenu du presse-papiers n'est jamais envoyé nulle part.**
- **L'historique du presse-papiers n'est pas conservé** (cette version n'a pas du tout de fonction d'historique).
- Elle ne modifie que les réglages de VS Code / Cursor, pas le comportement du presse-papiers de tout le système.

## Ce qu'elle ne fait pas (non pris en charge dans cette version)

- Coller des images **dans l'éditeur** (les images ne peuvent être insérées dans le terminal que sous forme de chemin, sous Windows)
- Copier-coller de contenu autre que du texte, comme du HTML, du RTF ou Excel
- Envoyer des images vers le terminal sous macOS / Linux (Windows uniquement pour l'instant)
- Historique du presse-papiers / synchronisation dans le cloud
- Modifier le copier-coller de tout le système
- Fonctions d'IA, activation de licence ou paiements (elle est **gratuite** et n'envoie rien)

## FAQ

**Q. Les `Ctrl+C` / `Ctrl+V` habituels vont-ils cesser de fonctionner ?**
R. Non. Les raccourcis standard ne sont pas modifiés.

**Q. Puis-je annuler les réglages recommandés ?**
R. Oui. « Restore Previous Settings » remet tout comme avant (une sauvegarde est faite avant l'application).

**Q. Coller dans le terminal va-t-il exécuter des commandes tout seul ?**
R. Non. L'extension colle seulement et n'appuie jamais sur Entrée. Pour plusieurs lignes, elle demande d'abord une confirmation.

---

Les informations pour les développeurs (compilation, empaquetage, structure des fichiers) se trouvent dans le [README en japonais](README.md#開発者向け).

## Licence

MIT License (voir `LICENSE`).
