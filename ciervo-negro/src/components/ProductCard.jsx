import { Link } from "react-router-dom";
import { money } from "../catalog";

export default function ProductCard({ product }) {
  const image = product.images[0];
  return (
    <article className="card">
      <Link to={`/productos/${product.slug}`} className="card-media">
        {image ? <img src={image} alt={product.name} /> : <div className="card-fallback" />}
        {product.labels.length > 0 && (
          <div className="badges">
            {product.labels.map((label) => (
              <span key={label} className="badge-label">
                {label}
              </span>
            ))}
          </div>
        )}
      </Link>
      <div className="card-info">
        <h3>
          <Link to={`/productos/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="price">
          {product.compareAt && product.price != null && product.compareAt > product.price && (
            <s>{money(product.compareAt)}</s>
          )}
          <span>{money(product.price)}</span>
        </p>
      </div>
    </article>
  );
}
