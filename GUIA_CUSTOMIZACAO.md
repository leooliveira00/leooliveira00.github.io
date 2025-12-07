# 📝 Guia de Customização Rápida

Este guia mostra exatamente o que você precisa alterar para personalizar o portfólio com suas informações.

---

## 🎯 Customização Essencial (Ordem de Prioridade)

### 1️⃣ PRIORIDADE ALTA - Informações Pessoais

#### Arquivo: `public/index.html`
```html
<!-- Linha 14-15: Altere o título e autor -->
<title>SEU NOME - Full Stack Developer</title>
<meta name="author" content="SEU NOME" />
```

#### Arquivo: `src/components/Hero/Hero.jsx`
```javascript
// Linha 76: Seu nome
<h1 className="hero-title animate-fade-in-up">
  Full Stack Developer
  <br />
  <span className="gradient-text">com Base em Infraestrutura</span>
</h1>

// Linhas 118-137: Links sociais
<a href="https://github.com/SEU-USUARIO" ...>
<a href="https://linkedin.com/in/SEU-PERFIL" ...>
<a href="mailto:SEU-EMAIL@exemplo.com" ...>
```

#### Arquivo: `src/components/Contact/Contact.jsx`
```javascript
// Linhas 42-57: Suas informações de contato
const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'SEU-EMAIL@exemplo.com',
    link: 'mailto:SEU-EMAIL@exemplo.com'
  },
  {
    icon: <FaPhone />,
    label: 'Telefone',
    value: '+55 (XX) XXXXX-XXXX',
    link: 'tel:+55XXXXXXXXXXX'
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Localização',
    value: 'SUA CIDADE, ESTADO',
    link: null
  }
];

// Linhas 60-77: Links das redes sociais
const socialLinks = [
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/SEU-PERFIL',
    color: '#0077B5'
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    url: 'https://github.com/SEU-USUARIO',
    color: '#333'
  },
  // ...
];
```

#### Arquivo: `src/components/Footer/Footer.jsx`
```javascript
// Linhas 25-33: Links de navegação e sociais
const footerLinks = {
  social: [
    { 
      name: 'GitHub', 
      icon: <FaGithub />, 
      url: 'https://github.com/SEU-USUARIO' 
    },
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedin />, 
      url: 'https://linkedin.com/in/SEU-PERFIL' 
    },
    { 
      name: 'Email', 
      icon: <FaEnvelope />, 
      url: 'mailto:SEU-EMAIL@exemplo.com' 
    }
  ]
};

// Linha 121: Email de contato
<a href="mailto:SEU-EMAIL@exemplo.com" ...>
  <FaEnvelope />
  SEU-EMAIL@exemplo.com
</a>

// Linha 143: Seu nome no copyright
Desenvolvido por <strong>SEU NOME</strong> - Full Stack Developer
```

---

### 2️⃣ PRIORIDADE ALTA - Dados dos Projetos

#### Arquivo: `src/data/projectsData.js`

**IMPORTANTE:** Substitua TODOS os projetos de exemplo pelos seus projetos reais.

```javascript
export const projectsData = [
  {
    id: 1,
    title: "NOME DO SEU PROJETO",
    category: "web", // ou "automation" ou "infrastructure"
    categoryLabel: "Desenvolvimento Web",
    shortDescription: "Breve descrição em 1 linha",
    
    // O PROBLEMA QUE RESOLVEU (seja específico!)
    problem: "Descreva o problema real que existia antes da sua solução",
    
    // A SOLUÇÃO E IMPACTO (com números se possível!)
    solution: "Como você resolveu e qual foi o resultado mensurável",
    
    // MÉTRICAS DE IMPACTO (liste 3-5 resultados concretos)
    impact: [
      "Resultado 1 com número/percentual",
      "Resultado 2 com métrica",
      "Resultado 3 com impacto",
      "Resultado 4 (se aplicável)"
    ],
    
    // TECNOLOGIAS USADAS
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    
    // COMO A INFRAESTRUTURA FOI ENVOLVIDA (seu diferencial!)
    infrastructureRole: "Descreva como você usou conhecimento de infra neste projeto",
    
    // LINKS
    githubUrl: "https://github.com/seu-usuario/nome-projeto",
    liveUrl: "https://projeto-live.com", // ou null se não tiver
    
    // DESTAQUE NA HOME?
    featured: true // true para seus 3 melhores projetos
  },
  // Adicione mais projetos...
];
```

**Exemplo Real baseado em seus projetos:**

```javascript
{
  id: 1,
  title: "Sistema de Reservas de Salas",
  category: "web",
  categoryLabel: "Desenvolvimento Web",
  shortDescription: "Aplicação web para gerenciamento de reservas de salas de reunião",
  problem: "Controle manual em papel gerava conflitos de agendamento constantes e perda de 5h/semana da equipe administrativa em retrabalho",
  solution: "Sistema web automatizado que eliminou conflitos, economizou 5h/semana e aumentou a eficiência em 80%",
  impact: [
    "Eliminação de 100% dos conflitos de agendamento",
    "Economia de 5 horas/semana da equipe administrativa",
    "Redução de 80% no tempo de marcação de reuniões",
    "Taxa de adoção de 95% pelos usuários em 1 mês"
  ],
  technologies: ["Python", "Flask", "JavaScript", "Bootstrap", "SQLite", "HTML5", "CSS3"],
  infrastructureRole: "Deploy em servidor Linux com automação de backup diário, configuração de servidor web Nginx e monitoramento de uptime",
  githubUrl: "https://github.com/seu-usuario/reservas-salas",
  liveUrl: null, // ou URL se estiver online
  featured: true
}
```

