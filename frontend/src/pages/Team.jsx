import "../css/Team.css";

const teamMembers = [
  {
    name: "Ch. Chandra Sekhar Patro",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Rahul Sharma",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Priya Singh",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Aman Verma",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

function Team() {
  return (
    <div className="team">

      <section className="team-hero">
        <h1>Our Team</h1>
        <p>Meet the talented people behind TechNova Solutions.</p>
      </section>

      <section className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>

            <div className="social-links">
              <button>LinkedIn</button>
              <button>GitHub</button>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}

export default Team;