import { useState } from "react";
import { Link } from "react-router-dom";
import { nav, store } from "../catalog";
import { IconInstagram } from "./Icons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <p className="footer-title">Suscribite a nuestro newsletter</p>
          {sent ? (
            <p className="note">
              Listo. En este prototipo la suscripción queda en la pantalla y no se envía a ningún servidor.
            </p>
          ) : (
            <form
              className="newsletter"
              onSubmit={(event) => {
                event.preventDefault();
                if (email.includes("@")) setSent(true);
              }}
            >
              <input
                type="email"
                required
                placeholder="Email"
                aria-label="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit">Enviar</button>
            </form>
          )}
          <a className="social" href={store.instagram} target="_blank" rel="noreferrer" aria-label="Instagram CIERVO NEGRO">
            <IconInstagram />
          </a>
        </div>
        <div>
          <p className="footer-title">Categorías</p>
          <ul>
            {nav.map((item) => (
              <li key={item.label}>
                <Link to={item.href || "/productos"}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-title">Contactános</p>
          <ul>
            <li>
              <a href={store.whatsapp} target="_blank" rel="noreferrer">
                {store.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`tel:${store.phone}`}>{store.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${store.email}`}>{store.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="legal">
        <p>{store.legal}</p>
        <p>
          Defensa de las y los consumidores. Para reclamos{" "}
          <a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario" target="_blank" rel="noreferrer">
            ingresá acá
          </a>
          .{" "}
          <Link to="/contacto?arrepentimiento=1">Botón de arrepentimiento</Link>
        </p>
      </div>
    </footer>
  );
}
