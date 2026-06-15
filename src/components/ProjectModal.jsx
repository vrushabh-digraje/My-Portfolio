import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 1000,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    }}>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(3, 10, 20, 0.8)",
          backdropFilter: "blur(8px)",
          cursor: "pointer",
        }}
      />

      {/* Modal Container */}
      <div style={{
        position: "relative",
        background: "linear-gradient(135deg, var(--bg-dark, #050505) 0%, var(--bg-darker, #0d0d0d) 100%)",
        border: "1px solid var(--border-color, rgba(56, 189, 248, 0.1))",
        borderRadius: "20px",
        maxWidth: "800px",
        width: "100%",
        maxHeight: "90vh",
        overflowY: "auto",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px var(--accent-glow-subtle, rgba(56, 189, 248, 0.08))",
        zIndex: 1001,
        animation: "modalZoom 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      }} className="project-modal">
        {/* Browser Header Mockup */}
        <div style={{
          background: "rgba(255, 255, 255, 0.03)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56", display: "inline-block" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f", display: "inline-block" }} />
          </div>
          <span style={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.4)",
            fontFamily: "monospace",
          }}>project_spotlight.sh</span>
          <button 
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => e.target.style.color = "var(--accent-color, #38bdf8)"}
            onMouseLeave={(e) => e.target.style.color = "#fff"}
          >
            <FaTimes />
          </button>
        </div>

        {/* Modal Image */}
        <div style={{
          position: "relative",
          width: "100%",
          height: "300px",
          overflow: "hidden",
        }}>
          <img 
            src={project.img} 
            alt={project.title} 
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "50%",
            background: "linear-gradient(to top, var(--bg-dark, #050505), transparent)",
          }} />
        </div>

        {/* Modal Content */}
        <div style={{ padding: "30px 40px" }} className="modal-inner">
          <h2 style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#fff",
            marginBottom: "15px",
          }}>{project.title}</h2>

          {/* Tags */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "20px",
          }}>
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                style={{
                  background: "var(--accent-glow-subtle, rgba(56, 189, 248, 0.08))",
                  border: "1px solid var(--border-color, rgba(56, 189, 248, 0.15))",
                  color: "var(--accent-color, #38bdf8)",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: "500",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p style={{
            fontSize: "16px",
            lineHeight: "1.7",
            color: "rgba(255, 255, 255, 0.75)",
            marginBottom: "30px",
          }}>
            {project.longDesc || project.desc}
          </p>

          {/* Features mock */}
          <h4 style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#fff",
            marginBottom: "12px",
          }}>Key Highlights:</h4>
          
          <ul style={{
            paddingLeft: "20px",
            color: "rgba(255, 255, 255, 0.75)",
            fontSize: "15px",
            lineHeight: "1.8",
            marginBottom: "35px",
          }}>
            {(project.highlights || [
              "Designed with fully responsive structures across mobile, tablet, and desktop layouts.",
              "Optimized performance and load times for a smoother user experience.",
              "Configured using clean code architecture and standard modular patterns."
            ]).map((hl, idx) => (
              <li key={idx} style={{ marginBottom: "8px" }}>{hl}</li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div style={{
            display: "flex",
            gap: "20px",
          }} className="modal-buttons">
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  background: "var(--accent-color, #38bdf8)",
                  color: "var(--bg-dark, #050505)",
                  padding: "12px 28px",
                  borderRadius: "30px",
                  fontSize: "15px",
                  fontWeight: "600",
                  boxShadow: "0 0 15px var(--accent-glow, rgba(56, 189, 248, 0.25))",
                  transition: "all 0.3s ease",
                }}
                className="modal-action-btn"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            <a 
              href={project.code} 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: "30px",
                fontSize: "15px",
                fontWeight: "600",
                transition: "all 0.3s ease",
              }}
              className="modal-action-btn border-hover"
            >
              <FaGithub /> View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
