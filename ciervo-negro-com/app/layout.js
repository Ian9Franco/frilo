import "./globals.css";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { Chrome } from "@/components/Chrome";
import { Providers } from "@/components/Providers";
import { collections, getProduct, searchIndex, store } from "@/lib/catalog";
import { siteUrl } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "CIERVO NEGRO",
    template: "%s — CIERVO NEGRO",
  },
  description: "Buzos y canguros negros con el estadio bordado. Tienda propia, lista para un hosting .com.",
  openGraph: {
    title: "CIERVO NEGRO",
    description: "Buzos y canguros negros con el estadio bordado.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const banners = collections.map((item) => ({
    ...item,
    image: getProduct(item.slug)?.images?.[0] || "",
  }));

  return (
    <html lang="es-AR" className={`${jakarta.variable} ${instrument.variable}`}>
      <body className="font-sans antialiased">
        <Providers>
          <Chrome store={store} index={searchIndex()} collections={banners}>
            {children}
          </Chrome>
        </Providers>
      </body>
    </html>
  );
}
