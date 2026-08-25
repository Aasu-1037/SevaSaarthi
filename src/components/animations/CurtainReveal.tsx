"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CurtainReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!revealed && (
          <motion.div
            key="curtain-container"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              pointerEvents: "none",
              display: "flex",
            }}
          >
            {/* Left Curtain Panel */}
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: "var(--color-bg-tertiary)",
                borderRight: "2px solid rgba(232, 114, 42, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingRight: "2rem",
                boxShadow: "var(--shadow-xl)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: "var(--color-brand-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                SEVA
              </span>
            </motion.div>

            {/* Right Curtain Panel */}
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: "var(--color-bg-secondary)",
                borderLeft: "2px solid rgba(232, 114, 42, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingLeft: "2rem",
                boxShadow: "var(--shadow-xl)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: "var(--color-text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                SAATHI
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
};
