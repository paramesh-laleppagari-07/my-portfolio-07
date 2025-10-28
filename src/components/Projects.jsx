import React, { useState } from "react";
import "./Projects.css";

import libraryImg from "../assets/library.png";
import sentimentImg from "../assets/sentiment.png";
import chatbotImg from "../assets/chatbot.png";
import calculatorImg from "../assets/calculator.png";
import weatherImg from "../assets/weather.png";
import quoteImg from "../assets/quote.png";

const projectsData = [
  {
    name: "Library Management System",
    description:
      "A full-stack web app to manage books, members, and borrow records. Includes CRUD operations, search, and authentication features.",
    tech: "Python, Django, SQLite, Bootstrap, JavaScript",
    image: libraryImg,
    live: "http://parameshlaleppagari07.pythonanywhere.com",
    github: "https://github.com/paramesh-laleppagari-07/library-management",
  },
  {
    name: "Twitter Sentiment Analysis",
    description:
      "Analyzed real-time tweets using Tweepy and TextBlob to classify sentiments as positive, negative, or neutral with Matplotlib visualizations.",
    tech: "Python, Tweepy, TextBlob, Pandas, Matplotlib",
    image: sentimentImg,
    live: "https://twitter-sentiment-analysis-front.onrender.com",
    github:
      "https://github.com/paramesh-laleppagari-07/twitter-sentiment-analysis",
  },
  {
    name: "AI ChatBot (LangChain & Hugging Face)",
    description:
      "Built an AI ChatBot capable of contextual conversations using LangChain and Hugging Face. Integrated FAISS for document retrieval and deployed via Streamlit.",
    tech: "Python, LangChain, Hugging Face, FAISS, Streamlit",
    image: chatbotImg,
    live: "soon",
    github: "https://github.com/paramesh-laleppagari-07/GenAIChatBot.git",
  },
  {
    name: "Calculator",
    description:
      "A basic calculator built using HTML, CSS, and JavaScript for performing simple arithmetic operations.",
    tech: "HTML, CSS, JavaScript",
    image: calculatorImg,
    live: "https://simple-basic-calculater.netlify.app/",
    github:
      "https://github.com/paramesh-laleppagari-07/css-html-js-calculator.git",
  },
  {
    name: "Weather Report App",
    description:
      "Fetches and displays real-time weather information using the OpenWeather API, styled with CSS for a clean UI.",
    tech: "HTML, CSS, JavaScript, Weather API",
    image: weatherImg,
    live: "https://weather-report-local.netlify.app/",
    github:
      "https://github.com/paramesh-laleppagari-07/weather-web-app.git",
  },
  {
    name: "Random Quote Generator",
    description:
      "Generates inspiring random quotes dynamically using a public API. Built with HTML, CSS, and JavaScript.",
    tech: "HTML, CSS, JavaScript, API",
    image: quoteImg,
    live: "https://random-quote-genarator-web.netlify.app/",
    github:
      "https://github.com/paramesh-laleppagari-07/random-quote-genarator.git",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <img src={project.image} alt={project.name} className="project-img" />
            <button
              className="btn view-btn"
              onClick={() => setSelectedProject(project)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-btn" onClick={() => setSelectedProject(null)}>
              ✕
            </span>
            <h2>{selectedProject.name}</h2>
            <p className="modal-desc">{selectedProject.description}</p>
            <p className="modal-tech">
              <strong>Technologies Used:</strong> {selectedProject.tech}
            </p>
            <div className="modal-buttons">
              {selectedProject.live !== "soon" && selectedProject.live !== "#" && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn primary"
                >
                  Live Demo
                </a>
              )}
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
