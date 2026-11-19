import { HomeView } from "@/components/HomeView";
import { cardOf, collections, getProduct, home, productsBySlugs, store } from "@/lib/catalog";

const instagramSlugs = [
  "camiseta-edicion-1-boca-juniors-1sqvo",
  "monumental-river-plate",
  "parque-patricios-torre-huracan",
  "camiseta-river-edicion-1-1xeey",
  "buzo-boca-juniors-edicion-archivo-18p1y",
  "el-cilindro-racing-club",
];

export default function Page() {
  const banners = collections.map((item) => ({
    ...item,
    image: getProduct(item.slug)?.images?.[0] || "",
  }));
  const handle = `@${store.instagram.split("/").filter(Boolean).pop()}`;

  return (
    <HomeView
      store={{
        hero: store.hero,
        videoId: store.videoId,
        videoThumb: store.videoThumb,
      }}
      collections={banners}
      featured={productsBySlugs(home.featured).map(cardOf)}
      newest={productsBySlugs(home.newest).map(cardOf)}
      instagram={{
        handle,
        href: store.instagram,
        posts: productsBySlugs(instagramSlugs)
          .map((product) => ({ slug: product.slug, image: product.images?.[0] }))
          .filter((post) => post.image),
      }}
    />
  );
}
