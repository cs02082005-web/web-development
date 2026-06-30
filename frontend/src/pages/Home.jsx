import "../css/Home.css";

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <section className="features">
  <div className="card">Fast Development</div>
  <div className="card">Modern UI</div>
  <div className="card">Secure Apps</div>
</section>

        <h1>Build Modern Digital Solutions</h1>
        <p>We design and develop websites and apps for businesses.</p>

        {/* DARK BOX */}
        <div className="button-box">
          <button>Get Started</button>
        </div>

      </section>

    </div>
  );
}

export default Home;