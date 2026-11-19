import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function InfoPage({ page }) {
  useEffect(() => {
    document.title = `${page.title} — CIERVO NEGRO`;
  }, [page.title]);

  return (
    <section className="page narrow">
      <p className="crumbs">
        <Link to="/">Inicio</Link>
        <span>/</span>
        <span>{page.title}</span>
      </p>
      <h1>{page.title}</h1>
      <div className="prose" dangerouslySetInnerHTML={{ __html: page.html }} />
    </section>
  );
}
