"use client";

import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-bg-footer)",
        paddingTop: "clamp(4rem, 8vw, 6rem)",
        paddingBottom: "2.5rem",
        borderTop: "1px solid rgba(232, 114, 42, 0.15)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Main Editorial Statement */}
        <div style={{ maxWidth: "800px", marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "var(--color-text-primary)",
              marginBottom: "1.25rem",
            }}
          >
            Make public services <br />
            <span style={{ color: "var(--color-brand-primary)" }}>feel public.</span>
          </h2>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
            }}
          >
            A prototype exploring how AI can make government digital services easier to understand, navigate and complete for citizens.
          </p>
        </div>

        {/* Link Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2.5rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(45, 35, 25, 0.1)",
            marginBottom: "2rem",
          }}
        >
          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-brand-primary)", marginBottom: "1.25rem" }}>
              Product
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.95rem" }}>
              <Link href="/how-it-works" style={{ color: "var(--color-text-secondary)" }}>How it works</Link>
              <Link href="/services" style={{ color: "var(--color-text-secondary)" }}>Services</Link>
              <Link href="#trust" style={{ color: "var(--color-text-secondary)" }}>Why SevaSaathi</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-brand-primary)", marginBottom: "1.25rem" }}>
              Demo
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.95rem" }}>
              <Link href="/demo/start" style={{ color: "var(--color-text-secondary)" }}>Try Service Discovery</Link>
              <Link href="/demo/service/income-certificate" style={{ color: "var(--color-text-secondary)" }}>Income Certificate</Link>
              <Link href="/demo/status" style={{ color: "var(--color-text-secondary)" }}>Status Tracker</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-brand-primary)", marginBottom: "1.25rem" }}>
              About
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.95rem" }}>
              <Link href="/about" style={{ color: "var(--color-text-secondary)" }}>About Prototype</Link>
              <Link href="#architecture" style={{ color: "var(--color-text-secondary)" }}>Architecture</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-brand-primary)", marginBottom: "1.25rem" }}>
              Legal Disclosures
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
              <p>Independent Prototype</p>
              <p>Not a Government Service</p>
              <p>Synthetic Data Only</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            fontSize: "0.85rem",
            color: "var(--color-text-muted)",
          }}
        >
          <div>
            <strong style={{ color: "var(--color-text-primary)" }}>SEVASAATHI</strong> — Independent prototype — not an official Gujarat Government service.
          </div>
          <div>© 2026 SevaSaathi</div>
        </div>
      </div>
    </footer>
  );
};
