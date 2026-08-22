import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/images/profile-pic.JPG";

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
    { label: "Certificates", href: "#certificates", id: "certificates" },
    { label: "Contact", href: "#contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }

      // Scrollspy active section
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 180; // adjusted threshold for timeline offsets

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isShrunk ? "shrunk" : ""}`}>
      {/* Sidebar Profile Widget (Hidden on mobile) */}
      <div className="sidebar-profile">
        <img src={profilePic} alt="Vrushabh Digraje" />
        <h3>Vrushabh Digraje</h3>
        <p>Full Stack Developer</p>
      </div>

      <a href="#home" className="logo logo-mobile">Vrushabh Digraje</a>
      
      {/* Mobile Hamburger Trigger */}
      <button 
        className="hamburger-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none", 
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

      {/* Sidebar Footer Widget (Hidden on mobile) */}
      <div className="navbar-footer">
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btns">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btns">
            <FaLinkedin />
          </a>
          <a href="mailto:contact@example.com" className="social-btns">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </nav>
  );
}
