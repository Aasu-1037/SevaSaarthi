"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Server, Cpu, Database, Shield, Layers, Sparkles } from "lucide-react";

export const ArchitectureSection: React.FC = () => {
  return (
    <section
      id="architecture"
      style={{
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
        backgroundColor: "var(--color-bg-primary)",
        borderBottom: "1px solid rgba(217, 98, 30, 0.1)",
      }}
    >
      <div className="container-custom">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow-badge">
            <Layers size={14} /> Technical Blueprint
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              marginTop: "1rem",
              marginBottom: "1rem",
              lineHeight: 1.1,
            }}
          >
            How SevaSaathi Works
          </h2>
          <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)" }}>
            Architectural separation between AI natural-language explanations and deterministic government workflow logic.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.75rem", maxWidth: "960px", margin: "0 auto" }}>
          {/* Prototype Stack */}
          <div
            className="spotlight-card"
            style={{
              padding: "2rem",
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-xl)",
              border: "1px solid rgba(217, 98, 30, 0.18)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", backgroundColor: "var(--color-brand-accent-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Layers size={20} color="var(--color-brand-primary)" />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--color-text-primary)" }}>Current Web Prototype</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {["Citizen Web App (Next.js 16 + React 19)", "AI Orchestrator (Gemini 2.5 Intent Engine)", "Deterministic Workflow State Machine", "Mock Digital Gujarat API Adapter", "Synthetic Document & Scheme Registry"].map((layer, i) => (
                <div
                  key={i}
                  style={{
                    padding: "0.75rem 1rem",
                    backgroundColor: "var(--color-bg-primary)",
                    borderRadius: "var(--radius-md)",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    border: "1px solid rgba(217, 98, 30, 0.1)",
                  }}
                >
                  <span style={{ width: "22px", height: "22px", borderRadius: "50%", backgroundColor: "var(--color-brand-primary)", color: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 900 }}>
                    {i + 1}
                  </span>
                  <span>{layer}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Production Concept Stack */}
          <div
            className="spotlight-card"
            style={{
              padding: "2rem",
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-xl)",
              border: "1px solid rgba(13, 148, 136, 0.25)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", backgroundColor: "var(--color-status-info-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Server size={20} color="var(--color-status-info)" />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--color-text-primary)" }}>Production Architecture</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {["Citizen Multi-Lingual Mobile & Web Portal", "Enterprise AI Agent System (Azure / Vertex AI)", "Policy & Rule Compliance Enforcement Layer", "Authorized Gateway Adapter API", "Official Digital Gujarat Core Backend"].map((layer, i) => (
                <div
                  key={i}
                  style={{
                    padding: "0.75rem 1rem",
                    backgroundColor: "var(--color-status-info-bg)",
                    borderRadius: "var(--radius-md)",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    border: "1px solid rgba(13, 148, 136, 0.15)",
                  }}
                >
                  <span style={{ width: "22px", height: "22px", borderRadius: "50%", backgroundColor: "var(--color-status-info)", color: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 900 }}>
                    {i + 1}
                  </span>
                  <span>{layer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FinalCTASection: React.FC = () => {
  return (
    <section
      style={{
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
        backgroundColor: "var(--color-bg-secondary)",
        position: "relative",
      }}
    >
      <div className="container-custom">
        <div style={{ maxWidth: "840px", margin: "0 auto", textAlign: "center" }}>
          <span className="eyebrow-badge" style={{ marginBottom: "1rem" }}>
            <Sparkles size={14} /> Ready To Experience
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              marginBottom: "1.25rem",
              lineHeight: 1.1,
            }}
          >
            Start with what you need.
          </h2>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-secondary)",
              marginBottom: "2.5rem",
              lineHeight: 1.6,
            }}
          >
            Experience how AI-powered plain-language clarity transforms government digital services for millions of citizens.
          </p>
          <Link href="/demo/start" className="btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
            <span>Launch Interactive Demo</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

