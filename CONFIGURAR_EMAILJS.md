# 📧 Como Configurar EmailJS (Formulário de Contato)

O formulário de contato está funcionando com uma simulação. Para torná-lo funcional e receber emails reais, siga este guia.

---

## 🎯 O Que é EmailJS?

EmailJS permite enviar emails diretamente do JavaScript sem precisar de um servidor backend. É perfeito para portfólios!

**Vantagens:**
- ✅ Gratuito até 200 emails/mês
- ✅ Sem servidor necessário
- ✅ Configuração em 10 minutos
- ✅ Funciona com Gmail, Outlook, etc.

---

## 📝 Passo a Passo

### 1. Criar Conta (2 minutos)

1. Acesse: https://www.emailjs.com
2. Clique em "Sign Up"
3. Crie conta com email ou Google
4. Confirme seu email

### 2. Adicionar Serviço de Email (3 minutos)

1. No dashboard, clique em **"Add New Service"**
2. Escolha seu provedor de email:
   - **Gmail** (mais comum)
   - Outlook
   - Yahoo
   - Ou outro
3. Clique em "Connect Account"
4. Faça login com sua conta de email
5. Autorize o EmailJS
6. Anote o **Service ID** (ex: `service_abc123`)

**Dica:** Use um email profissional (ex: contato@seusite.com) ou crie um Gmail específico para o portfólio.

### 3. Criar Template de Email (3 minutos)

1. Clique em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template:

**Subject (Assunto):**
```
Nova mensagem do portfólio - {{from_name}}
```

**Content (Corpo do email):**
```
Você recebeu uma nova mensagem através do seu portfólio!

Nome: {{from_name}}
Email: {{from_email}}
Assunto: {{subject}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada através do formulário de contato do seu portfólio.
```

4. Clique em **"Save"**
5. Anote o **Template ID** (ex: `template_xyz789`)

### 4. Configurar Destinatário

No template que criou:
1. Role até "Settings"
2. Em **"To Email"**, adicione seu email onde quer receber as mensagens
3. Salve novamente

### 5. Obter Public Key (1 minuto)

1. Clique em **"Account"** (canto superior direito)
2. Na seção **"API Keys"**
3. Copie o **Public Key** (ex: `abc123xyz789`)

### 6. Instalar Biblioteca (1 minuto)

No terminal, na pasta do projeto:

```bash
npm install @emailjs/browser
```

### 7. Configurar no Código (5 minutos)

Abra `src/components/Contact/Contact.jsx` e substitua o handleSubmit:

#### ANTES (simulação):
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Simular envio
  setTimeout(() => {
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
    });
    setIsSubmitting(false);
    // ... resto do código
  }, 1500);
};
```

#### DEPOIS (EmailJS real):
```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Substitua pelos seus IDs
    await emailjs.send(
      'SEU_SERVICE_ID',      // Ex: 'service_abc123'
      'SEU_TEMPLATE_ID',     // Ex: 'template_xyz789'
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      'SUA_PUBLIC_KEY'       // Ex: 'abc123xyz789'
    );

    // Sucesso
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
    });

    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

  } catch (error) {
    // Erro
    console.error('Erro ao enviar:', error);
    setFormStatus({
      submitted: true,
      success: false,
      message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato por email.'
    });
  }

  setIsSubmitting(false);

  // Limpar status após 5 segundos
  setTimeout(() => {
    setFormStatus({ submitted: false, success: false, message: '' });
  }, 5000);
};
```

### 8. Adicionar Import no Topo

No topo de `Contact.jsx`, adicione:

```javascript
import emailjs from '@emailjs/browser';
```

---

## 🔒 Método Mais Seguro (Variáveis de Ambiente)

**MELHOR PRÁTICA:** Não coloque suas chaves diretamente no código.

### Passo 1: Criar arquivo .env

Na raiz do projeto, crie o arquivo `.env`:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=abc123xyz789
```

**Importante:** Arquivo `.env` já está no `.gitignore`, então não será enviado para o GitHub!

### Passo 2: Usar no Código

Em `Contact.jsx`, use assim:

```javascript
await emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message
  },
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
);
```

### Passo 3: Configurar no Vercel/Netlify

Ao fazer deploy, adicione as variáveis de ambiente:

