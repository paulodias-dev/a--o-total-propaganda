import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  MessageCircle,
  ExternalLink
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function ContactView() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    segmento: "",
    mensagem: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const rawPhone = "5562991962033";
  const displayPhone = "(62) 99196-2033";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.telefone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const getWhatsappLink = () => {
    const text = `Olá! Me chamo *${formData.nome}*.\n` +
      `📞 Telefone: *${formData.telefone}*\n` +
      `🏢 Segmento: *${formData.segmento || "Não informado"}*\n` +
      `📝 Mensagem: ${formData.mensagem || "Gostaria de solicitar um orçamento para alavancar minha empresa com a Ação Total!"}`;
    return `https://wa.me/${rawPhone}?text=${encodeURIComponent(text)}`;
  };

  const handleReset = () => {
    setFormData({ nome: "", telefone: "", segmento: "", mensagem: "" });
    setIsSubmitted(false);
  };

  const faqs: FAQItem[] = [
    {
      question: "Como posso ter certeza de que o carro de som realmente percorreu meu bairro?",
      answer: "Transparência é nossa prioridade absoluta. Todos os nossos veículos de som são monitorados por rastreadores GPS de alta precisão em tempo real. Ao final de cada campanha de circulação, fornecemos um link ou relatório interativo com o mapa exato das rotas, velocidades e horas rodadas pelo motorista."
    },
    {
      question: "Vocês cobram pela redação e gravação do spot comercial?",
      answer: "Na contratação de qualquer plano semanal ou mensal de carro de som volante ou rádio corporativa, a redação do roteiro de ofertas e a gravação profissional do spot em estúdio são 100% gratuitas, inclusas como benefício de boas-vindas do pacote comercial."
    },
    {
      question: "Os veículos estão autorizados de acordo com as leis de silêncio municipais?",
      answer: "Sim! A Ação Total Propaganda trabalha estritamente em conformidade com as regras de vigilância ambiental e leis de controle de poluição sonora em Anápolis (Goiás) e Aracaju (Sergipe). Calibramos os alto-falantes para não ultrapassar os limites legais de decibéis e circulamos somente nos horários regulamentados, garantindo uma recepção amigável do público."
    },
    {
      question: "Como funciona a implantação da Rádio Ação no meu supermercado?",
      answer: "É extremamente simples e rápido. Instalamos nosso reprodutor digital inteligente conectado ao sistema de som existente do seu supermercado ou loja. Nossa plataforma gerencia a grade de músicas remotamente, insere vinhetas promocionais e de ofertas em horários programados automaticamente, e continua funcionando de forma off-line estável mesmo que sua internet caia temporariamente."
    },
    {
      question: "Quais segmentos comerciais têm melhor retorno com propaganda volante?",
      answer: "Supermercados, farmácias de manipulação, redes de óticas, lojas de confecções/roupas, açougues, distribuidoras de bebidas e concessionárias de veículos de varejo têm resultados espetaculares. Por ser uma mídia de impacto imediato na vizinhança geográfica, atrai o cliente para a porta no mesmo dia da circulação."
    }
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-midnight-carbon">
      {/* Glow ambient decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-brand-yellow/3 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Main Grid: Form / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-24">
          
          {/* Left Column: Info cards (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-yellow tracking-widest bg-brand-yellow/10 px-3 py-1 rounded-full border border-brand-yellow/15 inline-block mb-3 uppercase">
                  PRESENÇA E CONTATO
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-display">
                  Fale Direto Com Nossa Equipe
                </h1>
                <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                  Pronto para fazer sua marca ser ouvida por milhares de clientes em Anápolis (GO), Aracaju (SE) e regiões? Entre em contato agora e fale com um consultor comercial especialista.
                </p>
              </div>

              {/* Information Blocks */}
              <div className="space-y-4">
                
                {/* Phone Card */}
                <div className="bg-[#0B0B0E] p-4.5 rounded-2xl border border-white/5 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">WhatsApp & Ligações</h4>
                    <a
                      href={`https://wa.me/${rawPhone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-brand-yellow text-base font-bold mt-0.5 inline-block transition-colors font-display"
                    >
                      {displayPhone}
                    </a>
                    <p className="text-[10px] text-slate-500 font-light mt-0.5">Disponível de segunda a sábado</p>
                  </div>
                </div>

                {/* Address Card */}
                <div className="bg-[#0B0B0E] p-4.5 rounded-2xl border border-white/5 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Local Operacional</h4>
                    <p className="text-slate-200 text-xs font-semibold mt-0.5">
                      Anápolis - GO | Aracaju - SE
                    </p>
                    <p className="text-[10px] text-slate-500 font-light mt-0.5">Visitas presenciais mediante agendamento comercial</p>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-[#0B0B0E] p-4.5 rounded-2xl border border-white/5 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Atendimento Comercial</h4>
                    <p className="text-slate-200 text-xs font-semibold mt-0.5">
                      Segunda a Sexta: 08:00 às 18:00
                    </p>
                    <p className="text-[10px] text-slate-500 font-light mt-0.5">Sábados: 08:00 às 12:00</p>
                  </div>
                </div>

              </div>
            </div>

            {/* micro badge credits */}
            <div className="pt-6 border-t border-white/5 mt-6 hidden lg:block text-[10px] text-slate-500 font-mono">
              AÇÃO TOTAL PROPAGANDA • CNPJ REGISTRADO
            </div>
          </div>

          {/* Right Column: Premium Form (7 columns) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden" id="contact-view-form">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="view-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Solicitar Atendimento Exclusivo</h3>
                      <p className="text-[11px] text-slate-400">
                        Preencha os campos abaixo e entraremos em contato com uma proposta comercial formatada sob medida.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="nome" className="text-[11px] font-semibold text-slate-300">Seu Nome <span className="text-brand-yellow">*</span></label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          required
                          value={formData.nome}
                          onChange={handleInputChange}
                          placeholder="Ex: João"
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300"
                        />
                      </div>

                      {/* Phone input */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="telefone" className="text-[11px] font-semibold text-slate-300">WhatsApp / Celular <span className="text-brand-yellow">*</span></label>
                        <input
                          type="tel"
                          id="telefone"
                          name="telefone"
                          required
                          value={formData.telefone}
                          onChange={handleInputChange}
                          placeholder="Ex: (62) 99999-9999"
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Business Niche */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="segmento" className="text-[11px] font-semibold text-slate-300">Segmento Comercial</label>
                      <input
                        type="text"
                        id="segmento"
                        name="segmento"
                        value={formData.segmento}
                        onChange={handleInputChange}
                        placeholder="Ex: Supermercado, Farmácia, Loja de Roupas, E-commerce, Açougue..."
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="mensagem" className="text-[11px] font-semibold text-slate-300">Mensagem (Opcional)</label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        rows={3}
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="Ex: Gostaria de contratar carro de som por 15 dias para promoção ou saber preços da rádio interna..."
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 bg-brand-yellow hover:bg-[#ffd633] disabled:bg-brand-yellow/60 text-black font-extrabold uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-brand-yellow/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Processando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-black stroke-[3]" />
                          Enviar Proposta Comercial
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  // Success layout block
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">Solicitação Enviada!</h3>
                    <p className="text-slate-400 text-xs max-w-sm mx-auto mb-8">
                      Olá {formData.nome}, seu contato foi registrado no simulador local. Para obter retorno instantâneo do gerente, use o link do WhatsApp abaixo:
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                      <a
                        href={getWhatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-yellow hover:bg-[#ffd633] text-black font-extrabold uppercase tracking-wider px-6 py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-brand-yellow/10"
                      >
                        <MessageCircle className="w-4.5 h-4.5 fill-current text-black" />
                        Chamar no WhatsApp
                        <ExternalLink className="w-3.5 h-3.5 text-black stroke-[3]" />
                      </a>
                      <button
                        onClick={handleReset}
                        className="bg-white/5 hover:bg-white/10 text-slate-300 px-6 py-3 rounded-xl text-xs font-semibold border border-white/10 transition-colors"
                      >
                        Enviar Novamente
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Local Merchant Frequently Asked Questions (FAQ) section */}
        <div className="border-t border-white/5 pt-16">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">DÚVIDAS FREQUENTES (FAQ)</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 font-display">Respostas Rápidas para o Comerciante</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4" id="faq-accordions">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white/[0.01] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-white/[0.02]"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-2 font-display">
                      <HelpCircle className="w-4 h-4 text-brand-yellow shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-xs text-slate-400 leading-relaxed font-light border-t border-white/[0.03]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
