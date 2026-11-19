import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Account() {
  const [sent, setSent] = useState(false);
  useEffect(() => {
    document.title = "Iniciar sesión — CIERVO NEGRO";
  }, []);

  return (
    <section className="page narrow">
      <h1>Iniciar sesión</h1>
      <p className="muted">El prototipo muestra la pantalla de cuenta, sin registro ni sesión real.</p>
      {sent ? (
        <p className="note">No iniciamos sesión. Esta tienda local no tiene usuarios ni pedidos.</p>
      ) : (
        <form
          className="stack-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <label>
            Email
            <input type="email" required autoComplete="username" />
          </label>
          <label>
            Contraseña
            <input type="password" required autoComplete="current-password" />
          </label>
          <button type="submit" className="btn">
            Iniciar sesión
          </button>
        </form>
      )}
      <p>
        <Link to="/contacto">¿Necesitás ayuda? Escribinos</Link>
      </p>
    </section>
  );
}
