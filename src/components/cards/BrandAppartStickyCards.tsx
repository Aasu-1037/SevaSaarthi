"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, FileText, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

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
    const cardYOffset = 4.5;
    const cardScaleStep = 0.065;
    const cardZStep = 35;

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
        yPercent: -50 + i * cardYOffset,
        z: -i * cardZStep,
        scale: 1 - i * cardScaleStep,
      });
      const media = card.querySelector(".col-media");
      if (media) gsap.set(media, { scale: 1.12 });
    });

    const updateCardTransforms = () => {
      const progress = currentProgress;
      const activeIndex = Math.min(
        Math.floor(progress / segmentSize),
        totalCards - 1
      );
      const segProgress = (progress - activeIndex * segmentSize) / segmentSize;

      const velTilt = gsap.utils.clamp(-6, 6, currentVelocity * 0.025);
      const velSkew = gsap.utils.clamp(-3, 3, currentVelocity * 0.015);

      cards.forEach((card, i) => {
        const colText = card.querySelector<HTMLElement>(".col-text");
        const colMedia = card.querySelector<HTMLElement>(".col-media");

        if (i < activeIndex) {
          // Parked above viewport
          gsap.set(card, {
            yPercent: -250,
            rotationX: 38,
            rotationY: 0,
            rotationZ: 0,
            z: -80,
            opacity: 0,
          });
        } else if (i === activeIndex) {
          // Active Card 3D Z-arc peel trajectory
          const baseRotX = gsap.utils.interpolate(0, 36, segProgress);
          const dynamicZ =
            gsap.utils.interpolate(0, -50, segProgress) +
            Math.sin(segProgress * Math.PI) * 40;
          const dynamicRoll = (i % 2 === 0 ? -2.5 : 2.5) * segProgress;

          gsap.set(card, {
            yPercent: gsap.utils.interpolate(-50, -200, segProgress),
            rotationX: baseRotX + mouse.currentY * -4 + velTilt,
            rotationY: mouse.currentX * 5,
            rotationZ: dynamicRoll + velSkew,
            z: dynamicZ,
            scale: 1,
            opacity: 1,
          });

          if (colMedia) {
            gsap.set(colMedia, {
              yPercent: gsap.utils.interpolate(-12, 12, segProgress) + mouse.currentY * -7,
              xPercent: mouse.currentX * -6,
              scale: gsap.utils.interpolate(1.18, 1.12, segProgress),
            });
          }

          if (colText) {
            gsap.set(colText, {
              xPercent: mouse.currentX * 4,
              yPercent: gsap.utils.interpolate(0, -10, segProgress) + mouse.currentY * 3.5,
            });
          }
        } else {
          // Underneath Stack Cards
          const behindIndex = i - activeIndex;
          const currentDelta = behindIndex - segProgress;
          const currentYOffset = currentDelta * cardYOffset;
          const currentScale = 1 - currentDelta * cardScaleStep;
          const currentZ = -currentDelta * cardZStep;
          const currentOpacity = 1 - currentDelta * 0.05;

          gsap.set(card, {
            yPercent: -50 + currentYOffset,
            rotationX: mouse.currentY * -2 + velTilt * 0.4,
            rotationY: mouse.currentX * 2.5,
            rotationZ: 0,
            z: currentZ,
            scale: currentScale,
            opacity: currentOpacity,
          });

          if (colMedia) {
            gsap.set(colMedia, {
              yPercent: currentDelta * -4 + mouse.currentY * -3,
              xPercent: mouse.currentX * -3,
              scale: 1.12,
            });
          }

          if (colText) {
            gsap.set(colText, {
              xPercent: mouse.currentX * 2,
              yPercent: mouse.currentY * 2,
            });
          }
        }
      });
    };

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 5}px`,
      pin: true,
      pinSpacing: true,
      scrub: true,
      onUpdate: (self) => {
        currentProgress = self.progress;
        const vel = self.getVelocity ? self.getVelocity() : 0;
        currentVelocity = vel;
        updateCardTransforms();
      },
    });

    const tickerCallback = () => {
      mouse.currentX += (mouse.targetX - mouse.currentX) * 0.08;
      mouse.currentY += (mouse.targetY - mouse.currentY) * 0.08;
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
      className="brandappart-container"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#e3e3db",
        perspective: "1000px",
        perspectiveOrigin: "50% 50%",
        transformStyle: "preserve-3d",
        overflow: "hidden",
      }}
    >
      {/* Intro Overlay Title */}
      <div
        style={{
          position: "absolute",
          top: "6%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
            fontSize: "0.85rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#574e47",
            marginBottom: "0.3rem",
          }}
        >
          3D DYNAMIC STICKY CARDS ARCHITECTURE
        </p>
        <h2
          style={{
            fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "#1c1917",
            letterSpacing: "-0.01em",
            lineHeight: 1,
          }}
        >
          ENTER THE FRAME
        </h2>
      </div>

      {/* 4 BrandAppart 3D Cards */}
      <div ref={containerRef} style={{ width: "100%", height: "100%", position: "relative" }}>
        {/* CARD 1: Signal Drift / Quiet Control */}
        <div
          className="brand-card"
          id="card-1"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "76%",
            height: "64%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            padding: "2.5rem",
            borderRadius: "1.25rem",
            backgroundColor: "#3d2fa9",
            color: "#ffffff",
            transformOrigin: "center bottom",
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.28)",
            zIndex: 5,
          }}
        >
          <div className="col-text" style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace", fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.75)", marginBottom: "0.5rem" }}>
                QUIET CONTROL // REVENUE DEPT
              </p>
              <h1 style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.2rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                SIGNAL DRIFT: INCOME CERTIFICATE
              </h1>
            </div>

            <div>
              <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.5, marginBottom: "1.5rem", textTransform: "none" }}>
                Natural language intent recognition resolves raw citizen requests into exact Digital Gujarat application checklists in under 2 seconds.
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.25rem", borderRadius: "99px", background: "rgba(255, 255, 255, 0.15)", fontSize: "0.85rem", fontWeight: 700 }}>
                <Sparkles size={16} /> 99.4% INTENT MATCH ACCURACY
              </span>
            </div>
          </div>

          <div className="col-media" style={{ flex: 1, height: "100%", borderRadius: "0.85rem", overflow: "hidden", position: "relative", background: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "18px", background: "#ffffff", color: "#3d2fa9", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
                <FileText size={38} />
              </div>
              <h3 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "1.75rem", fontWeight: 800, textTransform: "uppercase" }}>INCOME PROOF MATRIX</h3>
              <p style={{ fontSize: "0.85rem", opacity: 0.85, marginTop: "0.25rem" }}>STAMP PAPER VALUE: ₹300 | FY 2025-26 VALID</p>
            </div>
          </div>
        </div>

        {/* CARD 2: Skyline Drift / Urban Pulse */}
        <div
          className="brand-card"
          id="card-2"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "76%",
            height: "64%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            padding: "2.5rem",
            borderRadius: "1.25rem",
            backgroundColor: "#ff7722",
            color: "#ffffff",
            transformOrigin: "center bottom",
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.28)",
            zIndex: 4,
          }}
        >
          <div className="col-text" style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace", fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.8)", marginBottom: "0.5rem" }}>
                URBAN PULSE // CIVIL SUPPLIES
              </p>
              <h1 style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.2rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                SKYLINE DRIFT: RATION MEMBER UPDATE
              </h1>
            </div>

            <div>
              <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.5, marginBottom: "1.5rem", textTransform: "none" }}>
                Automated household tree verification eliminates duplicate visits to civil supply offices across all urban municipal centers.
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.25rem", borderRadius: "99px", background: "rgba(0, 0, 0, 0.2)", fontSize: "0.85rem", fontWeight: 700 }}>
                <CheckCircle2 size={16} /> ZERO SURPRISE REJECTIONS
              </span>
            </div>
          </div>

          <div className="col-media" style={{ flex: 1, height: "100%", borderRadius: "0.85rem", overflow: "hidden", position: "relative", background: "rgba(0, 0, 0, 0.15)", border: "1px solid rgba(255, 255, 255, 0.25)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "18px", background: "#ffffff", color: "#ff7722", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
                <Zap size={38} />
              </div>
              <h3 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "1.75rem", fontWeight: 800, textTransform: "uppercase" }}>FAMILY TREE ADAPTER</h3>
              <p style={{ fontSize: "0.85rem", opacity: 0.85, marginTop: "0.25rem" }}>BIRTH CERTIFICATE & AADHAAR LINKED</p>
            </div>
          </div>
        </div>

        {/* CARD 3: Neural Assembly / Wired Thought */}
        <div
          className="brand-card"
          id="card-3"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "76%",
            height: "64%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            padding: "2.5rem",
            borderRadius: "1.25rem",
            backgroundColor: "#ff3d33",
            color: "#ffffff",
            transformOrigin: "center bottom",
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.28)",
            zIndex: 3,
          }}
        >
          <div className="col-text" style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace", fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.8)", marginBottom: "0.5rem" }}>
                WIRED THOUGHT // SOCIAL JUSTICE
              </p>
              <h1 style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.2rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                NEURAL ASSEMBLY: NON-CREAMY LAYER
              </h1>
            </div>

            <div>
              <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.5, marginBottom: "1.5rem", textTransform: "none" }}>
                OBC/SEBC quota concessions made simple with pre-filled self-declaration forms generated on demand.
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.25rem", borderRadius: "99px", background: "rgba(0, 0, 0, 0.2)", fontSize: "0.85rem", fontWeight: 700 }}>
                <ShieldCheck size={16} /> PRE-FILLED FORM 16-A
              </span>
            </div>
          </div>

          <div className="col-media" style={{ flex: 1, height: "100%", borderRadius: "0.85rem", overflow: "hidden", position: "relative", background: "rgba(0, 0, 0, 0.15)", border: "1px solid rgba(255, 255, 255, 0.25)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "18px", background: "#ffffff", color: "#ff3d33", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
                <ShieldCheck size={38} />
              </div>
              <h3 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "1.75rem", fontWeight: 800, textTransform: "uppercase" }}>OBC / SEBC CONCESSION</h3>
              <p style={{ fontSize: "0.85rem", opacity: 0.85, marginTop: "0.25rem" }}>3-YEAR VALIDITY AUTOMATIC EXTENSION</p>
            </div>
          </div>
        </div>

        {/* CARD 4: Learning Loop / Silent Repetition */}
        <div
          className="brand-card"
          id="card-4"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "76%",
            height: "64%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            padding: "2.5rem",
            borderRadius: "1.25rem",
            backgroundColor: "#2e6f40",
            color: "#ffffff",
            transformOrigin: "center bottom",
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.28)",
            zIndex: 2,
          }}
        >
          <div className="col-text" style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace", fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.8)", marginBottom: "0.5rem" }}>
                SILENT REPETITION // SOCIAL DEFENCE
              </p>
              <h1 style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.2rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                LEARNING LOOP: SENIOR PENSION
              </h1>
            </div>

            <div>
              <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.5, marginBottom: "1.5rem", textTransform: "none" }}>
                Dignified pension support for elderly citizens with zero physical queueing or bureaucratic delays.
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.25rem", borderRadius: "99px", background: "rgba(0, 0, 0, 0.2)", fontSize: "0.85rem", fontWeight: 700 }}>
                <Sparkles size={16} /> ₹0 GOVERNMENT WELFARE FEE
              </span>
            </div>
          </div>

          <div className="col-media" style={{ flex: 1, height: "100%", borderRadius: "0.85rem", overflow: "hidden", position: "relative", background: "rgba(0, 0, 0, 0.15)", border: "1px solid rgba(255, 255, 255, 0.25)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "18px", background: "#ffffff", color: "#2e6f40", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
                <CheckCircle2 size={38} />
              </div>
              <h3 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "1.75rem", fontWeight: 800, textTransform: "uppercase" }}>SENIOR WELFARE SCHEME</h3>
              <p style={{ fontSize: "0.85rem", opacity: 0.85, marginTop: "0.25rem" }}>DIRECT BENEFIT TRANSFER ENABLED</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
