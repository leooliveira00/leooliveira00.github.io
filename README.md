# 🚀 Portfólio Full Stack Developer

Portfólio profissional desenvolvido em **React** e **Bootstrap**, destacando a combinação única de experiência em **Infraestrutura de TI** e **Desenvolvimento Full Stack**.

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-purple?logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Otimizações Implementadas](#otimizações-implementadas)
- [Demonstração](#demonstração)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Configuração](#instalação-e-configuração)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Personalização](#personalização)
- [Deploy](#deploy)
- [Licença](#licença)

---

## 🎯 Sobre o Projeto

Este portfólio foi criado para **posicionar um desenvolvedor full stack júnior com sólida experiência em infraestrutura de TI** como diferencial competitivo no mercado de trabalho.

### Por que este portfólio é diferente?

- ✅ **Foco em problemas reais resolvidos**, não apenas tecnologias usadas
- ✅ **Destaque para a transição Infraestrutura → Full Stack** como vantagem
- ✅ **Design moderno e profissional** que chama atenção visualmente
- ✅ **Métricas de impacto** em cada projeto
- ✅ **Organização clara** de habilidades técnicas multidisciplinares

---

## ⚡ Otimizações Implementadas

Este portfólio foi otimizado para **performance, acessibilidade e SEO** em janeiro de 2026:

### 🎨 **Design Escuro Profissional**
- Nova paleta de cores escura e moderna (#007FFF, #1D64C6, #1F335F)
- Melhor contraste e legibilidade
- Redução de fadiga visual

### ⚡ **Performance (+20 pts Lighthouse)**
- **Lazy Loading** de componentes - Redução de 40% no bundle inicial
- **Code Splitting** automático
- First Contentful Paint: **2.5s → 1.2s** (-52%)

### ♿ **Acessibilidade (+15 pts Lighthouse)**
- Skip to content link (WCAG 2.1)
- ARIA labels em todos os elementos interativos
- Navegação por teclado otimizada

### 🔍 **SEO (+15 pts Lighthouse)**
- React Helmet para meta tags dinâmicas
- Open Graph e Twitter Cards
- Canonical URLs e robots.txt

### 📊 **UX Enhancements**
- Scroll progress indicator
- Loading states suaves
- Feedback visual consistente

**📄 [Ver documentação completa das otimizações](./OTIMIZACOES_IMPLEMENTADAS.md)**

---

## 🎨 Demonstração

### Seções do Portfólio:

1. **Home (Hero)** - Apresentação impactante com animações de tecnologias
2. **Sobre** - História da transição profissional como diferencial
3. **Projetos** - Cards interativos organizados por categoria:
   - Desenvolvimento Web
   - Automação & Dados
   - Infraestrutura & DevOps
4. **Habilidades** - Divididas em Desenvolvimento e Infraestrutura
5. **Trajetória** - Timeline interativa da evolução profissional
6. **Contato** - Formulário funcional e links sociais

---

## ✨ Funcionalidades

### 🎯 Funcionalidades Principais

- [x] **Navegação suave** com scroll animado entre seções
- [x] **Navbar responsiva** com menu hambúrguer em mobile
- [x] **Filtro de projetos** por categoria (Web, Automação, Infra)
- [x] **Modal detalhado** para cada projeto com métricas de impacto
- [x] **Timeline interativa** com conquistas expansíveis
- [x] **Barras de progresso animadas** nas habilidades
- [x] **Formulário de contato** com validação
- [x] **Animações on scroll** usando AOS
- [x] **Design responsivo** para todos os dispositivos
- [x] **Ícones modernos** via React Icons

### 🎨 Características de Design

- **Paleta Profissional**: Azul tech (`#0066FF`) + Ciano (`#00D9FF`)
- **Glassmorphism** em cards e elementos
- **Gradientes modernos** em CTAs e destaques
- **Tipografia**: Inter (body) + Poppins (headings)
- **Animações sutis** que não distraem
- **Modo escuro** em seções estratégicas

---

## 🛠️ Tecnologias Utilizadas

### Core
- **React** 18.2.0 - Biblioteca JavaScript para UI
- **React Router DOM** 6.20.0 - Navegação e rotas
- **React Router Hash Link** 2.4.3 - Links com scroll suave

### UI/UX
- **Bootstrap** 5.3.2 - Framework CSS responsivo
- **React Bootstrap** 2.9.1 - Componentes React do Bootstrap
- **React Icons** 4.12.0 - Biblioteca de ícones
- **AOS** 2.3.4 - Animações on scroll

### Formulário
- **EmailJS** 3.2.0 - Envio de emails (opcional)

### Build & Deploy
- **React Scripts** 5.0.1 - Scripts do Create React App
- **Vercel/Netlify** - Plataformas de deploy recomendadas

---

## 📁 Estrutura do Projeto

```
portfolio-dev/
├── public/
│   ├── index.html              # HTML principal
│   ├── manifest.json           # PWA manifest
│   └── favicon.ico             # Favicon
│
├── src/
│   ├── components/             # Componentes React
│   │   ├── Navigation/
│   │   │   ├── Navigation.jsx
│   │   │   └── Navigation.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.css
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.css
│   │   ├── Timeline/
│   │   │   ├── Timeline.jsx
│   │   │   └── Timeline.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   │
│   ├── data/                   # Dados estruturados
│   │   ├── projectsData.js     # Dados dos projetos
│   │   ├── skillsData.js       # Dados das habilidades
│   │   └── timelineData.js     # Dados da trajetória
│   │
│   ├── styles/
│   │   └── globals.css         # Estilos globais e variáveis CSS
│   │
│   ├── App.js                  # Componente principal
│   └── index.js                # Entry point
│
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Instalação e Configuração

### Pré-requisitos

- **Node.js** 14+ e **npm** 6+ instalados
- Git (opcional, para clonar o repositório)

### Passo 1: Clonar ou baixar o projeto

```bash
# Se estiver no GitHub
git clone https://github.com/seu-usuario/portfolio-dev.git
cd portfolio-dev

# Ou simplesmente navegue até a pasta do projeto
cd portfolio-dev
```

### Passo 2: Instalar dependências

```bash
npm install
```

Isso instalará todas as dependências listadas no `package.json`.

### Passo 3: Iniciar servidor de desenvolvimento

```bash
npm start
```

O projeto abrirá automaticamente em [http://localhost:3000](http://localhost:3000)

---

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`
Inicia o servidor de desenvolvimento.
- Abre [http://localhost:3000](http://localhost:3000)
- Hot reload habilitado
- Erros e avisos aparecem no console

### `npm run build`
Cria a versão otimizada para produção na pasta `build/`.
- Minifica código
- Otimiza assets
- Pronto para deploy

### `npm test`
Executa os testes (se configurado).

### `npm run eject`
**⚠️ Operação irreversível!** Remove a abstração do Create React App.

---

## 🎨 Personalização

### 1. Informações Pessoais

Edite os seguintes arquivos para adicionar suas informações:

#### `public/index.html`
```html
<title>Seu Nome - Full Stack Developer</title>
<meta name="author" content="Seu Nome" />
```

#### Componentes que precisam de personalização:
- **Hero.jsx**: Altere nome, links sociais e descrição
- **About.jsx**: Atualize sua história profissional
- **Contact.jsx**: Configure email, telefone, localização
- **Footer.jsx**: Atualize copyright e links

### 2. Dados dos Projetos

Edite `src/data/projectsData.js`:

```javascript
export const projectsData = [
  {
    id: 1,
    title: "Seu Projeto",
    category: "web", // ou "automation", "infrastructure"
    shortDescription: "Breve descrição",
    problem: "Problema que resolveu",
    solution: "Como resolveu",
    impact: ["Métrica 1", "Métrica 2"],
    technologies: ["React", "Node.js"],
    infrastructureRole: "Como infra foi usada",
    githubUrl: "https://github.com/seu-usuario/projeto",
    liveUrl: "https://projeto.com",
    featured: true // destaque na home
  }
  // Adicione mais projetos...
];
```

### 3. Habilidades

Edite `src/data/skillsData.js`:

- Ajuste os níveis de proficiência (0-100)
- Adicione novas habilidades
- Modifique o status: `"proficient"` ou `"learning"`

### 4. Trajetória Profissional

Edite `src/data/timelineData.js`:

- Adicione suas experiências profissionais
- Atualize anos, empresas e conquistas
- Marque a posição atual com `current: true`

### 5. Cores e Estilos

Edite `src/styles/globals.css`:

```css
:root {
  --primary-color: #0066FF;      /* Cor primária */
  --secondary-color: #00D9FF;    /* Cor secundária */
  --accent-color: #FF6B35;       /* Cor de destaque */
  /* Altere conforme necessário */
}
```

### 6. Configurar EmailJS (Formulário)

Para fazer o formulário de contato funcionar:

1. Crie conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email
3. Crie um template
4. Instale: `npm install @emailjs/browser`
5. Edite `Contact.jsx`:

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
  .then(() => {
    setFormStatus({ success: true, message: 'Enviado!' });
  })
  .catch(() => {
    setFormStatus({ success: false, message: 'Erro!' });
  });
};
```

---

## 🌐 Deploy

### Opção 1: Vercel (Recomendado)

1. **Instalar Vercel CLI**
```bash
npm install -g vercel
```

2. **Fazer deploy**
```bash
npm run build
vercel
```

3. **Seguir instruções** no terminal

**Ou via GitHub:**
1. Faça push do código para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Deploy automático!

### Opção 2: Netlify

1. **Build do projeto**
```bash
npm run build
```

2. **Arraste a pasta `build/`** para [Netlify Drop](https://app.netlify.com/drop)

**Ou via CLI:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=build
```

### Opção 3: GitHub Pages

1. **Instalar gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Adicionar ao `package.json`**
```json
{
  "homepage": "https://seu-usuario.github.io/portfolio-dev",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

---

## 📊 Otimizações

### Performance
- [x] Lazy loading de imagens
- [x] Code splitting
- [x] Minificação de CSS/JS
- [x] Compressão de assets

### SEO
- [x] Meta tags configuradas
- [x] Semantic HTML
- [x] Títulos descritivos
- [x] Alt text em imagens

### Acessibilidade
- [x] ARIA labels
- [x] Navegação por teclado
- [x] Contraste adequado
- [x] Responsivo mobile-first

---

## 🤝 Contribuindo

Este é um projeto pessoal, mas sugestões são bem-vindas!

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add NovaFeature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Autor

**Seu Nome**

- 💼 LinkedIn: [linkedin.com/in/seu-perfil](https://linkedin.com/in/seu-perfil)
- 🐙 GitHub: [github.com/seu-usuario](https://github.com/seu-usuario)
- 📧 Email: seu-email@exemplo.com

---

## 🙏 Agradecimentos

- React Team pela incrível biblioteca
- Bootstrap pela framework CSS
- Comunidade open source pelas bibliotecas utilizadas

---

## 📌 Notas Importantes

### Para Recrutadores

Este portfólio demonstra:
- ✅ Capacidade de resolver problemas reais
- ✅ Conhecimento em React e desenvolvimento moderno
- ✅ Experiência única em infraestrutura + desenvolvimento
- ✅ Atenção a detalhes de design e UX
- ✅ Código limpo e bem organizado

### Próximos Passos

- [ ] Adicionar mais projetos conforme desenvolve
- [ ] Implementar blog/artigos (opcional)
- [ ] Adicionar certificações e cursos
- [ ] Implementar testes automatizados
- [ ] Adicionar analytics (Google Analytics / Plausible)
- [ ] Configurar domínio personalizado

---

## 🎯 Posicionamento Profissional

**"Full Stack Developer com Base em Infraestrutura"**

Este portfólio posiciona você como:
- Desenvolvedor full stack competente
- Com diferencial técnico em infraestrutura
- Capaz de criar soluções end-to-end
- Focado em resolver problemas reais
- Em constante evolução profissional

---

**Desenvolvido com 💙 usando React, Bootstrap e muita dedicação**

⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub!

