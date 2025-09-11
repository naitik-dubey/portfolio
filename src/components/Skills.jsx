// src/components/Skills.js
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'C', level: 90 },
    { name: 'Java', level: 75 },
    { name: 'Python', level: 75 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },    
    { name: 'SQL', level: 70 },
    { name: 'React', level: 70 },
    { name: 'Data Structures & Algorithms', level: 80 },
    { name: 'Big Data Analytics', level: 60 },
    { name: 'Data Science', level: 60 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;