import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import Reveal from "./Reveal";

function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "AiDamsole Agile Services Pvt. Ltd",
      duration: "Jul 2026 – Present",
      location: "Pune, India",
      details: [
        "Collaborating within an Agile team to develop and scale functional web application modules using React.js, Next.js, Node.js, Express.js, and MongoDB.",
        "Integrating secure and robust RESTful APIs to facilitate seamless data communication between the frontend and backend layers.",
        "Adhering to secure coding and data-handling practices while actively resolving complex implementation issues."
      ],
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Agile"]
    },
    {
      role: "Java FullStack Intern",
      company: "Envision Computer Training Institute, Pune",
      duration: "Jan 2026 – Jun 2026",
      location: "Pune, India",
      details: [
        "Trained in full-stack Java development, specializing in Core Java, Servlets, JDBC, Hibernate, and Spring Boot through hands-on project development.",
        "Designed and implemented REST APIs, integrating them with frontend interfaces to deliver cohesive end-to-end features.",
        "Architected relational database schemas using MySQL while applying core OOP and MVC design principles to real-world coding challenges."
      ],
      skills: ["Core Java", "Spring Boot", "Hibernate", "MySQL", "REST APIs", "MVC"]
    },
    {
      role: "MERN Stack Intern",
      company: "EY Global Delivery Services (EY GDS)",
      duration: "Feb 2025 – Mar 2025",
      location: "Remote",
      details: [
        "Worked with the MERN stack (MongoDB, Express.js, React.js, Node.js) to develop end-to-end web applications.",
        "Designed and implemented responsive user interfaces and integrated them with backend services.",
        "Developed and consumed RESTful APIs to enable seamless data flow between frontend and backend.",
        "Contributed to code optimization, debugging, and performance improvements in collaborative team environments."
      ],
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Team Collaboration"]
    }
  ];

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <Reveal>
          <h1 className="main-text" style={{ textAlign: "center", marginBottom: "4rem" }}>
            Work <span className="text">Experience</span>
          </h1>
        </Reveal>

        <div className="experience-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="timeline-wrap timeline-alternate">
            {experiences.map((exp, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="timeline-card">
                  <div className="timeline-date">{exp.duration}</div>
                  <h3 className="timeline-title">{exp.role}</h3>
                  <span className="timeline-org" style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "var(--accent-color)" }}>
                    <FaBriefcase /> {exp.company}
                  </span>
                  <span className="timeline-subtitle" style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "1.4rem", margin: "0.5rem 0 1.5rem" }}>
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                  
                  <ul className="experience-details" style={{ paddingLeft: "2rem", marginBottom: "2rem", listStyleType: "disc" }}>
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="timeline-desc" style={{ marginBottom: "0.8rem" }}>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="experience-tags" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1.5rem" }}>
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="timeline-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
