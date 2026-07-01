import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Megaphone,
  TrendingUp,
  Radio,
  Mic,
  CheckCircle,
  Play,
  Pause,
  Sparkles,
  Volume2
} from "lucide-react";

export default function BentoServices() {
  const [isPlayingRadio, setIsPlayingRadio] = useState(false);
  const [digitalTab, setDigitalTab] = useState<"traffic" | "social" | "web">("traffic");

  // Animations for scroll container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="servicos"
      className="py-24 px-6 relative bg-midnight-carbon overflow-hidden border-t border-white/5"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-yellow/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            NOSSAS SOLUÇÕES 360°
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-display"
          >
            Estratégias Sob Medida para sua Marca
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-light"
          >
            Combinamos a força imbatível da propaganda volante de alta qualidade e ativações de rua com a precisão do marketing digital para garantir resultados imediatos.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6"
          id="bento-grid-container"
        >
          
          {/* 1. PROPAGANDA VOLANTE - CARD GRANDE (Spans 3 md columns, 6 lg columns) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="group cursor-pointer hover:border-brand-yellow/50 transition-all duration-300 md:col-span-3 lg:col-span-6 glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[440px]"
            id="card-marketing-externo"
          >
            {/* Soft dark gradient backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Top Row */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 flex items-center justify-center border border-brand-yellow/20 text-brand-yellow">
                  <Megaphone className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#F5C518] bg-brand-yellow/10 px-2.5 py-1 rounded-full border border-brand-yellow/10 uppercase tracking-wider font-semibold">
                  Resultados Reais
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors font-display">
                Propaganda Volante & Eventos
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Não deixe sua marca sumir do mercado, anuncie! Temos as frotas de som mais modernas e potentes de Anápolis-GO e Aracaju-SE para colocar sua mensagem em cada canto com extrema nitidez e fidelidade acústica.
              </p>

              {/* Sub-itens list */}
              <ul className="space-y-2.5 mb-8">
                {[
                  { text: "Trio-elétrico de Grande Porte", desc: "Perfeito para eventos maciços, comícios, carreatas e mega inaugurações." },
                  { text: "Mini-Trios de Alta Performance", desc: "Som robusto em veículos versáteis, garantindo circulação em qualquer bairro." },
                  { text: "Carros Pequenos c/ Qualidade de Som!", desc: "Unidades otimizadas com altíssima fidelidade acústica, ideais para campanhas comerciais diárias." },
                  { text: "Ativações de Rua & Panfletagem", desc: "Distribuição cirúrgica com geolocalização e planejamento estratégico de público." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-brand-yellow mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-white font-semibold">{item.text}: </strong>
                      <span className="text-slate-400">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Micro Interaction Graphic Mockup */}
            <div className="relative h-20 bg-black/30 border border-white/5 rounded-2xl p-4 flex items-center justify-between overflow-hidden">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-slate-500">Qualidade Acústica Garantida</span>
                <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-1">
                  <Volume2 className="w-4 h-4 text-brand-yellow animate-pulse" />
                  Sem Ruído, Máxima Clareza
                </span>
              </div>
              {/* Fake Route path graphic representation */}
              <div className="flex gap-1.5 items-end h-10">
                {[40, 25, 60, 45, 80, 50, 95, 70, 110].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.6 }}
                    className="w-1.5 bg-brand-yellow/40 rounded-full group-hover:bg-brand-yellow/80 transition-colors"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* 2. ESTRATÉGIAS DIGITAIS - CARD GRANDE (Spans 3 md columns, 6 lg columns) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="group cursor-pointer hover:border-brand-yellow/30 transition-all duration-300 md:col-span-3 lg:col-span-6 glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[440px]"
            id="card-estrategias-digitais"
          >
            {/* Soft dark gradient backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Top Row */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 uppercase tracking-wider">
                  Tráfego & Presença
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors font-display">
                Presença Digital Completa
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Transformamos cliques em clientes recorrentes usando estratégias orientadas por dados, anúncios otimizados e páginas focadas estritamente em fechar negócios.
              </p>

              {/* Interative tabs mockup inside the Digital Service Card */}
              <div className="flex gap-2 mb-6 bg-black/40 p-1 rounded-xl border border-white/5">
                {[
                  { id: "traffic", label: "Tráfego Pago" },
                  { id: "social", label: "Social Media" },
                  { id: "web", label: "Landing Pages" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={(e) => {
                      e.stopPropagation(); // prevent card click
                      setDigitalTab(tab.id as any);
                    }}
                    className={`flex-1 text-center py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      digitalTab === tab.id
                        ? "bg-brand-yellow text-black shadow-sm font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Dynamic tab contents descriptive items */}
              <div className="h-24">
                <AnimatePresence mode="wait">
                  {digitalTab === "traffic" && (
                    <motion.div
                      key="traffic"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-xs text-slate-300 space-y-2"
                    >
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <p>Gestão de alta performance no Google Ads, Instagram Ads e Facebook Ads.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <p>Segmentação local cirúrgica direcionada estritamente ao público comprador de Anápolis-GO e Aracaju-SE.</p>
                      </div>
                    </motion.div>
                  )}
                  {digitalTab === "social" && (
                    <motion.div
                      key="social"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-xs text-slate-300 space-y-2"
                    >
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <p>Design visual sofisticado que reflete o posicionamento de elite da sua empresa.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <p>Textos e postagens persuasivas para converter visualizações em direct e vendas.</p>
                      </div>
                    </motion.div>
                  )}
                  {digitalTab === "web" && (
                    <motion.div
                      key="web"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-xs text-slate-300 space-y-2"
                    >
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <p>Criação de páginas super rápidas e otimizadas para celulares, gerando novos leads.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <p>Estrutura focada em usabilidade (UX) e facilidade de contato via WhatsApp.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Digital Stats Mockup */}
            <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4 text-[11px] text-slate-400">
              <span>Performance Comercial Digital</span>
              <span className="font-mono font-bold text-brand-yellow flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-brand-yellow" /> Campanhas Otimizadas Localmente
              </span>
            </div>
          </motion.div>

          {/* 3. RÁDIO AÇÃO - CARD DIFERENCIAL (Spans 6 columns on md, 8 or 9 on lg) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            id="radio-acao"
            className="group cursor-pointer hover:border-brand-yellow/30 transition-all duration-300 md:col-span-6 lg:col-span-8 glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row gap-8 justify-between min-h-[320px]"
          >
            {/* Yellow gradient accent glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Text details */}
            <div className="flex-1 flex flex-col justify-between z-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 flex items-center justify-center border border-brand-yellow/20 text-brand-yellow shadow-inner">
                    <Radio className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-black bg-brand-yellow px-2.5 py-1 rounded-full border border-brand-yellow/10 uppercase tracking-wider font-extrabold">
                      Diferencial Exclusivo
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors font-display">
                  Rádio Interna Corporativa
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Criamos ambientes sonoros personalizados e profissionais para supermercados, farmácias, magazines e redes varejistas. Programação musical agradável intercalada com spots e anúncios internos das ofertas do dia, influenciando diretamente a decisão e gerando até <strong className="text-brand-yellow font-bold">18% de aumento no ticket médio</strong> do PDV.
                </p>
              </div>

              {/* Advantage Badges */}
              <div className="flex flex-wrap gap-2.5">
                {["Anúncios Inteligentes", "Trilha Sonora Própria", "Aumento de Vendas", "Locução de Estúdio"].map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold text-slate-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Player Mockup Block */}
            <div className="w-full md:w-72 bg-black/40 border border-white/5 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden shrink-0 z-10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">AÇÃO MUSIC STREAM</span>
                  <span className="text-xs font-bold text-slate-200 mt-1">Supermercado em Anápolis-GO / Aracaju-SE</span>
                </div>
                <div className="h-2 w-2 rounded-full bg-brand-yellow animate-ping" />
              </div>

              {/* Sound equalizer animated bars */}
              <div className="h-16 flex items-end justify-center gap-1.5 px-4 mb-4">
                {[20, 45, 15, 60, 35, 75, 40, 90, 50, 70, 30, 55, 25, 40, 10].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={
                      isPlayingRadio
                        ? { height: [`${h}%`, `${Math.min(h * 1.5, 100)}%`, `${Math.max(h * 0.4, 10)}%`, `${h}%`] }
                        : { height: `${Math.max(h * 0.2, 8)}%` }
                    }
                    transition={{
                      repeat: Infinity,
                      duration: 0.8 + (i % 3) * 0.2,
                      ease: "easeInOut"
                    }}
                    className={`w-1 rounded-full ${
                      isPlayingRadio ? "bg-brand-yellow" : "bg-slate-700"
                    }`}
                  />
                ))}
              </div>

              {/* Controls */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-[10px] text-slate-500">
                  <span>Spot: Oferta Exclusiva Ação</span>
                  <span>1:12 / 2:00</span>
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlayingRadio(!isPlayingRadio);
                  }}
                  className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-wider transition-all border cursor-pointer ${
                    isPlayingRadio
                      ? "bg-white/10 text-white border-white/10 hover:bg-white/15"
                      : "bg-brand-yellow text-black border-transparent hover:bg-[#ffd633] shadow-md shadow-brand-yellow/10"
                  }`}
                >
                  {isPlayingRadio ? (
                    <>
                      <Pause className="w-4 h-4 fill-current text-black" />
                      Pausar Demonstração
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current text-black" />
                      Ouvir Rádio Demo
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* 4. MÍDIA IMPACTANTE - CARD PEQUENO (Spans 6 columns on md, 4 on lg) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="group cursor-pointer hover:border-brand-yellow/30 transition-all duration-300 md:col-span-6 lg:col-span-4 glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[320px]"
            id="card-midia-impactante"
          >
            {/* Glowing spotlight effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 flex items-center justify-center border border-brand-yellow/20 text-brand-yellow">
                  <Mic className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 uppercase tracking-wider">
                  Estúdio & Locução
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors font-display">
                Locução & Rádio FM
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Desenvolvemos a produção completa de comerciais, jingles memoráveis e spots de rádio com locutores profissionais de altíssimo impacto para emissoras de rádio.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Também fornecemos locutores experientes para frentes de loja, inaugurações comerciais e blitzes promocionais, garantindo energia, descontração e vendas imediatas.
              </p>
            </div>

            {/* Small Audio VU Meter Mockup */}
            <div className="flex items-center gap-3 bg-black/30 p-3 rounded-xl border border-white/5 mt-4">
              <span className="text-[10px] font-mono text-slate-500">VU:</span>
              <div className="flex-1 flex gap-0.5 items-center h-2 bg-slate-900 rounded-full overflow-hidden px-1">
                <div className="h-1 bg-brand-yellow rounded-full w-[65%]" />
                <div className="h-1 bg-brand-yellow rounded-full w-[45%]" />
                <div className="h-1 bg-brand-yellow rounded-full w-[25%]" />
                <div className="h-1 bg-slate-700 rounded-full w-[10%]" />
              </div>
              <span className="text-[9px] font-mono text-brand-yellow">OK</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
