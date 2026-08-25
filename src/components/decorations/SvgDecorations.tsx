import React from "react";

export const DotGrid: React.FC<{ opacity?: number }> = ({ opacity = 0.15 }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        opacity,
        backgroundImage: `radial-gradient(var(--color-brand-soft) 1.5px, transparent 1.5px)`,
        backgroundSize: "24px 24px",
      }}
      aria-hidden="true"
    />
  );
};

export const ConcentricRings: React.FC<{ size?: number; className?: string }> = ({
  size = 300,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    >
      <circle cx="150" cy="150" r="140" stroke="var(--color-brand-primary)" strokeOpacity="0.08" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="150" cy="150" r="100" stroke="var(--color-brand-warm)" strokeOpacity="0.1" strokeWidth="1.5" />
      <circle cx="150" cy="150" r="60" stroke="var(--color-brand-soft)" strokeOpacity="0.12" strokeWidth="1.5" />
    </svg>
  );
};

export const OrganicBlob: React.FC<{ color?: string; opacity?: number }> = ({
  color = "var(--color-bg-accent)",
  opacity = 0.6,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "350px",
        height: "350px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(40px)",
        pointerEvents: "none",
        opacity,
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
};

export const WaveDivider: React.FC<{ flip?: boolean }> = ({ flip = false }) => {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
        transform: flip ? "rotate(180deg)" : "none",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ position: "relative", display: "block", width: "calc(100% + 1.3px)", height: "40px" }}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill="var(--color-bg-secondary)"
        ></path>
      </svg>
    </div>
  );
};
