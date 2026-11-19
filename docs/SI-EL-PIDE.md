# Si en el meet pide algo — theme vs plan

Guía **para vos** (todavía no hay contrato ni cobro). El meet es para **conocerlo** y entender qué busca. El preview (`ciervo-negro-edicion`) son **experimentos chicos** de lo que Rio + Esencial permiten **sin código**. Después, con lo que él diga, armás alcance y precio.

No leas este archivo en voz alta. Usalo cuando suelte una idea.

Detalle de piezas Rio: [RIO-Y-LIMITES-TN.md](./RIO-Y-LIMITES-TN.md). Qué no vender como hecho: [NO-PROMETER.md](./NO-PROMETER.md).

---

## Cómo responder en el momento (mentalidad)

1. **Escuchá el objetivo** (vender más, verse más premium, menos scroll, talles, Instagram…) antes de decir “sí” o “no”.
2. Clasificá en voz baja con esta tabla. En voz alta usá una de tres frases:
   - **Fácil en su plan:** «Eso se configura en el diseño de Rio, sin rehacer la tienda. Lo podemos incluir cuando cerremos el trabajo.»
   - **El theme lo tiene, el plan no alcanza para “programarlo”:** «Rio no deja cambiar esa pieza desde el editor. Para tocarla de verdad hace falta el plan más alto, con código de plantilla. Es otro presupuesto y otro mantenimiento.»
   - **Ni theme ni plan lo dan fácil:** «Eso no es un ajuste de Rio: sería otra plantilla, una app, o un desarrollo aparte. Te lo separo para no mezclarlo con lo que se puede hacer ahora.»
3. Si dudás: **«Lo confirmo en tu panel en diez minutos; no te lo prometo de memoria.»** Mejor que improvisar.
4. El preview React **puede mostrar cosas que Esencial no publica**. Si él se enamora de algo del link, aclará: «Esto es para ver la idea; en la tienda real entra solo lo que el diseño de Rio permite.»

---

## Las tres puertas (memorizar)

| Puerta | Plan | Qué podés hacer | Ejemplo |
| --- | --- | --- | --- |
| **A — Editor** | Esencial (el de él) | Módulos, colores, textos, orden, toggles de Rio | Banners, carrusel, barra de anuncios, rollover, guía de talles |
| **B — CSS** | Esencial **si** el admin muestra «CSS avanzado» | Ocultar, margen, tamaño. **No** secciones nuevas ni otro menú | Aire bajo el ciervo, título más chico |
| **C — Código de plantilla (FTP)** | **Impulso** (más caro / mes) | HTML/CSS/JS del theme: otro header, ficha, íconos | Hamburguesa custom, ficha rearmada |
| **D — Fuera** | — | Otra plantilla, app de terceros, o no existe en TN | Mega menú con fotos, checkout propio |

**Trampa típica:** «El theme Rio *técnicamente* tiene ese HTML, pero en Esencial **no te dejan editarlo**.» La respuesta de venta es puerta **C** (upgrade + horas de código), no «lo hacemos igual en React y lo subimos».

Cambiar de plantilla (Ipanema, etc.) **no** sube de plan: sigue siendo editor. Pero **rehacés** el diseño. Ver [RIO-Y-LIMITES-TN.md](./RIO-Y-LIMITES-TN.md).

---

## Lo que ya experimentamos (puerta A, salvo que diga lo contrario)

Mostralo como **muestra**, no como paquete cerrado:

| Idea en el preview | Puerta | En la tienda hoy |
| --- | --- | --- |
| 4 banners bajo el ciervo | A | Módulo vacío, mal ubicado |
| Menos productos + carrusel | A | Grilla larga |
| Barra «4x3 en buzos…» arriba | A | No está (el 4x3 de las fotos sí) |
| Header sólido (sin transparente) | A | Sigue transparente |
| Guía de talles en ficha | A | Por activar |
| Textos Quiénes somos / FAQ | A (páginas) | Textos viejos |
| Instagram al final | A **si** conecta Meta | No |
| Rollover 2.ª foto | A | **Ya lo tiene él** |
| Retoques CSS | B si hay campo | No hace falta el $0 |

Detalle: [COMPARATIVA-CLON-EDICION-VIVO.md](./COMPARATIVA-CLON-EDICION-VIVO.md).

---

## Si pide… (lookup)

Leyenda: **A** editor Esencial · **B** CSS Esencial · **C** Impulso + código · **D** no es este trabajo / otra vía.

### Home y marca

