import Link from "next/link";
import { notFound } from "next/navigation";
import { CatalogView } from "@/components/CatalogView";
import { cardOf, categories, getCategory, getPage, pages, productsBySlugs } from "@/lib/catalog";

export function generateStaticParams() {
  const paths = [
    ...categories.map((category) => category.path),
    ...pages.map((page) => page.path),
  ].filter((path) => path !== "/productos" && path !== "/contacto");

  return paths.map((path) => ({ slug: path.split("/").filter(Boolean) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  const category = getCategory(path);
  const page = getPage(path);
  return { title: category?.title || page?.title || "CIERVO NEGRO" };
}

export default async function CatchAllPage({ params }) {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  const category = getCategory(path);
  if (category) {
    return (
      <CatalogView
        title={category.title}
        description={category.description}
        products={productsBySlugs(category.productSlugs).map(cardOf)}
      />
    );
  }

  const page = getPage(path);
  if (!page) notFound();

  return (
    <article className="px-4 py-12 md:px-8 md:py-16">
      <p className="text-xs text-bone/70">
        <Link href="/" className="hover:text-white">Inicio</Link>
        <span> / {page.title}</span>
      </p>
      <h1 className="mt-4 max-w-3xl font-serif text-5xl text-white md:text-7xl">{page.title}</h1>
      <div className="prose mt-8 max-w-3xl" dangerouslySetInnerHTML={{ __html: page.html }} />
    </article>
  );
}
