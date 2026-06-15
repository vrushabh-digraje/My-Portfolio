import { useState, useEffect } from "react";
import { FaPalette, FaCheck, FaTimes } from "react-icons/fa";

const ACCENTS = [
  { name: "Cyan", color: "#00f5d4", glow: "rgba(0, 245, 212, 0.4)" },
  { name: "Purple", color: "#9b5de5", glow: "rgba(155, 93, 229, 0.4)" },
  { name: "Blue", color: "#3a86ff", glow: "rgba(58, 134, 255, 0.4)" },
  { name: "Pink", color: "#ff007f", glow: "rgba(255, 0, 127, 0.4)" },
  { name: "Orange", color: "#ff9f1c", glow: "rgba(255, 159, 28, 0.4)" }
];

export default function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState("#00f5d4");

  useEffect(() => {
    // Load from localstorage or default to cyan
    const savedColor = localStorage.getItem("portfolio-accent");
    if (savedColor) {
      applyTheme(savedColor);
    } else {
      applyTheme("#00f5d4");
    }
  }, []);

  const applyTheme = (color) => {
    setActiveColor(color);
    document.documentElement.style.setProperty("--accent-color", color);
    
    // Find matching glow
    const match = ACCENTS.find(acc => acc.color === color) || ACCENTS[0];
    document.documentElement.style.setProperty("--accent-glow", match.glow);
    localStorage.setItem("portfolio-accent", color);
  };

  return (
    <div className={`theme-customizer ${isOpen ? "open" : ""}`} style={{
      position: "fixed",
      top: "120px",
      right: isOpen ? "0" : "-200px",
      width: "200px",
      background: "rgba(10, 25, 47, 0.85)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(0, 245, 212, 0.15)",
      borderRight: "none",
      borderTopLeftRadius: "16px",
      borderBottomLeftRadius: "16px",
      padding: "20px 15px",
      zIndex: 999,
      transition: "right 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    }}>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "absolute",
          left: "-45px",
          top: "0",
          width: "45px",
          height: "45px",
          background: "rgba(10, 25, 47, 0.85)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(0, 245, 212, 0.15)",
          borderRight: "none",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          color: "var(--accent-color, #00f5d4)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "18px",
          cursor: "pointer",
          boxShadow: "-5px 5px 15px rgba(0,0,0,0.3)",
          outline: "none",
          transition: "color 0.3s ease",
        }}
        aria-label="Customize Theme"
      >
        {isOpen ? <FaTimes /> : <FaPalette className="spin-slow" />}
      </button>

      <h4 style={{
        margin: "0 0 15px",
        fontSize: "14px",
        fontWeight: "600",
        color: "#fff",
        textAlign: "center",
        letterSpacing: "1px",
        textTransform: "uppercase",
      }}>Accent Color</h4>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        justifyItems: "center",
      }}>
        {ACCENTS.map((accent) => (
          <button
            key={accent.name}
            onClick={() => applyTheme(accent.color)}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: accent.color,
              border: "2px solid " + (activeColor === accent.color ? "#fff" : "transparent"),
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: `0 0 10px ${accent.color}33`,
              outline: "none",
              transition: "transform 0.2s ease, border-color 0.2s ease",
            }}
            title={accent.name}
          >
            {activeColor === accent.color && (
              <FaCheck style={{
                color: "#081b29",
                fontSize: "12px",
              }} />
            )}
          </button>
        ))}
      </div>
      
      <p style={{
        marginTop: "18px",
        fontSize: "10px",
        color: "rgba(255,255,255,0.4)",
        textAlign: "center",
        lineHeight: "1.3",
      }}>Choose your preferred vibe</p>
    </div>
  );
}
