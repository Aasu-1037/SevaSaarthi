import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { ProblemSection, SolutionSection } from "@/components/cards/ProblemSolution";
import { ZigZagSection } from "@/components/cards/ZigZagSection";
import { BrandAppartStickyCards } from "@/components/cards/BrandAppartStickyCards";
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

      {/* Section 4 — BrandAppart 3D Dynamic Sticky Cards */}
      <BrandAppartStickyCards />

      {/* Section 5 — Five-step journey */}
      <ZigZagSection />

      {/* Section 6 — AI experience */}
      <AIExperienceSection />

      {/* Section 7 — Before / After */}
      <BeforeAfterSection />

      {/* Section 8 — Trust and safety */}
      <TrustSafetySection />

      {/* Section 9 — Architecture */}
      <ArchitectureSection />

      {/* Section 10 — Final CTA */}
      <FinalCTASection />

      {/* Section 11 — Footer */}
      <Footer />
    </main>
  );
}
