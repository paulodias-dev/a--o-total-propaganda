import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { SEGMENT_OPTIONS, formatBrazilianPhone, resolveSegment } from "../utils/formHelpers";

interface ContactFooterProps {
  onNavigate?: (page: string) => void;
}

export default function ContactFooter({ onNavigate }: ContactFooterProps) {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    segmento: "",
    outroSegmento: "",
    cidade: "",
    mensagem: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phone = "(62) 99196-2033";
  const rawPhone = "5562991962033";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "telefone" ? formatBrazilianPhone(value) : value,
      ...(name === "segmento" && value !== "Outro" ? { outroSegmento: "" } : {}),
    }));
  };

  const getWhatsappPrefilledLink = () => {
    const segmento = resolveSegment(formData.segmento, formData.outroSegmento);
    const text = `Olá! Vi o site da Ação Total e quero divulgar minha empresa.\n\n` +
      `Nome: ${formData.nome}\n` +
      `WhatsApp: ${formData.telefone}\n` +
      `Cidade: ${formData.cidade || "Não informado"}\n` +
      `Segmento: ${segmento}\n` +
      `Mensagem: ${formData.mensagem || "Quero receber uma sugestão de campanha e orçamento."}`;

    return `https://wa.me/${rawPhone}?text=${encodeURIComponent(text)}`;
  };

  const persistLeadLocally = () => {
    const lead = {
      ...formData,
      segmentoResolvido: resolveSegment(formData.segmento, formData.outroSegmento),
      origem: "rodape",
      criadoEm: new Date().toISOString(),
    };

    try {
      const currentLeads = JSON.parse(localStorage.getItem("acao_total_leads") || "[]");
      localStorage.setItem("acao_total_leads", JSON.stringify([lead, ...currentLeads].slice(0, 30)));
    } catch {
      localStorage.setItem("acao_total_lead_backup", JSON.stringify(lead));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.telefone) return;

    setIsSubmitting(true);
    persistLeadLocally();

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(getWhatsappPrefilledLink(), "_blank", "noopener,noreferrer");
    }, 500);
  };

  const handleResetForm = () => {
    setFormData({ nome: "", telefone: "", segmento: "", outroSegmento: "", cidade: "", mensagem: "" });
    setIsSubmitted(false);
  };

  return (
    <footer id="contato" className="relative bg-[#060608] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-yellow/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-brand-yellow tracking-wider uppercase bg-brand-yellow/10 px-3 py-1 rounded-full border border-brand-yellow/15 inline-block mb-4">
                Atendimento pelo WhatsApp
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6 font-display">
                Pronto para divulgar sua empresa?
              </h2>
              <p className="text-slate-400 font-light mb-8 max-w-md leading-relaxed text-sm sm:text-base">
                Envie seus dados e fale com a equipe da Ação Total para planejar carro de som, panfletagem, rádio interna, locução, trio elétrico ou anúncios digitais.
              </p>

              <div className="space-y-6" id="institutional-info">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 uppercase tracking-widest">Área de atendimento</h4>
                    <p className="text-slate-200 text-sm font-semibold mt-0.5">Anápolis - GO | Aracaju - SE</p>
                    <span className="text-[11px] text-slate-500 font-light">Outras cidades sob consulta</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 uppercase tracking-widest">Contato direto</h4>
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

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 uppercase tracking-widest">Horário de atendimento</h4>
                    <p className="text-slate-200 text-sm font-semibold mt-0.5">Segunda a Sexta: 08:00 às 18:00</p>
                    <span className="text-[11px] text-slate-500 font-light">Sábado: 08:00 às 12:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block pt-8 border-t border-white/5 mt-8">
              <span className="text-xs text-slate-500">© {new Date().getFullYear()} AÇÃO TOTAL PROPAGANDA</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden" id="contact-form-container">
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
                      <h3 className="text-xl font-bold text-white mb-2">Pedir atendimento comercial</h3>
                      <p className="text-xs text-slate-400 mb-6">
                        Preencha e envie direto para o WhatsApp. Para captura permanente em CRM/planilha, conecte este formulário a um backend ou webhook.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField label="Seu nome" name="nome" value={formData.nome} onChange={handleInputChange} placeholder="Ex: João Silva" required />
                      <FormField label="WhatsApp / Celular" name="telefone" type="tel" inputMode="tel" value={formData.telefone} onChange={handleInputChange} placeholder="Ex: (62) 99999-9999" required />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField label="Cidade" name="cidade" value={formData.cidade} onChange={handleInputChange} placeholder="Ex: Anápolis" />
                      <SegmentSelect value={formData.segmento} onChange={handleInputChange} />
                    </div>

                    {formData.segmento === "Outro" && (
                      <FormField label="Informe o segmento" name="outroSegmento" value={formData.outroSegmento} onChange={handleInputChange} placeholder="Ex: Pet shop, distribuidora, clínica veterinária..." />
                    )}

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="mensagem" className="text-xs font-semibold text-slate-300">Detalhes da campanha</label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        rows={3}
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="Ex: Quero divulgar uma inauguração, oferta da semana ou ação de bairro..."
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300 resize-none"
                      />
                    </div>

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
                          Preparando WhatsApp...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-black stroke-[3]" />
                          Enviar para WhatsApp
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
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

                    <h3 className="text-2xl font-bold text-white mb-2">Mensagem pronta, {formData.nome}!</h3>
                    <p className="text-slate-400 text-sm max-w-md mx-auto mb-8">
                      Caso o WhatsApp não tenha aberto automaticamente, clique abaixo para enviar sua solicitação.
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
                        Enviar no WhatsApp
                        <ExternalLink className="w-3.5 h-3.5 text-black stroke-[3]" />
                      </motion.a>

                      <button
                        onClick={handleResetForm}
                        className="bg-white/5 hover:bg-white/10 text-slate-300 px-6 py-3.5 rounded-xl text-sm font-semibold border border-white/10 transition-colors cursor-pointer"
                      >
                        Enviar outra mensagem
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div className="flex flex-wrap justify-center gap-6">
            <span onClick={() => onNavigate?.("sobre")} className="hover:text-brand-yellow transition-colors cursor-pointer">Quem Somos</span>
            <span onClick={() => onNavigate?.("servicos")} className="hover:text-brand-yellow transition-colors cursor-pointer">Como Divulgar</span>
            <span onClick={() => onNavigate?.("demos")} className="hover:text-brand-yellow transition-colors cursor-pointer">Ouvir Exemplos</span>
            <span onClick={() => onNavigate?.("contato")} className="hover:text-brand-yellow transition-colors cursor-pointer">Atendimento</span>
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

        <div className="text-center mt-12 pt-6 border-t border-white/5 text-[10px] text-slate-600 font-light max-w-4xl mx-auto">
          Ação Total Propaganda em Anápolis GO e Aracaju SE • Carro de som, propaganda volante, trio elétrico, panfletagem, blitz promocional, promotores, rádio interna para supermercados, locução comercial, spot para carro de som e tráfego pago local.
        </div>
      </div>
    </footer>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  required?: boolean;
}

function FormField({ label, name, value, onChange, placeholder, type = "text", inputMode, required = false }: FormFieldProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-xs font-semibold text-slate-300">
        {label} {required && <span className="text-brand-yellow">*</span>}
      </label>
      <input
        type={type}
        inputMode={inputMode}
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300"
      />
    </div>
  );
}

interface SegmentSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function SegmentSelect({ value, onChange }: SegmentSelectProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="footer-segmento" className="text-xs font-semibold text-slate-300">Segmento da empresa</label>
      <select
        id="footer-segmento"
        name="segmento"
        value={value}
        onChange={onChange}
        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300"
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
