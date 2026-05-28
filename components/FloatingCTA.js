"use client";

import { MessageCircle } from "lucide-react";

// [INSERTAR: mismo número que en LeadForm.js]
const WHATSAPP_NUMBER = "59100000000";

export default function FloatingCTA() {
  const handleClick = () => {
    const msg = encodeURIComponent(
      "Hola Ingrid, me interesa una asesoría inmobiliaria personalizada."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Contactar a Ingrid por WhatsApp"
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2 z-50
        flex items-center gap-3
        bg-gold hover:bg-gold-dark active:scale-95
        text-navy font-sans font-medium text-sm tracking-wide
        px-7 py-4 shadow-2xl
        transition-all duration-300
        sm:left-auto sm:translate-x-0 sm:right-6 sm:bottom-8
        whitespace-nowrap
      "
    >
      <MessageCircle className="w-5 h-5 shrink-0" strokeWidth={1.8} />
      Hablar con Ingrid
    </button>
  );
}
