# CIERVO NEGRO — versión actual

Esta carpeta es la copia de la tienda como está hoy. No se rediseña.

La otra carpeta, `ciervo-negro-edicion`, es la que se va a modificar después de cerrar las propuestas. El documento está en `/agent/PROPUESTAS.md`.

# CIERVO NEGRO — prototipo local

Copia de la vidriera pública de [ciervonegro.com.ar](https://www.ciervonegro.com.ar/) para rediseñarla. No es la tienda real: no cobra, no crea pedidos y no inicia sesión.

## Cómo correrla

```bash
cd ciervo-negro
npm install
npm run dev
```

Queda en [http://localhost:5173](http://localhost:5173).

## Qué hay

- Inicio, con la foto principal, Destacados, Novedades y el video.
- Catálogo y categorías del menú (Estadios, Primera y Segunda, Legacy, Drop Herencia Retro, Drop Archivo).
- Ficha de producto, con variantes, fotos y texto público.
- Carrito en el ícono y en `/carrito`. El carrito vive en el navegador.
- Buscador sobre los 89 productos copiados.
- Contacto, quiénes somos, cambios, cómo comprar y preguntas frecuentes.
- Pantalla de cuenta, solo de muestra.

Los textos están en español de Argentina, como en la tienda. Colores, logo y fotos salen de las páginas públicas. Las imágenes se piden al CDN de Tienda Nube, así que hace falta internet para verlas.

## Qué no está

- Checkout, pagos (Pago Nube, Mercado Pago) y creación de pedidos.
- Cálculo real de envío y validación de cupones.
- Cuentas, pedidos y botón de arrepentimiento operativo.
- Stock en vivo. Dos buzos no publican precio y quedan como “Consultar”.
- El buscador no es el de Tienda Nube: busca en el catálogo copiado, por nombre y descripción.
- El popup de “descuento exclusivo” venía vacío en el HTML público.
- Los banners promocionales de la home no tenían slides.
- No hay panel de administración.
