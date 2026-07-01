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
  FileText,
} from "lucide-react";
import { SEGMENT_OPTIONS, formatBrazilianPhone, resolveSegment } from "../utils/formHelpers";

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
  const [carroSomHours, setCarroSomHours] = useState(4);
  const [carroSomDays, setCarroSomDays] = useState(5);
  const [trioHours, setTrioHours] = useState(4);
  const [trioDays, setTrioDays] = useState(1);
  const [radioStores, setRadioStores] = useState(1);
  const [spotQuantity, setSpotQuantity] = useState(1);
  const [panfletagemPromoters, setPanfletagemPromoters] = useState(2);
  const [panfletagemDays, setPanfletagemDays] = useState(3);
  const [digitalBudget, setDigitalBudget] = useState(30);
  const [leadData, setLeadData] = useState({
    nome: "",
    whatsapp: "",
    cidade: "",
    segmento: "",
    outroSegmento: "",
  });

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

  const channelsList: ServiceChannel[] = [
    {
      id: "carro-som",
      name: "Carro de Som",
      category: "Rua",
      basePrice: 85,
      priceUnit: "hora",
      icon: Megaphone,
      desc: "Divulgação nos bairros com áudio comercial, rota planejada e foco em movimento para a loja.",
    },
    {
      id: "trio-eletrico",
      name: "Trio Elétrico",
      category: "Eventos",
      basePrice: 280,
      priceUnit: "hora",
      icon: Truck,
      desc: "Estrutura sonora para inaugurações, carreatas, eventos comerciais e grandes ações externas.",
    },
    {
      id: "radio-interna",
      name: "Rádio Interna",
      category: "PDV",
      basePrice: 290,
      priceUnit: "mês por loja",
      icon: Radio,
      desc: "Ofertas e avisos tocando dentro da loja para influenciar o cliente enquanto ele compra.",
    },
    {
      id: "locucao-spot",
      name: "Spot Comercial",
      category: "Áudio",
      basePrice: 130,
      priceUnit: "gravação",
      icon: Mic,
      desc: "Texto e locução profissional para carro de som, rádio interna, loja, redes sociais e WhatsApp.",
    },
    {
      id: "panfletagem",
      name: "Panfletagem e Blitz",
      category: "Rua",
      basePrice: 95,
      priceUnit: "promotor/dia",
      icon: Users,
      desc: "Promotores em pontos estratégicos para entregar sua oferta e reforçar a presença da marca.",
    },
    {
      id: "trafego-pago",
      name: "Anúncios Digitais",
      category: "Digital",
      basePrice: 600,
      priceUnit: "mês",
      icon: TrendingUp,
      desc: "Campanhas locais no Google, Instagram e Facebook para gerar atendimento no WhatsApp.",
    },
  ];

  const handleChannelToggle = (id: string) => {
    setSelectedChannels((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev;
        return prev.filter((item) => item !== id);
      }

      return [...prev, id];
    });
  };

  const handleLeadDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLeadData((prev) => ({
      ...prev,
      [name]: name === "whatsapp" ? formatBrazilianPhone(value) : value,
      ...(name === "segmento" && value !== "Outro" ? { outroSegmento: "" } : {}),
    }));
  };

  const calculateCosts = () => {
    let breakdown: { name: string; cost: number; formula: string }[] = [];
    let total = 0;

    if (selectedChannels.includes("carro-som")) {
      const cost = 85 * carroSomHours * carroSomDays;
      breakdown.push({
        name: "Carro de Som",
        cost,
        formula: `${carroSomHours}h/dia × ${carroSomDays} dias`,
      });
      total += cost;
    }

    if (selectedChannels.includes("trio-eletrico")) {
      const cost = 280 * trioHours * trioDays;
      breakdown.push({
        name: "Trio Elétrico",
        cost,
        formula: `${trioHours}h/evento × ${trioDays} dia(s)`,
      });
      total += cost;
    }

    if (selectedChannels.includes("radio-interna")) {
      const cost = 290 * radioStores;
      breakdown.push({
        name: "Rádio Interna",
        cost,
        formula: `${radioStores} loja(s)`,
      });
      total += cost;
    }

    if (selectedChannels.includes("locucao-spot")) {
      const cost = 130 * spotQuantity;
      breakdown.push({
        name: "Spot Comercial",
        cost,
        formula: `${spotQuantity} spot(s) produzido(s)`,
      });
      total += cost;
    }

    if (selectedChannels.includes("panfletagem")) {
      const cost = 95 * panfletagemPromoters * panfletagemDays;
      breakdown.push({
        name: "Panfletagem e Blitz",
        cost,
        formula: `${panfletagemPromoters} promotor(es) × ${panfletagemDays} dia(s)`,
      });
      total += cost;
    }

    if (selectedChannels.includes("trafego-pago")) {
      const cost = 600 + digitalBudget * 30;
      breakdown.push({
        name: "Anúncios Digitais",
        cost,
        formula: `Gestão + ${formatCurrency(digitalBudget)}/dia de mídia`,
      });
      total += cost;
    }

    const discountActive = selectedChannels.length >= 3;
    const discountAmount = discountActive ? total * 0.1 : 0;
    const finalTotal = total - discountAmount;

    return { breakdown, subtotal: total, discountActive, discountAmount, finalTotal };
  };

  const results = calculateCosts();

  const handleWhatsappCheckout = () => {
    const nome = leadData.nome.trim() || "Não informado";
    const whatsapp = leadData.whatsapp.trim() || "Não informado";
    const cidade = leadData.cidade.trim() || "Não informado";
    const segmento = resolveSegment(leadData.segmento, leadData.outroSegmento);

    let summaryText = `*ORÇAMENTO PELO SITE - AÇÃO TOTAL PROPAGANDA*\n\n`;
    summaryText += `Olá! Montei uma estimativa no site e quero falar com a equipe para ajustar a campanha.\n\n`;
    summaryText += `*DADOS PARA CONTATO*\n`;
    summaryText += `• *Nome:* ${nome}\n`;
    summaryText += `• *WhatsApp:* ${whatsapp}\n`;
    summaryText += `• *Cidade:* ${cidade}\n`;
    summaryText += `• *Segmento:* ${segmento}\n\n`;
    summaryText += `*SERVIÇOS SELECIONADOS*\n`;

    results.breakdown.forEach((item) => {
      summaryText += `• *${item.name}*: ${formatCurrency(item.cost)} (${item.formula})\n`;
    });

    summaryText += `\n----------------------------------\n`;
    summaryText += `*Subtotal estimado:* ${formatCurrency(results.subtotal)}\n`;
    if (results.discountActive) {
      summaryText += `*Desconto por campanha combinada:* -${formatCurrency(results.discountAmount)}\n`;
    }
    summaryText += `*TOTAL ESTIMADO:* ${formatCurrency(results.finalTotal)}\n`;
    summaryText += `----------------------------------\n\n`;
    summaryText += `Gostaria de receber atendimento e confirmar datas, rota, melhores horários e formato final da campanha.`;

    window.open(`https://wa.me/5562991962033?text=${encodeURIComponent(summaryText)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-midnight-carbon">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-yellow/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-white/2 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-4">
            <Calculator className="w-3.5 h-3.5" />
            ORÇAMENTO RÁPIDO PELO WHATSAPP
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
            Monte uma estimativa e envie para atendimento
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm font-light">
            Escolha os serviços, ajuste o tamanho da ação e envie tudo pelo WhatsApp para nossa equipe montar a proposta final com datas, rotas e detalhes.
          </p>
        </div>

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

        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 overflow-hidden relative min-h-[460px] flex flex-col justify-between shadow-2xl">
          <AnimatePresence mode="wait">
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
                  <h2 className="text-xl font-bold text-white mb-2 font-display">1. Escolha como quer divulgar</h2>
                  <p className="text-xs text-slate-400">
                    Marque uma ou mais opções. Para uma campanha mais forte, combine rua, ponto de venda e digital.
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
                          <span className="text-[10px] font-bold text-brand-yellow mt-2.5 inline-block">
                            Estimativa a partir de {formatCurrency(channel.basePrice)} / {channel.priceUnit}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-end pt-6 border-t border-white/5 mt-6">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 bg-brand-yellow hover:bg-[#ffd633] text-black font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-brand-yellow/10 flex items-center gap-1.5 cursor-pointer"
                  >
                    Continuar
                    <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
                  </button>
                </div>
              </motion.div>
            )}

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
                  <h2 className="text-xl font-bold text-white mb-2 font-display">2. Ajuste o tamanho da campanha</h2>
                  <p className="text-xs text-slate-400">
                    Estes valores são estimativos. A proposta final será confirmada no atendimento.
                  </p>
                </div>

                <div className="space-y-6 max-h-[340px] overflow-y-auto pr-2" id="quote-sliders-container">
                  {selectedChannels.includes("carro-som") && (
                    <SliderCard title="Carro de Som" icon={<Megaphone className="w-4 h-4 text-brand-yellow" />}>
                      <RangeInput label="Horas por dia" value={`${carroSomHours} horas`} min="3" max="8" current={carroSomHours} onChange={setCarroSomHours} />
                      <RangeInput label="Quantidade de dias" value={`${carroSomDays} dias`} min="1" max="30" current={carroSomDays} onChange={setCarroSomDays} />
                    </SliderCard>
                  )}

                  {selectedChannels.includes("trio-eletrico") && (
                    <SliderCard title="Trio Elétrico" icon={<Truck className="w-4 h-4 text-brand-yellow" />}>
                      <RangeInput label="Horas do evento" value={`${trioHours} horas`} min="2" max="12" current={trioHours} onChange={setTrioHours} />
                      <RangeInput label="Dias de evento" value={`${trioDays} dia(s)`} min="1" max="5" current={trioDays} onChange={setTrioDays} />
                    </SliderCard>
                  )}

                  {selectedChannels.includes("radio-interna") && (
                    <SliderCard title="Rádio Interna" icon={<Radio className="w-4 h-4 text-brand-yellow" />}>
                      <RangeInput label="Número de lojas" value={`${radioStores} loja(s)`} min="1" max="10" current={radioStores} onChange={setRadioStores} />
                    </SliderCard>
                  )}

                  {selectedChannels.includes("locucao-spot") && (
                    <SliderCard title="Spot Comercial" icon={<Mic className="w-4 h-4 text-brand-yellow" />}>
                      <RangeInput label="Quantidade de spots" value={`${spotQuantity} spot(s)`} min="1" max="10" current={spotQuantity} onChange={setSpotQuantity} />
                    </SliderCard>
                  )}

                  {selectedChannels.includes("panfletagem") && (
                    <SliderCard title="Panfletagem e Blitz" icon={<Users className="w-4 h-4 text-brand-yellow" />}>
                      <RangeInput label="Promotores" value={`${panfletagemPromoters} promotor(es)`} min="1" max="10" current={panfletagemPromoters} onChange={setPanfletagemPromoters} />
                      <RangeInput label="Dias de ação" value={`${panfletagemDays} dia(s)`} min="1" max="15" current={panfletagemDays} onChange={setPanfletagemDays} />
                    </SliderCard>
                  )}

                  {selectedChannels.includes("trafego-pago") && (
                    <SliderCard title="Anúncios Digitais" icon={<TrendingUp className="w-4 h-4 text-brand-yellow" />}>
                      <RangeInput label="Verba diária de mídia" value={`${formatCurrency(digitalBudget)} / dia`} min="15" max="150" step="5" current={digitalBudget} onChange={setDigitalBudget} />
                      <span className="text-[10px] text-slate-500 block mt-1">
                        A verba de mídia é ajustável conforme cidade, objetivo e concorrência local.
                      </span>
                    </SliderCard>
                  )}
                </div>

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
                    Ver estimativa
                    <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
                  </button>
                </div>
              </motion.div>
            )}

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
                    <FileText className="w-5 h-5 text-brand-yellow" /> Resumo para atendimento
                  </h2>
                  <p className="text-xs text-slate-400">
                    Complete os dados abaixo para nossa equipe saber com quem falar, em qual cidade atender e qual é o segmento da campanha.
                  </p>
                </div>

                <div className="bg-black/30 rounded-2xl border border-white/10 p-5 space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1 font-display">Dados para contato</h3>
                    <p className="text-[11px] text-slate-500">Essas informações serão incluídas automaticamente na mensagem enviada pelo WhatsApp.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <QuoteContactInput label="Nome para contato" name="nome" value={leadData.nome} onChange={handleLeadDataChange} placeholder="Ex: João Silva" />
                    <QuoteContactInput label="WhatsApp" name="whatsapp" type="tel" value={leadData.whatsapp} onChange={handleLeadDataChange} placeholder="Ex: (62) 99999-9999" inputMode="tel" />
                    <QuoteContactInput label="Cidade" name="cidade" value={leadData.cidade} onChange={handleLeadDataChange} placeholder="Ex: Anápolis" />
                    <QuoteSegmentSelect value={leadData.segmento} onChange={handleLeadDataChange} />
                    {leadData.segmento === "Outro" && (
                      <div className="sm:col-span-2">
                        <QuoteContactInput label="Informe o segmento" name="outroSegmento" value={leadData.outroSegmento} onChange={handleLeadDataChange} placeholder="Ex: Pet shop, distribuidora, clínica veterinária..." />
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-black/40 rounded-2xl border border-white/10 p-5 space-y-4" id="invoice-breakdown-box">
                  <div className="max-h-[200px] overflow-y-auto space-y-3 pr-2">
                    {results.breakdown.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start border-b border-white/5 pb-3 last:border-0 last:pb-0">
                        <div>
                          <p className="text-xs font-bold text-white">{item.name}</p>
                          <span className="text-[10px] text-slate-500 mt-0.5 block">{item.formula}</span>
                        </div>
                        <span className="text-xs font-bold text-slate-200">{formatCurrency(item.cost)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-4 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>Subtotal estimado:</span>
                      <span>{formatCurrency(results.subtotal)}</span>
                    </div>

                    {results.discountActive && (
                      <div className="flex justify-between text-emerald-400 font-semibold bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/10">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          Campanha combinada:
                        </span>
                        <span>- {formatCurrency(results.discountAmount)}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-base font-black text-white border-t border-white/5 pt-3">
                      <span>Total estimado:</span>
                      <span className="text-brand-yellow font-display">{formatCurrency(results.finalTotal)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 border-t border-white/5 pt-6 mt-6">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-5 py-3 bg-white/5 border border-white/10 text-slate-300 font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Ajustar
                  </button>

                  <button
                    onClick={handleWhatsappCheckout}
                    className="flex-1 py-4 bg-brand-yellow hover:bg-[#ffd633] text-black font-extrabold uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-brand-yellow/10 hover:shadow-brand-yellow/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4.5 h-4.5 fill-current text-black" />
                    Enviar orçamento pelo WhatsApp
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

interface SliderCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function SliderCard({ title, icon, children }: SliderCardProps) {
  return (
    <div className="bg-black/30 p-5 rounded-2xl border border-white/5 space-y-4">
      <h4 className="text-xs font-bold text-brand-yellow flex items-center gap-2 font-display">
        {icon} {title}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {children}
      </div>
    </div>
  );
}

interface RangeInputProps {
  label: string;
  value: string;
  min: string;
  max: string;
  current: number;
  onChange: (value: number) => void;
  step?: string;
}

function RangeInput({ label, value, min, max, current, onChange, step }: RangeInputProps) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] text-slate-400 flex justify-between">
        <span>{label}:</span>
        <span className="text-white font-bold">{value}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
      />
    </div>
  );
}

interface QuoteContactInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}

function QuoteContactInput({ label, name, value, onChange, placeholder, type = "text", inputMode }: QuoteContactInputProps) {
  return (
    <div className="flex flex-col space-y-1.5">
      <label htmlFor={`quote-${name}`} className="text-[11px] font-semibold text-slate-300">
        {label}
      </label>
      <input
        id={`quote-${name}`}
        name={name}
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300"
      />
    </div>
  );
}

interface QuoteSegmentSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function QuoteSegmentSelect({ value, onChange }: QuoteSegmentSelectProps) {
  return (
    <div className="flex flex-col space-y-1.5">
      <label htmlFor="quote-segmento" className="text-[11px] font-semibold text-slate-300">
        Segmento
      </label>
      <select
        id="quote-segmento"
        name="segmento"
        value={value}
        onChange={onChange}
        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300"
      >
        <option value="">Selecione o segmento</option>
        {SEGMENT_OPTIONS.map((segment) => (
          <option key={segment} value={segment} className="bg-[#0B0B0E] text-white">
            {segment}
          </option>
        ))}
      </select>
    </div>
  );
}
