# Rio + Tienda Nube (Esencial): qué es, qué se puede tocar y qué no

Documento **para vos** antes de la reunión y durante la implementación. No es para el cliente. Complementa [REUNION.md](./REUNION.md), [NO-PROMETER.md](./NO-PROMETER.md) y [PROPUESTAS.md](../PROPUESTAS.md).

**Contexto:** [ciervonegro.com.ar](https://www.ciervonegro.com.ar) — plan **Esencial**, plantilla **Rio** (oficial, sin costo extra de plantilla).

---

## Cómo pensar Tienda Nube (si venís de React, Wix o WordPress)

| Lo que podés estar imaginando | Cómo funciona en TN (Rio, Esencial) |
| --- | --- |
| **Wix / Webflow:** arrastrás cualquier caja, dibujás el header, cambiás el ícono del menú | **Plantilla fija:** Rio ya definió el HTML, el menú hamburguesa, el carrito, la ficha. Vos **configurás** opciones y **ordenás secciones** en el editor. |
| **WordPress + Elementor:** widget por widget, muchas formas | **Módulos de home:** lista cerrada (slide, banners, destacados, video, Instagram…). Activás, reordenás, elegís grilla o carrusel. No inventás un módulo nuevo. |
| **React:** cada componente es tuyo | **Rio es el dueño del componente.** Tu trabajo es **contenido + toggles + CSS cosmético** (si el panel lo permite). |
| **Figma → código** | **Figma → admin TN.** El prototipo React solo **maqueta** lo publicable; no se sube. |

**Tres palancas reales** (en orden de uso):

1. **Editor de diseño** — casi todo el alcance de CIERVO NEGRO.
2. **CSS avanzado** (si aparece en *este* admin) — retoques; no arquitectura nueva.
3. **Código de plantilla (FTP)** — plan **Impulso**; otro proyecto. **No aplica acá.**

Rutas útiles: [Guía personalizar diseño](https://ayuda.tiendanube.com/es_AR/diseno/guia-personalizar-el-diseno-de-tu-tiendanube), [Tienda de diseños](https://www.tiendanube.com/tienda-disenos-nube), [¿Qué diseño elegir?](https://ayuda.tiendanube.com/es_ES/informacion-general-design/que-diseno-elegir-para-mi-tienda).

---

## ¿Cambiar de plantilla? ¿Afecta todo? ¿Cuánto trabajo?

### Lo que **no** se pierde (vive en la cuenta, no en el tema)

- Productos, variantes, precios, stock.
- Categorías y menú de navegación (estructura de categorías).
- Páginas de contenido (Quiénes somos, FAQ, etc.) — el **texto** queda; puede cambiar **cómo se ve**.
- Pedidos, clientes, medios de pago y envío (config de tienda).
- Dominio y plan.

### Lo que **sí** se resetea o hay que rehacer

| Área | Qué pasa al cambiar de Rio → otra plantilla |
| --- | --- |
| **Home** | Orden de secciones, slide/ciervo, banners vacíos/llenos, carruseles, video, Instagram — **se reconfigura** en la plantilla nueva (nombres y opciones distintas). |
| **Colores y tipografía** | Paleta y fuentes: **volver a elegir** (muchas plantillas comparten ideas, no copian valores). |
| **Encabezado / pie** | Logo sí; transparente, compress, buscador ícono vs barra — **de nuevo según la plantilla**. |
| **Ficha de producto** | Mismos datos; **layout distinto** (dónde va precio, galería, botón). |
| **Listado / grilla** | Columnas, rollover, etiquetas — **opciones del tema nuevo**. |
| **CSS pegado en Rio** | Selectores `.js-head-main`, clases Rio — **muchas veces dejan de aplicar** o rompen cosas. Hay que reescribir o borrar. |
| **Ajustes finos** | Todo lo que memorizaste de “cómo se ve hoy” en Rio. |

**No** es “migrar código”. Es **volver a diseñar en el editor** de otra plantilla, con los mismos productos.

### ¿Es mucho trabajo?

Orden de magnitud honesto para una tienda como CIERVO NEGRO (~89 productos, home trabajada, categorías anidadas):

| Escenario | Esfuerzo |
| --- | --- |
| **Probar otra plantilla en preview** sin publicar | 1–2 h para ver si el look cierra |
| **Publicar otra plantilla gratuita** y dejar la home “presentable” | **½–2 días** (home, header, colores, banners, destacados, revisar ficha y listado en móvil) |
| **Igualar sensación actual de Rio** (oscura, hero, promos, rollover) en otra plantilla | Puede ser **2–4 días** si la plantilla no trae las mismas piezas por defecto |
| **+ FTP / Impulso** en plantilla nueva | Proyecto aparte, mantenimiento continuo |

**Recomendación del proyecto:** **no cambiar** para este cliente. Rio ya está alineada (oscuro, hero, menú por categorías). El problema acordado es **orden y contenido de la home**, no “mala plantilla”.

**Frase para el meet si pregunta:**

> “Se puede cambiar de diseño en Tienda Nube, pero no es un click: hay que armar de nuevo la portada, los colores y el encabezado. Con Rio ya tenés el look de marca; lo que proponemos es ordenar la home sin tirar eso a la basura.”

### Alternativas gratuitas (AR)

Catálogo oficial grande: Rio, Amazonas, Recife, Simple, Lima, Cali, Morelia, Ipanema, etc. — **sin precio de plantilla** en el mercado hispano. Plantillas **de pago** son más típicas de **Nuvemshop Brasil** (terceros).

**Ipanema** (gratis): editor por **secciones/bloques**, más flexible que Rio. Cambiar a Ipanema = **reimplementar el diseño**, no “upgrades automáticos”.

---

## Mapa de la tienda: piezas de Rio que ves en vivo

Referencia mental al scrollear [ciervonegro.com.ar](https://www.ciervonegro.com.ar) y el admin **Tienda online → Diseño → Editar diseño**.

### Barra de anuncios (arriba de todo)

| Podés (editor) | No podés (Esencial) |
| --- | --- |
| Texto, link, fijo vs animado/marquee | Diseño custom (otra tipografía fuera de lista, iconos propios en la barra) |
| Mostrar/ocultar | Dos barras con lógica distinta por página (salvo hacks CSS) |

### Encabezado (header)

| Elemento | Qué podés modificar | Qué **no** podés (sin FTP) |
| --- | --- | --- |
| **Logo** | Imagen, tamaño en lista de opciones, enlace a home | SVG animado custom como logo interactivo |
| **Fondo** | Color sólido, transparente sobre slide (`head-transparent`), al scroll sólido + **`compress`** (logo más chico) | Header con otra estructura (logo centrado permanente, barra partida en dos filas) — Rio es **logo izquierda** |
| **Íconos** (buscar, cuenta, carrito) | **Color** (paleta del tema), orden fijo del tema | **Forma** del ícono, animación al hover, ícono de carrito distinto |
| **Buscador** | **Ícono** vs **barra visible**; en Rio a veces **distinto en desktop y móvil** | Autocompletado custom, filtros en el buscador, buscador dentro del menú lateral con UI nueva |
| **Menú hamburguesa (☰)** | Abre el **menú de categorías** que configuraste en TN (Estadios, Legacy, etc.) | Cambiar el ícono por otro dibujo, animación “X” custom, meter banners o HTML dentro del drawer |
| **Contenido del menú lateral** | Jerarquía de **categorías** y páginas enlazadas en el admin | Mega menú con imágenes por club, columnas libres, chips “River/Boca” |
| **Fijo al scroll** | Opciones del tema (sticky, compress) | Header que desaparece distinto a las opciones Rio |

**Trampa del prototipo React:** `Header.jsx` / `MenuDrawer.jsx` pueden tener **cualquier** hamburguesa, animación y layout. **En TN es el drawer de Rio + árbol de categorías.** No prometas lo del prototipo si no está en la lista de arriba.

### Home — secciones (contenedores)

No hay “divs” sueltos: hay **módulos** que reordenás.

| Módulo típico en Rio | Qué controlás | Límites |
| --- | --- | --- |
| **Imagen / slide principal** | Foto del ciervo, enlace opcional, altura según opciones | No es un carrusel infinito custom sin código; no superponer header custom encima con otro HTML |
| **Banners promocionales / categorías** | Hasta **4** imágenes con link (categorías) | Tamaño según plantilla; no “tiles” con forma irregular sin CSS |
| **Destacados / Novedades** | Productos tildados en admin, título, **grilla vs carrusel**, cantidad visible | No cambiar la tarjeta de producto a otro componente; rollover es **toggle** |
| **Video YouTube/Vimeo** | URL, posición en el orden | Autoplay según políticas del tema/navegador |
| **Mensaje institucional** | Título + texto (propuesta A) | No es un bloque con diseño libre tipo landing |
| **Instagram** | Módulo + token Meta + usuario | Si no conecta, no hay feed |
| **Newsletter** | Activar y textos del módulo | Formulario y envío = TN |

**Orden:** arrastrar en el editor. **Formas / bordes / radios** de cada bloque: en general **fijos en Rio**; con CSS a veces redondeás o espaciás, no cambiás el sistema de grillas.

### Listado de productos (categoría / búsqueda)

| Podés | No podés |
| --- | --- |
| Columnas según opciones, imagen principal, **rollover** (2.ª foto), etiquetas promocionales TN (`4x3`, envío gratis) | Filtros facetados custom (club, estadio), layout masonry inventado |
| Orden por defecto de TN | Reordenar la grilla con drag en el listado público |

Las etiquetas `4x3` / “Envío gratis” sobre la foto: **diseño de promo TN**; cambiar forma/posición = **código de plantilla** (Impulso).

### Ficha de producto (PDP)

| Podés | No podés |
| --- | --- |
| Galería, variantes, descripción, precio, cuotas según medios de pago, **guía de talles** (módulo → página), calculadora de envío (TN), productos relacionados si el tema lo muestra | Nombre debajo del precio, sticky bar inventada, galería tipo “stories”, zoom custom |
| HTML en la descripción (con cuidado en tema oscuro) | Reordenar bloques como en Shopify con sections arbitrarias |

### Carrito y checkout

| Podés | No podés |
| --- | --- |
| Colores de botones (paleta), ícono que abre **carrito de Rio** (página o lateral según tema) | `CartDrawer` del prototipo, upsells custom en drawer |
| Mensajes en checkout (TN) | Rehacer flujo de pago |

Checkout, Pago Nube y envíos: **config de tienda**, no del meet de diseño.

### Pie (footer)

| Podés | No podés |
| --- | --- |
| Columnas de enlaces (páginas, categorías), redes, WhatsApp, datos de contacto, medios de pago/envío mostrados | Footer de 5 columnas con maquetación libre si Rio no lo ofrece |
| Colores de fondo/texto vía paleta | Ilustraciones o mapa embebido custom sin HTML en página |

### Páginas institucionales (Quiénes somos, FAQ, guía)

| Podés | No podés |
| --- | --- |
| Texto, imágenes, HTML básico en el cuerpo | Theme distinto al resto de la tienda (salvo CSS) |
| Mismo menú y header que el resto | URL con layout “landing” sin header |

**Ojo:** pegar `color: #333` en HTML oscuro = texto ilegible. Usar estilos que hereden del tema.

### Tipografía y colores globales

| Podés | No podés |
| --- | --- |
| Paleta TN (fondo `#0A0809`, texto, botones), fuentes de la **lista del diseño** (ej. Plus Jakarta Sans) | Subir .woff y familia tipográfica propia (FTP / código) |
| Ajustar tamaños **acotados** en editor | Escala tipográfica distinta en cada breakpoint a medida |

### Animaciones y microinteracciones

| Podés | No podés |
| --- | --- |
| Marquee en barra de anuncios (si molesta, apagarlo), transiciones que trae Rio (compress, hover rollover en foto) | Animaciones de entrada por sección tipo AOS/Framer, hamburguesa que morph a X con path custom |
| CSS: `transition` suave en algo puntual si no rompe layout | Librerías JS en Esencial sin FTP |

### CSS avanzado (cuando el campo existe)

**Buen uso:** más margen entre hero y “Destacados”, ocultar un elemento concreto, ajustar tamaño de título de sección, forzar `display:none` en un tachado erróneo (si Rio no lo oculta).

**Mal uso (no prometas):** “nuevo header”, “grid de 5 columnas”, “menú fullscreen con video de fondo”.

**Siempre:** inspeccionar en la tienda publicada; los selectores **cambian entre plantillas** y con actualizaciones de Rio.

---

## Checklist: “¿esto lo puedo prometer en Esencial + Rio?”

Usalo cuando mires el prototipo o una idea nueva.

| Pregunta | Si la respuesta es… | Entonces |
| --- | --- | --- |
| ¿Está en **Diseño → Editar diseño** como opción o módulo? | Sí | Probablemente **sí** |
| ¿Es solo cambiar **texto, imagen, productos tildados, categorías**? | Sí | **Sí** |
| ¿Es cambiar **forma de ícono, menú, carrito, ficha**? | Sí | **No** (salvo Impulso/FTP) |
| ¿Es un bloque que **no existe** en la lista de módulos Rio? | Sí | **No** (o plantilla Ipanema + re-maquetar, u otro presupuesto) |
| ¿Solo lo vi en **React** (`ciervo-negro-edicion`)? | Sí | Etiquetar **boceto**; ver [PREVIEW-VS-REAL.md](./PREVIEW-VS-REAL.md) |

---

## Relación con este repo

| Prototipo (React) | Tienda Nube (Rio) |
| --- | --- |
| `Header`, hamburguesa animada, cualquier ícono | Opciones del encabezado Rio |
| `ProductCard` rollover en CSS | Toggle “imagen al pasar el mouse” en listado |
| `AnnouncementBar` | Barra de anuncios del editor |
| Carrusel “inventado” | Módulo destacados/novedades en carrusel |
| `InstagramFeed` con fotos de producto | Módulo Instagram + token |

---

## Resumen en una página

1. **Rio gratis** con plan **Esencial** (ya lo tienen). El costo es el plan, no el theme.
2. **Cambiar de plantilla** = conservar catálogo, **rehacer diseño** (días, no minutos). **No recomendado** acá.
3. **Personalización real** = editor + contenido + pocos toggles; **CSS** para pinceladas; **no** rediseño de header/hamburguesa/carrito/ficha en Esencial.
4. **Hamburguesa:** abre menú de **categorías TN**; no es un canvas para íconos y animaciones custom.
5. El **meet** vende configuración inteligente de Rio, no un sitio nuevo.

Para el guion con el cliente: [REUNION.md](./REUNION.md).  
Para frases de “no vender”: [NO-PROMETER.md](./NO-PROMETER.md).