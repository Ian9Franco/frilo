# Propuestas para Ciervo Negro

Documento para decidir qué se le muestra al cliente y qué se puede publicar de verdad.

**Documentación ampliada:** [docs/README.md](./docs/README.md) (reunión, no prometer, implementación TN, preview vs real, etapas).

**Prototipo:** `ciervo-negro-edicion` (puerto 5174) implementa etapas 1–5; `ciervo-negro` (5173) sigue como referencia de la tienda actual. Las fotos de Instagram en el prototipo son de productos, hasta que el módulo de Rio traiga los posteos reales.

## Las dos versiones

| Carpeta | Para qué es | Puerto |
| --- | --- | --- |
| `ciervo-negro` | La tienda como está hoy. Referencia. No se rediseña. | 5173 |
| `ciervo-negro-edicion` | La que vamos a modificar cuando cierres estas propuestas. Hoy es un clon. | 5174 |

Las dos son un espejo local para mirar y comparar. No son la tienda. La tienda real es Tienda Nube.

## Esto no es un sitio en código

Ciervo Negro usa la plantilla oficial **Rio**, sin diseño a medida. El tema publicado es Rio, no una plantilla custom.

Un prototipo en React puede cambiar la grilla, el menú o la ficha con cualquier librería. Eso no se puede subir a Tienda Nube. Ahí no hay componentes de React: hay un editor de la plantilla, un campo de CSS y, solo en planes más altos, los archivos HTML de la plantilla.

Si le mostramos al dueño una pantalla que Rio no puede armar, le estamos vendiendo algo que después no se puede publicar en el plan que tiene.

## Qué permite el plan Esencial

