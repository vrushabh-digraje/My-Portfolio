import { useState } from "react";
import { FaLaptopCode, FaCode, FaServer, FaAngular, FaTimes, FaExternalLinkAlt, FaJava } from "react-icons/fa";
import Reveal from "./Reveal";

function Certificates() {
  const [previewLink, setPreviewLink] = useState(null);
  const [previewTitle, setPreviewTitle] = useState("");

  const certificates = [
    {
      icon: <FaJava />,
      title: "Java Full Stack Development with AI",
      link: "/Java_Full_Stack_Development_with_AI.pdf",
    },
    {
      icon: <FaServer />,
      title: "Full Stack Web Development",
      link: "/Full_Stack_Web_Development.pdf",
    },
    {
      icon: <FaLaptopCode />,
      title: "Internship Program",
      link: "/internship_certificate.pdf",
    },
    {
      icon: <FaAngular />,
      title: "Angular",
      link: "/Angular.pdf",
    },
    {
      icon: <FaCode />,
      title: "C++ Programming",
      link: "/C++.pdf",
    },
  ];

  const handleOpenPreview = (link, title) => {
    setPreviewLink(link);
    setPreviewTitle(title);
  };

  return (
    <section className="certificates section" id="certificates">
      <div className="container">
        <Reveal>
          <h1 className="main-text">
            My <span className="text">Certificates</span>
          </h1>
          <p className="cert-subtitle">“My certification journey so far”</p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="cert-grid">
            {certificates.map((cert, index) => (
              <div className="cert-card" key={index}>
                <div className="cert-icon">{cert.icon}</div>
                <h3 className="cert-title">{cert.title}</h3>

                <button
                  onClick={() => handleOpenPreview(cert.link, cert.title)}
                  className="cert-btn"
                  style={{ border: "none", width: "100%", justifyContent: "center" }}
                >
                  View Certificate <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* PDF Certificate Viewer Modal */}
      {previewLink && (
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
            onClick={() => setPreviewLink(null)}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(3, 10, 20, 0.85)",
              backdropFilter: "blur(8px)",
              cursor: "pointer",
            }}
          />

          {/* Modal Content container */}
          <div style={{
            position: "relative",
            background: "var(--bg-darker, #0d0d0d)",
            border: "1px solid var(--border-color, rgba(56, 189, 248, 0.1))",
            borderRadius: "16px",
            maxWidth: "900px",
            width: "100%",
            height: "85vh",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px var(--accent-glow-subtle, rgba(56, 189, 248, 0.08))",
            zIndex: 1001,
            overflow: "hidden",
            animation: "modalZoom 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
          }}>
            {/* Header */}
            <div style={{
              background: "rgba(255, 255, 255, 0.03)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              padding: "15px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <h3 style={{ fontSize: "1.8rem", color: "#fff", fontWeight: "600" }}>{previewTitle}</h3>
              <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                <a 
                  href={previewLink} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{
                    color: "var(--accent-color, #38bdf8)",
                    fontSize: "14px",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                  title="Open in new tab"
                >
                  <FaExternalLinkAlt /> Open Tab
                </a>
                <button 
                  onClick={() => setPreviewLink(null)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Document Frame */}
            <div style={{ flexGrow: 1, background: "#fff" }}>
              <iframe 
                src={previewLink} 
                title={previewTitle}
                width="100%" 
                height="100%"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
