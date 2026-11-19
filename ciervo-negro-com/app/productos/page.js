import { CatalogView } from "@/components/CatalogView";
import { cardOf, getCategory, productsBySlugs } from "@/lib/catalog";

export const metadata = { title: "Productos" };

export default function ProductosPage() {
  const category = getCategory("/productos");
  const products = productsBySlugs(category?.productSlugs || []).map(cardOf);
  return <CatalogView title="Productos" description={category?.description} products={products} />;
}
