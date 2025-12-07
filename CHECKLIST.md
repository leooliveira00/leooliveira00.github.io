# ✅ CHECKLIST VISUAL - PASSO A PASSO

Use este checklist para garantir que está tudo pronto antes de divulgar seu portfólio!

---

## 🚀 FASE 1: INSTALAÇÃO

```
[ ] Tenho Node.js instalado (node --version funciona)
[ ] Tenho npm instalado (npm --version funciona)
[ ] Baixei/clonei o projeto portfolio-dev
[ ] Navegei até a pasta do projeto no terminal
[ ] Executei: npm install
[ ] Executei: npm start
[ ] Site abre em http://localhost:3000
[ ] Vejo o portfólio funcionando no navegador
```

**✅ Se todos marcados: vá para FASE 2**
**❌ Se algum falhou: consulte INSTALACAO.md**

---

## 🎨 FASE 2: CUSTOMIZAÇÃO BÁSICA

### 2.1 - Informações Pessoais

```
[ ] Alterei meu nome em public/index.html (linha 14)
[ ] Alterei meu nome em Hero.jsx
[ ] Atualizei link do GitHub em Hero.jsx (linha 118)
[ ] Atualizei link do LinkedIn em Hero.jsx (linha 124)
[ ] Atualizei meu email em Hero.jsx (linha 130)
[ ] Atualizei links em Footer.jsx (linhas 25-33)
[ ] Atualizei email em Contact.jsx (linhas 42-57)
[ ] Atualizei telefone em Contact.jsx
[ ] Atualizei localização em Contact.jsx
```

**Teste:** Clique em TODOS os links no site. Todos devem funcionar!

### 2.2 - Projetos

```
[ ] Abri src/data/projectsData.js
[ ] Li a estrutura de um projeto de exemplo
[ ] Removi TODOS os projetos de exemplo
[ ] Adicionei meu primeiro projeto real
[ ] Adicionei problema + solução + impacto com números
[ ] Adicionei mais 2-4 projetos
[ ] Marquei meus 3 melhores projetos com featured: true
[ ] Todos os projetos têm categoria correta (web/automation/infrastructure)
[ ] Todos os links do GitHub estão corretos (ou null)
```

**Teste:** Navegue pela seção Projetos. Filtros funcionam? Modal abre?

### 2.3 - Habilidades

```
[ ] Abri src/data/skillsData.js
[ ] Ajustei níveis de Frontend (0-100)
[ ] Ajustei níveis de Backend (0-100)
[ ] Ajustei níveis de Infraestrutura (0-100)
[ ] Marquei corretamente: "proficient" para o que domino
[ ] Marquei corretamente: "learning" para o que estou aprendendo
[ ] Adicionei novas habilidades se necessário
[ ] Removi habilidades que não tenho
```

**Teste:** Seção Skills aparece corretamente? Barras animam?

### 2.4 - Trajetória

```
[ ] Abri src/data/timelineData.js
[ ] Substituí experiências de exemplo pelas minhas reais
[ ] Anos estão corretos
[ ] Empresas estão corretas
[ ] Conquistas são específicas e reais
[ ] Marquei minha posição atual com current: true
[ ] Skills de cada período estão corretas
```

**Teste:** Timeline aparece? Conquistas expandem ao clicar?

---

## 🖼️ FASE 3: IMAGENS

```
[ ] Criei a pasta public/projects/ (se não existir)
[ ] Capturei screenshots dos meus projetos
[ ] Otimizei imagens (máx 500KB cada)
[ ] Salvei com nomes claros (projeto-1.jpg, etc)
[ ] Atualizei image: em projectsData.js para cada projeto
[ ] Testei no navegador - todas as imagens aparecem
```

**Teste:** Todos os cards de projetos têm imagens?

---

## 🧪 FASE 4: TESTES

### 4.1 - Links e Navegação

```
[ ] Cliquei em TODOS os links do Navbar - funcionam?
[ ] Cliquei em TODOS os links sociais - funcionam?
[ ] Cliquei em link do GitHub de cada projeto - funcionam?
[ ] Cliquei em link de demo de projetos (se tiver) - funcionam?
[ ] Cliquei em email - abre cliente de email?
[ ] Scroll suave funciona entre seções?
```

### 4.2 - Responsividade

```
[ ] Testei em Chrome desktop (Ctrl+Shift+I → modo mobile)
[ ] Testei em celular real
[ ] Menu hambúrguer funciona em mobile?
[ ] Todas as seções ficam legíveis em mobile?
[ ] Imagens não estouram a tela?
[ ] Botões são clicáveis em touch?
```

### 4.3 - Conteúdo

```
[ ] Revisei TODO o texto - sem erros de português?
[ ] Sem informações de exemplo restantes?
[ ] Sem "Seu Nome", "seu-email@exemplo.com", etc?
[ ] Números e métricas fazem sentido?
[ ] Todos os projetos têm impacto mensurável?
```

### 4.4 - Formulário de Contato

```
[ ] Testei enviar o formulário
[ ] Mensagem de sucesso/erro aparece?
[ ] Campos são limpos após envio?
[ ] Validação funciona (campos obrigatórios)?
```

**Nota:** Formulário está simulado. Para funcionar de verdade, configure EmailJS.

---

## 🚢 FASE 5: BUILD E DEPLOY

### 5.1 - Build Local

```
[ ] Executei: npm run build
[ ] Build completou sem erros?
[ ] Pasta build/ foi criada?
```

### 5.2 - Deploy

