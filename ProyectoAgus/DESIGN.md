
# DESIGN.md — Scout AI

## Prompt de Diseño Completo para Stitch

**Proyecto:** Scout AI — Plataforma de Visibilidad para Futbolistas Amateurs
**Stack:** React Native + Expo | Mobile First | iOS & Android | Dark Mode nativo

---

## ⚠️ CONTEXTO ESENCIAL — LEER ANTES DE DISEÑAR

> Esta aplicación **NO es una plataforma de transferencias. NO tiene valores de mercado. NO es para jugadores profesionales.**
>
> Scout AI es el **primer espacio digital real** que tiene un jugador amateur para existir deportivamente. Miles de pibes juegan en ligas locales, torneos de barrio, divisiones formativas — y no tienen ningún lugar donde mostrar lo que hacen. Sus goles no quedan registrados en ningún lado. Sus asistencias no las ve nadie fuera de la cancha.
>
> Scout AI les da eso: **un perfil propio. Su identidad deportiva digital.**
> Nada más, nada menos. Sin precios. Sin valuaciones. Sin rankings inflados.
> Solo un jugador, su historia, sus números y sus videos.

---

## PROMPT PRINCIPAL PARA STITCH

Diseñá  **Scout AI** , una aplicación móvil para **jugadores de fútbol amateurs** que quieren tener un perfil deportivo digital donde mostrar su historia, sus estadísticas personales y sus videos. La app también permite que entrenadores y scouts descubran jugadores mediante búsqueda y filtros.

**El tono visual es:** oscuro, limpio, con personalidad deportiva — pero sin exagerar. No es una app de videojuego. No es FIFA Ultimate Team. Es seria, accesible, y hace que un chico de 19 años que juega en la liga del barrio sienta que su perfil se ve tan bien como el de cualquier jugador profesional.

La referencia visual principal es **FotMob** (datos claros, dark mode, tipografía deportiva precisa) con una capa de **sutileza cinematográfica** similar a Disney+ (profundidad en los fondos, jerarquía visual clara, transiciones suaves). La mezcla debe ser  **elegante sin ser galáctico** . Profesional sin ser pretencioso. Futbolero sin ser un videojuego.

**Instrucción crítica para Stitch:** Realizá el diseño  **completo, sin imperfecciones, con máximo nivel de detalle** . Cada pantalla debe estar terminada. Cada componente debe tener sus estados (default, pressed, loading, empty, error). No dejes nada a medias. El resultado debe poder pasarse directamente a un desarrollador y ser implementable sin ambigüedades.

---

## 1. FILOSOFÍA DE DISEÑO

### Concepto central

**"Tu juego, en tu pantalla."**

No "convertite en profesional". No "el próximo Messi". Solo: *este es tu espacio, mostrá lo que hacés.*

### Pilares visuales

| Pilar                         | Descripción                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Humano primero**      | El jugador es el protagonista. Su foto, su nombre, su historia. No los números.                        |
| **Datos limpios**       | Las estadísticas se muestran de forma clara y ordenada. Sin dramatismo innecesario.                    |
| **Dark con respiro**    | Fondo oscuro, pero con espaciado generoso. No es una interfaz opresiva.                                 |
| **Acento con criterio** | El color verde neón se usa con moderación. Solo donde importa.                                        |
| **Energía contenida**  | Hay dinamismo en la tipografía y los momentos de acción. Pero el 80% de la app es limpia y tranquila. |

### Lo que NO debe hacer el diseño

* ❌ Mostrar "Valor de mercado" o cualquier valuación económica del jugador
* ❌ Usar ratings numéricos como si fuera FIFA (no hay un "87 overall")
* ❌ Efectos visuales excesivos que distraigan del contenido
* ❌ Hacer que el jugador amateur sienta que está en una simulación o videojuego
* ❌ Comparar jugadores con métricas que impliquen ranking o competencia entre ellos

---

## 2. PALETA DE COLORES

### Fondos — Dark Mode base

```
bg-primary:      #0A0A0F    Base de toda la app. Negro azulado, como un estadio de noche.
bg-secondary:    #111118    Cards, superficies elevadas.
bg-tertiary:     #1A1A24    Inputs, modales, bottom sheets.
bg-hover:        #22222E    Estado pressed/hover de elementos interactivos.
border-default:  #2A2A38    Divisores y bordes de cards. Sutil, no agresivo.
```

### Acentos — Usados con criterio

```
accent-green:    #00C98A    Verde césped — más apagado que neón puro. Elegante.
accent-alpha:    #00C98A25  Para fondos de chips activos, glows muy sutiles.
accent-gold:     #E8B84B    Dorado cálido — tarjeta amarilla, logros. No neón.
accent-red:      #E54545    Para tarjetas rojas, errores. Tono calmado, no agresivo.
```

