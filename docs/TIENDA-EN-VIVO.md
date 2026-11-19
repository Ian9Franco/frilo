# Tienda en vivo — revisión 18 nov 2026

Mirada a [ciervonegro.com.ar](https://www.ciervonegro.com.ar/) después de que el dueño tocó el diseño. El clon `ciervo-negro` (puerto 5173) es la copia de **antes** de ese cambio. La propuesta está en `ciervo-negro-edicion` (5174).

**Matriz clon vs edición vs vivo (19 nov):** [COMPARATIVA-CLON-EDICION-VIVO.md](./COMPARATIVA-CLON-EDICION-VIVO.md) — incluye la barra «4x3 en buzos» (solo en edición, no en oficial).

---

## Qué sigue igual que en el clon

- Misma foto de portada y el mismo archivo de logo.
- Encabezado: logo a la izquierda, buscador en ícono, cuenta, carrito, menú hamburguesa (también en computadora). Sobre el ciervo la barra está **transparente** (`head-transparent`, fondo `rgba(0,0,0,0)`). Al bajar, queda sólida `#0A0809` y Rio agrega la clase **`compress`**: la barra se compacta y **el logo se achica**. Los **íconos no escalan** con ese movimiento (es comportamiento del tema, no un bug de la tienda ni nuestro). En el editor suele poder desactivarse el encabezado comprimido / reducido al hacer scroll. La propuesta: barra **sólida** siempre y, si molesta, **sin compress** para que logo e íconos no “bailen”.
- En el prototipo `ciervo-negro-edicion` **antes** teníamos CSS que cambiaba el tamaño del logo al hacer scroll (etapa 4); eso **sí era nuestro** y ya lo quitamos para no confundir la preview con Rio.
- Home larga: **Destacados en grilla, 31 productos**. **Novedades en grilla, 25**. No hay carrusel.
- No hay **barra de anuncios** con texto (19 nov: en el HTML de la home no figura «4x3 en buzos» arriba). Las promos `4x3` / envío siguen solo como **etiquetas en cada producto**.
- No hay feed de Instagram en la home.
- El video sigue abajo.
- Etiquetas `4x3` y `Envío gratis` (y en camisetas, `20% OFF`).
- WhatsApp ya es el botón verde oficial, fijo abajo a la derecha (`btn-whatsapp` → `wa.me/541126465261`).

## Qué cambió respecto del clon

### Rollover (segunda foto al pasar el mouse)

**Sí, ahora la tienda lo tiene.** Cada ficha del listado trae una imagen secundaria (`item-image-secondary`, contenedor `with-secondary-images`). Al pasar el mouse cambia la foto.

El clon `ciervo-negro` **no** lo tiene: `ProductCard.jsx` muestra solo `images[0]`.

`ciervo-negro-edicion` lo simula a propósito (etapa 2). En la tienda real **ya está activo**. Al implementar, no hay que “inventarlo”: hay que **dejarlo prendido** y no pisarlo.

En la reunión: «La segunda foto al pasar el mouse ya la habíamos pensado. Vos la pudiste activar solo. La dejamos.» El punto sale del trabajo pendiente. Lo que puede ocupar su lugar está en [PROPUESTAS.md](../PROPUESTAS.md), sección «Qué puede reemplazar lo que él ya hizo»: mensaje institucional en la home, y buscador en barra solo en computadora. Ninguno de los dos está en la tienda hoy.

### Banners promocionales

El módulo existe y **sigue vacío** (sin imágenes, alto de 1 px). No está debajo de la foto.

Orden real de la home:

1. Slide del ciervo
2. Destacados
3. Banners promocionales (vacíos)
4. Novedades
5. Video

El módulo está configurado como **carrusel**: 2 columnas en computadora, 1 en el celular, texto arriba de la imagen.

Si se cargan las cuatro fotos sin mover la sección, aparecen **entre** Destacados y Novedades. En el editor hay que arrastrarla **debajo del slide**.

### Precio tachado en `$0,00`

Sigue en el HTML (`price-compare` = `$0,00`), pero Rio lo oculta (`display: none`). En pantalla se ve solo el precio real, por ejemplo `$49.999,00`. El retoque de CSS de la etapa 4 para eso **ya no hace falta**, salvo que en algún producto el tachado vuelva a verse.

### Modal “¡Descuento exclusivo!”

Está en el código de la página y **no se muestra** al entrar (`display: none`). Es el modal de venta cruzada al agregar al carrito, no un popup nuevo de la home.

---

## Qué implica para la propuesta

| Punto | En la tienda hoy | Al implementar |
| --- | --- | --- |
| 1. Cuatro banners | Módulo vacío, mal ubicado | Subir imágenes y **mover la sección debajo del ciervo** |
| 2. Home corta en carrusel | Grilla de 31 + 25 | Seguir recortando destacados y pasar a carrusel |
| 3. Barra de anuncio | No está | Activarla, fija |
| 4. Foto del ciervo | Sigue | No reemplazarla por el video |
| 5. Rollover | **Ya está** | No desactivarlo |
| 6. Guía de talles | No revisada en esta pasada | Activar y apuntar a la página |
| 7. Textos | No revisados en esta pasada | Pegar los de `editionPages.js` |
| 8. Instagram | No está en la home | Solo si el token de Meta conecta |
| 9. CSS del `$0,00` | Ya lo oculta el tema | Omitir salvo que reaparezca |
| WhatsApp | Ícono oficial ya visible | No rediseñarlo |

El prototipo 5174 va **adelante** de la tienda publicada, salvo en el rollover: ahí la tienda real ya igualó lo que el clon no tenía.