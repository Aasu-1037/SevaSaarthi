"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Server, Cpu, Database, Shield, Layers } from "lucide-react";

export const ArchitectureSection: React.FC = () => {
  return (
    <section
      style={{
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
        backgroundColor: "var(--color-bg-primary)",
      }}
    >
      <div className="container-custom">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
          <span className="eyebrow-badge">Technical Architecture</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            How SevaSaathi Works
          </h2>
          <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)" }}>
            Clear separation between AI explanations and deterministic application workflow logic.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {/* Prototype Stack */}
          <div
            className="spotlight-card"
            style={{
              padding: "2rem",
              backgroundColor: "var(--color-bg-card)",
              border: "1px solid rgba(232, 114, 42, 0.15)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
              <Layers size={22} color="var(--color-brand-primary)" />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-text-primary)" }}>Current Web Prototype</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Citizen Web App (Next.js 16 + React)", "AI Orchestrator (Intent, Status, Recovery Agents)", "Deterministic Workflow Engine (State Control)", "Mock Service Adapter", "Synthetic Database (Mock Applications & Rules)"].map((layer, i) => (
                <div
                  key={i}
                  style={{
                    padding: "0.85rem 1.1rem",
                    backgroundColor: "var(--color-bg-tertiary)",
                    borderRadius: "var(--radius-md)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "var(--color-brand-primary)", color: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700 }}>
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
              backgroundColor: "var(--color-bg-card)",
              border: "1px solid rgba(94, 158, 163, 0.25)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
              <Server size={22} color="var(--color-status-info)" />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-text-primary)" }}>Production Concept</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Citizen Access Portal / Mobile App", "AI Agent System (OpenAI / Azure AI Foundry)", "Policy & Compliance Rules Engine", "Authorized Government Adapter API", "Official Digital Gujarat Backend Systems"].map((layer, i) => (
                <div
                  key={i}
                  style={{
                    padding: "0.85rem 1.1rem",
                    backgroundColor: "rgba(94, 158, 163, 0.1)",
                    borderRadius: "var(--radius-md)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "var(--color-status-info)", color: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700 }}>
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
        backgroundColor: "var(--color-bg-accent)",
        position: "relative",
      }}
    >
      <div className="container-custom">
        <div style={{ maxWidth: "840px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              marginBottom: "1.5rem",
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
            Experience how AI-powered clarity transforms government digital services for millions of citizens.
          </p>
          <Link href="/demo/start" className="btn-primary" style={{ padding: "1.1rem 2.5rem", fontSize: "1.1rem" }}>
            <span>Launch Interactive Demo</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};
