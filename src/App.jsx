import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    category: "FULL-STACK DEVELOPMENT",
    title: "College ERP System",
    description:
      "A full-stack ERP application featuring authentication, role-based dashboards, and integrated backend APIs.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    color: "blue",
    icon: "◈",
  },
  {
  number: "02",
  category: "DATA ANALYTICS",
  title: "E-commerce Sales Analysis",
  description:
    "An interactive e-commerce sales analysis app built with Python and Streamlit to explore sales data and business performance.",
  technologies: ["Python", "Streamlit", "Data Analysis"],
  color: "purple",
  icon: "▥",
  planned: false,
  github: "https://github.com/R841927/ecommerce-sales-analysis",
  demo: "https://ecommerce-sales-analysis-xlntf6m5z4ay8nzuqlvutz.streamlit.app/",
  },
{
  number: "03",
  category: "DATA ANALYTICS",
  title: "Sales Analytics Dashboard",
  description:
    "An interactive sales analytics dashboard built with Python, Pandas, and Streamlit to analyze sales performance and visualize key business insights.",
  technologies: ["Python", "Pandas", "Streamlit", "Data Analysis"],
  color: "cyan",
  icon: "⌘",
  planned: false,
  github: "https://github.com/R841927/sales-analytics-dashboard",
},
  
{
  number: "04",
  category: "BUSINESS INTELLIGENCE",
  title: "Business Performance Dashboard",
  description:
    "An interactive Power BI dashboard analyzing revenue, profit, orders, profit margin, regional performance, product categories, and sales channels using business sales data.",
  technologies: ["Power BI", "DAX", "Python", "Data Analysis"],
  color: "orange",
  icon: "◫",
  planned: false,
  github: "https://github.com/R841927/business-performance-dashboard",
},

  {
    number: "05",
    category: "WEB APPLICATION",
    title: "Tripura CPI Project",
    description:
      "Contributed to a consumer price index project involving a React admin portal, FastAPI backend, PostgreSQL database, and mobile application.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Flutter"],
    color: "pink",
  },
  {
    number: "06",
    category: "INTERACTIVE ANALYTICS",
    title: "KPI Analytics Dashboard",
    description:
      "A planned interactive dashboard to track key performance indicators, compare metrics, and communicate business trends through visual reports.",
    technologies: ["Python", "Pandas", "Plotly", "Streamlit"],
    color: "green",
    icon: "↗",
    planned: true,
  },
];

const skills = [
  { name: "Python", level: "Programming", icon: "Py" },
  { name: "Java", level: "Programming", icon: "Ja" },
  { name: "Pandas", level: "Data Analysis", icon: "Pd" },
  { name: "NumPy", level: "Data Analysis", icon: "Np" },
  { name: "SQL", level: "Database", icon: "DB" },
  { name: "Excel", level: "Analytics", icon: "Ex" },
  { name: "Power BI", level: "Visualization", icon: "BI" },
  { name: "React.js", level: "Frontend", icon: "Re" },
  { name: "FastAPI", level: "Backend", icon: "Fa" },
  { name: "Streamlit", level: "Python Apps", icon: "St" },
  { name: "PostgreSQL", level: "Database", icon: "Pg" },
  { name: "MongoDB", level: "Database", icon: "Mg" },
];

