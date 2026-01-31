export const projectsData = [
  {
    id: 1,
    title: "Sistema de Reservas de Salas",
    category: "web",
    categoryLabel: "Desenvolvimento Web",
    shortDescription: "Sistema web full stack para gerenciamento de reservas de salas em ambiente corporativo",
    problem: "Controle manual em papel gerava conflitos de agendamento, retrabalho e baixa adesão dos colaboradores em duas unidades da empresa.",
    solution: "Aplicação web centralizada, calendário interativo e notificações automáticas, digitalizando completamente o processo de reservas.",
    impact: [
      "150+ colaboradores ativos em 2 unidades (matriz e filial)",
      "100+ agendamentos processados mensalmente",
      "Eliminação de conflitos de agendamento",
      "Redução de 90% no tempo de reserva de salas",
      "Notificações via e-mail"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Express.js", "Node.js", "MSSQL Express"],
    infrastructureRole: "Deploy com Docker em servidor Linux, backup automatizado, monitoramento de uptime e logs centralizados.",
    githubUrl: "https://github.com/seu-usuario/reservas-salas",
    liveUrl: null,
    image: "/projects/reservas-salas.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Pipeline de Forecast de Vendas",
    category: "automation",
    categoryLabel: "Automação & Dados",
    shortDescription: "Pipeline automatizado com Apache Airflow para previsão de vendas usando 4 modelos estatísticos",
    problem: "Analista dedicava quase 1 semana gerando previsões e planilhas manualmente, processo repetitivo e propenso a erros que atrasava decisões estratégicas.",
    solution: "Pipeline ETL com Airflow que automatiza coleta de dados, aplica 4 modelos estatísticos (Holt, ARIMA, AutoARIMA, Holt-Winters) e gera planilhas para preenchimento dos gestores.",
    impact: [
      "Redução de 1 semana para 2 horas de processamento (97% mais rápido)",
      "4 modelos estatísticos rodando automaticamente (Holt, ARIMA, AutoARIMA, Holt-Winters)",
      "Previsões mensais entregues automaticamente aos gestores",
      "Eliminação de erros manuais no processo de ETL",
      "Ganho de 5 dias/mês de produtividade do analista"
    ],
    technologies: ["Python", "Apache Airflow", "Pandas", "NumPy", "Statsmodels", "PostgreSQL", "Docker"],
    infrastructureRole: "Containerização com Docker, orquestração de DAGs, monitoramento de jobs, alertas automáticos via email e logs estruturados",
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
    shortDescription: "Automação Python para extração e análise de dados DATASUS para inteligência de mercado",
    problem: "Departamento de Marketing precisava de dados do DATASUS para análise de concorrentes e market share, mas extração manual era demorada e propensa a erros.",
    solution: "Script Python que automatiza extração mensal de dados DATASUS, filtra informações relevantes e disponibiliza em banco de dados para análise de inteligência de mercado.",
    impact: [
      "Automação 100% da extração e filtragem de dados",
      "Execução mensal agendada via Task Scheduler",
      "Dados de vendas e concorrência disponíveis para análise estratégica",
      "Suporte à inteligência de mercado do departamento de Marketing",
      "Análise de vendas mês-2 para tomada de decisão"
    ],
    technologies: ["Python", "Pandas", "Requests", "Task Scheduler"],
    infrastructureRole: "Agendamento via Task Scheduler, logs estruturados, tratamento de erros e notificações automáticas via e-mail",
    githubUrl: "https://github.com/seu-usuario/datasus-extractor",
    liveUrl: null,
    image: "/projects/datasus-automation.jpg",
    featured: true
  }
];

export const categories = [
  { id: 'all', label: 'Todos os Projetos', icon: 'grid' },
  { id: 'web', label: 'Desenvolvimento Web', icon: 'code' },
  { id: 'automation', label: 'Automação & Dados', icon: 'cpu' },
];
