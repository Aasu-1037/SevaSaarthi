import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { ProblemSection, SolutionSection } from "@/components/cards/ProblemSolution";
import { ZigZagSection } from "@/components/cards/ZigZagSection";
import { AIExperienceSection } from "@/components/cards/AIExperienceSection";
import { BeforeAfterSection, TrustSafetySection } from "@/components/cards/BeforeAfterTrustSection";
import { ArchitectureSection, FinalCTASection } from "@/components/cards/ArchitectureCTASection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)" }}>
      {/* Navigation */}
      <Navbar />

      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — Problem */}
      <ProblemSection />

      {/* Section 3 — Solution */}
      <SolutionSection />

      {/* Section 4 — Five-step journey */}
      <ZigZagSection />

      {/* Section 5 — AI experience */}
      <AIExperienceSection />

      {/* Section 6 — Before / After */}
      <BeforeAfterSection />

      {/* Section 7 — Trust and safety */}
      <TrustSafetySection />

      {/* Section 8 — Architecture */}
      <ArchitectureSection />

      {/* Section 9 — Final CTA */}
      <FinalCTASection />

      {/* Section 10 — Footer */}
      <Footer />
    </main>
  );
}
