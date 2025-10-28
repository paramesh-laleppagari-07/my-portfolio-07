import React from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Frontend Development",
    description:
      "Design and build interactive, responsive, and visually appealing web interfaces using React.js, HTML, CSS, and JavaScript.",
    icon: "🖥️",
  },
  {
    title: "Backend Development",
    description:
      "Develop efficient server-side logic, REST APIs, and database integration using Python, Django, and SQL for dynamic web apps.",
    icon: "⚙️",
  },
  {
    title: "Full Stack Development",
    description:
      "Build complete end-to-end web applications by combining modern frontend and backend technologies with clean architecture.",
    icon: "🌐",
  },
  {
    title: "Database Management (SQL)",
    description:
      "Design and manage relational databases, write optimized SQL queries, and ensure smooth data storage and retrieval.",
    icon: "🗄️",
  },
  {
    title: "Data Visualization",
    description:
      "Present data insights through clean and meaningful visualizations using Power BI, Matplotlib, and analytical techniques.",
    icon: "📊",
  },
  {
    title: "Problem Solving & Algorithms",
    description:
      "Write efficient, optimized code and apply logical thinking to solve real-world challenges in software development.",
    icon: "🧩",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">My Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
