"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle, ShieldCheck, Database, Lock, Key, CreditCard } from "lucide-react";

export const BeforeAfterSection: React.FC = () => {
  const comparisons = [
    {
      beforeTitle: "Standard Government Portal",
      beforeStatus: "STATUS: RETURNED UNDER CLAUSE 12 FOR RE-VERIFICATION OF INCOME PROOF",
      beforeMeaning: "Citizen has no idea what document is wrong or what to do.",
      afterTitle: "SevaSaathi Plain Language",
      afterStatus: "Action Required: Update Income Proof Document",
      afterMeaning: "We need one updated document showing your annual income for 2025-26. Click here to upload.",
    },
    {
      beforeTitle: "Standard Government Portal",
      beforeStatus: "STATUS: INWARDED - PENDING TESHILDAR APPROVAL STAGE 2",
      beforeMeaning: "Is my application progressing? Should I visit the office?",
      afterTitle: "SevaSaathi Plain Language",
      afterStatus: "On Track: Under Officer Review",
      afterMeaning: "Your application is being reviewed by the officer. No action is required from you right now.",
    },
  ];

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
          <span className="eyebrow-badge">Clarity Comparison</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              marginTop: "1rem",
            }}
          >
            Before & After SevaSaathi
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {comparisons.map((c, idx) => (
            <div
              key={idx}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {/* Before Card */}
              <div
                style={{
                  padding: "2rem",
                  borderRadius: "var(--radius-xl)",
                  backgroundColor: "#FFF0F0",
                  border: "1px solid rgba(196, 91, 74, 0.2)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-status-error)", marginBottom: "1rem" }}>
                  <XCircle size={20} />
                  <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>{c.beforeTitle}</span>
                </div>
                <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "0.75rem", fontFamily: "monospace" }}>
                  {c.beforeStatus}
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
                  {c.beforeMeaning}
                </p>
              </div>

              {/* After Card */}
              <div
                style={{
                  padding: "2rem",
                  borderRadius: "var(--radius-xl)",
                  backgroundColor: "var(--color-bg-card)",
                  border: "2px solid var(--color-brand-primary)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-status-ready)", marginBottom: "1rem" }}>
                  <CheckCircle size={20} />
                  <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>{c.afterTitle}</span>
                </div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-brand-primary)", marginBottom: "0.75rem" }}>
                  {c.afterStatus}
                </h4>
                <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--color-text-primary)" }}>
                  "{c.afterMeaning}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TrustSafetySection: React.FC = () => {
  const badges = [
    { icon: <Database size={24} color="var(--color-brand-primary)" />, title: "Synthetic Data Only", desc: "All names, districts, and IDs are 100% mock demo data." },
    { icon: <Lock size={24} color="var(--color-brand-primary)" />, title: "No Real Aadhaar / PAN", desc: "We never ask for or store actual government identity numbers." },
    { icon: <Key size={24} color="var(--color-brand-primary)" />, title: "No Live Government API", desc: "Operates in a self-contained simulated prototype environment." },
    { icon: <CreditCard size={24} color="var(--color-brand-primary)" />, title: "No Real Payments", desc: "Zero fee collections or financial transactions processed." },
  ];

  return (
    <section
      id="trust"
      style={{
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
        backgroundColor: "var(--color-bg-secondary)",
      }}
    >
      <div className="container-custom">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow-badge">Trust & Safety</span>
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
            Built for citizens. Not pretending to be government.
          </h2>
          <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)" }}>
            SevaSaathi is an independent prototype demonstrating how a simpler citizen experience could sit on top of authorized government services.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {badges.map((b, idx) => (
            <div
              key={idx}
              className="spotlight-card"
              style={{
                padding: "1.75rem",
                backgroundColor: "var(--color-bg-card)",
                textAlign: "center",
              }}
            >
              <div style={{ display: "inline-flex", padding: "0.8rem", borderRadius: "14px", backgroundColor: "var(--color-bg-tertiary)", marginBottom: "1rem" }}>
                {b.icon}
              </div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
                {b.title}
              </h4>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "1rem 1.5rem",
            borderRadius: "var(--radius-pill)",
            backgroundColor: "var(--color-bg-tertiary)",
            border: "1px solid rgba(232, 114, 42, 0.2)",
            textAlign: "center",
            fontSize: "0.875rem",
            fontWeight: 700,
            color: "var(--color-brand-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <ShieldCheck size={18} />
          <span>Independent prototype — not an official Gujarat Government service.</span>
        </div>
      </div>
    </section>
  );
};
