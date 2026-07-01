import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Award,
  MapPin,
  Check,
  CheckCircle2,
  Sparkles,
  Volume2,
  Target,
} from "lucide-react";

export default function AboutView() {
  const pillars = [
    {
      title: "Mensagem clara, sem improviso",
      desc: "Antes da campanha ir para a rua, ajudamos a transformar a oferta em um texto comercial direto, fácil de entender e com chamada para ação.",
      icon: Volume2,
      color: "text-brand-yellow",
    },
    {
      title: "Planejamento de rota e execução",
      desc: "A divulgação é pensada por cidade, bairro, horário, fluxo de pessoas e objetivo da campanha. Isso evita desperdício e melhora a presença da marca.",
      icon: Target,
      color: "text-white",
    },
    {
      title: "Transparência no atendimento",
      desc: "Quando aplicável, trabalhamos com acompanhamento de rota, registros da ação e alinhamento prévio de datas, locais e formato da campanha.",
      icon: ShieldCheck,
      color: "text-brand-yellow",
    },
  ];

  const values = [
    { name: "Foco em venda", desc: "A comunicação é pensada para gerar movimento, contato e lembrança da oferta." },
    { name: "Presença local", desc: "Atendimento em Anápolis, Aracaju e cidades próximas sob consulta operacional." },
    { name: "Integração de canais", desc: "Rua, ponto de venda, locução e digital podem trabalhar juntos na mesma campanha." },
    { name: "Atendimento direto", desc: "O orçamento segue pelo WhatsApp para facilitar ajustes rápidos de cidade, rota e datas." },
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-midnight-carbon">
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-brand-yellow/3 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-white/2 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            QUEM É A AÇÃO TOTAL
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
            Propaganda local com planejamento, presença e atendimento direto
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto font-light text-base sm:text-lg">
            A Ação Total Propaganda ajuda empresas a divulgarem ofertas, inaugurações e campanhas comerciais nas ruas, dentro da loja e no digital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Não basta fazer barulho. A mensagem precisa ser ouvida, entendida e lembrada.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              A <strong>Ação Total Propaganda</strong> atua com soluções de divulgação para negócios locais: carro de som, trio elétrico, panfletagem, blitz promocional, locução comercial, rádio interna e campanhas digitais.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              O objetivo é simples: ajudar empresas a chamar atenção do público certo, divulgar ofertas com clareza e transformar comunicação em procura, visita, ligação ou atendimento pelo WhatsApp.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Cada campanha pode ser ajustada conforme cidade, segmento, data, rota, verba e objetivo. Isso deixa a divulgação mais organizada e mais fácil de acompanhar.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden bg-black/30">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-lg font-bold text-brand-yellow mb-4 flex items-center gap-2 font-display">
                <MapPin className="w-5 h-5 text-brand-yellow" />
                Atendimento e cobertura
              </h3>

              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Atendemos campanhas locais com foco em empresas que precisam divulgar ofertas, inaugurações, feirões, ações de bairro e comunicação no ponto de venda.
              </p>

              <div className="space-y-3">
                {[
                  { city: "Anápolis - GO", desc: "Base operacional e campanhas comerciais urbanas." },
                  { city: "Aracaju - SE", desc: "Atendimento para ações de rua e varejo sob alinhamento comercial." },
                  { city: "Cidades próximas", desc: "Campanhas regionais sob consulta de disponibilidade." },
                  { city: "Campanhas por segmento", desc: "Supermercados, farmácias, óticas, lojas, eventos e inaugurações." },
                ].map((loc, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start text-xs border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold">{loc.city}</h4>
                      <p className="text-[10px] text-slate-500">{loc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Como trabalhamos para sua campanha render mais
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-2 font-light">
              Nossa entrega combina mensagem, canal, rota e atendimento comercial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                    <Icon className={`w-5 h-5 ${pillar.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-display">{pillar.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#0B0B0E] p-8 sm:p-12 border border-white/5 rounded-3xl relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-3xl" />

          <div>
            <span className="text-[10px] text-brand-yellow uppercase tracking-widest font-semibold">O QUE GUIA NOSSA ENTREGA</span>
            <h3 className="text-2xl font-bold text-white mt-2 mb-6 font-display">Divulgação com intenção comercial</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light mb-4">
              Uma campanha eficiente não depende apenas de volume. Ela precisa chegar ao público certo com uma mensagem que incentive visita, compra, ligação ou conversa no WhatsApp.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              Por isso, a Ação Total combina formatos de mídia local com orientação comercial para deixar a campanha mais simples de contratar, executar e acompanhar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, idx) => (
              <div key={idx} className="bg-black/40 border border-white/5 p-4 rounded-xl">
                <h4 className="text-xs font-bold text-brand-yellow mb-1 font-display flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-brand-yellow stroke-[3]" />
                  {v.name}
                </h4>
                <p className="text-[10px] text-slate-400 leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
