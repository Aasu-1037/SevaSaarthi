"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ExplanationDrawer } from "@/components/ai/ExplanationDrawer";
import { CheckCircle2, Clock, Sparkles, ArrowRight, ShieldCheck, RefreshCw, AlertTriangle } from "lucide-react";
import { ApplicationStatus } from "@/types";

export default function ApplicationStatusPage() {
  const [status, setStatus] = useState<ApplicationStatus>("UNDER_VERIFICATION");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isCorrection = status === "NEEDS_CORRECTION";
  const isCorrectionSubmitted = status === "CORRECTION_SUBMITTED";

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)" }}>
      <Navbar />

      <section style={{ paddingTop: "clamp(2.5rem, 5vw, 4rem)", paddingBottom: "var(--space-section)" }}>
        <div className="container-custom" style={{ maxWidth: "860px" }}>
          {/* Demo State Switcher Bar */}
          <div
            style={{
              padding: "0.85rem 1.25rem",
              borderRadius: "var(--radius-pill)",
              backgroundColor: "var(--color-bg-tertiary)",
              border: "1px solid rgba(232, 114, 42, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "2.5rem",
            }}
          >
            <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-brand-primary)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <RefreshCw size={16} /> DEMO STATE SWITCHER
            </span>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={() => setStatus("UNDER_VERIFICATION")}
                style={{
                  padding: "0.4rem 0.9rem",
                  borderRadius: "var(--radius-pill)",
                  border: "none",
                  backgroundColor: status === "UNDER_VERIFICATION" ? "var(--color-brand-primary)" : "var(--color-bg-card)",
                  color: status === "UNDER_VERIFICATION" ? "white" : "var(--color-text-primary)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Demo A: Under Verification
              </button>

              <button
                onClick={() => setStatus("NEEDS_CORRECTION")}
                style={{
                  padding: "0.4rem 0.9rem",
                  borderRadius: "var(--radius-pill)",
                  border: "none",
                  backgroundColor: status === "NEEDS_CORRECTION" ? "var(--color-brand-secondary)" : "var(--color-bg-card)",
                  color: status === "NEEDS_CORRECTION" ? "white" : "var(--color-text-primary)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Demo B: Needs Correction
              </button>
            </div>
          </div>

          {/* Hero Header */}
          <div style={{ marginBottom: "2.5rem" }}>
            <span className="eyebrow-badge">
              App ID: {isCorrection ? "DG-DEMO-58317" : "DG-DEMO-48291"}
            </span>

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
              {isCorrection ? "Something needs fixing." : isCorrectionSubmitted ? "You're back on track." : "Your application is on track."}
            </h1>

            <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)" }}>
              Income Certificate for Higher Education Scholarship (Surat District)
            </p>
          </div>

          {/* Status Card */}
          <div
            className="spotlight-card"
            style={{
              padding: "2rem",
              backgroundColor: "var(--color-bg-card)",
              marginBottom: "2.5rem",
              borderLeft: `5px solid ${
                isCorrection ? "var(--color-status-attention)" : "var(--color-status-info)"
              }`,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              <div>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-text-muted)" }}>
                  CURRENT STAGE
                </span>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--color-text-primary)", marginTop: "0.2rem" }}>
                  {isCorrection ? "Needs Correction" : isCorrectionSubmitted ? "Correction Submitted — Under Re-Review" : "Under Verification"}
                </h3>
              </div>

              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  padding: "0.4rem 1rem",
                  borderRadius: "var(--radius-pill)",
                  backgroundColor: isCorrection ? "rgba(232, 159, 60, 0.18)" : "rgba(94, 158, 163, 0.15)",
                  color: isCorrection ? "var(--color-status-attention)" : "var(--color-status-info)",
                }}
              >
                {status}
              </span>
            </div>

            <p style={{ fontSize: "1.05rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              {isCorrection
                ? "Your income information needs supporting evidence. Address proof uploaded is older than 6 months."
                : "Your application has been received by the Surat Mamlatdar Office and is currently being reviewed."}
            </p>

            {/* Quick Answer Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "1.75rem" }}>
              <div style={{ padding: "1rem", backgroundColor: "var(--color-bg-tertiary)", borderRadius: "var(--radius-md)" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", display: "block" }}>Do I need to do anything?</span>
                <strong style={{ fontSize: "0.95rem", color: isCorrection ? "var(--color-brand-secondary)" : "var(--color-status-ready)" }}>
                  {isCorrection ? "Yes — Upload updated address proof" : "No action needed right now"}
                </strong>
              </div>

              <div style={{ padding: "1rem", backgroundColor: "var(--color-bg-tertiary)", borderRadius: "var(--radius-md)" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", display: "block" }}>Estimated Resolution</span>
                <strong style={{ fontSize: "0.95rem", color: "var(--color-text-primary)" }}>2 Business Days</strong>
              </div>
            </div>

            {/* AI Explanation Action Button */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button
                className="btn-primary"
                onClick={() => setDrawerOpen(true)}
                style={{ padding: "0.85rem 1.6rem" }}
              >
                <Sparkles size={18} />
                <span>Explain this status with AI</span>
              </button>

              {isCorrection && (
                <Link href="/demo/recovery" className="btn-secondary" style={{ padding: "0.85rem 1.6rem" }}>
                  <span>Fix my application</span>
                  <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </div>

          {/* Visual Timeline */}
          <div
            className="spotlight-card"
            style={{
              padding: "2rem",
              backgroundColor: "var(--color-bg-card)",
              marginBottom: "3rem",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "1.5rem" }}>
              Application Progress Timeline
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative" }}>
              {/* Timeline Item 1 */}
              <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "rgba(107, 158, 125, 0.2)", color: "var(--color-status-ready)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>
                  ✓
                </div>
                <div>
                  <strong style={{ fontSize: "1rem", color: "var(--color-text-primary)" }}>Application Submitted</strong>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", display: "block" }}>25 Aug 2026, 10:00 AM</span>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: isCorrection ? "rgba(232, 159, 60, 0.2)" : "rgba(94, 158, 163, 0.2)", color: isCorrection ? "var(--color-status-attention)" : "var(--color-status-info)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>
                  🔵
                </div>
                <div>
                  <strong style={{ fontSize: "1rem", color: "var(--color-text-primary)" }}>
                    {isCorrection ? "Document Correction Needed" : "Document Verification"}
                  </strong>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", display: "block" }}>Current Stage</span>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", opacity: 0.5 }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--color-bg-tertiary)", color: "var(--color-text-muted)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>
                  ○
                </div>
                <div>
                  <strong style={{ fontSize: "1rem", color: "var(--color-text-primary)" }}>Mamlatdar Officer Approval</strong>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", display: "block" }}>Pending</span>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", opacity: 0.5 }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--color-bg-tertiary)", color: "var(--color-text-muted)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>
                  ○
                </div>
                <div>
                  <strong style={{ fontSize: "1rem", color: "var(--color-text-primary)" }}>Certificate Issued</strong>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", display: "block" }}>Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Explanation Drawer Modal */}
      <ExplanationDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        status={status}
      />

      <Footer />
    </main>
  );
}
