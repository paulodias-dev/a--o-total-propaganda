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
  Music,
  Map,
  Volume2
} from "lucide-react";

interface ServicesViewProps {
  initialActiveServiceId?: string;
  onNavigate: (page: string) => void;
}

export default function ServicesView({ initialActiveServiceId, onNavigate }: ServicesViewProps) {
  const [activeService, setActiveService] = useState<string>("carro-som");

  // Sync state if initialActiveServiceId is supplied from home cards click
  useEffect(() => {
    if (initialActiveServiceId) {
      setActiveService(initialActiveServiceId);
    }
  }, [initialActiveServiceId]);

  const servicesList = [
    {
      id: "carro-som",
      shortTitle: "Carro de Som",
      title: "Carros de Som & Mini-Trios",
      tagline: "Propaganda volante diária de alto impacto para bairros e centros comerciais.",
      icon: Megaphone,
      desc: "Nossos carros de som e mini-trios são calibrados para fornecer áudio cristalino e agradável sem ruídos ou distorções. Diferente de alto-falantes comuns, nossa frota utiliza engenharia acústica direcionada de alta qualidade, garantindo que sua gravação seja assimilada com clareza mesmo por quem está no interior das residências.",
      benefits: [
        "Roteiros estratégicos geolocalizados baseados em densidade demográfica.",
        "Rastreamento de rotas via GPS (fornecemos relatórios com mapas provando a circulação).",
        "Motoristas capacitados e experientes que mantêm velocidade ideal de propaganda.",
        "Ideal para supermercados, farmácias, inaugurações, óticas e feirões de varejo."
      ],
      specs: [
        { label: "Equipamento", value: "Corneta Fenólica Selecionada + Amplificadores de Alta Fidelidade" },
        { label: "Volume de Som", value: "Sempre de acordo com a lei municipal de decibéis (80db)" },
        { label: "Cobertura", value: "Anápolis (GO), Aracaju (SE) (todos os bairros) e eixos metropolitanos" },
        { label: "Duração Ideal", value: "De 3 a 6 horas diárias para consolidação da mensagem" }
      ]
    },
    {
      id: "trio-eletrico",
      shortTitle: "Trio Elétrico",
      title: "Trio Elétrico & Grandes Eventos",
      tagline: "Megaestrutura sonora para carreatas, comícios, desfiles e inaugurações de grande porte.",
      icon: Truck,
      desc: "Dispomos de trios-elétricos e caminhões de som de grande porte perfeitos para eventos com grande aglomeração de pessoas. Com gerador de energia próprio e espaço para locutores, djs e artistas no teto do veículo, nosso trio garante a máxima potência com qualidade acústica inigualável na região.",
      benefits: [
        "Gerador de energia silencioso integrado para funcionamento ininterrupto.",
        "Área superior com guarda-corpo de segurança para locutores e autoridades.",
        "Fidelidade sonora extrema com caixas do tipo Line Array de última geração.",
        "Excelente para comícios políticos, carreatas religiosas, megafeirões de concessionárias e passeatas."
      ],
      specs: [
        { label: "Potência Sonora", value: "Até 30.000 Watts RMS sem distorção" },
        { label: "Estrutura", value: "Stage superior com capacidade de peso homologada" },
        { label: "Gerador", value: "Embutido e independente para total autonomia" },
        { label: "Indicado Para", value: "Mobilizações em massa e carreatas corporativas" }
      ]
    },
    {
      id: "radio-interna",
      shortTitle: "Rádio Interna",
      title: "Rádio Interna Corporativa (Rádio Ação)",
      tagline: "Aumente as vendas do seu ponto de venda (PDV) influenciando a decisão de compra.",
      icon: Radio,
      desc: "A Rádio Ação transforma seu estabelecimento em uma verdadeira rádio ao vivo. Removemos o som ambiente comum, substituindo-o por uma programação musical selecionada de acordo com o perfil demográfico de seu cliente, entremeada de anúncios curtos e persuasivos das suas ofertas internas do dia, ditas por vozes de rádio extremamente profissionais.",
      benefits: [
        "Aumento real de até 18% no ticket médio do ponto de venda.",
        "Zero anúncios de concorrentes (diferente de rádio FM tradicional ou playlists gratuitas).",
        "Controle de ofertas de forma instantânea via painel digital exclusivo.",
        "Reduz consideravelmente a ansiedade e sensação de demora nas filas do caixa."
      ],
      specs: [
        { label: "Plataforma", value: "Digital com funcionamento offline em caso de queda de internet" },
        { label: "Grade Musical", value: "Sertanejo, Pop, MPB ou Gospel (100% customizado)" },
        { label: "Atualização", value: "Inserção instantânea de novas ofertas em menos de 2 horas úteis" },
        { label: "Nicho Recomendado", value: "Supermercados, magazines, farmácias, sacolões e magazines" }
      ]
    },
    {
      id: "locucao-spot",
      shortTitle: "Gravação de Spot",
      title: "Locução Comercial & Gravação de Spots",
      tagline: "Sua mensagem transmitida por vozes vendedoras altamente impactantes.",
      icon: Mic,
      desc: "Um áudio mal gravado joga no lixo a credibilidade da sua empresa. Nosso estúdio produz spots comerciais, jingles cantados, chamadas de impacto e vinhetas com locutores de rádio de classe internacional. Criamos a redação do texto com gatilhos de vendas e inserimos trilhas sonoras licenciadas de alta qualidade para prender a atenção do consumidor.",
      benefits: [
        "Equipe de redatores focados em redação publicitária de alto impacto.",
        "Estúdio profissional equipado com microfones e compressores Neumann/Shure.",
        "Entrega expressa de spots finalizados em até 24 horas úteis.",
        "Diferentes estilos de vozes: Varejo, Coloquial, Jovem, Institucional e Caricata."
      ],
      specs: [
        { label: "Formatos", value: "MP3 de Alta Resolução, WAV e OGG calibrados para som de rua" },
        { label: "Tipos de Áudio", value: "Spots, Jingles Comerciais, Esperas Telefônicas, Audiobooks" },
        { label: "Vozes Disponíveis", value: "Locutores masculinos e femininos de rádio FM de Goiás e Sergipe" },
        { label: "Redação", value: "Criamos e editamos seus roteiros de ofertas sem custo adicional" }
      ]
    },
    {
      id: "panfletagem",
      shortTitle: "Panfletagem & Blitz",
      title: "Panfletagem Estratégica & Blitz de Rua",
      tagline: "Ativação física cirúrgica para inundar o ponto de venda de novos leads.",
      icon: Users,
      desc: "Ativamos sua loja de forma física com promotores uniformizados, panfletagem planejada por geolocalização e blitz comercial festiva. Sincronizamos a ação de distribuição de panfletos com nossos carros de som na porta e locutores de frente de loja para garantir que ninguém passe sem notar sua promoção.",
      benefits: [
        "Promotores selecionados e treinados para abordagem cortês e vendedora.",
        "Mapeamento de locais de maior fluxo baseado no público do seu segmento.",
        "Blitz promocional festiva com balões, tendas, som de frente de loja e brindes.",
        "Fiscalização presencial em tempo real para garantir entrega real de material."
      ],
      specs: [
        { label: "Tipos de Abordagem", value: "Semáforos, Saídas de Escolas, Portas de Lojas, Caixas de Correio" },
        { label: "Visual", value: "Tendas personalizadas, windflags, caixas de som de calçada" },
        { label: "Supervisão", value: "Fiscais motorizados registrando fotos e vídeos da ação" },
        { label: "Segmento Forte", value: "Inaugurações de lojas, lançamentos imobiliários, feiras e eventos" }
      ]
    },
    {
      id: "trafego-pago",
      shortTitle: "Marketing Digital",
      title: "Marketing Digital & Tráfego de Performance",
      tagline: "Apareça na tela do celular de quem mora perto e quer comprar de você.",
      icon: TrendingUp,
      desc: "Não adianta apenas fazer barulho offline se sua empresa não existe no mundo online. Criamos campanhas cirúrgicas de anúncios no Google Ads (para aparecer no topo quando pesquisarem seu serviço), Instagram Ads e Facebook Ads (para impactar os moradores do bairro com as ofertas da semana).",
      benefits: [
        "Segmentação local por raio de quilômetros ao redor de seu ponto de venda.",
        "Criação de Landing Pages ultrarrápidas focadas em converter clique em contato WhatsApp.",
        "Otimização do perfil de Google Meu Negócio / Google Maps para atração orgânica.",
        "Análise de dados semanais para investimento inteligente e redução do custo de aquisição de leads."
      ],
      specs: [
        { label: "Plataformas", value: "Google Ads, Meta Ads (Instagram/Facebook) e TikTok Ads" },
        { label: "Páginas inclusas", value: "Landing Pages institucionais de alta velocidade e conversão" },
        { label: "Foco", value: "Vendas locais imediatas e geração de leads qualificados" },
        { label: "Métricas", value: "Acompanhamento do Retorno sobre Investimento (ROAS)" }
      ]
    }
  ];

  const currentServiceData = servicesList.find((s) => s.id === activeService) || servicesList[0];
  const ActiveIcon = currentServiceData.icon;

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-midnight-carbon">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-brand-yellow/3 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[350px] h-[350px] bg-white/2 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            NOSSAS CAPABILIDADES
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
            Serviços de Comunicação e Marketing
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm font-light">
            Selecione uma de nossas soluções abaixo para conhecer a fundo nossos diferenciais técnicos e metodologias de venda.
          </p>
        </div>

        {/* Services Navigation Buttons Grid */}
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

        {/* Active Service Detailed Panel */}
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
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.005)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            
            {/* Left Column: Descriptions (7 columns) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 flex items-center justify-center border border-brand-yellow/20 text-brand-yellow">
                    <ActiveIcon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-brand-yellow uppercase tracking-widest font-semibold">Canais de Resultados</span>
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
                  Diferenciais de Execução e Vantagens:
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

              {/* Action Buttons inside services views */}
              <div className="flex flex-col sm:flex-row gap-4 border-t border-white/5 pt-6 w-full">
                <button
                  onClick={() => onNavigate("orcamento")}
                  className="bg-brand-yellow hover:bg-[#ffd633] text-black font-extrabold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg shadow-brand-yellow/10 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Fazer Simulação de Custos
                  <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
                </button>
                <button
                  onClick={() => onNavigate("contato")}
                  className="bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl border border-white/10 transition-colors cursor-pointer"
                >
                  Falar via WhatsApp
                </button>
              </div>
            </div>

            {/* Right Column: Technical Spec Table & Visual Card (5 columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              {/* Specs Box */}
              <div className="bg-black/30 border border-white/5 rounded-2xl p-6 relative overflow-hidden flex-1 flex flex-col justify-between mb-6">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/2 rounded-full blur-2xl" />
                
                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-3">
                    Ficha Técnica / Parâmetros
                  </h4>

                  <div className="space-y-5">
                    {currentServiceData.specs.map((spec, i) => (
                      <div key={i} className="flex flex-col space-y-1">
                        <span className="text-[10px] font-mono text-slate-500 uppercase">{spec.label}</span>
                        <span className="text-xs text-slate-200 font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-white/5 pt-4 text-[10px] text-slate-500 font-light italic">
                  * Todas as nossas operações de áudio respeitam estritamente a Lei Orgânica Municipal de Silêncio e Posturas Ambientais.
                </div>
              </div>

              {/* Mini visual preview card depicting map tracking or radio signal */}
              <div className="bg-gradient-to-r from-brand-yellow/10 to-transparent p-4 rounded-xl border border-brand-yellow/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-yellow/20 flex items-center justify-center text-brand-yellow shrink-0">
                  <Map className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">Transparência Total Garantida</h5>
                  <p className="text-[10px] text-slate-400">Roteiros rastreados via GPS com link de confirmação.</p>
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
