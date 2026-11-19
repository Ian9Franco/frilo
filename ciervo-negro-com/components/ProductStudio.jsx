"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { money } from "@/lib/format";
import { defaultSelection, findVariant, withOption } from "@/lib/variants";
import { useCart } from "./Providers";
import { CrestCanvas } from "./Scenes";
import { ProductGrid } from "./ProductCard";

export function ProductStudio({ product, related, sizeGuidePath, whatsapp }) {
  const { addItem } = useCart();
  const [selected, setSelected] = useState(() => defaultSelection(product));
  const [photo, setPhoto] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setSelected(defaultSelection(product));
    setPhoto(0);
    setQty(1);
  }, [product]);

  const variant = useMemo(() => findVariant(product, selected), [product, selected]);

  useEffect(() => {
    if (!variant?.image) return;
    const index = product.images.indexOf(variant.image);
    if (index >= 0) setPhoto(index);
  }, [product.images, variant]);

  const active = product.images[photo] || variant?.image || product.images[0];
  const installment = variant?.price && product.installments ? variant.price / product.installments.count : null;
  const hasSize = product.options.some((group) => /talle/i.test(group.name));

  function choose(index, value) {
    setSelected((current) => withOption(product, current.length ? current : defaultSelection(product), index, value));
  }

  return (
    <article className="px-4 py-8 md:px-8 md:py-12">
      <p className="text-xs text-bone/70">
        <Link href="/" className="hover:text-white">Inicio</Link>
        {product.breadcrumbs.map((crumb) => (
          <span key={crumb.path}>
            {" / "}
            <Link href={crumb.path} className="hover:text-white">{crumb.name}</Link>
          </span>
        ))}
      </p>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="relative overflow-hidden bg-[#141110]">
            {active ? (
              <img key={active} src={active} alt={product.name} className="aspect-[4/5] w-full animate-rise object-cover" />
            ) : (
              <span className="block aspect-[4/5]" />
            )}
          </div>
          {product.images.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  onClick={() => setPhoto(index)}
                  className={`w-20 shrink-0 border ${index === photo ? "border-brass" : "border-transparent"}`}
                >
                  <img src={image} alt="" className="aspect-[4/5] w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="mb-4 hidden h-36 lg:block">
            <CrestCanvas className="h-full w-full" />
          </div>
          {product.labels?.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {product.labels.map((label) => (
                <span key={label} className="bg-bronze px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-white">
                  {label}
                </span>
              ))}
            </div>
          )}
          <h1 className="font-serif text-4xl text-white md:text-5xl">{product.name}</h1>
          <p className="mt-4 flex items-baseline gap-3 text-xl text-white">
            {variant?.compareAt > 0 && variant.compareAt > variant.price ? (
              <s className="text-base text-bone/60">{money(variant.compareAt)}</s>
            ) : null}
            <span className="tabular-nums">{money(variant?.price ?? product.price)}</span>
          </p>
          {installment ? (
            <p className="mt-2 text-sm">
              Hasta {product.installments.count} cuotas sin interés de {money(installment)} con {product.installments.provider}.
            </p>
          ) : null}
          {hasSize ? (
            <p className="mt-4 text-sm">
              <Link href={sizeGuidePath} className="text-brass underline underline-offset-4">
                Guía de talles
              </Link>
            </p>
          ) : null}
          <div className="mt-6 space-y-5">
            {product.options.map((group, index) => (
              <fieldset key={group.name}>
                <legend className="text-[11px] uppercase tracking-[0.18em] text-white">{group.name}</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.values.map((option) => {
                    const activeOption = selected[index] === option.value;
                    return (
                      <button
                        type="button"
                        key={option.value}
                        aria-pressed={activeOption}
                        onClick={() => choose(index, option.value)}
                        className={`min-h-10 border px-3 text-sm transition ${option.color ? "w-10" : "min-w-10"} ${
                          activeOption ? "border-brass text-ink" : "border-white/20 hover:border-white"
                        } ${activeOption && !option.color ? "bg-brass" : ""}`}
                        style={option.color ? { background: option.color, boxShadow: "inset 0 0 0 1px rgba(255,255,255,.4)" } : undefined}
                      >
                        {option.color ? <span className="sr-only">{option.value}</span> : option.value}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>
          {product.contact || (variant?.price == null && product.price == null) ? (
            <a
              className="sheen mt-8 block bg-bronze py-4 text-center text-[12px] uppercase tracking-[0.2em] text-white"
              href={`${whatsapp}?text=${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noreferrer"
            >
              Consultar por WhatsApp
            </a>
          ) : (
            <div className="mt-8 flex gap-3">
              <div className="flex items-center border border-white/20">
                <button type="button" className="h-12 w-10" onClick={() => setQty((value) => Math.max(1, value - 1))} aria-label="Restar">
                  −
                </button>
                <span className="w-6 text-center">{qty}</span>
                <button type="button" className="h-12 w-10" onClick={() => setQty((value) => value + 1)} aria-label="Sumar">
                  +
                </button>
              </div>
              <button
                type="button"
                disabled={!variant?.available}
                onClick={() => addItem(product, variant, qty)}
                className="sheen flex-1 bg-white text-[12px] uppercase tracking-[0.2em] text-ink disabled:cursor-not-allowed disabled:bg-white/30"
              >
                {variant?.available ? "Agregar al carrito" : "Sin stock"}
              </button>
            </div>
          )}
          <p className="mt-4 text-xs leading-relaxed text-bone/70">
            El stock es el publicado al armar este catálogo. En el .com propio se confirma al armar el pedido.
          </p>
          <div className="prose mt-8 text-sm" dangerouslySetInnerHTML={{ __html: product.descriptionHtml || "" }} />
        </div>
      </div>
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-8 font-serif text-4xl text-white">También te puede interesar</h2>
          <ProductGrid products={related} />
        </section>
      )}
    </article>
  );
}
