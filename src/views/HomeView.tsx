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
  Trophy,
  MapPin,
  CheckCircle2,
  Store,
} from "lucide-react";

interface HomeViewProps {
  onNavigate: (page: string, subServiceId?: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const stats = [
    {
      value: "15+ anos",
      label: "de experiência",
      desc: "Atuação em propaganda de rua, varejo e campanhas locais.",
      icon: Calendar,
      color: "text-brand-yellow",
    },
    {
      value: "500+ ações",
      label: "executadas",
      desc: "Campanhas para ofertas, inaugurações, eventos e varejo.",
      icon: Trophy,
      color: "text-white",
    },
    {
      value: "Rotas GPS",
      label: "com acompanhamento",
      desc: "Mais transparência para quem contrata carro de som e ações de rua.",
      icon: MapPin,
      color: "text-brand-yellow",
    },
  ];

  const featuredServices = [
    {
      id: "carro-som",
      title: "Carro de Som",
      desc: "Divulgue ofertas, inaugurações e promoções nos bairros certos com áudio profissional e rota planejada.",
      icon: Megaphone,
      badge: "Impacto nas ruas",
    },
    {
      id: "panfletagem",
      title: "Panfletagem e Blitz",
      desc: "Leve sua marca para pontos de fluxo com promotores, abordagem comercial e fiscalização da ação.",
      icon: Users,
      badge: "Presença física",
    },
    {
      id: "radio-interna",
      title: "Rádio Interna",
      desc: "Toque ofertas dentro da loja e influencie o cliente no momento da compra.",
      icon: Radio,
      badge: "Vendas no PDV",
    },
    {
      id: "trafego-pago",
      title: "Anúncios Digitais",
      desc: "Apareça no Google, Instagram e Facebook para pessoas próximas da sua empresa.",
      icon: TrendingUp,
      badge: "Leads no WhatsApp",
    },
  ];

  const segments = [
    "Supermercados",
    "Farmácias",
    "Óticas",
    "Lojas de roupas",
    "Concessionárias",
    "Açougues",
    "Construtoras",
    "Inaugurações",
  ];

  const handleWhatsAppChat = () => {
    const text = "Olá! Vi o site da Ação Total e quero divulgar minha empresa. Gostaria de receber uma sugestão de campanha e orçamento.";
    window.open(`https://wa.me/5562991962033?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen">
      <section
        id="hero"
        className="relative min-h-[90vh] flex flex-col justify-center items-center pt-36 pb-20 px-6 overflow-hidden bg-midnight-carbon"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-brand-yellow/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] bg-brand-yellow/3 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-wrap justify-center items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 mb-8 backdrop-blur-md"
            id="hero-badge"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow animate-pulse" />
            <span>Propaganda local em Anápolis, Aracaju e região</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-8 font-display"
            id="hero-title"
          >
            Propaganda de rua que coloca clientes dentro da{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-white to-brand-yellow">
              sua loja.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-light"
            id="hero-subtitle"
          >
            Carro de som, panfletagem, trio elétrico, rádio interna, locução comercial e campanhas digitais para divulgar ofertas, inaugurações e promoções com atendimento direto pelo WhatsApp.
          </motion.p>

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
              Quero divulgar minha empresa
            </motion.button>

            <motion.button
              onClick={() => onNavigate("orcamento")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/20 text-white text-base font-semibold tracking-wide backdrop-blur-md hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Receber orçamento
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <p className="mt-6 text-[11px] text-slate-500 max-w-xl">
            Atendimento comercial para empresas que precisam atrair clientes, divulgar ofertas e movimentar o ponto de venda.
          </p>
        </div>
      </section>

      <section className="relative py-16 px-6 bg-[#0B0B0E] border-t border-b border-white/5 overflow-hidden">
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

      <section className="py-24 px-6 relative bg-midnight-carbon border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-4">
              <Store className="w-3.5 h-3.5" />
              COMO PODEMOS DIVULGAR SUA EMPRESA
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
              Escolha a estratégia certa para atrair clientes
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light text-base sm:text-lg">
              Unimos presença nas ruas, abordagem física, som no ponto de venda e anúncios digitais para transformar divulgação em contato comercial.
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
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 flex items-center justify-center border border-brand-yellow/20 text-brand-yellow">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] text-brand-yellow bg-brand-yellow/10 px-2 py-0.5 rounded border border-brand-yellow/10 uppercase tracking-wider font-semibold">
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
                    Ver como funciona
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0B0B0E] relative overflow-hidden">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[450px] h-[450px] bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-4">
                <Volume2 className="w-3.5 h-3.5" />
                RÁDIO INTERNA PARA VAREJO
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 font-display leading-tight">
                Suas ofertas tocando dentro da loja, no momento em que o cliente decide comprar.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                A Rádio Ação cria uma programação personalizada para supermercados, farmácias, magazines e lojas. Sua equipe informa as ofertas, nós produzimos os anúncios e eles entram na programação do ambiente.
              </p>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-8">
                É uma forma simples de divulgar açougue, hortifruti, promoções relâmpago, combos e campanhas sazonais enquanto o cliente já está dentro do ponto de venda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate("demos")}
                  className="px-6 py-3.5 rounded-xl bg-brand-yellow hover:bg-[#ffd633] text-black font-extrabold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-brand-yellow/10"
                >
                  <Volume2 className="w-4 h-4 text-black stroke-[3]" />
                  Ouvir exemplos
                </button>
                <button
                  onClick={() => onNavigate("servicos", "radio-interna")}
                  className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-1"
                >
                  Ver rádio interna
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-3xl p-8 border border-white/10 overflow-hidden relative bg-black/40 shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-yellow flex items-center justify-center text-black">
                      <Radio className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Programação da loja</h4>
                      <span className="text-[10px] text-slate-500">Ofertas, avisos e trilha ambiente</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/20 px-2 py-0.5 rounded font-bold animate-pulse">
                    TOCANDO AGORA
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow animate-ping shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs font-bold text-white leading-none">Oferta da Semana: Alcatra kg</p>
                      <span className="text-[10px] text-slate-500 mt-1 block">Supermercado • Anápolis / Aracaju</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-semibold">ao vivo</span>
                  </div>

                  <div className="bg-white/[0.01] rounded-xl p-3 border border-white/5 flex items-center gap-3 opacity-70">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700 shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-slate-400 leading-none">Música ambiente selecionada para o público</p>
                      <span className="text-[10px] text-slate-600 mt-0.5 block">Programação comercial automatizada</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-end h-12 gap-1.5 px-4 bg-black/50 rounded-xl p-2 border border-white/5">
                  {[20, 50, 85, 45, 95, 60, 30, 80, 55, 75, 40, 90, 70, 35, 65, 25, 45].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-brand-yellow/80 rounded-full"
                      style={{
                        height: `${h}%`,
                        animation: `pulse ${0.8 + (i % 4) * 0.2}s infinite alternate ease-in-out`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-midnight-carbon relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 glass-card rounded-3xl border border-white/10 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-brand-yellow/5 to-transparent pointer-events-none" />
            <span className="text-xs font-bold text-brand-yellow tracking-widest uppercase mb-4 inline-block">
              Orçamento rápido
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-display">
              Quer saber qual campanha faz mais sentido para o seu negócio?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-light max-w-2xl leading-relaxed mb-8">
              Informe os serviços desejados, ajuste dias, horas ou verba e envie tudo pelo WhatsApp para receber atendimento comercial com mais agilidade.
            </p>

            <button
              onClick={() => onNavigate("orcamento")}
              className="px-8 py-4 bg-brand-yellow hover:bg-[#ffd633] text-black text-sm font-extrabold uppercase tracking-widest rounded-full shadow-lg shadow-brand-yellow/10 hover:shadow-brand-yellow/20 transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              Montar meu orçamento
              <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
            </button>
          </div>

          <div className="lg:col-span-5 bg-[#0B0B0E] rounded-3xl border border-white/5 p-8">
            <h3 className="text-xl font-bold text-white mb-4 font-display">Atendemos campanhas para:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {segments.map((segment) => (
                <div key={segment} className="flex items-center gap-2 text-xs text-slate-300 bg-white/[0.02] border border-white/5 rounded-xl px-3 py-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                  {segment}
                </div>
              ))}
            </div>
            <button
              onClick={handleWhatsAppChat}
              className="mt-6 w-full px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Mic className="w-4 h-4 text-brand-yellow" />
              Falar com atendimento
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
