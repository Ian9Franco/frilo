# Preview (host) vs tienda real

Cómo encajan el meet, el link en 3–4 días y la implementación en Tienda Nube.

---

## Tres capas

| Capa | Qué es | Quién la ve |
| --- | --- | --- |
| **Tienda real** | ciervonegro.com.ar — Tienda Nube + Rio | Clientes |
| **Referencia local** | `ciervo-negro` :5173 — espejo de hoy | Vos |
| **Propuesta local / host** | `ciervo-negro-edicion` — cambios aprobados en PROPUESTAS | Vos ahora; dueño en host |

El dueño **no** necesita ver 5173/5174 ni el repo.

---

## Timeline

```
Meet (plan + aprobación)
    → 3–4 días: deploy preview en host (build de ciervo-negro-edicion)
    → OK del dueño + imágenes banners
    → Implementación manual en admin TN (sin subir React)
```

---

## Qué mostrar en el host

Recomendado en la demo (10–15 min de recorrido):

1. **Home:** ciervo → 4 banners → Destacados carrusel → Novedades carrusel → (video si queda).
2. **Listado** (Estadios o Productos): rollover en desktop.
3. **Ficha:** guía de talles + descripción.
4. **Quiénes somos** o **Cómo comprar, talles…** (textos etapa 3).

Opcional lado a lado: capturas de la tienda real **hoy** vs URL de preview.

---

## Disclaimer para el dueño

> La preview muestra **orden y contenidos**. El menú, carrito y checkout en la tienda real serán los de Tienda Nube. Lo que acordamos se **carga en el diseñador**, no pegando este link.

Detalle técnico: ver [NO-PROMETER.md](./NO-PROMETER.md).

---

## Deploy del prototipo (referencia)

En `ciervo-negro-edicion`:

```bash
npm install
npm run build
```

La carpeta `dist/` puede subirse a cualquier host estático (Vercel, Netlify, Cloudflare Pages, etc.). Es **solo demostración**; no conecta carrito ni stock real.

### Vercel (repo `Ian9Franco/frilo`)

1. Importar el repo en [vercel.com](https://vercel.com).
2. **Root Directory:** `ciervo-negro-edicion` (monorepo).
3. Framework preset: **Vite** (build `npm run build`, output `dist`).
4. `vercel.json` en esa carpeta ya trae rewrites para React Router (rutas como `/productos/...`).

Sin root directory correcto, Vercel intenta buildear la raíz y falla.

Variables: el catálogo viene de `catalog.json` scrapeado; el stock en la preview **no** es en vivo (ver aviso en ficha del prototipo).

---

## Después del OK

1. Entrar al admin con permiso **Diseño** y **Páginas**.
2. Seguir [IMPLEMENTACION-TIENDA-NUBE.md](./IMPLEMENTACION-TIENDA-NUBE.md) en el mismo orden que las etapas.
3. No editar `ciervo-negro` (referencia); mantener `ciervo-negro-edicion` alineado por si hay segunda ronda de preview.

---

## Qué puede verse distinto entre preview y TN

| Aspecto | Preview React | Tienda real |
| --- | --- | --- |
| Carrito / checkout | Simulado | TN nativo |
| Menú profundo | Clon del scrape | TN nativo (mismas URLs) |
| Barra anuncio / banners | Implementación custom CSS | Módulos Rio |
| Rollover | CSS en `ProductCard` | Toggle en diseño |
| Precios / stock | Congelados en JSON | En vivo |

Eso es normal; el entregable es **paridad de experiencia de home + contenido**, no pixel-perfect del prototipo.