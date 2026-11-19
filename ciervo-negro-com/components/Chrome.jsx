"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { money } from "@/lib/format";
import { useCart, useUi } from "./Providers";

const links = [
  { label: "Estadios", href: "/estadios" },
  { label: "Legacy", href: "/coleccion-legacy" },
  { label: "Herencia", href: "/drop-herencia-retro" },
  { label: "Archivo", href: "/drop-archivo" },
  { label: "Todo", href: "/productos" },
];

export function Chrome({ children, store, index, collections }) {
  const pathname = usePathname();
  const home = pathname === "/";
  const { count, items, subtotal, updateQty, removeItem } = useCart();
  const ui = useUi();
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    ui.closeMenu();
    ui.closeSearch();
    ui.closeCart();
    setQuery("");
    // Close overlays on navigation. ui identity changes with open state, so depend on path only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const results = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("es-AR");
    if (needle.length < 2) return [];
    return index.filter((item) => item.haystack.includes(needle)).slice(0, 8);
  }, [index, query]);

  const solid = !home || scrolled || ui.menu || ui.search;

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-white/10">
        <div className="h-full origin-left bg-brass" style={{ transform: `scaleX(${ui.progress})` }} />
      </div>
      <div className="fixed inset-x-0 top-0 z-40 overflow-hidden bg-bronze text-white">
        <div className="flex h-8 w-max animate-marquee items-center gap-10 px-4 text-[11px] uppercase tracking-[0.22em]">
          {Array.from({ length: 2 }).map((_, copy) => (
            <p key={copy} className="flex gap-10">
              <span>{store.announcement}</span>
              <span>Edición propia · hosting .com</span>
              <span>Buzos negros, estadio bordado</span>
              <span>Atención lun a vie 10 a 17 h</span>
            </p>
          ))}
        </div>
      </div>
      <header
        className={`fixed inset-x-0 top-8 z-40 flex h-[72px] items-center justify-between px-4 transition duration-500 md:px-8 ${
          solid ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <button type="button" className="text-[11px] uppercase tracking-[0.22em] text-white md:hidden" onClick={ui.openMenu}>
          Menú
        </button>
        <nav className="hidden items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-white/80 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brass">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-center text-white" aria-label={store.name}>
          <span className="block font-serif text-2xl leading-none tracking-wide md:text-[1.7rem]">Ciervo Negro</span>
        </Link>
        <div className="flex items-center gap-1 text-white">
          <button type="button" className="grid h-10 w-10 place-items-center" aria-label="Buscar" onClick={ui.openSearch}>
            <SearchIcon />
          </button>
          <Link href="/cuenta" className="grid h-10 w-10 place-items-center" aria-label="Cuenta">
            <UserIcon />
          </Link>
          <button type="button" className="relative grid h-10 w-10 place-items-center" aria-label="Carrito" onClick={ui.openCart}>
            <BagIcon />
            <span className="absolute right-1 top-1 grid min-w-4 place-items-center rounded-full bg-white px-1 text-[10px] font-semibold text-ink">
              {count}
            </span>
          </button>
        </div>
      </header>

      <main className={home ? "" : "pt-[104px]"}>{children}</main>

      <footer className="mt-20 border-t border-white/10 px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-serif text-4xl text-white">El archivo sigue abierto.</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed">
              Newsletter de drops. En este prototipo el mail queda en la pantalla y no se envía a un servidor.
            </p>
            {sent ? (
              <p className="mt-6 text-sm text-brass">Listo. Te anotamos en este navegador.</p>
            ) : (
              <form
                className="mt-6 flex max-w-md border-b border-white/25"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (email.includes("@")) setSent(true);
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                  aria-label="Email"
                  className="w-full bg-transparent py-3 outline-none placeholder:text-bone/50"
                />
                <button type="submit" className="text-[11px] uppercase tracking-[0.2em] text-white">
                  Enviar
                </button>
              </form>
            )}
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white">Colecciones</p>
            <ul className="mt-4 space-y-2 text-sm">
              {collections.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/productos" className="hover:text-white">
                  Todos los productos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white">Casa</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={store.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp {store.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${store.email}`}>{store.email}</a>
              </li>
              <li>
                <Link href="/quienes-somos">Quiénes somos</Link>
              </li>
              <li>
                <Link href="/como-comprar-talles-pagos-y-envios">Talles, pagos y envíos</Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes">Preguntas</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-relaxed text-bone/70 md:flex-row md:justify-between">
          <p>{store.legal}</p>
          <p>
            Defensa de las y los consumidores. Para reclamos{" "}
            <a className="underline" href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario" target="_blank" rel="noreferrer">
              ingresá acá
            </a>
            . <Link className="underline" href="/contacto?arrepentimiento=1">Botón de arrepentimiento</Link>
          </p>
        </div>
      </footer>

      <a
        href={store.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-30 grid h-12 w-12 place-items-center rounded-full bg-[#1f6b45] text-white shadow-lg animate-pulse-soft"
        aria-label="WhatsApp"
      >
        <WhatsIcon />
      </a>

      <Overlay open={ui.cartOpen} onClose={ui.closeCart} label="Carrito">
        <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#100d0c] shadow-2xl transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${ui.cartOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white">Carrito</p>
            <button type="button" onClick={ui.closeCart} className="text-sm text-bone">
              Cerrar
            </button>
          </div>
          <div className="flex-1 space-y-5 overflow-auto px-5 py-5">
            {items.length === 0 && <p className="text-sm">Todavía no hay piezas.</p>}
            {items.map((item) => (
              <div key={item.key} className="flex gap-3">
                {item.image ? <img src={item.image} alt="" className="h-24 w-20 object-cover" /> : null}
                <div className="min-w-0 flex-1">
                  <Link href={`/productos/${item.slug}`} className="text-sm text-white" onClick={ui.closeCart}>
                    {item.name}
                  </Link>
                  <p className="mt-1 text-xs text-bone/80">{item.options.join(" · ")}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center border border-white/15">
                      <button type="button" className="h-8 w-8" onClick={() => updateQty(item.key, item.qty - 1)} aria-label="Restar">
                        −
                      </button>
                      <span className="w-6 text-center text-sm">{item.qty}</span>
                      <button type="button" className="h-8 w-8" onClick={() => updateQty(item.key, item.qty + 1)} aria-label="Sumar">
                        +
                      </button>
                    </div>
                    <button type="button" className="text-xs underline" onClick={() => removeItem(item.key)}>
                      Quitar
                    </button>
                  </div>
                </div>
                <p className="text-sm tabular-nums">{money(item.price * item.qty)}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 px-5 py-5">
            <div className="mb-4 flex justify-between text-sm text-white">
              <span>Subtotal</span>
              <span className="tabular-nums">{money(subtotal)}</span>
            </div>
            <Link href="/carrito" onClick={ui.closeCart} className="sheen block bg-bronze py-3 text-center text-[12px] uppercase tracking-[0.2em] text-white">
              Armar pedido
            </Link>
          </div>
        </aside>
      </Overlay>

      <Overlay open={ui.search} onClose={ui.closeSearch} label="Buscar">
        <div className={`mx-auto w-full max-w-3xl px-4 pt-28 transition duration-500 ${ui.search ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar un estadio, un club, un buzo"
            className="w-full border-b border-white/30 bg-transparent py-4 font-serif text-3xl text-white outline-none placeholder:text-white/30 md:text-5xl"
          />
          <ul className="mt-8 divide-y divide-white/10">
            {results.map((item) => (
              <li key={item.slug}>
                <Link href={`/productos/${item.slug}`} className="flex items-center gap-4 py-3" onClick={ui.closeSearch}>
                  {item.image ? <img src={item.image} alt="" className="h-16 w-14 object-cover" /> : null}
                  <span className="flex-1 text-white">{item.name}</span>
                  <span className="text-sm tabular-nums">{money(item.price)}</span>
                </Link>
              </li>
            ))}
          </ul>
          {query.trim().length >= 2 && (
            <Link href={`/buscar?q=${encodeURIComponent(query.trim())}`} className="mt-6 inline-block text-sm text-brass" onClick={ui.closeSearch}>
              Ver todos los resultados
            </Link>
          )}
        </div>
      </Overlay>

      <Overlay open={ui.menu} onClose={ui.closeMenu} label="Menú">
        <div className="flex h-full flex-col justify-between px-6 py-24 md:px-16">
          <ul className="space-y-3">
            {collections.map((item, index) => (
              <li key={item.href} className="animate-rise" style={{ animationDelay: `${index * 70}ms` }}>
                <Link href={item.href} className="flex items-baseline gap-4 text-white" onClick={ui.closeMenu}>
                  <span className="text-xs tracking-[0.2em] text-brass">{item.kicker}</span>
                  <span className="font-serif text-5xl md:text-7xl">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/productos" onClick={ui.closeMenu}>Productos</Link>
            <Link href="/quienes-somos" onClick={ui.closeMenu}>Quiénes somos</Link>
            <Link href="/contacto" onClick={ui.closeMenu}>Contacto</Link>
            <Link href="/cuenta" onClick={ui.closeMenu}>Cuenta</Link>
          </div>
        </div>
      </Overlay>
    </>
  );
}

function Overlay({ open, onClose, label, children }) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`} role="dialog" aria-label={label} aria-hidden={!open} inert={open ? undefined : true}>
      <button
        type="button"
        aria-label={`Cerrar ${label}`}
        className={`absolute inset-0 bg-black/70 transition duration-500 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      {children}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16.5 20 20" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 19.2c1.4-3 3.8-4.4 7-4.4s5.6 1.4 7 4.4" />
    </svg>
  );
}
function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6.5 8h11l-.7 11.2a1 1 0 0 1-1 .8H8.2a1 1 0 0 1-1-.8L6.5 8Z" />
      <path d="M9 8V6.8A3 3 0 0 1 12 3.8 3 3 0 0 1 15 6.8V8" />
    </svg>
  );
}
function WhatsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M12.04 3C7.3 3 3.46 6.8 3.46 11.5c0 1.5.4 2.96 1.16 4.25L3.4 21l5.4-1.18A8.7 8.7 0 0 0 12.04 20c4.74 0 8.58-3.8 8.58-8.5S16.78 3 12.04 3Zm4.86 12.02c-.2.56-1.16 1.07-1.62 1.14-.42.06-.96.09-1.55-.1-.36-.11-.82-.26-1.41-.51-2.48-1.07-4.1-3.57-4.22-3.74-.12-.16-1-1.33-1-2.54s.63-1.8.86-2.05c.22-.24.48-.3.64-.3h.46c.15 0 .34-.05.53.4.2.48.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.24-.1.47.14.24.62 1.02 1.33 1.65.92.82 1.69 1.07 1.93 1.19.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.14 1.14Z" />
    </svg>
  );
}
