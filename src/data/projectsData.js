export const projectsData = [
  {
    id: 1,
    title: "Sistema de Reservas de Salas",
    category: "web",
    categoryLabel: "Desenvolvimento Web",
    shortDescription: "Aplicação web para gerenciamento de reservas de salas de reunião",
    problem: "Controle manual em papel gerava conflitos de agendamento e perda de produtividade da equipe administrativa",
    solution: "Sistema automatizado que eliminou conflitos, economizou 5h/semana da equipe e aumentou a eficiência em 80%",
    impact: [
      "Eliminação de 100% dos conflitos de agendamento",
      "Economia de 5 horas/semana da equipe administrativa",
      "Redução de 80% no tempo de marcação de reuniões",
      "Interface intuitiva com taxa de adoção de 95%"
    ],
    technologies: ["Python", "JavaScript", "HTML5", "CSS3", "Bootstrap", "SQLite"],
    infrastructureRole: "Deploy em servidor Linux com automação de backup diário e monitoramento de uptime",
    githubUrl: "https://github.com/seu-usuario/reservas-salas",
    liveUrl: "https://reservas-salas-demo.vercel.app",
    image: "/projects/reservas-salas.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Pipeline de Forecast de Vendas",
    category: "automation",
    categoryLabel: "Automação & Dados",
    shortDescription: "Pipeline automatizado com Airflow para geração de previsões de vendas",
    problem: "Processo manual e repetitivo de coleta, transformação e análise de dados de vendas consumia horas diárias",
    solution: "Pipeline orquestrado que automatizou 100% do processo, gerando planilhas dinâmicas e previsões precisas diariamente",
    impact: [
      "Automação completa eliminando trabalho manual diário",
      "Previsões de vendas com 85% de precisão",
      "Redução de 90% no tempo de geração de relatórios",
      "Dashboard atualizado automaticamente"
    ],
    technologies: ["Python", "Apache Airflow", "Pandas", "NumPy", "PostgreSQL", "Docker"],
    infrastructureRole: "Containerização com Docker, orquestração de tarefas, monitoramento de jobs e alertas automáticos",
    githubUrl: "https://github.com/seu-usuario/forecast-pipeline",
    liveUrl: null,
    image: "/projects/forecast-pipeline.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Automação de Extração DATASUS",
    category: "automation",
    categoryLabel: "Automação & Dados",
    shortDescription: "Script Python para extração automatizada de dados filtrados do DATASUS",
    problem: "Extração manual de dados do DATASUS era demorada, propensa a erros e limitava análises rápidas",
    solution: "Automação que extrai, filtra e processa dados em minutos, com validações e exportação em múltiplos formatos",
    impact: [
      "Redução de horas para minutos no processo de extração",
      "Eliminação de erros humanos na coleta de dados",
      "Exportação automática em CSV, Excel e JSON",
      "Agendamento automático de extrações periódicas"
    ],
    technologies: ["Python", "Requests", "BeautifulSoup", "Pandas", "Schedule"],
    infrastructureRole: "Agendamento via cron, logs estruturados e notificações automáticas",
    githubUrl: "https://github.com/seu-usuario/datasus-extractor",
    liveUrl: null,
    image: "/projects/datasus-automation.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Site Profissional para Encanador",
    category: "web",
    categoryLabel: "Desenvolvimento Web",
    shortDescription: "Website completo para profissional com 30 anos de experiência",
    problem: "Profissional experiente sem presença digital perdia oportunidades de negócio para concorrentes online",
    solution: "Site moderno, responsivo e otimizado para SEO que gerou 40% mais clientes nos primeiros 3 meses",
    impact: [
      "Aumento de 40% na captação de novos clientes",
      "Posicionamento no Google para palavras-chave locais",
      "Redução de 60% em ligações com dúvidas básicas (FAQ integrado)",
      "Sistema de orçamentos online funcional"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP"],
    infrastructureRole: "Configuração de hospedagem, SSL, CDN para imagens e otimização de performance",
    githubUrl: "https://github.com/seu-usuario/site-encanador",
    liveUrl: "https://encanador-exemplo.com.br",
    image: "/projects/site-encanador.jpg",
    featured: true
  },
  {
    id: 5,
    title: "Sites WordPress Customizados",
    category: "web",
    categoryLabel: "Desenvolvimento Web",
    shortDescription: "Desenvolvimento e customização de sites WordPress para diversos clientes",
    problem: "Clientes precisavam de sites profissionais sem complexidade de manutenção",
    solution: "Sites WordPress customizados com temas otimizados, plugins selecionados e treinamento de uso",
    impact: [
      "5+ sites entregues com satisfação total dos clientes",
      "Velocidade de carregamento otimizada (score 90+)",
      "SEO on-page implementado em todos os projetos",
      "Clientes autônomos para atualizações de conteúdo"
    ],
    technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],
    infrastructureRole: "Migração de hospedagens, otimização de banco de dados, backups automáticos",
    githubUrl: null,
    liveUrl: null,
    image: "/projects/wordpress-sites.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Infraestrutura & DevOps",
    category: "infrastructure",
    categoryLabel: "Infraestrutura & DevOps",
    shortDescription: "Projetos de automação, containerização e gerenciamento de infraestrutura",
    problem: "Ambientes inconsistentes, deploys manuais e falta de automação em infraestrutura",
    solution: "Implementação de práticas DevOps, containerização e automação de processos",
    impact: [
      "Ambientes containerizados com Docker",
      "Scripts de automação para provisionamento",
      "Monitoramento e logs centralizados",
      "Documentação de arquitetura e processos"
    ],
    technologies: ["Docker", "Linux", "Bash", "Python", "Git", "Nginx"],
    infrastructureRole: "Design e implementação completa de soluções de infraestrutura",
    githubUrl: "https://github.com/seu-usuario/devops-scripts",
    liveUrl: null,
    image: "/projects/infrastructure.jpg",
    featured: false
  }
];

export const categories = [
  { id: 'all', label: 'Todos os Projetos', icon: 'grid' },
  { id: 'web', label: 'Desenvolvimento Web', icon: 'code' },
  { id: 'automation', label: 'Automação & Dados', icon: 'cpu' },
  { id: 'infrastructure', label: 'Infraestrutura & DevOps', icon: 'server' }
];

