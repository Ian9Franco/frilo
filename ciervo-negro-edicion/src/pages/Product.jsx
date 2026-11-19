import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  defaultSelection,
  findVariant,
  getCategory,
  getProduct,
  money,
  productsBySlugs,
  sizeGuidePath,
  store,
  withOption,
} from "../catalog";
import { useCart } from "../context/CartContext";
import ProductGrid from "../components/ProductGrid";

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const { addItem } = useCart();
  const [selected, setSelected] = useState([]);
  const [photo, setPhoto] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (!product) return;
    document.title = `${product.name} — CIERVO NEGRO`;
    setSelected(defaultSelection(product));
    setPhoto(0);
    setQty(1);
  }, [product]);

  const variant = useMemo(() => (product ? findVariant(product, selected) : null), [product, selected]);

  useEffect(() => {
    if (!product || !variant?.image) return;
    const index = product.images.indexOf(variant.image);
    if (index >= 0) setPhoto(index);
  }, [product, variant]);

  if (!product) {
    return (
      <section className="page">
        <h1>No encontramos ese producto</h1>
        <Link to="/productos" className="btn">
          Ver productos
        </Link>
      </section>
    );
  }

  const activeImage = product.images[photo] || variant?.image || product.images[0];
  const relatedPath = product.breadcrumbs.at(-1)?.path;
  const related = productsBySlugs(getCategory(relatedPath || "")?.productSlugs || [])
    .filter((item) => item.slug !== product.slug)
    .slice(0, 4);
  const installmentValue =
    variant?.price && product.installments ? variant.price / product.installments.count : null;

  function choose(index, value) {
    setSelected((current) => withOption(product, current.length ? current : defaultSelection(product), index, value));
  }

  return (
    <article className="page">
      <p className="crumbs">
        <Link to="/">Inicio</Link>
        {product.breadcrumbs.map((crumb) => (
          <span key={crumb.path}>
            <span>/</span>
            <Link to={crumb.path}>{crumb.name}</Link>
          </span>
        ))}
      </p>
      <div className="pdp">
        <div className="gallery">
          <img src={activeImage} alt={product.name} />
          {product.images.length > 1 && (
            <div className="thumbs">
              {product.images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  className={index === photo ? "selected" : ""}
                  onClick={() => setPhoto(index)}
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="buybox">
          {product.labels.length > 0 && (
            <div className="inline-badges">
              {product.labels.map((label) => (
                <span key={label} className="badge-label">
                  {label}
                </span>
              ))}
            </div>
          )}
          <h1>{product.name}</h1>
          <p className="price price-lg">
            {variant?.compareAt != null &&
            variant.price != null &&
            variant.compareAt > 0 &&
            variant.compareAt > variant.price ? (
              <s>{money(variant.compareAt)}</s>
            ) : null}
            <span>{money(variant?.price ?? product.price)}</span>
          </p>
          {installmentValue && (
            <p className="muted">
              Hasta {product.installments.count} cuotas sin interés de {money(installmentValue)} con{" "}
              {product.installments.provider}.
            </p>
          )}
          {product.options.some((group) => /talle/i.test(group.name)) && (
            <p className="size-guide">
              <Link to={sizeGuidePath}>Guía de talles</Link>
            </p>
          )}
          {product.options.map((group, index) => (
            <fieldset key={group.name}>
              <legend>{group.name}</legend>
              <div className="options">
                {group.values.map((option) => {
                  const active = selected[index] === option.value;
                  return (
                    <button
                      type="button"
                      key={option.value}
                      className={`opt ${active ? "selected" : ""} ${option.color ? "swatch" : ""}`}
                      style={option.color ? { background: option.color } : undefined}
                      aria-label={option.value}
                      aria-pressed={active}
                      onClick={() => choose(index, option.value)}
                    >
                      {option.color ? <span className="sr">{option.value}</span> : option.value}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}
          {product.contact || variant?.price == null ? (
            <a className="btn" href={`${store.whatsapp}?text=${encodeURIComponent(product.name)}`} target="_blank" rel="noreferrer">
              Consultar por WhatsApp
            </a>
          ) : (
            <div className="buy-row">
              <div className="qty">
                <button type="button" onClick={() => setQty((value) => Math.max(1, value - 1))} aria-label="Restar">
                  −
                </button>
                <span>{qty}</span>
                <button type="button" onClick={() => setQty((value) => value + 1)} aria-label="Sumar">
                  +
                </button>
              </div>
              <button
                type="button"
                className="btn"
                disabled={!variant?.available}
                onClick={() => addItem(product, variant, qty)}
              >
                {variant?.available ? "Agregar al carrito" : "Sin stock"}
              </button>
            </div>
          )}
          <p className="muted small">
            El stock que ves es el que publicó la tienda al armar este prototipo. No se actualiza en vivo.
          </p>
          <div className="prose" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        </div>
      </div>
      {related.length > 0 && (
        <section className="section related">
          <h2>También te puede interesar</h2>
          <ProductGrid products={related} />
        </section>
      )}
    </article>
  );
}
