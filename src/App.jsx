import { useEffect, useState } from "react";
import { FaArrowUp, FaBriefcase, FaCode, FaTasks, FaDownload } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseSpotlight from "./components/MouseSpotlight";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle button visibility
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Calculate scroll progress percentage
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        const percentage = (window.scrollY / totalScrollHeight) * 100;
        setScrollProgress(percentage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 113 is the stroke-dasharray value for r=18 (2 * Math.PI * 18 = 113.1)
  const strokeOffset = 113 - (scrollProgress / 100) * 113;

  return (
    <>
      {/* Dynamic Cursor Light Spot */}
      <MouseSpotlight />

      {/* Main Sections */}
      <div className="portfolio-sidebar-layout">
        <Navbar />
        <main className="portfolio-main-content bento-mode">
          <div className="bento-section-card" id="home">
            <Home />
          </div>
          
          {/* Row 2: About Me and Stats dashboard */}
          <div className="bento-dashboard-row" id="about">
            <div className="bento-about-col bento-section-card">
              <About />
            </div>
            <div className="bento-stats-col">
              <div className="stats-card">
                <div>
                  <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "#fff", marginBottom: "3rem", fontFamily: "'Outfit', sans-serif" }}>Quick Stats</h2>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <FaBriefcase style={{ color: "var(--accent-color)", fontSize: "2.4rem", marginBottom: "1rem" }} />
                      <div className="stat-number">2+</div>
                      <div className="stat-label">Internships</div>
                    </div>
                    <div className="stat-item">
                      <FaCode style={{ color: "var(--accent-color)", fontSize: "2.4rem", marginBottom: "1rem" }} />
                      <div className="stat-number">10+</div>
                      <div className="stat-label">Languages</div>
                    </div>
                    <div className="stat-item">
                      <FaTasks style={{ color: "var(--accent-color)", fontSize: "2.4rem", marginBottom: "1rem" }} />
                      <div className="stat-number">15+</div>
                      <div className="stat-label">Projects</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number" style={{ fontSize: "2.6rem", marginTop: "1rem", color: "var(--accent-color-secondary)" }}>100%</div>
                      <div className="stat-label" style={{ marginTop: "1rem" }}>Responsive</div>
                    </div>
                  </div>
                </div>
                <a href="#contact" className="stats-download-btn">
                  <FaDownload /> Get In Touch
                </a>
              </div>
            </div>
          </div>

          <div className="bento-section-card" id="skills">
            <Skills />
          </div>
          <div className="bento-section-card" id="experience">
            <Experience />
          </div>
          <div className="bento-section-card" id="projects">
            <Projects />
          </div>
          <div className="bento-section-card" id="certificates">
            <Certificates />
          </div>
          <div className="bento-section-card" id="contact">
            <Contact />
          </div>
          <Footer />
        </main>
      </div>

      {/* Scroll to Top progress widget */}
      <div 
        className={`scroll-progress-widget ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
        title="Scroll to Top"
      >
        <svg width="40" height="40">
          <circle className="bg-circle" cx="20" cy="20" r="18" />
          <circle 
            className="progress-circle" 
            cx="20" 
            cy="20" 
            r="18" 
            style={{ strokeDashoffset: strokeOffset }}
          />
        </svg>
        <FaArrowUp className="arrow-icon" />
      </div>
    </>
  );
}

export default App;
