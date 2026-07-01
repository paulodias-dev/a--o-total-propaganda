import React from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  MessageCircle,
  ArrowRight,
  Megaphone,
  Radio,
  TrendingUp,
  Mic,
  Users,
  Volume2,
  Calendar,
  Trophy
} from "lucide-react";

interface HomeViewProps {
  onNavigate: (page: string, subServiceId?: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  // Counters for the stats
  const stats = [
    {
      value: "15+ Anos",
      label: "Experiência no Mercado",
      desc: "Tradição em Anápolis-GO e Aracaju-SE",
      icon: Calendar,
      color: "text-brand-yellow"
    },
    {
      value: "500+ Ações",
      label: "Eventos Realizados",
      desc: "Sucessos marcantes e campanhas",
      icon: Trophy,
      color: "text-white"
    },
    {
      value: "98%",
      label: "Fidelidade de Clientes",
      desc: "Parcerias sólidas de longo prazo",
      icon: Users,
      color: "text-brand-yellow"
    }
  ];

  // Quick overview of core services to display on Home
  const featuredServices = [
    {
      id: "carro-som",
      title: "Carros de Som & Mini-Trios",
      desc: "As frotas acústicas mais avançadas de Anápolis-GO e Aracaju-SE para rodar com som cristalino e sem distorção.",
      icon: Megaphone,
      badge: "Campanhas Diárias"
    },
    {
      id: "radio-interna",
      title: "Rádio Interna Corporativa",
      desc: "Sua própria rádio no supermercado ou magazine para divulgar ofertas e reter clientes no ponto de venda.",
      icon: Radio,
      badge: "Aumento de Vendas"
    },
    {
      id: "trafego-pago",
      title: "Marketing Digital & Tráfego",
      desc: "Anúncios cirúrgicos no Google, Facebook e Instagram para atrair clientes locais direto para o WhatsApp.",
      icon: TrendingUp,
      badge: "Alta Performance"
    },
    {
      id: "locucao-spot",
      title: "Gravação de Spots & Locutores",
      desc: "Produção rápida em estúdio com locutores profissionais e vozes vendedoras para rádio, TV e frentes de loja.",
      icon: Mic,
      badge: "Estúdio de Elite"
    }
  ];

  const handleWhatsAppChat = () => {
    window.open("https://wa.me/5562991962033?text=Olá! Gostaria de conversar com um especialista da Ação Total sobre estratégias de propaganda.", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen">
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex flex-col justify-center items-center pt-36 pb-20 px-6 overflow-hidden bg-midnight-carbon"
      >
        {/* Glow orbs background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-brand-yellow/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] bg-brand-yellow/3 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-white/3 rounded-full blur-[80px] pointer-events-none" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Subtle Slogan Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 mb-8 backdrop-blur-md"
            id="hero-badge"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow animate-pulse" />
            <span>Nosso foco é resultado imediato! • Anápolis - GO & Aracaju - SE</span>
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
            Gerando Felicidade e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-white to-brand-yellow">
              Resultados.
            </span>
          </motion.h1>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
            id="hero-subtitle"
          >
            A maior agência de comunicação volante e marketing de rua de Goiás e Sergipe. Criamos soluções integradas que retiram sua marca do anonimato e a colocam no topo da mente do consumidor.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            id="hero-actions"
          >
            <motion.button
              onClick={handleWhatsAppChat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-yellow hover:bg-[#ffd633] text-black text-base font-extrabold tracking-wide shadow-xl shadow-brand-yellow/10 hover:shadow-brand-yellow/25 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Falar com Especialista
            </motion.button>

            <motion.button
              onClick={() => onNavigate("servicos")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/20 text-white text-base font-semibold tracking-wide backdrop-blur-md hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Explorar Soluções
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS OVERVIEW SECTION */}
      <section className="relative py-16 px-6 bg-[#0B0B0E] border-t border-b border-white/5 overflow-hidden">
        {/* Glow behind stats */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-yellow/3 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="flex flex-col items-center text-center p-6 md:px-8"
                >
                  <div className="mb-4">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2 font-display">
                    {stat.value}
                  </h3>
                  <div className="text-sm font-semibold text-slate-200 mb-1">{stat.label}</div>
                  <p className="text-xs text-slate-500 max-w-xs">{stat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES HUBS */}
      <section className="py-24 px-6 relative bg-midnight-carbon border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              MÍDIA OFF-LINE + DIGITAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
              Soluções Integradas 360°
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light text-base sm:text-lg">
              Conectamos o impacto sonoro das ruas com a inteligência dos anúncios na internet, gerando máxima audiência e fechamento de vendas para o seu comércio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="home-featured-grid">
            {featuredServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between border border-white/5 hover:border-brand-yellow/30 transition-all duration-300"
                >
                  <div>
                    {/* Badge */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 flex items-center justify-center border border-brand-yellow/20 text-brand-yellow">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-brand-yellow bg-brand-yellow/10 px-2 py-0.5 rounded border border-brand-yellow/10 uppercase tracking-wider font-semibold">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-yellow transition-colors font-display">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate("servicos", service.id)}
                    className="text-xs font-bold text-white hover:text-brand-yellow flex items-center gap-1 group/btn cursor-pointer transition-colors pt-4 border-t border-white/5 w-full mt-auto"
                  >
                    Ver detalhes do serviço
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SECCION DESTAQUE RÁDIO INTERNA */}
      <section className="py-24 px-6 bg-[#0B0B0E] relative overflow-hidden">
        {/* Glow orb */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[450px] h-[450px] bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Col Info */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-4">
                <Volume2 className="w-3.5 h-3.5" />
                RÁDIO AÇÃO CORPORATIVA
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 font-display leading-tight">
                Já pensou em ter a sua própria rádio tocando no seu supermercado?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                A Rádio Ação é a rádio corporativa oficial das principais redes varejistas de Goiás e Sergipe. Fornecemos músicas selecionadas no estilo do seu público, vinhetas profissionais gravadas com locutores de rádio de elite e inserção automática de suas ofertas de forma automatizada e inteligente.
              </p>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-8">
                Diminua a percepção do tempo de espera nas filas, entretenha seus clientes e aumente o ticket médio do seu comércio em até 18% anunciando suas ofertas internamente enquanto eles fazem compras!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate("demos")}
                  className="px-6 py-3.5 rounded-xl bg-brand-yellow hover:bg-[#ffd633] text-black font-extrabold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-brand-yellow/10"
                >
                  <Volume2 className="w-4 h-4 text-black stroke-[3]" />
                  Ouvir Demonstração Ao Vivo
                </button>
                <button
                  onClick={() => onNavigate("servicos", "radio-interna")}
                  className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-1"
                >
                  Como Funciona?
                </button>
              </div>
            </div>

            {/* Right Col Custom Layout Frame */}
            <div className="relative">
              {/* Graphic container mockup representing sound wave streaming */}
              <div className="glass-card rounded-3xl p-8 border border-white/10 overflow-hidden relative bg-black/40 shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-yellow flex items-center justify-center text-black">
                      <Radio className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Rádio Ação Digital</h4>
                      <span className="text-[10px] text-slate-500 font-mono">Status: Transmitindo</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/20 px-2 py-0.5 rounded font-mono font-bold animate-pulse">
                    ONLINE • 128KBPS
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Spot Comercial Recente</span>
                    <span className="font-mono text-brand-yellow">Tocando Agora</span>
                  </div>
                  
                  {/* Mock track list player */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow animate-ping shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs font-bold text-white leading-none">Oferta da Semana: Alcatra Friboi kg</p>
                      <span className="text-[10px] text-slate-500 mt-1 block">Supermercado Modelo • Anápolis-GO / Aracaju-SE</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono font-semibold">1:24</span>
                  </div>

                  <div className="bg-white/[0.01] rounded-xl p-3 border border-white/5 flex items-center gap-3 opacity-60">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700 shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-slate-400 leading-none">Música: Sertanejo Mix (Acústico)</p>
                      <span className="text-[10px] text-slate-600 mt-0.5 block">Programação Comercial Automatizada</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">3:15</span>
                  </div>
                </div>

                {/* Simulated equalizer visual representation */}
                <div className="flex justify-between items-end h-12 gap-1.5 px-4 bg-black/50 rounded-xl p-2 border border-white/5">
                  {[20, 50, 85, 45, 95, 60, 30, 80, 55, 75, 40, 90, 70, 35, 65, 25, 45].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-brand-yellow/80 rounded-full"
                      style={{
                        height: `${h}%`,
                        animation: `pulse ${0.8 + (i % 4) * 0.2}s infinite alternate ease-in-out`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SELECTION SIMULADOR CTA BANNER */}
      <section className="py-20 px-6 bg-midnight-carbon relative">
        <div className="max-w-5xl mx-auto">
          <div className="relative glass-card rounded-3xl border border-white/10 p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-brand-yellow/5 to-transparent pointer-events-none" />
            
            <span className="text-xs font-mono font-bold text-brand-yellow tracking-widest uppercase mb-4 inline-block">
              Simulador Inteligente Grátis
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-display">
              Monte seu Plano e Estime os Custos Agora!
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed mb-8">
              Desenvolvemos um simulador de orçamento exclusivo onde você pode selecionar suas necessidades (carros de som, quantidade de horas, gravação de vinhetas, rádio corporativa ou marketing digital) e obter uma estimativa de custos personalizada para fechar no WhatsApp.
            </p>

            <button
              onClick={() => onNavigate("orcamento")}
              className="px-8 py-4 bg-brand-yellow hover:bg-[#ffd633] text-black text-sm font-extrabold uppercase tracking-widest rounded-full shadow-lg shadow-brand-yellow/10 hover:shadow-brand-yellow/20 transition-all duration-300 cursor-pointer flex items-center gap-2 mx-auto"
            >
              Iniciar Simulação de Orçamento
              <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
