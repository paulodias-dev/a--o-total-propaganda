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
  ExternalLink,
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
    cidade: "",
    mensagem: "",
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

  const getWhatsappLink = () => {
    const text = `Olá! Vi o site da Ação Total e quero atendimento comercial.\n\n` +
      `Nome: ${formData.nome}\n` +
      `WhatsApp: ${formData.telefone}\n` +
      `Cidade: ${formData.cidade || "Não informado"}\n` +
      `Segmento: ${formData.segmento || "Não informado"}\n` +
      `Mensagem: ${formData.mensagem || "Quero divulgar minha empresa e receber uma sugestão de campanha."}`;
    return `https://wa.me/${rawPhone}?text=${encodeURIComponent(text)}`;
  };

  const persistLeadLocally = () => {
    const lead = {
      ...formData,
      origem: "pagina-contato",
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
      window.open(getWhatsappLink(), "_blank", "noopener,noreferrer");
    }, 500);
  };

  const handleReset = () => {
    setFormData({ nome: "", telefone: "", segmento: "", cidade: "", mensagem: "" });
    setIsSubmitted(false);
  };

  const faqs: FAQItem[] = [
    {
      question: "Como sei que o carro de som realmente circulou?",
      answer: "As campanhas podem ser acompanhadas com rota planejada e comprovação por GPS, conforme o formato contratado. Isso dá mais transparência para saber onde e por quanto tempo a divulgação rodou.",
    },
    {
      question: "Vocês fazem o texto e a gravação do anúncio?",
      answer: "Sim. Podemos produzir o texto comercial e gravar o spot com locução profissional, deixando o áudio pronto para carro de som, rádio interna, frente de loja, WhatsApp ou redes sociais.",
    },
    {
      question: "A propaganda de rua respeita as regras da cidade?",
      answer: "A operação é planejada considerando horários, rotas, intensidade sonora e regras locais aplicáveis. O objetivo é divulgar sua marca com impacto, sem transformar a ação em incômodo para a comunidade.",
    },
    {
      question: "Como funciona a rádio interna no supermercado ou loja?",
      answer: "A programação toca músicas, avisos, vinhetas e ofertas dentro do ponto de venda. Assim, o cliente escuta promoções enquanto compra e sua loja ganha um canal próprio de comunicação.",
    },
    {
      question: "Quais empresas costumam ter bom retorno?",
      answer: "Supermercados, farmácias, óticas, lojas de roupas, açougues, concessionárias, construtoras, escolas, cursos e negócios em inauguração costumam aproveitar bem campanhas de rua, panfletagem, rádio interna e anúncios locais.",
    },
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-midnight-carbon">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-brand-yellow/3 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-24">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold text-brand-yellow tracking-widest bg-brand-yellow/10 px-3 py-1 rounded-full border border-brand-yellow/15 inline-block mb-3 uppercase">
                  Atendimento comercial
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-display">
                  Fale com a Ação Total pelo WhatsApp
                </h1>
                <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                  Informe seus dados e envie a mensagem diretamente para nossa equipe. Quanto mais claro for o segmento e a cidade, mais rápida fica a sugestão de campanha.
                </p>
              </div>

              <div className="space-y-4">
                <InfoCard icon={<Phone className="w-5 h-5" />} title="WhatsApp e ligações">
                  <a
                    href={`https://wa.me/${rawPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-yellow text-base font-bold mt-0.5 inline-block transition-colors font-display"
                  >
                    {displayPhone}
                  </a>
                  <p className="text-[10px] text-slate-500 font-light mt-0.5">Atendimento comercial de segunda a sábado</p>
                </InfoCard>

                <InfoCard icon={<MapPin className="w-5 h-5" />} title="Cidades atendidas">
                  <p className="text-slate-200 text-xs font-semibold mt-0.5">Anápolis - GO | Aracaju - SE</p>
                  <p className="text-[10px] text-slate-500 font-light mt-0.5">Outras cidades sob consulta de operação e frota</p>
                </InfoCard>

                <InfoCard icon={<Clock className="w-5 h-5" />} title="Horário de atendimento">
                  <p className="text-slate-200 text-xs font-semibold mt-0.5">Segunda a Sexta: 08:00 às 18:00</p>
                  <p className="text-[10px] text-slate-500 font-light mt-0.5">Sábados: 08:00 às 12:00</p>
                </InfoCard>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6 hidden lg:block text-[10px] text-slate-500">
              AÇÃO TOTAL PROPAGANDA • ATENDIMENTO PARA CAMPANHAS LOCAIS
            </div>
          </div>

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
                      <h3 className="text-lg font-bold text-white mb-1">Solicitar atendimento agora</h3>
                      <p className="text-[11px] text-slate-400">
                        O formulário abre o WhatsApp com sua mensagem pronta. Seus dados não substituem um CRM/backend; eles são usados para facilitar o contato imediato.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormInput label="Seu nome" name="nome" value={formData.nome} onChange={handleInputChange} required placeholder="Ex: João" />
                      <FormInput label="WhatsApp / Celular" name="telefone" type="tel" value={formData.telefone} onChange={handleInputChange} required placeholder="Ex: (62) 99999-9999" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormInput label="Cidade" name="cidade" value={formData.cidade} onChange={handleInputChange} placeholder="Ex: Anápolis" />
                      <FormInput label="Segmento" name="segmento" value={formData.segmento} onChange={handleInputChange} placeholder="Ex: Supermercado, farmácia, loja..." />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="mensagem" className="text-[11px] font-semibold text-slate-300">Mensagem</label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        rows={3}
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="Ex: Quero divulgar uma promoção por 15 dias com carro de som e panfletagem..."
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300 resize-none"
                      />
                    </div>

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
                          Preparando WhatsApp...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-black stroke-[3]" />
                          Enviar para o WhatsApp
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
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

                    <h3 className="text-xl font-bold text-white mb-2">WhatsApp preparado!</h3>
                    <p className="text-slate-400 text-xs max-w-sm mx-auto mb-8">
                      Caso a janela não tenha aberto automaticamente, clique no botão abaixo para enviar sua mensagem.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                      <a
                        href={getWhatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-yellow hover:bg-[#ffd633] text-black font-extrabold uppercase tracking-wider px-6 py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-brand-yellow/10"
                      >
                        <MessageCircle className="w-4.5 h-4.5 fill-current text-black" />
                        Enviar no WhatsApp
                        <ExternalLink className="w-3.5 h-3.5 text-black stroke-[3]" />
                      </a>
                      <button
                        onClick={handleReset}
                        className="bg-white/5 hover:bg-white/10 text-slate-300 px-6 py-3 rounded-xl text-xs font-semibold border border-white/10 transition-colors"
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

        <div className="border-t border-white/5 pt-16">
          <div className="text-center mb-12">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">DÚVIDAS FREQUENTES</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 font-display">Respostas rápidas para quem quer divulgar</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4" id="faq-accordions">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
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

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <div className="bg-[#0B0B0E] p-4 rounded-2xl border border-white/5 flex gap-4">
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] text-slate-500 uppercase tracking-widest">{title}</h4>
        {children}
      </div>
    </div>
  );
}

interface FormInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}

function FormInput({ label, name, value, onChange, placeholder, type = "text", required = false }: FormInputProps) {
  return (
    <div className="flex flex-col space-y-1.5">
      <label htmlFor={name} className="text-[11px] font-semibold text-slate-300">
        {label} {required && <span className="text-brand-yellow">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300"
      />
    </div>
  );
}
