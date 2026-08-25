"use client";

import React, { useState, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Search, FileText, Clock, Building2, HelpCircle, Layout, Eye } from "lucide-react";
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
  const [activeTab, setActiveTab] = useState<"INTENT_ENGINE" | "UI_PREVIEW">("INTENT_ENGINE");

  // Scroll Parallax Hooks
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yGlow = useTransform(scrollY, [0, 800], [0, -120]);
  const yCard = useTransform(scrollY, [0, 800], [0, -40]);
  const yFloatingBadge = useTransform(scrollY, [0, 800], [0, -70]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0.85]);

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
      ref={containerRef}
      style={{
        position: "relative",
        paddingTop: "clamp(4.5rem, 8vw, 7.5rem)",
        paddingBottom: "clamp(5rem, 9vw, 8rem)",
        backgroundColor: "var(--color-bg-hero)",
        borderBottom: "1px solid rgba(217, 98, 30, 0.16)",
        overflow: "hidden",
      }}
    >
      {/* Scroll-Linked Ambient Parallax Glow Orbs */}
      <motion.div
        style={{
          y: yGlow,
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90vw",
          maxWidth: "1000px",
          height: "500px",
          backgroundImage: "radial-gradient(ellipse at center, rgba(217, 98, 30, 0.12) 0%, rgba(230, 138, 0, 0.05) 45%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Floating Top Badge with Pulse Indicator */}
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", marginBottom: "3.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: "1.5rem" }}
          >
            <span className="eyebrow-badge shimmer-border">
              <span className="pulse-dot" />
              <span>Independent Citizen Prototype</span>
            </span>
          </motion.div>

          {/* Kinetic Linear Gradient Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-hero)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.035em",
              marginBottom: "1.5rem",
            }}
          >
            Government services, <br />
            <span className="text-gradient-hero">without the confusion.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.65,
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            {t("heroSub")}
          </motion.p>
        </div>

        {/* View Mode Toggle: Live Engine vs Visual Dashboard Preview */}
        <motion.div
          style={{ y: yFloatingBadge, maxWidth: "340px", margin: "0 auto 2rem auto" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <div
            style={{
              display: "flex",
              padding: "0.35rem",
              borderRadius: "var(--radius-pill)",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(217, 98, 30, 0.2)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <button
              onClick={() => setActiveTab("INTENT_ENGINE")}
              style={{
                flex: 1,
                padding: "0.5rem 1rem",
                borderRadius: "var(--radius-pill)",
                border: "none",
                backgroundColor: activeTab === "INTENT_ENGINE" ? "var(--color-brand-primary)" : "transparent",
                color: activeTab === "INTENT_ENGINE" ? "#FFFFFF" : "var(--color-text-secondary)",
                fontSize: "0.825rem",
                fontWeight: 800,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.4rem",
                transition: "all 0.25s ease",
              }}
            >
              <Sparkles size={15} /> Live AI Engine
            </button>

            <button
              onClick={() => setActiveTab("UI_PREVIEW")}
              style={{
                flex: 1,
                padding: "0.5rem 1rem",
                borderRadius: "var(--radius-pill)",
                border: "none",
                backgroundColor: activeTab === "UI_PREVIEW" ? "var(--color-brand-primary)" : "transparent",
                color: activeTab === "UI_PREVIEW" ? "#FFFFFF" : "var(--color-text-secondary)",
                fontSize: "0.825rem",
                fontWeight: 800,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.4rem",
                transition: "all 0.25s ease",
              }}
            >
              <Layout size={15} /> UI Visual Preview
            </button>
          </div>
        </motion.div>

        {/* Parallax Hero Card Wrapper */}
        <motion.div
          style={{ y: yCard, opacity: opacityFade, maxWidth: "960px", margin: "0 auto" }}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div
            className="glass-panel"
            style={{
              padding: "clamp(1.5rem, 3.8vw, 2.75rem)",
              borderRadius: "var(--radius-xl)",
              boxShadow: "0 25px 60px -15px rgba(217, 98, 30, 0.16), 0 4px 14px rgba(28, 25, 23, 0.04)",
            }}
          >
            {activeTab === "INTENT_ENGINE" ? (
              /* TAB 1: Real-Time AI Intent Search Engine */
              <div>
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                    <label style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-brand-primary)" }}>
                      Describe what service or document you need
                    </label>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-text-muted)" }}>
                      Supports English, ગુજરાતી & हिन्दी
                    </span>
                  </div>

                  {/* Search Bar Input */}
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
                        backgroundColor: "#FFFFFF",
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        outline: "none",
                        boxShadow: "inset 0 2px 4px rgba(28, 25, 23, 0.03)",
                      }}
                    />
                  </div>

                  {/* Preset Chips */}
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

                {/* AI Resolution Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={intentResult.id}
                    initial={{ opacity: 0, scale: 0.98, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -8 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      backgroundColor: "var(--color-bg-primary)",
                      border: "1px solid rgba(217, 98, 30, 0.22)",
                      borderRadius: "var(--radius-lg)",
                      padding: "1.5rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                        <div
                          style={{
                            width: "38px",
                            height: "38px",
                            borderRadius: "12px",
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
            ) : (
              /* TAB 2: Generated High-Res UI Dashboard Preview Image */
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ textAlign: "center" }}
              >
                <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1.5px solid rgba(217, 98, 30, 0.2)", boxShadow: "var(--shadow-lg)", marginBottom: "1.5rem" }}>
                  <Image
                    src="/images/hero_preview.png"
                    alt="SevaSaathi Digital Citizen Dashboard Visual Preview"
                    width={900}
                    height={480}
                    style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                    priority
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                  <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-text-primary)" }}>
                    Award-Winning Citizen Service Interface Prototype
                  </span>
                  <Link href="/demo/start" className="btn-primary">
                    <span>Try Interactive Application Flow</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Telemetry Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            marginTop: "3.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            maxWidth: "960px",
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



