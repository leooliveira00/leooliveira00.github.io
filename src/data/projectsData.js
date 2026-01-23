export const projectsData = [
  {
    id: 1,
    title: "Sistema de Reservas de Salas",
    category: "web",
    categoryLabel: "Desenvolvimento Web",
    shortDescription: "Aplicação web para gerenciamento de reservas de salas de reunião",
    problem: "Controle manual em papel gerava conflitos de agendamento e perda de produtividade da equipe administrativa",
    solution: "Sistema web que digitalizou o processo de reservas, reduzindo conflitos e facilitando o agendamento",
    impact: [
      "Redução significativa de conflitos de agendamento",
      "Economia estimada de 5 horas/semana da equipe",
      "Processo de marcação de reuniões mais ágil",
      "Feedback positivo dos usuários da equipe"
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
    solution: "Pipeline com Airflow que automatizou a coleta e transformação de dados, gerando relatórios diários",
    impact: [
      "Automatizou processo de coleta e transformação de dados",
      "Pipeline funcional gerando relatórios diariamente",
      "Redução significativa no tempo de geração de relatórios",
      "Sistema em uso pela equipe de vendas"
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
    solution: "Script Python que automatiza a extração e filtragem de dados, com exportação em diferentes formatos",
    impact: [
      "Processo de extração muito mais rápido que manualmente",
      "Redução de erros na coleta de dados",
      "Exportação automática em CSV, Excel e JSON",
      "Script reutilizável para extrações futuras"
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
    solution: "Site moderno e responsivo com informações dos serviços, galeria de trabalhos e formulário de contato",
    impact: [
      "Presença digital profissional estabelecida",
      "Facilita que clientes encontrem e conheçam os serviços",
      "FAQ integrado respondendo dúvidas comuns",
      "Formulário de contato funcional para orçamentos"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP"],
    infrastructureRole: "Configuração de hospedagem, SSL, CDN para imagens e otimização de performance",
    githubUrl: "https://github.com/seu-usuario/site-encanador",
    liveUrl: "https://encanador-exemplo.com.br",
    image: "/src/img/projects/exemplo_imagem.jpg", 
    featured: true
  },
  {
    id: 5,
    title: "Sites WordPress Customizados",
    category: "web",
    categoryLabel: "Desenvolvimento Web",
    shortDescription: "Desenvolvimento e customização de sites WordPress para diversos clientes",
    problem: "Clientes precisavam de sites profissionais sem complexidade de manutenção",
    solution: "Sites WordPress customizados com temas otimizados, plugins selecionados e orientação de uso",
    impact: [
      "Diversos sites entregues com feedback positivo",
      "Boa velocidade de carregamento e performance",
      "SEO básico implementado em todos os projetos",
      "Clientes conseguem fazer atualizações de conteúdo"
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

