import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Megaphone,
  Radio,
  TrendingUp,
  Mic,
  Users,
  CheckCircle,
  Truck,
  ArrowRight,
  Sparkles,
  Map,
  MessageCircle,
} from "lucide-react";

interface ServicesViewProps {
  initialActiveServiceId?: string;
  onNavigate: (page: string, subServiceId?: string) => void;
}

export default function ServicesView({ initialActiveServiceId, onNavigate }: ServicesViewProps) {
  const [activeService, setActiveService] = useState<string>("carro-som");

  useEffect(() => {
    if (initialActiveServiceId) {
      setActiveService(initialActiveServiceId);
    }
  }, [initialActiveServiceId]);

  const servicesList = [
    {
      id: "carro-som",
      shortTitle: "Carro de Som",
      title: "Carro de Som para Divulgação Local",
      tagline: "Leve sua oferta aos bairros certos e gere movimento no comércio no mesmo dia.",
      icon: Megaphone,
      desc: "Planejamos a rota, produzimos o áudio comercial e colocamos sua mensagem para circular com clareza em regiões estratégicas. É ideal para promoções de supermercado, inaugurações, farmácias, óticas, lojas, feirões e campanhas de varejo.",
      benefits: [
        "Roteiro de circulação definido de acordo com bairros, fluxo e público desejado.",
        "Possibilidade de acompanhamento por GPS para comprovar a rota contratada.",
        "Spot comercial com linguagem vendedora e chamada clara para ação.",
        "Atendimento indicado para ofertas, inaugurações, liquidações e campanhas sazonais.",
      ],
      included: [
        { label: "Indicado para", value: "Supermercados, farmácias, óticas, lojas, açougues e feirões." },
        { label: "Cobertura", value: "Anápolis, Aracaju e cidades próximas sob consulta." },
        { label: "Execução", value: "Campanhas por hora, diária, semana ou mês." },
        { label: "Diferencial", value: "Rota planejada, áudio profissional e atendimento direto pelo WhatsApp." },
      ],
    },
    {
      id: "trio-eletrico",
      shortTitle: "Trio Elétrico",
      title: "Trio Elétrico para Eventos, Carreatas e Inaugurações",
      tagline: "Estrutura sonora de alto impacto para grandes ações externas.",
      icon: Truck,
      desc: "Quando a ação precisa chamar atenção em grande escala, o trio elétrico entrega presença, potência e visibilidade. É uma solução forte para inaugurações, eventos promocionais, carreatas, campanhas institucionais e ativações com grande circulação de pessoas.",
      benefits: [
        "Som de grande alcance para ações que precisam ser percebidas de longe.",
        "Ideal para eventos, inaugurações, campanhas promocionais e mobilizações.",
        "Possibilidade de locução ao vivo, roteiro e chamadas de impacto.",
        "Equipe orientada para executar a ação com organização e segurança.",
      ],
      included: [
        { label: "Indicado para", value: "Carreatas, inaugurações, campanhas comerciais e eventos de rua." },
        { label: "Formato", value: "Contratação por evento, diária ou período combinado." },
        { label: "Apoio", value: "Locução, roteiro comercial e orientação da ação." },
        { label: "Objetivo", value: "Gerar presença, movimento e lembrança imediata da marca." },
      ],
    },
    {
      id: "radio-interna",
      shortTitle: "Rádio Interna",
      title: "Rádio Interna para Supermercados, Lojas e Farmácias",
      tagline: "Transforme o som ambiente em um canal de vendas dentro do ponto de venda.",
      icon: Radio,
      desc: "A Rádio Ação permite tocar músicas selecionadas, avisos, vinhetas e ofertas dentro da loja. O cliente escuta suas promoções enquanto compra, o que ajuda a destacar produtos, setores e campanhas do dia.",
      benefits: [
        "Anúncios internos sem divulgar concorrentes, diferente de rádio comum ou playlist aberta.",
        "Ofertas gravadas com locução profissional e programação personalizada.",
        "Ótima para açougue, hortifruti, padaria, farmácia, perfumaria e campanhas de loja.",
        "Comunicação recorrente com o cliente no momento de decisão de compra.",
      ],
      included: [
        { label: "Indicado para", value: "Supermercados, magazines, farmácias, sacolões e lojas de varejo." },
        { label: "Conteúdo", value: "Músicas, vinhetas, chamadas de oferta e avisos comerciais." },
        { label: "Atualização", value: "Novas ofertas podem ser produzidas conforme a campanha." },
        { label: "Objetivo", value: "Valorizar ofertas e aumentar a atenção do cliente dentro da loja." },
      ],
    },
    {
      id: "locucao-spot",
      shortTitle: "Spot Comercial",
      title: "Locução Comercial e Gravação de Spots",
      tagline: "Sua oferta com uma voz profissional, clara e pronta para vender.",
      icon: Mic,
      desc: "Um bom anúncio precisa ser entendido rápido. Criamos textos comerciais, chamadas promocionais, vinhetas e spots para carro de som, rádio interna, frente de loja, redes sociais e campanhas institucionais.",
      benefits: [
        "Roteiro com linguagem de venda e chamada direta para ação.",
        "Locutores profissionais para diferentes estilos de campanha.",
        "Áudio preparado para carro de som, loja, internet ou rádio interna.",
        "Entrega ágil para campanhas que precisam ir para a rua rápido.",
      ],
      included: [
        { label: "Tipos", value: "Spots, vinhetas, chamadas, jingles e textos promocionais." },
        { label: "Uso", value: "Carro de som, rádio interna, loja, WhatsApp e redes sociais." },
        { label: "Linguagem", value: "Varejo, institucional, popular, jovem, urgente ou promocional." },
        { label: "Objetivo", value: "Fazer a mensagem ser lembrada e gerar ação do público." },
      ],
    },
    {
      id: "panfletagem",
      shortTitle: "Panfletagem",
      title: "Panfletagem Estratégica e Blitz Promocional",
      tagline: "Coloque sua oferta na mão de quem circula perto da sua loja.",
      icon: Users,
      desc: "Planejamos ações com promotores, distribuição em pontos de fluxo, frente de loja, bairros, semáforos, eventos e campanhas integradas com carro de som. É ideal para gerar visibilidade física e atrair pessoas para o ponto de venda.",
      benefits: [
        "Promotores orientados para abordagem comercial e entrega organizada.",
        "Mapeamento dos pontos com maior fluxo para o segmento da campanha.",
        "Possibilidade de integrar panfletagem, som de rua, locutor e blitz visual.",
        "Supervisão da ação com fotos, vídeos ou acompanhamento combinado.",
      ],
      included: [
        { label: "Locais", value: "Semáforos, porta de loja, escolas, bairros, eventos e pontos comerciais." },
        { label: "Indicado para", value: "Inaugurações, lançamentos, liquidações e ações de bairro." },
        { label: "Equipe", value: "Promotores, supervisão e orientação de abordagem." },
        { label: "Objetivo", value: "Gerar alcance físico e aumentar o fluxo para sua empresa." },
      ],
    },
    {
      id: "trafego-pago",
      shortTitle: "Anúncios Digitais",
      title: "Tráfego Pago Local para Empresas",
      tagline: "Apareça para quem está perto e tem chance real de comprar de você.",
      icon: TrendingUp,
      desc: "Criamos campanhas no Google, Instagram e Facebook para impactar pessoas próximas da sua empresa. A estratégia pode trabalhar junto com carro de som, panfletagem e rádio interna para ampliar presença e gerar contatos pelo WhatsApp.",
      benefits: [
        "Segmentação local por cidade, bairro, raio e perfil de público.",
        "Campanhas com foco em WhatsApp, ligações, visitas e pedidos de orçamento.",
        "Apoio na comunicação da oferta e criativos comerciais.",
        "Indicado para empresas que querem vender localmente com mensuração de resultados.",
      ],
      included: [
        { label: "Canais", value: "Google Ads, Instagram, Facebook e campanhas locais." },
        { label: "Foco", value: "Gerar contatos, chamadas, visitas e orçamentos." },
        { label: "Estratégia", value: "Anúncios combinados com ações de rua e ofertas comerciais." },
        { label: "Objetivo", value: "Transformar alcance digital em atendimento pelo WhatsApp." },
      ],
    },
  ];

  const currentServiceData = servicesList.find((s) => s.id === activeService) || servicesList[0];
  const ActiveIcon = currentServiceData.icon;

  const handleWhatsAppService = () => {
    const text = `Olá! Vi o site da Ação Total e quero atendimento sobre ${currentServiceData.title}. Gostaria de receber uma sugestão de campanha e orçamento.`;
    window.open(`https://wa.me/5562991962033?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-midnight-carbon">
      <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-brand-yellow/3 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[350px] h-[350px] bg-white/2 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            COMO PODEMOS DIVULGAR SUA EMPRESA
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
            Serviços para atrair clientes e movimentar sua loja
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Selecione uma opção abaixo e veja como a Ação Total pode divulgar sua oferta nas ruas, dentro da loja e no digital.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-12 bg-black/30 p-2 rounded-2xl border border-white/5" id="services-tabs-nav">
          {servicesList.map((service) => {
            const Icon = service.icon;
            const isSelected = service.id === activeService;
            return (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex flex-col md:flex-row items-center justify-center gap-2 py-3 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center md:text-left ${
                  isSelected
                    ? "bg-brand-yellow text-black shadow-md shadow-brand-yellow/5 font-black"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.02]"
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-black" : "text-slate-400"}`} />
                <span className="truncate max-w-full">{service.shortTitle}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white/[0.01] border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
            id="active-service-details-panel"
          >
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.005)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="lg:col-span-7 flex flex-col justify-between relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 flex items-center justify-center border border-brand-yellow/20 text-brand-yellow">
                    <ActiveIcon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-yellow uppercase tracking-widest font-semibold">Serviço escolhido</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white font-display mt-0.5">{currentServiceData.title}</h2>
                  </div>
                </div>

                <p className="text-sm font-semibold text-slate-300 mb-4 tracking-wide">
                  {currentServiceData.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light mb-8">
                  {currentServiceData.desc}
                </p>

                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-yellow" />
                  O que você ganha com esta ação
                </h3>

                <ul className="space-y-3 mb-8">
                  {currentServiceData.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-slate-300">
                      <CheckCircle className="w-4.5 h-4.5 text-brand-yellow shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 border-t border-white/5 pt-6 w-full">
                <button
                  onClick={() => onNavigate("orcamento")}
                  className="bg-brand-yellow hover:bg-[#ffd633] text-black font-extrabold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg shadow-brand-yellow/10 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Montar orçamento
                  <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
                </button>
                <button
                  onClick={handleWhatsAppService}
                  className="bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl border border-white/10 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-brand-yellow" />
                  Falar no WhatsApp
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between relative z-10">
              <div className="bg-black/30 border border-white/5 rounded-2xl p-6 relative overflow-hidden flex-1 flex flex-col justify-between mb-6">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/2 rounded-full blur-2xl" />

                <div>
                  <h4 className="text-xs text-slate-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-3">
                    O que está incluso
                  </h4>

                  <div className="space-y-5">
                    {currentServiceData.included.map((spec, i) => (
                      <div key={i} className="flex flex-col space-y-1">
                        <span className="text-[10px] text-slate-500 uppercase">{spec.label}</span>
                        <span className="text-xs text-slate-200 font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-white/5 pt-4 text-[10px] text-slate-500 font-light italic">
                  Cada campanha é ajustada conforme cidade, segmento, datas, rota, equipe e objetivo comercial.
                </div>
              </div>

              <div className="bg-gradient-to-r from-brand-yellow/10 to-transparent p-4 rounded-xl border border-brand-yellow/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-yellow/20 flex items-center justify-center text-brand-yellow shrink-0">
                  <Map className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">Mais controle da campanha</h5>
                  <p className="text-[10px] text-slate-400">Rotas, horários, equipe e mensagem podem ser planejados antes da ação.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