> **Nota de aplicación:** El verde `#00C98A` reemplaza al neón `#00E5A0` anterior. Es más cálido, más humano, menos "videojuego". El dorado es menos amarillo puro y más oro envejecido. Esto baja dos puntos la intensidad visual y sube dos puntos la elegancia.

### Texto

```
text-primary:    #FFFFFF     Títulos, datos principales.
text-secondary:  #9898B0     Subtítulos, labels.
text-tertiary:   #52526A     Placeholders, metadata, secondary info.
text-accent:     #00C98A     Texto con acento (links, valores positivos).
text-on-accent:  #0A0A0F     Texto sobre botones rellenos de acento.
```

### Gradientes

```
overlay-card:    linear(180deg, transparent 30%, #0A0A0F 100%)   Cards con foto
bg-subtle:       linear(180deg, #0A0A0F, #111118)                Fondos de sección
accent-button:   linear(135deg, #00C98A, #00A878)                Botón primario
```

---

## 3. TIPOGRAFÍA

### Tres roles tipográficos

---

#### DISPLAY — Números de camiseta, cifras de impacto, nombre en hero

**Font:** `Jersey M54` (Google Fonts — libre)

Cuándo usarla:

* El número de camiseta en el perfil del jugador
* Cifras grandes de goles o asistencias en el hero del perfil
* Nombre del jugador en formato display dentro de su propio perfil
* Nada más. Esta fuente es escasa por diseño, eso le da peso.

```
Display XL:    64px  / Jersey M54  / tracking: -1px
Display L:     42px  / Jersey M54  / tracking: -0.5px
Display M:     32px  / Jersey M54  / tracking: 0
```

---

#### UI — Todo el texto de interfaz

**Font:** `Inter` (Google Fonts — estándar del sistema en muchos dispositivos)

```
Title L:       22px  / Inter SemiBold 600   / tracking: -0.3px
Title M:       18px  / Inter SemiBold 600   / tracking: -0.2px
Title S:       16px  / Inter SemiBold 600   / tracking: -0.1px
Body L:        16px  / Inter Regular 400    / tracking: 0
Body M:        14px  / Inter Regular 400    / tracking: 0
Body S:        13px  / Inter Regular 400    / tracking: 0
Caption:       12px  / Inter Regular 400    / tracking: 0.2px
Label:         11px  / Inter Medium 500     / tracking: 0.6px  / UPPERCASE
```

---

#### DATA — Tablas de estadísticas, listas densas

**Font:** `Roboto Condensed` (Google Fonts)

```
Data L:        16px  / Roboto Condensed Bold 700
Data M:        14px  / Roboto Condensed Medium 500
Data S:        12px  / Roboto Condensed Regular 400
```

---

### Reglas tipográficas estrictas

1. `Jersey M54` solo aparece en el perfil del jugador. En ninguna otra pantalla.
2. Los números de estadísticas en tablas (goles, partidos, minutos) siempre en `Roboto Condensed Bold`.
3. Los labels de categoría (ej. "POSICIÓN", "CIUDAD") siempre en `Label` style: 11px, Inter Medium, UPPERCASE, `text-tertiary`.
4. El nombre del jugador en una card de lista: `Inter SemiBold 16px`, nunca `Jersey M54`.
5. Nunca combinar dos fuentes display en la misma línea.

---

## 4. NAVEGACIÓN

### Decisión: Tab Bar inferior + Drawer lateral

**Razonamiento:**
En apps deportivas donde el usuario alterna frecuentemente entre su perfil, la búsqueda y sus favoritos, el Tab Bar inferior es la solución más eficiente porque los 5 ítems quedan en el thumb zone natural. El Drawer lateral complementa sin reemplazar: lo accedés desde tu avatar en el header y contiene todo lo secundario (configuración, notificaciones, ayuda).

Esta combinación es la que usan FotMob, Sofascore y las apps deportivas más sólidas del mercado. Es la decisión correcta para Scout AI.

### Tab Bar — 5 ítems

| Posición | Ícono                    | Label     | Destino                    |
| --------- | ------------------------- | --------- | -------------------------- |
| 1         | Casa                      | Inicio    | Feed / Dashboard           |
| 2         | Lupa                      | Buscar    | Buscador de jugadores      |
| 3         | **Central elevado** | —        | Acción rápida según rol |
| 4         | Corazón                  | Favoritos | Listas del scout           |
| 5         | Persona                   | Perfil    | Mi perfil deportivo        |

**Especificaciones Tab Bar:**

```
Altura total:        83px (incluyendo safe area iPhone)
Background:          #111118 + blur backdrop (blur 20px)
Border top:          1px solid #2A2A38
Ícono activo:        #00C98A  +  dot indicator 3px debajo
Ícono inactivo:      #52526A
Label activo:        Caption style, #00C98A
Label inactivo:      Caption style, #52526A

Botón central (FAB embebido):
  Tamaño:            52px circular
  Fondo:             accent-button gradient
  Elevación:         10px sobre el tab bar
  Sombra:            0 4px 16px #00C98A30
  Ícono:             "+" blanco, 22px
  Función jugador:   Subir video / foto
  Función scout:     Nueva lista de seguimiento
```

