"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const UiContext = createContext(null);
const STORAGE_KEY = "ciervo-negro-com-cart";

function readCart() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart fuera de Providers");
  return value;
}

export function useUi() {
  const value = useContext(UiContext);
  if (!value) throw new Error("useUi fuera de Providers");
  return value;
}

export function Providers({ children }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setItems(readCart());
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  useEffect(() => {
    const locked = menu || search || cartOpen;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu, search, cartOpen]);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, window.scrollY / height) : 0);
    };
    const onKey = (event) => {
      if (event.key === "Escape") {
        setMenu(false);
        setSearch(false);
        setCartOpen(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const cart = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

    function addItem(product, variant, qty = 1) {
      if (!variant || variant.price == null) return;
      const options = variant.options.filter(Boolean);
      const key = `${product.slug}:${options.join("|")}`;
      setItems((current) => {
        const existing = current.find((item) => item.key === key);
        if (existing) {
          return current.map((item) => (item.key === key ? { ...item, qty: item.qty + qty } : item));
        }
        return [
          ...current,
          {
            key,
            slug: product.slug,
            name: product.name,
            image: variant.image || product.images?.[0] || "",
            options,
            price: variant.price,
            qty,
          },
        ];
      });
      setCartOpen(true);
    }

    function updateQty(key, qty) {
      setItems((current) =>
        qty <= 0 ? current.filter((item) => item.key !== key) : current.map((item) => (item.key === key ? { ...item, qty } : item)),
      );
    }

    function removeItem(key) {
      setItems((current) => current.filter((item) => item.key !== key));
    }

    function clear() {
      setItems([]);
    }

    return { items, count, subtotal, addItem, updateQty, removeItem, clear };
  }, [items]);

  const ui = useMemo(
    () => ({
      menu,
      search,
      cartOpen,
      progress,
      openMenu: () => setMenu(true),
      closeMenu: () => setMenu(false),
      openSearch: () => setSearch(true),
      closeSearch: () => setSearch(false),
      openCart: () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
    }),
    [menu, search, cartOpen, progress],
  );

  return (
    <CartContext.Provider value={cart}>
      <UiContext.Provider value={ui}>{children}</UiContext.Provider>
    </CartContext.Provider>
  );
}
