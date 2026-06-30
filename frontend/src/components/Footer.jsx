import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>TechNova Solutions</h2>
        <p>Building modern digital experiences for businesses.</p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} TechNova Solutions. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;