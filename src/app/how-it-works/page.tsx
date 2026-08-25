"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { MessageSquare, FileCheck, Send, BarChart2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Natural Language Discovery",
      desc: "Instead of searching through hundreds of official scheme categories, citizens type or speak what they need in Gujarati, Hindi, or English. AI maps intent directly to the correct Digital Gujarat service.",
      icon: <MessageSquare size={28} color="var(--color-brand-primary)" />,
    },
    {
      num: "02",
      title: "Document Readiness Assurance",
      desc: "Before filling any application form, citizens view a clear checklist of required documents, why each document is needed, and alternative acceptable document options.",
      icon: <FileCheck size={28} color="var(--color-brand-warm)" />,
    },
    {
      num: "03",
      title: "Streamlined Citizen Application",
      desc: "A clean 5-step application replaces government jargon with straightforward questions, pre-submission consistency checks, and auto-saved progress.",
      icon: <Send size={28} color="var(--color-brand-secondary)" />,
    },
    {
      num: "04",
      title: "Plain-Language Status & Recovery",
      desc: "Confusing statuses like 'Returned under Clause 12' are translated into simple explanations. If action is required, SevaSaathi guides step-by-step document correction.",
      icon: <BarChart2 size={28} color="var(--color-status-info)" />,
    },
  ];

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)" }}>
      <Navbar />

      <section style={{ paddingTop: "clamp(3rem, 6vw, 5rem)", paddingBottom: "var(--space-section)" }}>
        <div className="container-custom" style={{ maxWidth: "900px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="eyebrow-badge">Product Principle</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-display)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                marginTop: "1rem",
                marginBottom: "1.25rem",
                lineHeight: 1.05,
              }}
            >
              Don't make citizens understand bureaucracy. <br />
              <span style={{ color: "var(--color-brand-primary)" }}>Make the process understand the citizen.</span>
            </h1>
            <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)", maxWidth: "680px", margin: "0 auto" }}>
              SevaSaathi acts as an intelligent guidance layer sitting between Gujarat citizens and digital government workflows.
            </p>
          </div>

          {/* Steps Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="spotlight-card"
                style={{
                  padding: "2rem",
                  backgroundColor: "var(--color-bg-card)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", backgroundColor: "var(--color-bg-tertiary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {s.icon}
                  </div>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 900, color: "var(--color-brand-primary)", opacity: 0.2 }}>
                    {s.num}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center" }}>
            <Link href="/demo/start" className="btn-primary" style={{ padding: "1.1rem 2.5rem", fontSize: "1.1rem" }}>
              <span>Try Interactive Demo</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
