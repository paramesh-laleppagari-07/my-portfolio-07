import React from "react";
import profilePic from "../assets/profile.png";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      {/* Left: Content */}
      <div className="home-content">
        <h1 className="intro">
          Hi, I’m{" "}
          <span className="highlight hover-highlight">Laleppagari Paramesh</span> 👋
        </h1>
        <h2 className="subtitle">Entry-Level Full Stack Developer</h2>

        <p className="description">
          I’m passionate about building <span className="bold-black">dynamic</span> and{" "}
          <span className="bold-black">efficient</span> web applications that combine{" "}
          <span className="bold-black">frontend creativity</span> with{" "}
          <span className="bold-black">backend logic</span>. Skilled in{" "}
          <span className="highlight-tech">React.js</span>,{" "}
          <span className="highlight-tech">Python</span>,{" "}
          <span className="highlight-tech">Django</span>, and{" "}
          <span className="highlight-tech">SQL</span>, I focus on writing{" "}
          <span className="bold-black">clean</span>,{" "}
          <span className="bold-black">maintainable</span> code that enhances{" "}
          <span className="bold-black">user experience</span>.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn primary">
            View My Projects
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
          <a
            href="/Laleppagari_Paramesh_FullStack_Resume.pdf"
            download="Laleppagari_Paramesh_FullStack_Resume.pdf"
            className="btn resume"
          >
            Download Resume
          </a>
        </div>

        {/* <div className="social-links">
          <a
            href="https://github.com/paramesh-laleppagari-07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/paramesh-laleppagari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:paramesh.itcareers@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div> */}
      </div>

      {/* Right: Profile Image */}
      <div className="home-image">
        <img src={profilePic} alt="Paramesh" />
      </div>
    </section>
  );
}

export default Home;
