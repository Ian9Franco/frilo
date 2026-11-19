import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 py-24 md:px-8">
      <p className="text-[11px] uppercase tracking-[0.28em] text-brass">404</p>
      <h1 className="mt-3 font-serif text-5xl text-white md:text-7xl">Esa página no está en el archivo.</h1>
      <Link href="/productos" className="mt-8 inline-block bg-bronze px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-white">
        Ver productos
      </Link>
    </section>
  );
}
