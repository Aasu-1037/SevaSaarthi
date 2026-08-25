"use client";

import React from "react";
import { Sparkles, X, CheckCircle2, Clock, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { ApplicationStatus } from "@/types";

interface ExplanationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  status: ApplicationStatus;
}

export const ExplanationDrawer: React.FC<ExplanationDrawerProps> = ({
  isOpen,
  onClose,
  status,
}) => {
  if (!isOpen) return null;

  const getExplanation = () => {
    switch (status) {
      case "NEEDS_CORRECTION":
        return {
          title: "Income proof requires update",
          simpleWords: "The verifying officer noticed that the address document uploaded is older than 6 months. A recent electricity bill or tax receipt is required.",
          actionNeeded: true,
          actionSummary: "Upload a recent proof of address (electricity bill from last 3 months).",
          nextStep: "Once uploaded, your application will re-enter verification immediately without restarting.",
          nextAction: "Click 'Fix my application' below to attach the updated document.",
        };
      case "CORRECTION_SUBMITTED":
        return {
          title: "Correction under re-review",
          simpleWords: "You have resubmitted your updated address document. The Mamlatdar officer has received the fix.",
          actionNeeded: false,
          actionSummary: "No further action is required from you.",
          nextStep: "Re-verification in progress → Final Processing → Certificate Issued",
          nextAction: "Wait for the officer to complete re-review.",
        };
      default:
        return {
          title: "Application is in routine review",
          simpleWords: "Your application and uploaded documents have reached the revenue officer's desk. Everything is in order.",
          actionNeeded: false,
          actionSummary: "No action is needed right now.",
          nextStep: "Verification → Processing → Certificate Issued",
          nextAction: "Wait for the next automatic status update.",
        };
    }
  };

  const exp = getExplanation();

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "rgba(45, 35, 25, 0.4)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          height: "100%",
          backgroundColor: "var(--color-bg-card)",
          boxShadow: "var(--shadow-xl)",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflowY: "auto",
        }}
      >
        <div>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(232, 114, 42, 0.15)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-brand-primary)" }}>
              <Sparkles size={22} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-text-primary)" }}>SevaSaathi AI Explanation</h3>
            </div>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.4rem",
                borderRadius: "50%",
                backgroundColor: "var(--color-bg-tertiary)",
                color: "var(--color-text-primary)",
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Explanation Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* In Simple Words */}
            <div style={{ padding: "1.25rem", borderRadius: "var(--radius-lg)", backgroundColor: "var(--color-bg-tertiary)" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-brand-primary)", display: "block", marginBottom: "0.35rem" }}>
                IN SIMPLE WORDS
              </span>
              <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-text-primary)", lineHeight: 1.5 }}>
                "{exp.simpleWords}"
              </p>
            </div>

            {/* Do I need to do anything? */}
            <div style={{ padding: "1.25rem", borderRadius: "var(--radius-lg)", backgroundColor: exp.actionNeeded ? "rgba(232, 145, 138, 0.18)" : "rgba(107, 158, 125, 0.15)" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: exp.actionNeeded ? "var(--color-brand-secondary)" : "var(--color-status-ready)", display: "block", marginBottom: "0.35rem" }}>
                DO I NEED TO DO ANYTHING?
              </span>
              <strong style={{ fontSize: "1rem", color: "var(--color-text-primary)", display: "block", marginBottom: "0.25rem" }}>
                {exp.actionNeeded ? "Yes, 1 document update needed." : "No action needed right now."}
              </strong>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
                {exp.actionSummary}
              </p>
            </div>

            {/* What Happens Next? */}
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-text-muted)", display: "block", marginBottom: "0.35rem" }}>
                WHAT HAPPENS NEXT?
              </span>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-primary)", fontWeight: 600 }}>
                {exp.nextStep}
              </p>
            </div>

            {/* Your Next Action */}
            <div style={{ padding: "1rem", borderRadius: "var(--radius-md)", backgroundColor: "var(--color-bg-secondary)", borderLeft: "4px solid var(--color-brand-primary)" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-brand-primary)", display: "block", marginBottom: "0.2rem" }}>
                RECOMMENDED ACTION
              </span>
              <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-text-primary)" }}>
                {exp.nextAction}
              </p>
            </div>
          </div>
        </div>

        <button className="btn-primary" onClick={onClose} style={{ width: "100%", justifyContent: "center", marginTop: "2rem" }}>
          <span>Got it, close explanation</span>
        </button>
      </div>
    </div>
  );
};
