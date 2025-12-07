export const skillsData = {
  development: {
    title: "Desenvolvimento",
    icon: "code",
    skills: [
      {
        name: "Frontend",
        items: [
          { name: "HTML5", level: 90, status: "proficient" },
          { name: "CSS3", level: 90, status: "proficient" },
          { name: "JavaScript", level: 85, status: "learning" },
          { name: "React", level: 70, status: "learning" },
          { name: "Bootstrap", level: 85, status: "proficient" },
          { name: "Responsive Design", level: 90, status: "proficient" }
        ]
      },
      {
        name: "Backend",
        items: [
          { name: "Node.js", level: 65, status: "learning" },
          { name: "Python", level: 85, status: "proficient" },
          { name: "RESTful APIs", level: 75, status: "proficient" },
          { name: "SQL", level: 80, status: "proficient" }
        ]
      },
      {
        name: "Banco de Dados",
        items: [
          { name: "PostgreSQL", level: 75, status: "proficient" },
          { name: "MySQL", level: 75, status: "proficient" },
          { name: "SQLite", level: 80, status: "proficient" },
          { name: "MongoDB", level: 60, status: "learning" }
        ]
      }
    ]
  },
  infrastructure: {
    title: "Infraestrutura & DevOps",
    icon: "server",
    skills: [
      {
        name: "Cloud & Servidores",
        items: [
          { name: "Linux Administration", level: 90, status: "proficient" },
          { name: "Windows Server", level: 85, status: "proficient" },
          { name: "AWS", level: 70, status: "learning" },
          { name: "Vercel / Netlify", level: 75, status: "proficient" }
        ]
      },
      {
        name: "Containers & Virtualização",
        items: [
          { name: "Docker", level: 85, status: "proficient" },
          { name: "Docker Compose", level: 80, status: "proficient" },
          { name: "VMware", level: 80, status: "proficient" },
          { name: "Kubernetes", level: 50, status: "learning" }
        ]
      },
      {
        name: "Redes & Segurança",
        items: [
          { name: "TCP/IP", level: 90, status: "proficient" },
          { name: "Firewall Configuration", level: 85, status: "proficient" },
          { name: "VPN", level: 80, status: "proficient" },
          { name: "SSL/TLS", level: 85, status: "proficient" }
        ]
      },
      {
        name: "Automação & CI/CD",
        items: [
          { name: "Bash Scripting", level: 85, status: "proficient" },
          { name: "Python Automation", level: 90, status: "proficient" },
          { name: "Apache Airflow", level: 75, status: "proficient" },
          { name: "Git / GitHub", level: 85, status: "proficient" }
        ]
      }
    ]
  },
  tools: {
    title: "Ferramentas & Tecnologias",
    icon: "tool",
    skills: [
      {
        name: "Desenvolvimento",
        items: [
          { name: "VS Code", level: 90, status: "proficient" },
          { name: "Git", level: 85, status: "proficient" },
          { name: "npm / yarn", level: 80, status: "proficient" },
          { name: "Postman", level: 80, status: "proficient" }
        ]
      },
      {
        name: "Design & Prototipagem",
        items: [
          { name: "Figma", level: 65, status: "learning" },
          { name: "Adobe XD", level: 60, status: "learning" }
        ]
      },
      {
        name: "Monitoramento & Logs",
        items: [
          { name: "Monitoring Tools", level: 75, status: "proficient" },
          { name: "Log Analysis", level: 80, status: "proficient" }
        ]
      }
    ]
  }
};

export const skillLevels = {
  proficient: { label: "Proficiente", color: "#10B981" },
  learning: { label: "Em aprendizado ativo", color: "#3B82F6" },
  familiar: { label: "Familiar", color: "#8B5CF6" }
};

