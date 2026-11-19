"use client";

import { useState } from "react";

export function ContactForm({ regret }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return <p className="border border-white/15 p-6 text-sm">Recibimos el mensaje en esta pantalla. No salió del navegador.</p>;
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      {regret ? (
        <p className="border border-brass/40 bg-bronze/30 p-4 text-sm leading-relaxed">
          El botón de arrepentimiento de la tienda publicada cancela un pedido. Acá no hay cobro conectado, así que no hay una compra para revertir. Dejanos el número de pedido si ya lo coordinaste por WhatsApp.
        </p>
      ) : null}
      {[
        ["name", "Nombre", "text"],
        ["email", "Email", "email"],
        ["phone", "Teléfono", "tel"],
      ].map(([name, label, type]) => (
        <label key={name} className="block text-[11px] uppercase tracking-[0.16em]">
          {label}
          <input required={name !== "phone"} name={name} type={type} className="mt-2 w-full border border-white/15 bg-transparent px-3 py-3 text-sm normal-case tracking-normal outline-none" />
        </label>
      ))}
      <label className="block text-[11px] uppercase tracking-[0.16em]">
        Mensaje
        <textarea required name="message" rows={6} className="mt-2 w-full border border-white/15 bg-transparent px-3 py-3 text-sm normal-case tracking-normal outline-none" />
      </label>
      <button type="submit" className="sheen bg-bronze px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-white">
        Enviar
      </button>
    </form>
  );
}
