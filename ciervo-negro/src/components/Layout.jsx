import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { store } from "../catalog";
import { UiProvider } from "../context/UiContext";
import CartDrawer from "./CartDrawer";
import CookieBar from "./CookieBar";
import Footer from "./Footer";
import Header from "./Header";
import MenuDrawer from "./MenuDrawer";
import SearchModal from "./SearchModal";

function Frame() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MenuDrawer />
      <SearchModal />
      <CartDrawer />
      <CookieBar />
      <a className="whatsapp" href={store.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        WA
      </a>
    </>
  );
}

export default function Layout() {
  return (
    <UiProvider>
      <Frame />
    </UiProvider>
  );
}
