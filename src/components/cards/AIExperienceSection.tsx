"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, Globe, Building2 } from "lucide-react";

export const AIExperienceSection: React.FC = () => {
  const [query, setQuery] = useState("I need an income certificate for my daughter's scholarship in Surat.");

  const parsedResult = useMemo(() => {
    const text = query.toLowerCase();

    if (text.includes("ration") || text.includes(" member") || text.includes("રેશન")) {
      return {
        service: "Ration Card Member Addition",
        purpose: "Family Member Registration",
        district: text.includes("ahmedabad") ? "Ahmedabad" : text.includes("vadodara") ? "Vadodara" : "Surat",
        dept: "Food & Civil Supplies Dept",
        confidence: "High Confidence (98%)",
      };
    }

    if (text.includes("senior") || text.includes("pension") || text.includes("વૃદ્ધ")) {
      return {
        service: "Senior Citizen ID & Pension",
        purpose: "Welfare & Pension Benefit",
        district: text.includes("rajkot") ? "Rajkot" : text.includes("gandhinagar") ? "Gandhinagar" : "Surat",
        dept: "Social Defence Dept",
        confidence: "High Confidence (97%)",
      };
    }

    if (text.includes("creamy") || text.includes("ncl") || text.includes("obc")) {
      return {
        service: "Non-Creamy Layer Certificate",
        purpose: "Educational Reservation",
        district: text.includes("ahmedabad") ? "Ahmedabad" : "Surat",
        dept: "Social Justice Dept",
        confidence: "High Confidence (99%)",
      };
    }

    return {
      service: "Income Certificate (આવકનો દાખલો)",
      purpose: text.includes("scholarship") ? "Higher Education Scholarship" : "General Income Proof",
      district: text.includes("ahmedabad") ? "Ahmedabad" : text.includes("vadodara") ? "Vadodara" : "Surat",
      dept: "Revenue Department",
      confidence: "High Confidence (99%)",
    };
  }, [query]);

  return (
    <section
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
            <Sparkles size={14} /> AI Intelligence Engine
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
            maxWidth: "920px",
            margin: "0 auto",
            padding: "clamp(1.5rem, 4vw, 3rem)",
            backgroundColor: "#FFFFFF",
            boxShadow: "var(--shadow-md)",
            borderRadius: "var(--radius-xl)",
            border: "1px solid rgba(217, 98, 30, 0.16)",
          }}
        >
          {/* Input Header */}
          <div style={{ marginBottom: "2rem" }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-brand-primary)", marginBottom: "0.6rem" }}>
              Citizen Prompt Input
            </label>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: "260px",
                  padding: "0.95rem 1.25rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(217, 98, 30, 0.25)",
                  backgroundColor: "var(--color-bg-input)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  outline: "none",
                }}
              />
            </div>
          </div>

          {/* AI Extraction Result Box */}
          <motion.div
            key={parsedResult.service}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "var(--color-bg-primary)",
              border: "1px solid rgba(217, 98, 30, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "1.75rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.875rem", fontWeight: 800, color: "var(--color-brand-primary)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Sparkles size={18} /> Service Intent Recognized
              </span>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, padding: "0.3rem 0.75rem", borderRadius: "var(--radius-pill)", backgroundColor: "var(--color-brand-accent-bg)", color: "var(--color-brand-primary)" }}>
                {parsedResult.confidence}
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              <div style={{ padding: "1.1rem", backgroundColor: "#FFFFFF", borderRadius: "var(--radius-md)", border: "1px solid rgba(217, 98, 30, 0.12)" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-muted)", display: "block", marginBottom: "0.25rem" }}>Target Service</span>
                <strong style={{ fontSize: "1rem", color: "var(--color-text-primary)" }}>{parsedResult.service}</strong>
              </div>
              <div style={{ padding: "1.1rem", backgroundColor: "#FFFFFF", borderRadius: "var(--radius-md)", border: "1px solid rgba(217, 98, 30, 0.12)" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-muted)", display: "block", marginBottom: "0.25rem" }}>Purpose Extracted</span>
                <strong style={{ fontSize: "1rem", color: "var(--color-brand-primary)" }}>{parsedResult.purpose}</strong>
              </div>
              <div style={{ padding: "1.1rem", backgroundColor: "#FFFFFF", borderRadius: "var(--radius-md)", border: "1px solid rgba(217, 98, 30, 0.12)" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-muted)", display: "block", marginBottom: "0.25rem" }}>Jurisdiction District</span>
                <strong style={{ fontSize: "1rem", color: "var(--color-text-primary)" }}>{parsedResult.district}</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

