import { services } from "@/lib/content";
import { Photo } from "@/components/Photo";

export function Services() {
  return (
    <section id="what-we-do" className="services">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">What We Do</p>
          <h2>Everything a building needs. One accountable team.</h2>
          <p className="intro">
            Most providers hand you a cleaning crew. We give you a service partner: trained people, documented
            standards, and leadership that answers the phone.
          </p>
        </div>

        <div className="svc-top">
          <article className="svc-feature">
            <div className="svc-copy">
              <h3>{services.janitorial.title}</h3>
              <p>{services.janitorial.body}</p>
            </div>
            <div className="frame">
              <Photo src={services.janitorial.image} alt={services.janitorial.alt} sizes="(max-width: 980px) 100vw, 580px" />
            </div>
          </article>

          <div className="svc-stack">
            {[services.porter, services.floor].map((item) => (
              <article className="svc-split" key={item.title}>
                <div className="copy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <div className="frame">
                  <Photo src={item.image} alt={item.alt} sizes="(max-width: 980px) 100vw, 320px" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="svc-row">
          {services.more.map((item) => (
            <article className="svc-tile" key={item.title}>
              <div className="frame">
                <Photo src={item.image} alt={item.alt} sizes="(max-width: 640px) 100vw, 380px" />
              </div>
              <div className="copy">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