### Drawer lateral izquierdo

Ancho: 300px. Overlay: `#0A0A0F` alpha 65%. Apertura desde avatar en header (tap).

```
HEADER DEL DRAWER:
  Avatar: 72px circular, con borde 2px accent-green
  Nombre: Title M, text-primary
  Rol badge: chip pequeño con label "Jugador" / "Scout" / "Entrenador"
  Ciudad + club: Body S, text-secondary

ITEMS DEL MENÚ:
  ─── Mi cuenta ───
  · Mi perfil completo
  · Mis estadísticas
  · Mi contenido multimedia

  ─── Scouts ───
  · Mis listas de favoritos
  · Jugadores guardados

  ─── App ───
  · Notificaciones
  · Configuración
  · Ayuda

  ─── (al fondo, separado) ───
  · Cerrar sesión  [color: accent-red]

FOOTER DEL DRAWER:
  Logo Scout AI pequeño + versión de la app, text-tertiary, Caption
```

---

## 5. PANTALLAS — ESPECIFICACIÓN COMPLETA

---

### SPLASH

```
Fondo: bg-primary (#0A0A0F) sólido.
Centro:
  Logo "Scout AI" — Inter Bold, 32px, text-primary
  Subtítulo — "Tu identidad deportiva digital" — Body M, text-secondary
  Separador: línea horizontal 40px, color accent-green, 1.5px, centrada debajo del logo

Animación de entrada:
  Logo y subtítulo hacen fade in desde opacity 0, translateY 12px → 0, 600ms ease-out.
  Sin efectos de partículas. Sin explosiones. Limpio.

Transición a onboarding o login: fade out suave, 400ms.
```

---

### ONBOARDING (3 slides)

```
Slide 1:
  Ilustración: silueta de jugador con balón, líneas simples, monocromática con acento green.
  Título: "Tu perfil. Tu historia."  — Title L, text-primary
  Cuerpo: "Registrá tus partidos, tus goles, tus jugadas. Todo en un solo lugar."
          Body M, text-secondary, centrado, max 2 líneas.

Slide 2:
  Ilustración: teléfono con gráfico de radar simple.
  Título: "Mostrá cómo jugás."
  Cuerpo: "Subí videos de tus jugadas y armaá tu biblioteca deportiva personal."

Slide 3:
  Ilustración: lupa sobre grupo de avatares.
  Título: "Que te encuentren."
  Cuerpo: "Entrenadores y scouts buscan jugadores como vos. Que puedan verte."

Navegación:
  Indicadores de slide: 3 dots, activo = accent-green 8px, inactivo = border-default 6px
  Botón "Siguiente": ghost button derecha
  Botón "Saltear": Label style, text-tertiary, izquierda

Último slide — CTA doble:
  Botón primario: "Crear mi perfil"  (accent-button gradient, full width)
  Link secundario: "Ya tengo una cuenta"  (text-accent, centrado debajo)
```

---

### REGISTRO E INICIO DE SESIÓN

```
AUTH LAYOUT BASE:
  Header: logo pequeño centrado (24px height)
  Fondo: bg-primary

REGISTER — Paso 1 de 2: Datos de acceso
  Campos:
    · Email (TextInput)
    · Contraseña (TextInput, tipo password, toggle mostrar/ocultar)
    · Confirmar contraseña

  Selector de rol (horizontal, 3 opciones tipo tab):
    [Jugador]  [Scout]  [Entrenador]
    El activo tiene fondo #00C98A15 + border accent-green + texto accent
    Los inactivos tienen fondo bg-tertiary + border-default + texto text-secondary

  CTA: Botón "Continuar" (primary, full width)
  Link: "Ya tengo cuenta → Iniciar sesión"

REGISTER — Paso 2 de 2: Datos básicos (solo para Jugador)
  Campos:
    · Nombre
    · Apellido
    · Edad (selector numérico o input)
    · Ciudad
    · Posición principal (selector con lista de posiciones de fútbol)
  CTA: "Crear mi perfil"

  Progress indicator: "Paso 2 de 2" en Caption, text-tertiary, arriba derecha.

LOGIN:
  Campos: Email + Contraseña
  CTA: "Ingresar" (primary, full width)
  Link: "Olvidé mi contraseña" (text-accent, centrado)
  Link: "No tengo cuenta → Registrarme"

FORGOT PASSWORD:
  Campo: Email
  CTA: "Enviar instrucciones"
  Texto de confirmación (después de enviar):
    Ícono check en accent-green + "Revisá tu email" (Title S) +
    explicación en Body S, text-secondary
```

