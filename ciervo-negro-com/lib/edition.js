/** Textos de la edición Frilo, reescritos para la tienda propia. */

export const editionPageHtml = {
  "/quienes-somos": `
<p class="lede">CIERVO NEGRO hace buzos y canguros negros con el estadio bordado al frente. No es merch de gente: es ropa para usar todos los días, con pasión de club.</p>
<p>La marca arrancó en <strong>2024</strong>. Hoy trabajamos en drops por colección —Estadios, Legacy, Herencia Retro y Archivo— y sumamos remeras y camisetas retro en algunas ediciones.</p>
<h2>Qué vas a comprar</h2>
<ul>
  <li><strong>Buzos y canguros</strong> en negro, calce clásico con un toque oversize.</li>
  <li><strong>Remeras y camisetas</strong> según el drop; el calce varía entre regular y oversize (lo indicamos en cada ficha).</li>
  <li><strong>Bordado</strong> en cada pieza; conviene lavar del revés y con agua fría.</li>
</ul>
<h2>Cómo elegir tu talle</h2>
<p>Los talles son <strong>unisex</strong>. Medí una prenda que uses seguido (ancho y largo) y compará con la guía. Si dudás entre dos talles, elegí el más grande.</p>
<p>Tabla completa y cuidados: <a href="/como-comprar-talles-pagos-y-envios#talles">Cómo comprar, talles, pagos y envíos</a>.</p>
<p>Promo habitual en buzos: <strong>4x3</strong> y <strong>envío gratis</strong> según lo publicado en la tienda.</p>
<p>Dudas: <a href="https://wa.me/541126465261">WhatsApp</a> o <a href="mailto:ciervonegro.cn@gmail.com">ciervonegro.cn@gmail.com</a>.</p>
`.trim(),
  "/como-comprar-talles-pagos-y-envios": guia(),
  "/como-comprar-talles-y-especificaciones-pagos-y-envios": guia(),
  "/preguntas-frecuentes": `
<h2>Compras</h2>
<p><strong>¿Hay stock?</strong> Solo publicamos lo que está disponible en este catálogo.</p>
<p><strong>¿Cupón después de pagar?</strong> No se puede aplicar retroactivo; si el pedido no entró en producción, escribinos.</p>
<p><strong>¿Dos tarjetas?</strong> Cuando el checkout del .com esté conectado, sí, si la pasarela lo permite. Hoy el pedido se confirma por WhatsApp.</p>
<h2>Talles</h2>
<p><strong>¿Cómo elijo?</strong> Tabla en la ficha + <a href="/como-comprar-talles-pagos-y-envios#talles">guía de talles</a>.</p>
<p><strong>¿Unisex?</strong> Sí, en todos los productos.</p>
<p><strong>¿Entre dos talles?</strong> Recomendamos el más grande.</p>
<h2>Envíos y plazos</h2>
<p><strong>¿Cuánto tarda?</strong> Producción 2–10 días hábiles, más el tiempo del correo según tu zona.</p>
<p><strong>¿Costo?</strong> Se confirma al armar el pedido.</p>
<h2>Cambios y fallas</h2>
<p><strong>¿Cambio de talle?</strong> Hasta 15 días; detalle en <a href="/politica-de-cambios-y-devoluciones">Política de cambios</a>.</p>
<p><strong>¿Llegó dañado?</strong> Escribinos a ciervonegro.cn@gmail.com con tu número de pedido.</p>
<h2>Contacto</h2>
<p>WhatsApp <a href="https://wa.me/541126465261">11 2646-5261</a> · ciervonegro.cn@gmail.com</p>
`.trim(),
};

function guia() {
  return `
<h2 id="como-comprar">Cómo comprar</h2>
<ol>
  <li>Elegí producto, talle, color y cantidad.</li>
  <li>Agregalo al carrito y revisá el resumen.</li>
  <li>En esta edición propia, el pedido se arma y se confirma por WhatsApp hasta conectar la pasarela.</li>
  <li>Completá datos y elegí envío o retiro coordinado.</li>
  <li>Pagá y esperá la confirmación.</li>
</ol>
<p>Solo ves talles con stock. Atención: lunes a viernes, 10 a 17 h.</p>
<h2 id="talles">Talles y calce</h2>
<p>Cada producto puede incluir medidas en la ficha. Compará ancho y largo con una prenda tuya.</p>
<ul>
  <li>Talles <strong>unisex</strong>.</li>
  <li><strong>Entre dos talles:</strong> el más grande suele ser más cómodo.</li>
  <li><strong>Buzos:</strong> calce clásico, leve oversize.</li>
  <li><strong>Camisetas retro:</strong> calce clásico con leve oversize.</li>
</ul>
<h3>Cuidado</h3>
<ul>
  <li>Lavar del revés, agua fría.</li>
  <li>Sin lavandina ni secadora.</li>
</ul>
<h2 id="pagos">Pagos</h2>
<p>En la tienda de Tienda Nube: Mercado Pago, tarjetas, débito y transferencia. En este .com propio el cobro se confirma por WhatsApp hasta conectar la pasarela en el servidor.</p>
<h2 id="envios">Envíos</h2>
<p>Enviamos a todo Argentina (Correo Argentino, Andreani, moto en CABA/GBA). Producción habitual: <strong>2 a 10 días hábiles</strong> antes del despacho. El costo se calcula al finalizar la compra.</p>
<p>Cambios por talle: mirá <a href="/politica-de-cambios-y-devoluciones">Política de cambios</a> (15 días desde que recibís).</p>
`.trim();
}