**Vercel:**
1. Settings → Environment Variables
2. Adicione cada variável (sem REACT_APP_ no nome)

**Netlify:**
1. Site Settings → Build & Deploy → Environment
2. Adicione cada variável

---

## 🧪 Testar

### 1. Localmente

1. Reinicie o servidor: `npm start`
2. Preencha o formulário
3. Envie
4. Aguarde a mensagem de sucesso
5. **Verifique seu email** (pode demorar 1-2 minutos)

### 2. Em Produção

Após o deploy:
1. Acesse seu portfólio online
2. Teste o formulário
3. Verifique se recebe o email

---

## 🐛 Troubleshooting

### Erro: "Failed to load"

**Causa:** Service ID, Template ID ou Public Key errados
**Solução:** Verifique se copiou corretamente do EmailJS

### Erro: "Invalid email"

**Causa:** Email destinatário não configurado no template
**Solução:** Configure "To Email" no template do EmailJS

### Não recebo emails

**Causas possíveis:**
1. Email na caixa de spam (verifique!)
2. Template não configurado corretamente
3. Serviço de email não conectado
4. Limite de 200 emails/mês atingido (conta gratuita)

**Solução:** 
1. Verifique spam
2. Revise template no EmailJS
3. Reconecte conta de email
4. Verifique quota no dashboard

### Funciona localmente mas não em produção

**Causa:** Variáveis de ambiente não configuradas no host
**Solução:** Configure environment variables no Vercel/Netlify

---

## 💰 Limites do Plano Gratuito

**EmailJS Gratuito:**
- ✅ 200 emails/mês
- ✅ 2 templates
- ✅ 1 serviço de email
- ✅ Sem limite de tempo

**Se precisar mais:**
- Plano Personal: $9/mês (1000 emails)
- Plano Business: $25/mês (5000 emails)

Para um portfólio pessoal, 200 emails/mês é mais que suficiente!

---

## 🎨 Customizações Avançadas

### 1. Email de Resposta Automática

Crie um segundo template para enviar confirmação para quem preencheu:

**Template: "auto_reply"**
```
Olá {{from_name}},

Obrigado por entrar em contato!

Recebi sua mensagem e retornarei em breve.

Atenciosamente,
[Seu Nome]
```

No código:
```javascript
// Após enviar email principal
await emailjs.send(
  SERVICE_ID,
  'template_auto_reply',
  { from_name: formData.name, to_email: formData.email },
  PUBLIC_KEY
);
```

### 2. Adicionar Anexos

EmailJS não suporta anexos no plano gratuito.

**Alternativa:** Peça para enviarem arquivos por email normal.

### 3. Notificações no Celular

Configure notificações do seu email no celular para ser avisado imediatamente.

---

## 📊 Analytics de Formulário

Monitore quantas mensagens você recebe:

1. Dashboard EmailJS mostra estatísticas
2. Você pode ver:
   - Quantos emails foram enviados
   - Taxa de sucesso
   - Erros

---

## ✅ Checklist de Configuração

```
[ ] Criei conta no EmailJS
[ ] Conectei serviço de email (Gmail/Outlook)
[ ] Criei template de email
[ ] Configurei "To Email" no template
[ ] Copiei Service ID, Template ID e Public Key
[ ] Instalei @emailjs/browser (npm install)
[ ] Atualizei código em Contact.jsx
[ ] Criei arquivo .env com as chaves
[ ] Testei localmente - funciona?
[ ] Recebi email de teste
[ ] Configurei variáveis de ambiente no Vercel/Netlify
[ ] Testei em produção - funciona?
[ ] Email não está indo para spam
```

---

## 🆘 Ainda com Dúvidas?

**Documentação oficial:** https://www.emailjs.com/docs

**Suporte:** support@emailjs.com

**Tutoriais em vídeo:** YouTube → "EmailJS tutorial"

---

## 💡 Dica Final

EmailJS é ótimo para portfólios, mas se você receber MUITAS mensagens (mais de 200/mês), considere:

1. **Formspree** - alternativa similar
2. **Criar backend próprio** com Node.js + Nodemailer
3. **Upgrade plano EmailJS**

Para começar, EmailJS gratuito é perfeito! 👍

---

**🎉 Pronto! Agora seu formulário de contato está 100% funcional!**

Teste enviando uma mensagem para você mesmo! 📧✨