---

### HOME / DASHBOARD

```
STICKY HEADER:
  Izquierda: Avatar del usuario 40px circular (tap → abre Drawer)
  Centro: "Scout AI" — Inter SemiBold 17px, text-primary
  Derecha: ícono campana (notificaciones, badge numérico si hay nuevas)

─────────────────────────────────────
SI EL ROL ES JUGADOR:
─────────────────────────────────────

CARD "MI PERFIL" (hero card, full width, 220px):
  Fondo: foto del jugador con overlay-card gradient (si no hay foto, fondo bg-secondary + ícono avatar)
  Esquina superior derecha: chip de posición "DC" / "MC" / "EXT" — Label style, accent-green bg 20%, border accent
  Número de camiseta: watermark en Jersey M54, 140px, text-primary opacity 8%, esquina derecha
  Sobre el overlay:
    Nombre: Inter SemiBold 20px, text-primary
    Club + Ciudad: Body S, text-secondary
    Row de 3 stats rápidas: Partidos | Goles | Asistencias
      Cada stat: número en Roboto Condensed Bold 20px + label en Label style
      Separados por divisor vertical 1px, border-default

BANNER "Completá tu perfil" (si perfil < 80% completo):
  Borde izquierdo 3px accent-green
  Fondo bg-secondary
  Progress bar lineal con porcentaje en accent-green
  Texto: "Tu perfil está al X%. Completalo para que más personas te encuentren."
  CTA: "Completar" — link en text-accent

SECCIÓN "Últimas actividades" (lista vertical, cards simples):
  Ítems tipo: "Agregaste 2 videos esta semana" / "Tu perfil fue visto 14 veces"
  Ícono izquierda + texto Body M + fecha en Caption text-tertiary

─────────────────────────────────────
SI EL ROL ES SCOUT O ENTRENADOR:
─────────────────────────────────────

CARD "Búsqueda rápida" (reemplaza el hero del jugador):
  Fondo bg-secondary, padding 20px
  Título: "Buscar jugadores" — Title M
  3 chips de filtro rápido: Posición / Ciudad / Categoría
  CTA: "Ver todos los jugadores" (ghost button)

SECCIÓN "Guardados recientemente":
  Scroll horizontal de PlayerCards compactas

SECCIÓN "Búsquedas frecuentes":
  Chips de búsquedas previas del scout
```

---

### PERFIL DEL JUGADOR

> Esta pantalla es el corazón de la app. El equivalente a una ficha deportiva real.
> NO tiene valor de mercado. NO tiene rating numérico general. SÍ tiene estadísticas reales del jugador y sus atributos.

