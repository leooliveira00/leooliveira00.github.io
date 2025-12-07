# 🚀 Guia de Instalação e Primeiro Uso

Este guia vai te ajudar a colocar o portfólio funcionando em menos de 10 minutos!

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:

- ✅ **Node.js** versão 14 ou superior
- ✅ **npm** versão 6 ou superior
- ✅ Editor de código (VS Code recomendado)
- ✅ Navegador moderno (Chrome, Firefox, Edge)

### Verificar se tem Node.js instalado

Abra o terminal/prompt de comando e digite:

```bash
node --version
npm --version
```

Se aparecer um número de versão, você tem o Node instalado. Se não:

**Windows:**
- Baixe em: https://nodejs.org (versão LTS)
- Execute o instalador
- Reinicie o computador

**Mac/Linux:**
- Use o gerenciador de pacotes do seu sistema
- Ou baixe em: https://nodejs.org

---

## 🎬 Instalação Passo a Passo

### Passo 1: Navegue até a pasta do projeto

Abra o terminal/prompt de comando e vá até a pasta do projeto:

```bash
cd caminho/para/portfolio-dev
```

**Exemplo Windows:**
```bash
cd C:\Users\suporte\Documents\Projetos\portfolio-dev
```

### Passo 2: Instale as dependências

Execute o comando:

```bash
npm install
```

**O que este comando faz:**
- Baixa todas as bibliotecas necessárias (React, Bootstrap, etc)
- Cria a pasta `node_modules` com todas as dependências
- Pode levar 2-5 minutos dependendo da sua internet

**Você verá algo como:**
```
npm WARN deprecated ...
added 1500 packages in 3m
```

### Passo 3: Inicie o servidor de desenvolvimento

Execute:

```bash
npm start
```

**O que acontece:**
- Compila o projeto React
- Abre automaticamente http://localhost:3000 no navegador
- Se não abrir, abra manualmente o navegador em: `http://localhost:3000`

**Você verá algo como:**
```
Compiled successfully!

You can now view portfolio-dev in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.X:3000
```

### Passo 4: Ver o site funcionando

O navegador deve abrir automaticamente. Se não:

1. Abra o navegador
2. Digite: `http://localhost:3000`
3. Você deve ver o portfólio funcionando!

---

## 🎨 Próximos Passos - Customização

Agora que está funcionando, você precisa personalizar com suas informações!

### 1. Customize informações pessoais

Abra o arquivo `src/components/Hero/Hero.jsx` e altere:

```javascript
// Linha 118-137
<a href="https://github.com/SEU-USUARIO" ...>
<a href="https://linkedin.com/in/SEU-PERFIL" ...>
<a href="mailto:SEU-EMAIL@exemplo.com" ...>
```

**Salve o arquivo** e o site atualizará automaticamente!

### 2. Adicione seus projetos

Abra `src/data/projectsData.js` e substitua os projetos de exemplo pelos seus:

```javascript
{
  id: 1,
  title: "Seu Projeto Real",
  // ... suas informações
}
```

### 3. Atualize suas habilidades

Abra `src/data/skillsData.js` e ajuste os níveis:

```javascript
{ name: "React", level: 70, status: "learning" }
```

### 4. Configure seu histórico

Abra `src/data/timelineData.js` e adicione sua trajetória.

**👉 Para mais detalhes, veja o arquivo `GUIA_CUSTOMIZACAO.md`**

---

## 🔧 Comandos Úteis

### Parar o servidor

No terminal onde está rodando, pressione:
- **Windows:** `Ctrl + C`
- **Mac/Linux:** `Cmd + C`

### Iniciar novamente

```bash
npm start
```

### Limpar cache (se algo der errado)

```bash
# Windows
rmdir /s /q node_modules
del package-lock.json
npm install

# Mac/Linux
rm -rf node_modules package-lock.json
npm install
```

### Criar versão para produção

```bash
npm run build
```

Isso cria a pasta `build/` com o site otimizado para publicar.

---

## 🐛 Solucionando Problemas Comuns

### Problema: "npm não é reconhecido como comando"

**Solução:**
1. Node.js não está instalado ou não está no PATH
2. Instale/reinstale o Node.js
3. Reinicie o terminal após a instalação

### Problema: "Port 3000 is already in use"

**Solução:**
1. Outra aplicação está usando a porta 3000
2. Feche ela ou use outra porta:
   ```bash
   # Windows
   set PORT=3001 && npm start
   
   # Mac/Linux
   PORT=3001 npm start
   ```

