"use client";

import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/utils/animations";

export const ProblemSection: React.FC = () => {
  const confusingTerms = [
    {
      govt: "Application Status: Verification Pending by Mamlatdar Office",
      citizen: "Is my document accepted or is it stuck somewhere?",
    },
    {
      govt: "Affidavit along with Self-Declaration Form 16-A required",
      citizen: "Which exact stamp paper do I buy, and who signs it?",
    },
    {
      govt: "Application Returned under Rule 4(B) for Revision",
      citizen: "Why was it rejected, and what document do I re-upload?",
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
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: "880px", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: "1rem" }}>
            <span className="eyebrow-badge">The Problem</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--color-text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            The information exists. <br />
            <span style={{ color: "var(--color-brand-secondary)" }}>The clarity doesn't.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Government websites give you information. Citizens need answers. Here is what happens today when citizens try to use official digital portals:
          </motion.p>
        </motion.div>

        {/* Confusing Terminology Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {confusingTerms.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="spotlight-card"
              style={{
                padding: "2rem",
                backgroundColor: "var(--color-bg-card)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem", color: "var(--color-status-error)" }}>
                  <AlertCircle size={18} />
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>Official Language</span>
                </div>
                <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "1.5rem", fontStyle: "italic" }}>
                  "{item.govt}"
                </p>
              </div>

              <div style={{ paddingTop: "1rem", borderTop: "1px stroke rgba(232, 114, 42, 0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", color: "var(--color-brand-primary)" }}>
                  <HelpCircle size={18} />
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>What Citizen Asks</span>
                </div>
                <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-text-primary)" }}>
                  "{item.citizen}"
                </p>
              </div>
            </motion.div>
          ))}
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
        position: "relative",
      }}
    >
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: "1rem" }}>
            <span className="eyebrow-badge">The Solution</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display)",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "var(--color-text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            Tell us what you need. <br />
            <span style={{ color: "var(--color-brand-primary)" }}>We'll show you what to do next.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.65,
              marginBottom: "2.5rem",
            }}
          >
            SevaSaathi flips bureaucratic complexity upside down. Instead of memorizing official rules and scheme names, citizens describe their needs in natural language, upload documents with clarity, and receive plain-language guidance every step of the way.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
