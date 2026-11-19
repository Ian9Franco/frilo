import Link from "next/link";
import { money } from "@/lib/format";

export function ProductCard({ product }) {
  const hover = product.images?.[1];
  return (
    <article className="group">
      <Link href={`/productos/${product.slug}`} className="relative block overflow-hidden bg-[#141110]">
        {product.images?.[0] ? (
          <img
            src={product.images[0]}
            alt=""
            className="aspect-[4/5] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.05] group-hover:opacity-0"
          />
        ) : (
          <span className="block aspect-[4/5] bg-[#1a1614]" />
        )}
        {hover ? (
          <img
            src={hover}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 ease-out group-hover:scale-[1.05] group-hover:opacity-100"
          />
        ) : null}
        {product.labels?.length > 0 && (
          <span className="absolute bottom-3 left-3 flex flex-col items-start gap-1">
            {product.labels.map((label) => (
              <span key={label} className="bg-bronze px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-white">
                {label}
              </span>
            ))}
          </span>
        )}
      </Link>
      <div className="flex items-start justify-between gap-3 px-1 pt-3">
        <Link href={`/productos/${product.slug}`} className="text-sm text-white transition group-hover:text-brass">
          {product.name}
        </Link>
        <p className="shrink-0 text-sm tabular-nums text-bone">{money(product.price)}</p>
      </div>
    </article>
  );
}

export function ProductGrid({ products }) {
  if (!products.length) {
    return <p className="py-16 text-center text-sm tracking-wide text-bone/80">No hay piezas en esta selección.</p>;
  }
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product, index) => (
        <div key={product.slug} className="animate-rise" style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
