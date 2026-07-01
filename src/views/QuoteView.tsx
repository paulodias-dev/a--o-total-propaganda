import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Megaphone,
  Radio,
  TrendingUp,
  Mic,
  Users,
  Truck,
  Calculator,
  MessageCircle,
  FileText
} from "lucide-react";

interface ServiceChannel {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  priceUnit: string;
  icon: any;
  desc: string;
}

export default function QuoteView() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedChannels, setSelectedChannels] = useState<string[]>(["carro-som"]);
  
  // Configuration settings
  const [carroSomHours, setCarroSomHours] = useState(4);
  const [carroSomDays, setCarroSomDays] = useState(5);
  
  const [trioHours, setTrioHours] = useState(4);
  const [trioDays, setTrioDays] = useState(1);
  
  const [radioStores, setRadioStores] = useState(1);
  
  const [spotQuantity, setSpotQuantity] = useState(1);
  
  const [panfletagemPromoters, setPanfletagemPromoters] = useState(2);
  const [panfletagemDays, setPanfletagemDays] = useState(3);
  
  const [digitalBudget, setDigitalBudget] = useState(30); // R$ 30,00 per day

  const channelsList: ServiceChannel[] = [
    {
      id: "carro-som",
      name: "Carro de Som Volante",
      category: "Off-line",
      basePrice: 85, // R$ 85,00/hour
      priceUnit: "hora",
      icon: Megaphone,
      desc: "Veículos de som de alta nitidez rodando nos bairros com rastreador GPS."
    },
    {
      id: "trio-eletrico",
      name: "Trio Elétrico de Grande Porte",
      category: "Off-line",
      basePrice: 280, // R$ 280,00/hour
      priceUnit: "hora",
      icon: Truck,
      desc: "Caminhão de grande porte com palco superior e som de alta pressão para eventos."
    },
    {
      id: "radio-interna",
      name: "Rádio Interna (Rádio Ação)",
      category: "Varejo",
      basePrice: 290, // R$ 290,00/mês
      priceUnit: "mês por filial",
      icon: Radio,
      desc: "Trilha sonora personalizada e anúncios de ofertas dentro do seu supermercado."
    },
    {
      id: "locucao-spot",
      name: "Gravação de Spot Comercial",
      category: "Estúdio",
      basePrice: 130, // R$ 130,00/gravação
      priceUnit: "gravação",
      icon: Mic,
      desc: "Produção de spots persuasivos gravados por locutores de rádio de elite."
    },
    {
      id: "panfletagem",
      name: "Panfletagem & Blitz Comercial",
      category: "Off-line",
      basePrice: 95, // R$ 95,00/dia por promotor
      priceUnit: "promotor/dia",
      icon: Users,
      desc: "Distribuição física com promotores treinados integrados com som de rua."
    },
    {
      id: "trafego-pago",
      name: "Anúncios Digitais (Tráfego Pago)",
      category: "Digital",
      basePrice: 600, // R$ 600,00/mês gestão
      priceUnit: "mês",
      icon: TrendingUp,
      desc: "Campanhas locais no Google e Redes Sociais com Landing Page rápida."
    }
  ];

  const handleChannelToggle = (id: string) => {
    setSelectedChannels((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev; // keep at least one
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Cost calculation function
  const calculateCosts = () => {
    let breakdown: { name: string; cost: number; formula: string }[] = [];
    let total = 0;

    if (selectedChannels.includes("carro-som")) {
      const cost = 85 * carroSomHours * carroSomDays;
      breakdown.push({
        name: "Carro de Som Volante",
        cost,
        formula: `${carroSomHours}h/dia × ${carroSomDays} dias (a R$ 85,00/h)`
      });
      total += cost;
    }

    if (selectedChannels.includes("trio-eletrico")) {
      const cost = 280 * trioHours * trioDays;
      breakdown.push({
        name: "Trio Elétrico de Grande Porte",
        cost,
        formula: `${trioHours}h/evento × ${trioDays} dias (a R$ 280,00/h)`
      });
      total += cost;
    }

    if (selectedChannels.includes("radio-interna")) {
      const cost = 290 * radioStores;
      breakdown.push({
        name: "Rádio Interna Corporativa",
        cost,
        formula: `${radioStores} filial(is) (a R$ 290,00/mês)`
      });
      total += cost;
    }

    if (selectedChannels.includes("locucao-spot")) {
      const cost = 130 * spotQuantity;
      breakdown.push({
        name: "Gravação de Spot Comercial",
        cost,
        formula: `${spotQuantity} spot(s) produzido(s) (a R$ 130,00/cada)`
      });
      total += cost;
    }

    if (selectedChannels.includes("panfletagem")) {
      const cost = 95 * panfletagemPromoters * panfletagemDays;
      breakdown.push({
        name: "Panfletagem & Ativação de Rua",
        cost,
        formula: `${panfletagemPromoters} promotores × ${panfletagemDays} dias (a R$ 95,00/dia)`
      });
      total += cost;
    }

    if (selectedChannels.includes("trafego-pago")) {
      const cost = 600 + (digitalBudget * 30); // 600 fee + daily spend over 30 days
      breakdown.push({
        name: "Anúncios Digitais & Tráfego",
        cost,
        formula: `Taxa Gestão (R$ 600,00) + R$ ${digitalBudget}/dia de anúncios do Google/Meta`
      });
      total += cost;
    }

    // Dynamic Multi-channel Combo Discount (10% if 3 or more channels are chosen)
    const discountActive = selectedChannels.length >= 3;
    const discountAmount = discountActive ? total * 0.10 : 0;
    const finalTotal = total - discountAmount;

    return {
      breakdown,
      subtotal: total,
      discountActive,
      discountAmount,
      finalTotal
    };
  };

  const results = calculateCosts();

  // Trigger WhatsApp custom pre-filled checkout link
  const handleWhatsappCheckout = () => {
    let summaryText = `*SIMULAÇÃO DE ORÇAMENTO - AÇÃO TOTAL PROPAGANDA*\n\n`;
    summaryText += `Olá! Montei um pacote de estratégias de propaganda no simulador do site e gostaria de formalizar a proposta com um especialista. Segue meu plano:\n\n`;

    results.breakdown.forEach((item) => {
      summaryText += `• *${item.name}*: R$ ${item.cost.toFixed(2)} (${item.formula})\n`;
    });

    summaryText += `\n----------------------------------\n`;
    summaryText += `*Subtotal:* R$ ${results.subtotal.toFixed(2)}\n`;
    if (results.discountActive) {
      summaryText += `*Desconto Combo 360° (10%):* -R$ ${results.discountAmount.toFixed(2)}\n`;
    }
    summaryText += `*TOTAL ESTIMADO:* R$ ${results.finalTotal.toFixed(2)}\n`;
    summaryText += `----------------------------------\n\n`;
    summaryText += `Gostaria de fechar este pacote e combinar os detalhes de roteiro e datas. Aguardo contato!`;

    window.open(`https://wa.me/5562991962033?text=${encodeURIComponent(summaryText)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-midnight-carbon">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-yellow/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-white/2 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-4">
            <Calculator className="w-3.5 h-3.5" />
            SIMULADOR DE INVESTIMENTO DIGITAL
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
            Simulador de Proposta Inteligente
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm font-light">
            Monte o plano perfeito para o seu segmento e veja uma estimativa de custos imediata. Desconto automático de 10% na contratação de 3 ou mais canais.
          </p>
        </div>

        {/* Step progress bar indicators */}
        <div className="flex items-center justify-between mb-12 max-w-md mx-auto relative px-4" id="wizard-progress-bar">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -translate-y-1/2 z-0" />
          
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                currentStep === step
                  ? "bg-brand-yellow text-black ring-4 ring-brand-yellow/20"
                  : currentStep > step
                  ? "bg-emerald-500 text-white"
                  : "bg-neutral-800 text-slate-500"
              }`}
            >
              {currentStep > step ? <Check className="w-4.5 h-4.5 stroke-[3]" /> : step}
            </div>
          ))}
        </div>

        {/* Dynamic Wizard Steps Panels */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 overflow-hidden relative min-h-[460px] flex flex-col justify-between shadow-2xl">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: CHOOSE CHANNELS */}
            {currentStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl font-bold text-white mb-2 font-display">Passo 1: Selecione os Canais de Divulgação</h2>
                  <p className="text-xs text-slate-400">
                    Marque os canais de propaganda que você quer integrar no seu plano comercial. Você pode selecionar múltiplos!
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {channelsList.map((channel) => {
                    const Icon = channel.icon;
                    const isChecked = selectedChannels.includes(channel.id);
                    return (
                      <button
                        key={channel.id}
                        onClick={() => handleChannelToggle(channel.id)}
                        className={`text-left p-4 rounded-2xl transition-all border flex items-start gap-4 cursor-pointer group ${
                          isChecked
                            ? "bg-brand-yellow/5 border-brand-yellow/60 text-white"
                            : "bg-black/40 border-white/5 text-slate-300 hover:border-white/15"
                        }`}
                      >
                        {/* Fake checkbox block */}
                        <div className={`w-5 h-5 rounded border mt-1 flex items-center justify-center shrink-0 ${
                          isChecked ? "bg-brand-yellow border-transparent text-black" : "border-white/20"
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5">
                            <Icon className={`w-4 h-4 ${isChecked ? "text-brand-yellow" : "text-slate-500"}`} />
                            <h4 className="text-sm font-bold">{channel.name}</h4>
                          </div>
                          <p className="text-[10px] text-slate-400 mt-1.5 leading-relaxed font-light">{channel.desc}</p>
                          <span className="text-[10px] font-mono text-brand-yellow font-bold mt-2.5 inline-block">
                            A partir de R$ {channel.basePrice.toFixed(2)} / {channel.priceUnit}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Continue button block */}
                <div className="flex justify-end pt-6 border-t border-white/5 mt-6">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 bg-brand-yellow hover:bg-[#ffd633] text-black font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-brand-yellow/10 flex items-center gap-1.5 cursor-pointer"
                  >
                    Próximo Passo
                    <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: DETAILS CONFIGURATIONS */}
            {currentStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl font-bold text-white mb-2 font-display">Passo 2: Configure os Detalhes do Plano</h2>
                  <p className="text-xs text-slate-400">
                    Ajuste as horas, dias, filiais ou investimento diário dos canais selecionados para calcular o orçamento.
                  </p>
                </div>

                <div className="space-y-6 max-h-[340px] overflow-y-auto pr-2" id="quote-sliders-container">
                  
                  {/* Carro de som parameters */}
                  {selectedChannels.includes("carro-som") && (
                    <div className="bg-black/30 p-5 rounded-2xl border border-white/5 space-y-4">
                      <h4 className="text-xs font-bold text-brand-yellow flex items-center gap-2 font-display">
                        <Megaphone className="w-4 h-4 text-brand-yellow" /> Carro de Som Volante
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                          <label className="text-[11px] text-slate-400 flex justify-between font-mono">
                            <span>Horas por Dia:</span>
                            <span className="text-white font-bold">{carroSomHours} horas</span>
                          </label>
                          <input
                            type="range"
                            min="3"
                            max="8"
                            value={carroSomHours}
                            onChange={(e) => setCarroSomHours(Number(e.target.value))}
                            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[11px] text-slate-400 flex justify-between font-mono">
                            <span>Quantidade de Dias:</span>
                            <span className="text-white font-bold">{carroSomDays} dias</span>
                          </label>
                          <input
                            type="range"
                            min="1"
                            max="30"
                            value={carroSomDays}
                            onChange={(e) => setCarroSomDays(Number(e.target.value))}
                            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Trio Eletrico parameters */}
                  {selectedChannels.includes("trio-eletrico") && (
                    <div className="bg-black/30 p-5 rounded-2xl border border-white/5 space-y-4">
                      <h4 className="text-xs font-bold text-brand-yellow flex items-center gap-2 font-display">
                        <Truck className="w-4 h-4 text-brand-yellow" /> Trio Elétrico de Grande Porte
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                          <label className="text-[11px] text-slate-400 flex justify-between font-mono">
                            <span>Horas por Evento:</span>
                            <span className="text-white font-bold">{trioHours} horas</span>
                          </label>
                          <input
                            type="range"
                            min="2"
                            max="12"
                            value={trioHours}
                            onChange={(e) => setTrioHours(Number(e.target.value))}
                            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[11px] text-slate-400 flex justify-between font-mono">
                            <span>Dias de Evento:</span>
                            <span className="text-white font-bold">{trioDays} dias</span>
                          </label>
                          <input
                            type="range"
                            min="1"
                            max="5"
                            value={trioDays}
                            onChange={(e) => setTrioDays(Number(e.target.value))}
                            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Radio Interna parameters */}
                  {selectedChannels.includes("radio-interna") && (
                    <div className="bg-black/30 p-5 rounded-2xl border border-white/5 space-y-4">
                      <h4 className="text-xs font-bold text-brand-yellow flex items-center gap-2 font-display">
                        <Radio className="w-4 h-4 text-brand-yellow" /> Rádio Interna (Rádio Ação)
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-[11px] text-slate-400 flex justify-between font-mono">
                          <span>Número de Filiais / Lojas:</span>
                          <span className="text-white font-bold">{radioStores} estabelecimento(s)</span>
                        </label>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={radioStores}
                          onChange={(e) => setRadioStores(Number(e.target.value))}
                          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
                        />
                      </div>
                    </div>
                  )}

                  {/* Spot recording parameters */}
                  {selectedChannels.includes("locucao-spot") && (
                    <div className="bg-black/30 p-5 rounded-2xl border border-white/5 space-y-4">
                      <h4 className="text-xs font-bold text-brand-yellow flex items-center gap-2 font-display">
                        <Mic className="w-4 h-4 text-brand-yellow" /> Gravação de Spot Comercial
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-[11px] text-slate-400 flex justify-between font-mono">
                          <span>Quantidade de Spots Diferentes:</span>
                          <span className="text-white font-bold">{spotQuantity} spot(s)</span>
                        </label>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={spotQuantity}
                          onChange={(e) => setSpotQuantity(Number(e.target.value))}
                          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
                        />
                      </div>
                    </div>
                  )}

                  {/* Panfletagem parameters */}
                  {selectedChannels.includes("panfletagem") && (
                    <div className="bg-black/30 p-5 rounded-2xl border border-white/5 space-y-4">
                      <h4 className="text-xs font-bold text-brand-yellow flex items-center gap-2 font-display">
                        <Users className="w-4 h-4 text-brand-yellow" /> Panfletagem & Blitz Comercial
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                          <label className="text-[11px] text-slate-400 flex justify-between font-mono">
                            <span>Quantidade de Promotores:</span>
                            <span className="text-white font-bold">{panfletagemPromoters} promotores</span>
                          </label>
                          <input
                            type="range"
                            min="1"
                            max="10"
                            value={panfletagemPromoters}
                            onChange={(e) => setPanfletagemPromoters(Number(e.target.value))}
                            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[11px] text-slate-400 flex justify-between font-mono">
                            <span>Dias de Ativação:</span>
                            <span className="text-white font-bold">{panfletagemDays} dias</span>
                          </label>
                          <input
                            type="range"
                            min="1"
                            max="15"
                            value={panfletagemDays}
                            onChange={(e) => setPanfletagemDays(Number(e.target.value))}
                            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Paid traffic parameters */}
                  {selectedChannels.includes("trafego-pago") && (
                    <div className="bg-black/30 p-5 rounded-2xl border border-white/5 space-y-4">
                      <h4 className="text-xs font-bold text-brand-yellow flex items-center gap-2 font-display">
                        <TrendingUp className="w-4 h-4 text-brand-yellow" /> Anúncios Digitais (Tráfego Pago)
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-[11px] text-slate-400 flex justify-between font-mono">
                          <span>Verba de Anúncios para o Google/Instagram:</span>
                          <span className="text-white font-bold">R$ {digitalBudget.toFixed(2)} / dia</span>
                        </label>
                        <input
                          type="range"
                          min="15"
                          max="150"
                          step="5"
                          value={digitalBudget}
                          onChange={(e) => setDigitalBudget(Number(e.target.value))}
                          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
                        />
                        <span className="text-[10px] text-slate-500 block mt-1">
                          Sugerimos pelo menos R$ 20,00 por dia para ter boa visibilidade comercial em Anápolis ou Aracaju. (Incluso taxa de gestão fixa de R$ 600,00/mês).
                        </span>
                      </div>
                    </div>
                  )}

                </div>

                {/* Bottom navigation buttons */}
                <div className="flex justify-between pt-6 border-t border-white/5 mt-6">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-5 py-3 bg-white/5 border border-white/10 text-slate-300 font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="px-6 py-3 bg-brand-yellow hover:bg-[#ffd633] text-black font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-brand-yellow/10 flex items-center gap-1.5 cursor-pointer"
                  >
                    Calcular Proposta
                    <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: RESULTS SUMMARY */}
            {currentStep === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl font-bold text-white mb-2 font-display flex items-center gap-2">
                    <FileText className="w-5 h-5 text-brand-yellow" /> Resumo da sua Proposta Comercial
                  </h2>
                  <p className="text-xs text-slate-400">
                    Abaixo está o demonstrativo de investimento com base nas suas configurações.
                  </p>
                </div>

                {/* Pricing Table Invoice style */}
                <div className="bg-black/40 rounded-2xl border border-white/10 p-5 space-y-4" id="invoice-breakdown-box">
                  <div className="max-h-[200px] overflow-y-auto space-y-3 pr-2">
                    {results.breakdown.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start border-b border-white/5 pb-3 last:border-0 last:pb-0">
                        <div>
                          <p className="text-xs font-bold text-white">{item.name}</p>
                          <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">{item.formula}</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-200">R$ {item.cost.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  {/* Summary Totals */}
                  <div className="border-t border-white/10 pt-4 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>Subtotal estimado:</span>
                      <span className="font-mono">R$ {results.subtotal.toFixed(2)}</span>
                    </div>

                    {results.discountActive && (
                      <div className="flex justify-between text-emerald-400 font-semibold bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/10">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          Combo Ação 360° (Desconto 10%):
                        </span>
                        <span className="font-mono">- R$ {results.discountAmount.toFixed(2)}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-base font-black text-white border-t border-white/5 pt-3">
                      <span>Investimento Total Estimado:</span>
                      <span className="text-brand-yellow font-display">R$ {results.finalTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Call to actions to close the deal */}
                <div className="flex flex-col sm:flex-row gap-4 border-t border-white/5 pt-6 mt-6">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-5 py-3 bg-white/5 border border-white/10 text-slate-300 font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Ajustar Detalhes
                  </button>

                  <button
                    onClick={handleWhatsappCheckout}
                    className="flex-1 py-4 bg-brand-yellow hover:bg-[#ffd633] text-black font-extrabold uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-brand-yellow/10 hover:shadow-brand-yellow/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4.5 h-4.5 fill-current text-black" />
                    Enviar Proposta via WhatsApp
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
