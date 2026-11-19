import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function InfoPage({ page }) {
  const { hash } = useLocation();
  useEffect(() => {
    document.title = `${page.title} — CIERVO NEGRO`;
  }, [page.title]);

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, page.path]);

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
