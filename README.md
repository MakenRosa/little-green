# Little Green — Portal ESG (Projeto Acadêmico ADS)

> **Status:** Arquivado / Manutenção mínima  
> **Contexto:** Projeto desenvolvido para a faculdade (ADS – 2023) com foco em práticas **ESG** (Environmental, Social & Governance).  
> **Stack:** React 18 • React Router 6 • React-Bootstrap 5 • Sass (CSS Modules) • Create React App

---

## ✨ Visão Geral

O **Little Green** é um site de página única com seções temáticas (carrossel inicial, missão/visão/valores, projetos, resultados, relatórios e formulário de participação).  
A navegação principal é feita por **âncoras** (scroll em uma única página) e há **rotas** simples para `/esg` e `/reports` como placeholders.

O objetivo pedagógico do projeto foi **exercitar front-end com React**, organização de componentes, estilos com **Sass Modules**, e integração visual com **React-Bootstrap**.

---

## 📂 Estrutura de Pastas

```

.
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  ├─ CarouselSite/
│  │  ├─ ContainerMVV/
│  │  ├─ ContainerProjetos/
│  │  ├─ ContainerResults/
│  │  ├─ Footer/
│  │  ├─ NavbarSite/
│  │  └─ SustainabilityReports/
│  │     └─ ... (CSS Modules .module.scss/.css)
│  ├─ pages/
│  │  ├─ BasePage/
│  │  ├─ ESG/
│  │  ├─ Home/
│  │  └─ Reports/
│  ├─ styles/
│  │  └─ \_variables.scss
│  ├─ index.js
│  ├─ index.css
│  └─ routes.js
├─ textos.html               # conteúdo textual base utilizado no site
├─ package.json
├─ jsconfig.json             # baseUrl=./src (atalhos de import)
├─ LICENSE                   # MIT
└─ README.md

````

---

## 🧩 Principais Componentes

- **NavbarSite**: barra fixa no topo (com modo “hamburger” no mobile) e links por âncora para as seções da Home.  
- **CarouselSite**: carrossel inicial com mensagens ESG.  
- **ContainerMVV**: cartões de **Missão, Visão, Valores**.  
- **ContainerProjetos**: cards ilustrados de iniciativas (horta escolar, diversidade & inclusão, ações de sustentabilidade).  
- **ContainerResults**: destaques de resultados (redução de carbono, diversidade, governança).  
- **SustainabilityReports**: lista de relatórios para download (links demonstrativos).  
- **Participate**: formulário simples (nome, e-mail, mensagem) **sem backend** por padrão.  
- **Footer**: links úteis e crédito acadêmico.

---

## 🔗 Rotas & Âncoras

- **Single Page (Home)**: navegação por âncoras `#home`, `#mission`, `#vision`, `#values`, `#projects`, `#results`, `#reports`, `#participate`.  
  - Há `scroll-margin-top` configurado em `src/index.css` para compensar a navbar fixa.
- **Rotas extras (placeholders)**:
  - `/` → Home  
  - `/esg` → Página simples com `<h1>ESG</h1>`  
  - `/reports` → Página simples com `<h1>Reports</h1>`

---

## 🖼️ Imagens & Assets

O carrossel e alguns componentes referenciam imagens em `/assets/...`.  
**Coloque os arquivos em `public/assets/`** e use caminhos absolutos (ex.: `/assets/environment.jpg`) para consistência.

> Observação: há uso misto de `assets/esg.jpg` e `/assets/...`. Prefira sempre **`/assets/...`** para evitar problemas em produção.

---

## 🛠️ Pré-requisitos

- **Node.js** recomendado: **18.x LTS**  
- **npm** 8+ (ou equivalente do Node 18)

> O projeto usa **Create React App (react-scripts 5)**.

---

## ▶️ Como rodar localmente

