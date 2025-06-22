import React, { useState, useEffect } from 'react';

// Header Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="logo">
          <span className="logo-text">Ntezimana Gad</span>
          <div className="logo-dot"></div>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Hero Component
function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div 
          className="cursor-glow" 
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100
          }}
        ></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span>✨ Available for Freelance</span>
        </div>
        <h1 className="hero-title">
          <span className="title-line">Hi, I'm</span>
          <span className="title-name">Ntezimana Gad</span>
          <span className="title-role">Full Stack Developer</span>
        </h1>
        <p className="hero-description">
          I craft exceptional digital experiences with Spring Boot, React & Node.js. 
          Turning ideas into beautiful, scalable applications.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            <span>View My Work</span>
            <div className="btn-shine"></div>
          </a>
          <a href="#contact" className="btn-secondary">
            <span>Let's Talk</span>
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

// About Component
function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="section-subtitle">Get to know me better</div>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            I'm a passionate full-stack developer based in the beautiful city of Kigali, Rwanda. 
            With a love for clean code and innovative solutions, I specialize in building scalable, 
            secure web applications that make a real difference.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">🚀</div>
              <div>
                <h4>Performance Focused</h4>
                <p>Building lightning-fast applications</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🔒</div>
              <div>
                <h4>Security First</h4>
                <p>Implementing robust security measures</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">💡</div>
              <div>
                <h4>Problem Solver</h4>
                <p>Turning complex challenges into simple solutions</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <div className="code-card">
            <div className="code-header">
              <div className="code-dots">
                <span></span><span></span><span></span>
              </div>
              <span>developer.js</span>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-property">name</span>: <span className="code-string">'Ntezimana Gad'</span>,
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-property">location</span>: <span className="code-string">'Kigali, Rwanda'</span>,
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-property">passion</span>: <span className="code-string">'Full Stack Development'</span>
              </div>
              <div className="code-line">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Component