| Si dice | Puerta | Qué contestás |
| --- | --- | --- |
| Atajos a colecciones / menos catálogo en portada | **A** | Es lo del preview (banners + carrusel). |
| Frase de la marca en la home | **A** | Mensaje institucional de Rio. No está hoy. |
| Video en vez de la foto del ciervo | **A** | Rio lo permite; **no** lo recomiendes si la foto es la marca. |
| Popup de descuento al entrar | **A** (marketing TN) o app | No es “diseño Rio”. Preguntá si ya lo tiene apagado. |
| Lookbook, contador, bloques raros | **D** o plantilla **Ipanema** | Rio no trae el módulo. Ipanema = rearmar todo, sigue Esencial. |
| Animaciones tipo “la página se arma al scrollear” | **B** muy poco · **C** de verdad | No prometas librerías. |

### Encabezado, menú, íconos

| Si dice | Puerta | Qué contestás |
| --- | --- | --- |
| Barra negra siempre, sin transparente | **A** | Opción del editor. |
| Que el logo no se achique al bajar | **A** | Apagar encabezado comprimido (`compress`). |
| Buscador como barra en la compu, ícono en el cel | **A** | Opción Rio. |
| Otro dibujo de hamburguesa, carrito o lupa | **C** | En Esencial solo **color**. La forma es del theme. |
| Menú con fotos de cada club / mega menú | **C** o **D** | El menú es el árbol de categorías. Fotos en el drawer = código o no existe. |
| Filtros River / Boca en la grilla | **A** vía categorías que ya tiene · **C/D** si quiere chips | El camino ya está en Estadios → club. |

### Producto, carrito, confianza

| Si dice | Puerta | Qué contestás |
| --- | --- | --- |
| Guía de talles, textos, cuotas, envío en ficha | **A** | Módulos TN + páginas. |
| Ficha con otro orden (precio arriba, botón fijo nuevo) | **C** | Mover bloques de la ficha es código. |
| Etiquetas 4x3 con otra forma o lugar | **C** | Son promos de TN; el dibujo no se edita en Esencial. |
| Carrito lateral “como Nike” | **C** | El carrito es el de Rio. |
| Checkout / Mercado Pago / envíos distintos | Config tienda, **no** theme | No lo metas en el presupuesto de diseño salvo que pida explícito. |
| Tipografía que no está en la lista | **C** | Esencial: fuentes del diseño. |

### Redes y extras

| Si dice | Puerta | Qué contestás |
| --- | --- | --- |
| Instagram en la home | **A** si el token conecta | Si no vincula, no va. No es un feed programado. |
| WhatsApp | **A** | Ya lo tiene oficial. |
| Dominio, mails, SEO básico, cupones | Plan / marketing TN | Separalo del “diseño”. Esencial ya incluye dominio propio. |

### “Quiero que se vea como el link de Vercel / como otra marca”

| Si dice | Puerta | Qué contestás |
| --- | --- | --- |
| El orden de la home del preview | **A** | Se carga en el diseñador, no se sube React. |
| El header, menú o carrito del preview si algún día los cambiamos | **C** | Hoy el preview **copia** Rio. Si pide otra estructura, es Impulso. |
| Sitio aparte (no Tienda Nube) | **D** | Otro producto, otro precio. La tienda que cobra sigue en TN. |

---

## Cómo cobrarlo cuando ya sepa qué quiere

No cierres número en el primer café si el pedido sigue abierto. Cuando haya lista:

| Paquete | Incluye | No incluye |
| --- | --- | --- |
| **Configuración Esencial** | Puertas A (+ B si el campo existe): lo del preview y similares | FTP, otra plantilla, checkout |
| **Upgrade Impulso** | Puerta C: piezas que el editor no mueve | Que vos pagues el plan; el plan lo paga él. Horas de código aparte |
| **Cambio de theme** | Rehacer home/colores en otra plantilla gratis | No es “más flexible” gratis sin rehacer. Ipanema = proyecto nuevo |

Frase puente:

> «Con lo que me contás, esto entra en configurar Rio en el plan que ya tenés. Esto otro pide el plan con código. Te lo separo en dos para que elijas hasta dónde llegamos ahora.»

---

## Si no está en la tabla

1. ¿Existe un **módulo o toggle** en Diseño → Editar diseño? → **A**
2. ¿Solo hace falta **ocultar o espaciar**? → **B** (confirmar campo CSS)
3. ¿Hay que **cambiar HTML** del header, ficha, grilla o íconos? → **C**
4. ¿Pide algo que **ninguna** plantilla TN trae (app, checkout custom, web aparte)? → **D**

Anotá la frase textual de él en el meet y clasificala después con esta lista. No inventes un “sí” para cerrar simpatía.