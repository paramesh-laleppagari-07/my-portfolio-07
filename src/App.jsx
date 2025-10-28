import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />

      {/* Floating Social Icons */}

      <div className="social-fixed">
        {/* Email */}
        <a
          href="mailto:paramesh.itcareers@gmail.com"
          className="social-icon email"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://linkedin.com/in/paramesh-laleppagari"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        <a
          href="https://github.com/paramesh-laleppagari-07"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github"
        >
          <i className="fab fa-github"></i>
        </a>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon whatsapp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
