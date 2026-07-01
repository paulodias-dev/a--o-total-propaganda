import { useEffect } from "react";

interface DynamicSeoProps {
  activePage: string;
  selectedSubService?: string;
}

const defaultSeo = {
  title: "Ação Total Propaganda | Carro de Som, Panfletagem e Rádio Interna",
  description:
    "Carro de som, panfletagem, trio elétrico, rádio interna, locução comercial e tráfego pago para divulgar empresas em Anápolis, Aracaju e região.",
};

const serviceTitles: Record<string, string> = {
  "carro-som": "Carro de Som em Anápolis e Aracaju | Ação Total Propaganda",
  "trio-eletrico": "Trio Elétrico para Eventos e Inaugurações | Ação Total Propaganda",
  "radio-interna": "Rádio Interna para Supermercados e Lojas | Ação Total Propaganda",
  "locucao-spot": "Locução Comercial e Spot para Carro de Som | Ação Total Propaganda",
  panfletagem: "Panfletagem e Blitz Promocional | Ação Total Propaganda",
  "trafego-pago": "Tráfego Pago Local para Empresas | Ação Total Propaganda",
};

const pageSeo: Record<string, { title: string; description: string }> = {
  home: defaultSeo,
  sobre: {
    title: "Quem Somos | Ação Total Propaganda em Anápolis e Aracaju",
    description:
      "Conheça a Ação Total Propaganda, agência especializada em propaganda de rua, divulgação local, rádio interna e campanhas comerciais em Anápolis e Aracaju.",
  },
  servicos: {
    title: "Serviços de Propaganda Local | Carro de Som, Panfletagem e Rádio Interna",
    description:
      "Soluções para divulgar empresas: carro de som, trio elétrico, panfletagem, blitz, rádio interna, locução comercial e tráfego pago local.",
  },
  demos: {
    title: "Exemplos de Anúncios e Spots Comerciais | Ação Total Propaganda",
    description:
      "Ouça exemplos de chamadas comerciais para supermercados, farmácias, lojas, concessionárias e campanhas locais.",
  },
  orcamento: {
    title: "Orçamento de Propaganda pelo WhatsApp | Ação Total Propaganda",
    description:
      "Monte uma estimativa para carro de som, panfletagem, trio elétrico, rádio interna, locução e tráfego pago e envie para atendimento pelo WhatsApp.",
  },
  contato: {
    title: "Fale com a Ação Total Propaganda | Atendimento via WhatsApp",
    description:
      "Solicite atendimento comercial para divulgar sua empresa em Anápolis, Aracaju e região com carro de som, panfletagem, rádio interna e tráfego pago.",
  },
};

function setMeta(name: string, content: string, attribute: "name" | "property" = "name") {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

export default function DynamicSeo({ activePage, selectedSubService }: DynamicSeoProps) {
  useEffect(() => {
    const baseSeo = pageSeo[activePage] || defaultSeo;
    const title = activePage === "servicos" && selectedSubService
      ? serviceTitles[selectedSubService] || baseSeo.title
      : baseSeo.title;

    document.title = title;
    setMeta("description", baseSeo.description);
    setMeta("og:title", title, "property");
    setMeta("og:description", baseSeo.description, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", baseSeo.description);
  }, [activePage, selectedSubService]);

  return null;
}
