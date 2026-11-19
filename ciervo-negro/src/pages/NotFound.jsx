import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page narrow">
      <h1>No encontramos esta página</h1>
      <p>El enlace no está en el prototipo.</p>
      <Link to="/" className="btn">
        Volver al inicio
      </Link>
    </section>
  );
}
