import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "ciervo-negro-cart";

function readCart() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readCart);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (!notice) return undefined;
    const timer = setTimeout(() => setNotice(null), 4200);
    return () => clearTimeout(timer);
  }, [notice]);

  const api = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

    function addItem(product, variant, qty = 1) {
      if (!variant || variant.price == null) return;
      const options = variant.options.filter(Boolean);
      const key = `${product.slug}:${options.join("|")}`;
      setItems((current) => {
        const existing = current.find((item) => item.key === key);
        if (existing) {
          return current.map((item) =>
            item.key === key ? { ...item, qty: item.qty + qty } : item,
          );
        }
        return [
          ...current,
          {
            key,
            slug: product.slug,
            name: product.name,
            image: variant.image || product.images[0],
            options,
            price: variant.price,
            qty,
          },
        ];
      });
      setNotice({
        name: product.name,
        options,
        qty,
        price: variant.price,
        image: variant.image || product.images[0],
      });
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

    return { items, count, subtotal, addItem, updateQty, removeItem, clear, notice, dismissNotice: () => setNotice(null) };
  }, [items, notice]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart fuera de CartProvider");
  return value;
}
