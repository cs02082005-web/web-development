import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>TechNova Solutions</h2>
      </div>

      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/contact">Contact</Link></li>

      </ul>

    </nav>
  );
}

export default Navbar;