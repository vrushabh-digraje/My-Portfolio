import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isShrunk, setIsShrunk] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Shrunk Navbar state
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }

      // 2. Scrollspy active section
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120; // offset for navbar height + threshold

      for (let i = 0; i < sections.length; i++) {
        const sectionEl = sections[i];
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          const height = sectionEl.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isShrunk ? "shrunk" : ""}`}>
      <a href="#home" className="logo">Vrushabh Digraje</a>
      
      {/* Mobile Hamburger Trigger */}
      <button 
        className="hamburger-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none", // Will be toggled in media-queries/css
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "2.4rem",
          cursor: "pointer",
          zIndex: 101,
          outline: "none",
          transition: "color 0.3s ease",
        }}
      >
        {menuOpen ? <FaTimes style={{ color: "var(--accent-color)" }} /> : <FaBars />}
      </button>

      {/* Nav Menu Links */}
      <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a 
              href={link.href}
              className={activeSection === link.id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