function Skills() {
  const skills = [
    { name: 'Java', level: 95, color: '#f89820' },
    { name: 'Spring Boot', level: 90, color: '#6db33f' },
    { name: 'React', level: 88, color: '#61dafb' },
    { name: 'Node.js', level: 85, color: '#68a063' },
    { name: 'PostgreSQL', level: 82, color: '#336791' },
    { name: 'MySQL', level: 80, color: '#4479a1' },
    { name: 'JavaScript', level: 87, color: '#f7df1e' },
    { name: 'Docker', level: 75, color: '#2496ed' },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-subtitle">Tools I work with</div>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            key={skill.name} 
            className="skill-card"
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
            style={{
              '--skill-color': skill.color,
              '--skill-level': `${skill.level}%`
            }}
          >
            <div className="skill-content">
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level">{skill.level}%</div>
            </div>
            <div className="skill-progress">
              <div 
                className={`skill-fill ${hoveredSkill === index ? 'animate' : ''}`}
              ></div>
            </div>
            <div className="skill-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Projects Component
function Projects() {
  const projects = [
    {
      title: "Wallet Web Application",
      description: "A sophisticated personal finance manager featuring advanced budgeting tools, intelligent transaction filtering, and comprehensive financial reports with beautiful data visualizations.",
      tech: ["Spring Boot", "React", "MySQL", "JWT"],
      github: "https://github.com/ntezimanagad/wallet-web-application-with-springboot-nad-react",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured modern e-commerce solution with dynamic shopping cart, secure checkout process, comprehensive admin dashboard, and robust JWT authentication system.",
      tech: ["Spring Boot", "React", "PostgreSQL", "Redis"],
      github: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Emergency Services Locator",
      description: "Life-saving application that helps users quickly locate nearby hospitals and emergency services using advanced geolocation APIs and real-time data integration.",
      tech: ["Spring Boot", "React", "PostgreSQL", "Maps API"],
      github: "#",
      color: "from-green-500 to-teal-500"
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-subtitle">Some things I've built</div>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.title} className="project-card">
            <div className={`project-gradient bg-gradient-to-br ${project.color}`}></div>
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="project-hover-effect"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Contact Component
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-header">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="contact-subtitle">
              Ready to bring your ideas to life? I'm always excited to work on new projects 
              and collaborate with amazing people.
            </p>
          </div>
          <div className="contact-grid">
            <a href="mailto:ntezimanagad4@gmail.com" className="contact-card email">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="contact-info">
                <h3>Email</h3>
                <p>ntezimanagad4@gmail.com</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ntezimana-gad-a68130224" target="_blank" rel="noopener noreferrer" className="contact-card linkedin">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="contact-info">
                <h3>LinkedIn</h3>
                <p>Connect with me</p>
              </div>
            </a>
            <a href="https://github.com/ntezimanagad" target="_blank" rel="noopener noreferrer" className="contact-card github">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div className="contact-info">
                <h3>GitHub</h3>
                <p>View my code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #0a0a0a;
          color: #ffffff;
          overflow-x: hidden;
        }

        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
        }

        /* Header Styles */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          backdrop-filter: blur(20px);
          background: rgba(10, 10, 10, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(10, 10, 10, 0.95);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        .logo-dot {
          width: 8px;
          height: 8px;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-links a {
          color: #ffffff;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-links a:hover {
          color: #4ecdc4;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        /* Hero Styles */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          padding: 0 2rem;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.7;
          animation: float 6s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, #4ecdc4, #45b7d1);
          top: 50%;
          right: 10%;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 250px;
          height: 250px;
          background: linear-gradient(45deg, #45b7d1, #96ceb4);
          bottom: 10%;
          left: 50%;
          animation-delay: 4s;
        }

        .cursor-glow {
          position: fixed;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(78, 205, 196, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 2;
          transition: all 0.1s ease;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          max-width: 800px;
        }

        .hero-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          margin-bottom: 2rem;
          animation: slideDown 1s ease 0.2s both;
        }

        .hero-title {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .title-line {
          font-size: 1.5rem;
          color: #b0b0b0;
          animation: slideDown 1s ease 0.4s both;
        }

        .title-name {
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 300% 300%;
          animation: gradientShift 4s ease infinite, slideDown 1s ease 0.6s both;
        }

        .title-role {
          font-size: 2rem;
          color: #e0e0e0;
          animation: slideDown 1s ease 0.8s both;
        }

        .hero-description {
          font-size: 1.25rem;
          color: #b0b0b0;
          line-height: 1.6;
          margin-bottom: 3rem;
          animation: slideUp 1s ease 1s both;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: slideUp 1s ease 1.2s both;
        }

        .btn-primary, .btn-secondary {
          position: relative;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .btn-primary {
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .btn-primary:hover .btn-shine {
          left: 100%;
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #4ecdc4;
          transform: translateY(-2px);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
        }

        .scroll-arrow {
          width: 24px;
          height: 24px;
          border: 2px solid #4ecdc4;
          border-top: none;
          border-left: none;
          transform: rotate(45deg);
        }

        /* Section Styles */
        section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #b0b0b0;
        }

        /* About Styles */
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-intro {
          font-size: 1.25rem;
          line-height: 1.8;
          color: #e0e0e0;
          margin-bottom: 2rem;
        }

        .about-highlights {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          transition: all 0.3s ease;
        }

        .highlight-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
        }

        .highlight-icon {
          font-size: 2rem;
        }

        .highlight-item h4 {
          color: #4ecdc4;
          margin-bottom: 0.5rem;
        }

        .highlight-item p {
          color: #b0b0b0;
        }

        .code-card {
          background: rgba(0, 0, 0, 0.5);
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .code-dots {
          display: flex;
          gap: 0.5rem;
        }

        .code-dots span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .code-dots span:nth-child(1) { background: #ff5f56; }
        .code-dots span:nth-child(2) { background: #ffbd2e; }
        .code-dots span:nth-child(3) { background: #27ca3f; }

        .code-content {
          padding: 1.5rem;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .code-line {
          margin-bottom: 0.5rem;
        }

        .code-keyword { color: #ff6b6b; }
        .code-variable { color: #4ecdc4; }
        .code-property { color: #45b7d1; }
        .code-string { color: #96ceb4; }

        /* Skills Styles */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          position: relative;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .skill-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .skill-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }

        .skill-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: #ffffff;
        }

        .skill-level {
          font-size: 1rem;
          font-weight: 700;
          color: var(--skill-color);
        }

        .skill-progress {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }

        .skill-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--skill-color), rgba(255, 255, 255, 0.8));
          border-radius: 2px;
          width: 0;
          transition: width 1s ease;
        }

        .skill-fill.animate {
          width: var(--skill-level);
        }

        .skill-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, var(--skill-color), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .skill-card:hover .skill-glow {
          opacity: 0.2;
        }

        /* Projects Styles */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .project-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .project-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 200px;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .bg-gradient-to-br {
          background: linear-gradient(to bottom right, var(--tw-gradient-stops));
        }

        .from-purple-500 { --tw-gradient-from: #8b5cf6; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(139, 92, 246, 0)); }
        .to-pink-500 { --tw-gradient-to: #ec4899; }
        .from-blue-500 { --tw-gradient-from: #3b82f6; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(59, 130, 246, 0)); }
        .to-cyan-500 { --tw-gradient-to: #06b6d4; }
        .from-green-500 { --tw-gradient-from: #10b981; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(16, 185, 129, 0)); }
        .to-teal-500 { --tw-gradient-to: #14b8a6; }

        .project-content {
          position: relative;
          z-index: 2;
          padding: 2rem;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 50%);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .project-links {
          display: flex;
          gap: 0.5rem;
        }

        .project-link {
          color: #4ecdc4;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          color: #ffffff;
          transform: scale(1.1);
        }

        .project-description {
          color: #e0e0e0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          padding: 0.25rem 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          font-size: 0.875rem;
          color: #ffffff;
        }

        .project-hover-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          background: linear-gradient(45deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1));
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-hover-effect {
          opacity: 1;
        }

        /* Contact Styles */
        .contact-section {
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1));
          border-radius: 2rem;
          margin: 2rem;
        }

        .contact-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .contact-subtitle {
          font-size: 1.25rem;
          color: #b0b0b0;
          line-height: 1.6;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .contact-card.email:hover {
          border-color: #ff6b6b;
          box-shadow: 0 15px 30px rgba(255, 107, 107, 0.3);
        }

        .contact-card.linkedin:hover {
          border-color: #0077b5;
          box-shadow: 0 15px 30px rgba(0, 119, 181, 0.3);
        }

        .contact-card.github:hover {
          border-color: #4ecdc4;
          box-shadow: 0 15px 30px rgba(78, 205, 196, 0.3);
        }

        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .contact-card:hover .contact-icon {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .contact-info h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .contact-info p {
          color: #b0b0b0;
          font-size: 0.9rem;
        }

        /* Animations */
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .nav-container {
            padding: 1rem;
          }

          .nav-links {
            gap: 1rem;
          }

          .title-name {
            font-size: 2.5rem;
          }

          .title-role {
            font-size: 1.5rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          section {
            padding: 3rem 1rem;
          }

          .section-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .title-name {
            font-size: 2rem;
          }

          .title-role {
            font-size: 1.25rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .btn-primary, .btn-secondary {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}