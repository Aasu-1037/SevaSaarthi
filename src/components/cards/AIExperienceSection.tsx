"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, Globe } from "lucide-react";

export const AIExperienceSection: React.FC = () => {
  const [query, setQuery] = useState("I need an income certificate for my daughter's scholarship in Surat.");
  const [identified, setIdentified] = useState(true);

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
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow-badge">AI Intelligence</span>
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
            Natural Language to Guided Workflow
          </h2>
          <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)" }}>
            Citizens don't need to know government department codes. Speak or type naturally in Gujarati, Hindi, or English.
          </p>
        </div>

        {/* Interactive AI Preview Container */}
        <div
          className="spotlight-card"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "clamp(1.5rem, 4vw, 3rem)",
            backgroundColor: "var(--color-bg-card)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {/* Input Header */}
          <div style={{ marginBottom: "2rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 700, color: "var(--color-text-muted)", marginBottom: "0.6rem" }}>
              Citizen Prompt Example
            </label>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: "260px",
                  padding: "0.9rem 1.2rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(232, 114, 42, 0.2)",
                  backgroundColor: "var(--color-bg-input)",
                  fontSize: "1rem",
                  color: "var(--color-text-primary)",
                  outline: "none",
                }}
              />
              <button
                className="btn-primary"
                onClick={() => setIdentified(true)}
                style={{ padding: "0.9rem 1.6rem" }}
              >
                <Sparkles size={18} />
                <span>Process Intent</span>
              </button>
            </div>
          </div>

          {/* AI Extraction Result Box */}
          {identified && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                backgroundColor: "var(--color-bg-tertiary)",
                border: "1px solid rgba(232, 114, 42, 0.2)",
                borderRadius: "var(--radius-lg)",
                padding: "1.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-brand-primary)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <Sparkles size={16} /> Service Intent Recognized
                </span>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: "var(--radius-pill)", backgroundColor: "var(--color-bg-accent)", color: "var(--color-brand-primary)" }}>
                  High Confidence (98%)
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                <div style={{ padding: "1rem", backgroundColor: "var(--color-bg-card)", borderRadius: "var(--radius-md)" }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", display: "block" }}>Target Service</span>
                  <strong style={{ fontSize: "1.05rem", color: "var(--color-text-primary)" }}>Income Certificate</strong>
                </div>
                <div style={{ padding: "1rem", backgroundColor: "var(--color-bg-card)", borderRadius: "var(--radius-md)" }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", display: "block" }}>Purpose</span>
                  <strong style={{ fontSize: "1.05rem", color: "var(--color-brand-primary)" }}>Scholarship Application</strong>
                </div>
                <div style={{ padding: "1rem", backgroundColor: "var(--color-bg-card)", borderRadius: "var(--radius-md)" }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", display: "block" }}>District</span>
                  <strong style={{ fontSize: "1.05rem", color: "var(--color-text-primary)" }}>Surat</strong>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
