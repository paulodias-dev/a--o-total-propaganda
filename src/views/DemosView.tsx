import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Radio,
  Headphones,
  MessageCircle,
  Store,
  Pill,
  Shirt,
  Car,
  Megaphone,
  Play,
  Pause,
  Square,
  Volume2,
  CheckCircle2,
} from "lucide-react";

interface DemoOption {
  id: string;
  niche: string;
  title: string;
  icon: any;
  objective: string;
  channel: string;
  duration: string;
  script: string[];
}

export default function DemosView() {
  const [activeDemo, setActiveDemo] = useState<string>("supermarket");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState<number | null>(null);
  const [speechUnavailable, setSpeechUnavailable] = useState(false);
  const playbackTokenRef = useRef(0);

  const demosList: DemoOption[] = [
    {
      id: "supermarket",
      niche: "Supermercado",
      title: "Oferta de fim de semana",
      icon: Store,
      objective: "Atrair clientes para açougue, hortifruti e ofertas rápidas.",
      channel: "Carro de som + rádio interna",
      duration: "30s",
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
      channel: "Carro de som + WhatsApp",
      duration: "25s",
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
      channel: "Carro de som + redes sociais",
      duration: "30s",
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
      channel: "Trio elétrico + tráfego pago",
      duration: "30s",
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
      channel: "Carro de som + panfletagem",
      duration: "25s",
      script: [
        "Alô, região! A Loja Modelo acaba de inaugurar e preparou uma recepção especial para você.",
        "Tem ofertas de abertura, atendimento especial e novidades esperando por toda a família.",
        "Venha hoje conhecer a Loja Modelo. Estamos de portas abertas!",
      ],
    },
  ];

  const currentDemo = demosList.find((demo) => demo.id === activeDemo) || demosList[0];
  const ActiveIcon = currentDemo.icon;

  const stopPlayback = () => {
    playbackTokenRef.current += 1;

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    setIsPlaying(false);
    setIsPaused(false);
    setCurrentLineIndex(null);
  };

  const finishPlayback = (token: number) => {
    if (token !== playbackTokenRef.current) return;

    setIsPlaying(false);
    setIsPaused(false);
    setCurrentLineIndex(null);
  };

  const speakLine = (lines: string[], index: number, token: number) => {
    if (token !== playbackTokenRef.current) return;

    if (index >= lines.length) {
      finishPlayback(token);
      return;
    }

    if (typeof window === "undefined" || !("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      setSpeechUnavailable(true);
      finishPlayback(token);
      return;
    }

    setCurrentLineIndex(index);

    const utterance = new SpeechSynthesisUtterance(lines[index]);
    utterance.lang = "pt-BR";
    utterance.rate = 0.98;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onend = () => {
      if (token !== playbackTokenRef.current) return;
      window.setTimeout(() => speakLine(lines, index + 1, token), 180);
    };

    utterance.onerror = () => {
      finishPlayback(token);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handlePlayPause = () => {
    setSpeechUnavailable(false);

    if (typeof window === "undefined" || !("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      setSpeechUnavailable(true);
      return;
    }

    if (isPlaying && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      return;
    }

    if (isPlaying && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      return;
    }

    playbackTokenRef.current += 1;
    window.speechSynthesis.cancel();

    const token = playbackTokenRef.current;
    setIsPlaying(true);
    setIsPaused(false);
    setCurrentLineIndex(0);
    speakLine(currentDemo.script, 0, token);
  };

  const handleDemoChange = (demoId: string) => {
    stopPlayback();
    setSpeechUnavailable(false);
    setActiveDemo(demoId);
  };

  const handleWhatsApp = () => {
    const text = `Olá! Vi os exemplos de anúncios no site e quero produzir uma campanha para ${currentDemo.niche}. Gostaria de receber orientação e orçamento.`;
    window.open(`https://wa.me/5562991962033?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    return () => stopPlayback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const progressPercent = currentLineIndex === null
    ? 0
    : Math.round(((currentLineIndex + 1) / currentDemo.script.length) * 100);

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-midnight-carbon">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-brand-yellow/3 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[320px] h-[320px] bg-white/2 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-4">
            <Headphones className="w-3.5 h-3.5" />
            OUÇA EXEMPLOS DE ANÚNCIOS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
            Aperte o play e veja como sua oferta pode soar
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Escolha um segmento, ouça uma simulação de locução e peça um anúncio parecido para carro de som, rádio interna, frente de loja, WhatsApp ou redes sociais.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8 bg-black/30 p-2 rounded-2xl border border-white/5">
          {demosList.map((demo) => {
            const Icon = demo.icon;
            const isSelected = demo.id === activeDemo;
            return (
              <button
                key={demo.id}
                onClick={() => handleDemoChange(demo.id)}
                className={`flex flex-col items-center justify-center gap-2 py-3 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                  isSelected
                    ? "bg-brand-yellow text-black shadow-md shadow-brand-yellow/5 font-black"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.02]"
                }`}
                aria-pressed={isSelected}
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white/[0.01] border border-white/5 rounded-3xl p-6 sm:p-10 relative overflow-hidden"
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

              <p className="text-slate-400 text-sm leading-relaxed mb-6">{currentDemo.objective}</p>

              <div className="bg-black/35 border border-white/5 rounded-3xl p-5 sm:p-6 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePlayPause}
                      className="w-16 h-16 rounded-full bg-brand-yellow hover:bg-[#ffd633] text-black flex items-center justify-center shadow-lg shadow-brand-yellow/15 transition-all cursor-pointer"
                      aria-label={isPlaying && !isPaused ? "Pausar anúncio" : isPaused ? "Continuar anúncio" : "Ouvir anúncio"}
                    >
                      {isPlaying && !isPaused ? (
                        <Pause className="w-7 h-7 fill-current text-black" />
                      ) : (
                        <Play className="w-7 h-7 fill-current text-black ml-1" />
                      )}
                    </button>

                    <div>
                      <div className="flex items-center gap-2 text-white font-bold text-sm">
                        <Volume2 className="w-4 h-4 text-brand-yellow" />
                        {isPlaying ? (isPaused ? "Anúncio pausado" : "Ouvindo anúncio") : "Clique para ouvir"}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        {currentDemo.channel} • duração sugerida: {currentDemo.duration}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={stopPlayback}
                    disabled={!isPlaying && currentLineIndex === null}
                    className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-wider border border-white/10 flex items-center justify-center gap-2 transition-all"
                  >
                    <Square className="w-3.5 h-3.5" />
                    Parar
                  </button>
                </div>

                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-yellow transition-all duration-300"
                    style={{ width: `${isPlaying || currentLineIndex !== null ? progressPercent : 0}%` }}
                  />
                </div>

                {speechUnavailable && (
                  <div className="mt-4 text-xs text-amber-200 bg-amber-500/10 border border-amber-500/20 rounded-xl p-3">
                    Seu navegador não permitiu a leitura automática. O roteiro completo está logo abaixo para avaliação.
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {currentDemo.script.map((line, index) => {
                  const isCurrent = currentLineIndex === index;
                  const wasPlayed = currentLineIndex !== null && index < currentLineIndex;

                  return (
                    <div
                      key={index}
                      className={`border rounded-2xl p-4 flex gap-3 items-start transition-all ${
                        isCurrent
                          ? "bg-brand-yellow/10 border-brand-yellow/40 shadow-lg shadow-brand-yellow/5"
                          : wasPlayed
                          ? "bg-emerald-500/5 border-emerald-500/20"
                          : "bg-black/35 border-white/5"
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                        isCurrent ? "bg-brand-yellow text-black" : wasPlayed ? "bg-emerald-500 text-white" : "bg-white/10 text-slate-300"
                      }`}>
                        {wasPlayed ? <CheckCircle2 className="w-4 h-4" /> : index + 1}
                      </div>
                      <p className={`text-sm leading-relaxed ${isCurrent ? "text-white" : "text-slate-300"}`}>{line}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="glass-card rounded-3xl p-8 border border-white/10 bg-black/30">
                <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow flex items-center justify-center mb-6">
                  <Radio className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">Quer um áudio com a cara da sua empresa?</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Envie cidade, segmento, oferta, data e canal desejado. A equipe adapta o texto para uma comunicação mais vendedora e fácil de entender.
                </p>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                    Roteiro comercial com chamada para ação
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                    Locução para carro de som, loja ou rádio interna
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                    Mensagem adaptada ao seu segmento
                  </div>
                </div>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-brand-yellow hover:bg-[#ffd633] text-black font-extrabold uppercase tracking-wider px-6 py-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-brand-yellow/10 cursor-pointer"
              >
                <MessageCircle className="w-4.5 h-4.5 fill-current text-black" />
                Quero um anúncio como este
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