Precios publicados en [tiendanube.com/planes-y-precios](https://www.tiendanube.com/planes-y-precios):

- Esencial: $27.999 ARS por mes, o $20.999 ARS por mes si se paga el año ($251.991).
- Impulso: $79.999 ARS por mes, o $59.999 ARS por mes en el plan anual.

Tienda Nube ajusta precios en enero, abril, julio y octubre. La página de precios figura modificada el 28 de agosto de 2026, así que el número de noviembre puede haberse movido. Conviene reconfirmarlo en esa página antes de hablarle de plata al cliente. El rango de 20 a 25 dólares que mencionaste corresponde al plan Esencial, no al Impulso.

Tres niveles de cambio, según la [guía oficial de diseño](https://ayuda.tiendanube.com/es_AR/diseno/guia-personalizar-el-diseno-de-tu-tiendanube):

1. **Editor de diseño.** Sin código. Colores, tipografía de la lista, logo, encabezado, orden de la home, banners, video, productos destacados, listado, ficha, carrito y pie. Esto entra en Esencial.
2. **CSS avanzado.** La ayuda oficial dice que está en todos los planes. Sirve para ocultar algo, cambiar un tamaño o un margen. No crea secciones nuevas. Antes de prometerlo, hay que abrir el administrador de esta tienda y ver si el campo está visible. Un generador de CSS de terceros dice que empieza en Impulso. La fuente que uso es la ayuda de Tienda Nube, y igual hay que verificarlo en el panel.
3. **Código fuente (FTP).** HTML, CSS y JavaScript de la plantilla. La página de planes lo destaca en Impulso, como “acceso al código fuente” y “diseño 100% flexible”. No entra en Esencial. Abrir el FTP, además, impide cambiar de plantilla hasta desactivarlo. No conviene para este trabajo.

Rio solo se puede publicar en un plan pago. Esencial alcanza para tenerla, y ya la tienen publicada.

## Qué ya resolvió la plantilla

No hace falta rediseñar la base. La tienda ya está configurada así:

- Fondo casi negro `#0A0809`, texto `#BFBABA`, botones `#5C4535`, pie negro.
- Fuente Plus Jakarta Sans.
- Logo a la izquierda, buscador, cuenta y carrito en íconos, menú hamburguesa.
- Encabezado transparente sobre la foto del ciervo. No es un error: es una opción de Rio, prendida. Arriba de la foto el fondo de la barra es transparente; al bajar, pasa a sólido `#0A0809`. La propuesta ahora es **dejarlo sólido siempre** (se apaga “encabezado transparente” en el editor). La foto queda debajo de la barra, no detrás del logo. Los íconos de Rio (buscar, cuenta, carrito, menú) se quedan: son los del tema, en blanco, y se leen bien sobre la barra sólida. El dibujo de cada ícono no se puede cambiar sin código.
- Home: esa foto, después Destacados, después Novedades, después un video de YouTube.
- La sección de banners promocionales existe y está vacía.
- Etiquetas de promoción en las fotos (`4x3`, `Envío gratis`).
- WhatsApp y los datos de contacto en el pie.
- 89 productos, menú por Estadios, Legacy, Herencia Retro y Archivo.

El problema no es la plantilla. Es que la home, debajo de una foto muy buena, se vuelve un catálogo largo. Rio ya tiene las piezas para ordenar eso.

## Propuestas que sí se pueden publicar

Cada una se hace en el administrador, sobre Rio. Ninguna pide una librería de React.

### 1. Cuatro entradas debajo de la foto

Rio permite banners de categorías (la ayuda habla de hasta 4) y banners promocionales. Hoy esa franja está vacía.

Propuesta: cuatro imágenes, en este orden.

- Estadios
- Colección Legacy
- Drop Herencia Retro
- Drop Archivo

Cada una lleva a la categoría que ya existe. Es el cambio que más se nota y el que mejor usa la plantilla.

Hace falta producir o recortar cuatro fotos. Se pueden armar con las fotos de producto que ya están, con el mismo encuadre y el nombre encima. Sin esas imágenes, el bloque queda flojo.

### 2. Menos productos en la home

Destacados trae 31 productos y Novedades 25. En Rio el módulo puede ser grilla o carrusel, y el título se puede cambiar.

Propuesta: dejar Destacados en carrusel, con una selección corta (una fila, los buzos de estadios). Novedades igual, con las camisetas nuevas. El catálogo completo sigue en Productos.

Eso se hace eligiendo qué productos están marcados como destacados. Es carga, no código.

### 3. Una sola frase arriba

Rio tiene barra de anuncios, y puede ir animada. Hoy no se usa. Las promos solo aparecen chiquitas sobre cada foto.

Propuesta: una línea, por ejemplo “4x3 en buzos · envío gratis”. Sin marquee rápido. Si el movimiento distrae sobre la foto del ciervo, dejarla fija.

### 4. La foto del ciervo se queda

Rio puede poner un video con reproducción automática arriba de todo. No lo recomiendo. Esa foto es la marca. El video que ya tienen puede quedar más abajo, como está, o salir si no suma. No reemplaza al ciervo.

### 5. Segunda foto al pasar el mouse — ya lo hizo el dueño

El listado de Rio tiene rollover. Las fichas ya tienen varias fotos. Activarlo hace que la grilla se mueva sin dibujar otra tienda.

**Estado, 18 nov 2026:** en [ciervonegro.com.ar](https://www.ciervonegro.com.ar/) ya está activo. El clon `ciervo-negro` no lo tenía. Lo pensamos antes de que él lo prendiera en el editor. En la reunión se menciona y se saca del trabajo pendiente. No apagarlo.

Frase: «La segunda foto al pasar el mouse ya la habíamos pensado. Vos la pudiste activar solo, desde el diseño. La dejamos.»

El lugar que ocupaba este punto pasa a las propuestas de reemplazo, más abajo.

### 6. Guía de talles en la ficha

El detalle de producto de Rio tiene módulo de guía de talles. La página “Cómo comprar, talles, pagos y envíos” ya existe.

Propuesta: activar la guía y apuntarla a esa página. No hace falta un componente nuevo.

### 7. Reescribir las páginas, no el tema

Quiénes somos, la guía de compra y las preguntas frecuentes se editan como contenido. Aceptan texto, fotos y HTML simple. Eso está en todos los planes y no toca la plantilla.

Quiénes somos hoy es corto y genérico al lado de la foto de portada. Conviene una página más concreta: qué prenda es (buzo o canguro, negro, estadio), desde cuándo, y cómo se pide el talle. Misma voz en las tres páginas.

Ojo con el color: en una tienda oscura, un texto pegado con `color: #333` se lee mal. El contenido nuevo tiene que heredar el color de la plantilla.

### 8. Instagram en la home, si el módulo conecta

Rio puede mostrar publicaciones de Instagram. La cuenta pública es `@_ciervonegro_`. Si la conexión del diseño funciona en este plan, va al final de la home. Si pide una aplicación paga o no vincula, se deja afuera. No es un bloque para programar.

### 9. CSS chico, recién después de ver el panel

Si el campo de CSS está en este Esencial, el alcance es este:

- Un poco más de aire entre la foto y el título “Destacados”.
- El logo un poco más chico sobre la foto.
- Que no se vea un precio tachado en `$0,00` cuando no hay oferta.
- El título de sección, un poco más chico y con más espacio entre letras.

Nada de rehacer el encabezado, el carrito ni la ficha. Si el campo no está, estas cuatro cosas se omiten. El resto de la propuesta no depende de ellas.

El precio tachado en `$0,00` hoy Rio lo oculta solo. No fue un cambio que hayamos visto hacer al dueño. Si en pantalla no aparece, ese ítem del CSS se omite.

## Qué puede reemplazar lo que él ya hizo

El rollover sale de la lista de trabajo. Estas dos ocupan ese lugar. Las dos son opciones de Rio en Esencial, sin código. No están en la tienda hoy. No entran al alcance hasta que él diga que sí.

### A. Una frase de la marca en la home

Rio tiene un **mensaje institucional**: título y texto, en la página de inicio. Hoy la home no lo tiene.

Propuesta: una sola frase, la misma voz que Quiénes somos. Por ejemplo: «Buzos y canguros negros, con el estadio bordado.» Debajo del ciervo o debajo de los cuatro banners, antes de Destacados.

No es un bloque nuevo. No reemplaza a la página Quiénes somos.

### B. Buscador como barra, solo en la computadora

Rio deja el buscador en ícono o en barra, y la configuración de celular puede ser distinta a la de computadora. Hoy es ícono en los dos.

Propuesta: barra en computadora, ícono en el celular. Si sobre la foto del ciervo distrae, se vuelve al ícono.

## Qué no hay que prometerle

Estas cosas se pueden dibujar en React y no se pueden publicar en Esencial sobre Rio:

- Otro encabezado, un menú enorme o un buscador con otro comportamiento.
- Filtros por club armados a medida. El camino ya está en el menú: Estadios, Primera, Remeras, Buzos. Los banners del punto 1 hacen ese trabajo.
- Una ficha con otra estructura (precio arriba del nombre, galería distinta, botón fijo inventado). Mover piezas de la ficha es código de la plantilla.
- Secciones que Rio no trae: lookbook, contador, animaciones de librería, tipografía cargada por fuera de la lista.
- Cambiar la forma de las etiquetas `4x3` y `Envío gratis`. La ayuda lo marca como cambio de código.
- Un carrito lateral con otro diseño.
- Publicar este proyecto de React como si fuera la tienda.

Cambiar a otra plantilla oficial sí se puede en un plan pago, sin FTP. No lo recomiendo. Rio ya está oscura, con la foto a pantalla completa y el logo transparente. Otra plantilla obliga a reconfigurar todo y sigue siendo una plantilla, no un sitio a medida.

Subir a Impulso solo tendría sentido si, después de ver el editor, el cliente quiere una estructura que Rio no tiene. Para esta pasada no hace falta.

## Cómo mostrárselo sin prometer de más

En la reunión hay dos pantallas:

1. `ciervo-negro`, puerto 5173. “Así está hoy.”
2. Cuando editemos la otra carpeta, solo con los puntos de arriba. “Así puede quedar, y esto se carga en Tienda Nube.”

Hasta que no elijas los puntos, la segunda carpeta queda igual a la primera. Si más adelante querés una dirección más libre, la marcamos como boceto y no como entrega.

## Qué mirar en el administrador antes de implementar

Sin entrar como administrador no se puede confirmar el CSS ni la conexión de Instagram. Con acceso de diseño, en una pasada corta:

- Tienda online, Diseño, Editar diseño: orden de secciones, banners, carrusel, barra, rollover, guía de talles.
- Si aparece “Edición avanzada de CSS”.
- Si el módulo de Instagram vincula la cuenta.
- Productos destacados y novedades: cuáles están tildados.

No hace falta el FTP. No hace falta tocar checkout, pagos ni envíos.

## Orden si se aprueba

1. Banners y recorte de la home.
2. Barra de anuncio y rollover.
3. Guía de talles y textos de las páginas.
4. CSS mínimo, solo si el campo existe.
5. Instagram, solo si conecta.

La carpeta `ciervo-negro` no se modifica. Los cambios de prueba van en `ciervo-negro-edicion`, y solo después de que marques cuáles de estos puntos entran.
