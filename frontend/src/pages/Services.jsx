import "../css/Services.css";

function Services() {
  return (
    <div className="services">

      <section className="services-hero">
        <h1>Our Services</h1>
        <p>We provide complete digital solutions for your business growth</p>
      </section>

      <section className="services-grid">

        <div className="service-card">
          <h3>Web Development</h3>
          <p>Responsive and modern websites using latest technologies.</p>
        </div>

        <div className="service-card">
          <h3>Mobile Apps</h3>
          <p>Android and iOS apps with smooth user experience.</p>
        </div>

        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>Clean, modern and user-friendly interface designs.</p>
        </div>

        <div className="service-card">
          <h3>Cloud Solutions</h3>
          <p>Secure and scalable cloud-based systems for businesses.</p>
        </div>

      </section>

    </div>
  );
}

export default Services;