```
HERO SECTION (full width, 260px):
  Foto del jugador como fondo + overlay-card gradient
  Si no hay foto: fondo degradado bg-secondary → bg-tertiary + ícono avatar centrado

  Watermark: número de camiseta en Jersey M54, 170px, opacity 7%, esquina inferior derecha
  Chip posición: "DELANTERO CENTRO" en Label style, bg #00C98A20, border accent, esquina superior izquierda

  Sobre el overlay (alineado al fondo izquierdo):
    Apellido: Jersey M54 36px, text-primary
    Nombre: Inter Regular 18px, text-secondary
    Row: 🏙️ Ciudad · 📅 Edad · 🦵 Pierna hábil  — Caption, text-secondary, separados por "·"

  Esquina superior derecha (si el scout lo está viendo):
    Ícono corazón → guardar en favoritos (ghost, 36px circular, bg-tertiary)

QUICK INFO ROW (4 columnas, debajo del hero):
  Fondo: bg-secondary, padding 16px, border bottom 1px border-default
  Columnas: Club | Categoría | Altura | Peso
  Cada columna: valor en Data M Roboto Bold + label debajo en Label style text-tertiary
  Separadores verticales 1px border-default

TAB NAVIGATION (sticky debajo del quick info row):
  [Estadísticas] [Atributos] [Multimedia] [Sobre mí]
  Fondo: bg-primary
  Tab activo: border bottom 2px accent-green + label text-accent Inter SemiBold
  Tab inactivo: label text-tertiary
  Sin fondos ni pills. Solo el underline.

━━━━━━━━━━━━━━━━━━
TAB: ESTADÍSTICAS
━━━━━━━━━━━━━━━━━━
  Título de sección: "Estadísticas" — Title S, text-primary + temporada en Caption text-tertiary

  GRID 2x3 de stat cards:
    Cada card: fondo bg-secondary, border-radius 12px, padding 16px
    Número: Roboto Condensed Bold 28px, text-primary
    Label: Label style, text-tertiary
    Stats: Partidos | Minutos | Goles | Asistencias | Amarillas | Rojas

    Visual especial para Goles y Asistencias:
      Si el valor > 0: número en text-accent (verde) en lugar de text-primary

    Visual para Amarillas:
      Si > 3: número en accent-gold
    Visual para Rojas:
      Si > 0: número en accent-red

  INDICADORES CALCULADOS (debajo del grid):
    Título: "Por partido" — Label style, text-tertiary, uppercase
    Dos rows simples:
      Goles/partido: valor decimal + label  (Roboto Condensed)
      Asistencias/partido: ídem
      Participación ofensiva: goles + asistencias (suma, no ratio)

  NOTA EXPLÍCITA (pequeña, subtle):
    Caption, text-tertiary, italic:
    "Las estadísticas son ingresadas por el propio jugador."

━━━━━━━━━━━━━━━━━━
TAB: ATRIBUTOS
━━━━━━━━━━━━━━━━━━
  DESCRIPCIÓN INTRO (antes del radar):
    Body S, text-secondary:
    "El jugador calificó sus propias habilidades en 4 dimensiones.
     Esto es una autopercepción deportiva, no una evaluación externa."

  RADAR CHART (280px, centrado):
    4 ejes: Técnica · Física · Táctica · Mental
    Fill del polígono: #00C98A20 (alpha muy suave)
    Línea del radar: #00C98A, 1.5px
    Puntos en vértices: círculos 5px, fill accent-green
    Labels de eje: Label style, text-secondary
    Valores en los vértices: Caption, text-primary
    Grid interior: 3 niveles en border-default, opacity 40%

  DIMENSIONES (4 cards debajo del radar):
    Cada card: fondo bg-secondary, radius 12px, padding 16px
    Header: nombre de dimensión en Title S + valor promedio de esa dimensión en Data L accent-green
    4 atributos: fila con label (Body S text-secondary) + barra de progreso (accent-green fill, bg-tertiary) + valor numérico (Data S text-primary)
    La barra de progreso es de 1 a 10. Sin dramatismo. Simple y legible.

  FORTALEZAS Y ASPECTOS A MEJORAR (sección separada debajo):
    Título: "Características" — Title S
    Chips de fortalezas: fondo #00C98A15, border accent, texto text-primary, Body S
    Chips de aspectos a mejorar: fondo bg-tertiary, border border-default, texto text-secondary

━━━━━━━━━━━━━━━━━━
TAB: MULTIMEDIA
━━━━━━━━━━━━━━━━━━
  FILTER CHIPS (scroll horizontal, sin fondo de sección):
    [Todos] [Fase Ofensiva] [Fase Defensiva] [Juego Asociativo] [Aéreo] [Transiciones] [Táctica]
    Chips estilo standard del design system.

  GRID DE CONTENIDO (2 columnas, gap 8px):
    Video item:
      Thumbnail 16:9, radius 10px
      Overlay oscuro sutil en la parte inferior con título en Caption text-primary
      Chip de subcategoría (ej. "Gol") en esquina superior izquierda — Label style, bg-tertiary
      Ícono play circular blanco (32px) centrado en el thumbnail
      Duración del video en Caption text-primary, esquina inferior derecha

    Foto item:
      Imagen, radius 10px
      Chip de subcategoría en esquina superior izquierda

    Estado vacío (si no hay contenido):
      Ícono de cámara, 48px, text-tertiary
      "Todavía no hay videos ni fotos" — Body M, text-tertiary
      "Subí tu primer clip" — link text-accent (solo si es el propio jugador)

━━━━━━━━━━━━━━━━━━
TAB: SOBRE MÍ
━━━━━━━━━━━━━━━━━━
  DESCRIPCIÓN PERSONAL:
    Si tiene texto: Body M, text-secondary, padding 16px
    Si está vacío (propio perfil): placeholder "Contá algo sobre vos y cómo jugás..."

  POSICIONES:
    Label "POSICIÓN PRINCIPAL" → chip accent
    Label "POSICIONES SECUNDARIAS" → chips ghost

  DATOS FÍSICOS:
    Row: Altura · Peso · Pierna hábil

  CLUB ACTUAL + CATEGORÍA:
    Body M, text-secondary

  NACIONALIDAD:
    Bandera emoji + nombre del país
```

---

### BUSCADOR DE JUGADORES

