// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about-heading">About Me</h2>

        {/* Proper top heading */}
        <div className="about-header">
          
        </div>

        {/* Flexbox for text + image */}
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm passionate about creating web apps and experimenting with data. 
              My specialization is Data Science and Big Data Analytics. 
              I am also an entrepreneur. I love turning ideas into reality 
              through clean and efficient code.
            </p>
            <p>
              When I'm not coding, you can find me reading manhwa, tech blogs, 
              or experimenting with new technologies. I believe in continuous 
              learning and always strive to improve my skills.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h3>0</h3>
                <p>Experience</p>
              </div>
              <div className="stat">
                <h3>4+</h3>
                <p>Projects</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img
              src="https://www.bing.com/ck/a?!&&p=25572313747e55f355f48fe542a35d71f4ede0af722d6bbdea2ff5ef432f2568JmltdHM9MTc1Njk0NDAwMA&ptn=3&ver=2&hsh=4&fclid=34b5e4a1-df4d-6738-119c-f7e5dea566f0&u=a1L2ltYWdlcy9zZWFyY2g_cT1hYm91dCt1cytpbWFnZXMmaWQ9Mjk5NEU0MEQ1OUNGQTE2Mjk4MjBCRDY4Njc1RURBN0NGQTUxRTA1QSZGT1JNPUlBQ0ZJUg&ntb=1"
              alt="Naitik Dubey"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
