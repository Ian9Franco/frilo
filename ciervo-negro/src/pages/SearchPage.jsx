import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchProducts } from "../catalog";
import ProductGrid from "../components/ProductGrid";

export default function SearchPage() {
  const [params] = useSearchParams();
  const query = params.get("q") || "";
  const results = searchProducts(query);

  useEffect(() => {
    document.title = query ? `Buscar: ${query} — CIERVO NEGRO` : "Buscar — CIERVO NEGRO";
  }, [query]);

  return (
    <section className="page">
      <p className="crumbs">
        <Link to="/">Inicio</Link>
        <span>/</span>
        <span>Buscar</span>
      </p>
      <h1>{query ? `Resultados para “${query}”` : "Buscar"}</h1>
      {query.trim().length < 2 ? (
        <p>Escribí al menos dos letras. El buscador recorre el catálogo copiado, no el buscador en vivo de Tienda Nube.</p>
      ) : (
        <>
          <p className="muted">
            {results.length} {results.length === 1 ? "resultado" : "resultados"} en el catálogo local.
          </p>
          <ProductGrid products={results} />
        </>
      )}
    </section>
  );
}
