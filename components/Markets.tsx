"use client";

import { useState } from "react";
import { markets } from "@/lib/content";
import { Photo } from "@/components/Photo";

export function Markets() {
  const [active, setActive] = useState(0);

  return (
    <section id="markets" className="markets">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">Markets We Serve</p>
          <h2>Built for complex properties.</h2>
        </div>
        <div className="market-row">
          {markets.map((market, index) => {
            const open = index === active;
            return (
              <button
                key={market.id}
                type="button"
                className={open ? "market open" : "market"}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                aria-expanded={open}
              >
                <div className="market-photo">
                  <Photo src={market.src} alt={market.title} sizes={open ? "50vw" : "12vw"} />
                </div>
                <div className="market-shade" />
                <p className="market-num">0{index + 1}</p>
                <p className="market-short">{market.short}</p>
                <div className="market-title">
                  <h3>{market.title}</h3>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
