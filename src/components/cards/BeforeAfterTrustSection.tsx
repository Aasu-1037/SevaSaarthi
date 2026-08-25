"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ShieldCheck, Database, Lock, Key, CreditCard, Sparkles } from "lucide-react";

export const BeforeAfterSection: React.FC = () => {
  const comparisons = [
    {
      beforeTitle: "Standard Government Portal Output",
      beforeStatus: "STATUS: RETURNED UNDER CLAUSE 12 FOR RE-VERIFICATION OF INCOME PROOF",
      beforeMeaning: "Citizen has no idea what document is wrong or what to do next.",
      afterTitle: "SevaSaathi Plain-Language Explanation",
      afterStatus: "Action Required: Update Income Proof Document",
      afterMeaning: "We need one updated document showing your annual income for 2025-26. Click here to upload your latest salary slip or IT return.",
    },
    {
      beforeTitle: "Standard Government Portal Output",
      beforeStatus: "STATUS: INWARDED - PENDING TESHILDAR APPROVAL STAGE 2",
      beforeMeaning: "Is my application progressing? Should I physically visit the office?",
      afterTitle: "SevaSaathi Plain-Language Explanation",
      afterStatus: "On Track: Under Officer Review (Stage 2 of 3)",
      afterMeaning: "Your application is currently under officer review. No action is required from you right now.",
    },
  ];

  return (
    <section
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
            <Sparkles size={14} /> Plain Language Transformation
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              marginTop: "1rem",
              lineHeight: 1.1,
            }}
          >
            Before & After SevaSaathi
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", maxWidth: "960px", margin: "0 auto" }}>
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
                  padding: "1.75rem",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "#FEF2F2",
                  border: "1px solid rgba(185, 28, 28, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-status-error)", marginBottom: "1rem" }}>
                    <XCircle size={18} />
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.beforeTitle}</span>
                  </div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "0.75rem", fontFamily: "monospace", lineHeight: 1.4 }}>
                    "{c.beforeStatus}"
                  </h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
                    {c.beforeMeaning}
                  </p>
                </div>
              </div>

              {/* After Card */}
              <div
                style={{
                  padding: "1.75rem",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "#FFFFFF",
                  border: "1.5px solid var(--color-brand-primary)",
                  boxShadow: "var(--shadow-sm)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-status-ready)", marginBottom: "1rem" }}>
                    <CheckCircle2 size={18} />
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.afterTitle}</span>
                  </div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--color-brand-primary)", marginBottom: "0.75rem" }}>
                    {c.afterStatus}
                  </h4>
                  <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-text-primary)", lineHeight: 1.5 }}>
                    "{c.afterMeaning}"
                  </p>
                </div>
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
    { icon: <Database size={22} color="var(--color-brand-primary)" />, title: "Synthetic Data Only", desc: "All names, districts, and application IDs are 100% synthetic demo data." },
    { icon: <Lock size={22} color="var(--color-brand-primary)" />, title: "No Real Aadhaar / PAN", desc: "We never ask for, collect, or store real government identity numbers." },
    { icon: <Key size={22} color="var(--color-brand-primary)" />, title: "Isolated Prototype", desc: "Operates in a self-contained sandbox environment with mock adapters." },
    { icon: <CreditCard size={22} color="var(--color-brand-primary)" />, title: "Zero Financial Charges", desc: "No payment processing or financial transactions are collected." },
  ];

  return (
    <section
      id="trust"
      style={{
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
        backgroundColor: "var(--color-bg-secondary)",
        borderBottom: "1px solid rgba(217, 98, 30, 0.1)",
      }}
    >
      <div className="container-custom">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow-badge">
            <ShieldCheck size={14} /> Trust & Safety Protocol
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
            Built for citizens. Transparent disclosures.
          </h2>
          <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)" }}>
            SevaSaathi is an independent prototype demonstrating how a clear, AI-guided citizen experience can streamline public service delivery.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem", maxWidth: "960px", margin: "0 auto 2.5rem auto" }}>
          {badges.map((b, idx) => (
            <div
              key={idx}
              className="spotlight-card"
              style={{
                padding: "1.5rem",
                backgroundColor: "#FFFFFF",
                textAlign: "center",
                borderRadius: "var(--radius-lg)",
                border: "1px solid rgba(217, 98, 30, 0.14)",
              }}
            >
              <div style={{ display: "inline-flex", padding: "0.75rem", borderRadius: "12px", backgroundColor: "var(--color-brand-accent-bg)", marginBottom: "1rem" }}>
                {b.icon}
              </div>
              <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "0.4rem" }}>
                {b.title}
              </h4>
              <p style={{ fontSize: "0.825rem", color: "var(--color-text-secondary)", lineHeight: 1.4 }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            padding: "0.85rem 1.5rem",
            borderRadius: "var(--radius-pill)",
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(217, 98, 30, 0.2)",
            textAlign: "center",
            fontSize: "0.85rem",
            fontWeight: 800,
            color: "var(--color-brand-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <ShieldCheck size={18} />
          <span>Independent Citizen Prototype — Not an official Gujarat Government service.</span>
        </div>
      </div>
    </section>
  );
};

