"use client";

import React, { useState } from "react";
import { Info, X } from "lucide-react";

export const PrototypeBanner: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      style={{
        backgroundColor: "var(--color-bg-tertiary)",
        borderBottom: "1px solid rgba(232, 114, 42, 0.2)",
        padding: "0.5rem 1rem",
        fontSize: "0.8rem",
        fontWeight: 600,
        color: "var(--color-brand-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        textAlign: "center",
        position: "relative",
        zIndex: 60,
      }}
    >
      <Info size={15} style={{ flexShrink: 0 }} />
      <span>
        <strong>Independent Citizen Prototype</strong> — Not an official Gujarat Government service. Uses synthetic mock data only.
      </span>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss banner"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--color-brand-primary)",
          display: "inline-flex",
          alignItems: "center",
          marginLeft: "0.5rem",
        }}
      >
        <X size={14} />
      </button>
    </div>
  );
};
