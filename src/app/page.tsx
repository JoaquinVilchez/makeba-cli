'use client'

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "https://venti.com.ar/evento/makeba-15-de-junio"; // Redirige externamente
  }, []); // Dependencia vacía para ejecutar solo al montar el componente

  return null; // Evita renderizar contenido visible
}
