"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AwardPreloader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const slogans = [
    "Government services...",
    "Without the confusion.",
    "Designed for citizens.",
    "SEVASAATHI",
  ];

  useEffect(() => {
    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 3;
        return next > 100 ? 100 : next;
      });
    }, 60);

    // Text rotation
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % slogans.length);
    }, 450);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key="award-preloader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1] },
            }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              backgroundColor: "var(--color-bg-primary)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "clamp(2rem, 5vw, 4rem)",
              overflow: "hidden",
            }}
          >
            {/* Top Bar */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-brand-primary)",
                    display: "inline-block",
                  }}
                />
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem" }}>
                  SEVASAATHI
                </span>
              </div>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-text-muted)" }}>
                CITIZEN PROTOTYPE
              </span>
            </div>

            {/* Middle Slogan & Progress Bar */}
            <div style={{ maxWidth: "800px" }}>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={textIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                    fontWeight: 800,
                    color: "var(--color-text-primary)",
                    marginBottom: "1.5rem",
                    lineHeight: 1.1,
                  }}
                >
                  {slogans[textIndex]}
                </motion.h2>
              </AnimatePresence>

              {/* Progress Line */}
              <div style={{ width: "100%", height: "4px", backgroundColor: "var(--color-bg-tertiary)", borderRadius: "var(--radius-pill)", overflow: "hidden" }}>
                <motion.div
                  style={{
                    height: "100%",
                    backgroundColor: "var(--color-brand-primary)",
                    width: `${progress}%`,
                    transition: "width 0.1s linear",
                  }}
                />
              </div>
            </div>

            {/* Bottom Giant Counter */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <span style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", fontWeight: 600 }}>
                Digital Gujarat Guidance Experience
              </span>

              <motion.span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(4rem, 14vw, 12rem)",
                  fontWeight: 900,
                  lineHeight: 0.85,
                  letterSpacing: "-0.04em",
                  color: "var(--color-brand-primary)",
                }}
              >
                {progress < 10 ? `0${progress}` : progress}%
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
};
