# CIERVO NEGRO — tienda propia

Clon de la edición Frilo (`ciervo-negro-edicion`) en **Next.js**, **Tailwind** y **Three.js**. Pensada para publicarse en **Vercel**, no en la plantilla Rio de Tienda Nube.

El catálogo y las fotos salen del espejo público de [ciervonegro.com.ar](https://www.ciervonegro.com.ar). El cobro en línea no está conectado: el carrito arma el pedido y lo abre en WhatsApp.

## Vercel

El sitio vive en esta carpeta, no en la raíz del repo.

1. Importá el repositorio en Vercel.
2. **Root Directory:** `ciervo-negro-com`.
3. Framework: Next.js. Lo detecta solo (`vercel.json` lo marca).
4. Deploy. No hace falta variable de entorno.

El dominio de cada deployment entra solo en el sitemap y en Open Graph (`VERCEL_URL` / `VERCEL_PROJECT_PRODUCTION_URL`). Si querés fijar el `.com` antes de asignarlo en Vercel, definí `NEXT_PUBLIC_SITE_URL`.

Las fotos se piden al CDN público de Tienda Nube.

## Local

```bash
cd ciervo-negro-com
npm install
npm run dev
```

http://localhost:5180
