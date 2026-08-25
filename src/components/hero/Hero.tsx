"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Search, FileText, Clock, Building2, HelpCircle } from "lucide-react";
import { useLanguage } from "@/components/language/LanguageContext";

interface ServiceMatchResult {
  id: string;
  serviceTitle: string;
  dept: string;
  documentsCount: string;
  estimatedResolution: string;
  officialFee: string;
  confidence: string;
  purposeExtracted: string;
  ctaText: string;
  ctaLink: string;
}

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState("Income Certificate for daughter's scholarship in Surat");

  // Sample quick prompt chips
  const samplePrompts = [
    { label: "Income Certificate", prompt: "Income Certificate for daughter's scholarship in Surat" },
    { label: "Ration Card Member", prompt: "Add new family member to Ration Card in Ahmedabad" },
    { label: "Senior Citizen Card", prompt: "Apply for Senior Citizen ID and pension support" },
    { label: "Non-Creamy Layer", prompt: "Non-Creamy Layer Certificate for college admission" },
  ];

  // Dynamic Real-time AI Intent Parsing Engine
  const intentResult: ServiceMatchResult = useMemo(() => {
    const text = query.toLowerCase();

    if (text.includes("ration") || text.includes("રેશન") || text.includes("રાશન") || text.includes("member")) {
      return {
        id: "ration_card",
        serviceTitle: "Ration Card Member Addition (રેશન કાર્ડ સહસભ્યો)",
        dept: "Food & Civil Supplies Department, Gujarat",
        documentsCount: "3 Documents Required",
        estimatedResolution: "3 Business Days",
        officialFee: "₹10 (Government Fee)",
        confidence: "High Match (98%)",
        purposeExtracted: "Add Family Member / Address Transfer",
        ctaText: "Start Ration Card Flow",
        ctaLink: "/demo/start",
      };
    }

    if (text.includes("senior") || text.includes("pension") || text.includes("વૃદ્ધ") || text.includes("પેન્શન") || text.includes("पेंशन")) {
      return {
        id: "senior_pension",
        serviceTitle: "Senior Citizen Card & Pension Scheme (નિરાધાર વૃદ્ધ સહાય)",
        dept: "Social Defence Department, Gujarat",
        documentsCount: "3 Documents Required",
        estimatedResolution: "5 Business Days",
        officialFee: "₹0 (Free Government Welfare)",
        confidence: "High Match (97%)",
        purposeExtracted: "Senior Pension & Welfare Identification",
        ctaText: "Explore Pension Flow",
        ctaLink: "/demo/start",
      };
    }

    if (text.includes("creamy") || text.includes("ncl") || text.includes("obc") || text.includes("sebc") || text.includes("બિન-ક્રીમીલેયર")) {
      return {
        id: "non_creamy_layer",
        serviceTitle: "Non-Creamy Layer Certificate (બિન-ક્રીમીલેયર પ્રમાણપત્ર)",
        dept: "Social Justice & Empowerment Department, Gujarat",
        documentsCount: "4 Documents Required",
        estimatedResolution: "4 Business Days",
        officialFee: "₹20 (Government Charge)",
        confidence: "High Match (99%)",
        purposeExtracted: "OBC / SEBC Education & Job Concession",
        ctaText: "Start Non-Creamy Layer Flow",
        ctaLink: "/demo/start",
      };
    }

    // Default / Income Certificate match
    return {
      id: "income_certificate",
      serviceTitle: "Income Certificate (આવકનો દાખલો)",
      dept: "Revenue Department, Gujarat",
      documentsCount: "4 Documents Ready",
      estimatedResolution: "2 Business Days",
      officialFee: "₹20 (Nominal Charge)",
      confidence: "High Match (99%)",
      purposeExtracted: "Higher Education Scholarship & Concession",
      ctaText: "Start Guided Service",
      ctaLink: "/demo/start",
    };
  }, [query]);

  return (
    <section
      style={{
        position: "relative",
        paddingTop: "clamp(4rem, 7vw, 6.5rem)",
        paddingBottom: "clamp(4.5rem, 8vw, 7rem)",
        backgroundColor: "var(--color-bg-hero)",
        borderBottom: "1px solid rgba(217, 98, 30, 0.14)",
        overflow: "hidden",
      }}
    >
      {/* Soft Ambient Background Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 50% 15%, rgba(217, 98, 30, 0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Main Header */}
        <div style={{ maxWidth: "880px", margin: "0 auto", textAlign: "center", marginBottom: "3.25rem" }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: "1.25rem" }}
          >
            <span className="eyebrow-badge">
              <Sparkles size={14} /> An Independent Citizen-First Prototype
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-hero)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "var(--color-text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            {t("heroTitle")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
              maxWidth: "740px",
              margin: "0 auto",
            }}
          >
            {t("heroSub")}
          </motion.p>
        </div>

        {/* Live Citizen Intent Search & Dynamic AI Recognition Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ maxWidth: "940px", margin: "0 auto" }}
        >
          <div
            className="spotlight-card"
            style={{
              padding: "clamp(1.5rem, 3.5vw, 2.5rem)",
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-xl)",
              boxShadow: "0 22px 50px -15px rgba(217, 98, 30, 0.14), 0 4px 12px rgba(28, 25, 23, 0.04)",
              border: "1.5px solid rgba(217, 98, 30, 0.22)",
            }}
          >
            {/* Search Label & Language Note */}
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-brand-primary)" }}>
                  Describe what service or document you need
                </label>
                <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--color-text-muted)" }}>
                  Supports English, ગુજરાતી & हिन्दी
                </span>
              </div>

              {/* Real-time Search Input */}
              <div style={{ position: "relative", marginBottom: "1rem" }}>
                <div style={{ position: "absolute", left: "1.25rem", top: "50%", transform: "translateY(-50%)", color: "var(--color-brand-primary)" }}>
                  <Search size={22} />
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. Income Certificate for scholarship or Ration card update..."
                  style={{
                    width: "100%",
                    padding: "1.1rem 1.25rem 1.1rem 3.5rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid rgba(217, 98, 30, 0.25)",
                    backgroundColor: "var(--color-bg-input)",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    outline: "none",
                    boxShadow: "inset 0 2px 4px rgba(28, 25, 23, 0.03)",
                  }}
                />
              </div>

              {/* Interactive Preset Chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-text-muted)", marginRight: "0.25rem" }}>
                  Try instant example:
                </span>
                {samplePrompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setQuery(p.prompt)}
                    style={{
                      padding: "0.4rem 0.9rem",
                      borderRadius: "var(--radius-pill)",
                      border: query === p.prompt ? "1px solid var(--color-brand-primary)" : "1px solid rgba(217, 98, 30, 0.18)",
                      backgroundColor: query === p.prompt ? "var(--color-brand-accent-bg)" : "var(--color-bg-primary)",
                      color: query === p.prompt ? "var(--color-brand-primary)" : "var(--color-text-secondary)",
                      fontSize: "0.825rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic AI Intent Resolution Preview Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={intentResult.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                style={{
                  backgroundColor: "var(--color-bg-primary)",
                  border: "1px solid rgba(217, 98, 30, 0.2)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        backgroundColor: "var(--color-brand-accent-bg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-brand-primary)",
                      }}
                    >
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--color-text-primary)" }}>
                        AI Intent Resolution: {intentResult.serviceTitle}
                      </h4>
                      <p style={{ fontSize: "0.825rem", color: "var(--color-text-muted)" }}>
                        {intentResult.dept}
                      </p>
                    </div>
                  </div>

                  <span style={{ fontSize: "0.8rem", fontWeight: 700, padding: "0.35rem 0.85rem", borderRadius: "var(--radius-pill)", backgroundColor: "var(--color-status-ready-bg)", color: "var(--color-status-ready)", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                    <CheckCircle2 size={14} /> {intentResult.confidence}
                  </span>
                </div>

                {/* Grid of Extracted Info */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ padding: "1rem", backgroundColor: "#FFFFFF", borderRadius: "var(--radius-md)", border: "1px solid rgba(217, 98, 30, 0.12)" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-text-muted)", display: "block", marginBottom: "0.25rem" }}>
                      Documents Checklist
                    </span>
                    <strong style={{ fontSize: "0.95rem", color: "var(--color-text-primary)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <FileText size={16} color="var(--color-brand-primary)" /> {intentResult.documentsCount}
                    </strong>
                  </div>

                  <div style={{ padding: "1rem", backgroundColor: "#FFFFFF", borderRadius: "var(--radius-md)", border: "1px solid rgba(217, 98, 30, 0.12)" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-text-muted)", display: "block", marginBottom: "0.25rem" }}>
                      Estimated Resolution
                    </span>
                    <strong style={{ fontSize: "0.95rem", color: "var(--color-text-primary)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <Clock size={16} color="var(--color-brand-warm)" /> {intentResult.estimatedResolution}
                    </strong>
                  </div>

                  <div style={{ padding: "1rem", backgroundColor: "#FFFFFF", borderRadius: "var(--radius-md)", border: "1px solid rgba(217, 98, 30, 0.12)" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-text-muted)", display: "block", marginBottom: "0.25rem" }}>
                      Official Fee
                    </span>
                    <strong style={{ fontSize: "0.95rem", color: "var(--color-status-ready)" }}>
                      {intentResult.officialFee}
                    </strong>
                  </div>
                </div>

                {/* Primary Action Button */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <ShieldCheck size={16} color="var(--color-brand-primary)" /> 100% Synthetic Demo Environment — Zero Aadhaar Required
                  </span>

                  <Link href={intentResult.ctaLink} className="btn-primary">
                    <span>{intentResult.ctaText}</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Telemetry Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            marginTop: "3.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            maxWidth: "940px",
            margin: "3.5rem auto 0 auto",
          }}
        >
          <div style={{ padding: "1.25rem", backgroundColor: "#FFFFFF", borderRadius: "var(--radius-lg)", border: "1px solid rgba(217, 98, 30, 0.14)", textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
            <h3 style={{ fontSize: "1.85rem", fontWeight: 900, color: "var(--color-brand-primary)", lineHeight: 1.1 }}>50+</h3>
            <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-text-secondary)", marginTop: "0.25rem" }}>Digital Gujarat Services Mapped</p>
          </div>

          <div style={{ padding: "1.25rem", backgroundColor: "#FFFFFF", borderRadius: "var(--radius-lg)", border: "1px solid rgba(217, 98, 30, 0.14)", textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
            <h3 style={{ fontSize: "1.85rem", fontWeight: 900, color: "var(--color-brand-primary)", lineHeight: 1.1 }}>100%</h3>
            <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-text-secondary)", marginTop: "0.25rem" }}>Plain Language Explanations</p>
          </div>

          <div style={{ padding: "1.25rem", backgroundColor: "#FFFFFF", borderRadius: "var(--radius-lg)", border: "1px solid rgba(217, 98, 30, 0.14)", textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
            <h3 style={{ fontSize: "1.85rem", fontWeight: 900, color: "var(--color-brand-primary)", lineHeight: 1.1 }}>3</h3>
            <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-text-secondary)", marginTop: "0.25rem" }}>Supported Languages (EN / GU / HI)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


