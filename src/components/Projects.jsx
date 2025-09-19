// src/components/Projects.jsx
import React from "react";
import "./Projects.css";

const sampleProjects = [
  { id: 1, title: "Strive Rides", desc: "Ride-sharing connecting drivers & passengers", tech: ["React","Node.js","MongoDB"], live:"#", repo:"#"},
  { id: 2, title: "StockSim", desc: "Stock market simulator for trading strategies", tech: ["React","GraphQL","Postgres"], live:"#", repo:"#"},
  { id: 3, title: "ReflexCube", desc: "AI-model driven prompt-based assistant", tech: ["Python","ML","Node.js"], live:"#", repo:"#"},
  { id: 4, title: "Plant Store", desc: "E-commerce plant shop with cart & checkout", tech: ["React","Redux","MySQL"], live:"#", repo:"#"},
  { id: 5, title: "Portfolio Site", desc: "Personal portfolio with projects & blog", tech: ["React","Tailwind"], live:"#", repo:"#"},
  { id: 6, title: "Chatbot", desc: "Customer support chatbot with intents", tech: ["Node.js","Dialogflow"], live:"#", repo:"#"},
  { id: 7, title: "Analytics Dashboard", desc: "Data dashboards & visualizations", tech: ["D3","React","API"], live:"#", repo:"#"},
  { id: 8, title: "File Sync", desc: "Realtime file sync & versioning", tech: ["WebSockets","Node.js"], live:"#", repo:"#"},
  { id: 9, title: "Image Classifier", desc: "CNN-based image classifier demo", tech: ["TensorFlow","Flask"], live:"#", repo:"#"},
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <h2>Projects</h2>
          <p style={{ color: "#6b7280", marginTop: "8px" }}>
            A selection of my recent work — click to view demo or source.
          </p>
        </div>

        <div className="projects-grid">
          {sampleProjects.map((p) => (
            <article className="project-card" key={p.id}>
              <div>
                <h3>{p.title}</h3>
                <div className="project-meta">{p.tech.join(" • ")}</div>
                <p className="desc">{p.desc}</p>
              </div>

              <div>
                <div className="technologies">
                  {p.tech.map((t) => (
                    <span className="tech-tag" key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={p.repo} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={p.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
