"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Clock, ShieldCheck, FileText } from "lucide-react";
import { DotGrid, ConcentricRings, OrganicBlob } from "../decorations/SvgDecorations";
import { fadeUp, staggerContainer } from "@/lib/utils/animations";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll transforms
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const yCard1 = useTransform(scrollYProgress, [0, 1], [0, -65]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yCard3 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const rotateRing = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        paddingTop: "clamp(3rem, 7vw, 6rem)",
        paddingBottom: "clamp(4rem, 8vw, 8rem)",
        backgroundColor: "var(--color-bg-hero)",
        overflow: "hidden",
      }}
    >
      <DotGrid opacity={0.12} />
      <OrganicBlob color="var(--color-bg-tertiary)" opacity={0.8} />

      {/* Parallax Concentric Rings Background */}
      <motion.div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          rotate: rotateRing,
          pointerEvents: "none",
          opacity: 0.7,
        }}
      >
        <ConcentricRings size={450} />
      </motion.div>

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "920px", y: yTitle, opacity: opacityFade }}
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} style={{ marginBottom: "1.25rem" }}>
            <span className="eyebrow-badge">
              An independent citizen-service prototype
            </span>
          </motion.div>

          {/* Huge Title */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-hero)",
              fontWeight: 800,
              lineHeight: 0.96,
              letterSpacing: "-0.03em",
              color: "var(--color-text-primary)",
              marginBottom: "1.75rem",
            }}
          >
            Government services, <br />
            <span style={{ color: "var(--color-brand-primary)" }}>without the confusion.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-secondary)",
              maxWidth: "680px",
              lineHeight: 1.6,
              marginBottom: "2.5rem",
            }}
          >
            Tell us what you need. SevaSaathi turns complicated processes into clear steps, explains what your status means, and shows you what to do next.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}
          >
            <Link href="/demo/start" className="btn-primary" style={{ padding: "1rem 2.2rem", fontSize: "1.05rem" }}>
              <span>Start a service</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/demo" className="btn-secondary" style={{ padding: "1rem 2.2rem", fontSize: "1.05rem" }}>
              <span>Try the demo</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Layered Cards Composition with Parallax Motion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: "4rem",
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          {/* Card 1: Floating Document Card */}
          <motion.div
            style={{
              y: yCard1,
              padding: "1.5rem",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid rgba(232, 114, 42, 0.15)",
              backgroundColor: "var(--color-bg-card)",
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="spotlight-card"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  backgroundColor: "var(--color-bg-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-brand-primary)",
                }}
              >
                <FileText size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text-primary)" }}>Income Certificate</h4>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>Digital Gujarat Service</p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem", backgroundColor: "var(--color-bg-tertiary)", borderRadius: "var(--radius-md)" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-text-secondary)" }}>Documents Checklist</span>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-status-ready)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                <CheckCircle2 size={14} /> 4 of 4 Ready
              </span>
            </div>
          </motion.div>

          {/* Card 2: Application Status Card */}
          <motion.div
            style={{
              y: yCard2,
              padding: "1.5rem",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid rgba(94, 158, 163, 0.3)",
              backgroundColor: "var(--color-bg-card)",
            }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="spotlight-card"
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-text-muted)" }}>Application Status</span>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: "var(--radius-pill)", backgroundColor: "rgba(94, 158, 163, 0.15)", color: "var(--color-status-info)" }}>
                UNDER VERIFICATION
              </span>
            </div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
              App ID: DG-DEMO-48291
            </h4>
            <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Clock size={15} color="var(--color-status-info)" /> Estimated resolution: 2 business days
            </p>
          </motion.div>

          {/* Card 3: AI Explanation Bubble */}
          <motion.div
            style={{
              y: yCard3,
              padding: "1.5rem",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid rgba(232, 114, 42, 0.2)",
              backgroundColor: "var(--color-bg-secondary)",
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="spotlight-card"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Sparkles size={18} color="var(--color-brand-primary)" />
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-brand-primary)" }}>SevaSaathi AI Explanation</span>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-primary)", fontWeight: 600, marginBottom: "0.5rem" }}>
              "Your application has reached the review stage. No action is needed from you right now."
            </p>
            <span style={{ fontSize: "0.8rem", color: "var(--color-status-ready)", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <ShieldCheck size={14} /> You're on track
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
