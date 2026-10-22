import { ctaLabel } from "@/lib/content";
import { Photo } from "@/components/Photo";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="contact-banner">
          <Photo src="/images/cta-property.jpg" alt="Property exterior" sizes="(max-width: 1200px) 100vw, 1200px" />
          <div className="contact-shade" />
          <div className="contact-copy">
            <h2>Let&apos;s talk about your property.</h2>
            <p>We will walk the building, understand the scope and come back with something specific.</p>
            <a className="btn btn-white" href="#contact">
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
