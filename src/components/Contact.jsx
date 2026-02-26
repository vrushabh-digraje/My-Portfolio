import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container contact">

        {/* LEFT SIDE */}
        <div className="contact-text">
          <h1>
            Contact <span className="text">Me</span>
          </h1>

          <h4>Let's work Together</h4>

          <p>
            I'm always open to discussing new opportunities, collaborations, or
            sharing ideas.
          </p>

          <ul className="contact-list">
            <li>
              <MdEmail className="icon" />
              <a href="mailto:vrushabhdigraje07@gmail.com">
                vrushabhdigraje07@gmail.com
              </a>
            </li>

            <li>
              <MdPhone className="icon" />
              <a href="tel:+919767747360">+91 9767747360</a>
            </li>

            <li>
              <MdLocationOn className="icon" />
              <span>Pune</span>
            </li>
          </ul>

          {/* SOCIAL ICONS */}
         <div className="social-icons">
            <a
              href="https://github.com/vrushabh-digraje"
              className="social-btns"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/vrushabh-digraje-408566260/"
              className="social-btns"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/919767747360"
              className="social-btns"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>

        </div>

        {/* RIGHT SIDE */}
       <div className="contact-form">
  <form
    action="https://formspree.io/f/xzdrqdkn"
    method="POST"
  >
    <input
      type="text"
      name="name"
      placeholder="Enter Your Name"
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Enter Your Email"
      required
    />

    <input
      type="text"
      name="subject"
      placeholder="Enter Your Subject"
    />

    <textarea
      name="message"
      placeholder="Enter Your Message"
      required
    ></textarea>

    {/* Anti-spam honeypot */}
    <input
      type="text"
      name="_gotcha"
      style={{ display: "none" }}
    />

    <button type="submit" className="send">
      Submit
    </button>
  </form>
</div>


      </div>
    </section>
  );
}

export default Contact;
