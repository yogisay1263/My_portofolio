import React from 'react';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import './App.css'; // Import the CSS file

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function App() {
  return (
    <div className="App">
      <Header /> {/* Render the Header component */}
      <div className="menu-links">
        <ul>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
      <section id="profile">
        <div className="section__pic-container">
          <img src={require("./assets/yogi-3.jpg")} alt="yogitha profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Yogitha</h1>
          <p className="section__text__p2">Graduating student</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open('./assets/yogitha.pdf')}
            >
              Download CV

            </button>
            <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={require("./assets/linkedin.png")}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => window.location.href = 'https://www.linkedin.com/in/yadla-yogitha-124122229/'}
            />
            <img
              src={require("./assets/github.png")}
              alt="My Github profile"
              className="icon"
              onClick={() => window.location.href = 'https://github.com/yogisay1263'}
            />
          </div>
        </div>
      </section>
      <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img
            src={require("./assets/profile-yogi.jpg")}
            alt="Profile picture"
            class="about-pic"
          />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img
                src={require("./assets/experience.png")}
                alt="Experience icon"
                class="icon"
              />
              <h3>Experience</h3>
              <p>0 years<br />experience</p>
            </div>
            <div class="details-container">
              <img
                src={require("./assets/education.png")}
                alt="Education icon"
                class="icon"
              />
              <h3>Education</h3>
              <p>B.Tech Bacherlors Of Technology-2021-2025<br /> intermediate-2019-2021 <br /> 10th class- 2018</p>
            </div>
          </div>
          <div class="text-container">
            <p>
            "As a motivated and detail-oriented engineering student, 
            I am eager to secure a challenging internship opportunity at a forward-thinking engineering firm.
             With a strong foundation in engineering principles and a passion for hands-on problem-solving, 
            I am committed to gaining practical experience and contributing to innovative projects.
            <br></br>
            </p>
          </div>
        </div>
      </div>
      <img
        src={require("./assets/arrow.png"
   )}     alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#experience'"
      />
      <br></br>
      </section>
      <section id="experience">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">SKILLS</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">frontend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>flask web frame work</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>React</h3>
                  <p>Basic</p>
                </div>
              </article>
              
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">programming languges</h2>
            <div class="article-container">
              <article>
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Python</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Java</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>C programming</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src={require("./assets/arrow.png"
   )}     alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#projects'"
      />
   
      </section>
      <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={require("./assets/project-1.jpg")}
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project One</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/yogisay1263/my_projects/tree/main/flask55/flask33'}
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://www.linkedin.com/posts/yadla-yogitha-124122229_python-html-css-activity-7063457480747487232-T7Nz?utm_source=share&utm_medium=member_desktop'}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={require("./assets/project-2.jpg"
)}                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Team project</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/MONIKANAMALA/College-Dashboard'}
              >
                Github
              </button>
              <button
                class="btn btn-color-2 proj~ect-btn"
                onClick={() => window.location.href = 'https://www.linkedin.com/posts/yadla-yogitha-124122229_mernproject-educationtechnology-studentportal-activity-7089134157557071872-rh_C?utm_source=share&utm_medium=member_desktop'}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={require("./assets/project-3.jpg")}
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project Three</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/yogisay1263/my_projects/tree/main/flask%20k%20hub'}
                
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://www.linkedin.com/in/yadla-yogitha-124122229/'}
                
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={require("./assets/arrow.png")}
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#contact'"
      />
      </section>
      <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={require("./assets/email.png")}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:yadlayogitha@gmail.com">yadlayogitha@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src={require("./assets/linkedin.png")}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href='https://www.linkedin.com/in/yadla-yogitha-124122229/'>LinkedIn</a></p>
        </div>
      </div>
    </section>

      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default App;
