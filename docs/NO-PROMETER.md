# Qué no prometer (y qué no hacer en el prototipo)

Referencia para vos y para no sobrevender en la reunión. Basado en [PROPUESTAS.md](../PROPUESTAS.md) § «Qué no hay que prometerle».

---

## Regla madre

**Tienda Nube ≠ subir tu página.** Es configurar la plantilla **Rio** con:

1. Editor de diseño (sin código)
2. CSS avanzado opcional (retouches, no bloques nuevos)
3. Código de plantilla (FTP) solo en **Impulso** — no aplica a este trabajo

El prototipo React (`ciervo-negro-edicion`) puede inventar UI que **no se publica** en Esencial. Si el dueño lo ve sin contexto, va a esperar lo imposible.

---

## Lista del documento — ampliada

### Otro encabezado, menú grande o buscador distinto

| En Rio (Esencial) | No prometer |
| --- | --- |
| Logo, colores de lista, header transparente sobre slide | Mega menú fijo, buscador custom, header distinto, animaciones al scroll |

**Prototipo:** no presentar cambios de `Header` / `MenuDrawer` como entrega TN.

**Alternativa:** menú actual + banners en home.

---

### Filtros por club a medida

| Sí | No |
| --- | --- |
| Menú Estadios → Primera → Remeras → Buzos | Chips River/Boca, facetas, filtro en grilla |

**Prototipo:** no agregar páginas de filtros custom.

---

### Ficha con otra estructura

| Sí en editor | No sin FTP |
| --- | --- |
| Guía de talles, galería, variantes, descripción | Precio arriba del nombre, botón sticky inventado, tabs custom, lookbook en PDP |

**Prototipo:** link a guía de talles + textos; no rediseñar PDP como “nueva tienda”.

---

### Secciones que Rio no trae

No prometer: lookbook, contador, animaciones de librería, tipografía fuera de la lista de Rio.

**Instagram:** solo si el módulo del diseño vincula sin app paga. Si no conecta en el admin, **fuera de alcance**.

---

### Forma de las etiquetas `4x3` y `Envío gratis`

Son promos de TN sobre la foto. Cambiar diseño/posición = **código de plantilla**.

**Sí:** barra de anuncios + promos en panel de descuentos.

---

### Carrito lateral con otro diseño

El carrito es el de Rio, no el `CartDrawer` del prototipo.

No tocar checkout, envíos ni medios de pago salvo pedido explícito del dueño.

---

### Publicar el proyecto React

El repo **no** reemplaza ciervonegro.com.ar. No Vercel/Netlify como “la tienda”.

**Sí:** host temporal solo para **preview** del orden y contenidos. Ver [PREVIEW-VS-REAL.md](./PREVIEW-VS-REAL.md).

---

## Trampas adicionales

### Cambiar de plantilla oficial

Posible en plan pago sin FTP, pero **no recomendado**: Rio ya está oscura, fullscreen, header transparente. Otra plantilla = reconfigurar todo y seguir siendo plantilla.

### Subir a Impulso

Solo si, tras agotar editor + CSS, hace falta estructura que Rio no tiene. **No venderlo en el meet inicial.** Es costo mensual + mantenimiento de plantilla.

---

## Qué no hacer en `ciervo-negro-edicion`

| Hacer | Evitar |
| --- | --- |
| Banners, carrusel corto, barra, rollover, guía talles, textos | Menú/header/buscador nuevos |
| Textos en `src/data/editionPages.js` | PDP o carrito como obra de diseño custom |
| `tienda-nube-css.css` si hay campo en admin | Bloques (lookbook, contador, feed IG fake) como entrega |
| Comparar 5173 vs 5174 | Decir que 5174 “ya es la tienda publicada” |

Si algo en React se ve mejor que Rio, etiquetar: **boceto, no entrega TN**.

---

## Frases útiles con el cliente

- «No es web a medida: es la misma Tienda Nube, mejor ordenada.»
- «El hover con segunda foto es una opción de Rio, no programación nueva.»
- «Los cuatro banners necesitan cuatro imágenes; sin eso el bloque queda flojo.»
- «Si no hay CSS avanzado en el panel, omitimos esos cuatro retoques.»
- «Instagram al pie solo si el módulo conecta.»

---

## Relacionado

- Qué **sí** entra: [../PROPUESTAS.md](../PROPUESTAS.md) § «Propuestas que sí se pueden publicar»
- Admin: [IMPLEMENTACION-TIENDA-NUBE.md](./IMPLEMENTACION-TIENDA-NUBE.md)