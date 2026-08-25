"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { CheckCircle2, AlertTriangle, ArrowRight, Play, RefreshCw, Sparkles } from "lucide-react";

export default function DemoPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)" }}>
      <Navbar />

      <section style={{ paddingTop: "clamp(3rem, 6vw, 5rem)", paddingBottom: "var(--space-section)" }}>
        <div className="container-custom" style={{ maxWidth: "960px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="eyebrow-badge">Interactive Demo Hub</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-display)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Choose a Citizen Scenario
            </h1>
            <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)", maxWidth: "640px", margin: "0 auto" }}>
              Test SevaSaathi's complete citizen experience through two pre-configured demonstration pathways.
            </p>
          </div>

          {/* Demo Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
            {/* Demo A Card */}
            <div
              className="spotlight-card"
              style={{
                padding: "2.25rem",
                backgroundColor: "var(--color-bg-card)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "2px solid rgba(232, 114, 42, 0.2)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, padding: "0.3rem 0.8rem", borderRadius: "var(--radius-pill)", backgroundColor: "rgba(107, 158, 125, 0.15)", color: "var(--color-status-ready)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    <CheckCircle2 size={14} /> DEMO A — HAPPY PATH
                  </span>
                </div>

                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
                  New Application Journey
                </h3>

                <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  Experience natural language service discovery, document readiness check, 5-step application submission, and status explanation for <strong>Income Certificate</strong>.
                </p>

                <div style={{ padding: "1rem", backgroundColor: "var(--color-bg-tertiary)", borderRadius: "var(--radius-md)", fontSize: "0.85rem", color: "var(--color-text-primary)", marginBottom: "2rem" }}>
                  <strong>Demo Citizen:</strong> Demo Citizen (Surat) <br />
                  <strong>Target Intent:</strong> "Income certificate for scholarship"
                </div>
              </div>

              <Link href="/demo/start" className="btn-primary" style={{ justifyContent: "center", width: "100%" }}>
                <Play size={18} />
                <span>Start New Service Journey</span>
              </Link>
            </div>

            {/* Demo B Card */}
            <div
              className="spotlight-card"
              style={{
                padding: "2.25rem",
                backgroundColor: "var(--color-bg-card)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "2px solid rgba(232, 145, 138, 0.3)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, padding: "0.3rem 0.8rem", borderRadius: "var(--radius-pill)", backgroundColor: "rgba(232, 145, 138, 0.18)", color: "var(--color-brand-secondary)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    <AlertTriangle size={14} /> DEMO B — RECOVERY PATH
                  </span>
                </div>

                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
                  Correction & Recovery Flow
                </h3>

                <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  Simulate an application in <strong>NEEDS_CORRECTION</strong> state. See how AI explains the problem without harsh rejection and guides step-by-step correction.
                </p>

                <div style={{ padding: "1rem", backgroundColor: "var(--color-bg-accent)", borderRadius: "var(--radius-md)", fontSize: "0.85rem", color: "var(--color-text-primary)", marginBottom: "2rem" }}>
                  <strong>Application ID:</strong> DG-DEMO-58317 <br />
                  <strong>Current Status:</strong> Needs Document Correction
                </div>
              </div>

              <Link href="/demo/recovery" className="btn-secondary" style={{ justifyContent: "center", width: "100%", borderColor: "var(--color-brand-secondary)", color: "var(--color-brand-secondary)" }}>
                <RefreshCw size={18} />
                <span>Launch Recovery Journey</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
