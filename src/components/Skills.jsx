import { useState } from "react";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import js from "../assets/icons/javascript.svg";
import java from "../assets/icons/java-light.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github-light.svg";
import angular from "../assets/icons/angular.png";
import react from "../assets/icons/react.png";
import bootstrap from "../assets/icons/bootstrap.png";
import redux from "../assets/icons/redux.png";

const SKILLS_DATA = [
  { img: react, name: "React", category: "Frontend", percent: "90%", color: "#61dafb" },
  { img: js, name: "JavaScript", category: "Frontend", percent: "85%", color: "#f7df1e" },
  { img: bootstrap, name: "Bootstrap", category: "Frontend", percent: "90%", color: "#7952b3" },
  { img: redux, name: "Redux", category: "Frontend", percent: "80%", color: "#764abc" },
  { img: html, name: "HTML", category: "Frontend", percent: "95%", color: "#e34f26" },
  { img: css, name: "CSS", category: "Frontend", percent: "90%", color: "#1572b6" },
  { img: angular, name: "Angular", category: "Frontend", percent: "75%", color: "#dd0031" },
  { img: java, name: "Java", category: "Languages", percent: "75%", color: "#f89820" },
  { img: git, name: "Git", category: "Tools", percent: "85%", color: "#f05032" },
  { img: github, name: "GitHub", category: "Tools", percent: "90%", color: "#ffffff" }
];

function Skills() {
  const [filter, setFilter] = useState("All");

  const filteredSkills = SKILLS_DATA.filter(
    (skill) => filter === "All" || skill.category === filter
  );

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <Reveal>
          <h1>
            My <span className="text">Skills</span>
          </h1>
          <p className="skills-subtitle">"I believe in learning deeply and building practically"</p>
        </Reveal>

        {/* Skill Category Filters */}
        <Reveal delay={0.1}>
          <div className="skills-filter">
            {["All", "Frontend", "Languages", "Tools"].map((cat) => (
              <button
                key={cat}
                className={`skills-filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skills Cards Grid */}
        <Reveal delay={0.2}>
          <div className="skill-container">
            {filteredSkills.map((skill, index) => (
              <Tilt key={skill.name} max={18} scale={1.06} speed={300}>
                <div 
                  className="grid-cell" 
                  style={{ "--skill-color": skill.color }}
                >
                  <img src={skill.img} alt={skill.name} />
                  <p>{skill.name}</p>
                  <div className="skill-progress-container">
                    <div 
                      className="skill-progress" 
                      style={{ width: skill.percent }}
                    />
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
