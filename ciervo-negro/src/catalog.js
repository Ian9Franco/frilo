import raw from "./data/catalog.json";

export const store = raw.store;
export const nav = raw.nav;
export const categories = raw.categories;
export const products = raw.products;
export const pages = raw.pages;
export const home = raw.home;

const bySlug = new Map(products.map((product) => [product.slug, product]));

export function getProduct(slug) {
  return bySlug.get(slug);
}

export function pathOf(value) {
  if (!value) return "/";
  const clean = value.replace(/\/+$/, "");
  return clean || "/";
}

export function getCategory(pathname) {
  const path = pathOf(pathname);
  return categories.find((category) => category.path === path);
}

export function getPage(pathname) {
  const path = pathOf(pathname);
  return pages.find((page) => page.path === path && page.html);
}

export function productsBySlugs(slugs) {
  return slugs.map((slug) => bySlug.get(slug)).filter(Boolean);
}

export function money(value) {
  if (value == null || Number.isNaN(Number(value))) return "Consultar";
  const [ints, decimals] = Number(value).toFixed(2).split(".");
  const grouped = ints.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `$${grouped},${decimals}`;
}

export function defaultSelection(product) {
  const variant = product.variants.find((item) => item.available) || product.variants[0];
  return variant ? [...variant.options] : [];
}

export function findVariant(product, selected) {
  return product.variants.find((variant) =>
    variant.options.every((option, index) => selected[index] === option),
  );
}

export function withOption(product, selected, index, value) {
  const next = [...selected];
  next[index] = value;
  if (findVariant(product, next)) return next;
  const fallback = product.variants.find((variant) => variant.options[index] === value);
  return fallback ? [...fallback.options] : next;
}

export function searchProducts(query) {
  const needle = query.trim().toLocaleLowerCase("es-AR");
  if (needle.length < 2) return [];
  return products.filter((product) => {
    const haystack = `${product.name} ${product.descriptionHtml.replace(/<[^>]+>/g, " ")}`.toLocaleLowerCase(
      "es-AR",
    );
    return haystack.includes(needle);
  });
}
