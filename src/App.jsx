import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
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
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />

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