```bash
# 1) Instale as dependências
npm install

# 2) Rode em modo desenvolvimento
npm start
# abre http://localhost:3000

# 3) Build de produção
npm run build
````

Scripts disponíveis (`package.json`):

* `npm start` — Desenvolvimento
* `npm test` — Test runner interativo (CRA)
* `npm run build` — Compila para produção
* `npm run eject` — (irreversível) expõe configs do CRA

---

## 📦 Dependências de Destaque

* **react** `^18.2.0`
* **react-router-dom** `^6.14.1`
* **react-bootstrap** `^2.8.0` e **bootstrap** `^5.3.0`
* **sass** `^1.63.6`
* **react-icons** `^4.10.1`

---

## 🧱 Estilos

* **Sass Modules** (`*.module.scss` / `*.module.css`) para escopo local.
* Variáveis de cor em `src/styles/_variables.scss`.

> Dica: no `NavbarSite.module.scss` há `@import "src/styles/variables.scss";`.
> Como o arquivo se chama `_variables.scss`, o Sass aceita importar como `"src/styles/variables"`.
> Certifique-se de manter esse padrão ao mover ou renomear o arquivo.

---

## 📨 Formulário “Participate” (sem backend)

O formulário é apenas visual. Para funcionar **sem backend próprio**, você pode:

1. **Formspree** (ou serviço similar)

   * Altere o `<Form>` para enviar via `action="https://formspree.io/f/SEU_ID"` e `method="POST"`.
2. **Netlify Forms**

   * Hospede no Netlify e adicione `data-netlify="true"` no `<form>` + um `<input type="hidden" name="form-name" value="participate" />`.
3. **mailto:** simples

   * Troque o botão por `<a href="mailto:contato@exemplo.com?subject=Ideia%20ESG">Enviar por e-mail</a>` (menos elegante).

> Essas opções são adequadas para demonstração acadêmica e protótipos.

---

## 🌐 Deploy

Por ser um **SPA estático**, você pode usar:

* **GitHub Pages**, **Vercel**, **Netlify** ou **S3 + CloudFront**.
* Lembre de configurar **fallback para `index.html`** (no Netlify: `_redirects` com `/*  /index.html  200`).

---

## ♿ Acessibilidade & UX

* Contraste e tipografia pensados para leitura confortável.
* `scroll-margin-top` para navegação com navbar fixa.
* **Sugestões futuras**:

  * Converter ícones em elementos com `aria-label`.
  * Ajustar foco/teclado no menu mobile.
  * Incluir `alt` descritivo em todas as imagens (algumas já possuem).

---

## 🧪 Testes

Este projeto não possui suíte de testes customizada. O `react-scripts test` está disponível para quem desejar adicionar testes.

---

## 🧭 Problemas Conhecidos (histórico)

* **Navbar mobile**: o estado de exibição é controlado por `window.innerWidth` com `addEventListener` **fora** de `useEffect`, o que pode adicionar múltiplos listeners ao redimensionar.
  *Sugestão:* mover o listener para dentro de um `useEffect` com cleanup e/ou usar CSS para controlar a visibilidade.
* **Sobreposição/posicionamento do menu no mobile**: ajustes de `position`/`top` podem causar deslocamento inesperado.
  *Sugestão:* padronizar o fluxo do DOM e utilizar apenas CSS para abrir/fechar (ex.: `max-height` + transição) ou um **Offcanvas** do React-Bootstrap.
* **Caminhos de imagens**: mistura de `assets/...` e `/assets/...`. Padronize para `/assets/...` em produção.
* **Rotas `/esg` e `/reports`**: são placeholders; o conteúdo principal está na Home (âncoras).
  *Sugestão:* duplicar seções como páginas independentes caso evolua para site multi-página.
* **Downloads dos relatórios**: links são `#` (mock). Substitua por arquivos reais.

---

## 🚀 Modernização (opcional)

Se decidir atualizar o projeto:

* **Migrar de CRA para Vite** (build muito mais rápido):

  1. `npm create vite@latest`
  2. Copie `src/`, `public/` e ajuste imports.
  3. Instale `sass`, `react-router-dom`, `react-bootstrap`, `bootstrap`.
  4. Ajuste o `index.html` (script `type="module"`), e `main.jsx`.
* **Navbar**: substituir por **Offcanvas Navbar** do React-Bootstrap para mobile.
* **Imagens**: otimizar e padronizar em `public/assets`.
* **Acessibilidade**: revisar foco do teclado e contraste.

---

## 📑 Licença

Este projeto é distribuído sob a **MIT License**.
Veja o arquivo [`LICENSE`](./LICENSE) para detalhes.

---

## 👤 Autor & Créditos

* **Autor:** Maken Cristhian
* **Crédito acadêmico:** Faculdade Senac (Trabalho 2023)
* **Design & Conteúdo:** textos de apoio em `textos.html` e componentes React.
* **Ícones:** [react-icons](https://react-icons.github.io/react-icons/).
* **UI base:** [React-Bootstrap](https://react-bootstrap.github.io/) + **Bootstrap 5**.

---

## 📝 Notas Finais

Este repositório representa um **recorte do aprendizado** no curso de ADS com foco em ESG.
Sinta-se à vontade para clonar e rodar localmente como referência de estudo. Para uso em produção, recomenda-se aplicar as melhorias listadas na seção de **Modernização**.
