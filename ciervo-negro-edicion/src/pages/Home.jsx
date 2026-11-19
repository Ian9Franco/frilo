import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProduct, home, productsBySlugs, store } from "../catalog";
import ProductRail from "../components/ProductRail";

const banners = [
  { title: "Estadios", href: "/estadios", slug: "monumental-river-plate" },
  { title: "Colección Legacy", href: "/coleccion-legacy", slug: "parque-patricios-torre-huracan" },
  { title: "Drop Herencia Retro", href: "/drop-herencia-retro", slug: "camiseta-edicion-1-boca-juniors-1sqvo" },
  { title: "Drop Archivo", href: "/drop-archivo", slug: "buzo-boca-juniors-edicion-archivo-18p1y" },
];

function VideoBlock() {
  const [play, setPlay] = useState(false);
  if (!store.videoId) return null;
  return (
    <section className="video-block">
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${store.videoId}?autoplay=1`}
          title="Video de CIERVO NEGRO"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className="video-poster" onClick={() => setPlay(true)}>
          <img src={store.videoThumb || store.hero} alt="Video de CIERVO NEGRO" />
          <span>Reproducir</span>
        </button>
      )}
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = "Tienda Online de CIERVO NEGRO";
  }, []);

  const featured = productsBySlugs(home.featured);
  const newest = productsBySlugs(home.newest);

  return (
    <>
      <section className="hero">
        <img src={store.hero} alt="CIERVO NEGRO" />
      </section>
      <section className="category-banners" aria-label="Colecciones">
        {banners.map((banner) => {
          const product = getProduct(banner.slug);
          const image = product?.images[0];
          return (
            <Link key={banner.href} to={banner.href} className="category-banner">
              {image ? <img src={image} alt="" /> : <span className="card-fallback" />}
              <span>{banner.title}</span>
            </Link>
          );
        })}
      </section>
      <section className="section">
        <h2>Destacados</h2>
        <ProductRail products={featured} />
      </section>
      <section className="section">
        <h2>Novedades</h2>
        <ProductRail products={newest} />
      </section>
      <VideoBlock />
      <InstagramFeed />
    </>
  );
}

const instagramSlugs = [
  "camiseta-edicion-1-boca-juniors-1sqvo",
  "monumental-river-plate",
  "parque-patricios-torre-huracan",
  "camiseta-river-edicion-1-1xeey",
  "buzo-boca-juniors-edicion-archivo-18p1y",
  "el-cilindro-racing-club",
];

function InstagramFeed() {
  if (!store.instagram) return null;
  const handle = `@${store.instagram.split("/").filter(Boolean).pop()}`;
  const posts = instagramSlugs.map((slug) => getProduct(slug)).filter((product) => product?.images[0]);

  return (
    <section className="ig-feed" aria-label="Instagram">
      <h2>
        <a href={store.instagram} target="_blank" rel="noreferrer">
          {handle}
        </a>
      </h2>
      <div className="ig-grid">
        {posts.map((product) => (
          <a key={product.slug} href={store.instagram} target="_blank" rel="noreferrer">
            <img src={product.images[0]} alt="" />
          </a>
        ))}
      </div>
    </section>
  );
}
