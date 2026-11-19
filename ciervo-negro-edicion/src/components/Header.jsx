import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { store } from "../catalog";
import { useCart } from "../context/CartContext";
import { useUi } from "../context/UiContext";
import { IconBag, IconMenu, IconSearch, IconUser } from "./Icons";

export default function Header() {
  const { pathname } = useLocation();
  const { count } = useCart();
  const { openMenu, openSearch, openCart } = useUi();
  const [scrolled, setScrolled] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${onHome && !scrolled ? "transparent" : "solid"}`}>
      <Link to="/" className="logo" aria-label="CIERVO NEGRO">
        <img src={store.logo} alt="CIERVO NEGRO" />
      </Link>
      <div className="utils">
        <button type="button" className="icon-btn" aria-label="Buscador" onClick={openSearch}>
          <IconSearch />
        </button>
        <Link to="/cuenta" className="icon-btn" aria-label="Mi cuenta">
          <IconUser />
        </Link>
        <button type="button" className="icon-btn" aria-label="Carrito" onClick={openCart}>
          <IconBag />
          <span className="count">{count}</span>
        </button>
        <button type="button" className="icon-btn" aria-label="Menú" onClick={openMenu}>
          <IconMenu />
        </button>
      </div>
    </header>
  );
}
