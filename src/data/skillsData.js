export const skillsData = {
  development: {
    title: "Desenvolvimento",
    icon: "code",
    skills: [
      {
        name: "Frontend",
        items: [
          { name: "React", level: 60, status: "learning" },
          { name: "JavaScript", level: 70, status: "learning" },
          { name: "HTML5 & CSS3", level: 85, status: "proficient" },
          { name: "Bootstrap", level: 80, status: "proficient" }
        ]
      },
      {
        name: "Backend & Database",
        items: [
          { name: "Node.js & Express", level: 55, status: "learning" },
          { name: "Python", level: 80, status: "proficient" },
          { name: "RESTful APIs", level: 65, status: "learning" },
          { name: "PostgreSQL", level: 60, status: "learning" },
          { name: "MSSQL", level: 60, status: "learning" }
        ]
      }
    ]
  },
  infrastructure: {
    title: "Infraestrutura & DevOps",
    icon: "server",
    skills: [
      {
        name: "Automação & CI/CD",
        items: [
          { name: "Python Automation", level: 90, status: "proficient" },
          { name: "Apache Airflow", level: 75, status: "proficient" },
          { name: "Bash Scripting", level: 85, status: "proficient" },
          { name: "Git & GitHub", level: 85, status: "proficient" }
        ]
      },
      {
        name: "Servidores & Containers",
        items: [
          { name: "Docker & Docker Compose", level: 85, status: "proficient" },
          { name: "Linux Administration", level: 85, status: "proficient" },
          { name: "Windows Server", level: 80, status: "proficient" }
        ]
      },
      {
        name: "Redes & Monitoramento",
        items: [
          { name: "TCP/IP & Networking", level: 90, status: "proficient" },
          { name: "Monitoring & Logs", level: 80, status: "proficient" }
        ]
      }
    ]
  }
};

export const skillLevels = {
  proficient: { label: "Proficiente", color: "#10B981" },
  learning: { label: "Em aprendizado ativo", color: "#3B82F6" }
};
