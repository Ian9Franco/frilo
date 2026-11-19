import { notFound } from "next/navigation";
import { ProductStudio } from "@/components/ProductStudio";
import { cardOf, getCategory, getProduct, products, productsBySlugs, safeHtml, sizeGuidePath, store } from "@/lib/catalog";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Producto" };
  return {
    title: product.name,
    description: product.name,
    openGraph: { images: product.images?.[0] ? [product.images[0]] : [] },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const relatedPath = product.breadcrumbs.at(-1)?.path;
  const related = productsBySlugs(getCategory(relatedPath || "")?.productSlugs || [])
    .filter((item) => item.slug !== product.slug)
    .slice(0, 4)
    .map(cardOf);

  return (
    <ProductStudio
      product={{ ...product, descriptionHtml: safeHtml(product.descriptionHtml) }}
      related={related}
      sizeGuidePath={sizeGuidePath}
      whatsapp={store.whatsapp}
    />
  );
}
