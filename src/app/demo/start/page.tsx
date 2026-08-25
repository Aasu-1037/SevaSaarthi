"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Sparkles, ArrowRight, CheckCircle2, MessageSquare, Search } from "lucide-react";

export default function ServiceDiscoveryPage() {
  const [prompt, setPrompt] = useState("I need an income certificate for my daughter's scholarship in Surat.");
  const [analyzed, setAnalyzed] = useState(true);

  const suggestionChips = [
    "Income Certificate for Scholarship",
    "Scholarship Application",
    "Caste Certificate for School Admission",
    "Non-Creamy Layer Certificate",
    "Old Age Pension Scheme",
  ];

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)" }}>
      <Navbar />

      <section style={{ paddingTop: "clamp(2.5rem, 5vw, 4rem)", paddingBottom: "var(--space-section)" }}>
        <div className="container-custom" style={{ maxWidth: "860px" }}>
          {/* Header */}
          <div style={{ marginBottom: "2.5rem" }}>
            <span className="eyebrow-badge">Step 1 — Service Discovery</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h1)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                marginTop: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              What are you trying to get done?
            </h1>
            <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)" }}>
              Describe what you need in your own words in Gujarati, Hindi, or English.
            </p>
          </div>

          {/* Natural Language Prompt Box */}
          <div
            className="spotlight-card"
            style={{
              padding: "2rem",
              backgroundColor: "var(--color-bg-card)",
              marginBottom: "2rem",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", fontWeight: 700, color: "var(--color-brand-primary)", marginBottom: "0.75rem" }}>
              <MessageSquare size={18} />
              <span>Describe your need</span>
            </label>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={3}
              placeholder="e.g. Mare scholarship mate income certificate joiye chhe..."
              style={{
                width: "100%",
                padding: "1rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid rgba(232, 114, 42, 0.25)",
                backgroundColor: "var(--color-bg-input)",
                fontSize: "1.05rem",
                color: "var(--color-text-primary)",
                outline: "none",
                fontFamily: "inherit",
                resize: "vertical",
                marginBottom: "1.25rem",
              }}
            />

            {/* Suggestion Chips */}
            <div style={{ marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", display: "block", marginBottom: "0.5rem" }}>
                Or choose a common request:
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {suggestionChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setPrompt(chip);
                      setAnalyzed(true);
                    }}
                    style={{
                      padding: "0.4rem 0.9rem",
                      borderRadius: "var(--radius-pill)",
                      backgroundColor: "var(--color-bg-tertiary)",
                      border: "1px solid rgba(232, 114, 42, 0.15)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      cursor: "pointer",
                    }}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="btn-primary"
              onClick={() => setAnalyzed(true)}
              style={{ width: "100%", justifyContent: "center", padding: "1rem" }}
            >
              <Sparkles size={18} />
              <span>Identify Service with AI</span>
            </button>
          </div>

          {/* AI Service Intent Confirmation Result */}
          {analyzed && (
            <div
              className="spotlight-card"
              style={{
                padding: "2rem",
                backgroundColor: "var(--color-bg-tertiary)",
                border: "2px solid var(--color-brand-primary)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-brand-primary)", marginBottom: "1rem" }}>
                <CheckCircle2 size={22} />
                <span style={{ fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase" }}>AI Identified Your Required Service</span>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", display: "block" }}>Primary Service Identified</span>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--color-text-primary)", marginTop: "0.25rem" }}>
                  Income Certificate (આવકનો દાખલો)
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", marginTop: "0.5rem" }}>
                  Official Revenue Department service required for Gujarat scholarship applications, educational concessions, and welfare eligibility.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
                <div style={{ padding: "0.85rem 1rem", backgroundColor: "var(--color-bg-card)", borderRadius: "var(--radius-md)" }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Extracted Purpose</span>
                  <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--color-brand-primary)" }}>Higher Education Scholarship</strong>
                </div>
                <div style={{ padding: "0.85rem 1rem", backgroundColor: "var(--color-bg-card)", borderRadius: "var(--radius-md)" }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Issuing Authority</span>
                  <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--color-text-primary)" }}>Mamlatdar Office / Revenue Dept</strong>
                </div>
              </div>

              <Link href="/demo/documents" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "1rem", fontSize: "1.05rem" }}>
                <span>Continue to Document Readiness</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
