import { CartCheckout } from "@/components/CartCheckout";
import { store } from "@/lib/catalog";

export const metadata = { title: "Carrito" };

export default function CartPage() {
  return <CartCheckout whatsapp={store.whatsapp} />;
}
