export const skillsData = {
  development: {
    title: "Desenvolvimento",
    icon: "code",
    skills: [
      {
        name: "Frontend",
        items: [
          { name: "HTML5", level: 85, status: "proficient" },
          { name: "CSS3", level: 85, status: "proficient" },
          { name: "JavaScript", level: 70, status: "learning" },
          { name: "React", level: 60, status: "learning" },
          { name: "Bootstrap", level: 80, status: "proficient" },
          { name: "Responsive Design", level: 75, status: "learning" }
        ]
      },
      {
        name: "Backend",
        items: [
          { name: "Node.js", level: 55, status: "learning" },
          { name: "Python", level: 80, status: "proficient" },
          { name: "RESTful APIs", level: 65, status: "learning" },
          { name: "SQL", level: 70, status: "learning" }
        ]
      },
      {
        name: "Banco de Dados",
        items: [
          { name: "PostgreSQL", level: 60, status: "learning" },
          { name: "MySQL", level: 60, status: "learning" },
          { name: "SQLite", level: 70, status: "proficient" },
          { name: "MongoDB", level: 45, status: "learning" }
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
          { name: "Linux Administration", level: 85, status: "proficient" },
          { name: "Windows Server", level: 80, status: "proficient" },
          { name: "AWS", level: 50, status: "learning" },
          { name: "Vercel / Netlify", level: 65, status: "learning" }
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
          { name: "VS Code", level: 85, status: "proficient" },
          { name: "Git", level: 75, status: "proficient" },
          { name: "npm / yarn", level: 70, status: "learning" },
          { name: "Postman", level: 65, status: "learning" }
        ]
      },
      {
        name: "Design & Prototipagem",
        items: [
          { name: "Figma", level: 50, status: "learning" },
          { name: "Adobe XD", level: 45, status: "learning" }
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
  familiar: { label: "Familiar", color: "#1D64C6" }
};

