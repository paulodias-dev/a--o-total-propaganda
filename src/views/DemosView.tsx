import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Radio,
  Mic,
  Headphones,
  MessageCircle,
  Store,
  Pill,
  Shirt,
  Car,
  Megaphone,
  Play,
} from "lucide-react";

interface DemoOption {
  id: string;
  niche: string;
  title: string;
  icon: any;
  objective: string;
  script: string[];
}

export default function DemosView() {
  const [activeDemo, setActiveDemo] = useState<string>("supermarket");

  const demosList: DemoOption[] = [
    {
      id: "supermarket",
      niche: "Supermercado",
      title: "Oferta de fim de semana",
      icon: Store,
      objective: "Atrair clientes para açougue, hortifruti e ofertas rápidas.",
      script: [
        "Atenção, moradores do bairro! O Supermercado Modelo preparou ofertas imperdíveis para hoje.",
        "Tem promoção no açougue, hortifruti fresquinho e preços especiais para sua família economizar.",
        "Passe agora no Supermercado Modelo e aproveite. Oferta por tempo limitado!",
      ],
    },
    {
      id: "pharmacy",
      niche: "Farmácia",
      title: "Campanha de saúde e bem-estar",
      icon: Pill,
      objective: "Divulgar manipulação, perfumaria, suplementos e atendimento local.",
      script: [
        "Cuidar da sua saúde ficou mais fácil com a Farmácia Modelo.",
        "Traga sua receita, fale com nossa equipe e conheça nossas opções em manipulação e bem-estar.",
        "Farmácia Modelo: atendimento próximo, qualidade e confiança para sua família.",
      ],
    },
    {
      id: "clothing",
      niche: "Loja de roupas",
      title: "Inauguração e coleção nova",
      icon: Shirt,
      objective: "Gerar movimento no dia da inauguração e reforçar promoção na loja.",
      script: [
        "Chegou a loja que vai renovar seu guarda-roupa! Grande inauguração neste sábado.",
        "Peças selecionadas, condições especiais e atendimento preparado para receber você.",
        "Venha conhecer a Loja Modelo e aproveite as ofertas de inauguração.",
      ],
    },
    {
      id: "cars",
      niche: "Concessionária",
      title: "Feirão de veículos",
      icon: Car,
      objective: "Gerar visitas para feirão, seminovos, consórcio e condições especiais.",
      script: [
        "Atenção! Começou o grande feirão da Auto Modelo.",
        "Veículos selecionados, avaliação do seu usado e condições especiais por tempo limitado.",
        "Passe hoje na Auto Modelo e fale com nossa equipe de vendas.",
      ],
    },
    {
      id: "inauguration",
      niche: "Inauguração",
      title: "Abertura de loja",
      icon: Megaphone,
      objective: "Fazer o público saber que a loja abriu e incentivar visita imediata.",
      script: [
        "Alô, região! A Loja Modelo acaba de inaugurar e preparou uma recepção especial para você.",
        "Tem ofertas de abertura, atendimento especial e novidades esperando por toda a família.",
        "Venha hoje conhecer a Loja Modelo. Estamos de portas abertas!",
      ],
    },
  ];

  const currentDemo = demosList.find((demo) => demo.id === activeDemo) || demosList[0];
  const ActiveIcon = currentDemo.icon;

  const handleWhatsApp = () => {
    const text = `Olá! Vi os exemplos de anúncios no site e quero produzir uma campanha para ${currentDemo.niche}. Gostaria de receber orientação e orçamento.`;
    window.open(`https://wa.me/5562991962033?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-midnight-carbon">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-brand-yellow/3 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[320px] h-[320px] bg-white/2 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-4">
            <Headphones className="w-3.5 h-3.5" />
            EXEMPLOS DE ANÚNCIOS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
            Veja como sua oferta pode virar uma chamada comercial
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Estes exemplos mostram a linha de comunicação que podemos adaptar para carro de som, rádio interna, frente de loja, WhatsApp e redes sociais.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12 bg-black/30 p-2 rounded-2xl border border-white/5">
          {demosList.map((demo) => {
            const Icon = demo.icon;
            const isSelected = demo.id === activeDemo;
            return (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`flex flex-col items-center justify-center gap-2 py-3 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                  isSelected
                    ? "bg-brand-yellow text-black shadow-md shadow-brand-yellow/5 font-black"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.02]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-black" : "text-slate-400"}`} />
                <span>{demo.niche}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white/[0.01] border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
          >
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 flex items-center justify-center border border-brand-yellow/20 text-brand-yellow">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-brand-yellow uppercase tracking-widest font-semibold">{currentDemo.niche}</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white font-display mt-0.5">{currentDemo.title}</h2>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-8">{currentDemo.objective}</p>

              <div className="space-y-4">
                {currentDemo.script.map((line, index) => (
                  <div key={index} className="bg-black/35 border border-white/5 rounded-2xl p-4 flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-full bg-brand-yellow text-black flex items-center justify-center text-xs font-black shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed">{line}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="glass-card rounded-3xl p-8 border border-white/10 bg-black/30">
                <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow flex items-center justify-center mb-6">
                  <Radio className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">Transformamos a ideia em anúncio pronto</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Informe cidade, segmento, oferta, data e canal desejado. A equipe ajusta o texto para uma comunicação mais vendedora e fácil de entender.
                </p>
                <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest">
                  <Play className="w-4 h-4 text-brand-yellow" />
                  Locução • spot • rádio interna • carro de som
                </div>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-brand-yellow hover:bg-[#ffd633] text-black font-extrabold uppercase tracking-wider px-6 py-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-brand-yellow/10 cursor-pointer"
              >
                <MessageCircle className="w-4.5 h-4.5 fill-current text-black" />
                Quero um anúncio para minha empresa
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 bg-[#0B0B0E] border border-white/5 rounded-3xl p-8 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs text-brand-yellow font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            Dica de conversão
          </span>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Quanto mais específica for a oferta, melhor o anúncio funciona. Promoção com produto, preço, data, bairro e chamada para ação tende a gerar mais resposta do que uma mensagem institucional genérica.
          </p>
        </div>
      </div>
    </div>
  );
}
