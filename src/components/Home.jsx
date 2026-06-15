import profile from "../assets/images/profile-pic.JPG";
import { useEffect, useRef } from "react";
import Tilt from "./Tilt";

function Home() {
  const typingRef = useRef(null);

  useEffect(() => {
    const el = typingRef.current;
    if (!el) return;

    const words = [
      "Frontend Developer",
      "React Developer",
      "Full Stack Developer"
    ];
    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const currentWord = words[wordIdx];
      if (!isDeleting) {
        el.textContent = currentWord.substring(0, charIdx++);
        if (charIdx > currentWord.length) {
          isDeleting = true;
          timeoutId = setTimeout(type, 1800); // Wait at full word
          return;
        }
      } else {
        el.textContent = currentWord.substring(0, charIdx--);
        if (charIdx < 0) {
          isDeleting = false;
          wordIdx = (wordIdx + 1) % words.length;
          timeoutId = setTimeout(type, 300); // Wait before next word
          return;
        }
      }
      timeoutId = setTimeout(type, isDeleting ? 60 : 100);
    };

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="home section" id="home">
      <div className="container home-inner">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Vrushabh Digraje</h1>

          <h3>
            And I'm a{" "}
            <span ref={typingRef} className="text typing"></span>
          </h3>

          <p>
            A Frontend Developer passionate about building responsive,
            user-friendly interfaces. I focus on clean design, smooth user
            experiences, and turning ideas into interactive, real-world
            solutions.
          </p>

          <div className="social-links">
            <a
              href="https://github.com/vrushabh-digraje"
              target="_blank"
              rel="noreferrer"
              className="social-btns"
              aria-label="GitHub"
            >
              <i className="bx bxl-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/vrushabh-digraje-408566260/"
              target="_blank"
              rel="noreferrer"
              className="social-btns"
              aria-label="LinkedIn"
            >
              <i className="bx bxl-linkedin"></i>
            </a>

            <a
              href="https://wa.me/919767747360"
              target="_blank"
              rel="noreferrer"
              className="social-btns"
              aria-label="WhatsApp"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>

          <a href="/Vrushabh_Digraje_Computer.pdf" target="_blank" rel="noopener noreferrer" className="btn-box">
            Get Resume
          </a>
        </div>

        <div className="home-img">
          <Tilt max={15} scale={1.03} speed={500}>
            <img src={profile} alt="profile" className="profile-pic" />
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default Home;
