import {FaLaptopCode, FaCode, FaServer, FaAngular } from "react-icons/fa";

function Certificates() {
  const certificates = [
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

  return (
    <section className="certificates section" id="certificates">
      <div className="container">
        <h1 className="main-text">
          My <span className="text">Certificates</span>
        </h1>
        <p className="cert-subtitle">
            “My certification journey so far”
        </p>


        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-icon">{cert.icon}</div>
              <h3 className="cert-title">{cert.title}</h3>

              <a
                href={cert.link}
                className="cert-btn"
                target="_blank"
                rel="noreferrer"
              >
                View <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
