# Imagens dos Projetos

Esta pasta deve conter as imagens/screenshots dos seus projetos.

## 📸 Como adicionar imagens

### Opção 1: Imagens locais (recomendado para desenvolvimento)

1. Crie a pasta se não existir:
   ```
   portfolio-dev/public/projects/
   ```

2. Adicione suas imagens nesta pasta:
   ```
   public/
   └── projects/
       ├── reservas-salas.jpg
       ├── forecast-pipeline.jpg
       ├── datasus-automation.jpg
       ├── site-encanador.jpg
       ├── wordpress-sites.jpg
       └── infrastructure.jpg
   ```

3. Referência no código já está configurada:
   ```javascript
   image: "/projects/nome-da-imagem.jpg"
   ```

### Opção 2: Usar URLs externas (recomendado para produção)

Se preferir hospedar imagens externamente (Imgur, Cloudinary, etc):

1. Faça upload das imagens para um serviço de hospedagem
2. Copie a URL da imagem
3. Altere em `src/data/projectsData.js`:
   ```javascript
   image: "https://i.imgur.com/SEU-ID.jpg"
   ```

## 📐 Especificações de Imagens

### Tamanho recomendado:
- **Largura:** 800-1200px
- **Altura:** 500-700px
- **Proporção:** 16:9 ou 4:3
- **Formato:** JPG ou PNG
- **Peso:** Máximo 500KB (otimize antes!)

### Como otimizar imagens:

**Online (fácil):**
- TinyPNG: https://tinypng.com
- Compressor.io: https://compressor.io
- Squoosh: https://squoosh.app

**Dicas:**
- Reduza para máximo 1200px de largura
- Use qualidade 80-85% para JPG
- Converta PNG para JPG se não precisar de transparência

## 🎨 Tipos de Screenshots

### Para projetos web:
- Screenshot da tela principal/home
- Capture apenas a parte relevante
- Use extensões do Chrome para captura de página inteira
- Recomendado: Full Page Screen Capture

### Para projetos de automação:
- Screenshot do código principal
- Dashboard/resultado visual
- Diagrama de arquitetura (se tiver)

### Para projetos de infraestrutura:
- Diagrama de arquitetura
- Dashboard de monitoramento
- Terminal/código de configuração

## 🖼️ Imagens Placeholder

Se não tiver imagens dos projetos ainda, use placeholders temporários:

**Serviços de placeholder:**
- https://placeholder.com
- https://via.placeholder.com
- https://picsum.photos

**Exemplo:**
```javascript
image: "https://via.placeholder.com/800x500/0066FF/FFFFFF?text=Seu+Projeto"
```

## 📝 Checklist de Imagens

Para cada projeto, verifique:

- [ ] Imagem adicionada na pasta `public/projects/`
- [ ] Nome do arquivo corresponde ao definido em `projectsData.js`
- [ ] Imagem otimizada (menos de 500KB)
- [ ] Boa qualidade e resolução
- [ ] Representa bem o projeto
- [ ] Sem informações sensíveis/confidenciais
- [ ] Testei no navegador e aparece corretamente

## 🚫 O que NÃO fazer

❌ Usar imagens muito grandes (> 2MB)
❌ Usar screenshots com dados sensíveis
❌ Usar imagens de baixa qualidade/pixeladas
❌ Usar imagens com direitos autorais de terceiros
❌ Deixar URLs quebradas

## 💡 Dicas Profissionais

### Captura de tela bonita:

1. **Limpe a interface:**
   - Feche abas desnecessárias
   - Use modo anônimo para tela limpa
   - Remova extensões visíveis

2. **Use ferramentas:**
   - Mockup de dispositivo (Screely, MockUPhone)
   - Adicione fundo gradiente
   - Frame browser (navegador com bordas bonitas)

3. **Qualidade:**
   - Zoom 100% (não ampliado)
   - Boa iluminação se for foto de tela
   - Sem reflexos

### Ferramentas úteis:

- **Screely:** https://screely.com (mockups automáticos)
- **MockUPhone:** https://mockuphone.com (mockup mobile)
- **Carbon:** https://carbon.now.sh (screenshots de código bonitos)
- **CloudApp:** Gravar GIFs de demonstração

## 🎬 Alternativa: Usar GIFs

Para demonstrações dinâmicas:

1. Grave a tela com LICEcap, ScreenToGif ou Peek
2. Mantenha < 5MB
3. 5-10 segundos de duração
4. Configure em `projectsData.js`:
   ```javascript
   image: "/projects/projeto-demo.gif"
   ```

---

**Lembre-se:** Boas imagens fazem MUITA diferença na apresentação do portfólio! Vale o esforço de capturar screenshots profissionais. 📸✨

