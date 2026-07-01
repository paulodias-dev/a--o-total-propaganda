# Ação Total Propaganda

Landing page institucional e comercial da Ação Total Propaganda, com foco em captação de leads, apresentação dos serviços da agência e direcionamento rápido para atendimento via WhatsApp.

O projeto foi construído em React + Vite, com interface animada em `motion` e estilização via Tailwind CSS v4. A navegação funciona em formato de página única com hash routing, sem dependência de `react-router`.

## Objetivo do projeto

Este site foi pensado para:

- apresentar a agência de forma direta e comercial;
- destacar carro de som, panfletagem, trio elétrico, rádio interna, spots, blitz e tráfego pago;
- incentivar contato imediato pelo WhatsApp;
- oferecer uma estimativa simples de orçamento;
- melhorar SEO básico com metadados, schema, sitemap e robots;
- manter boa experiência em desktop e mobile.

## Melhorias aplicadas na branch `release`

- Hero reescrito com foco em conversão: promessa clara, dor do comerciante e CTA para atendimento.
- Menu ajustado para termos mais comerciais: "Como Divulgar", "Ouvir Exemplos", "Orçamento" e "Atendimento".
- Serviços reescritos com linguagem menos técnica e mais orientada a resultado.
- Página de orçamento simplificada para gerar uma estimativa e enviar o resumo ao WhatsApp.
- Formulários do contato e rodapé passaram a abrir o WhatsApp com mensagem preenchida e a manter backup local no navegador.
- Metadados SEO, Open Graph, Twitter Card e JSON-LD adicionados ao `index.html`.
- Componente `DynamicSeo` criado para atualizar título e descrição conforme a seção acessada.
- `robots.txt` e `sitemap.xml` adicionados em `public/`.
- Fontes externas reduzidas para melhorar carregamento.
- Dependência não utilizada `@google/genai` removida do `package.json`.

## Limitação importante sobre captura de leads

O site ainda não possui backend, CRM, banco de dados, envio de e-mail ou integração com Google Sheets. Os formulários foram melhorados para reduzir perda de conversão abrindo o WhatsApp automaticamente com os dados preenchidos, mas a captura permanente de leads exige uma integração externa.

Recomendações para a próxima etapa:

- conectar o formulário a um webhook, CRM, e-mail transacional ou Google Sheets;
- adicionar eventos de conversão para Google Ads, Meta Ads e Google Analytics;
- substituir hash routing por URLs reais para páginas de serviço e cidade;
- criar landing pages específicas para Anápolis, Aracaju, carro de som, panfletagem, rádio interna e trio elétrico.

## Stack principal

- `React 19`
- `TypeScript`
- `Vite`
- `Tailwind CSS 4`
- `motion`
- `lucide-react`

## Como rodar localmente

### Pré-requisitos

- `Node.js` 20+ recomendado
- `npm`

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

O projeto sobe por padrão em:

```text
http://localhost:3000
```

### Build de produção

```bash
npm run build
```

### Preview da build

```bash
npm run preview
```

### Checagem de tipos

```bash
npm run lint
```

Observação: neste projeto, o script `lint` executa `tsc --noEmit` para validação de tipos. Não há ESLint configurado no momento.

## Estrutura do projeto

```text
src/
  App.tsx                    Orquestra navegação, banner do topo e views
  main.tsx                   Ponto de entrada da aplicação
  index.css                  Tema global, fontes e utilidades visuais
  components/
    ContactFooter.tsx        Rodapé com formulário e CTA de WhatsApp
    DynamicSeo.tsx           Atualização dinâmica de title/metas por seção
    FloatingWhatsapp.tsx     Botão flutuante de WhatsApp
    Logo.tsx                 Identidade visual da marca
    Navigation.tsx           Header fixo, menu desktop/mobile e ajuste do banner
    ScrollToTop.tsx          Botão de retorno ao topo
  views/
    HomeView.tsx             Página inicial
    AboutView.tsx            Página "Quem Somos"
    ServicesView.tsx         Página de serviços
    DemosView.tsx            Exemplos de anúncios
    QuoteView.tsx            Orçamento rápido
    ContactView.tsx          Página de contato
```

## Fluxo de navegação

O projeto usa hash routing simples. As páginas disponíveis hoje são:

- `#home`
- `#sobre`
- `#servicos`
- `#demos`
- `#orcamento`
- `#contato`

Para SEO avançado, o ideal é migrar futuramente para URLs reais por serviço/cidade.

## Conteúdos que costumam exigir manutenção

Ao atualizar a operação comercial da empresa, revise principalmente:

- número de WhatsApp;
- cidades atendidas;
- textos promocionais do banner superior;
- horários de atendimento;
- lista de serviços;
- preços do orçamento rápido;
- textos institucionais e provas de autoridade;
- integração real de captura de leads.
