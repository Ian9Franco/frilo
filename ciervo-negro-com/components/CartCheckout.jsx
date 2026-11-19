"use client";

import Link from "next/link";
import { useState } from "react";
import { money } from "@/lib/format";
import { useCart } from "./Providers";

export function CartCheckout({ whatsapp }) {
  const { items, subtotal, updateQty, removeItem, clear } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", city: "", note: "" });
  const [copied, setCopied] = useState(false);

  function message() {
    const lines = items.map(
      (item) => `• ${item.qty}× ${item.name} — ${item.options.join(" / ")} — ${money(item.price * item.qty)}`,
    );
    return [
      "Pedido CIERVO NEGRO",
      `Nombre: ${form.name}`,
      `Teléfono: ${form.phone}`,
      `Ciudad: ${form.city}`,
      form.note ? `Nota: ${form.note}` : "",
      ...lines,
      `Total: ${money(subtotal)}`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(message());
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (!items.length) {
    return (
      <section className="px-4 py-20 md:px-8">
        <h1 className="font-serif text-5xl text-white">El carrito está vacío.</h1>
        <Link href="/productos" className="mt-8 inline-block bg-bronze px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-white">
          Ver productos
        </Link>
      </section>
    );
  }

  return (
    <section className="grid gap-12 px-4 py-10 md:px-8 md:py-14 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <h1 className="font-serif text-5xl text-white md:text-6xl">Pedido</h1>
        <ul className="mt-8 divide-y divide-white/10">
          {items.map((item) => (
            <li key={item.key} className="flex gap-4 py-5">
              {item.image ? <img src={item.image} alt="" className="h-28 w-24 object-cover" /> : null}
              <div className="flex-1">
                <Link href={`/productos/${item.slug}`} className="text-white">
                  {item.name}
                </Link>
                <p className="mt-1 text-sm text-bone/75">{item.options.join(" · ")}</p>
                <div className="mt-3 flex items-center gap-4">
                  <div className="flex border border-white/15">
                    <button type="button" className="h-8 w-8" onClick={() => updateQty(item.key, item.qty - 1)} aria-label="Restar">
                      −
                    </button>
                    <span className="w-6 text-center text-sm leading-8">{item.qty}</span>
                    <button type="button" className="h-8 w-8" onClick={() => updateQty(item.key, item.qty + 1)} aria-label="Sumar">
                      +
                    </button>
                  </div>
                  <button type="button" className="text-xs underline" onClick={() => removeItem(item.key)}>
                    Quitar
                  </button>
                </div>
              </div>
              <p className="tabular-nums">{money(item.price * item.qty)}</p>
            </li>
          ))}
        </ul>
      </div>
      <form
        className="h-fit border border-white/10 p-5 md:p-7"
        onSubmit={(event) => {
          event.preventDefault();
          window.open(`${whatsapp}?text=${encodeURIComponent(message())}`, "_blank", "noopener,noreferrer");
        }}
      >
        <p className="text-[11px] uppercase tracking-[0.22em] text-brass">Confirmar por WhatsApp</p>
        <p className="mt-3 text-sm leading-relaxed">
          El cobro en línea se conecta en el servidor propio. Hasta entonces el pedido sale por WhatsApp, con el mismo catálogo.
        </p>
        <div className="mt-6 space-y-4">
          {[
            ["name", "Nombre", "text"],
            ["phone", "Teléfono", "tel"],
            ["city", "Ciudad", "text"],
          ].map(([key, label, type]) => (
            <label key={key} className="block text-[11px] uppercase tracking-[0.16em]">
              {label}
              <input
                required
                type={type}
                value={form[key]}
                onChange={(event) => setForm((current) => ({ ...current, [key]: event.target.value }))}
                className="mt-2 w-full border border-white/15 bg-transparent px-3 py-3 text-sm normal-case tracking-normal outline-none"
              />
            </label>
          ))}
          <label className="block text-[11px] uppercase tracking-[0.16em]">
            Nota
            <textarea
              rows={3}
              value={form.note}
              onChange={(event) => setForm((current) => ({ ...current, note: event.target.value }))}
              className="mt-2 w-full border border-white/15 bg-transparent px-3 py-3 text-sm normal-case tracking-normal outline-none"
            />
          </label>
        </div>
        <div className="mt-6 flex justify-between text-white">
          <span>Total</span>
          <span className="tabular-nums">{money(subtotal)}</span>
        </div>
        <button type="submit" className="sheen mt-6 w-full bg-bronze py-4 text-[12px] uppercase tracking-[0.2em] text-white">
          Enviar pedido
        </button>
        <button type="button" onClick={copy} className="mt-3 w-full border border-white/20 py-3 text-[12px] uppercase tracking-[0.16em]">
          {copied ? "Copiado" : "Copiar resumen"}
        </button>
        <button type="button" onClick={clear} className="mt-4 text-xs underline">
          Vaciar carrito
        </button>
      </form>
    </section>
  );
}
