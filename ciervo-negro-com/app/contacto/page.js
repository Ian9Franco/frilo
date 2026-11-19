import { ContactForm } from "@/components/ContactForm";
import { store } from "@/lib/catalog";

export const metadata = { title: "Contacto" };

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const regret = params?.arrepentimiento === "1" || params?.order_cancellation_without_id != null;

  return (
    <section className="grid gap-12 px-4 py-12 md:grid-cols-2 md:px-8 md:py-16">
      <div>
        <p className="text-[11px] uppercase tracking-[0.28em] text-brass">Casa</p>
        <h1 className="mt-3 font-serif text-5xl text-white md:text-7xl">Contacto</h1>
        <ul className="mt-8 space-y-3 text-sm">
          <li>
            <a href={store.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp {store.whatsappDisplay}
            </a>
          </li>
          <li>
            <a href={`tel:${store.phone}`}>{store.phoneDisplay}</a>
          </li>
          <li>
            <a href={`mailto:${store.email}`}>{store.email}</a>
          </li>
          <li>
            <a href={store.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <ContactForm regret={Boolean(regret)} />
    </section>
  );
}
