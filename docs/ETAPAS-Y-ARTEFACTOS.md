# Etapas y artefactos en el repo

Mapa entre [PROPUESTAS.md](../PROPUESTAS.md), el prototipo `ciervo-negro-edicion` y Tienda Nube.

---

## Tabla resumen

| Etapa | PROPUESTAS | Prototipo (archivos) | Tienda Nube |
| --- | --- | --- | --- |
| 1 | Banners + home corta | `Home.jsx`, `catalog.json` → `home`, `styles.css` (banners) | Banners + carrusel + destacados |
| 2 | Barra + rollover | `AnnouncementBar.jsx`, `ProductCard.jsx`, `Layout.jsx` | Barra anuncios + rollover |
| 3 | Talles + textos | `Product.jsx`, `editionPages.js`, `catalog.js` | Guía talles + páginas HTML |
| 4 | CSS chico | `styles.css`, `tienda-nube-css.css` | CSS avanzado (si existe) |
| 5 | Instagram al final de la home | `Home.jsx` (`InstagramFeed`) + `.ig-feed` | Módulo de Rio + token de Meta (si conecta) |

---

## Etapa 1 — Detalle

**Propuesta:** cuatro entradas bajo el ciervo; Destacados/Novedades en carrusel con pocos ítems.

| Artefacto | Ruta |
| --- | --- |
| Banners y slugs de imagen | `ciervo-negro-edicion/src/pages/Home.jsx` |
| Listas featured/newest | `ciervo-negro-edicion/src/data/catalog.json` → `home` |
| Carrusel | `ciervo-negro-edicion/src/components/ProductRail.jsx` |
| Estilos banners | `ciervo-negro-edicion/src/styles.css` (`.category-banners`, `.rail-*`) |

---

## Etapa 2 — Detalle

**Propuesta:** barra fija; segunda foto en grilla.

| Artefacto | Ruta |
| --- | --- |
| Texto barra | `catalog.json` → `store.announcement` |
| Componente | `ciervo-negro-edicion/src/components/AnnouncementBar.jsx` |
| ¿En vivo? | **No** (barra superior). Etiquetas `4x3` en productos **sí**. Ver [COMPARATIVA-CLON-EDICION-VIVO.md](./COMPARATIVA-CLON-EDICION-VIVO.md). |
| Rollover | `ProductCard.jsx` + `.img-hover` en `styles.css`. En la tienda real ya está prendido; el clon `ciervo-negro` no lo tiene. Ver [TIENDA-EN-VIVO.md](./TIENDA-EN-VIVO.md). |

---

## Etapa 3 — Detalle

**Propuesta:** guía de talles; reescribir páginas.

| Artefacto | Ruta |
| --- | --- |
| Link en ficha | `catalog.js` → `sizeGuidePath`; `Product.jsx` |
| Textos nuevos | `ciervo-negro-edicion/src/data/editionPages.js` |
| Override en runtime | `getPage()` en `catalog.js` |
| Scroll a `#talles` | `InfoPage.jsx` |

Paths de páginas en TN deben coincidir con las rutas del scrape (`/quienes-somos`, `/como-comprar-talles-pagos-y-envios`, `/preguntas-frecuentes`).

---

## Etapa 4 — Detalle

**Propuesta:** aire, logo, precio $0, títulos.

| Artefacto | Ruta |
| --- | --- |
| Prototipo | `styles.css` (hero, logo transparente, `.section h2`, compare en cards) |
| Snippet para TN | `ciervo-negro-edicion/tienda-nube-css.css` |

Lógica precio tachado: `ProductCard.jsx`, `Product.jsx` (`compareAt > 0`).

---

## Etapa 5 — Detalle

**Propuesta:** publicaciones de Instagram al final de la home, solo si el módulo de Rio conecta.

| Artefacto | Ruta |
| --- | --- |
| Bloque en la home | `ciervo-negro-edicion/src/pages/Home.jsx` → `InstagramFeed` |
| Estilos | `styles.css` → `.ig-feed`, `.ig-grid` |
| Cuenta | `catalog.json` → `store.instagram` |

Las seis fotos del prototipo son de productos del catálogo (para ver el bloque). En Tienda Nube las reemplaza el feed real. Pasos del token: [IMPLEMENTACION-TIENDA-NUBE.md](./IMPLEMENTACION-TIENDA-NUBE.md).

---

## Comandos locales

```bash
# Referencia (hoy)
cd ciervo-negro && npm install && npm run dev   # :5173

# Propuesta
cd ciervo-negro-edicion && npm install && npm run dev   # :5174
```

README del prototipo: `ciervo-negro-edicion/README.md`.

---

## Estado del proyecto

| Item | Estado |
| --- | --- |
| Etapas 1–4 en prototipo | Implementadas |
| Etapa 5 Instagram en prototipo | Bloque al final de la home (fotos de producto como muestra) |
| Etapa 5 en Tienda Nube | Pendiente: token de Meta en el admin |
| Deploy host preview | Pendiente (build `dist/`) |
| Carga en TN real | Pendiente post-OK dueño |

Actualizá esta tabla cuando cierres cada hito.