const experiences = [
  {
    period: "JUL 2026 — PRESENT",
    role: "Operations & Data Analytics Associate",
    company: "Drishtee Foundation · Vidushi Fellowship",
    description:
      "Collect and validate field data, conduct village and market mapping, analyze product costs and pricing, maintain Excel datasets, and prepare reports to support operational decisions.",
    tags: ["Data Collection", "Excel", "Market Research", "Reporting"],
  },
  {
    period: "JAN 2026 — MAR 2026",
    role: "Software Developer Trainee Intern",
    company: "IDEAS Technology Innovation Hub · ISI Kolkata",
    description:
      "Contributed to the Tripura CPI project, worked with React.js, FastAPI and PostgreSQL, supported survey-data management, built a Streamlit testing portal, and prepared technical documentation.",
    tags: ["React.js", "FastAPI", "PostgreSQL", "Streamlit"],
  },
  {
    period: "AUG 2024 — SEP 2024",
    role: "Java Intern",
    company: "Oasis Infobyte",
    description:
      "Developed Java-based applications and practiced object-oriented programming, debugging, logical problem-solving, and code optimization.",
    tags: ["Java", "OOP", "Debugging"],
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Python",
    "Data Analytics",
    "Web Development",
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;

    if (activeFilter === "Python") {
      return project.technologies.includes("Python");
    }

    if (activeFilter === "Data Analytics") {
      return project.category === "DATA ANALYTICS" ||
        project.category === "BUSINESS INTELLIGENCE" ||
        project.category === "INTERACTIVE ANALYTICS";
    }

    return (
      project.category === "FULL-STACK DEVELOPMENT" ||
      project.category === "WEB APPLICATION"
    );
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">R</span>
          <span>RUPESH<span className="brand-dot">.</span></span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's Connect <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              COMPUTER SCIENCE GRADUATE
            </div>

            <p className="hero-intro">Hello, I'm</p>

            <h1>
              Rupesh
              <span className="gradient-text"> Thakur.</span>
            </h1>

            <h2 className="hero-role">
              Python Developer <span>/</span> Data Analyst
              <br />
              <span className="role-secondary">Software Developer</span>
            </h2>

            <p className="hero-description">
              I build software, explore data, and turn complex information
              into practical solutions. I enjoy combining analytical thinking
              with technology to solve real-world problems.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
              <a
                className="button button-secondary"
                href="/Rupesh_Thakur_Resume.pdf"
                download="Rupesh_Thakur_Resume.pdf"
              >
                Download Resume ↓
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/R841927"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <span className="social-divider">/</span>
              <a
                href="https://www.linkedin.com/in/rupesh-thakur-44667922b/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="code-window">
              <div className="window-bar">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="window-title">rupesh.py</span>
                <span className="window-language">PYTHON</span>
              </div>

              <div className="code-content">
                <p><span className="line-number">01</span><span className="code-purple">class</span> <span className="code-yellow">Developer</span>:</p>
                <p><span className="line-number">02</span>&nbsp;&nbsp;<span className="code-purple">def</span> <span className="code-blue">__init__</span>(self):</p>
                <p><span className="line-number">03</span>&nbsp;&nbsp;&nbsp;&nbsp;self.name = <span className="code-green">"Rupesh"</span></p>
                <p><span className="line-number">04</span>&nbsp;&nbsp;&nbsp;&nbsp;self.focus = [</p>
                <p><span className="line-number">05</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">"Python"</span>,</p>
                <p><span className="line-number">06</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">"Data Analytics"</span>,</p>
                <p><span className="line-number">07</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">"Software"</span></p>
                <p><span className="line-number">08</span>&nbsp;&nbsp;&nbsp;&nbsp;]</p>
                <p><span className="line-number">09</span>&nbsp;</p>
                <p><span className="line-number">10</span>&nbsp;&nbsp;<span className="code-purple">def</span> <span className="code-blue">build</span>(self):</p>
                <p><span className="line-number">11</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-purple">return</span> <span className="code-green">"Ideas into impact."</span></p>
                <p><span className="line-number">12</span></p>
                <p className="code-comment"># Always learning. Always building.</p>
              </div>

              <div className="code-footer">
                <span><span className="status-dot" /> Available for opportunities</span>
                <span>UTF-8</span>
              </div>
            </div>

            <div className="floating-card floating-python">
              <span className="floating-icon python-icon">Py</span>
              <div><strong>Python</strong><small>Data & Development</small></div>
            </div>

            <div className="floating-card floating-analytics">
              <span className="floating-icon analytics-icon">↗</span>
              <div><strong>Data Insights</strong><small>From data to decisions</small></div>
            </div>

            <div className="visual-caption">CREATIVITY MEETS LOGIC <span>✳</span></div>
          </div>

          <a href="#about" className="scroll-indicator">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="about-section section-container" id="about">
          <SectionHeading
            eyebrow="01 / ABOUT ME"
            title={<>Curiosity-driven. <span className="gradient-text">Solution-focused.</span></>}
            description="A little about my journey, mindset, and what I bring to a team."
          />

          <div className="about-grid">
            <div className="about-card about-main-card">
              <span className="card-index">WHO I AM</span>
              <h3>Technology with a purpose.</h3>
              <p>
                I am a Computer Science and Engineering graduate from Aliah
                University with experience in software development, field
                data collection, market research, and operational reporting.
              </p>
              <p>
                My interests span Python development, data analytics, and
                full-stack applications. I enjoy organizing raw information,
                finding useful patterns, and building tools that make work
                more efficient.
              </p>
              <div className="about-highlight">
                <span>✳</span>
                Learning continuously. Building thoughtfully.
              </div>
            </div>

            <div className="about-side">
              <div className="mini-stat">
                <span className="mini-stat-icon">⌘</span>
                <div><h3>Software</h3><p>Application development</p></div>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-icon">▥</span>
                <div><h3>Analytics</h3><p>Data-driven insights</p></div>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-icon">↗</span>
                <div><h3>Problem Solving</h3><p>Structured thinking</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section section-container" id="skills">
          <SectionHeading
            eyebrow="02 / TECH STACK"
            title={<>Tools I work <span className="gradient-text">with.</span></>}
            description="Technologies and tools connected to my development and analytics experience."
          />

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                className="skill-card"
                key={skill.name}
                style={{ "--card-index": index }}
              >
                <span className="skill-icon">{skill.icon}</span>
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.level}</p>
                </div>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>

          <p className="skills-note">
            Skill levels vary by technology. My focus is on continuous practice
            and building practical projects.
          </p>
        </section>

        <section className="experience-section section-container" id="experience">
          <SectionHeading
            eyebrow="03 / EXPERIENCE"
            title={<>Where I've <span className="gradient-text">grown.</span></>}
            description="Professional experiences that have shaped my technical and analytical approach."
          />

          <div className="timeline">
            {experiences.map((item, index) => (
              <article className="timeline-item" key={item.role}>
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="experience-card">
                  <span className="experience-period">{item.period}</span>
                  <h3>{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                  <p className="experience-description">{item.description}</p>
                  <div className="tag-list">
                    {item.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section section-container" id="projects">
          <SectionHeading
            eyebrow="04 / SELECTED WORK"
            title={<>Ideas turned into <span className="gradient-text">projects.</span></>}
            description="A selection of development work and practical projects in progress."
          />

          <div className="project-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "filter-button active" : "filter-button"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article
                className={`project-card project-${project.color}`}
                key={project.number}
              >

                <div className="project-card-top">
                  <span className="project-number">{project.number} / 06</span>
                  <span className="project-symbol">{project.icon || "↗"}</span>
                </div>

                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
  {project.technologies.map((technology) => (
    <span key={technology}>{technology}</span>
  ))}
</div>

<div className="project-bottom">
  {project.planned ? (
    <span className="project-status">
      <span className="status-dot status-planned" />
      Planned project
    </span>
  ) : (
    <span className="project-status">
      <span className="status-dot" />
      Completed project
    </span>
  )}

  <div className="project-links">
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.title} on GitHub`}
      >
        GitHub ↗
      </a>
    )}

    {project.demo && (
      <a
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title} live demo`}
      >
        Live Demo ↗
      </a>
    )}
  </div>

  <span className="project-arrow">↗</span>
</div>
</article>
))}
</div>

