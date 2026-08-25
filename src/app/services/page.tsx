"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { FileText, CheckCircle2, ArrowRight, ShieldCheck, Clock, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>("income_certificate");

  const services = [
    {
      id: "income_certificate",
      title: "Income Certificate (આવકનો દાખલો)",
      dept: "Revenue Department, Gujarat",
      status: "ACTIVE_DEMO",
      desc: "Official certificate required for scholarships, educational fee concessions, and government welfare eligibility in Gujarat.",
      docs: ["Aadhaar Card of Applicant", "Applicant Passport Photo", "Ration Card (Self-Attested)", "Self-Declaration / Affidavit"],
      fee: "₹20 (Government Fee)",
      time: "2 Business Days",
      active: true,
    },
    {
      id: "caste_certificate",
      title: "Caste Certificate (જ્ઞાતિ નો દાખલો)",
      dept: "Social Justice & Empowerment Dept",
      status: "PREVIEW_READY",
      desc: "Social reservation and welfare certificate for reserved categories (SC / ST / SEBC) in Gujarat.",
      docs: ["School Leaving Certificate", "Father's Caste Proof", "Ration Card Copy", "Identity Affidavit"],
      fee: "₹20 (Government Fee)",
      time: "3 Business Days",
      active: false,
    },
    {
      id: "non_creamy_layer",
      title: "Non-Creamy Layer Certificate (બિન-ક્રીમીલેયર)",
      dept: "Revenue Department, Gujarat",
      status: "PREVIEW_READY",
      desc: "SEBC / OBC income limit verification for education and public job reservations.",
      docs: ["Income Certificate of Father", "Caste Certificate", "IT Return / Tehsildar Income Proof", "Ration Card"],
      fee: "₹20 (Government Fee)",
      time: "4 Business Days",
      active: false,
    },
    {
      id: "scholarship",
      title: "Digital Gujarat Student Scholarship",
      dept: "Education Department, Gujarat",
      status: "PREVIEW_READY",
      desc: "Financial assistance for post-matric and higher education students studying in recognized institutions.",
      docs: ["Income Certificate (< ₹2.5 Lakh)", "College Fee Receipt", "10th/12th Marksheet", "Bank Passbook Copy"],
      fee: "₹0 (Free Scheme)",
      time: "15 Business Days",
      active: false,
    },
    {
      id: "pension",
      title: "Niradhar Vrudh Pension Scheme (નિરાધાર વૃદ્ધ)",
      dept: "Social Defence Department",
      status: "PREVIEW_READY",
      desc: "Monthly financial support for senior citizens and destitute elders aged 60+.",
      docs: ["Age Proof (Election Card / Birth Cert)", "Income Proof", "Single Account Bank Passbook", "Aadhaar Card"],
      fee: "₹0 (Free Scheme)",
      time: "7 Business Days",
      active: false,
    },
  ];

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)" }}>
      <Navbar />

      <section style={{ paddingTop: "clamp(3rem, 6vw, 5rem)", paddingBottom: "var(--space-section)" }}>
        <div className="container-custom" style={{ maxWidth: "940px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="eyebrow-badge">Gujarat Citizen Services Catalog</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-display)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                marginTop: "1rem",
                marginBottom: "1rem",
                lineHeight: 1.1,
              }}
            >
              Supported Citizen Services
            </h1>
            <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)", maxWidth: "660px", margin: "0 auto" }}>
              Explore simplified citizen service journeys inspired by Digital Gujarat. Click any card to inspect required documents and resolution timelines.
            </p>
          </div>

          {/* Services List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "4rem" }}>
            {services.map((s) => {
              const isExpanded = selectedService === s.id;

              return (
                <div
                  key={s.id}
                  className="spotlight-card"
                  style={{
                    padding: "2rem",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "var(--radius-xl)",
                    border: isExpanded ? "2px solid var(--color-brand-primary)" : "1px solid rgba(217, 98, 30, 0.16)",
                    boxShadow: isExpanded ? "0 14px 30px -10px rgba(217, 98, 30, 0.14)" : "var(--shadow-sm)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
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
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, padding: "0.35rem 0.85rem", borderRadius: "var(--radius-pill)", backgroundColor: "var(--color-brand-accent-bg)", color: "var(--color-brand-primary)" }}>
                        FULL DEMO ACTIVE
                      </span>
                    ) : (
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, padding: "0.35rem 0.85rem", borderRadius: "var(--radius-pill)", backgroundColor: "var(--color-bg-primary)", color: "var(--color-text-secondary)", border: "1px solid rgba(217, 98, 30, 0.18)" }}>
                        PREVIEW READY
                      </span>
                    )}
                  </div>

                  <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                    {s.desc}
                  </p>

                  {/* Expandable Document Checklist & Details */}
                  <div style={{ paddingTop: "1rem", borderTop: "1px solid rgba(217, 98, 30, 0.12)", marginBottom: "1.25rem" }}>
                    <button
                      onClick={() => setSelectedService(isExpanded ? null : s.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.85rem",
                        fontWeight: 800,
                        color: "var(--color-brand-primary)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <HelpCircle size={16} />
                      <span>{isExpanded ? "Hide Document Requirements" : "Inspect Document Requirements & Fees"}</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {isExpanded && (
                      <div
                        style={{
                          marginTop: "1rem",
                          padding: "1.25rem",
                          borderRadius: "var(--radius-lg)",
                          backgroundColor: "var(--color-bg-primary)",
                          border: "1px solid rgba(217, 98, 30, 0.16)",
                        }}
                      >
                        <strong style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--color-brand-primary)", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                          Required Document Checklist:
                        </strong>
                        <ul style={{ paddingLeft: "1.25rem", margin: "0 0 1rem 0", fontSize: "0.9rem", color: "var(--color-text-primary)", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                          {s.docs.map((doc, idx) => (
                            <li key={idx}><strong>{doc}</strong></li>
                          ))}
                        </ul>

                        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", fontSize: "0.85rem", paddingTop: "0.75rem", borderTop: "1px dashed rgba(217, 98, 30, 0.18)" }}>
                          <div><span style={{ color: "var(--color-text-muted)" }}>Official Fee:</span> <strong style={{ color: "var(--color-status-ready)" }}>{s.fee}</strong></div>
                          <div><span style={{ color: "var(--color-text-muted)" }}>Resolution Time:</span> <strong style={{ color: "var(--color-brand-warm)" }}>{s.time}</strong></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {s.active ? (
                    <Link href="/demo/start" className="btn-primary" style={{ padding: "0.75rem 1.5rem", fontSize: "0.9rem" }}>
                      <span>Start Income Certificate Flow</span>
                      <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <Link href="/demo/start" className="btn-secondary" style={{ padding: "0.75rem 1.5rem", fontSize: "0.9rem" }}>
                      <span>Launch Guided Demo with this Service</span>
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

