"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, FileCheck, Send, BarChart2, RefreshCw, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

interface JourneyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  ctaText: string;
  ctaLink: string;
  keyHighlight: string;
}

export const ZigZagSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps: JourneyStep[] = [
    {
      step: "01",
      title: "Tell Us What You Need",
      subtitle: "Natural Language Intent Matching",
      description: "Describe your requirement in Gujarati, Hindi, or English. AI identifies the exact Digital Gujarat service without forcing you to memorize department names.",
      icon: <MessageSquare size={24} color="var(--color-brand-primary)" />,
      ctaText: "Try Service Discovery",
      ctaLink: "/demo/start",
      keyHighlight: "No category browsing required",
    },
    {
      step: "02",
      title: "Get Your Documents Ready",
      subtitle: "Pre-Flight Document Readiness Check",
      description: "Know exactly which documents are required before you begin. SevaSaathi explains why each document is needed and suggests valid alternative proofs.",
      icon: <FileCheck size={24} color="var(--color-brand-warm)" />,
      ctaText: "Check Document Readiness",
      ctaLink: "/demo/documents",
      keyHighlight: "Zero surprise rejections at submission",
    },
    {
      step: "03",
      title: "Apply Without Confusion",
      subtitle: "Streamlined 5-Step Citizen Application",
      description: "Fill a clean, simplified form designed for first-time citizens. No repetitive jargon, instant field validation, and pre-submission consistency checks.",
      icon: <Send size={24} color="var(--color-brand-secondary)" />,
      ctaText: "Start Sample Application",
      ctaLink: "/demo/application",
      keyHighlight: "Pre-filled forms & clear instructions",
    },
    {
      step: "04",
      title: "Understand Your Status",
      subtitle: "Plain Language Application Telemetry",
      description: "No more wondering what 'Inward Stage 2' means. Get plain-language status updates, officer review timelines, and expected resolution dates.",
      icon: <BarChart2 size={24} color="var(--color-status-info)" />,
      ctaText: "Track Status Demo",
      ctaLink: "/demo/status",
      keyHighlight: "Clear, transparent timeline tracking",
    },
    {
      step: "05",
      title: "Fix Problems & Continue",
      subtitle: "Guided Recovery & Re-submission",
      description: "If an application requires revision, SevaSaathi explains the exact issue clearly and guides you step-by-step to re-upload and resubmit.",
      icon: <RefreshCw size={24} color="var(--color-brand-soft)" />,
      ctaText: "View Recovery Journey",
      ctaLink: "/demo/recovery",
      keyHighlight: "No dead-end rejections",
    },
  ];

  const currentStep = steps[activeStepIndex];

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
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow-badge">The Citizen Journey</span>
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
            Five simple steps from need to certificate
          </h2>
        </div>

        {/* Step Indicator Tabs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "0.75rem",
            maxWidth: "960px",
            margin: "0 auto 2.5rem auto",
          }}
        >
          {steps.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setActiveStepIndex(idx)}
              style={{
                padding: "1rem 0.75rem",
                borderRadius: "var(--radius-lg)",
                border: activeStepIndex === idx ? "2px solid var(--color-brand-primary)" : "1px solid rgba(217, 98, 30, 0.15)",
                backgroundColor: activeStepIndex === idx ? "var(--color-brand-accent-bg)" : "#FFFFFF",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: activeStepIndex === idx ? "var(--shadow-sm)" : "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 900,
                  color: activeStepIndex === idx ? "var(--color-brand-primary)" : "var(--color-text-muted)",
                  display: "block",
                  marginBottom: "0.2rem",
                }}
              >
                STEP {s.step}
              </span>
              <strong
                style={{
                  fontSize: "0.85rem",
                  color: activeStepIndex === idx ? "var(--color-brand-primary)" : "var(--color-text-primary)",
                  display: "block",
                  lineHeight: 1.2,
                }}
              >
                {s.title}
              </strong>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.step}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="spotlight-card"
              style={{
                padding: "clamp(2rem, 4vw, 3rem)",
                backgroundColor: "#FFFFFF",
                borderRadius: "var(--radius-xl)",
                boxShadow: "var(--shadow-md)",
                border: "1.5px solid rgba(217, 98, 30, 0.2)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2.5rem",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      backgroundColor: "var(--color-brand-accent-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {currentStep.icon}
                  </div>
                  <div>
                    <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--color-brand-primary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Stage {currentStep.step} of 05
                    </span>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text-muted)" }}>
                      {currentStep.subtitle}
                    </h4>
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h1)",
                    fontWeight: 800,
                    color: "var(--color-text-primary)",
                    marginBottom: "1rem",
                    lineHeight: 1.15,
                  }}
                >
                  {currentStep.title}
                </h3>

                <p
                  style={{
                    fontSize: "var(--text-body-lg)",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.65,
                    marginBottom: "2rem",
                  }}
                >
                  {currentStep.description}
                </p>

                <Link href={currentStep.ctaLink} className="btn-primary">
                  <span>{currentStep.ctaText}</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Right Context Feature Card with Image */}
              <div
                style={{
                  backgroundColor: "var(--color-bg-primary)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.5rem",
                  border: "1px solid rgba(217, 98, 30, 0.16)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid rgba(217, 98, 30, 0.15)", marginBottom: "1.25rem", boxShadow: "var(--shadow-sm)" }}>
                  <Image
                    src="/images/journey_preview.png"
                    alt="5-Step Citizen Journey Infographic Preview"
                    width={400}
                    height={260}
                    style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                  />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-status-ready)", marginBottom: "0.5rem" }}>
                  <CheckCircle2 size={18} />
                  <span style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Key Benefit
                  </span>
                </div>

                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
                  {currentStep.keyHighlight}
                </h4>

                <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                  SevaSaathi ensures citizens are never stuck in bureaucratic dead-ends. Every step provides plain-language instructions and clear timelines.
                </p>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

