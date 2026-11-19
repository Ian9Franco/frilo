import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { store } from "../catalog";

export default function Contact() {
  const [params] = useSearchParams();
  const regret = params.get("arrepentimiento") === "1" || params.has("order_cancellation_without_id");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Contacto — CIERVO NEGRO";
  }, []);

  return (
    <section className="page contact">
      <p className="crumbs">
        <Link to="/">Inicio</Link>
        <span>/</span>
        <span>Contacto</span>
      </p>
      <h1>Contacto</h1>
      {regret && (
        <p className="note">
          El botón de arrepentimiento de la tienda real cancela un pedido. Acá no hay pedidos ni pagos, así que no
          hay una compra para revertir.
        </p>
      )}
      <div className="contact-grid">
        <ul className="contact-list">
          <li>
            <a href={store.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp {store.whatsappDisplay}
            </a>
          </li>
          <li>
            <a href={`tel:${store.phone}`}>{store.phoneDisplay}</a>
          </li>
          <li>
            <a href={`mailto:${store.email}`}>{store.email}</a>
          </li>
        </ul>
        {sent ? (
          <p className="note">Recibimos tu mensaje en esta pantalla. No se envió a la tienda.</p>
        ) : (
          <form
            className="stack-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <label>
              Nombre
              <input name="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <label>
              Teléfono
              <input name="phone" type="tel" />
            </label>
            <label>
              Mensaje
              <textarea name="message" rows={7} required />
            </label>
            <button type="submit" className="btn">
              Enviar
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
