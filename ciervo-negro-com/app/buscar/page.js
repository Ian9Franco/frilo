import { SearchResults } from "@/components/SearchResults";
import { searchIndex } from "@/lib/catalog";

export const metadata = { title: "Buscar" };

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const q = typeof params?.q === "string" ? params.q : "";
  return <SearchResults index={searchIndex()} initialQuery={q} />;
}
