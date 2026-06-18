import { useState } from "react";
import Reveal from "./Reveal";
import { PROJECTS_DATA } from "./Projects";

function About() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className="about section" id="about">
      <div className="container">
        <Reveal duration={0.8}>
          <div className="about-card">
            <h1 className="about-title">
              About <span className="text">Me</span>
            </h1>

            <h4 className="about-role">Full Stack Developer</h4>

            {/* Interactive Tabs */}
            <div className="about-tabs">
              <button
                className={`tab-btn ${activeTab === "about" ? "active" : ""}`}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>
              <button
                className={`tab-btn ${activeTab === "info" ? "active" : ""}`}
                onClick={() => setActiveTab("info")}
              >
                Quick Info
              </button>
            </div>

            {/* Tab Contents */}
            <div className="tab-content">
              {activeTab === "about" && (
                <p className="about-desc">
                  I’m Vrushabh Digraje, a frontend developer passionate about building responsive, 
                  user-friendly web interfaces. I enjoy turning ideas into interactive experiences 
                  using clean, efficient code and modern frontend technologies.
                  <br /><br />
                  I focus on creating smooth user experiences with attention to design, performance, 
                  and accessibility. I’m always eager to learn new tools and improve my skills to 
                  build better, more engaging web applications.
                </p>
              )}


              {activeTab === "info" && (
                <div className="info-grid">
                  <div className="info-grid-item">
                    <span>Name</span>
                    <span>Vrushabh Digraje</span>
                  </div>
                  <div className="info-grid-item">
                    <span>Email</span>
                    <span>vrushabhdigraje07@gmail.com</span>
                  </div>
                  <div className="info-grid-item">
                    <span>Location</span>
                    <span>Pune, Maharashtra, IN</span>
                  </div>
                  <div className="info-grid-item">
                    <span>Status</span>
                    <span>Available for Opportunities</span>
                  </div>
                </div>
              )}
            </div>

            {/* Stats Counter Section */}
            <div className="about-stats">
              <div className="stat-box">
                <span className="stat-num">{PROJECTS_DATA.length}+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">1+</span>
                <span className="stat-label">Year Learning</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">500+</span>
                <span className="stat-label">Hours Coding</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">100%</span>
                <span className="stat-label">Responsive layout</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