```
PANTALLA BASE:
  STICKY SEARCH BAR:
    Search input pill (radius 24px, bg-tertiary)
    Ícono lupa left: text-tertiary
    Placeholder: "Buscar por nombre, posición, ciudad..."
    Botón "Filtros" a la derecha con ícono slider y counter badge si hay filtros activos

  CHIPS DE FILTRO RÁPIDO (scroll horizontal debajo de search bar):
    Posiciones más comunes: DC · MC · EXT · LI/LD · GK
    Al tap: activa como filtro + se resalta en accent

  RESULTADOS (lista vertical):
    PlayerListItem:
      Avatar: 52px circular (foto o inicial)
      Columna izquierda: Nombre en Title S + Posición en Body S text-secondary + Ciudad en Caption text-tertiary
      Columna derecha: chip de categoría + ícono flecha derecha text-tertiary

    Al deslizar izquierda (swipe): acción "Guardar" en accent-green con ícono corazón
    Al tap: navega al perfil del jugador

  ESTADO VACÍO (sin resultados):
    Ícono lupa, 48px, text-tertiary
    "No encontramos jugadores con esos filtros" — Body M text-tertiary
    "Probá con otros criterios" — Caption text-tertiary

BOTTOM SHEET DE FILTROS:
  Handle bar: 36px ancho, 4px alto, radius full, bg-hover, centrado arriba
  Título: "Filtrar jugadores" — Title M
  
  Secciones separadas por Label style:
  
  "POSICIÓN":
    Grid de chips 3 columnas: todas las posiciones de fútbol
  
  "EDAD":
    Range slider: min 14 - max 45. Labels a los extremos. Valor seleccionado en accent.
  
  "CIUDAD":
    TextInput con ícono pin
  
  "PIERNA HÁBIL":
    3 opciones tipo tab: Derecha / Izquierda / Ambas
  
  "ALTURA (cm)":
    Range slider: 150 - 210
  
  "CATEGORÍA":
    Chips: Infantil / Juvenil / Reserva / Primera / Veteranos

  CTAs fijos al fondo del sheet:
    "Limpiar filtros" — ghost button
    "Aplicar filtros" — primary button con counter de filtros activos
```

---

### FAVORITOS (Scout / Entrenador)

```
HEADER: "Mis listas" — Title L + botón "+" en esquina derecha

LISTA DE LISTAS (si tiene):
  Card por lista:
    Fondo bg-secondary, radius 16px, padding 16px
    Nombre de la lista: Title S text-primary
    Cantidad: "X jugadores" — Body S text-secondary
    Stack de avatares (hasta 4 apilados + "+N más" si hay más)
    Ícono flecha derecha text-tertiary
    Swipe izquierda: eliminar lista (rojo, confirmación alert)

EMPTY STATE (si no tiene listas):
  Ícono corazón, 48px, text-tertiary
  "Todavía no tenés listas de seguimiento" — Body M text-tertiary
  "Creá tu primera lista y guardá jugadores" — Body S text-tertiary
  CTA: Botón "Crear mi primera lista" (ghost button, accent border)

MODAL: CREAR NUEVA LISTA:
  Bottom sheet
  Input: Nombre de la lista (ej. "Mediocampistas Bs. As.")
  CTA: "Crear lista"

DENTRO DE UNA LISTA (al entrar a una card):
  Header: nombre de lista + "X jugadores"
  Lista vertical de PlayerListItems (mismo que buscador)
  Botón flotante: "Comparar" (aparece al seleccionar 2 jugadores con tap largo)
```

---

### SUBIR CONTENIDO MULTIMEDIA (Flujo del Jugador)

```
PASO 1: Selección de origen
  Bottom sheet con opciones:
    [Cámara] [Galería de fotos] [Galería de videos]

PASO 2: Preview
  Preview del archivo seleccionado (fullscreen para video, ajustado para foto)
  Botón "Usar este" (accent) + "Elegir otro" (ghost)

PASO 3: Categorización
  Título: "¿Qué tipo de jugada es?" — Title M
  
  Categoría (chips grandes, 1 sola selección):
    Fase Ofensiva · Fase Defensiva · Juego Asociativo · Aéreo · Transiciones · Táctica
  
  Subcategoría (chips pequeños, aparecen según categoría seleccionada):
    Ejemplo si Fase Ofensiva: Gol · Remate · Asistencia · Centro · Conducción

  Input: Título del clip (Body M, max 60 caracteres)
  Textarea: Descripción opcional (max 200 caracteres)
  
  Toggle: Visibilidad — Público / Solo yo

PASO 4: Subida
  Progress bar lineal con porcentaje
  Texto: "Subiendo tu clip..." — Body M text-secondary
  NO cancelable durante subida (evitar errores de estado)

PASO 5: Confirmación
  Ícono check accent-green, 56px
  "¡Listo! Tu clip fue agregado a tu biblioteca."
  CTA: "Ver mi biblioteca" + "Subir otro clip"
```

---

### EDITAR PERFIL

