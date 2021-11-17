import photoGrid from "../images/photo-grid.png";

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__img"
        src={photoGrid}
        alt="a grid showing various experiences"
      />
      <main>
        <h1 className="hero__title">online experiences</h1>
        <p className="hero__info">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </main>
    </section>
  );
}

export default Hero;
