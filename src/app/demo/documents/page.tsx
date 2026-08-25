"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { mockDocuments } from "@/lib/mock-data/seed";
import { CheckCircle2, AlertTriangle, HelpCircle, ArrowRight, FileText, ChevronDown, ChevronUp } from "lucide-react";

export default function DocumentReadinessPage() {
  const [expandedDoc, setExpandedDoc] = useState<string | null>("doc-2");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "READY":
        return (
          <span style={{ fontSize: "0.8rem", fontWeight: 700, padding: "0.3rem 0.8rem", borderRadius: "var(--radius-pill)", backgroundColor: "rgba(107, 158, 125, 0.15)", color: "var(--color-status-ready)", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
            <CheckCircle2 size={14} /> Ready
          </span>
        );
      case "NEEDS_ATTENTION":
        return (
          <span style={{ fontSize: "0.8rem", fontWeight: 700, padding: "0.3rem 0.8rem", borderRadius: "var(--radius-pill)", backgroundColor: "rgba(232, 159, 60, 0.18)", color: "var(--color-status-attention)", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
            <AlertTriangle size={14} /> Needs attention
          </span>
        );
      default:
        return (
          <span style={{ fontSize: "0.8rem", fontWeight: 700, padding: "0.3rem 0.8rem", borderRadius: "var(--radius-pill)", backgroundColor: "rgba(184, 169, 201, 0.2)", color: "var(--color-status-optional)" }}>
            Optional
          </span>
        );
    }
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)" }}>
      <Navbar />

      <section style={{ paddingTop: "clamp(2.5rem, 5vw, 4rem)", paddingBottom: "var(--space-section)" }}>
        <div className="container-custom" style={{ maxWidth: "860px" }}>
          {/* Header */}
          <div style={{ marginBottom: "2.5rem" }}>
            <span className="eyebrow-badge">Step 2 — Document Readiness</span>
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
              Get your documents ready.
            </h1>
            <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)" }}>
              Check required documents before filling out the form to avoid rejection.
            </p>
          </div>

          {/* Readiness Summary Bar */}
          <div
            style={{
              padding: "1.5rem 2rem",
              borderRadius: "var(--radius-xl)",
              backgroundColor: "var(--color-bg-tertiary)",
              border: "1px solid rgba(232, 114, 42, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <div>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-text-muted)", display: "block" }}>Readiness Progress</span>
              <strong style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-text-primary)" }}>
                2 of 4 documents ready
              </strong>
            </div>

            <div style={{ flex: 1, maxWidth: "300px", minWidth: "180px" }}>
              <div style={{ width: "100%", height: "10px", backgroundColor: "var(--color-bg-card)", borderRadius: "var(--radius-pill)", overflow: "hidden" }}>
                <div style={{ width: "50%", height: "100%", backgroundColor: "var(--color-brand-primary)", borderRadius: "var(--radius-pill)" }} />
              </div>
            </div>
          </div>

          {/* Document Cards List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
            {mockDocuments.map((doc) => {
              const isExpanded = expandedDoc === doc.id;
              return (
                <div
                  key={doc.id}
                  className="spotlight-card"
                  style={{
                    padding: "1.75rem",
                    backgroundColor: "var(--color-bg-card)",
                    borderLeft: `4px solid ${
                      doc.status === "READY"
                        ? "var(--color-status-ready)"
                        : doc.status === "NEEDS_ATTENTION"
                        ? "var(--color-status-attention)"
                        : "var(--color-status-optional)"
                    }`,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                        <FileText size={20} color="var(--color-brand-primary)" />
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-text-primary)" }}>
                          {doc.title}
                        </h3>
                      </div>
                      <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", marginTop: "0.35rem" }}>
                        {doc.description}
                      </p>
                    </div>
                    {getStatusBadge(doc.status)}
                  </div>

                  {/* Why do I need this? Expandable */}
                  <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px stroke rgba(232, 114, 42, 0.1)" }}>
                    <button
                      onClick={() => setExpandedDoc(isExpanded ? null : doc.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "var(--color-brand-primary)",
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <HelpCircle size={16} />
                      <span>Why do I need this?</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {isExpanded && (
                      <div
                        style={{
                          marginTop: "0.75rem",
                          padding: "1rem",
                          borderRadius: "var(--radius-md)",
                          backgroundColor: "var(--color-bg-tertiary)",
                          fontSize: "0.9rem",
                          color: "var(--color-text-primary)",
                          lineHeight: 1.5,
                        }}
                      >
                        <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>{doc.whyNeeded}</p>
                        <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", display: "block" }}>
                          <strong>Accepted Document Options:</strong> {doc.acceptedOptions.join(", ")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action CTA */}
          <Link href="/demo/application" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "1.1rem", fontSize: "1.05rem" }}>
            <span>Proceed to 5-Step Application</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
