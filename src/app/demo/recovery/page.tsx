"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { AlertCircle, CheckCircle2, Upload, ArrowRight, ShieldCheck, RefreshCw, FileText } from "lucide-react";

export default function ApplicationRecoveryPage() {
  const router = useRouter();
  const [corrected, setCorrected] = useState(false);
  const [fileAttached, setFileAttached] = useState(false);

  const handleResubmit = () => {
    setCorrected(true);
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)" }}>
      <Navbar />

      <section style={{ paddingTop: "clamp(2.5rem, 5vw, 4rem)", paddingBottom: "var(--space-section)" }}>
        <div className="container-custom" style={{ maxWidth: "840px" }}>
          {!corrected ? (
            <>
              {/* Header: Gentle Problem Notification (NOT harsh red) */}
              <div style={{ marginBottom: "2.5rem" }}>
                <span className="eyebrow-badge" style={{ backgroundColor: "rgba(232, 145, 138, 0.2)", color: "var(--color-brand-secondary)" }}>
                  Application Recovery Pathway
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
                  Something needs fixing.
                </h1>

                <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)" }}>
                  Your application isn't rejected. The officer just needs one updated document to proceed.
                </p>
              </div>

              {/* Problem Breakdown Card */}
              <div
                className="spotlight-card"
                style={{
                  padding: "2rem",
                  backgroundColor: "var(--color-bg-card)",
                  marginBottom: "2rem",
                  borderLeft: "5px solid var(--color-brand-secondary)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-brand-secondary)", marginBottom: "1rem" }}>
                  <AlertCircle size={22} />
                  <span style={{ fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase" }}>Issue Reason Explained</span>
                </div>

                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
                  What Happened?
                </h3>

                <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  The address proof document attached (Electricity Bill dated Oct 2024) is older than the required 6-month validity window for Surat Revenue Jurisdiction.
                </p>

                <div style={{ padding: "1.25rem", borderRadius: "var(--radius-md)", backgroundColor: "var(--color-bg-tertiary)", marginBottom: "1.5rem" }}>
                  <strong style={{ fontSize: "0.95rem", color: "var(--color-brand-primary)", display: "block", marginBottom: "0.25rem" }}>
                    What do you need to upload?
                  </strong>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-primary)" }}>
                    One recent Electricity Bill, Water Bill, or Property Tax Receipt issued between May 2026 and August 2026.
                  </p>
                </div>

                {/* Upload Mock Document Section */}
                <div style={{ padding: "1.5rem", borderRadius: "var(--radius-lg)", border: "2px dashed rgba(232, 114, 42, 0.3)", backgroundColor: "var(--color-bg-input)", textAlign: "center" }}>
                  <Upload size={32} color="var(--color-brand-primary)" style={{ margin: "0 auto 0.75rem" }} />
                  <strong style={{ display: "block", fontSize: "1rem", color: "var(--color-text-primary)", marginBottom: "0.25rem" }}>
                    Attach Updated Address Proof
                  </strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", display: "block", marginBottom: "1rem" }}>
                    Supports PDF, JPG, PNG up to 5MB (Mock Upload)
                  </span>

                  <button
                    onClick={() => setFileAttached(true)}
                    className={fileAttached ? "btn-secondary" : "btn-primary"}
                    style={{ padding: "0.6rem 1.4rem", fontSize: "0.875rem" }}
                  >
                    {fileAttached ? "✓ Mock Electricity Bill (Aug 2026) Attached" : "Choose File"}
                  </button>
                </div>
              </div>

              {/* Submit Correction CTA */}
              <button
                onClick={handleResubmit}
                className="btn-primary"
                disabled={!fileAttached}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "1.1rem",
                  fontSize: "1.05rem",
                  opacity: fileAttached ? 1 : 0.6,
                  cursor: fileAttached ? "pointer" : "not-allowed",
                }}
              >
                <RefreshCw size={18} />
                <span>Submit Correction (Mock)</span>
              </button>
            </>
          ) : (
            /* Success Re-submission Screen */
            <div style={{ textAlign: "center" }}>
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
                Correction Submitted
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
                You're back on track.
              </h1>

              <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)", marginBottom: "2.5rem" }}>
                Your updated address proof has been submitted to the Surat Mamlatdar Office. Re-verification is in progress.
              </p>

              <Link href="/demo/status" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "1.1rem", fontSize: "1.05rem" }}>
                <span>Return to Application Tracking</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
