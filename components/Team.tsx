import { Photo } from "@/components/Photo";

export function Team() {
  return (
    <section id="our-team" className="team">
      <div className="wrap team-grid">
        <div className="team-photo">
          <Photo src="/images/team-leadership.jpg" alt="Leadership team" sizes="(max-width: 980px) 100vw, 580px" />
        </div>
        <div className="team-copy">
          <p className="eyebrow">Our Team</p>
          <div>
            <h2>Local leadership. Accessible, accountable, experienced.</h2>
            <p>
              Our leaders walk the properties, join the inspections and pick up the phone. Between them, decades in
              this industry, most of it in the markets we serve today.
            </p>
            <a className="btn btn-white" href="#our-team" style={{ marginTop: 28 }}>
              Meet the team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
