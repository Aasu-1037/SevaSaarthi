"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ShieldCheck, Heart, Sparkles, ArrowRight, Layers, Lock, Database } from "lucide-react";

export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)" }}>
      <Navbar />

      <section style={{ paddingTop: "clamp(3rem, 6vw, 5rem)", paddingBottom: "var(--space-section)" }}>
        <div className="container-custom" style={{ maxWidth: "860px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="eyebrow-badge">About SevaSaathi</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-display)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                marginTop: "1rem",
                marginBottom: "1.25rem",
              }}
            >
              Independent Citizen-First Prototype
            </h1>
            <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)", maxWidth: "660px", margin: "0 auto" }}>
              Demonstrating how an AI guidance layer can simplify Digital Gujarat services for citizens with limited digital literacy.
            </p>
          </div>

          {/* Mission Card */}
          <div
            className="spotlight-card"
            style={{
              padding: "clamp(2rem, 4vw, 3rem)",
              backgroundColor: "var(--color-bg-card)",
              marginBottom: "3rem",
              borderLeft: "5px solid var(--color-brand-primary)",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "1rem" }}>
              Product Mission & Positioning
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--color-text-secondary)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
              Every year, millions of citizens in Gujarat apply for essential documents like income certificates for scholarships and fee concessions. However, complex official terminology, unclear document requirements, and unexplained application rejections create widespread anxiety.
            </p>
            <p style={{ fontSize: "1.05rem", color: "var(--color-text-primary)", fontWeight: 700, lineHeight: 1.65 }}>
              SevaSaathi proves that AI-powered clarity can sit on top of government workflows — turning bureaucracy into a guided, supportive experience.
            </p>
          </div>

          {/* Safety & Disclosure Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
            <div style={{ padding: "1.75rem", borderRadius: "var(--radius-xl)", backgroundColor: "var(--color-bg-tertiary)" }}>
              <ShieldCheck size={28} color="var(--color-brand-primary)" style={{ marginBottom: "0.75rem" }} />
              <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "0.4rem" }}>
                Not Official Government
              </h4>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
                Independent hackathon prototype, not affiliated with Gujarat State Government.
              </p>
            </div>

            <div style={{ padding: "1.75rem", borderRadius: "var(--radius-xl)", backgroundColor: "var(--color-bg-tertiary)" }}>
              <Database size={28} color="var(--color-brand-primary)" style={{ marginBottom: "0.75rem" }} />
              <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "0.4rem" }}>
                Synthetic Data Only
              </h4>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
                Operates exclusively with simulated demo data and mock backend APIs.
              </p>
            </div>

            <div style={{ padding: "1.75rem", borderRadius: "var(--radius-xl)", backgroundColor: "var(--color-bg-tertiary)" }}>
              <Lock size={28} color="var(--color-brand-primary)" style={{ marginBottom: "0.75rem" }} />
              <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "0.4rem" }}>
                Zero PII Storage
              </h4>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
                No real Aadhaar, PAN, OTP, or payment credentials requested or saved.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/demo/start" className="btn-primary" style={{ padding: "1.1rem 2.5rem", fontSize: "1.1rem" }}>
              <span>Launch Demo</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
