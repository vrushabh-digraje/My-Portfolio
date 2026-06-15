import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { FaCheckCircle } from "react-icons/fa";
import Reveal from "./Reveal";

function Contact() {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: null });

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        setFormStatus({ submitting: false, success: true, error: null });
        form.reset();
        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        const data = await response.json();
        const errorMsg = data.errors 
          ? data.errors.map(err => err.message).join(", ") 
          : "There was a problem submitting your message.";
        setFormStatus({ submitting: false, success: false, error: errorMsg });
      }
    } catch (err) {
      setFormStatus({
        submitting: false,
        success: false,
        error: "Unable to connect. Please check your internet connection and try again."
      });
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container contact">
        
        {/* LEFT SIDE - CONTACT DETAILS */}
        <Reveal width="45%" duration={0.8}>
          <div className="contact-text">
            <h1>
              Contact <span className="text">Me</span>
            </h1>

            <h4>Let's work Together</h4>

            <p>
              I'm always open to discussing new opportunities, collaborations, or
              sharing ideas. Feel free to reach out via form or social links.
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
                <span>Pune, Maharashtra, India</span>
              </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="social-icons">
              <a
                href="https://github.com/vrushabh-digraje"
                className="social-btns"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/vrushabh-digraje-408566260/"
                className="social-btns"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/919767747360"
                className="social-btns"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </Reveal>

        {/* RIGHT SIDE - CONTACT FORM */}
        <Reveal width="50%" duration={0.8} delay={0.15}>
          <div className="contact-form">
            {formStatus.success ? (
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "40px 20px",
                height: "100%",
                animation: "fadeIn 0.5s ease",
              }}>
                <FaCheckCircle style={{
                  color: "var(--accent-color, #38bdf8)",
                  fontSize: "64px",
                  marginBottom: "20px",
                  filter: "drop-shadow(0 0 10px var(--accent-glow))"
                }} />
                <h3 style={{ fontSize: "2.2rem", color: "#fff", marginBottom: "10px" }}>Message Sent!</h3>
                <p style={{ fontSize: "1.5rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  Thank you, your message has been received successfully. I will get back to you shortly!
                </p>
                <button 
                  onClick={() => setFormStatus({ submitting: false, success: false, error: null })}
                  className="send" 
                  style={{ marginTop: "30px", width: "auto" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xzdrqdkn"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    placeholder=" "
                    required
                    disabled={formStatus.submitting}
                  />
                  <label htmlFor="contact-name">Your Name</label>
                </div>

                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    placeholder=" "
                    required
                    disabled={formStatus.submitting}
                  />
                  <label htmlFor="contact-email">Your Email</label>
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    name="subject"
                    id="contact-subject"
                    placeholder=" "
                    disabled={formStatus.submitting}
                  />
                  <label htmlFor="contact-subject">Subject</label>
                </div>

                <div className="input-group">
                  <textarea
                    name="message"
                    id="contact-message"
                    placeholder=" "
                    required
                    disabled={formStatus.submitting}
                  ></textarea>
                  <label htmlFor="contact-message">Your Message</label>
                </div>

                {/* Anti-spam honeypot */}
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: "none" }}
                  disabled={formStatus.submitting}
                />

                {formStatus.error && (
                  <div style={{
                    color: "#fc8181",
                    fontSize: "1.4rem",
                    padding: "10px",
                    background: "rgba(252, 129, 129, 0.1)",
                    border: "1px solid rgba(252, 129, 129, 0.2)",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}>
                    {formStatus.error}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="send"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? (
                    <>
                      <ImSpinner2 className="spin-slow" style={{ fontSize: "18px" }} /> Sending...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Contact;
