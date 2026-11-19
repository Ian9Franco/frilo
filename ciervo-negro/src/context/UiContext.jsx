import { createContext, useContext, useMemo, useState } from "react";

const UiContext = createContext(null);

export function UiProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const api = useMemo(
    () => ({
      menuOpen,
      searchOpen,
      cartOpen,
      openMenu: () => {
        setSearchOpen(false);
        setCartOpen(false);
        setMenuOpen(true);
      },
      openSearch: () => {
        setMenuOpen(false);
        setCartOpen(false);
        setSearchOpen(true);
      },
      openCart: () => {
        setMenuOpen(false);
        setSearchOpen(false);
        setCartOpen(true);
      },
      closeAll: () => {
        setMenuOpen(false);
        setSearchOpen(false);
        setCartOpen(false);
      },
    }),
    [menuOpen, searchOpen, cartOpen],
  );

  return <UiContext.Provider value={api}>{children}</UiContext.Provider>;
}

export function useUi() {
  const value = useContext(UiContext);
  if (!value) throw new Error("useUi fuera de UiProvider");
  return value;
}
