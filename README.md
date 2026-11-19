# Frilo — CIERVO NEGRO (Tienda Nube)

Repositorio de trabajo freelance: prototipos locales y documentación para mejorar la vidriera de [CIERVO NEGRO](https://www.ciervonegro.com.ar) sobre **Tienda Nube** (plantilla **Rio**, plan **Esencial**).

Este repo es **público** como muestra de proceso y entregables técnicos. El **negocio, la marca, el catálogo y las imágenes** pertenecen al cliente. El código de prototipo y la documentación son obra de [Ian Franco](https://github.com/Ian9Franco); ver [LICENSE](./LICENSE).

## Contenido

| Carpeta | Puerto local | Descripción |
| --- | --- | --- |
| [`ciervo-negro/`](./ciervo-negro/) | 5173 | Espejo de referencia (tienda pública copiada). **No editar** — baseline para comparar. |
| [`ciervo-negro-edicion/`](./ciervo-negro-edicion/) | 5174 | Propuesta implementada (etapas 1–5) para preview en reunión / host. |
| [`docs/`](./docs/) | — | Guiones, límites del alcance, pasos en el admin de Tienda Nube. |
| [`PROPUESTAS.md`](./PROPUESTAS.md) | — | Alcance acordado: qué se puede publicar en TN sin código custom ni FTP. |

## Cómo correr los prototipos

Requisitos: Node.js 18+.

**Referencia (sin cambios de propuesta):**

```bash
cd ciervo-negro
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

**Propuesta (edición):**

```bash
cd ciervo-negro-edicion
npm install
npm run dev
```

Abre [http://localhost:5174](http://localhost:5174).

Los prototipos **no** son la tienda real: no hay checkout, pagos ni sesiones. Las fotos de producto se cargan desde el CDN de Tienda Nube (hace falta internet).

## Flujo del proyecto

1. Reunión y aprobación del plan → [`docs/REUNION.md`](./docs/REUNION.md)
2. Preview en host a partir del build de `ciervo-negro-edicion` → [`docs/PREVIEW-VS-REAL.md`](./docs/PREVIEW-VS-REAL.md)
3. Carga manual en el administrador de Tienda Nube → [`docs/IMPLEMENTACION-TIENDA-NUBE.md`](./docs/IMPLEMENTACION-TIENDA-NUBE.md)

Índice completo de documentación: [`docs/README.md`](./docs/README.md).

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [React Router](https://reactrouter.com/)
- Datos de catálogo en JSON generado desde páginas públicas
- CSS propio que imita Rio; snippet opcional para “CSS avanzado” en TN (`ciervo-negro-edicion/tienda-nube-css.css`)

## Aviso legal

- **Marca y contenido comercial:** CIERVO NEGRO / [ciervonegro.com.ar](https://www.ciervonegro.com.ar) — uso exclusivo del titular de la tienda.
- **Este repositorio:** publicado con fines de **portfolio**; no concede licencia para reutilizar la marca, copiar el catálogo con fines comerciales ni presentar el trabajo como propio sin autorización.

## Contacto

Ian Franco — [github.com/Ian9Franco](https://github.com/Ian9Franco)