import { categories, pages, products } from "@/lib/catalog";
import { siteUrl } from "@/lib/site";

export default function sitemap() {
  const base = siteUrl();
  const paths = [
    "/",
    "/productos",
    "/carrito",
    "/contacto",
    "/buscar",
    "/cuenta",
    ...categories.map((category) => category.path),
    ...pages.map((page) => page.path),
    ...products.map((product) => `/productos/${product.slug}`),
  ];
  const unique = [...new Set(paths)];
  return unique.map((path) => ({
    url: new URL(path, base).toString(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
