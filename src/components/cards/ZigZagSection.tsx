"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, FileCheck, Send, BarChart2, RefreshCw, ArrowRight } from "lucide-react";
import { slideLeft, slideRight } from "@/lib/utils/animations";

interface ZigZagStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
}

export const ZigZagSection: React.FC = () => {
  const steps: ZigZagStep[] = [
    {
      step: "01",
      title: "Tell us what you need",
      description: "Describe your requirement in Gujarati, Hindi, or English. AI identifies the right Digital Gujarat service without forcing you to browse confusing categories.",
      icon: <MessageSquare size={32} color="var(--color-brand-primary)" />,
      ctaText: "Try service search",
      ctaLink: "/demo/start",
    },
    {
      step: "02",
      title: "Get your documents ready",
      description: "Know exactly which documents are required before you start. SevaSaathi explains why each document is needed and offers alternative options if you lack a specific bill.",
      icon: <FileCheck size={32} color="var(--color-brand-warm)" />,
      ctaText: "See document readiness",
      ctaLink: "/demo/documents",
    },
    {
      step: "03",
      title: "Apply without confusion",
      description: "Fill a streamlined 5-step application designed for first-time citizens. No repetitive government jargon, clear progress indicators, and pre-submission consistency checks.",
      icon: <Send size={32} color="var(--color-brand-secondary)" />,
      ctaText: "Start sample application",
      ctaLink: "/demo/application",
    },
    {
      step: "04",
      title: "Understand your status",
      description: "No more wondering what 'Under Verification' means. Get plain-language status updates, action requirements, and estimated completion timelines.",
      icon: <BarChart2 size={32} color="var(--color-status-info)" />,
      ctaText: "Track demo application",
      ctaLink: "/demo/status",
    },
    {
      step: "05",
      title: "Fix problems & continue",
      description: "If an application requires correction, SevaSaathi explains the problem clearly without harsh rejection alerts, guiding you step-by-step to fix and resubmit.",
      icon: <RefreshCw size={32} color="var(--color-brand-soft)" />,
      ctaText: "View recovery journey",
      ctaLink: "/demo/recovery",
    },
  ];

  return (
    <section
      style={{
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
        backgroundColor: "var(--color-bg-primary)",
        position: "relative",
      }}
    >
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <span className="eyebrow-badge">The Citizen Journey</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              marginTop: "1rem",
            }}
          >
            Five simple steps from need to certificate
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
          {steps.map((item, idx) => {
            const isEven = idx % 2 !== 0;
            return (
              <motion.div
                key={item.step}
                variants={isEven ? slideRight : slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{
                  display: "flex",
                  justifyContent: isEven ? "flex-start" : "flex-end",
                  width: "100%",
                }}
              >
                <div
                  className="spotlight-card"
                  style={{
                    width: "100%",
                    maxWidth: "780px",
                    padding: "clamp(2rem, 4vw, 3rem)",
                    position: "relative",
                    backgroundColor: "var(--color-bg-card)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Oversized Step Number */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "2rem",
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(4rem, 8vw, 6.5rem)",
                      fontWeight: 900,
                      lineHeight: 1,
                      color: "var(--color-brand-primary)",
                      opacity: 0.08,
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                  >
                    {item.step}
                  </div>

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                      <div
                        style={{
                          width: "54px",
                          height: "54px",
                          borderRadius: "16px",
                          backgroundColor: "var(--color-bg-tertiary)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </div>
                      <span style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-brand-primary)" }}>
                        Step {item.step}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "var(--text-h2)",
                        fontWeight: 800,
                        color: "var(--color-text-primary)",
                        marginBottom: "1rem",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "var(--text-body-lg)",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.6,
                        maxWidth: "600px",
                        marginBottom: "1.75rem",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {item.ctaText && item.ctaLink && (
                    <div>
                      <Link
                        href={item.ctaLink}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontWeight: 700,
                          color: "var(--color-brand-primary)",
                          fontSize: "var(--text-body)",
                        }}
                      >
                        <span>{item.ctaText}</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
