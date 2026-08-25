"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ArrowRight, ArrowLeft, CheckCircle2, FileText, Upload, Sparkles } from "lucide-react";

export default function ApplicationFlowPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    name: "Demo Citizen",
    district: "Surat",
    dob: "1998-05-15",
    purpose: "Higher Education Scholarship",
    educationLevel: "Undergraduate (B.Tech)",
    annualIncome: "120000",
    incomeSource: "Agriculture & Small Business",
    identityDocUploaded: true,
    addressDocUploaded: true,
    incomeDocUploaded: true,
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    router.push("/demo/review");
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)" }}>
      <Navbar />

      <section style={{ paddingTop: "clamp(2rem, 4vw, 3.5rem)", paddingBottom: "var(--space-section)" }}>
        <div className="container-custom" style={{ maxWidth: "840px" }}>
          {/* Top Title & Step Indicator */}
          <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span className="eyebrow-badge">Income Certificate Application</span>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h1)", fontWeight: 800, color: "var(--color-text-primary)", marginTop: "0.5rem" }}>
                Step {step} of 5 — {step === 1 ? "About You" : step === 2 ? "Purpose" : step === 3 ? "Income Details" : step === 4 ? "Documents" : "Review"}
              </h1>
            </div>

            <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-brand-primary)", backgroundColor: "var(--color-bg-accent)", padding: "0.4rem 1rem", borderRadius: "var(--radius-pill)" }}>
              Step {step} of 5
            </span>
          </div>

          {/* Progress Bar */}
          <div style={{ width: "100%", height: "8px", backgroundColor: "var(--color-bg-secondary)", borderRadius: "var(--radius-pill)", overflow: "hidden", marginBottom: "2.5rem" }}>
            <div style={{ width: `${(step / 5) * 100}%`, height: "100%", backgroundColor: "var(--color-brand-primary)", borderRadius: "var(--radius-pill)", transition: "width 0.3s ease" }} />
          </div>

          {/* Form Step Container */}
          <div
            className="spotlight-card"
            style={{
              padding: "clamp(1.75rem, 4vw, 3rem)",
              backgroundColor: "var(--color-bg-card)",
              boxShadow: "var(--shadow-md)",
              marginBottom: "2rem",
            }}
          >
            {/* Step 1: About You */}
            {step === 1 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-text-primary)" }}>Personal Details</h3>

                <div>
                  <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.4rem" }}>Full Name (as per ID)</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: "100%", padding: "0.85rem 1rem", borderRadius: "var(--radius-md)", border: "1px solid rgba(232, 114, 42, 0.2)", fontSize: "1rem" }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.4rem" }}>District (Gujarat)</label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      style={{ width: "100%", padding: "0.85rem 1rem", borderRadius: "var(--radius-md)", border: "1px solid rgba(232, 114, 42, 0.2)", fontSize: "1rem", backgroundColor: "white" }}
                    >
                      <option value="Surat">Surat</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                      <option value="Vadodara">Vadodara</option>
                      <option value="Rajkot">Rajkot</option>
                      <option value="Gandhinagar">Gandhinagar</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.4rem" }}>Date of Birth</label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      style={{ width: "100%", padding: "0.85rem 1rem", borderRadius: "var(--radius-md)", border: "1px solid rgba(232, 114, 42, 0.2)", fontSize: "1rem" }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Purpose */}
            {step === 2 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-text-primary)" }}>Why do you need this certificate?</h3>

                <div>
                  <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.4rem" }}>Application Purpose</label>
                  <select
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    style={{ width: "100%", padding: "0.85rem 1rem", borderRadius: "var(--radius-md)", border: "1px solid rgba(232, 114, 42, 0.2)", fontSize: "1rem", backgroundColor: "white" }}
                  >
                    <option value="Higher Education Scholarship">Higher Education Scholarship</option>
                    <option value="School Fee Concession">School Fee Concession</option>
                    <option value="Government Scheme Eligibility">Government Welfare Scheme</option>
                    <option value="Hostel Admission">Hostel Admission</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.4rem" }}>Education Level</label>
                  <input
                    type="text"
                    value={formData.educationLevel}
                    onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                    style={{ width: "100%", padding: "0.85rem 1rem", borderRadius: "var(--radius-md)", border: "1px solid rgba(232, 114, 42, 0.2)", fontSize: "1rem" }}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Income Information */}
            {step === 3 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-text-primary)" }}>Annual Income Details</h3>

                <div>
                  <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.4rem" }}>Total Annual Family Income (₹)</label>
                  <input
                    type="number"
                    value={formData.annualIncome}
                    onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })}
                    style={{ width: "100%", padding: "0.85rem 1rem", borderRadius: "var(--radius-md)", border: "1px solid rgba(232, 114, 42, 0.2)", fontSize: "1rem" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.4rem" }}>Primary Source of Income</label>
                  <input
                    type="text"
                    value={formData.incomeSource}
                    onChange={(e) => setFormData({ ...formData, incomeSource: e.target.value })}
                    style={{ width: "100%", padding: "0.85rem 1rem", borderRadius: "var(--radius-md)", border: "1px solid rgba(232, 114, 42, 0.2)", fontSize: "1rem" }}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Documents Upload */}
            {step === 4 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-text-primary)" }}>Upload Required Documents</h3>

                {["Aadhaar Card (Identity Proof)", "Electricity Bill (Address Proof)", "Income Affidavit (Income Proof)"].map((docName, idx) => (
                  <div key={idx} style={{ padding: "1.25rem", borderRadius: "var(--radius-md)", backgroundColor: "var(--color-bg-tertiary)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <div>
                      <strong style={{ fontSize: "0.95rem", color: "var(--color-text-primary)", display: "block" }}>{docName}</strong>
                      <span style={{ fontSize: "0.8rem", color: "var(--color-status-ready)", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "0.2rem" }}>
                        <CheckCircle2 size={14} /> Mock Document Attached
                      </span>
                    </div>
                    <button className="btn-secondary" style={{ padding: "0.4rem 0.9rem", fontSize: "0.85rem" }}>
                      <Upload size={14} /> Re-upload
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Step 5: Pre-Submission Summary */}
            {step === 5 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-brand-primary)" }}>
                  <Sparkles size={20} />
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-text-primary)" }}>Pre-Submission Summary</h3>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                  <div style={{ padding: "1rem", backgroundColor: "var(--color-bg-tertiary)", borderRadius: "var(--radius-md)" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Applicant Name</span>
                    <strong style={{ display: "block", fontSize: "1rem" }}>{formData.name}</strong>
                  </div>
                  <div style={{ padding: "1rem", backgroundColor: "var(--color-bg-tertiary)", borderRadius: "var(--radius-md)" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>District</span>
                    <strong style={{ display: "block", fontSize: "1rem" }}>{formData.district}</strong>
                  </div>
                  <div style={{ padding: "1rem", backgroundColor: "var(--color-bg-tertiary)", borderRadius: "var(--radius-md)" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Stated Income</span>
                    <strong style={{ display: "block", fontSize: "1rem", color: "var(--color-brand-primary)" }}>₹{Number(formData.annualIncome).toLocaleString()} / year</strong>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {step > 1 ? (
              <button onClick={prevStep} className="btn-secondary">
                <ArrowLeft size={16} /> Back
              </button>
            ) : <div />}

            {step < 5 ? (
              <button onClick={nextStep} className="btn-primary">
                Next Step <ArrowRight size={16} />
              </button>
            ) : (
              <button onClick={handleSubmit} className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.05rem" }}>
                <span>Proceed to Final Review</span>
                <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
