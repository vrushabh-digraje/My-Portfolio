import profile from "../assets/images/profile-pic.JPG";
import { useEffect, useRef } from "react";

function Home() {
  const typingRef = useRef(null);

  useEffect(() => {
    const el = typingRef.current;
    if (!el) return;

    const text = "Frontend Developer";
    let index = 0;
    let timeoutId;

    el.textContent = "";

    const type = () => {
      if (index < text.length) {
        el.textContent += text[index];
        index++;
        timeoutId = setTimeout(type, 120);
      } else {
        timeoutId = setTimeout(() => {
          el.textContent = "";
          index = 0;
          type();
        }, 400);
      }
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
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noreferrer"
                className="social-btns"
                aria-label="GitHub"
              >
              <i className="bx bxl-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/your-linkedin-id/"
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


          <a href="/Vrushabh_Digraje_Computer.pdf"  target="_blank" rel="noopener noreferrer"  className="btn-box">Get Resume</a>
        </div>

        <div className="home-img">
          <img src={profile} alt="profile" className="profile-pic" />
        </div>
      </div>
    </section>
  );
}

export default Home;
