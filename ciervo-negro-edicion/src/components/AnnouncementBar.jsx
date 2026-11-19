import { store } from "../catalog";

export default function AnnouncementBar() {
  if (!store.announcement) return null;
  return (
    <div className="announcement-bar" role="region" aria-label="Anuncio">
      <p>{store.announcement}</p>
    </div>
  );
}