"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Globe, ChevronDown, ArrowRight } from "lucide-react";
import { Language } from "@/types";
import { useLanguage } from "@/components/language/LanguageContext";

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);

  const langNames: Record<Language, string> = {
    en: "English",
    hi: "हिन्दी",
    gu: "ગુજરાતી",
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(255, 248, 240, 0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(232, 114, 42, 0.1)",
        paddingTop: "0.85rem",
        paddingBottom: "0.85rem",
      }}
    >
      <div className="container-custom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              backgroundColor: "var(--color-brand-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-text-inverse)",
              fontWeight: 800,
              fontSize: "1.2rem",
              boxShadow: "0 4px 10px rgba(232, 114, 42, 0.25)",
            }}
          >
            S
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.35rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--color-text-primary)",
            }}
          >
            SEVASAATHI
          </span>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "var(--color-brand-primary)",
              alignSelf: "flex-end",
              marginBottom: "6px",
            }}
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Link
            href="/how-it-works"
            style={{
              fontSize: "var(--text-body-sm)",
              fontWeight: 600,
              color: "var(--color-text-secondary)",
              transition: "color 0.2s ease",
            }}
          >
            {t("howItWorks")}
          </Link>
          <Link
            href="/services"
            style={{
              fontSize: "var(--text-body-sm)",
              fontWeight: 600,
              color: "var(--color-text-secondary)",
              transition: "color 0.2s ease",
            }}
          >
            {t("services")}
          </Link>
          <Link
            href="#trust"
            style={{
              fontSize: "var(--text-body-sm)",
              fontWeight: 600,
              color: "var(--color-text-secondary)",
              transition: "color 0.2s ease",
            }}
          >
            {t("whySevaSaathi")}
          </Link>
        </nav>

        {/* Action Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Language Selector */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.5rem 0.9rem",
                borderRadius: "var(--radius-pill)",
                border: "1px solid rgba(232, 114, 42, 0.2)",
                backgroundColor: "var(--color-bg-card)",
                fontSize: "var(--text-body-sm)",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                cursor: "pointer",
              }}
            >
              <Globe size={16} color="var(--color-brand-primary)" />
              <span>{langNames[language]}</span>
              <ChevronDown size={14} color="var(--color-text-muted)" />
            </button>

            {langOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 6px)",
                  right: 0,
                  backgroundColor: "var(--color-bg-card)",
                  border: "1px solid rgba(232, 114, 42, 0.15)",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-md)",
                  padding: "0.4rem",
                  width: "130px",
                  zIndex: 60,
                }}
              >
                {(["en", "hi", "gu"] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLanguage(l);
                      setLangOpen(false);
                    }}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "0.5rem 0.75rem",
                      borderRadius: "var(--radius-sm)",
                      border: "none",
                      backgroundColor: language === l ? "var(--color-bg-tertiary)" : "transparent",
                      color: language === l ? "var(--color-brand-primary)" : "var(--color-text-primary)",
                      fontWeight: language === l ? 700 : 500,
                      fontSize: "var(--text-body-sm)",
                      cursor: "pointer",
                    }}
                  >
                    {langNames[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Try Demo CTA */}
          <Link href="/demo/start" className="btn-primary" style={{ padding: "0.6rem 1.4rem", fontSize: "var(--text-body-sm)" }}>
            <span>{t("tryDemo")}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
};