```
Header: "Editar perfil" + botón "Guardar" en esquina derecha (text-accent, deshabilitado hasta que haya cambios)

SECCIONES (scroll vertical):

FOTO DE PERFIL:
  Avatar 100px circular centrado
  Botón tap sobre el avatar: "Cambiar foto" — Caption text-accent

INFORMACIÓN PERSONAL:
  Nombre · Apellido · Edad · Ciudad · Nacionalidad
  Cada campo en TextInput estándar

INFORMACIÓN FÍSICA:
  Altura (cm) · Peso (kg)
  Selector: Pierna hábil (Derecha / Izquierda / Ambas)

INFORMACIÓN DEPORTIVA:
  Posición principal (selector con modal de opciones)
  Posiciones secundarias (multi-select, máximo 3)
  Club actual (TextInput)
  Categoría (selector)
  Número de camiseta (TextInput numérico, opcional)

DESCRIPCIÓN PERSONAL:
  Textarea, max 500 caracteres
  Counter visible: "X / 500"

ESTADÍSTICAS:
  Enlace separado a pantalla de edición de estadísticas
  (No se editan inline en esta pantalla para evitar errores)

FORTALEZAS (máx. 5):
  Grid de chips seleccionables. Los seleccionados tienen borde accent.

ASPECTOS A MEJORAR (máx. 5):
  Ídem.
```

---

## 6. COMPONENTES — ESPECIFICACIÓN COMPLETA

### TextInput

```
Default:   fondo bg-tertiary / border 1.5px border-default / radius 12px / altura 52px
Focus:     border 1.5px accent-green / glow exterior: 0 0 0 3px #00C98A15
Error:     border 1.5px accent-red / mensaje de error en Caption accent-red debajo
Disabled:  opacity 40%
Label:     Label style encima del input, text-secondary
```

### Botón Primario

```
Fondo:       accent-button gradient
Texto:       Inter SemiBold 16px, text-on-accent (#0A0A0F)
Radius:      12px
Altura:      52px
Padding:     0 24px
Sombra:      0 4px 16px #00C98A30
Press:       scale 0.97 + opacity 0.88, 100ms
Disabled:    fondo bg-tertiary / texto text-tertiary / sin sombra
Loading:     spinner blanco centrado, texto oculto
```

### Botón Ghost

```
Fondo:       transparent
Border:      1.5px border-default
Texto:       Inter SemiBold 16px, text-primary
Radius:      12px
Altura:      52px
Press:       fondo bg-tertiary
```

### PlayerCard (en listas y buscador)

```
Layout:      horizontal, padding 16px, border-bottom 1px border-default
Avatar:      52px circular, fondo bg-tertiary si no hay foto, inicial del jugador en Title S
Info:        Columna flexible — nombre Title S + posición Body S text-secondary + ciudad Caption text-tertiary
Derecha:     chip de categoría Label + flecha ícono 16px text-tertiary
Press:       fondo bg-hover, 80ms
```

### PlayerCard (modo grid / destacados)

```
Tamaño:      (ancho pantalla - 40px) / 2
Altura:      200px
Radius:      14px
Fondo:       foto con overlay-card / si no hay foto: bg-secondary
Contenido:   chip posición arriba + nombre Inter SemiBold 15px + ciudad Caption
Border:      1px border-default
Press:       border accent-green leve (0 → visible en 100ms)
```

### Chip / Tag

```
Activo:      fondo #00C98A18, border 1px accent-green, texto text-accent Inter Medium 13px
Inactivo:    fondo bg-tertiary, border 1px border-default, texto text-secondary
Radius:      20px (pill)
Padding:     8px 14px
Altura:      32px
```

### Avatar circular

```
Tamaños:     40px (header/drawer) / 52px (listas) / 72px (drawer header) / 100px (editar perfil)
Border:      sin borde por defecto / 2px accent-green cuando es el propio usuario logueado
Fallback:    fondo bg-tertiary / inicial del nombre en Inter SemiBold, text-secondary
```

### Skeleton / Loading

```
Fondo animado: shimmer de #1A1A24 → #22222E → #1A1A24, de izquierda a derecha, 1.2s loop
Radius:        igual al componente real
Uso:           siempre que haya fetch de datos. Nunca spinner global de pantalla completa.
```

### Snackbar / Toast

```
Posición:    bottom center, 16px sobre el tab bar
Fondo:       bg-secondary, radius 12px, padding 14px 20px
Texto:       Body S, text-primary
Icono:       16px a la izquierda (check verde / exclamación naranja / x rojo)
Duración:    3 segundos, fade out 300ms
```

### Bottom Sheet

```
Fondo:        bg-secondary
Radius:       20px arriba-izquierda y arriba-derecha, 0 abajo
Handle:       36px ancho, 4px alto, radius full, bg-hover, centrado, margin-top 12px
Overlay:      #0A0A0F alpha 60%
Animación:    slide up con spring (stiffness 300, damping 30)
Scroll:       habilitado si el contenido supera el 80% del viewport
Keyboard:     el sheet sube cuando aparece el teclado
```

---

## 7. ESTADOS DE LA INTERFAZ

Para cada pantalla o componente que muestre datos, Stitch debe diseñar estos 5 estados:

