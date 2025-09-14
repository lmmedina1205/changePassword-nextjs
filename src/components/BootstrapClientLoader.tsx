'use client';

import { useEffect } from "react";

export default function BootstrapClientLoader() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js").catch((err) => {
      console.error("Error cargando bootstrap JS:", err);
    });
  }, []);

  return null;
}
