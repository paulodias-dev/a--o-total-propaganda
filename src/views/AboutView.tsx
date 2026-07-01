import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Award,
  Users,
  MapPin,
  Check,
  CheckCircle2,
  Sparkles,
  Volume2,
  Tv
} from "lucide-react";

export default function AboutView() {
  const pillars = [
    {
      title: "Som Cristalino e de Qualidade",
      desc: "Nossos veículos possuem amplificadores calibrados por profissionais de áudio. Sem ruído, chiado ou distorção. A mensagem é ouvida perfeitamente por quem está na calçada.",
      icon: Volume2,
      color: "text-brand-yellow"
    },
    {
      title: "Legalidade e Responsabilidade",
      desc: "Trabalhamos estritamente dentro da legislação de controle de poluição sonora municipal e regras ambientais, atuando em horários corretos para manter a recepção positiva da comunidade.",
      icon: ShieldCheck,
      color: "text-white"
    },
    {
      title: "Foco Exclusivo em Vendas",
      desc: "Não fazemos apenas barulho. Planejamos a rota com geolocalização estratégica baseada em onde seu público-alvo compra, maximizando o retorno do seu investimento publicitário.",
      icon: Award,
      color: "text-brand-yellow"
    }
  ];

  const values = [
    { name: "Transparência", desc: "Fornecemos relatórios detalhados com rotas rastreadas via GPS para atestar a circulação contratada." },
    { name: "Tradição Local", desc: "Temos orgulho de ser uma agência consolidada em Anápolis e agora com forte expansão e cobertura em Aracaju, entendendo as nuances dos mercados goiano e sergipano como ninguém." },
    { name: "Inovação Sonora", desc: "Pioneiros na introdução de transmissões automatizadas de ofertas e rádio interna no varejo local." },
    { name: "Resultados Imediatos", desc: "Acreditamos que a propaganda volante é a mídia mais veloz para gerar tráfego em frentes de loja e liquidações." }
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-midnight-carbon">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-brand-yellow/3 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-white/2 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Page Title Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            CONHEÇA NOSSA HISTÓRIA
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
            Líderes em Comunicação de Rua e Varejo
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto font-light text-base sm:text-lg">
            A Ação Total Propaganda é uma agência especializada em conexões reais. Levamos marcas direto ao coração do consumidor.
          </p>
        </div>

        {/* Content Section 1: Detailed History */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Text Description */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Nascemos para tirar marcas do anonimato e gerar vendas imediatas.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Nascida em Anápolis, Goiás e expandindo sua excelência para Aracaju, Sergipe, a <strong>Ação Total Propaganda</strong> surgiu com a proposta de elevar o nível técnico e estratégico da propaganda de som volante. Percebemos que o mercado estava saturado de propaganda barulhenta, sem nitidez e sem planejamento inteligente de rotas.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Investimos pesadamente em frotas modernas de trios, mini-trios e carros com excelente acústica, eliminando chiados e garantindo um som limpo e agradável. Somamos a isso a consultoria de roteiro, locutores profissionais de estúdio, e posteriormente, a expansão para marketing digital de alta performance e sistemas de Rádio Interna para pontos de venda.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Hoje, somos parceiros estratégicos das maiores redes de supermercados, redes de farmácias de manipulação, concessionárias, construtoras e lojas de varejo nas regiões de Anápolis/Goiás e Aracaju/Sergipe, orgulhosos por entregar resultados financeiros reais desde as primeiras horas de campanha na rua.
            </p>
          </div>

          {/* Graphical Representation Box */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden bg-black/30">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-lg font-bold text-brand-yellow mb-4 flex items-center gap-2 font-display">
                <MapPin className="w-5 h-5 text-brand-yellow" />
                Presença e Cobertura
              </h3>
              
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Temos bases operacionais estratégicas em Anápolis (GO) e Aracaju (SE) com autorização e frota preparada para atender clientes comerciais em ambas as regiões:
              </p>

              <div className="space-y-3">
                {[
                  { city: "Anápolis (Sede Principal - GO)", desc: "100% de cobertura urbana e comercial diária." },
                  { city: "Aracaju (Sede Nordeste - SE)", desc: "Cobertura total na capital sergipana e cidades metropolitanas." },
                  { city: "Goiânia e Região Metropolitana", desc: "Campanhas sazonais e ativações corporativas." },
                  { city: "Região do Entorno e Brasília", desc: "Lançamentos e feirões sob consulta de frota." },
                  { city: "Cidades Satélites & Central de Goiás", desc: "Atendimento regional com suporte a eventos." }
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

        {/* Content Section 2: Technical and Quality Standards */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Nosso Padrão de Qualidade é Incomparável
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-2 font-light">
              Entenda por que a Ação Total Propaganda é contratada repetidamente pelas marcas de maior prestígio de Goiás e Sergipe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                    <Icon className={`w-5 h-5 ${pillar.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Section 3: Values & Commitment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#0B0B0E] p-8 sm:p-12 border border-white/5 rounded-3xl relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-3xl" />
          
          <div>
            <span className="text-[10px] font-mono text-brand-yellow uppercase tracking-widest font-semibold">NOSSOS VALORES E PILARES</span>
            <h3 className="text-2xl font-bold text-white mt-2 mb-6 font-display">Como nos Conduzimos</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light mb-4">
              Cada panfleto distribuído, cada quilômetro percorrido pelos trios elétricos e cada anúncio rodado no digital passam por um controle rígido de processos internos.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              Nossa maior conquista não é o fechamento de um contrato, e sim ver um parceiro de supermercados nos ligando no fim de semana para contar que as vendas do açougue bateram recordes absolutos graças à nossa locução e carros rodando de forma sincronizada na vizinhança.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, idx) => (
              <div key={idx} className="bg-black/40 border border-white/5 p-4 rounded-xl">
                <h4 className="text-xs font-bold text-brand-yellow mb-1 font-display flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-brand-yellow stroke-[3]" />
                  {v.name}
                </h4>
                <p className="text-[10px] text-slate-400 leading-relaxed font-light">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
