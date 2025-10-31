"use client";

import React from "react";

const DIAMONDS = [
  { size: 52, duration: 20, delay: 0,  left: "4%",  rotateDir: 1 },
  { size: 44, duration: 16, delay: 3,  left: "18%", rotateDir: -1 },
  { size: 60, duration: 24, delay: 6,  left: "33%", rotateDir: 1 },
  { size: 48, duration: 18, delay: 1,  left: "50%", rotateDir: -1 },
  { size: 56, duration: 22, delay: 4,  left: "66%", rotateDir: 1 },
  { size: 40, duration: 15, delay: 7,  left: "82%", rotateDir: -1 },
];

export default function AnimatedBackground() {
  return (
    <div className="ga-diamond-layer" aria-hidden>
      {DIAMONDS.map((d, i) => (
        <div
          key={i}
          className={`ga-diamond-img ${d.rotateDir > 0 ? "ga-rotate-right" : "ga-rotate-left"}`}
          style={
            {
              "--ga-size": `${d.size}px`,
              "--ga-duration": `${d.duration}s`,
              "--ga-delay": `${d.delay}s`,
              left: d.left,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
