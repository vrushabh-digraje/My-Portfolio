function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-card">
          <h1 className="about-title">
            About <span className="text">Me</span>
          </h1>

          <h4 className="about-role">Frontend Developer</h4>

          <p className="about-desc">
           I’m Vrushabh Digraje, a frontend developer passionate about building responsive, user-friendly web interfaces. I enjoy turning ideas into interactive experiences using clean, efficient code and modern frontend technologies.
           I focus on creating smooth user experiences with attention to design, performance, and accessibility. I’m always eager to learn new tools and improve my skills to build better, more engaging web applications.
          </p>

          {/* <div className="about-tags">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>REST APIs</span>
            <span>MySQL</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;
