# Implementación en Tienda Nube (sin FTP)

Guía para quien **nunca editó** TN. Plan **Esencial**, plantilla **Rio**. Sin tocar pagos, envíos ni checkout salvo pedido del dueño.

Antes de empezar: reunión aprobada + imágenes de banners. Ver [REUNION.md](./REUNION.md).

---

## Acceso mínimo

- Usuario con permiso **Tienda online → Diseño** (Editar diseño).
- Permiso **Contenido / Páginas** para Quiénes somos, FAQ, guía de talles.
- **Productos** para destacados y novedades.

No necesitás FTP ni plan Impulso para este alcance.

### Encabezado (revisar en la pasada de verificación)

En Diseño → Encabezado:

- **Transparente sobre el slide:** apagar si la propuesta es barra sólida negra siempre.
- **Encabezado comprimido al hacer scroll** (Rio / clase `compress`): al bajar solo el logo (y a veces la altura de la barra) se achica; los íconos no. No es error nuestro en la tienda publicada. Si se ve raro, desactivar compress y elegir un solo tamaño de logo en el editor.

---

## Pasada de verificación (15 min, una sola vez)

Entrá a **Tienda online → Diseño → Editar diseño** y anotá:

| Pregunta | Sí / No | Impacto |
| --- | --- | --- |
| ¿Hay sección banners / promocionales vacía? | | Etapa 1 |
| ¿Destacados y Novedades pueden ir en **carrusel**? | | Etapa 1 |
| ¿Existe **barra de anuncios**? | | Etapa 2 |
| ¿Opción **rollover** / segunda imagen en listado? | | Etapa 2 |
| ¿**Guía de talles** en producto? | | Etapa 3 |
| ¿Aparece **Edición avanzada de CSS**? | | Etapa 4 |
| ¿Módulo **Instagram** conecta `@_ciervonegro_`? | | Etapa 5 |

Marcá en [ETAPAS-Y-ARTEFACTOS.md](./ETAPAS-Y-ARTEFACTOS.md) qué etapas quedan activas.

---

## Orden de implementación (igual que PROPUESTAS)

### Etapa 1 — Banners y home

1. **Diseño → Editar diseño → Home:** el módulo de banners promocionales **ya existe y está vacío**, pero hoy queda **entre Destacados y Novedades**. Arrastrarlo **debajo del slide del ciervo** antes de cargar imágenes. Está en modo carrusel (2 columnas en computadora, 1 en el celular). Ver [TIENDA-EN-VIVO.md](./TIENDA-EN-VIVO.md).
2. Subir **4 imágenes** con link a:
   - `/estadios`
   - `/coleccion-legacy`
   - `/drop-herencia-retro`
   - `/drop-archivo`  
   (URLs exactas según menú de la tienda.)
3. **Productos destacados:** marcar solo la selección acordada (ej. buzos estadios).
4. Módulo **Destacados:** tipo **carrusel**, cantidad acotada.
5. Repetir para **Novedades** (ej. camisetas edición 1).

**No:** crear categorías nuevas si ya existen.

---

### Etapa 2 — Barra y rollover

1. **Barra de anuncios:** texto fijo, ej. `4x3 en buzos · envío gratis`. Desactivar marquee si distrae.
2. **Listado de productos:** el rollover **ya está activo** en la tienda (18 nov 2026). No apagarlo. El clon `ciervo-negro` no lo tenía; la tienda real sí.

---

### Etapa 3 — Talles y textos

1. **Ficha de producto (diseño):** activar **guía de talles** → enlace a página  
   `Cómo comprar, talles, pagos y envíos` (ruta publicada en la tienda).
2. **Contenido → Páginas:** reemplazar HTML de:
   - Quiénes somos  
   - Cómo comprar, talles, pagos y envíos  
   - Preguntas frecuentes  

Copiar desde `ciervo-negro-edicion/src/data/editionPages.js` (sin `color:#333` en párrafos).

3. Revisar en móvil: texto legible sobre fondo oscuro.

---

### Etapa 4 — CSS mínimo (solo si hay campo)

1. Diseño → **Edición avanzada de CSS**.
2. Partir del archivo `ciervo-negro-edicion/tienda-nube-css.css`.
3. Probar en desktop y móvil; los selectores de Rio pueden variar — ajustar con inspeccionar elemento en la tienda publicada.

Alcance acordado:

- Más aire entre slide y primera sección de productos
- Logo un poco más chico en home
- Ocultar precio tachado $0 cuando no hay oferta. En la tienda de hoy Rio ya lo oculta; revisar igual por si reaparece.
- Títulos de sección más chicos / más letter-spacing

Si **no** hay campo CSS: omitir etapa; el resto no depende de esto.

---

### Etapa 5 — Instagram (solo si el token conecta)

Rio tiene la sección **Publicaciones de Instagram**. No se programa un feed. La ayuda oficial (agosto 2026) pide un token de Meta, no una app paga. Si el token no vincula, la sección no va.

1. La cuenta `@_ciervonegro_` tiene que ser **pública** y profesional (o de empresa).
2. Crear el token en Meta for Developers (pasos de [esta guía](https://ayuda.tiendanube.com/123224-redes-sociales/como-mostrar-mis-publicaciones-de-instagram-en-mi-tiendanube)).
3. Admin → **Tienda online → Link de redes sociales**: pegar el token y el usuario `_ciervonegro_` (sin `@` ni URL).
4. **Diseño → Editar diseño → Página de inicio → Publicaciones de Instagram**: tildar mostrar publicaciones, ojo azul, arrastrar la sección **al final** de la home, publicar.
5. Si no aparecen fotos: [por qué no se muestran](https://ayuda.tiendanube.com/es_ES/123224-redes-sociales/por-que-no-se-muestran-mis-publicaciones-de-instagram-en-mi-tiendanube) (tienda en construcción, cuenta privada, token, ojo apagado).

En el prototipo las miniaturas son fotos de producto, para mostrar el bloque. En la tienda real las fotos salen de Instagram.

---

## Qué no tocar en esta pasada

- Medios de pago, envíos, cupones, checkout
- Cambio de plantilla
- FTP / código fuente
- Forma de etiquetas `4x3` / `Envío gratis` en fotos

Ver [NO-PROMETER.md](./NO-PROMETER.md).

---

## QA antes de dar por cerrado

- [ ] Home: slide → 4 banners → carruseles cortos
- [ ] Barra visible y legible en móvil
- [ ] Rollover en listado (desktop)
- [ ] Guía de talles abre la página correcta
- [ ] Páginas sin texto gris ilegible
- [ ] Menú y categorías siguen funcionando
- [ ] Compra de prueba (opcional, con el dueño)
- [ ] Instagram al final de la home, o anotado como “no conectó”

---

## Ayuda oficial

- [Guía personalizar diseño Tienda Nube](https://ayuda.tiendanube.com/es_AR/diseno/guia-personalizar-el-diseno-de-tu-tiendanube)
- [Planes y precios](https://www.tiendanube.com/planes-y-precios) — reconfirmar antes de hablar de upgrade a Impulso