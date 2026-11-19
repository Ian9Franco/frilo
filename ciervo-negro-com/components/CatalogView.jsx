"use client";

import { useMemo, useState } from "react";
import { ProductGrid } from "./ProductCard";

export function CatalogView({ title, description, products }) {
  const [sort, setSort] = useState("featured");
  const ordered = useMemo(() => {
    const copy = [...products];
    if (sort === "price-asc") copy.sort((a, b) => (a.price ?? 1e12) - (b.price ?? 1e12));
    if (sort === "price-desc") copy.sort((a, b) => (b.price ?? -1) - (a.price ?? -1));
    if (sort === "name") copy.sort((a, b) => a.name.localeCompare(b.name, "es"));
    return copy;
  }, [products, sort]);

  return (
    <section className="px-4 py-10 md:px-8 md:py-14">
      <p className="text-[11px] uppercase tracking-[0.28em] text-brass">Archivo</p>
      <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h1 className="font-serif text-5xl text-white md:text-7xl">{title}</h1>
        <label className="text-[11px] uppercase tracking-[0.18em]">
          Ordenar
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="mt-2 block border border-white/20 bg-transparent px-3 py-2 text-sm normal-case tracking-normal"
          >
            <option value="featured">Destacados</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
            <option value="name">Nombre</option>
          </select>
        </label>
      </div>
      <p className="mt-4 text-sm">
        {ordered.length} {ordered.length === 1 ? "producto" : "productos"}
      </p>
      {description ? <p className="mt-3 max-w-2xl text-sm leading-relaxed">{description}</p> : null}
      <div className="mt-10">
        <ProductGrid products={ordered} />
      </div>
    </section>
  );
}
