import { useState } from "react";
import { Link } from "react-router-dom";
import { money } from "../catalog";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, subtotal, count, updateQty, removeItem } = useCart();
  const [zip, setZip] = useState("");
  const [zipMessage, setZipMessage] = useState("");
  const [coupon, setCoupon] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  const [checkout, setCheckout] = useState(false);

  return (
    <section className="page cart-page">
      <h1>Carrito de compras</h1>
      {items.length === 0 ? (
        <>
          <p>El carrito de compras está vacío.</p>
          <Link to="/productos" className="btn">
            Ver más productos
          </Link>
        </>
      ) : (
        <div className="cart-layout">
          <ul className="cart-lines">
            {items.map((item) => (
              <li key={item.key}>
                <Link to={`/productos/${item.slug}`}>
                  <img src={item.image} alt="" />
                </Link>
                <div>
                  <p>{item.name}</p>
                  {item.options.length > 0 && <small>{item.options.join(" / ")}</small>}
                  <div className="qty">
                    <button type="button" onClick={() => updateQty(item.key, item.qty - 1)} aria-label="Restar">
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button type="button" onClick={() => updateQty(item.key, item.qty + 1)} aria-label="Sumar">
                      +
                    </button>
                    <button type="button" className="text-btn" onClick={() => removeItem(item.key)}>
                      Quitar
                    </button>
                  </div>
                </div>
                <strong>{money(item.price * item.qty)}</strong>
              </li>
            ))}
          </ul>
          <aside className="summary">
            <p>
              Subtotal (sin envío)
              <strong>{money(subtotal)}</strong>
            </p>
            <p className="muted">
              {count} {count === 1 ? "producto" : "productos"}
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setZipMessage(
                  "En este prototipo no calculamos el envío. En la tienda real el costo depende del código postal y del medio de envío.",
                );
              }}
            >
              <label htmlFor="cp">Código postal</label>
              <div className="inline-form">
                <input id="cp" inputMode="numeric" value={zip} onChange={(event) => setZip(event.target.value)} placeholder="Ej. 1425" />
                <button type="submit" className="btn secondary">
                  Calcular
                </button>
              </div>
            </form>
            {zipMessage && <p className="note">{zipMessage}</p>}
            <a href="https://www.correoargentino.com.ar/formularios/cpa" target="_blank" rel="noreferrer">
              No sé mi código postal
            </a>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setCouponMessage(
                  coupon
                    ? "Los cupones no se validan en este prototipo."
                    : "Ingresá un cupón para ver el aviso.",
                );
              }}
            >
              <label htmlFor="coupon">Cupón</label>
              <div className="inline-form">
                <input id="coupon" value={coupon} onChange={(event) => setCoupon(event.target.value)} />
                <button type="submit" className="btn secondary">
                  Aplicar
                </button>
              </div>
            </form>
            {couponMessage && <p className="note">{couponMessage}</p>}
            <p className="total">
              Total
              <strong>{money(subtotal)}</strong>
            </p>
            <button type="button" className="btn" onClick={() => setCheckout(true)}>
              Iniciar compra
            </button>
            {checkout && (
              <p className="note">
                La compra no continúa. Este prototipo no incluye checkout, pagos, medios de envío ni creación de pedidos.
              </p>
            )}
          </aside>
        </div>
      )}
    </section>
  );
}
