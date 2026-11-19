import { Link } from "react-router-dom";
import { money } from "../catalog";

export default function ProductCard({ product }) {
  const primary = product.images[0];
  const secondary = product.images[1];
  const showCompare =
    product.compareAt != null &&
    product.price != null &&
    product.compareAt > 0 &&
    product.compareAt > product.price;
  return (
    <article className="card">
      <Link to={`/productos/${product.slug}`} className="card-media">
        {primary ? (
          <>
            <img className="img-primary" src={primary} alt={product.name} />
            {secondary ? <img className="img-hover" src={secondary} alt="" aria-hidden="true" /> : null}
          </>
        ) : (
          <div className="card-fallback" />
        )}
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
          {showCompare ? <s>{money(product.compareAt)}</s> : null}
          <span>{money(product.price)}</span>
        </p>
      </div>
    </article>
  );
}