---

### 3️⃣ PRIORIDADE MÉDIA - Habilidades Técnicas

#### Arquivo: `src/data/skillsData.js`

Ajuste os níveis (0-100) e status para refletir sua realidade:

```javascript
// Status possíveis:
// "proficient" = verde = você domina
// "learning" = azul = está aprendendo ativamente
// "familiar" = roxo = conhece mas não usa muito

{
  name: "React",
  level: 70, // Ajuste de 0-100 baseado em sua experiência
  status: "learning" // ou "proficient"
}
```

**Dica:** Seja honesto! É melhor ter 70% em React "learning" do que 95% "proficient" se não for verdade.

---

### 4️⃣ PRIORIDADE MÉDIA - Trajetória Profissional

#### Arquivo: `src/data/timelineData.js`

Atualize com sua trajetória REAL:

```javascript
{
  id: 1,
  year: "2019 - 2021", // Seus anos
  title: "SEU CARGO REAL",
  company: "NOME DA EMPRESA",
  type: "infrastructure", // ou "transition", "development", "future"
  description: "Breve descrição do que fez neste período",
  achievements: [
    "Conquista específica 1",
    "Conquista específica 2",
    "Conquista específica 3",
    "Conquista específica 4"
  ],
  skills: ["Skill1", "Skill2", "Skill3"],
  icon: "server", // ou "code", "box", "zap", "target"
  current: false // true apenas para o cargo atual
}
```

---

### 5️⃣ PRIORIDADE BAIXA - Estilos e Cores

#### Arquivo: `src/styles/globals.css`

Se quiser mudar as cores:

```css
:root {
  /* Suas cores personalizadas */
  --primary-color: #0066FF;      /* Cor principal */
  --secondary-color: #00D9FF;    /* Cor secundária */
  --accent-color: #FF6B35;       /* Cor de destaque */
  
  /* Não mexa no resto se não souber CSS */
}
```

---

## ✅ Checklist de Personalização

Marque conforme for completando:

### Informações Pessoais
- [ ] Nome no `index.html`
- [ ] Nome no `Hero.jsx`
- [ ] Links do GitHub em todos os componentes
- [ ] Links do LinkedIn em todos os componentes
- [ ] Email em todos os componentes
- [ ] Telefone no `Contact.jsx`
- [ ] Localização no `Contact.jsx`
- [ ] Nome no copyright do `Footer.jsx`

### Conteúdo
- [ ] Substitui TODOS os projetos de exemplo pelos meus projetos reais
- [ ] Cada projeto tem problema + solução + impacto claro
- [ ] Inclui métricas reais sempre que possível
- [ ] Links do GitHub dos projetos funcionam
- [ ] Níveis de habilidades refletem minha realidade
- [ ] Trajetória profissional está correta
- [ ] Timeline tem minha empresa/experiência real

### Funcional
- [ ] Testei todos os links (GitHub, LinkedIn, Email)
- [ ] Formulário de contato funciona (ou integrei EmailJS)
- [ ] Site responsivo em mobile
- [ ] Todas as seções aparecem corretamente
- [ ] Navegação funciona em todas as seções

### Deploy
- [ ] Fiz build: `npm run build`
- [ ] Testei a build localmente
- [ ] Deploy feito (Vercel/Netlify/GitHub Pages)
- [ ] Domínio configurado (se aplicável)
- [ ] Compartilhei o link!

---

## 🚨 ERROS COMUNS A EVITAR

1. ❌ **Deixar informações de exemplo**
   - Não deixe "seu-email@exemplo.com" ou "Seu Nome"
   - Substitua TUDO por suas informações reais

2. ❌ **Projetos sem impacto mensurável**
   - ❌ Ruim: "Criei um site"
   - ✅ Bom: "Criei um site que gerou 40% mais clientes em 3 meses"

3. ❌ **Links quebrados**
   - Teste TODOS os links antes de publicar
   - GitHub, LinkedIn, projetos, email, telefone

4. ❌ **Níveis de habilidade irreais**
   - Seja honesto sobre seu nível
   - "Learning" não é vergonha, é transparência

5. ❌ **Esquecer de fazer build antes do deploy**
   - Sempre rode `npm run build` antes de fazer deploy

---

## 💡 DICAS PROFISSIONAIS

### Para Projetos

**Estrutura ideal de descrição:**
1. **Problema**: O que estava errado/faltando?
2. **Solução**: O que você construiu?
3. **Impacto**: Qual foi o resultado? (com números!)
4. **Tecnologias**: O que usou?
5. **Infraestrutura**: Como seu conhecimento de infra ajudou?

### Para Impacto

Use números sempre que possível:
- ✅ "Reduziu tempo de X para Y" 
- ✅ "Aumentou em X%"
- ✅ "Economizou X horas por semana"
- ✅ "X usuários adotaram em Y meses"

### Para Habilidades

Seja estratégico:
- Coloque suas **forças** em destaque
- Mostre que está **aprendendo** (demonstra proatividade)
- Seja **honesto** sobre seu nível

---

## 📞 Precisa de Ajuda?

Se tiver dúvidas sobre alguma customização:

1. Leia o `README.md` principal
2. Verifique os comentários no código
3. Consulte a documentação do React/Bootstrap
4. Pesquise erros específicos no Google/Stack Overflow

---

**Boa sorte com seu portfólio! 🚀**

