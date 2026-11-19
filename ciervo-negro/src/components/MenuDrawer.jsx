import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../catalog";
import { useUi } from "../context/UiContext";
import { IconChevron, IconClose } from "./Icons";

export default function MenuDrawer() {
  const { menuOpen, closeAll } = useUi();
  const [stack, setStack] = useState([{ label: "Menú", items: nav }]);

  useEffect(() => {
    if (menuOpen) setStack([{ label: "Menú", items: nav }]);
  }, [menuOpen]);

  if (!menuOpen) return null;
  const current = stack[stack.length - 1];

  return (
    <>
      <button type="button" className="overlay" aria-label="Cerrar menú" onClick={closeAll} />
      <aside className="drawer" role="dialog" aria-label="Menú">
        <div className="drawer-head">
          {stack.length > 1 ? (
            <button type="button" className="text-btn" onClick={() => setStack((value) => value.slice(0, -1))}>
              <IconChevron />
              {current.label}
            </button>
          ) : (
            <span>Menú</span>
          )}
          <button type="button" className="icon-btn" aria-label="Cerrar" onClick={closeAll}>
            <IconClose />
          </button>
        </div>
        <nav>
          <ul className="menu-list">
            {current.items.map((item) => (
              <li key={`${item.label}-${item.href || "group"}`}>
                {item.children ? (
                  <button
                    type="button"
                    className="menu-link"
                    onClick={() => setStack((value) => [...value, { label: item.label, items: item.children }])}
                  >
                    {item.label}
                    <IconChevron />
                  </button>
                ) : (
                  <Link to={item.href} className="menu-link" onClick={closeAll}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
