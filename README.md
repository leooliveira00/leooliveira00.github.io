# 🚀 Portfólio de Leonardo Sousa

Portfólio pessoal desenvolvido em **React** e **Bootstrap**, destacando a combinação de experiência em **Infraestrutura de TI** e **Desenvolvimento Full Stack**.

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-purple?logo=bootstrap)

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Configuração](#instalação-e-configuração)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Deploy](#deploy)
- [Contato](#contato)
- [Próximos Passos](#próximos-passos)

---

## 🎯 Sobre o Projeto

Portfólio profissional que posiciona minha transição de **Infraestrutura de TI** para **Desenvolvimento Full Stack** como diferencial competitivo, com foco em:

- ✅ Problemas reais resolvidos em cada projeto, não apenas tecnologias usadas
- ✅ Métricas de impacto concretas (escala, tempo economizado, resultados)
- ✅ Projetos com print real da aplicação, não só descrição em texto
- ✅ Organização clara de habilidades técnicas multidisciplinares (dev + infra)
- ✅ Suporte a português e inglês (i18n)

---

## 🎨 Seções do Portfólio

1. **Home (Hero)**: apresentação com animação de stack de tecnologias
2. **Sobre**: a trajetória de infraestrutura a full stack
3. **Projetos**: cards com destaque, modal detalhado (problema, solução, impacto, stack) e galeria de imagens navegável
4. **Habilidades**: desenvolvimento e infraestrutura, organizadas por grupo
5. **Trajetória**: timeline da evolução profissional com conquistas expansíveis
6. **Contato**: formulário funcional (EmailJS) e links sociais

---

## ✨ Funcionalidades

- [x] Navegação suave com scroll animado entre seções
- [x] Navbar responsiva com menu hambúrguer em mobile
- [x] Cards de projeto com destaque e expansão ("Ver mais projetos")
- [x] Modal de projeto com galeria de imagens (setas, indicadores) e lightbox em tela cheia
- [x] Habilidades organizadas em tags por categoria (proficiente / em aprendizado)
- [x] Timeline interativa com conquistas expansíveis
- [x] Formulário de contato funcional via EmailJS
- [x] Internacionalização PT-BR / EN-US com seletor de idioma
- [x] SEO dinâmico (meta tags, Open Graph, Twitter Cards) via React Helmet
- [x] Lazy loading e code splitting por seção
- [x] Design responsivo, acessível (ARIA, skip link, navegação por teclado)

---

## 🛠️ Tecnologias Utilizadas

### Core
- **React** 18 + **React Router DOM** + **React Router Hash Link**

### UI/UX
- **Bootstrap** 5 + **React Bootstrap**
- **React Icons**
- **AOS**: animações on scroll

### Internacionalização & SEO
- **i18next** + **react-i18next** + **i18next-browser-languagedetector**
- **react-helmet-async**

### Formulário
- **@emailjs/browser**: envio de e-mail direto do frontend

### Build
- **React Scripts** (Create React App)

---

## 📁 Estrutura do Projeto

```
portfolio-dev/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── projects/               # Screenshots dos projetos usados nos cards/modal
│
├── src/
│   ├── components/              # Um componente por seção (+ .css correspondente)
│   │   ├── Navigation/ Hero/ About/ Projects/ Skills/ Timeline/ Contact/ Footer/
│   │   └── SEO/ ScrollProgress/ LanguageSwitcher/
│   │
│   ├── locales/                 # Fonte real dos textos do site (pt-BR e en-US)
│   │   ├── pt-BR/*.json
│   │   └── en-US/*.json
│   │
│   ├── i18n/config.js           # Configuração do i18next
│   ├── data/timelineData.js     # Dados da timeline (única fonte de dados fora do i18n)
│   ├── styles/globals.css       # Variáveis CSS e estilos globais
│   ├── App.js
│   └── index.js
│
├── .gitignore
├── package.json
└── README.md
```

> Detalhes de arquitetura (por que o conteúdo vive em `locales/` e não em `data/`, como o i18n é montado, etc.) estão documentados em [CLAUDE.md](./CLAUDE.md).

---

## 🚀 Instalação e Configuração

### Pré-requisitos

- **Node.js** 18+ e **npm**

### Passos

```bash
git clone https://github.com/leooliveira00/portfolio-dev.git
cd portfolio-dev
npm install
npm start
```

O projeto abre em [http://localhost:3000](http://localhost:3000)

### Variáveis de ambiente

O formulário de contato usa EmailJS. Crie um arquivo `.env` na raiz (nunca commitado, já está no `.gitignore`) com:

```
REACT_APP_EMAILJS_SERVICE_ID=xxxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=xxxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxx
```

Sem essas variáveis, o envio do formulário falha silenciosamente no `catch` do `Contact.jsx`.

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm start` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Build de produção na pasta `build/` |
| `npm test` | Executa os testes (nenhum teste implementado ainda) |
| `npm run eject` | ⚠️ Irreversível, remove a abstração do Create React App |

---

## 🌐 Deploy

### GitHub Pages

As imagens dos projetos usam caminho absoluto (`/projects/...`), então o site precisa ser servido a partir da **raiz do domínio**. Isso significa publicar numa *user page* (repositório `leooliveira00.github.io`), em vez de uma *project page* (`.../portfolio-dev/`), que quebraria esses caminhos.

```bash
npm run build
# publicar o conteúdo de build/ no repositório leooliveira00.github.io
```

### Alternativas (Vercel / Netlify)

Ambos detectam automaticamente o build do Create React App a partir do repositório Git, sem esse problema de subpasta.

---

## 📞 Contato

**Leonardo Sousa**

- 💼 LinkedIn: [linkedin.com/in/leooliveira00](https://www.linkedin.com/in/leooliveira00/)
- 🐙 GitHub: [github.com/leooliveira00](https://github.com/leooliveira00/)
- 📧 Email: lsousa2020@hotmail.com

---

## 📌 Para Recrutadores

Este portfólio demonstra:
- ✅ Capacidade de resolver problemas reais de negócio, com métricas de impacto
- ✅ Experiência combinando infraestrutura e desenvolvimento full stack
- ✅ Projetos com arquitetura não trivial (integração com ERP, motores de regras de negócio, autenticação, i18n)
- ✅ Atenção a detalhes de design, UX e acessibilidade

---

## 📌 Próximos Passos

- [ ] Configurar domínio personalizado
- [ ] Implementar testes automatizados
- [ ] Adicionar analytics (Google Analytics / Plausible)
- [ ] Adicionar certificações e cursos conforme concluídos
