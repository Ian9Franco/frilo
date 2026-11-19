# Comparativa: clon · edición · tienda en vivo

Para anotar **qué implementamos** en `ciervo-negro-edicion`, qué refleja el clon `ciervo-negro`, y qué tiene hoy [ciervonegro.com.ar](https://www.ciervonegro.com.ar).

**Revisión en vivo:** 19 nov 2026 (HTML de la home + auditoría previa 18 nov en [TIENDA-EN-VIVO.md](./TIENDA-EN-VIVO.md)).

| Columna | Qué es |
| --- | --- |
| **Clon** (`ciervo-negro` :5173) | Espejo scrapeado **antes** del rollover del dueño. `catalog.json` con home larga (31+25). **No editar.** |
| **Edición** (`ciervo-negro-edicion` :5174 / Vercel) | Propuesta en React. **No es** la tienda real. |
| **Vivo** | Tienda Nube + Rio, plan Esencial. |

**Leyenda estado TN:** `Ya` = en producción hoy · `Pendiente` = hay que cargar en admin · `N/A` = no aplica / no prometemos · `Solo edición` = solo existe en el prototipo.

---

## Respuesta rápida: banner superior «4x3 en buzos · envío gratis»

| Dónde | ¿Está la **barra fija arriba** con ese texto? |
| --- | --- |
| **Vivo** | **No.** En el HTML de la home no aparece el texto `4x3 en buzos` ni una barra de anuncio visible. Rio tiene soporte (`js-adbar` en scripts); el módulo **no está activo** o no tiene contenido. |
| **Clon** | **No.** No hay `AnnouncementBar` ni campo `store.announcement` en `catalog.json`. |
| **Edición** | **Sí (prototipo).** `AnnouncementBar.jsx` + `store.announcement` en `catalog.json`. Simula la **barra de anuncios de Rio** (etapa 2 / punto 3 del plan). |

**Confusión habitual:** en **vivo** y en ambos prototipos sí ves **`4x3` y «Envío gratis» como etiquetas sobre cada foto de producto** (promos TN). Eso **no** es la barra superior; es otro sistema. La propuesta agrega **además** una línea fija arriba con el mensaje de promo.

---

## Orden de la home

| Orden | Clon / Edición (React) | Vivo (Rio) | Nota |
| --- | --- | --- | --- |
| 1 | Hero ciervo | Slide ciervo | Igual |
| 2 | Edición: **4 banners categoría** · Clon: — | Destacados (grilla) | Vivo: banners promocionales **vacíos** y **debajo** de Destacados |
| 3 | Destacados | Banners vacíos (`swiper-wrapper` sin ítems) | En TN hay que **mover** la sección bajo el slide |
| 4 | Novedades | Novedades | Vivo: grilla larga |
| 5 | Video | Video | Igual |
| 6 | Edición: **Instagram** | — | Vivo: sin feed IG en home |

---

## Tabla por cambio (etapas 1–5 + extras)

### 1 — Cuatro banners bajo el ciervo

| | Clon | Edición | Vivo | TN |
| --- | --- | --- | --- | --- |
| Bloque 4 atajos (Estadios, Legacy, Retro, Archivo) | No | Sí — `Home.jsx` `.category-banners` | No (módulo vacío) | **Pendiente** imágenes + orden |

### 2a — Home corta (Destacados / Novedades)

| | Clon | Edición | Vivo | TN |
| --- | --- | --- | --- | --- |
| Cantidad en prototipo | 31 + 25 (`catalog.json` `home`) | 7 + 8 + **carrusel** `ProductRail` | ~31 + ~25 **grilla** | **Pendiente** curar destacados + modo carrusel |
| Componente | `ProductGrid` | `ProductRail` | Grilla Rio | Editor |

### 2b — Barra superior de anuncio

| | Clon | Edición | Vivo | TN |
| --- | --- | --- | --- | --- |
| «4x3 en buzos · envío gratis» arriba de todo | No | Sí | **No** | **Pendiente** activar barra de anuncios |

### 2c — Rollover (2.ª foto en listado)

| | Clon | Edición | Vivo | TN |
| --- | --- | --- | --- | --- |
| Hover segunda imagen | No — solo `images[0]` | Sí — `.img-hover` | **Sí** — `item-image-secondary`, `with-secondary-images` | **Ya** — no desactivar |

### 3a — Guía de talles en ficha

| | Clon | Edición | Vivo | TN |
| --- | --- | --- | --- | --- |
| Link «Guía de talles» | No en `Product.jsx` | Sí → `#talles` | No verificado en esta pasada | **Pendiente** módulo + URL |

### 3b — Textos Quiénes somos / guía / FAQ

| | Clon | Edición | Vivo | TN |
| --- | --- | --- | --- | --- |
| Contenido | HTML scrapeado en `catalog.json` | `editionPages.js` reemplaza en runtime | Textos originales cortos | **Pendiente** pegar textos |

### 4 — CSS chico (aire, títulos, compare $0)

| | Clon | Edición | Vivo | TN |
| --- | --- | --- | --- | --- |
| Ajustes en `styles.css` | Base scrape | Hero, rails, badges, compare lógica | Rio oculta `price-compare` $0 | Snippet `tienda-nube-css.css` **opcional** |
| Header sólido siempre (propuesta TN) | Clon y edición siguen **header transparente** sobre hero en React | Igual en prototipo | Vivo: **transparente** | **Pendiente** apagar transparente en editor |

> El prototipo **no** replica aún la propuesta «barra sólida siempre»; solo la documentamos para TN.

### 5 — Instagram al final de la home

| | Clon | Edición | Vivo | TN |
| --- | --- | --- | --- | --- |
| Grilla `@_ciervonegro_` | No | Sí — 6 fotos de **producto** (placeholder) | No en home | **Pendiente** si token Meta conecta |

---

## Cosas que no son etapas pero cambian entre carpetas

| Tema | Clon | Edición | Vivo |
| --- | --- | --- | --- |
| WhatsApp flotante | Texto `WA` | Ícono verde `IconWhatsApp` | Botón oficial TN `btn-whatsapp` |
| `compareAt` $0 en cards | Puede mostrar tachado | Oculta si `compareAt <= 0` | Rio oculta en tema |
| Footer Instagram | Enlace | Ícono `IconInstagram` | TN |
| Menú / carrito / buscador | Misma estructura React | Igual | Rio + TN (no custom) |

---

## Qué mirar vos antes del meet / al abrir Vercel vs celular oficial

1. **Barra 4x3 arriba:** solo en **edición**. Si el dueño la ve en preview, aclarar que en la tienda real **todavía no** está; es punto 3 del plan.
2. **Etiquetas 4x3 en fotos:** en **los tres** (vivo sí, clon sí, edición sí).
3. **Rollover:** **vivo = edición**; **clon** es el único sin hover (referencia vieja).
4. **Banners categoría:** solo **edición**; vivo tiene módulo **vacío**.
5. **Home corta con flechas:** solo **edición**; vivo sigue scroll largo.
6. **Header transparente:** **vivo** y **ambos prototipos**; la propuesta TN es **sólido** (aún no en preview ni en vivo).

---

## Archivos clave por diferencia

| Cambio | Edición |
| --- | --- |
| Banners home | `src/pages/Home.jsx` |
| Barra anuncio | `src/components/AnnouncementBar.jsx`, `catalog.json` → `store.announcement` |
| Carrusel | `src/components/ProductRail.jsx`, `catalog.json` → `home.featured` / `newest` |
| Rollover | `src/components/ProductCard.jsx`, `styles.css` |
| Talles + textos | `src/pages/Product.jsx`, `src/data/editionPages.js`, `src/catalog.js` |
| Instagram | `src/pages/Home.jsx` → `InstagramFeed` |
| CSS TN | `tienda-nube-css.css` |

Mapa etapas ↔ archivos: [ETAPAS-Y-ARTEFACTOS.md](./ETAPAS-Y-ARTEFACTOS.md).

---

## Actualizar este doc

Tras cambios en vivo o en `ciervo-negro-edicion`, revisar:

- HTML home (banners, adbar, instagram section).
- Si el dueño activa barra o mueve módulos en TN.
- Fecha en el encabezado de [TIENDA-EN-VIVO.md](./TIENDA-EN-VIVO.md).