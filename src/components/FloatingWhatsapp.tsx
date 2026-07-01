import React from "react";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsapp() {
  const rawPhone = "5562991962033";
  const message = "Olá! Vi o site da Ação Total e quero divulgar minha empresa. Minha cidade é: Meu segmento é:";
  const whatsappUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      <span className="absolute w-16 h-16 rounded-full bg-emerald-500/35 animate-ping opacity-75 pointer-events-none" />
      <span className="absolute w-20 h-20 rounded-full bg-emerald-500/15 animate-pulse pointer-events-none" />

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-300 border border-emerald-400/20 cursor-pointer"
        id="floating-whatsapp-btn"
        aria-label="Pedir atendimento no WhatsApp"
        title="Pedir atendimento no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/10" />
      </motion.a>
    </div>
  );
}
