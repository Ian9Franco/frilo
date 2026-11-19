# Reunión con el dueño — plan y aprobación

El cliente **no ve** esta carpeta ni `PROPUESTAS.md`. Vos llevás el guion; en unos días mostrás preview en host; después implementás en Tienda Nube.

**Antes del meet (solo vos):** leé [RIO-Y-LIMITES-TN.md](./RIO-Y-LIMITES-TN.md) — mental model TN, cambio de plantilla, header/hamburguesa/carrito/ficha, qué es editor vs CSS vs FTP. Así no confundís lo del prototipo React con lo publicable.

---

## Mensaje central (30 segundos)

> No hacemos otra web desde cero. La tienda sigue en Tienda Nube con la plantilla Rio que ya usás. Ordenamos la home para que después de la foto del ciervo no sea un catálogo infinito, ponemos atajos a Estadios / Legacy / Retro / Archivo, y pulimos textos, promos y ficha. En unos días te paso un link de vista previa; si te cierra, lo cargamos en el admin de la tienda real. No tocamos pagos ni envíos salvo que vos quieras.

---

## Orden del meet (25–40 min)

### 1. Cómo está hoy (5 min)

- La foto del ciervo funciona como marca.
- Abajo la home se siente catálogo largo (muchos destacados y novedades).
- Las categorías existen en el menú, pero en la portada no hay atajos visuales.
- La franja de banners promocionales está vacía.

### 2. El plan — 9 mejoras en tres grupos (10 min)

**Home y navegación**

| # | Qué | Nota para él |
| --- | --- | --- |
| 1 | Cuatro imágenes bajo el ciervo | Estadios, Legacy, Herencia Retro, Archivo → categorías que ya tiene |
| 2 | Menos productos en portada | Carrusel; catálogo completo sigue en Productos |
| 3 | Barra de anuncio fija | Ej. «4x3 en buzos · envío gratis»; sin texto corriendo si molesta |
| 4 | La foto del ciervo se queda. La barra de arriba, sólida | Hoy es transparente sobre la foto. No es un error: es una opción. La apagamos para que el logo y los íconos queden siempre sobre fondo negro. |

**Catálogo y confianza**

| # | Qué | Nota para él |
| --- | --- | --- |
| 5 | Segunda foto al pasar el mouse | **Ya la activó él.** Decir que ya lo habíamos pensado y que lo pudo hacer solo. No va en el trabajo pendiente. |
| 6 | Guía de talles en la ficha | Enlace a la página de talles que ya tienen |
| 7 | Textos Quiénes somos, guía y FAQ | Más concreto; mismo tono en las tres |

**Opcionales (dependen del panel)**

| # | Qué | Condición |
| --- | --- | --- |
| 8 | Instagram en el pie de la home | Solo si el módulo vincula `@_ciervonegro_` |
| 9 | Ajustes chicos de CSS | Solo si aparece «Edición avanzada de CSS» |

Decile que el mayor impacto visible está en **1, 2 y 3**. El **5** ya lo hizo él.

Si pregunta qué más se puede sumar en el lugar del hover, hay dos opciones de Rio que hoy no usa: una frase institucional en la home, y el buscador como barra solo en la computadora. Detalle en [PROPUESTAS.md](../PROPUESTAS.md).

### 3. Qué no está en el plan (2 min)

> No prometemos menú nuevo, filtros por club, ficha como otra marca ni carrito a medida. Eso sería otro plan y otro presupuesto. Acá es configurar Rio bien.

**Si pregunta “¿y si cambiamos de plantilla / otro diseño?”** (1 min, sin tecnicismos):

> El catálogo y las categorías quedan, pero la portada, colores y encabezado hay que armarlos de nuevo en el diseño nuevo. Son varios días, no un interruptor. Con Rio ya tenés el look negro y la foto del ciervo; lo que falta es ordenar la home. Cambiar de plantilla ahora es tirar ese trabajo y empezar otra vez en algo que igual es una plantilla de Tienda Nube, no un sitio hecho a mano.

**Si pregunta “¿hasta dónde podemos cambiar el look?”** (respuesta corta):

> Logo, colores, fuentes de la lista, fondo del encabezado, barra de anuncio, orden de la home, banners, carruseles, textos, guía de talles, Instagram si conecta, y retoques chicos de CSS si tu plan lo muestra. Lo que no se puede en este plan es rediseñar el menú hamburguesa, los íconos del carrito o la ficha como si fuera otra marca — eso sería otro plan con código. Detalle para vos: [RIO-Y-LIMITES-TN.md](./RIO-Y-LIMITES-TN.md).

Sobre el link de preview:

