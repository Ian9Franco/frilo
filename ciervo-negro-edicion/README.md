# CIERVO NEGRO — versión para editar

Copia de la tienda actual con las etapas **1 a 5** de `PROPUESTAS.md`.

Guías de reunión, implementación y límites: [`/docs/README.md`](../docs/README.md).

| Etapa | En este prototipo | En Tienda Nube (Rio, plan Esencial) |
| --- | --- | --- |
| 1 | Cuatro banners + Destacados/Novedades en carrusel corto | Diseño → banners; destacados; carrusel |
| 2 | Barra fija + **rollover** (2.ª foto al hover) en la grilla | Barra de anuncios; activar rollover en listado |
| 3 | Link “Guía de talles” en la ficha + textos nuevos en Quiénes somos, guía y FAQ | Activar módulo guía de talles → página de talles; pegar textos de `src/data/editionPages.js` |
| 4 | Ajustes en `styles.css` + snippet `tienda-nube-css.css` para el admin | Solo si aparece “Edición avanzada de CSS” |
| 5 | Grilla `@_ciervonegro_` al final de la home (fotos de producto de muestra) | Módulo “Publicaciones de Instagram” + token de Meta. Si no conecta, no va |

**Rollover:** es el punto 5 del doc; en Tienda Nube no hay que programarlo, solo encenderlo en el diseño de Rio.

El encabezado, el menú, la ficha y el carrito siguen igual que la tienda real.

Para verla al lado de la actual:

```bash
cd ciervo-negro-edicion
npm install
npm run dev
```

Queda en http://localhost:5174. La versión actual sigue en el puerto 5173.
