"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { CheckCircle2, Clock, ArrowRight, ShieldCheck, FileText } from "lucide-react";

export default function ApplicationSubmittedPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)" }}>
      <Navbar />

      <section style={{ paddingTop: "clamp(3rem, 6vw, 5rem)", paddingBottom: "var(--space-section)" }}>
        <div className="container-custom" style={{ maxWidth: "760px", textAlign: "center" }}>
          {/* Success Animated Badge */}
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              backgroundColor: "rgba(107, 158, 125, 0.2)",
              color: "var(--color-status-ready)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
            }}
          >
            <CheckCircle2 size={40} />
          </div>

          <span className="eyebrow-badge" style={{ backgroundColor: "rgba(107, 158, 125, 0.15)", color: "var(--color-status-ready)", marginBottom: "1rem" }}>
            Mock Submission Complete
          </span>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              marginBottom: "1rem",
            }}
          >
            Application Submitted
          </h1>

          <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)", marginBottom: "2.5rem" }}>
            Your Income Certificate application has been received and entered into the verification pipeline.
          </p>

          {/* Details Card */}
          <div
            className="spotlight-card"
            style={{
              padding: "2rem",
              backgroundColor: "var(--color-bg-card)",
              textAlign: "left",
              marginBottom: "2.5rem",
              border: "1px solid rgba(232, 114, 42, 0.15)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.25rem", marginBottom: "1.75rem" }}>
              <div>
                <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", display: "block" }}>Application ID</span>
                <strong style={{ fontSize: "1.2rem", color: "var(--color-brand-primary)", fontFamily: "monospace" }}>DG-DEMO-48291</strong>
              </div>
              <div>
                <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", display: "block" }}>Applicant</span>
                <strong style={{ fontSize: "1.05rem" }}>Demo Citizen</strong>
              </div>
              <div>
                <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", display: "block" }}>District</span>
                <strong style={{ fontSize: "1.05rem" }}>Surat</strong>
              </div>
            </div>

            {/* Application Flow Stages */}
            <div style={{ padding: "1.25rem", backgroundColor: "var(--color-bg-tertiary)", borderRadius: "var(--radius-lg)" }}>
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-text-muted)", display: "block", marginBottom: "1rem" }}>
                APPLICATION TIMELINE STAGES
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700 }}>
                <span style={{ color: "var(--color-status-ready)" }}>Submitted ✓</span>
                <span style={{ color: "var(--color-text-muted)" }}>→</span>
                <span style={{ color: "var(--color-brand-primary)" }}>Document Verification 🔵</span>
                <span style={{ color: "var(--color-text-muted)" }}>→</span>
                <span style={{ color: "var(--color-text-muted)" }}>Processing ○</span>
                <span style={{ color: "var(--color-text-muted)" }}>→</span>
                <span style={{ color: "var(--color-text-muted)" }}>Certificate Issued ○</span>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <Link href="/demo/status" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "1.1rem", fontSize: "1.05rem" }}>
            <span>Track Application Status & Ask AI</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
