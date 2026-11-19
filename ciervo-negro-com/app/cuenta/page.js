import Link from "next/link";

export const metadata = { title: "Cuenta" };

export default function AccountPage() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24">
      <p className="text-[11px] uppercase tracking-[0.28em] text-brass">Cuenta</p>
      <h1 className="mt-3 max-w-3xl font-serif text-5xl text-white md:text-7xl">Todavía sin login.</h1>
      <p className="mt-6 max-w-xl text-sm leading-relaxed md:text-base">
        En el hosting propio la cuenta entra cuando haya usuarios en el servidor. Hoy el pedido se arma en el carrito y se confirma por WhatsApp. El carrito queda guardado en este navegador.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/carrito" className="bg-bronze px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-white">
          Ir al carrito
        </Link>
        <Link href="/contacto" className="border border-white/25 px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-white">
          Escribir
        </Link>
      </div>
    </section>
  );
}
