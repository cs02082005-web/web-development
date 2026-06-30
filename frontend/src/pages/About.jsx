import "../css/About.css";

function About() {
  return (
    <div className="about">

      {/* HERO */}
      <section className="about-hero">
        <h1>About TechNova Solutions</h1>
        <p>We are a modern IT company building digital products for the future.</p>
      </section>

      {/* COMPANY SECTION */}
      <section className="company">

        <div className="company-left">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
            alt="team"
          />
        </div>

        <div className="company-right">
          <h2>Who We Are</h2>
          <p>
            TechNova Solutions is a software development company specializing in
            web development, mobile apps, UI/UX design and cloud solutions.
          </p>
          <p>
            Our mission is to help businesses grow with modern digital solutions.
          </p>
        </div>

      </section>

      {/* MISSION SECTION */}
      <section className="mission">

        <div className="card">
          <h3>Mission</h3>
          <p>Deliver high-quality software solutions for businesses.</p>
        </div>

        <div className="card">
          <h3>Vision</h3>
          <p>Become a global leader in digital innovation.</p>
        </div>

        <div className="card">
          <h3>Values</h3>
          <p>Innovation, Trust, Quality & Customer Satisfaction.</p>
        </div>

      </section>

    </div>
  );
}

export default About;