# Ação Total Propaganda

Landing page institucional e comercial da Ação Total Propaganda, com foco em captação de leads, apresentação dos serviços da agência e direcionamento rápido para contato via WhatsApp.

O projeto foi construído em React + Vite, com interface animada em `motion` e estilização via Tailwind CSS v4. A navegação funciona em formato de página única com hash routing, sem dependência de `react-router`.

## Objetivo do projeto

Este site foi pensado para:

- apresentar a agência de forma premium e direta;
- destacar os serviços de propaganda volante, rádio interna, spots, panfletagem e tráfego pago;
- incentivar contato comercial imediato;
- oferecer um simulador simples de orçamento;
- manter boa experiência em desktop e mobile.

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
    ContactFooter.tsx        Rodapé com formulário e créditos
    FloatingWhatsapp.tsx     Botão flutuante de WhatsApp
    Logo.tsx                 Identidade visual da marca
    Navigation.tsx           Header fixo, menu desktop/mobile e ajuste do banner
    ScrollToTop.tsx          Botão de retorno ao topo
    AuthorityStats.tsx       Bloco estatístico institucional
    Hero.tsx                 Hero alternativo/legado
    BentoServices.tsx        Grade de serviços alternativo/legado
  views/
    HomeView.tsx             Página inicial
    AboutView.tsx            Página "Quem Somos"
    ServicesView.tsx         Página de serviços
    DemosView.tsx            Showroom/demonstrações
    QuoteView.tsx            Simulador de orçamento
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

O controle das rotas fica em [src/App.tsx](/home/paulo/working/ação-total-propaganda/src/App.tsx:1), sem dependência externa de roteador.

## Componentes e comportamentos importantes

### Banner promocional + header fixo

O topo do site possui:

- banner promocional amarelo;
- menu fixo;
- menu mobile com painel expansível.

O posicionamento do header foi ajustado para acompanhar a parte visível do banner durante o scroll. Essa lógica está em [src/components/Navigation.tsx](/home/paulo/working/ação-total-propaganda/src/components/Navigation.tsx:1).

### Formulários

Existem dois pontos principais de captura:

- formulário no rodapé;
- formulário na página de contato.

Atualmente os formulários:

- validam os campos localmente;
- simulam envio com `setTimeout`;
- encaminham o lead para o WhatsApp com mensagem pré-preenchida.

Importante: não existe backend persistindo esses dados hoje.

### Simulador de orçamento

A página [src/views/QuoteView.tsx](/home/paulo/working/ação-total-propaganda/src/views/QuoteView.tsx:1) calcula valores estimados a partir de combinações de serviços e gera um resumo para envio via WhatsApp.

Se os preços forem alterados comercialmente, revise:

- preços base;
- fórmulas de cálculo;
- mensagens do resumo final.

### Showroom / demos

A página [src/views/DemosView.tsx](/home/paulo/working/ação-total-propaganda/src/views/DemosView.tsx:1) usa Web Audio API para sintetizar demonstrações e simular estilos de spots.

## Conteúdos que costumam exigir manutenção

Ao atualizar a operação comercial da empresa, revise principalmente:

- número de WhatsApp;
- cidades atendidas;
- textos promocionais do banner superior;
- horários de atendimento;
- lista de serviços;
- preços do simulador;
- textos institucionais e provas de autoridade;
- CTA principais.

## Pontos de personalização rápida

### Telefones e links de WhatsApp

Procure por:

```text
5562991962033
```

Esse número aparece em mais de um componente.

### Banner de promoção

O texto do banner superior está em [src/App.tsx](/home/paulo/working/ação-total-propaganda/src/App.tsx:1).

### Créditos do site

O crédito visível no rodapé está em [src/components/ContactFooter.tsx](/home/paulo/working/ação-total-propaganda/src/components/ContactFooter.tsx:1).

### SEO básico

O `title` e a `meta description` estão em [index.html](/home/paulo/working/ação-total-propaganda/index.html:1).

## Boas práticas ao editar

- preserve os textos comerciais com tom local e direto;
- teste sempre desktop e mobile;
- revise o topo ao mexer em banner, header ou espaçamentos iniciais das páginas;
- valide os links de WhatsApp após mudar mensagens;
- rode `npm run build` antes de publicar;
- rode `npm run lint` para conferir tipos.

## Possíveis melhorias futuras

- integrar formulário com backend real ou CRM;
- adicionar analytics e eventos de conversão;
- configurar ESLint e Prettier;
- mover preços e contatos para arquivo de configuração central;
- adicionar testes para os cálculos do simulador;
- remover dependências não utilizadas do scaffold, se confirmado que não são mais necessárias.

## Publicação

O projeto gera saída estática na pasta `dist/` após:

```bash
npm run build
```

Essa pasta pode ser publicada em qualquer hospedagem estática compatível com aplicações Vite.

## Créditos

Desenvolvido por Paulo Roberto  
https://fluxosistemas.com.br
