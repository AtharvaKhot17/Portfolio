import '../styles/Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "🚀 Programming Languages",
      skills: [
        { name: "C++", icon: "fas fa-code" },
  
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "Java", icon: "fab fa-java" }
      ]
    },
    {
      title: "💻 Web Technologies",
      skills: [
        { name: "React", icon: "fab fa-react" },
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" }
      ]
    },
    {
      title: "🛠️ Databases & Tools",
      skills: [
        { name: "Firebase", icon: "fas fa-fire" },
        { name: "Git/GitHub", icon: "fab fa-github" },
      
      ]
    },
    {
      title: "🎯 Core Concepts",
      skills: [
        { name: "DSA", icon: "fas fa-microchip" },
        { name: "OOP", icon: "fas fa-cube" },
        { name: "OS", icon: "fas fa-desktop" },
        { name: "CN", icon: "fas fa-network-wired" },
        { name: "DBMS", icon: "fas fa-server" }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="emoji">⚡</span> Skills & Expertise
        </h2>
        <div className="skills-grid-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card">
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <i className={`${skill.icon} skill-icon`}></i>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 