### Problema: "Module not found" ou erros de importação

**Solução:**
1. Deletar node_modules e reinstalar:
   ```bash
   rm -rf node_modules
   npm install
   ```

### Problema: Mudanças não aparecem no navegador

**Solução:**
1. Força atualização do navegador: `Ctrl + F5`
2. Limpe cache do navegador
3. Reinicie o servidor de desenvolvimento

### Problema: Erro "ENOENT: no such file or directory"

**Solução:**
1. Certifique-se de estar na pasta correta do projeto
2. Verifique se todos os arquivos foram copiados

---

## 📱 Testando em Dispositivos Móveis

### Na mesma rede Wi-Fi:

1. Com o servidor rodando, veja o endereço "On Your Network":
   ```
   On Your Network:  http://192.168.1.10:3000
   ```

2. No seu celular/tablet, conecte na mesma Wi-Fi

3. Abra o navegador e acesse o IP mostrado

**Dica:** Útil para testar responsividade!

---

## 🌐 Deploy (Publicar na Internet)

Depois de personalizar tudo, publique seu portfólio!

### Opção 1: Vercel (Mais Fácil)

1. Crie conta em: https://vercel.com
2. Instale Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Na pasta do projeto:
   ```bash
   vercel
   ```
4. Siga as instruções no terminal
5. Pronto! Você terá uma URL como: `portfolio-dev.vercel.app`

### Opção 2: Netlify

1. Build do projeto:
   ```bash
   npm run build
   ```
2. Acesse: https://app.netlify.com/drop
3. Arraste a pasta `build/` para lá
4. Pronto!

### Opção 3: GitHub Pages

1. Crie repositório no GitHub
2. Faça push do código
3. Configure GitHub Pages nas configurações
4. URL será: `seu-usuario.github.io/portfolio-dev`

**👉 Para mais detalhes de deploy, veja o `README.md`**

---

## 📁 Estrutura de Arquivos Importantes

```
portfolio-dev/
├── public/
│   └── index.html          ← Título da página
├── src/
│   ├── components/         ← Componentes React
│   │   ├── Hero/           ← Seção inicial
│   │   ├── About/          ← Sobre você
│   │   ├── Projects/       ← Seus projetos
│   │   ├── Skills/         ← Habilidades
│   │   ├── Timeline/       ← Trajetória
│   │   ├── Contact/        ← Contato
│   │   └── Footer/         ← Rodapé
│   ├── data/               ← DADOS PARA CUSTOMIZAR
│   │   ├── projectsData.js ← Seus projetos aqui!
│   │   ├── skillsData.js   ← Suas skills aqui!
│   │   └── timelineData.js ← Sua história aqui!
│   ├── App.js              ← App principal
│   └── index.js            ← Entry point
└── package.json            ← Dependências
```

**Você vai editar principalmente a pasta `data/`!**

---

## ✅ Checklist Primeira Vez

- [ ] Node.js instalado e funcionando
- [ ] Projeto baixado/clonado
- [ ] `npm install` executado com sucesso
- [ ] `npm start` rodando sem erros
- [ ] Site abre em http://localhost:3000
- [ ] Li o `GUIA_CUSTOMIZACAO.md`
- [ ] Substituí informações de exemplo pelas minhas
- [ ] Adicionei meus projetos reais
- [ ] Testei todos os links
- [ ] Testei em mobile
- [ ] Fiz build: `npm run build`
- [ ] Publiquei online!

---

## 🆘 Precisa de Ajuda?

### Documentação Oficial
- React: https://react.dev
- Bootstrap: https://getbootstrap.com
- Create React App: https://create-react-app.dev

### Comunidades
- Stack Overflow (português): https://pt.stackoverflow.com
- Discord React Brasil
- Grupos Facebook de React/Desenvolvimento

### Dicas de Busca
- Sempre inclua "React" na busca
- Ex: "React component not updating"
- Ex: "npm install error Windows"

---

## 🎉 Pronto!

Se você chegou até aqui e o site está funcionando, **parabéns!** 🎊

Agora é hora de:
1. **Personalizar** com suas informações (veja `GUIA_CUSTOMIZACAO.md`)
2. **Testar** tudo funciona
3. **Publicar** online
4. **Compartilhar** com recrutadores!

---

**Boa sorte com seu portfólio profissional! 🚀**

Se algo der errado, não desista! Leia as mensagens de erro com calma e pesquise no Google. Faz parte do processo de aprendizado! 💪

