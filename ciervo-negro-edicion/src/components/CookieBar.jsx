import { useState } from "react";

export default function CookieBar() {
  const [open, setOpen] = useState(() => sessionStorage.getItem("cn-cookies") !== "1");
  if (!open) return null;
  return (
    <div className="cookie">
      <p>
        Al navegar por este sitio <strong>aceptás el uso de cookies</strong> para agilizar tu experiencia de compra.
      </p>
      <button
        type="button"
        className="btn"
        onClick={() => {
          sessionStorage.setItem("cn-cookies", "1");
          setOpen(false);
        }}
      >
        Entendido
      </button>
    </div>
  );
}
