import "../css/Testimonials.css";

const testimonials = [
  {
    name: "Amit Sharma",
    company: "ABC Technologies",
    feedback:
      "TechNova Solutions delivered our website on time with an excellent design and great performance.",
  },
  {
    name: "Priya Verma",
    company: "Future IT",
    feedback:
      "Their team is highly professional. We are very satisfied with the quality of work and support.",
  },
  {
    name: "Rahul Das",
    company: "Digital World",
    feedback:
      "Amazing experience! The website is responsive, fast, and looks modern.",
  },
];

function Testimonials() {
  return (
    <div className="testimonials">

      <section className="testimonial-hero">
        <h1>Client Testimonials</h1>
        <p>What our clients say about us</p>
      </section>

      <section className="testimonial-container">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <h3>{item.name}</h3>
            <h4>{item.company}</h4>
            <p>"{item.feedback}"</p>
          </div>
        ))}
      </section>

    </div>
  );
}

export default Testimonials;