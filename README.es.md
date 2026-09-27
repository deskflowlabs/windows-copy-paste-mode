# Windows Copy Paste Mode

🌐 [日本語](README.md) | [English](README.en.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [한국어](README.ko.md) | **Español** | [Français](README.fr.md)

**Una extensión que hace que copiar y pegar en VS Code / Cursor se sienta como en una aplicación normal de Windows.**
Sin configuraciones complicadas. Con un clic desaparece esa sensación de que "algo no va bien" al copiar y pegar.

## Lo primero (3 pasos)

1. **Instalar**: abre la vista de extensiones (`Ctrl+Shift+X`), busca **Windows Copy Paste Mode** y pulsa **Install**
2. **Activar la configuración recomendada**: pulsa `Ctrl+Shift+P` y elige **Windows Copy Paste Mode: Apply Recommended Settings (Aplicar configuración recomendada)**
3. **Siempre puedes deshacerlo**: pulsa `Ctrl+Shift+P` y elige **Windows Copy Paste Mode: Restore Previous Settings (Restaurar configuración anterior)**

---

## Problemas que resuelve

- Pulsaste `Ctrl+C` sin seleccionar nada y se copió una línea entera
- El texto copiado arrastró colores y formato, y se descolocó al pegarlo
- Te da miedo que, al pegar en la terminal, se ejecute un comando por sí solo
- Copiar y pegar en Cursor / VS Code no se siente como en las aplicaciones de Windows que usas a diario

## Para quién es

- Usuarios de Windows que acaban de empezar con Cursor
- Principiantes a quienes el comportamiento de copiar y pegar de VS Code les resulta raro
- Personas que no son principalmente programadoras y usan IA o herramientas no-code / low-code
- Quien todavía no se siente cómodo con la terminal

---

## La forma más sencilla de usarla

### En Cursor

1. Abre Cursor.
2. Abre la vista **Extensions (Extensiones)**.
   - Atajo: `Ctrl+Shift+X`
3. Escribe **Windows Copy Paste Mode** en el cuadro de búsqueda.
4. Pulsa **Install** en **Windows Copy Paste Mode**.
5. Cuando termine la instalación, pulsa `Ctrl+Shift+P`.
6. Escribe `Apply Recommended` en el cuadro que aparece arriba y elige
   **Windows Copy Paste Mode: Apply Recommended Settings (Aplicar configuración recomendada)**.

Listo. Copiar y pegar en Cursor ahora se parece mucho más a una aplicación normal de Windows.

Para deshacerlo, pulsa `Ctrl+Shift+P` y elige
**Windows Copy Paste Mode: Restore Previous Settings (Restaurar configuración anterior)**.
Tu configuración vuelve a como estaba antes.

### En VS Code

1. Abre VS Code.
2. Abre la vista **Extensions (Extensiones)**.
   - Atajo: `Ctrl+Shift+X`
3. Escribe **Windows Copy Paste Mode** en el cuadro de búsqueda.
4. Pulsa **Install** en **Windows Copy Paste Mode**.
5. Pulsa `Ctrl+Shift+P` y elige **Windows Copy Paste Mode: Apply Recommended Settings (Aplicar configuración recomendada)**.

Deshacerlo funciona igual que en Cursor (elige **Restore Previous Settings**).

### Usar las demás funciones

Pulsa `Ctrl+Shift+P` y escribe `Windows Copy Paste Mode` para ver todo lo que puede hacer esta extensión.
Cada función se explica más abajo, en «Funciones principales».

### Si no la encuentras al buscar (método alternativo)

Normalmente basta con los pasos anteriores. Solo si la extensión no aparece en la búsqueda, prueba esto:

1. Abre la página de la extensión.
   - Cursor: [Windows Copy Paste Mode en Open VSX](https://open-vsx.org/extension/deskflowlabs/windows-copy-paste-mode)
   - VS Code: [Windows Copy Paste Mode en Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=deskflowlabs.windows-copy-paste-mode)
2. Con el botón de descarga de la página, guarda el archivo que termina en `.vsix`.
3. En Cursor / VS Code, pulsa `Ctrl+Shift+P`.
4. Elige **Extensions: Install from VSIX...**.
5. Selecciona el archivo `.vsix` que guardaste.

---

## Funciones principales

| Comando (búscalo en la paleta de comandos) | Qué hace |
|---|---|
| **Windows Copy Paste Mode: Apply Recommended Settings** | Aplica de una vez la configuración recomendada al estilo de Windows (antes guarda una copia de seguridad). |
| **Windows Copy Paste Mode: Restore Previous Settings** | Devuelve la configuración a como estaba antes de aplicar la recomendada. |
| **Windows Copy Paste Mode: Copy as Plain Text** | Copia el texto seleccionado sin formato (texto sin formato). |
| **Windows Copy Paste Mode: Paste as Plain Text** | Pega el texto del portapapeles sin formato. |
| **Windows Copy Paste Mode: Safe Paste to Terminal** | Pega en la terminal. Si hay varias líneas, pregunta antes (no ejecuta nada automáticamente). |
| **Windows Copy Paste Mode: Paste Image to Terminal** | Guarda la imagen del portapapeles y escribe su ruta en la terminal activa (solo Windows). |
| **Windows Copy Paste Mode: Open Settings** | Abre un panel de configuración con interruptores para activar o desactivar cada función. |

### Atajos de teclado (predeterminados)

- `Ctrl+Alt+C` … copiar como texto sin formato (con el foco en el editor)
- `Ctrl+Alt+V` … pegar como texto sin formato (con el foco en el editor)
- `Ctrl+Alt+Shift+V` … pegado seguro en la terminal (con el foco en la terminal)
- `Ctrl+Alt+Shift+I` … guardar la imagen del portapapeles y escribir su ruta en la terminal (Windows)

> Los `Ctrl+C` / `Ctrl+V` normales **no se modifican**. Todo lo que ya usas sigue funcionando igual.

### Idiomas

Los mensajes, los nombres de los comandos y las descripciones de la configuración están disponibles en 7 idiomas:
japonés, inglés, chino simplificado, chino tradicional, coreano, español y francés.
Por defecto sigue el idioma de la interfaz de Cursor / VS Code (los demás idiomas se muestran en inglés).
Para elegir el idioma tú mismo, cambia la opción `windowsCopyPaste.language`.
(Esta opción cambia los avisos y el panel de configuración. Los nombres de los comandos y las descripciones de la configuración siempre siguen el idioma de la interfaz de Cursor / VS Code).

---

## Imágenes a la terminal (terminal-image-paste) — solo Windows

Con una captura de pantalla (u otra imagen) en el portapapeles, pulsa `Ctrl+Alt+Shift+I`
(o ejecuta **Paste Image to Terminal** desde la paleta de comandos). La extensión:

1. guarda la imagen como PNG (por defecto en la carpeta de almacenamiento de la extensión, con el nombre `shot-YYYYMMDD-HHmmss.png`), y
2. **escribe la ruta del archivo guardado en la terminal activa** (no pulsa Enter).

Así puedes pasar imágenes a herramientas de línea de comandos que reciben una ruta de imagen, como Claude Code, igual que al pegar en ChatGPT.

- Funciona con capturas hechas con `PrintScreen`, `Win+Shift+S` o la Herramienta Recortes (Snipping Tool).
- **Sistema operativo compatible**: por ahora **solo Windows**. En macOS / Linux la función se desactiva y se muestra un aviso.
- Si no hay ninguna imagen en el portapapeles, verás un mensaje claro.

| Opción | Valor predeterminado | Descripción |
|---|---|---|
| `windowsCopyPaste.features.terminalImagePaste` | `true` | Activar/desactivar la función |
| `windowsCopyPaste.terminalImagePaste.saveDirectory` | `""` | Carpeta de guardado (vacía = globalStorage/images de la extensión) |
| `windowsCopyPaste.terminalImagePaste.fileNamePattern` | `shot-YYYYMMDD-HHmmss.png` | Patrón del nombre de archivo (se sustituyen fecha y hora) |
| `windowsCopyPaste.terminalImagePaste.appendTrailingSpace` | `true` | Añadir un espacio tras la ruta insertada |

---

## Panel de configuración con interruptores

Ejecuta **Open Settings** para abrir un panel en el que puedes activar o desactivar cada función con interruptores.
Los cambios se guardan al instante y se sincronizan con `settings.json` en ambos sentidos.

---

## Qué cambia «Apply Recommended Settings»

Escribe estas 4 opciones en tu configuración de usuario (global):

| Opción | Valor | Efecto |
|---|---|---|
| `editor.emptySelectionClipboard` | `false` | `Ctrl+C` sin nada seleccionado ya no copia la línea entera |
| `editor.copyWithSyntaxHighlighting` | `false` | Copia sin colores ni formato (más parecido a texto sin formato) |
| `terminal.integrated.copyOnSelection` | `true` | Seleccionar texto en la terminal lo copia |
| `terminal.integrated.rightClickBehavior` | `copyPaste` | El clic derecho en la terminal copia / pega |

- **Antes** de aplicarla se hace automáticamente una copia de seguridad de tu configuración actual (solo la primera vez).
- Para **deshacerlo**, ejecuta «Restore Previous Settings».

---

## Activar y desactivar funciones

Cada función se puede activar o desactivar por separado (busca «Windows Copy Paste Mode» en la configuración).

| Opción | Valor predeterminado | Descripción |
|---|---|---|
| `windowsCopyPaste.enabled` | `true` | Interruptor principal. Si está desactivado, se desactiva todo. |
| `windowsCopyPaste.features.settings` | `true` | Aplicar / restaurar la configuración recomendada |
| `windowsCopyPaste.features.copyPlainText` | `true` | Copiar como texto sin formato |
| `windowsCopyPaste.features.pastePlainText` | `true` | Pegar como texto sin formato |
| `windowsCopyPaste.features.safePasteToTerminal` | `true` | Pegado seguro en la terminal |
| `windowsCopyPaste.features.terminalImagePaste` | `true` | Imagen del portapapeles → ruta en la terminal (Windows) |
| `windowsCopyPaste.showOnboarding` | `true` | Mostrar la guía inicial |
| `windowsCopyPaste.backupSettings` | `true` | Hacer copia de seguridad antes de aplicar |
| `windowsCopyPaste.confirmMultiLineTerminalPaste` | `true` | Confirmar antes de pegar varias líneas en la terminal |
| `windowsCopyPaste.multiLinePreviewMaxLines` | `5` | Máximo de líneas de vista previa en la confirmación (1–20) |
| `windowsCopyPaste.language` | `auto` | Idioma de la interfaz (`auto`/`ja`/`en`/`zh-cn`/`zh-tw`/`ko`/`es`/`fr`) |

Si ejecutas un comando cuya función está desactivada, la extensión te indica cómo volver a activarla.

---

## Política de privacidad

Esta extensión está diseñada poniendo tu privacidad en primer lugar.

- **Nunca se comunica con servidores externos.**
- **Sin telemetría (nunca se envían datos de uso).**
- **El contenido del portapapeles nunca se envía a ningún sitio.**
- **No se guarda el historial del portapapeles** (esta versión no tiene función de historial).
- Solo cambia la configuración de VS Code / Cursor; no cambia el comportamiento del portapapeles en todo el sistema.

## Lo que no puede hacer (no disponible en esta versión)

- Pegar imágenes **en el editor** (las imágenes solo se insertan en la terminal como ruta, en Windows)
- Copiar y pegar contenido que no sea texto, como HTML, RTF o Excel
- Enviar imágenes a la terminal en macOS / Linux (por ahora solo Windows)
- Historial del portapapeles / sincronización en la nube
- Cambiar el comportamiento de copiar y pegar en todo el sistema
- Funciones de IA, activación de licencias o pagos (es **gratuita** y no envía nada)

## Preguntas frecuentes

**P. ¿Dejarán de funcionar los `Ctrl+C` / `Ctrl+V` normales?**
R. No. Los atajos estándar no se modifican.

**P. ¿Puedo deshacer la configuración recomendada?**
R. Sí. «Restore Previous Settings» lo deja todo como estaba (antes de aplicar se hace una copia de seguridad).

**P. ¿Pegar en la terminal ejecutará comandos por sí solo?**
R. No. Solo pega y nunca pulsa Enter. Si hay varias líneas, pregunta antes.

---

La información para desarrolladores (compilación, empaquetado, estructura de archivos) está en el [README en japonés](README.md#開発者向け).

## Licencia

MIT License (consulta `LICENSE`).
