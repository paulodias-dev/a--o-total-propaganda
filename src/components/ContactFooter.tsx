import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageCircle
} from "lucide-react";

interface ContactFooterProps {
  onNavigate?: (page: string) => void;
}

export default function ContactFooter({ onNavigate }: ContactFooterProps) {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    segmento: "",
    mensagem: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phone = "(62) 99196-2033";
  const rawPhone = "5562991962033";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.telefone) return;

    setIsSubmitting(true);

    // Simulate database write or submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  // Compile form data to WhatsApp pre-filled link
  const getWhatsappPrefilledLink = () => {
    const text = `Olá! Me chamo *${formData.nome}*.\n` +
      `📞 Telefone: *${formData.telefone}*\n` +
      `🏢 Segmento: *${formData.segmento || "Não informado"}*\n` +
      `📝 Mensagem: ${formData.mensagem || "Gostaria de solicitar um orçamento para alavancar minha empresa com a Ação Total!"}`;
    
    return `https://wa.me/${rawPhone}?text=${encodeURIComponent(text)}`;
  };

  const handleResetForm = () => {
    setFormData({ nome: "", telefone: "", segmento: "", mensagem: "" });
    setIsSubmitted(false);
  };

  return (
    <footer id="contato" className="relative bg-[#060608] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Decorative Blur Ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-yellow/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid: Form on left/right and Info on other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Left Column: Local SEO & Information (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-brand-yellow tracking-wider uppercase bg-brand-yellow/10 px-3 py-1 rounded-full border border-brand-yellow/15 inline-block mb-4">
                Sabor Local e Presença
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6 font-display">
                Fale Conosco
              </h2>
              <p className="text-slate-400 font-light mb-8 max-w-md leading-relaxed text-sm sm:text-base">
                Pronto para destacar sua marca em Anápolis (Goiás), Aracaju (Sergipe) e regiões? Preencha o formulário para enviar sua solicitação e receba uma proposta exclusiva feita especialmente para as necessidades do seu negócio.
              </p>

              {/* Contact Information items */}
              <div className="space-y-6" id="institutional-info">
                
                {/* 1. Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest">Endereço</h4>
                    <p className="text-slate-200 text-sm font-semibold mt-0.5">
                      Anápolis - GO | Aracaju - SE
                    </p>
                    <span className="text-[11px] text-slate-500 font-light">Atendimento presencial sob agendamento</span>
                  </div>
                </div>

                {/* 2. Direct Call Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest">Contato Direto</h4>
                    <a
                      href={`https://wa.me/${rawPhone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-brand-yellow text-lg font-bold mt-0.5 inline-block transition-colors font-display"
                    >
                      {phone}
                    </a>
                    <div className="text-[11px] text-slate-500">Disponível para ligações e WhatsApp</div>
                  </div>
                </div>

                {/* 3. Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest">Horário de Atendimento</h4>
                    <p className="text-slate-200 text-sm font-semibold mt-0.5">
                      Segunda a Sexta: 08:00 às 18:00
                    </p>
                    <span className="text-[11px] text-slate-500 font-light">Sábados sob agendamento comercial</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Micro Badge */}
            <div className="hidden lg:block pt-8 border-t border-white/5 mt-8">
              <span className="text-xs text-slate-500 font-mono">
                © {new Date().getFullYear()} AÇÃO TOTAL PROPAGANDA
              </span>
            </div>
          </div>

          {/* Right Column: Premium Form (7 columns) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden" id="contact-form-container">
              {/* Soft decorative background spotlight */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-yellow/5 rounded-full blur-2xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Envie uma Proposta</h3>
                      <p className="text-xs text-slate-400 mb-6">
                        Analisamos o perfil do seu segmento e respondemos com um plano sob medida em até 24 horas úteis.
                      </p>
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name field */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="nome" className="text-xs font-semibold text-slate-300">
                          Seu Nome <span className="text-brand-yellow">*</span>
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          required
                          value={formData.nome}
                          onChange={handleInputChange}
                          placeholder="Ex: João Silva"
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300"
                        />
                      </div>

                      {/* Phone field */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="telefone" className="text-xs font-semibold text-slate-300">
                          WhatsApp / Celular <span className="text-brand-yellow">*</span>
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          name="telefone"
                          required
                          value={formData.telefone}
                          onChange={handleInputChange}
                          placeholder="Ex: (62) 99999-9999"
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300"
                        />
                      </div>

                    </div>

                    {/* Business Segment */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="segmento" className="text-xs font-semibold text-slate-300">
                        Segmento de sua Empresa
                      </label>
                      <input
                        type="text"
                        id="segmento"
                        name="segmento"
                        value={formData.segmento}
                        onChange={handleInputChange}
                        placeholder="Ex: Supermercado, Farmácia, Loja de Roupas, Franquia..."
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="mensagem" className="text-xs font-semibold text-slate-300">
                        Detalhes da Solicitação (Opcional)
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        rows={3}
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="Ex: Gostaria de contratar carro de som para infraestrutura ou tráfego..."
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-brand-yellow hover:bg-[#ffd633] disabled:bg-brand-yellow/60 text-black font-extrabold uppercase tracking-wider rounded-xl shadow-lg shadow-brand-yellow/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
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
                  // Interactive Success State redirecting to Whatsapp
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">Agradecemos o Contato, {formData.nome}!</h3>
                    <p className="text-slate-400 text-sm max-w-md mx-auto mb-8">
                      Sua solicitação de orçamento foi processada localmente com sucesso. Para acelerar o seu atendimento e falar diretamente com nossa equipe no WhatsApp, utilize o link abaixo:
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                      <motion.a
                        href={getWhatsappPrefilledLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-brand-yellow hover:bg-[#ffd633] text-black font-extrabold uppercase tracking-wider px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-yellow/10 cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4 fill-current text-black" />
                        Enviar via WhatsApp
                        <ExternalLink className="w-3.5 h-3.5 text-black stroke-[3]" />
                      </motion.a>

                      <button
                        onClick={handleResetForm}
                        className="bg-white/5 hover:bg-white/10 text-slate-300 px-6 py-3.5 rounded-xl text-sm font-semibold border border-white/10 transition-colors cursor-pointer"
                      >
                        Enviar outro formulário
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Footer Base bottom divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div className="flex flex-wrap justify-center gap-6">
            <span onClick={() => onNavigate?.("sobre")} className="hover:text-brand-yellow transition-colors cursor-pointer">Quem Somos</span>
            <span onClick={() => onNavigate?.("servicos")} className="hover:text-brand-yellow transition-colors cursor-pointer">Serviços</span>
            <span onClick={() => onNavigate?.("demos")} className="hover:text-brand-yellow transition-colors cursor-pointer">Showroom Áudio</span>
            <span onClick={() => onNavigate?.("contato")} className="hover:text-brand-yellow transition-colors cursor-pointer">Fale Conosco</span>
          </div>

          <div className="flex items-center gap-2 text-center" id="developer-credits">
            <span>Desenvolvido por</span>
            <a
              href="https://fluxosistemas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-yellow hover:text-white transition-colors font-semibold"
            >
              Paulo Roberto
            </a>
          </div>
        </div>

        {/* SEO copy text for Local Authority */}
        <div className="text-center mt-12 pt-6 border-t border-white/5 text-[10px] text-slate-600 font-light max-w-4xl mx-auto">
          Ação Total Propaganda Anápolis GO & Aracaju SE • Especialistas em Ativação de Marketing de Rua, Propaganda Volante c/ Trio-elétrico, Mini-Trio, Carros Pequenos com Som de Alta Qualidade, Promoções de Venda PDV, Rádio Corporativa Interna de Supermercados e Gestão de Performance de Tráfego Pago em Anápolis, Goiás e Aracaju, Sergipe.
        </div>

      </div>
    </footer>
  );
}
