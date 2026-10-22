import { clients, ctaLabel, stats } from "@/lib/content";
import { Photo, SkylineMark } from "@/components/Photo";

export function Hero() {
  return (
    <section id="who-we-are" className="hero">
      <div className="wrap">
        <div className="center">
          <p className="pill">
            <span>Since 1992</span>
            Commercial Janitorial and Building Services
          </p>
          <h1>The service partner your property deserves.</h1>
          <p className="lede">
            Class A standards, local leadership you can actually reach, and the resources of an organisation that has
            been doing this for over three decades.
          </p>
          <div className="actions">
            <a className="btn btn-dark" href="#contact">
              {ctaLabel}
            </a>
            <a className="btn btn-light" href="#what-we-do">
              See What We Do
            </a>
          </div>
        </div>

        <div className="hero-photos">
          <div className="card-photo">
            <Photo src="/images/why-alliance-cool.jpg" alt="Alliance team member" priority sizes="(max-width: 980px) 100vw, 400px" />
            <div className="float-card">
              <p className="kicker">Emergency response</p>
              <strong>24/7, manned</strong>
            </div>
          </div>
          <div className="card-photo">
            <Photo src="/images/home-hero.jpg" alt="Window cleaner on a commercial building" priority sizes="(max-width: 980px) 100vw, 800px" />
            <div className="scrim" />
            <div className="hero-caption">
              <SkylineMark />
              <p>Consider it Done.</p>
            </div>
          </div>
        </div>

        <div className="logos">
          <p>Trusted by leading property managers and owners</p>
          <div className="logo-row">
            {clients.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>

        <div className="stats">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
