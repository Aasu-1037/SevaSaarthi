"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, FileText, CheckCircle2, ShieldCheck, Zap, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const BrandAppartStickyCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll<HTMLDivElement>(".brand-card");
    if (!cards.length) return;

    const totalCards = cards.length;
    const segmentSize = 1 / totalCards;
    const cardYOffsetStep = 2.8; // Compact 2.8% vertical stack offset
    const cardScaleStep = 0.048; // Subtle 4.8% scale reduction per level
    const cardZStep = 28; // 28px depth per level

    const mouse = { targetX: 0, targetY: 0, currentX: 0, currentY: 0 };
    let currentVelocity = 0;
    let currentProgress = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleMouseLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Initial Stacking setup
    cards.forEach((card, i) => {
      gsap.set(card, {
        xPercent: -50,
        yPercent: -50 + i * cardYOffsetStep,
        z: -i * cardZStep,
        scale: 1 - i * cardScaleStep,
      });
      const media = card.querySelector(".col-media");
      if (media) gsap.set(media, { scale: 1.1 });
    });

    const updateCardTransforms = () => {
      const progress = currentProgress;
      const activeIndex = Math.min(
        Math.floor(progress / segmentSize),
        totalCards - 1
      );
      const segProgress = (progress - activeIndex * segmentSize) / segmentSize;

      const velTilt = gsap.utils.clamp(-4, 4, currentVelocity * 0.02);
      const velSkew = gsap.utils.clamp(-2, 2, currentVelocity * 0.01);

      cards.forEach((card, i) => {
        const colText = card.querySelector<HTMLElement>(".col-text");
        const colMedia = card.querySelector<HTMLElement>(".col-media");

        if (i < activeIndex) {
          // Parked above viewport with clean fade
          gsap.set(card, {
            yPercent: -180,
            rotationX: 28,
            rotationY: 0,
            rotationZ: 0,
            z: -60,
            opacity: 0,
          });
        } else if (i === activeIndex) {
          // Active Card: Silky 3D Arc Peel
          const baseRotX = gsap.utils.interpolate(0, 28, segProgress);
          const dynamicZ =
            gsap.utils.interpolate(0, -40, segProgress) +
            Math.sin(segProgress * Math.PI) * 32;
          const dynamicRoll = (i % 2 === 0 ? -2 : 2) * segProgress;

          gsap.set(card, {
            yPercent: gsap.utils.interpolate(-50, -160, segProgress),
            rotationX: baseRotX + mouse.currentY * -3 + velTilt,
            rotationY: mouse.currentX * 4,
            rotationZ: dynamicRoll + velSkew,
            z: dynamicZ,
            scale: gsap.utils.interpolate(1, 0.96, segProgress),
            opacity: gsap.utils.interpolate(1, 0.95, segProgress),
          });

          if (colMedia) {
            gsap.set(colMedia, {
              yPercent: gsap.utils.interpolate(-8, 8, segProgress) + mouse.currentY * -5,
              xPercent: mouse.currentX * -4,
              scale: gsap.utils.interpolate(1.12, 1.08, segProgress),
            });
          }

          if (colText) {
            gsap.set(colText, {
              xPercent: mouse.currentX * 3,
              yPercent: gsap.utils.interpolate(0, -6, segProgress) + mouse.currentY * 2.5,
            });
          }
        } else {
          // Underneath Stack Cards: Z-depth advancement
          const behindIndex = i - activeIndex;
          const currentDelta = behindIndex - segProgress;
          const currentYOffset = currentDelta * cardYOffsetStep;
          const currentScale = 1 - currentDelta * cardScaleStep;
          const currentZ = -currentDelta * cardZStep;
          const currentOpacity = Math.max(0.35, 1 - currentDelta * 0.08);

          gsap.set(card, {
            yPercent: -50 + currentYOffset,
            rotationX: mouse.currentY * -1.5 + velTilt * 0.3,
            rotationY: mouse.currentX * 2,
            rotationZ: 0,
            z: currentZ,
            scale: currentScale,
            opacity: currentOpacity,
          });

          if (colMedia) {
            gsap.set(colMedia, {
              yPercent: currentDelta * -3 + mouse.currentY * -2,
              xPercent: mouse.currentX * -2,
              scale: 1.1,
            });
          }

          if (colText) {
            gsap.set(colText, {
              xPercent: mouse.currentX * 1.5,
              yPercent: mouse.currentY * 1.5,
            });
          }
        }
      });
    };

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 4.5}px`,
      pin: true,
      pinSpacing: true,
      scrub: 0.6,
      onUpdate: (self) => {
        currentProgress = self.progress;
        const vel = self.getVelocity ? self.getVelocity() : 0;
        currentVelocity = vel;
        updateCardTransforms();
      },
    });

    const tickerCallback = () => {
      mouse.currentX += (mouse.targetX - mouse.currentX) * 0.06;
      mouse.currentY += (mouse.targetY - mouse.currentY) * 0.06;
      updateCardTransforms();
    };

    gsap.ticker.add(tickerCallback);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      gsap.ticker.remove(tickerCallback);
      trigger.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="brandappart-section"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#e8e6df",
        perspective: "1000px",
        perspectiveOrigin: "50% 50%",
        transformStyle: "preserve-3d",
        overflow: "hidden",
      }}
    >
      {/* 3D Cards Stack Container */}
      <div ref={containerRef} style={{ width: "100%", height: "100%", position: "relative" }}>
        {/* CARD 1: Revenue Dept */}
        <div
          className="brand-card"
          id="card-1"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "clamp(320px, 72vw, 960px)",
            height: "clamp(300px, 56vh, 480px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            padding: "clamp(1.5rem, 3vw, 2.5rem)",
            borderRadius: "1.25rem",
            backgroundColor: "#2D2191",
            color: "#ffffff",
            transformOrigin: "center bottom",
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.35)",
            zIndex: 5,
          }}
        >
          <div className="col-text" style={{ flex: 1.1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace", fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.75)", marginBottom: "0.5rem" }}>
                QUIET CONTROL // REVENUE DEPT
              </p>
              <h3 style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.6vw, 3.4rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                SIGNAL DRIFT: INCOME CERTIFICATE
              </h3>
            </div>

            <div>
              <p style={{ fontSize: "0.95rem", color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.45, marginBottom: "1.25rem", textTransform: "none" }}>
                Natural language intent recognition resolves raw citizen requests into exact Digital Gujarat application checklists in under 2 seconds.
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1.1rem", borderRadius: "99px", background: "rgba(255, 255, 255, 0.15)", fontSize: "0.8rem", fontWeight: 700 }}>
                <Sparkles size={15} /> 99.4% INTENT MATCH ACCURACY
              </span>
            </div>
          </div>

          <div className="col-media" style={{ flex: 0.9, height: "100%", borderRadius: "0.85rem", overflow: "hidden", position: "relative", background: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.22)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "#ffffff", color: "#2D2191", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "0.85rem", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
                <FileText size={32} />
              </div>
              <h4 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "1.4rem", fontWeight: 800, textTransform: "uppercase" }}>INCOME PROOF MATRIX</h4>
              <p style={{ fontSize: "0.8rem", opacity: 0.85, marginTop: "0.2rem" }}>STAMP PAPER: ₹300 | FY 2025-26 VALID</p>
            </div>
          </div>
        </div>

        {/* CARD 2: Civil Supplies */}
        <div
          className="brand-card"
          id="card-2"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "clamp(320px, 72vw, 960px)",
            height: "clamp(300px, 56vh, 480px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            padding: "clamp(1.5rem, 3vw, 2.5rem)",
            borderRadius: "1.25rem",
            backgroundColor: "#E05300",
            color: "#ffffff",
            transformOrigin: "center bottom",
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.35)",
            zIndex: 4,
          }}
        >
          <div className="col-text" style={{ flex: 1.1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace", fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.8)", marginBottom: "0.5rem" }}>
                URBAN PULSE // CIVIL SUPPLIES
              </p>
              <h3 style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.6vw, 3.4rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                SKYLINE DRIFT: RATION MEMBER UPDATE
              </h3>
            </div>

            <div>
              <p style={{ fontSize: "0.95rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.45, marginBottom: "1.25rem", textTransform: "none" }}>
                Automated household tree verification eliminates duplicate visits to civil supply offices across all urban municipal centers.
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1.1rem", borderRadius: "99px", background: "rgba(0, 0, 0, 0.2)", fontSize: "0.8rem", fontWeight: 700 }}>
                <CheckCircle2 size={15} /> ZERO SURPRISE REJECTIONS
              </span>
            </div>
          </div>

          <div className="col-media" style={{ flex: 0.9, height: "100%", borderRadius: "0.85rem", overflow: "hidden", position: "relative", background: "rgba(0, 0, 0, 0.15)", border: "1px solid rgba(255, 255, 255, 0.25)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "#ffffff", color: "#E05300", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "0.85rem", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
                <Zap size={32} />
              </div>
              <h4 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "1.4rem", fontWeight: 800, textTransform: "uppercase" }}>FAMILY TREE ADAPTER</h4>
              <p style={{ fontSize: "0.8rem", opacity: 0.85, marginTop: "0.2rem" }}>BIRTH CERTIFICATE & AADHAAR LINKED</p>
            </div>
          </div>
        </div>

        {/* CARD 3: Social Justice */}
        <div
          className="brand-card"
          id="card-3"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "clamp(320px, 72vw, 960px)",
            height: "clamp(300px, 56vh, 480px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            padding: "clamp(1.5rem, 3vw, 2.5rem)",
            borderRadius: "1.25rem",
            backgroundColor: "#D9251D",
            color: "#ffffff",
            transformOrigin: "center bottom",
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.35)",
            zIndex: 3,
          }}
        >
          <div className="col-text" style={{ flex: 1.1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace", fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.8)", marginBottom: "0.5rem" }}>
                WIRED THOUGHT // SOCIAL JUSTICE
              </p>
              <h3 style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.6vw, 3.4rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                NEURAL ASSEMBLY: NON-CREAMY LAYER
              </h3>
            </div>

            <div>
              <p style={{ fontSize: "0.95rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.45, marginBottom: "1.25rem", textTransform: "none" }}>
                OBC/SEBC quota concessions made simple with pre-filled self-declaration forms generated on demand.
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1.1rem", borderRadius: "99px", background: "rgba(0, 0, 0, 0.2)", fontSize: "0.8rem", fontWeight: 700 }}>
                <ShieldCheck size={15} /> PRE-FILLED FORM 16-A
              </span>
            </div>
          </div>

          <div className="col-media" style={{ flex: 0.9, height: "100%", borderRadius: "0.85rem", overflow: "hidden", position: "relative", background: "rgba(0, 0, 0, 0.15)", border: "1px solid rgba(255, 255, 255, 0.25)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "#ffffff", color: "#D9251D", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "0.85rem", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
                <ShieldCheck size={32} />
              </div>
              <h4 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "1.4rem", fontWeight: 800, textTransform: "uppercase" }}>OBC / SEBC CONCESSION</h4>
              <p style={{ fontSize: "0.8rem", opacity: 0.85, marginTop: "0.2rem" }}>3-YEAR VALIDITY AUTOMATIC EXTENSION</p>
            </div>
          </div>
        </div>

        {/* CARD 4: Social Defence */}
        <div
          className="brand-card"
          id="card-4"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "clamp(320px, 72vw, 960px)",
            height: "clamp(300px, 56vh, 480px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            padding: "clamp(1.5rem, 3vw, 2.5rem)",
            borderRadius: "1.25rem",
            backgroundColor: "#1B5E20",
            color: "#ffffff",
            transformOrigin: "center bottom",
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.35)",
            zIndex: 2,
          }}
        >
          <div className="col-text" style={{ flex: 1.1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace", fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.8)", marginBottom: "0.5rem" }}>
                SILENT REPETITION // SOCIAL DEFENCE
              </p>
              <h3 style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.6vw, 3.4rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                LEARNING LOOP: SENIOR PENSION
              </h3>
            </div>

            <div>
              <p style={{ fontSize: "0.95rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.45, marginBottom: "1.25rem", textTransform: "none" }}>
                Dignified pension support for elderly citizens with zero physical queueing or bureaucratic delays.
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1.1rem", borderRadius: "99px", background: "rgba(0, 0, 0, 0.2)", fontSize: "0.8rem", fontWeight: 700 }}>
                <Sparkles size={15} /> ₹0 GOVERNMENT WELFARE FEE
              </span>
            </div>
          </div>

          <div className="col-media" style={{ flex: 0.9, height: "100%", borderRadius: "0.85rem", overflow: "hidden", position: "relative", background: "rgba(0, 0, 0, 0.15)", border: "1px solid rgba(255, 255, 255, 0.25)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "#ffffff", color: "#1B5E20", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "0.85rem", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
                <CheckCircle2 size={32} />
              </div>
              <h4 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "1.4rem", fontWeight: 800, textTransform: "uppercase" }}>SENIOR WELFARE SCHEME</h4>
              <p style={{ fontSize: "0.8rem", opacity: 0.85, marginTop: "0.2rem" }}>DIRECT BENEFIT TRANSFER ENABLED</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
