import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h3>Contact Info</h3>
          <div className="contact-details">
            <p>
              <i className="fas fa-envelope"></i>
              <a href="mailto:your.email@example.com">atharvakhot1718@gmail.com</a>
            </p>
            <p>
              <i className="fas fa-phone"></i>
              <a href="tel:+1234567890">+91 8767865692</a>
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              Sangli, Maharashtra, India
            </p>
          </div>
        </div>

        <div className="footer-section connect-section">
          <h3>Let's Connect!</h3>
          <p className="connect-text">Feel free to reach out for collaborations or just a friendly hello 👋</p>
          <div className="social-links">
            <a href="https://github.com/AtharvaKhot17" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/atharva-khot-3b2479257" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://leetcode.com/u/atharvakhot17/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fas fa-code"></i>
            </a>
            <a href="mailto:atharvakhot1718@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <div className="links-grid">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-line"></div>
        <p>© {new Date().getFullYear()} Atharva Khot. All rights reserved.</p>
        <p className="made-with">Made with <span className="heart">❤️</span> using React</p>
      </div>
    </footer>
  )
}

export default Footer 