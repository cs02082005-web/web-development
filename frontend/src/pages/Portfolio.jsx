import "../css/Portfolio.css";

const projects = [
  {
    title: "Corporate Website",
    image: "https://picsum.photos/400/250?random=1",
    tech: "React, CSS, JavaScript",
  },
  {
    title: "E-Commerce Store",
    image: "https://picsum.photos/400/250?random=2",
    tech: "React, Node.js, MongoDB",
  },
  {
    title: "Hospital Management",
    image: "https://picsum.photos/400/250?random=3",
    tech: "React, Express",
  },
  {
    title: "Food Delivery App",
    image: "https://picsum.photos/400/250?random=4",
    tech: "React Native",
  },
  {
    title: "Student Portal",
    image: "https://picsum.photos/400/250?random=5",
    tech: "React, Firebase",
  },
  {
    title: "Banking Dashboard",
    image: "https://picsum.photos/400/250?random=6",
    tech: "React, Chart.js",
  },
];

function Portfolio() {
  return (
    <div className="portfolio">

      <section className="portfolio-hero">
        <h1>Our Portfolio</h1>
        <p>Some of our recent successful projects.</p>
      </section>

      <section className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.tech}</p>
            <button>View Project</button>
          </div>
        ))}
      </section>

    </div>
  );
}

export default Portfolio;