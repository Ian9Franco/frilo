import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { money, searchProducts } from "../catalog";
import { useUi } from "../context/UiContext";
import { IconClose } from "./Icons";

export default function SearchModal() {
  const { searchOpen, closeAll } = useUi();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const results = searchProducts(query).slice(0, 8);

  useEffect(() => {
    if (!searchOpen) setQuery("");
  }, [searchOpen]);

  if (!searchOpen) return null;

  return (
    <>
      <button type="button" className="overlay" aria-label="Cerrar buscador" onClick={closeAll} />
      <div className="search-panel" role="dialog" aria-label="Buscador">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            closeAll();
            navigate(`/buscar?q=${encodeURIComponent(query.trim())}`);
          }}
        >
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="¿Qué estás buscando?"
            aria-label="¿Qué estás buscando?"
          />
          <button type="button" className="icon-btn" aria-label="Cerrar" onClick={closeAll}>
            <IconClose />
          </button>
        </form>
        <ul>
          {results.map((product) => (
            <li key={product.slug}>
              <Link to={`/productos/${product.slug}`} onClick={closeAll}>
                <img src={product.images[0]} alt="" />
                <span>
                  {product.name}
                  <small>{money(product.price)}</small>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {query.trim().length >= 2 && (
          <button
            type="button"
            className="text-btn see-all"
            onClick={() => {
              closeAll();
              navigate(`/buscar?q=${encodeURIComponent(query.trim())}`);
            }}
          >
            Ver todos los resultados
          </button>
        )}
      </div>
    </>
  );
}
