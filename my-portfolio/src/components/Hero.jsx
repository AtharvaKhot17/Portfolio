import '../styles/Hero.css'
import { useEffect } from 'react'


const Hero = () => {
  useEffect(() => {
    const text = document.querySelector('.typing-text')
    const roles = ['Software Developer', 'IT Enthusiast', 'Problem Solver']
    let roleIndex = 0
    let charIndex = 0
    let isDeleting = false

    const type = () => {
      const currentRole = roles[roleIndex]
      
      if (isDeleting) {
        text.textContent = currentRole.substring(0, charIndex - 1)
        charIndex--
      } else {
        text.textContent = currentRole.substring(0, charIndex + 1)
        charIndex++
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true
        setTimeout(type, 1500)
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        roleIndex = (roleIndex + 1) % roles.length
        setTimeout(type, 500)
      } else {
        setTimeout(type, isDeleting ? 50 : 100)
      }
    }

    type()
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="greeting">👋 Hello, I'm</div>
          <h1>Atharva Khot</h1>
          <h2>I'm a <span className="typing-text"></span></h2>
          <p className="hero-description">
          Passionate about problem-solving and technology, with a strong foundation in C++, DSA, OOPs, and core computing concepts like Operating Systems, Databases, and Computer Networks. Always eager to learn, explore new challenges, and contribute to impactful projects.
          </p>
          
          <div className="cta-buttons">
            <a href="#projects" className="primary-btn">
              <i className="fas fa-code"></i> View My Work
            </a>
            <a href="/resume.pdf" className="secondary-btn" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-download"></i> Download CV
            </a>
          </div>

          {/* <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">250+</span>
              <span className="stat-label">LeetCode Problems</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98.68</span>
              <span className="stat-label">MHTCET Percentile</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Built</span>
            </div>
          </div> */}

          <div className="social-links">
            <a href="https://github.com/AtharvaKhot17" target="_blank" rel="noopener noreferrer" className="social-btn">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/atharva-khot-3b2479257" target="_blank" rel="noopener noreferrer" className="social-btn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://leetcode.com/u/atharvakhot17/" target="_blank" rel="noopener noreferrer" className="social-btn">
              <i className="fas fa-code"></i>
            </a>
            <a href="mailto:atharvakhot1718@gmail.com" target="_blank" rel="noopener noreferrer" className="social-btn">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="blob-effect"></div>
          <div className="hero-animation">
            <div className="code-window">
              <div className="window-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-content">
                <pre>
                  <code>
{`class Developer {
  name = "Atharva Khot"
  skills = ["React", "Java", "DSA"]
  passion = "Building Solutions"
}`}
                  </code>
                </pre>
              </div>
            </div>
            <div className="floating-tech">
              <i className="fab fa-react"></i>
              <i className="fab fa-java"></i>
              <i className="fab fa-js"></i>
              <i className="fas fa-database"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  )
}

export default Hero 