import { Link } from "react-router-dom";
import { money } from "../catalog";
import { useCart } from "../context/CartContext";
import { useUi } from "../context/UiContext";
import { IconClose } from "./Icons";

export default function CartDrawer() {
  const { cartOpen, closeAll, openCart } = useUi();
  const { items, subtotal, count, updateQty, removeItem, notice, dismissNotice } = useCart();
  if (!cartOpen && !notice) return null;

  return (
    <>
      {notice && (
        <div className="added" role="status">
          <button type="button" className="icon-btn close-note" aria-label="Cerrar" onClick={dismissNotice}>
            <IconClose />
          </button>
          <img src={notice.image} alt="" />
          <div>
            <p>
              {notice.name}
              {notice.options.length > 0 && <small> ({notice.options.join(" / ")})</small>}
            </p>
            <p>
              {notice.qty} x {money(notice.price)}
            </p>
            <strong>¡Agregado al carrito!</strong>
            <button
              type="button"
              className="btn"
              onClick={() => {
                dismissNotice();
                openCart();
              }}
            >
              Ver carrito
            </button>
          </div>
        </div>
      )}
      {cartOpen && (
        <>
          <button type="button" className="overlay" aria-label="Cerrar carrito" onClick={closeAll} />
          <aside className="drawer cart-drawer" role="dialog" aria-label="Carrito de compras">
            <div className="drawer-head">
              <span>Carrito de compras</span>
              <button type="button" className="icon-btn" aria-label="Cerrar" onClick={closeAll}>
                <IconClose />
              </button>
            </div>
            {items.length === 0 ? (
              <div className="drawer-body">
                <p>El carrito de compras está vacío.</p>
                <Link to="/productos" className="btn" onClick={closeAll}>
                  Ver más productos
                </Link>
              </div>
            ) : (
              <>
                <ul className="cart-lines">
                  {items.map((item) => (
                    <li key={item.key}>
                      <Link to={`/productos/${item.slug}`} onClick={closeAll}>
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
                <div className="drawer-foot">
                  <p>
                    <span>
                      Total ({count} {count === 1 ? "producto" : "productos"}):
                    </span>
                    <strong>{money(subtotal)}</strong>
                  </p>
                  <p className="muted">Subtotal sin envío. El envío no se calcula en este prototipo.</p>
                  <Link to="/carrito" className="btn" onClick={closeAll}>
                    Ver carrito
                  </Link>
                </div>
              </>
            )}
          </aside>
        </>
      )}
    </>
  );
}
