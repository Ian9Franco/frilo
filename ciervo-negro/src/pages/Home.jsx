import { useEffect, useState } from "react";
import { home, productsBySlugs, store } from "../catalog";
import ProductGrid from "../components/ProductGrid";

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
      <section className="section">
        <h2>Destacados</h2>
        <ProductGrid products={featured} />
      </section>
      <section className="section">
        <h2>Novedades</h2>
        <ProductGrid products={newest} />
      </section>
      <VideoBlock />
    </>
  );
}
