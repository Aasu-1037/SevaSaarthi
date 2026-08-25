"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const GsapBanner: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current || !titleRef.current || !subRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    ).fromTo(
      subRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.4"
    );
  }, []);

  return (
    <div ref={containerRef} style={{ overflow: "hidden" }}>
      <h2
        ref={titleRef}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-h2)",
          fontWeight: 800,
          color: "var(--color-text-primary)",
        }}
      >
        {title}
      </h2>
      <p ref={subRef} style={{ fontSize: "var(--text-body)", color: "var(--color-text-secondary)", marginTop: "0.5rem" }}>
        {subtitle}
      </p>
    </div>
  );
};
