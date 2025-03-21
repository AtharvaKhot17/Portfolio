import '../styles/Projects.css'
import mygym from '../assets/gym.jpg'
import balancepro from '../assets/portfolio.png'
import ai from '../assets/interview.jpg'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Interview Shortlisting System",
      description: "An intelligent platform that automates technical interviews by evaluating candidates through real-time speech analysis, code assessment, and comprehensive AI-driven feedback.",
      image: ai,
      techStack: [
        { name: "React", icon: "fab fa-react" },
        { name: "Node.js", icon: "fab fa-node" },
        { name: "Express", icon: "fab fa-node-js" },
        { name: "Gemini AI", icon: "fas fa-brain" }
      ],
      features: [
        "Real-time speech recognition with Web Speech API",
        "Dynamic question generation using Gemini AI",
        "Interactive code editor with Monaco",
        "Multi-step interview process",
        "Comprehensive skill assessment"
      ],
      links: {
        github: "https://github.com/AtharvaKhot17/interview-ai",
        demo: "https://interview-ai-demo.vercel.app"
      }
    },
    {
      id: 2,
      title: "MyGym - Gym Management System",
      description: "A comprehensive gym management system with QR-based attendance tracking and real-time monitoring features.",
      image: mygym,
      techStack: [
        { name: "Java", icon: "fab fa-java" },
        { name: "Firebase", icon: "fas fa-fire" },
        { name: "Android", icon: "fab fa-android" },
        { name: "React", icon: "fab fa-react" }
      ],
      features: [
        "QR Code Attendance System",
        "Live Attendance Tracking",
        "Health Monitoring Dashboard",
        "Gym Atmosphere Tracking"
      ],
      links: {
        github: "https://github.com/yourusername/mygym",
        demo: "https://mygym-demo.vercel.app"
      }
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React to showcase my projects, skills, and experience.",
      image: balancepro,
      techStack: [
        { name: "React", icon: "fab fa-react" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" }
      ],
      features: [
        "Responsive Design",
        "Interactive UI Components",
        "Dynamic Content Rendering",
        "Smooth Animations",
        "Contact Form Integration"
      ],
      links: {
        github: "https://github.com/AtharvaKhot17/portfolio",
        demo: "https://atharvakhot.vercel.app"
      }
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="emoji">🎯</span> Featured Projects
        </h2>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> View Code
                  </a>
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <div key={index} className="tech-item">
                      <i className={tech.icon}></i>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 