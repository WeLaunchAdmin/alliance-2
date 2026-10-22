"use client";

import { useState } from "react";
import { techItems } from "@/lib/content";
import { Photo } from "@/components/Photo";

export function Technology() {
  const [tab, setTab] = useState(0);
  const active = techItems[tab];

  return (
    <section className="tech" aria-labelledby="technology-heading">
      <div className="wrap tech-grid">
        <div>
          <p className="eyebrow">Technology</p>
          <div className="tech-list" role="tablist" aria-label="Technology">
            {techItems.map((item, index) => (
              <button
                key={item.label}
                type="button"
                role="tab"
                aria-selected={index === tab}
                aria-current={index === tab ? "true" : undefined}
                onClick={() => setTab(index)}
              >
                {item.label}
                <span>{index === tab ? "→" : ""}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 id="technology-heading">You should not have to take our word for it.</h2>
          <p className="intro">
            Every inspection is logged, scored and photographed. Every issue is tracked to resolution. You get the
            data, not just the assurance.
          </p>
          <div className="tech-panel">
            <div className="copy">
              <p className="num">0{tab + 1} / 04</p>
              <div>
                <h3>{active.title}</h3>
                <p>{active.body}</p>
              </div>
            </div>
            <div className="frame">
              <Photo src="/images/why-alliance.jpg" alt="Inspection on site" sizes="(max-width: 980px) 100vw, 480px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
