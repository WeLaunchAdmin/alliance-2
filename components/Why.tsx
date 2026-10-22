import { principles } from "@/lib/content";

export function Why() {
  return (
    <section className="why" aria-labelledby="why-heading">
      <div className="wrap">
        <div className="why-head">
          <p className="eyebrow">Why Alliance</p>
          <h2 id="why-heading">Four things we will not compromise on.</h2>
        </div>
        <div className="principles">
          {principles.map((item) => (
            <article className="principle" key={item.title}>
              <span className="bar" style={{ background: item.bar }} aria-hidden="true" />
              <div>
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
