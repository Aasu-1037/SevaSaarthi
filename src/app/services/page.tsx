"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { FileText, CheckCircle2, ArrowRight, ShieldCheck, Layers, ExternalLink } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "income_certificate",
      title: "Income Certificate (આવકનો દાખલો)",
      dept: "Revenue Department, Gujarat",
      status: "ACTIVE_DEMO",
      desc: "Official certificate required for scholarships, educational fee concessions, and government welfare eligibility in Gujarat.",
      active: true,
    },
    {
      id: "caste_certificate",
      title: "Caste Certificate (જ્ઞાતિ નો દાખલો)",
      dept: "Social Justice & Empowerment Dept",
      status: "PREVIEW_ONLY",
      desc: "Social reservation and welfare certificate for reserved categories in Gujarat.",
      active: false,
    },
    {
      id: "non_creamy_layer",
      title: "Non-Creamy Layer Certificate",
      dept: "Revenue Department, Gujarat",
      status: "PREVIEW_ONLY",
      desc: "SEBC / OBC income limit verification for education and job reservations.",
      active: false,
    },
    {
      id: "scholarship",
      title: "Digital Gujarat Student Scholarship",
      dept: "Education Department, Gujarat",
      status: "PREVIEW_ONLY",
      desc: "Financial assistance for post-matric and higher education students.",
      active: false,
    },
    {
      id: "pension",
      title: "Niradhar Vrudh Pension Scheme",
      dept: "Social Defence Department",
      status: "PREVIEW_ONLY",
      desc: "Financial support for senior citizens and destitute elders.",
      active: false,
    },
  ];

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)" }}>
      <Navbar />

      <section style={{ paddingTop: "clamp(3rem, 6vw, 5rem)", paddingBottom: "var(--space-section)" }}>
        <div className="container-custom" style={{ maxWidth: "920px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="eyebrow-badge">Gujarat Citizen Services</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-display)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Supported Prototype Services
            </h1>
            <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)", maxWidth: "640px", margin: "0 auto" }}>
              Explore simplified citizen service journeys inspired by Digital Gujarat.
            </p>
          </div>

          {/* Services List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "4rem" }}>
            {services.map((s) => (
              <div
                key={s.id}
                className="spotlight-card"
                style={{
                  padding: "2rem",
                  backgroundColor: "var(--color-bg-card)",
                  borderLeft: s.active ? "5px solid var(--color-brand-primary)" : "1px solid rgba(232, 114, 42, 0.12)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <FileText size={22} color={s.active ? "var(--color-brand-primary)" : "var(--color-text-muted)"} />
                      <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-text-primary)" }}>
                        {s.title}
                      </h3>
                    </div>
                    <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", display: "block", marginTop: "0.25rem" }}>
                      {s.dept}
                    </span>
                  </div>

                  {s.active ? (
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, padding: "0.35rem 0.85rem", borderRadius: "var(--radius-pill)", backgroundColor: "var(--color-bg-tertiary)", color: "var(--color-brand-primary)" }}>
                      FULL DEMO ACTIVE
                    </span>
                  ) : (
                    <span style={{ fontSize: "0.8rem", fontWeight: 600, padding: "0.35rem 0.85rem", borderRadius: "var(--radius-pill)", backgroundColor: "rgba(45, 35, 25, 0.05)", color: "var(--color-text-muted)" }}>
                      PREVIEW CARD
                    </span>
                  )}
                </div>

                <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  {s.desc}
                </p>

                {s.active ? (
                  <Link href="/demo/start" className="btn-primary" style={{ padding: "0.7rem 1.4rem", fontSize: "0.9rem" }}>
                    <span>Start Income Certificate Flow</span>
                    <ArrowRight size={16} />
                  </Link>
                ) : (
                  <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", fontStyle: "italic" }}>
                    Secondary card — only Income Certificate enters active functional demo flow.
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
