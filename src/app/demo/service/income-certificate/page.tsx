"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { CheckCircle2, ArrowRight, FileText, Building2, Clock, ShieldCheck, HelpCircle } from "lucide-react";

export default function IncomeCertificateConfirmationPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)" }}>
      <Navbar />

      <section style={{ paddingTop: "clamp(2.5rem, 5vw, 4rem)", paddingBottom: "var(--space-section)" }}>
        <div className="container-custom" style={{ maxWidth: "860px" }}>
          {/* Header */}
          <div style={{ marginBottom: "2.5rem" }}>
            <span className="eyebrow-badge">Service Confirmation</span>
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
              We think you need: <br />
              <span style={{ color: "var(--color-brand-primary)" }}>Income Certificate (આવકનો દાખલો)</span>
            </h1>
            <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)" }}>
              Based on your prompt, SevaSaathi matched your intent to Digital Gujarat Service #DG-REV-INC-01.
            </p>
          </div>

          {/* Main Service Card Details */}
          <div
            className="spotlight-card"
            style={{
              padding: "clamp(1.75rem, 4vw, 3rem)",
              backgroundColor: "var(--color-bg-card)",
              marginBottom: "2.5rem",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {/* Metadata Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ padding: "1.25rem", borderRadius: "var(--radius-lg)", backgroundColor: "var(--color-bg-tertiary)" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", display: "block", marginBottom: "0.2rem" }}>Identified Purpose</span>
                <strong style={{ fontSize: "1.1rem", color: "var(--color-brand-primary)", display: "block" }}>Higher Education Scholarship</strong>
              </div>

              <div style={{ padding: "1.25rem", borderRadius: "var(--radius-lg)", backgroundColor: "var(--color-bg-tertiary)" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", display: "block", marginBottom: "0.2rem" }}>Issuing Authority</span>
                <strong style={{ fontSize: "1.1rem", color: "var(--color-text-primary)", display: "block" }}>Surat Mamlatdar Office</strong>
              </div>

              <div style={{ padding: "1.25rem", borderRadius: "var(--radius-lg)", backgroundColor: "var(--color-bg-tertiary)" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", display: "block", marginBottom: "0.2rem" }}>Certificate Validity</span>
                <strong style={{ fontSize: "1.1rem", color: "var(--color-text-primary)", display: "block" }}>3 Financial Years</strong>
              </div>
            </div>

            {/* Description & Rules Summary */}
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
                What is an Income Certificate?
              </h3>
              <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "1rem" }}>
                An official document issued by the Gujarat Revenue Department confirming your total annual family income. It is mandatory for claiming government scholarship funds, fee concessions in engineering/medical colleges, and hostel subsidies.
              </p>
            </div>

            {/* Required Documents Summary */}
            <div style={{ padding: "1.5rem", borderRadius: "var(--radius-lg)", backgroundColor: "var(--color-bg-secondary)", marginBottom: "2.5rem" }}>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <FileText size={20} color="var(--color-brand-primary)" /> Required Documents Summary (4 Total)
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", fontSize: "0.9rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <CheckCircle2 size={16} color="var(--color-status-ready)" /> 1. Photo Identity Proof
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <CheckCircle2 size={16} color="var(--color-status-ready)" /> 2. Address Proof (Gujarat)
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <CheckCircle2 size={16} color="var(--color-status-ready)" /> 3. Income Affidavit / Slip
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <CheckCircle2 size={16} color="var(--color-status-optional)" /> 4. College Admission Letter
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <Link href="/demo/documents" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "1.1rem", fontSize: "1.1rem" }}>
              <span>Get Your Documents Ready</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
