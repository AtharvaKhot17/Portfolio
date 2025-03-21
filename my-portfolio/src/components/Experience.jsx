import '../styles/Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: "Program Director & Assistant Treasurer",
      company: "SAIT",
      period: "2023 - Present",
      description: "Leading technical initiatives and managing financial aspects of the organization.",
      achievements: [
        "Led TechFusion 2K24 event successfully",
        "Organized technical workshops and seminars",
        "Coordinated with multiple teams for event execution"
      ]
    },
    {
      title: "Outreach Member",
      company: "Google Developer Student Clubs (GDSC)",
      period: "2023 - Present",
      description: "Contributing to community growth and technical knowledge sharing.",
      achievements: [
        "Organized coding workshops and hackathons",
        "Facilitated technical community meetups",
        
      ]
    }
  ]

  const achievements = [
    {
      category: "Academic Excellence",
      items: [
        {
          title: "MHTCET 2022",
          detail: "Secured 98.68 percentile",
          icon: "fas fa-award"
        },
        
      ]
    },
    {
      category: "Technical Achievements",
      items: [
        {
          title: "LeetCode",
          detail: "Solved 250+ DSA problems",
          icon: "fas fa-code"
        },
      
      ]
    },
    {
      category: "Leadership & Events",
      items: [
        {
          title: "TechFusion 2K24",
          detail: "Successfully led the flagship tech event",
          icon: "fas fa-users"
        },
    
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">
          <span className="emoji">💼</span> Experience & Achievements
        </h2>
        
        <div className="experience-container">
          <div className="work-experience">
            <h3>Work Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>{exp.title}</h4>
                      <span className="company">{exp.company}</span>
                      <span className="period">{exp.period}</span>
                    </div>
                    <p>{exp.description}</p>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>
                          <i className="fas fa-check-circle"></i>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="achievements-section">
            <h3>Achievements & Certifications</h3>
            <div className="achievements-grid">
              {achievements.map((category, index) => (
                <div key={index} className="achievement-card">
                  <h4>{category.category}</h4>
                  <div className="achievements-items">
                    {category.items.map((item, i) => (
                      <div key={i} className="achievement-item">
                        <div className="achievement-icon">
                          <i className={item.icon}></i>
                        </div>
                        <div className="achievement-info">
                          <h5>{item.title}</h5>
                          <p>{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 