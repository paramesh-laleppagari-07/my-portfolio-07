import React, { useState } from "react";
import profilePic from "../assets/profile.png";
import "./About.css";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        {/* Profile Image */}
        <div className="about-image">
          <img src={profilePic} alt="Laleppagari Paramesh" />
        </div>

        {/* About Content */}
        <div className="about-content">
          <p className="intro-text">
            <span className="hi-text">Hi,</span> Myself{" "}
            <span className="black-highlight">Laleppagari Paramesh</span>, an{" "}
            <span className="highlight">MCA Graduate</span> and{" "}
            <span className="black-highlight">
              Entry-Level Full Stack Developer
            </span>
            . I’m passionate about building{" "}
            <span className="highlight">modern</span>,{" "}
            <span className="highlight">responsive</span>, and{" "}
            <span className="highlight">user-focused</span> web applications that
            combine creativity and functionality.
          </p>

          {/* Hidden content - expands when clicked */}
          {isExpanded && (
            <>
              <p className="education">
                🎓 I completed my <span className="black-highlight">MCA</span> from{" "}
                <span className="black-highlight">
                  Santhiram Engineering College (JNTUA University)
                </span>{" "}
                and my <span className="black-highlight">B.Sc in Computer Science</span>{" "}
                from{" "}
                <span className="black-highlight">
                  Sree Sankara’s Degree College (Rayalaseema University)
                </span>
                .
              </p>

              <p className="skills-text">
                I specialize in both{" "}
                <span className="black-highlight">Frontend</span> and{" "}
                <span className="black-highlight">Backend</span> development —
                building clean, functional interfaces with{" "}
                <span className="highlight">React.js</span>,{" "}
                <span className="highlight">HTML</span>,{" "}
                <span className="highlight">CSS</span>, and{" "}
                <span className="highlight">JavaScript</span>, along with strong
                backend logic using{" "}
                <span className="highlight">Python</span>,{" "}
                <span className="highlight">Django</span>, and{" "}
                <span className="highlight">SQL</span>.
              </p>

              <p className="career-goal">
                I’m actively seeking{" "}
                <span className="black-highlight">entry-level opportunities</span> in
                the <span className="black-highlight">IT</span> or{" "}
                <span className="black-highlight">software development</span>{" "}
                industry where I can apply my skills and grow as a{" "}
                <span className="highlight">Full Stack Developer</span>.
              </p>

              <p className="strengths">
                I’m a <span className="black-highlight">quick learner</span>,{" "}
                <span className="black-highlight">team player</span>, and{" "}
                <span className="black-highlight">detail-oriented developer</span>{" "}
                who loves solving problems and learning new technologies.
              </p>
            </>
          )}

          {/* 🔽 Toggle Button */}
          <button
            className="toggle-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "View Less" : "View More"}
          </button>

          <div className="about-buttons">
            <a href="#skills" className="btn secondary">
              View My Skills
            </a>
            <a href="#contact" className="btn primary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
