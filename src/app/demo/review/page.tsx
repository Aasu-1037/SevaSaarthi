"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { CheckCircle2, Sparkles, Edit3, ArrowRight, ShieldCheck } from "lucide-react";

export default function ApplicationReviewPage() {
  const router = useRouter();

  const handleFinalSubmit = () => {
    router.push("/demo/submitted");
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)" }}>
      <Navbar />

      <section style={{ paddingTop: "clamp(2.5rem, 5vw, 4rem)", paddingBottom: "var(--space-section)" }}>
        <div className="container-custom" style={{ maxWidth: "860px" }}>
          {/* Header */}
          <div style={{ marginBottom: "2.5rem" }}>
            <span className="eyebrow-badge">Step 5 — Final Review</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h1)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                marginTop: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              Check everything once.
            </h1>
            <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)" }}>
              Review your details before mock submission to the Digital Gujarat system.
            </p>
          </div>

          {/* AI Suggestion Consistency Card */}
          <div
            style={{
              padding: "1.25rem 1.5rem",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--color-bg-tertiary)",
              border: "1px solid rgba(232, 114, 42, 0.25)",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.85rem",
              marginBottom: "2rem",
            }}
          >
            <Sparkles size={22} color="var(--color-brand-primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
            <div>
              <strong style={{ fontSize: "0.95rem", color: "var(--color-brand-primary)", display: "block" }}>
                AI Pre-Submission Consistency Check
              </strong>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-primary)", marginTop: "0.25rem" }}>
                "Your stated annual income of ₹1,20,000 matches typical scholarship threshold requirements for Surat district. All 3 required documents are validly attached."
              </p>
            </div>
          </div>

          {/* Sections Review */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
            {/* Section 1: Personal Details */}
            <div className="spotlight-card" style={{ padding: "1.75rem", backgroundColor: "var(--color-bg-card)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--color-text-primary)" }}>Personal Details</h3>
                <Link href="/demo/application" style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-brand-primary)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <Edit3 size={14} /> Edit
                </Link>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", fontSize: "0.95rem" }}>
                <div><span style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", display: "block" }}>Name</span> <strong>Demo Citizen</strong></div>
                <div><span style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", display: "block" }}>District</span> <strong>Surat</strong></div>
                <div><span style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", display: "block" }}>DOB</span> <strong>15 May 1998</strong></div>
              </div>
            </div>

            {/* Section 2: Purpose */}
            <div className="spotlight-card" style={{ padding: "1.75rem", backgroundColor: "var(--color-bg-card)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--color-text-primary)" }}>Purpose & Education</h3>
                <Link href="/demo/application" style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-brand-primary)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <Edit3 size={14} /> Edit
                </Link>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", fontSize: "0.95rem" }}>
                <div><span style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", display: "block" }}>Purpose</span> <strong>Higher Education Scholarship</strong></div>
                <div><span style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", display: "block" }}>Level</span> <strong>Undergraduate (B.Tech)</strong></div>
              </div>
            </div>

            {/* Section 3: Income */}
            <div className="spotlight-card" style={{ padding: "1.75rem", backgroundColor: "var(--color-bg-card)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--color-text-primary)" }}>Income Information</h3>
                <Link href="/demo/application" style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-brand-primary)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <Edit3 size={14} /> Edit
                </Link>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", fontSize: "0.95rem" }}>
                <div><span style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", display: "block" }}>Annual Income</span> <strong style={{ color: "var(--color-brand-primary)" }}>₹1,20,000 / year</strong></div>
                <div><span style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", display: "block" }}>Source</span> <strong>Agriculture & Small Business</strong></div>
              </div>
            </div>
          </div>

          {/* Final Submit Button */}
          <button
            onClick={handleFinalSubmit}
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center", padding: "1.1rem", fontSize: "1.1rem" }}
          >
            <span>Submit Application (Mock)</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