<div className="projects-note">
  <span>✳</span>
  Projects marked “Planned project” will be built and tested before
  being presented as completed work.
</div>
</section>

        <section className="education-section section-container" id="education">
          <SectionHeading
            eyebrow="05 / EDUCATION"
            title={<>The foundation <span className="gradient-text">behind the work.</span></>}
          />

          <div className="education-card">
            <div className="education-icon">AU</div>
            <div className="education-details">
              <span className="experience-period">2021 — 2025</span>
              <h3>Bachelor of Technology</h3>
              <p>Computer Science & Engineering</p>
              <span className="education-institute">Aliah University</span>
            </div>
            <div className="education-score">
              <span>CGPA</span>
              <strong>7.12</strong>
            </div>
          </div>
        </section>

        <section className="contact-section section-container" id="contact">
          <div className="contact-card">
            <span className="eyebrow">06 / LET'S CONNECT</span>
            <h2>
              Have an idea?
              <br />
              <span className="gradient-text">Let's build something.</span>
            </h2>
            <p>
              I am interested in opportunities across Python development,
              data analytics, and software engineering.
            </p>

            <a
              className="button button-primary contact-email"
              href="mailto:thakurrupesh5477@gmail.com"
            >
              Get in Touch <span>↗</span>
            </a>

            <div className="contact-links">
              <a href="https://github.com/R841927" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/rupesh-thakur-44667922b/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a href="mailto:thakurrupesh5477@gmail.com">Email ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">R</span>
          <span>RUPESH<span className="brand-dot">.</span></span>
        </a>

        <p>Designed with purpose. Built with curiosity.</p>

        <a href="#home" className="back-to-top">Back to top ↑</a>
        <span className="footer-copy">© {new Date().getFullYear()} Rupesh Thakur</span>
      </footer>
    </>
  );
}

export default App;