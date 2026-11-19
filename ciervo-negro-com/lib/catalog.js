import raw from "../data/catalog.json";
import { editionPageHtml } from "./edition";
import { money as formatMoney } from "./format";

export { formatMoney as money };

export const store = raw.store;
export const nav = raw.nav;
export const categories = raw.categories;
export const products = raw.products;
export const pages = raw.pages;
export const home = raw.home;

export const sizeGuidePath = "/como-comprar-talles-pagos-y-envios#talles";

export const collections = [
  {
    title: "Estadios",
    href: "/estadios",
    slug: "monumental-river-plate",
    kicker: "01",
    text: "El estadio, bordado al frente.",
  },
  {
    title: "Legacy",
    href: "/coleccion-legacy",
    slug: "parque-patricios-torre-huracan",
    kicker: "02",
    text: "Piezas que se quedan en el placard.",
  },
  {
    title: "Herencia Retro",
    href: "/drop-herencia-retro",
    slug: "camiseta-edicion-1-boca-juniors-1sqvo",
    kicker: "03",
    text: "Camisetas con memoria de club.",
  },
  {
    title: "Archivo",
    href: "/drop-archivo",
    slug: "buzo-boca-juniors-edicion-archivo-18p1y",
    kicker: "04",
    text: "El drop que no vuelve igual.",
  },
];

const bySlug = new Map(products.map((product) => [product.slug, product]));

export function getProduct(slug) {
  return bySlug.get(slug);
}

export function pathOf(value) {
  if (!value) return "/";
  const clean = String(value).replace(/\/+$/, "");
  return clean || "/";
}

export function getCategory(pathname) {
  const path = pathOf(pathname);
  return categories.find((category) => category.path === path) || null;
}

export function safeHtml(html) {
  return String(html || "").replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "");
}

export function getPage(pathname) {
  const path = pathOf(pathname);
  const page = pages.find((item) => item.path === path);
  const html = editionPageHtml[path] || page?.html;
  if (!page || !html) return null;
  return { ...page, html: safeHtml(html) };
}

export function productsBySlugs(slugs = []) {
  return slugs.map((slug) => bySlug.get(slug)).filter(Boolean);
}

export function plainText(html) {
  return String(html || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function cardOf(product) {
  if (!product) return null;
  return {
    slug: product.slug,
    name: product.name,
    price: product.price,
    compareAt: product.compareAt,
    labels: product.labels || [],
    images: (product.images || []).slice(0, 2),
    available: product.available,
  };
}

export function searchIndex() {
  return products.map((product) => ({
    slug: product.slug,
    name: product.name,
    price: product.price,
    image: product.images?.[0] || "",
    haystack: `${product.name} ${plainText(product.descriptionHtml)}`.toLocaleLowerCase("es-AR"),
  }));
}
