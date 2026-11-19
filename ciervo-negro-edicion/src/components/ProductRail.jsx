import { useRef } from "react";
import ProductCard from "./ProductCard";

export default function ProductRail({ products }) {
  const track = useRef(null);

  function move(direction) {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector(".card");
    const gap = 8;
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth;
    const visible = Math.max(1, Math.round(el.clientWidth / step));
    el.scrollBy({ left: direction * step * visible, behavior: "smooth" });
  }

  return (
    <div className="rail">
      <button type="button" className="rail-arrow prev" aria-label="Anterior" onClick={() => move(-1)}>
        ‹
      </button>
      <div className="rail-track" ref={track}>
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      <button type="button" className="rail-arrow next" aria-label="Siguiente" onClick={() => move(1)}>
        ›
      </button>
    </div>
  );
}
