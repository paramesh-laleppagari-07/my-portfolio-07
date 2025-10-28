import React, { useState } from "react";
import "./Skills.css";

const skillsData = [
  { name: "Python", quote: "Make your life colorful with Python!" },
  { name: "SQL", quote: "Manage data efficiently with SQL!" },
  { name: "CSS", quote: "Style your world with CSS!" },
  { name: "HTML", quote: "Structure your web content!" },
  { name: "JavaScript", quote: "JavaScript powers the web!" },
  { name: "React.js", quote: "React makes UI development fun!" },
  { name: "Django", quote: "Django for fullstack web apps!" },
  { name: "Java (basics)", quote: "Java is everywhere!" },
  { name: "Power BI", quote: "Visualize data with Power BI!" },


];

const certificationsData = [
  {
    title: "Python Full Stack Developer",
    provider: "PySpiders, BTM Bangalore",
    date: "Nov 2022 – Aug 2023",
    logo: "/src/assets/spy.png",
    description: "Skills Covered: Python, SQL, CSS & HTML, JavaScript, ReactJS, Django basics",
    link: null
  },
  {
    title: "Web Fullstack Developer Virtual Internship",
    provider: "Eduskills",
    date: "Oct – Dec 2024",
    logo: "/src/assets/edu-logo2.png",
    description: "Completed a virtual internship in fullstack web development.",
    link: "https://drive.google.com/file/d/1Z_6_Uesv8ILB1m5dKcWTUt1jWE_G0JPy/view?usp=sharing"
  },
  {
    title: "Artificial Intelligence Internship",
    provider: "Aimer Society",
    date: "July 18, 2024",
    logo: "/src/assets/aimers.png",
    description: "Worked on AI chatbot, Power BI dashboards, video detector, vehicle detector, and traffic detector using Python.",
    link: "https://drive.google.com/file/d/1CHPGGXRBWhBtkz7hqipUUKl7_OQRsuGK/view?usp=sharing"
  },
  {
    title: "Cloud Computing",
    provider: "NPTEL",
    date: "Jan – Apr 2024",
    logo: "/src/assets/nptl.png",
    description: "Completed NPTEL Cloud Computing course covering architecture, virtualization, and deployment.",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs17/Course/NPTEL24CS17S46330030530357391.pdf"
  },
  {
    title: "Python Basics",
    provider: "HackerRank",
    date: "21 Aug 2024",
    logo: "/src/assets/hacker.png",
    description: "Certified in Python fundamentals including syntax, loops, and functions.",
    link: "https://www.hackerrank.com/certificates/iframe/c08204c87013"
  },
  {
    title: "Python Problem Solving (Basic)",
    provider: "HackerRank",
    date: "24 Aug 2024",
    logo: "/src/assets/hacker.png",
    description: "Certified in Problem Solving (Basic) with algorithmic challenges.",
    link: "https://www.hackerrank.com/certificates/iframe/9a843b065bf7"
  },
  {
    title: "Power BI & Business Intelligence",
    provider: "PrepInsta Prime",
    date: "29 Sep 2025",
    logo: "/src/assets/prep-logo.jpg",
    description: "Certified in Power BI and Business Intelligence tools.",
    link: "https://drive.google.com/file/d/1zpo4JP0pZkt7FKesKxD5alld2DTtGs7x/view?usp=sharing"
  },
  {
    title: "Python",
    provider: "PrepInsta Prime",
    date: "25 Aug 2025",
    logo: "/src/assets/prep.png",
    description: "Completed Python certification covering programming and application development.",
    link: "https://drive.google.com/file/d/1TsTGFzxHuRzJgcJ6ukOzBPROs0vwWFMw/view?usp=sharing"
  },
  {
    title: "SQL",
    provider: "PrepInsta Prime",
    date: "29 Sep 2025",
    logo: "/src/assets/prep-logo.jpg",
    description: "Certified in SQL database management, queries, and relational design.",
    link: "https://drive.google.com/file/d/138q7c6hiGYuQEYk1UsOBtQddLfeSHWjP/view?usp=sharing"
  }
];

const Skills = () => {
  const [activeQuote, setActiveQuote] = useState("");
  const [selectedCert, setSelectedCert] = useState(null);

  const handleView = (cert) => {
    if (cert.link) {
      window.open(cert.link, "_blank");
    } else {
      setSelectedCert(cert);
    }
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills & Certifications</h2>

      {/* Skills Section */}
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            onMouseEnter={() => setActiveQuote(skill.quote)}
            onMouseLeave={() => setActiveQuote("")}
          >
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      {activeQuote && <p className="skill-quote">{activeQuote}</p>}

      {/* Certifications Section */}
      <h3 className="cert-title">Certifications & Internships</h3>
      <div className="certifications-container">
        {certificationsData.map((cert, index) => (
          <div key={index} className="cert-card">
            <img src={cert.logo} alt={`${cert.provider} logo`} className="cert-logo" />
            <h4>{cert.title}</h4>
            <p className="cert-provider">{cert.provider}</p>
            <p className="cert-date">{cert.date}</p>
            <button className="view-btn" onClick={() => handleView(cert)}>
              {cert.link ? "View Certificate" : "View Details"}
            </button>
          </div>
        ))}
      </div>

      {/* Modal for PySpiders or other without links */}
      {selectedCert && (
        <div className="cert-modal" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={e => e.stopPropagation()}>
            <h3>{selectedCert.title}</h3>
            <p><strong>Provider:</strong> {selectedCert.provider}</p>
            <p><strong>Date:</strong> {selectedCert.date}</p>
            <p>{selectedCert.description}</p>
            {selectedCert.link && (
              <a href={selectedCert.link} target="_blank" rel="noopener noreferrer" className="btn">
                View Certificate
              </a>
            )}
            <button className="btn secondary" onClick={() => setSelectedCert(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
