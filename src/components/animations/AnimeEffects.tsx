"use client";

import React, { useEffect, useRef } from "react";

export const AnimeBadge: React.FC<{ text: string }> = ({ text }) => {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!badgeRef.current) return;

    import("animejs").then((animeModule: any) => {
      const anime = animeModule.default || animeModule;
      anime({
        targets: badgeRef.current,
        scale: [0.95, 1.03, 1],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeInOutQuad",
      });
    });
  }, []);

  return (
    <div
      ref={badgeRef}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.4rem 1rem",
        borderRadius: "var(--radius-pill)",
        backgroundColor: "var(--color-bg-accent)",
        border: "1px solid rgba(232, 114, 42, 0.2)",
        color: "var(--color-brand-primary)",
        fontWeight: 700,
        fontSize: "0.8rem",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      }}
    >
      <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--color-brand-primary)" }} />
      <span>{text}</span>
    </div>
  );
};
