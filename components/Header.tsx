import Image from "next/image";
import { ctaLabel, nav } from "@/lib/content";

export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a className="logo" href="#who-we-are" aria-label="Alliance Building Services">
          <Image
            src="/images/logo.png"
            alt="Alliance Building Services"
            width={425}
            height={122}
            priority
            style={{ height: 34, width: "auto" }}
          />
        </a>
        <nav className="nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-dark btn-sm" href="#contact">
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}
