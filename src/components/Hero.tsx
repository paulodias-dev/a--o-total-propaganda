import React from "react";
import { motion } from "motion/react";
import { MessageCircle, ArrowDown, Sparkles } from "lucide-react";

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  // Direct WhatsApp link configuration
  const whatsappUrl = "https://wa.me/5562991962033?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Ação%20Total%20Propaganda.";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-16 px-6 overflow-hidden bg-midnight-carbon"
    >
      {/* Decorative Radial Lighting Backgrounds (Apple-style gradient orbs with brand yellow and black) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-brand-yellow/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] bg-brand-yellow/3 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-white/3 rounded-full blur-[80px] pointer-events-none" />

      {/* Grid Pattern overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Subtle Badge with Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 mb-8 backdrop-blur-md"
          id="hero-badge"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-yellow animate-pulse" />
          <span>Nosso foco é resultado imediato!</span>
        </motion.div>

        {/* Main H1 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8 font-display"
          id="hero-title"
        >
          Conectando Pessoas e Marcas: <br />
          <span className="block mt-2">
            Gerando Felicidade e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-white to-brand-yellow">
              Resultados.
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
          id="hero-subtitle"
        >
          Criamos estratégias de comunicação integradas que retiram a sua marca do anonimato e a colocam no topo da mente do consumidor. Do marketing offline impactante e propaganda volante de ponta ao digital de alta performance.
        </motion.p>

        {/* Actions Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mb-16"
          id="hero-actions"
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-yellow hover:bg-[#ffd633] text-black text-base font-extrabold tracking-wide shadow-xl shadow-brand-yellow/10 hover:shadow-brand-yellow/25 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            Falar com um Especialista
          </motion.a>

          <motion.button
            onClick={() => onScrollTo("servicos")}
            whileHover={{ scale: 1.04, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/20 text-white text-base font-semibold tracking-wide backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            Explorar Soluções
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.6, y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.2,
          ease: "easeInOut",
        }}
        onClick={() => onScrollTo("quem-somos")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer p-2 rounded-full border border-white/10 hover:border-brand-yellow/50 hover:bg-white/5 transition-all duration-300"
        id="hero-scroll-indicator"
      >
        <ArrowDown className="w-5 h-5 text-slate-400 hover:text-brand-yellow" />
      </motion.div>
    </section>
  );
}
