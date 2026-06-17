import { useState } from "react";
import finance from "../assets/images/project-finance.jpg";
import bitcoin from "../assets/images/project-bitcoin.jpg";
import royalestate from "../assets/images/royal-estate.png";
import adminpanal from "../assets/images/image.png";
import carrental from "../assets/images/project-carrental.png";
import pearldent from "../assets/images/project-pearldent.png";
import swiftmove from "../assets/images/project-swiftmove.png";
import hirepilot from "../assets/images/project-hirepilot.png";
import aetheria from "../assets/images/project-aetheria.png";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

export const PROJECTS_DATA = [
  {
    img: carrental,
    title: "EliteCars - Premium Car Rental",
    desc: "A Java Web application featuring a luxury dark-theme UI, comprehensive database model (Cars, Users, Bookings, Payments), dynamic search, and admin control panels.",
    longDesc: "EliteCars is a high-end car rental platform built with Java Servlets, JDBC, and MySQL. It features a stunning glassmorphic obsidian dashboard, complete session-based user authentication, interactive vehicle catalog browsing, and reservation checkout with dynamic pricing calculation. Admin roles can manage inventory, view booking history, and monitor payment stats via specialized Servlet-driven dashboards.",
    highlights: [
      "Custom session management with secure user registration and login.",
      "Dynamic database design mapping relationships between Cars, Users, Bookings, and Payments.",
      "Comprehensive administration panel to add, edit, and archive rental vehicles.",
      "Sleek glassmorphic dark-theme UI with responsive layouts built on Bootstrap and customized CSS."
    ],
    tags: ["Java Servlet", "JDBC", "MySQL", "Bootstrap", "JavaScript"],
    live: "https://elitecars-f3ol.onrender.com/",
    code: "https://github.com/vrushabh-digraje/EliteCars",
    category: "Full Stack",
  },
  {
    img: finance,
    title: "Personal Finance Manager",
    desc: "A responsive MERN stack application that helps users track income and expenses, categorize transactions, and visualize financial trends.",
    longDesc: "A complete MERN stack application designed for personal wealth management. Users can securely register, authenticate, and log transactions. Features dynamic categorization, financial summaries, and interactive chart panels that detail expense distributions over time.",
    highlights: [
      "User authentication using secure JSON Web Tokens (JWT).",
      "Dynamic data visualizations using Chart.js graphs.",
      "Robust REST API built with Node.js and Express.",
      "Comprehensive database schemas in MongoDB for transactions and budgets."
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    live: "https://personal-finance-manager-frontend-7s0g.onrender.com",
    code: "https://github.com/vrushabh-digraje/Personal-Finance-Manager",
    category: "Full Stack",
  },
  {
    img: pearldent,
    title: "PearlDent - Premium Dental Care",
    desc: "A highly responsive React application for a premium dental clinic featuring user routing, service catalogs, team profiles, and online appointment booking.",
    longDesc: "PearlDent is a sophisticated, premium web portal built for a top-tier dental clinic in Mumbai. Features a clean, relaxing aesthetic with fluid page routing using React Router. It includes interactive service descriptions, specialist profiles, clinical highlights, and a client-side appointment scheduler with real-time feedback loops.",
    highlights: [
      "Fully responsive single-page application built on Vite and React.",
      "Clean, modern UI designed with semantic HTML and modern CSS flexbox/grids.",
      "Dynamic routing and scroll-restoration handling across multiple pages.",
      "Interactive multi-step appointment booking interface with instant verification."
    ],
    tags: ["React", "React Router", "Lucide React", "HTML", "CSS"],
    live: "https://pearldent.netlify.app",
    code: "https://github.com/vrushabh-digraje/PearlDent",
    category: "React",
  },
  {
    img: swiftmove,
    title: "SwiftMove - Relocation Services",
    desc: "A premium responsive web application for professional relocation and moving services, featuring dynamic quote forms, services breakdown, and interactive FAQs.",
    longDesc: "SwiftMove is a modern relocation and moving services landing page designed to streamline customer onboarding. The application details local, long-distance, and commercial logistics, offering custom pricing calculators, schedule booking routes, and customer testimonial sliders. Styled with a cohesive sapphire blue theme, matching the rest of the professional portfolio design system.",
    highlights: [
      "Fully responsive layout built with HTML5, CSS3, and JavaScript, optimized for fast rendering.",
      "Clean visual hierarchy with custom micro-animations and smooth transition effects.",
      "Interactive moving-services pricing cards and booking forms for free online estimates.",
      "Clean BEM-compliant styling with custom layouts that adapt dynamically to any viewport."
    ],
    tags: ["React", "Redux", "JavaScript", "Bootstrap", "HTML", "CSS"],
    live: "https://swiftmove-colorlib.pages.dev",
    code: "https://github.com/vrushabh-digraje/SwiftMove",
    category: "React",
  },
  {
    img: hirepilot,
    title: "HirePilot - Recruitment Command Centre",
    desc: "A comprehensive recruitment dashboard and Applicant Tracking System (ATS) integrated with Supabase, featuring kanban candidate pipelines, auto-segregated talent clusters, and revenue charts.",
    longDesc: "HirePilot is a high-performance Applicant Tracking System (ATS) and recruitment management center built with React and Supabase. It features an interactive recruitment dashboard tracking open positions, KPI metrics, monthly revenue stats, and referral funnels. Includes an auto-segregation talent clustering engine to group candidates by domains (IT, Healthcare, Finance, Trade) and a smart matching system connecting candidates to jobs.",
    highlights: [
      "Full-featured candidate kanban board supporting drag-and-drop recruitment stages.",
      "Integrated Supabase backend for real-time database management and query handling.",
      "KPI tracking metrics with revenue charts, pipeline funnels, and live alerts.",
      "Smart candidate-to-job matching algorithm alongside auto-clustering by domains."
    ],
    tags: ["React", "Supabase", "Chart.js", "JavaScript", "HTML5", "CSS3"],
    live: "https://hirepilot.netlify.app",
    code: "https://github.com/vrushabh-digraje/HirePilot",
    category: "Full Stack",
  },
  {
    img: aetheria,
    title: "Aetheria - Creative Digital Agency",
    desc: "A premium multidisciplinary digital agency website featuring high-end GSAP scroll animations, smooth Lenis scrolling, Barba.js page transitions, and interactive design layouts.",
    longDesc: "Aetheria is an immersive, website showcasing digital advertising and creative services (Google Ads, Meta Ads, SEO, UI/UX). It implements cutting-edge frontend techniques, including GSAP ScrollTrigger timeline animations, Barba.js for fluid single-page transitions, Lenis for smooth momentum scrolling, and custom canvas noise overlays for premium grain styling.",
    highlights: [
      "Smooth momentum scrolling powered by Lenis and custom page transitions via Barba.js.",
      "Immersive scroll-linked animations and UI/UX animations using GSAP and ScrollTrigger.",
      "Custom grained beige styling and dark modes structured with modular CSS variables.",
      "Highly responsive layouts and custom HTMX data fetching integrations."
    ],
    tags: ["React", "GSAP", "Lenis Scroll", "Barba.js", "JavaScript", "CSS3"],
    live: "https://aetheria.netlify.app",
    code: "https://github.com/vrushabh-digraje/Aetheria",
    category: "React",
  },
  {
    img: bitcoin,
    title: "Bitcoin Tracker",
    desc: "A responsive website that shows real-time Bitcoin price updates and basic market information with a clean, user-friendly interface.",
    longDesc: "A cryptocurrency tracking portal that reads real-time Bitcoin prices and trading data. Uses public finance APIs to deliver 24-hour histories, market capitalization, high/low points, and volume graphs in a clean, glassmorphic layout.",
    highlights: [
      "Live API integration with CoinGecko for instant pricing data.",
      "Modern dark theme styled with custom CSS glassmorphism components.",
      "Fully responsive grids powered by Bootstrap, catering to all screen sizes."
    ],
    tags: ["React", "JavaScript", "Bootstrap", "HTML", "CSS"],
    live: "https://bitcoin01.netlify.app/",
    code: "https://github.com/vrushabh-digraje/Food-Waste-Management-Project",
    category: "React",
  },
  {
    img: royalestate,
    title: "Royal Estate",
    desc: "A responsive real estate website that allows users to search properties, view listings, and navigate smoothly using React Router.",
    longDesc: "A modern real estate portal enabling users to explore house and apartment listings. Offers search capabilities, sorting, filterable price ranges, and detailed property descriptions, with a fluid client-side single-page router.",
    highlights: [
      "Seamless multi-page feel using React Router declarative routes.",
      "Interactive property search bar with price and location filtering.",
      "Clean UI component design utilizing customized Bootstrap styles."
    ],
    tags: ["React", "React Router", "JavaScript", "Bootstrap", "HTML", "CSS"],
    live: "https://royalestate01.netlify.app/",
    code: "https://github.com/vrushabh-digraje/Royal_EState",
    category: "React",
  },
  {
    img: adminpanal,
    title: "Admin Panel",
    desc: "Developed a responsive admin dashboard web application featuring user interface components like navigation, forms, tables, and data sections.",
    longDesc: "A comprehensive backend-management console layout. Equips administrators with widgets to track active sessions, audit logs, manage user roles, fill configuration forms with validation, and view spreadsheet-style layout tables with full sorting and searching features.",
    highlights: [
      "Modular components for navigation drawers, cards, and admin tables.",
      "Dynamic tables featuring sorting, search filters, and record count.",
      "Fully responsive sidebar layout shrinking down onto mobile screens."
    ],
    tags: ["React", "React Router", "JavaScript", "Bootstrap", "HTML", "CSS"],
    live: "https://admin-panal01.netlify.app/",
    code: "https://github.com/vrushabh-digraje/Admin-Panel",
    category: "React",
  }
];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = PROJECTS_DATA.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <Reveal>
          <h1 className="main-text">
            Latest <span className="text">Projects</span>
          </h1>
          <p className="projects-subtitle">“From learning to building — my project journey so far”</p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.1}>
          <div className="project-filters">
            {["All", "React", "Full Stack"].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <Reveal delay={0.2}>
          <div className="projects-grid">
            {filteredProjects.map((p, i) => (
              <Tilt key={p.title} max={10} scale={1.02} speed={400}>
                <div 
                  className="project-card" 
                  onClick={() => setSelectedProject(p)}
                >
                  <div className="project-image">
                    <div className="project-browser-bar">
                      <div className="browser-dots">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                      </div>
                    </div>
                    <img src={p.img} alt={p.title} />
                    <div className="project-overlay">
                      <span>View Details</span>
                    </div>
                  </div>

                  <div className="project-content">
                    <div>
                      <h3 className="project-title">{p.title}</h3>
                      <p className="project-description">{p.desc}</p>
                    </div>

                    <div>
                      <div className="project-tags">
                        {p.tags.map((tag, index) => (
                          <span key={index}>{tag}</span>
                        ))}
                      </div>

                      <div className="project-buttons" onClick={(e) => e.stopPropagation()}>
                        {p.live && (
                          <a href={p.live} className="btn live" target="_blank" rel="noreferrer">
                            Live Demo
                          </a>
                        )}
                        <a href={p.code} className="btn code" target="_blank" rel="noreferrer">
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Immersive Project Modal Details */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}

export default Projects;