**Escolha UMA opção:**

#### Opção A: Vercel (Recomendado)
```
[ ] Criei conta no Vercel.com
[ ] Instalei Vercel CLI: npm install -g vercel
[ ] Executei: vercel
[ ] Segui instruções no terminal
[ ] Recebi URL do portfólio
[ ] Testei URL - site funciona online?
```

#### Opção B: Netlify
```
[ ] Criei conta no Netlify.com
[ ] Acessei netlify.com/drop
[ ] Arrastei pasta build/ para o site
[ ] Recebi URL do portfólio
[ ] Testei URL - site funciona online?
```

#### Opção C: GitHub Pages
```
[ ] Repositório criado no GitHub
[ ] Código commitado e pushed
[ ] Configurei GitHub Pages
[ ] Recebi URL do portfólio
[ ] Testei URL - site funciona online?
```

**Resultado:** URL do meu portfólio: _______________________

---

## 📢 FASE 6: DIVULGAÇÃO

### 6.1 - LinkedIn

```
[ ] Atualizei seção "Sobre" com proposta de valor
[ ] Adicionei URL do portfólio no "Sobre"
[ ] Adicionei URL do portfólio nos "Detalhes de contato"
[ ] Adicionei projetos do portfólio como "Projetos" no perfil
[ ] Fiz post anunciando o portfólio
```

### 6.2 - GitHub

```
[ ] Criei README no meu perfil (github.com/username/username)
[ ] Adicionei URL do portfólio no README do perfil
[ ] Adicionei URL do portfólio na bio do GitHub
[ ] Repositórios principais têm READMEs completos
[ ] Repositórios principais estão públicos
```

### 6.3 - CV

```
[ ] Atualizei CV com URL do portfólio
[ ] URL aparece no topo do CV
[ ] Projetos do CV linkam para seção Projetos do portfólio
```

### 6.4 - Email Signature

```
[ ] Criei assinatura de email profissional
[ ] Incluí URL do portfólio
[ ] Incluí links para GitHub e LinkedIn
```

Exemplo:
```
[Seu Nome]
Full Stack Developer
🌐 Portfolio: seu-portfolio.vercel.app
💼 LinkedIn: linkedin.com/in/seu-perfil
🐙 GitHub: github.com/seu-usuario
```

---

## 🎯 FASE 7: CANDIDATURAS

### 7.1 - Preparação

```
[ ] Preparei lista de 20+ empresas alvo
[ ] Criei template de email de candidatura
[ ] Incluí URL do portfólio no template
[ ] Decorei meu elevator pitch
[ ] Preparei respostas para perguntas comuns
```

### 7.2 - Sistema de Tracking

```
[ ] Criei planilha de acompanhamento
[ ] Colunas: Empresa, Vaga, Data, Status, Contato, Follow-up
[ ] Sistema de lembretes para follow-up (5-7 dias)
```

### 7.3 - Primeira Rodada

```
[ ] Enviei 5 candidaturas personalizadas
[ ] Todas incluem link do portfólio
[ ] Todas destacam diferencial Infra + Dev
[ ] Anotei datas para follow-up
```

---

## 🎓 BÔNUS: OTIMIZAÇÕES FUTURAS

```
[ ] Configurei Google Analytics
[ ] Configurei EmailJS para formulário real
[ ] Adicionei mais projetos conforme desenvolvo
[ ] Configurei domínio personalizado
[ ] Otimizei SEO (meta tags)
[ ] Adicionei seção de blog/artigos (opcional)
[ ] Adicionei certificações (opcional)
[ ] Criei cartão de visita com QR Code do portfólio
```

---

## 📊 MÉTRICAS DE SUCESSO

Acompanhe semanalmente:

```
Semana: ____

Candidaturas enviadas: ____
Respostas recebidas: ____
Entrevistas agendadas: ____
Ofertas recebidas: ____

Feedback comum: ___________________________

Ajustes necessários: ______________________
```

---

## ✅ APROVAÇÃO FINAL

Antes de considerar 100% pronto, confirme:

```
[ ] Site está online e acessível
[ ] Testei em pelo menos 3 navegadores diferentes
[ ] Testei em mobile e desktop
[ ] Todos os links funcionam
[ ] Zero erros de português
[ ] Zero informações de exemplo
[ ] Projetos têm métricas reais
[ ] LinkedIn atualizado
[ ] GitHub atualizado
[ ] CV atualizado
[ ] Primeira rodada de candidaturas enviada
```

---

## 🎉 PARABÉNS!

Se marcou tudo, você está **100% PRONTO** para o mercado!

**Próximos passos:**
1. Envie 5-10 candidaturas/semana
2. Faça follow-up após 5-7 dias
3. Continue estudando e criando projetos
4. Atualize o portfólio com novos projetos
5. Network ativo no LinkedIn

---

## 📞 LEMBRETE

**Salve este checklist!**

Use-o para:
- ✅ Garantir que não esqueceu nada
- ✅ Mostrar para amigos revisarem
- ✅ Atualizar quando adicionar novos projetos
- ✅ Replicar processo em versão 2.0

---

## 💪 VOCÊ CONSEGUE!

Cada checkbox marcado é um passo mais perto da sua vaga ideal.

**Não desista. Continue aplicando. Seu portfólio é forte!**

---

**🚀 Boa sorte na sua jornada! 💙**

---

**Data de conclusão:** __ / __ / ____

**URL do portfólio:** _______________________

**Primeira candidatura enviada em:** __ / __ / ____

