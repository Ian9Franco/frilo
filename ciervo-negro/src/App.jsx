import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import { getCategory, getPage, pathOf } from "./catalog";
import Account from "./pages/Account";
import CartPage from "./pages/CartPage";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import InfoPage from "./pages/InfoPage";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/Product";
import SearchPage from "./pages/SearchPage";

function Resolve() {
  const { pathname } = useLocation();
  const category = getCategory(pathname);
  if (category && pathOf(pathname) !== "/productos") return <Catalog category={category} />;
  const page = getPage(pathname);
  if (page) return <InfoPage page={page} />;
  return <NotFound />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Catalog />} />
        <Route path="/productos/:slug" element={<ProductPage />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/cuenta" element={<Account />} />
        <Route path="/account/login" element={<Account />} />
        <Route path="/buscar" element={<SearchPage />} />
        <Route path="*" element={<Resolve />} />
      </Route>
    </Routes>
  );
}
