"use client";

import Link from "next/link";
import { useState } from "react";
import { clubs } from "@/lib/format";
import { CrestCanvas, DeerCanvas } from "./Scenes";
import { Reveal, Tilt, TrackLook } from "./Motion";
import { ProductCard } from "./ProductCard";

export function HomeView({ store, collections, featured, newest, instagram }) {
  return (
    <>
      <TrackLook className="relative min-h-[100svh] overflow-hidden">
        <DeerCanvas className="pointer-events-none absolute inset-0" />
        <img
          src={store.hero}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35 md:left-auto md:w-[58%] md:opacity-80"
          style={{ maskImage: "linear-gradient(90deg, transparent, #000 32%)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 32%)" }}
        />
        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-32 md:px-12 md:pb-20">
          <p className="animate-rise text-[11px] uppercase tracking-[0.38em] text-brass">Buenos Aires · desde 2024</p>
          <h1 className="animate-rise mt-4 max-w-3xl font-serif text-[14vw] leading-[0.88] text-white md:text-8xl" style={{ animationDelay: "120ms" }}>
            El estadio,
            <br />
            <em className="text-brass">en negro.</em>
          </h1>
          <div className="rule mt-6 w-40" style={{ animationDelay: "220ms" }} />
          <p className="animate-rise mt-6 max-w-md text-sm leading-relaxed md:text-base" style={{ animationDelay: "280ms" }}>
            Buzos y canguros negros con el club bordado. Ropa para todos los días, no merch de una fecha.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "380ms" }}>
            <Link href="/estadios" className="sheen bg-bronze px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-white">
              Ver estadios
            </Link>
            <Link href="/productos" className="border border-white/30 px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-white transition hover:border-brass hover:text-brass">
              Todo el archivo
            </Link>
          </div>
        </div>
      </TrackLook>

      <section className="overflow-hidden border-y border-white/10 py-4">
        <div className="flex w-max animate-marquee gap-10 text-[12px] uppercase tracking-[0.28em] text-white/70">
          {[...clubs, ...clubs].map((club, index) => (
            <span key={`${club}-${index}`}>{club}</span>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-brass">Colecciones</p>
          <h2 className="mt-3 font-serif text-4xl text-white md:text-6xl">Cuatro entradas.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {collections.map((item, index) => (
            <Reveal key={item.href} delay={index * 80}>
              <Tilt>
                <Link href={item.href} className="group relative block overflow-hidden bg-[#141110]">
                  {item.image ? (
                    <img src={item.image} alt="" className="aspect-[3/4] w-full object-cover object-[center_18%] transition duration-700 group-hover:scale-105" />
                  ) : (
                    <span className="block aspect-[3/4]" />
                  )}
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-4">
                    <span className="text-[10px] tracking-[0.22em] text-brass">{item.kicker}</span>
                    <span className="mt-1 block font-serif text-3xl text-white">{item.title}</span>
                    <span className="mt-1 block translate-y-2 text-xs text-bone opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {item.text}
                    </span>
                  </span>
                </Link>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid items-center gap-8 px-4 py-8 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-16">
        <Reveal>
          <div className="relative h-72 md:h-[420px]">
            <CrestCanvas className="h-full w-full" />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-[11px] uppercase tracking-[0.28em] text-brass">La marca</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-white md:text-6xl">
            Buzos y canguros negros, con el estadio bordado.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed md:text-base">
            Calce clásico, un toque oversize, bordado para lavar del revés. La casa arrancó en 2024 y sigue por drops: Estadios, Legacy, Herencia Retro y Archivo.
          </p>
          <Link href="/quienes-somos" className="mt-6 inline-block text-sm text-brass underline decoration-brass/40 underline-offset-4">
            Quiénes somos
          </Link>
        </Reveal>
      </section>

      <Rail title="Destacados" products={featured} href="/estadios" />
      <Rail title="Novedades" products={newest} href="/drop-herencia-retro" />
      <VideoBlock store={store} />
      <Instagram handle={instagram.handle} href={instagram.href} posts={instagram.posts} />
    </>
  );
}

function Rail({ title, products, href }) {
  return (
    <section className="px-4 py-12 md:px-8">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="font-serif text-4xl text-white">{title}</h2>
        <Link href={href} className="text-[11px] uppercase tracking-[0.2em] text-brass">
          Ver colección
        </Link>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <div key={product.slug} className="w-[68vw] shrink-0 sm:w-[42vw] lg:w-[24vw]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

function VideoBlock({ store }) {
  const [play, setPlay] = useState(false);
  if (!store.videoId) return null;
  return (
    <section className="px-4 py-12 md:px-8">
      <Reveal>
        <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-brass">En movimiento</p>
        <div className="relative aspect-video overflow-hidden bg-black">
          {play ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${store.videoId}?autoplay=1`}
              title="Video de CIERVO NEGRO"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button type="button" className="group relative block h-full w-full" onClick={() => setPlay(true)}>
              <img src={store.videoThumb || store.hero} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute inset-0 grid place-items-center">
                <span className="border border-white/50 bg-ink/50 px-6 py-3 text-[12px] uppercase tracking-[0.24em] text-white transition group-hover:bg-bronze">
                  Reproducir
                </span>
              </span>
            </button>
          )}
        </div>
      </Reveal>
    </section>
  );
}

function Instagram({ handle, href, posts }) {
  return (
    <section className="px-4 py-12 md:px-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-4xl text-white">
            <a href={href} target="_blank" rel="noreferrer">
              {handle}
            </a>
          </h2>
          <p className="mt-2 text-xs text-bone/70">Fotos de producto, hasta conectar el feed real.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {posts.map((post) => (
          <a key={post.slug} href={href} target="_blank" rel="noreferrer" className="group overflow-hidden">
            <img src={post.image} alt="" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
          </a>
        ))}
      </div>
    </section>
  );
}
