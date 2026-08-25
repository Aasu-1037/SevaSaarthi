"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, ArrowRight, HelpCircle, FileText, Sparkles, RefreshCw } from "lucide-react";

export const ProblemSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const comparisons = [
    {
      govtStatus: "Application Status: Verification Pending by Mamlatdar Office (Inward #48291)",
      govtMeaning: "The portal leaves citizens guessing: Is my document accepted? Is it stuck? Do I need to visit the office?",
      sevaStatus: "On Track: Under Officer Review (Stage 2 of 3)",
      sevaMeaning: "Your documents are verified. The Talati has forwarded your application to the Mamlatdar office. No action needed right now.",
      actionLabel: "Estimated Resolution: 2 Business Days",
    },
    {
      govtStatus: "Application Returned under Rule 4(B) for Revision of Income Proof",
      govtMeaning: "Harsh rejection notice with zero guidance on what document needs fixing or what stamp paper is valid.",
      sevaStatus: "Action Needed: Please Upload Updated Income Certificate",
      sevaMeaning: "Your income proof document is from FY 2023-24. We need the latest income certificate for FY 2025-26. Click below to replace.",
      actionLabel: "Step-by-Step Fix Available",
    },
    {
      govtStatus: "Affidavit along with Self-Declaration Form 16-A required at VCE center",
      govtMeaning: "Bureaucratic jargon confusing citizens about notary requirements, stamp paper values, and physical submission.",
      sevaStatus: "Self-Declaration Form Ready to Download",
      sevaMeaning: "We generated your pre-filled Self-Declaration form. Just sign it and upload a photo from your mobile phone.",
      actionLabel: "Pre-filled Form Generated",
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
        {/* Section Header */}
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow-badge">
            <AlertCircle size={14} /> The Clarity Gap
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
            The information exists. <br />
            <span style={{ color: "var(--color-brand-secondary)" }}>The clarity doesn't.</span>
          </h2>
          <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
            Official government portals give citizens status codes. Citizens need clear answers. Compare the difference below:
          </p>
        </div>

        {/* Interactive Jargon Translator Card */}
        <div
          className="spotlight-card"
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            backgroundColor: "#FFFFFF",
            borderRadius: "var(--radius-xl)",
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
            boxShadow: "var(--shadow-md)",
            border: "1px solid rgba(217, 98, 30, 0.16)",
          }}
        >
          {/* Tab Selector Buttons */}
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", overflowX: "auto", paddingBottom: "0.5rem" }}>
            {comparisons.map((c, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: "0.6rem 1.1rem",
                  borderRadius: "var(--radius-pill)",
                  border: activeTab === idx ? "1px solid var(--color-brand-primary)" : "1px solid rgba(217, 98, 30, 0.15)",
                  backgroundColor: activeTab === idx ? "var(--color-brand-accent-bg)" : "var(--color-bg-primary)",
                  color: activeTab === idx ? "var(--color-brand-primary)" : "var(--color-text-secondary)",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease",
                }}
              >
                Case #{idx + 1}: {idx === 0 ? "Pending Status" : idx === 1 ? "Returned Application" : "Complex Requirements"}
              </button>
            ))}
          </div>

          {/* Split Comparison Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {/* Left Column: Official Bureaucratic Portal */}
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
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem", color: "var(--color-status-error)" }}>
                    <AlertCircle size={18} />
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Typical Government Portal Output
                    </span>
                  </div>

                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "var(--color-text-primary)",
                      backgroundColor: "#FFFFFF",
                      padding: "1rem",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid rgba(185, 28, 28, 0.15)",
                      marginBottom: "1rem",
                      lineHeight: 1.4,
                    }}
                  >
                    "{comparisons[activeTab].govtStatus}"
                  </div>

                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
                    {comparisons[activeTab].govtMeaning}
                  </p>
                </div>

                <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px stroke rgba(185, 28, 28, 0.1)", color: "var(--color-status-error)", fontSize: "0.8rem", fontWeight: 700 }}>
                  ✕ High Citizen Anxiety & Confusion
                </div>
              </div>

              {/* Right Column: SevaSaathi Plain Language Translation */}
              <div
                style={{
                  padding: "1.75rem",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "var(--color-status-ready-bg)",
                  border: "1.5px solid var(--color-status-ready)",
                  boxShadow: "var(--shadow-sm)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem", color: "var(--color-status-ready)" }}>
                    <CheckCircle2 size={18} />
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      SevaSaathi Plain Language Explanation
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 800,
                      color: "var(--color-text-primary)",
                      backgroundColor: "#FFFFFF",
                      padding: "1rem",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid rgba(46, 111, 64, 0.2)",
                      marginBottom: "1rem",
                      lineHeight: 1.4,
                    }}
                  >
                    "{comparisons[activeTab].sevaStatus}"
                  </div>

                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-primary)", fontWeight: 600, lineHeight: 1.5 }}>
                    {comparisons[activeTab].sevaMeaning}
                  </p>
                </div>

                <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px stroke rgba(46, 111, 64, 0.15)", color: "var(--color-status-ready)", fontSize: "0.85rem", fontWeight: 800, display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <Sparkles size={16} /> {comparisons[activeTab].actionLabel}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export const SolutionSection: React.FC = () => {
  return (
    <section
      style={{
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
        backgroundColor: "var(--color-bg-secondary)",
      }}
    >
      <div className="container-custom">
        <div style={{ maxWidth: "840px", margin: "0 auto", textAlign: "center" }}>
          <span className="eyebrow-badge" style={{ marginBottom: "1rem" }}>
            <Sparkles size={14} /> The SevaSaathi Solution
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              lineHeight: 1.1,
              marginTop: "1rem",
              marginBottom: "1.25rem",
            }}
          >
            Tell us what you need. <br />
            <span style={{ color: "var(--color-brand-primary)" }}>We'll show you what to do next.</span>
          </h2>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.65,
              marginBottom: "2.5rem",
            }}
          >
            SevaSaathi flips bureaucratic complexity upside down. Citizens describe their needs in natural language, prepare documents with clear guidance, and track status with total confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

