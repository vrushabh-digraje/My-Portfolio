import finance from "../assets/images/project-finance.jpg";
import bitcoin from "../assets/images/project-bitcoin.jpg";
import royalestate from "../assets/images/royal-estate.png";
import adminpanal from "../assets/images/image.png"

function Projects() {
  const projects = [
    {
      img: finance,
      title: "Personal Finance Manager",
      desc: "A responsive MERN stack application that helps users track income and expenses, categorize transactions, and visualize financial trends using interactive charts.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      live: "https://personal-finance-manager-frontend-7s0g.onrender.com",
      code: "https://github.com/vrushabh-digraje/Personal-Finance-Manager",
    },
    {
      img: bitcoin,
      title: "Bitcoin Tracker",
      desc: "A simple and responsive website that shows real-time Bitcoin price updates and basic market information with a clean, user-friendly interface.",
      tags: ["React","JavaScript","Bootstrap","HTML","CSS"],
      live: "https://bitcoin01.netlify.app/",
      code: "https://github.com/vrushabh-digraje/Food-Waste-Management-Project",
    },
    {
      img: royalestate,
      title: "Royal Estate",
      desc: "A responsive real estate website that allows users to search properties, view listings, and navigate smoothly using React Router, with a clean and modern UI built using Bootstrap.",
      tags: ["React","React Router","JavaScript","Bootstrap","HTML","CSS"],
      live: "https://royalestate01.netlify.app/",
      code: "https://github.com/vrushabh-digraje/Royal_EState",
    },
    {
      img: adminpanal,
      title: "Admin Panel",
      desc: "Developed a responsive admin dashboard web application featuring user interface components like navigation, forms, tables, and data sections. Built with React Router for smooth page navigation and Bootstrap for a clean, modern, and mobile-friendly UI, enabling easy management of application data.",
      tags: ["React","React Router","JavaScript","Bootstrap","HTML","CSS"],
      live: "https://admin-panal01.netlify.app/",
      code: "https://github.com/vrushabh-digraje/Admin-Panel",
    }
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h1 className="main-text">
          Latest <span className="text">Projects</span>
        </h1>
        <p className="projects-subtitle"> “From learning to building — my project journey so far” </p>


        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-image">
                <img src={p.img} alt={p.title} />
              </div>

              <div className="project-content">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-description">{p.desc}</p>

                <div className="project-tags">
                  {p.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a href={p.live} className="btn live" target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={p.code} className="btn code" target="_blank" rel="noreferrer">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
