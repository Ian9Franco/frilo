import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getCategory, productsBySlugs } from "../catalog";
import ProductGrid from "../components/ProductGrid";

export default function Catalog({ category }) {
  const current = category || getCategory("/productos");
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    document.title = `${current?.title || "Productos"} — CIERVO NEGRO`;
    setSort("featured");
  }, [current?.path, current?.title]);

  const products = useMemo(() => {
    const list = productsBySlugs(current?.productSlugs || []);
    const copy = [...list];
    if (sort === "price-asc") copy.sort((a, b) => (a.price ?? 1e12) - (b.price ?? 1e12));
    if (sort === "price-desc") copy.sort((a, b) => (b.price ?? -1) - (a.price ?? -1));
    if (sort === "name") copy.sort((a, b) => a.name.localeCompare(b.name, "es"));
    return copy;
  }, [current, sort]);

  if (!current) return null;

  return (
    <section className="page">
      <p className="crumbs">
        <Link to="/">Inicio</Link>
        <span>/</span>
        <span>{current.title}</span>
      </p>
      <header className="page-head">
        <h1>{current.title}</h1>
        <label>
          Ordenar
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="featured">Destacados</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
            <option value="name">Nombre</option>
          </select>
        </label>
      </header>
      <p className="muted">
        {products.length} {products.length === 1 ? "producto" : "productos"}
      </p>
      {current.description && <p className="lede">{current.description}</p>}
      <ProductGrid products={products} />
    </section>
  );
}
