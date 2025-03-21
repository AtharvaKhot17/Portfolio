import '../styles/About.css'
import image1 from '../assets/profile.jpg'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">
        <span className="emoji">👨‍💻</span> About Me
      </h2>
      <div className="about-content">
        <div className="about-text">
          <div className="bio-content">
            <div className="highlight-box">
              <p className="intro-text">
                Hello! I'm <span className="highlight">Atharva Khot</span>, a passionate software developer and IT enthusiast based in Sangli, Maharashtra.
              </p>
            </div>
            
            <p>
              Currently pursuing my BTech in Information Technology at <span className="highlight">Walchand College of Engineering</span>, 
            </p>
            
            <p>
              My journey in tech has been driven by curiosity and a desire to create meaningful solutions. 
              I enjoy tackling complex problems and turning them into simple, elegant solutions. 
            </p>


            
          </div>
        </div>
        
        <div className="about-image">
          <div className="image-container">
            <img src={image1} alt="Atharva Khot" />
          </div>
          <div className="tech-stack">
            <div className="tech-item">
              <i className="fas fa-rocket"></i>
              Web Development
            </div>
            <div className="tech-item">
              <i className="fas fa-brain"></i>
              Problem Solving
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 