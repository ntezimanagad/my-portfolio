const projects = [
  {
    title: "Wallet Web Application",
    description: "Personal finance manager with budgets, transaction filters, and reports.",
    tech: "Spring Boot, React, MySQL, JWT",
    github: "https://github.com/ntezimanagad/wallet-web-application-with-springboot-nad-react",
  },
  {
    title: "E-Commerce App",
    description: "Full-featured store with cart, checkout, admin dashboard, and JWT auth.",
    tech: "Spring Boot, React, PostgreSQL",
    github: "#",
  },
  {
    title: "Emergency Services Locator",
    description: "Locate nearby hospitals and emergency services using location APIs.",
    tech: "Spring Boot, React, PostgreSQL",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(({ title, description, tech, github }) => (
          <div key={title} className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Tech:</strong> {tech}</p>
            {github !== "#" && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
