"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { money } from "@/lib/format";

export function SearchResults({ index, initialQuery }) {
  const [query, setQuery] = useState(initialQuery || "");
  const results = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("es-AR");
    if (needle.length < 2) return [];
    return index.filter((item) => item.haystack.includes(needle));
  }, [index, query]);

  return (
    <section className="px-4 py-10 md:px-8 md:py-14">
      <p className="text-[11px] uppercase tracking-[0.28em] text-brass">Buscar</p>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Estadio, club, prenda"
        className="mt-4 w-full border-b border-white/25 bg-transparent py-3 font-serif text-4xl text-white outline-none md:text-6xl"
      />
      <p className="mt-6 text-sm">{query.trim().length < 2 ? "Escribí al menos dos letras." : `${results.length} resultados`}</p>
      <ul className="mt-8 divide-y divide-white/10">
        {results.map((item) => (
          <li key={item.slug}>
            <Link href={`/productos/${item.slug}`} className="flex items-center gap-4 py-4">
              {item.image ? <img src={item.image} alt="" className="h-20 w-16 object-cover" /> : null}
              <span className="flex-1 text-white">{item.name}</span>
              <span className="tabular-nums">{money(item.price)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