```
1. LOADING     → Skeleton del componente real
2. EMPTY       → Ilustración simple + texto explicativo + CTA si aplica
3. ERROR       → Ícono exclamación + mensaje + botón "Reintentar"
4. DEFAULT     → Pantalla normal con datos
5. PRESSED     → Feedback visual inmediato (scale / color / fondo)
```

---

## 8. ANIMACIONES

```
Transición entre pantallas (stack):
  Slide horizontal. Duración 280ms. Easing: ease-in-out.

Modal / Bottom Sheet:
  Slide up. Spring: stiffness 300, damping 32. Overlay fade 200ms.

Tab bar:
  Dot indicator desliza horizontalmente entre tabs. Duración 200ms. Spring.

Botones (press feedback):
  scale(0.97) + opacity(0.88). Duración 100ms. Spring back 200ms.

Radar chart (al cargar):
  Los polígonos se expanden desde el centro hacia afuera.
  Duración 600ms. Easing ease-out.

Stats counter (al entrar a perfil):
  Los números cuentan desde 0 al valor real.
  Duración 800ms. Easing ease-out.

Skeleton shimmer:
  Loop continuo. Gradiente animado de izquierda a derecha. 1.2s por ciclo.

Swipe para guardar (PlayerListItem):
  Revela fondo accent-green con ícono corazón al deslizar izquierda.
  Threshold: 30% del ancho del item para confirmar la acción.
```

---

## 9. TOKENS DE DISEÑO — PARA IMPLEMENTACIÓN

```typescript
// theme/tokens.ts

export const colors = {
  bg: {
    primary:   '#0A0A0F',
    secondary: '#111118',
    tertiary:  '#1A1A24',
    hover:     '#22222E',
  },
  border: {
    default:   '#2A2A38',
    accent:    '#00C98A',
    danger:    '#E54545',
  },
  accent: {
    green:     '#00C98A',
    greenAlpha:'#00C98A25',
    gold:      '#E8B84B',
    goldAlpha: '#E8B84B25',
    red:       '#E54545',
    redAlpha:  '#E5454520',
  },
  text: {
    primary:   '#FFFFFF',
    secondary: '#9898B0',
    tertiary:  '#52526A',
    accent:    '#00C98A',
    onAccent:  '#0A0A0F',
  },
};

export const fonts = {
  display: 'JerseyM54',            // Solo en hero del perfil del jugador
  ui:      'Inter',                 // Todo lo demás
  data:    'RobotoCondensed',       // Tablas y estadísticas
};

export const spacing = {
  xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48,
};

export const radii = {
  sm: 8, md: 12, lg: 16, xl: 20, full: 9999,
};

export const shadows = {
  accentGlow: {
    shadowColor:   '#00C98A',
    shadowOffset:  { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius:  16,
    elevation: 6,
  },
  card: {
    shadowColor:   '#000000',
    shadowOffset:  { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius:  12,
    elevation: 4,
  },
};
```

---

## 10. ESPACIADO Y GRILLA

```
Unidad base:              4px
Padding horizontal base:  16px  (todas las pantallas)
Padding de sección:       24px top  /  16px bottom
Gap entre cards lista:    0px (separados por border-bottom, no por espacio)
Gap entre cards grid:     8px
Gap entre secciones:      24px

Breakpoints internos RN:
  Small (SE, 13 mini):    375px → todo funciona sin cambios
  Standard (14/15):       390px → referencia principal
  Large (Plus / Pro Max): 430px → grids pueden ser de 3 col si aplica
```

---

## RESUMEN FINAL PARA STITCH

> Diseñá  **Scout AI** , una app móvil de fútbol amateur en React Native + Expo. Mobile First. Dark mode nativo. Tono visual:  **FotMob mezclado con la sutileza de Disney+, bajado dos puntos de intensidad para que sea elegante sin ser galáctico** .
>
> Esta app  **NO tiene valores de mercado ni ratings competitivos** . Es el espacio donde un jugador amateur registra sus partidos, sus goles, sus jugadas y se hace visible para entrenadores y scouts. Simple, humano, bien ejecutado.
>
> Paleta: fondo `#0A0A0F`, acento verde `#00C98A` (no neón puro, verde cálido), dorado `#E8B84B`. Tipografía: `Jersey M54` solo en el hero del perfil (número de camiseta + nombre), `Inter` para toda la UI, `Roboto Condensed` para estadísticas y tablas. Navegación: **Tab Bar inferior 5 ítems** (con botón central elevado) **+ Drawer lateral izquierdo** para opciones secundarias.
>
> **Ejecutá cada pantalla de forma completa, sin dejar componentes sin especificar. Cada pantalla debe tener sus 5 estados: loading, empty, error, default y pressed. Sin imperfecciones. Sin dejar nada a medias. El resultado debe ser entregable a un desarrollador directamente.**
>
