import Image from "next/image";

const explore = [
  { href: "#who-we-are", label: "Who We Are" },
  { href: "#what-we-do", label: "What We Do" },
  { href: "#markets", label: "Markets We Serve" },
  { href: "#our-team", label: "Our Team" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              src="/images/logo.png"
              alt="Alliance Building Services"
              width={425}
              height={122}
              style={{ height: 38, width: "auto" }}
            />
            <p className="tag">Consider it Done.</p>
            <p>Reliable people. Consistent results. Healthy environments. Lasting impressions.</p>
          </div>
          <div className="footer-col">
            <strong>Explore</strong>
            {explore.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <strong>Offices</strong>
            <p>Houston</p>
            <p>New York</p>
            <a href="#">LinkedIn</a>
            <a href="#">alliance.us</a>
          </div>
        </div>
        <p className="wordmark">Alliance</p>
        <div className="legal">
          <p>Copyright 2026 Alliance Building Services. All rights reserved.</p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