> Es una maqueta para ver el orden; la tienda real sigue siendo Tienda Nube. No se «sube» el link: se replica en el diseñador.

Detalle completo: [NO-PROMETER.md](./NO-PROMETER.md).

### 4. Qué necesitás del dueño (5 min)

- [ ] Aprobación del alcance (o puntos a sacar)
- [ ] **4 imágenes** para banners (o OK a recortar de fotos de producto)
- [ ] Criterio Destacados / Novedades (él elige o confía en vos)
- [ ] Texto de la barra (o aprueba el ejemplo)
- [ ] Acceso admin (diseño + páginas) **después** del OK del host
- [ ] (Opcional) 10 min en el panel juntos para confirmar CSS e Instagram

### 5. Timeline que le contás

| Cuándo | Qué |
| --- | --- |
| Hoy | Acuerdo de plan |
| 3–4 días | Link en host — vista previa |
| Tras su OK | Implementación en ciervonegro.com.ar |
| Orden de trabajo | Ver [IMPLEMENTACION-TIENDA-NUBE.md](./IMPLEMENTACION-TIENDA-NUBE.md) |

No fijar fecha de producción hasta aprobar preview + tener imágenes.

### 6. Cierre — pedir aprobación explícita

> ¿Apruebas este alcance para la preview y, si te gusta, para la tienda real? ¿Algo que no quieras (video, Instagram, cantidad en home)?

---

## Qué no mostrar hoy

- Repos, `PROPUESTAS.md`, puertos locales
- React, Esencial vs Impulso, FTP
- La matriz “header / hamburguesa / qué no podés” — es para vos, no para leer en voz alta

**Sí puede servir:** la tienda en vivo en el celular (scroll home + menú Estadios). Si abrís el menú hamburguesa, mostrale que **el contenido** son sus categorías (Estadios, Legacy…) — eso sí se mantiene; lo que no vendemos es **otro** menú con otro dibujo o animación.

---

## Notas rápidas para vos (no leer al cliente)

| Tema | Recordatorio |
| --- | --- |
| Prototipo React | Maqueta; TN no usa Vite/React. Ver [PREVIEW-VS-REAL.md](./PREVIEW-VS-REAL.md). |
| Hamburguesa / íconos | Forma y animación = Rio. Solo color y **árbol de categorías** en admin. |
| `compress` al scroll | Opción del tema; logo achica, íconos no. Ver [TIENDA-EN-VIVO.md](./TIENDA-EN-VIVO.md). |
| Cambiar plantilla | Catálogo queda; diseño ~½–2+ días. No recomendado. |
| Ipanema / otras gratis | Existen, pero = rehacer home. No ofrecer en este meet salvo que él insista. |

---

## Checklist de aprobación (anotar en el meet)

| Punto | Sí / No / Ajuste | Notas |
| --- | --- | --- |
| 1 Banners ×4 | | |
| 2 Home en carrusel corto | | |
| 3 Barra de anuncio | | Texto: |
| 4 Mantener foto ciervo | | Video: queda / sale |
| 5 Rollover listado | Ya lo hizo | Mencionar: lo habíamos pensado y lo pudo activar solo. No rehacer. |
| 6 Guía de talles | | |
| 7 Textos páginas | | |
| 8 Instagram (si conecta) | | |
| 9 CSS chico (si hay campo) | | |

Firma o OK por mail/WhatsApp: _______________  Fecha: _______________

---

## Mail / WhatsApp post-reunión (plantilla)

```
Hola [nombre],

Resumen de lo que acordamos para CIERVO NEGRO:

• Ordenar la home: 4 banners (Estadios, Legacy, Herencia Retro, Archivo), menos productos en portada en carrusel, barra «[texto]».
• Mantener la foto del ciervo; [video: como está / evaluar sacarlo].
• Activar segunda foto en grilla, guía de talles en ficha, y actualizar textos de Quiénes somos / guía / FAQ.
• Opcional según tu panel: Instagram en home, retoques CSS chicos.

Próximo paso: en [fecha] te paso un link de vista previa. Si te cierra, lo cargamos en la tienda real en Tienda Nube (misma plantilla Rio, sin cambiar pagos ni envíos).

Necesito de tu lado: [4 imágenes / OK a recortes] y [lista destacados o confianza en criterio].

Cualquier cambio al alcance, avisame antes de la preview.

Saludos,
[tu nombre]
```

---

## Cheat sheet (una línea)

**Prometer:** banners, home corta, barra, rollover, talles, textos, ciervo, IG/CSS solo si el panel lo permite.

**No prometer:** menú/ficha/carrito custom, filtros, «subir el React». Ver [NO-PROMETER.md](./NO-PROMETER.md).