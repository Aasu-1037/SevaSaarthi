"use client";

import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

export const PixiStage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let isDisposed = false;
    const width = containerRef.current.clientWidth || 300;
    const height = containerRef.current.clientHeight || 150;

    const app = new PIXI.Application();

    async function initPixi() {
      try {
        await app.init({
          width,
          height,
          backgroundAlpha: 0,
          antialias: true,
          resolution: Math.min(window.devicePixelRatio, 2),
        });

        if (isDisposed) {
          app.destroy({ removeView: true });
          return;
        }

        if (!containerRef.current) return;
        containerRef.current.appendChild(app.canvas);

        // Create 2D Dot Graphics
        const graphics = new PIXI.Graphics();
        graphics.circle(0, 0, 6);
        graphics.fill({ color: 0xF4845F, alpha: 0.5 }); // Peach Coral

        const texture = app.renderer.generateTexture(graphics);

        const dots: PIXI.Sprite[] = [];
        const totalDots = 25;

        for (let i = 0; i < totalDots; i++) {
          const sprite = new PIXI.Sprite(texture);
          sprite.x = (i / totalDots) * width + 10;
          sprite.y = height / 2;
          app.stage.addChild(sprite);
          dots.push(sprite);
        }

        let count = 0;
        app.ticker.add(() => {
          count += 0.05;
          dots.forEach((dot, index) => {
            dot.y = height / 2 + Math.sin(count + index * 0.4) * 15;
          });
        });
      } catch (err) {
        console.error("Failed to initialize Pixi:", err);
      }
    }

    initPixi();

    return () => {
      isDisposed = true;
      try {
        if (app.renderer) {
          app.destroy({ removeView: true });
        }
      } catch {
        // Ignore destruction errors if destroyed before full initialization
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "80px",
        position: "relative",
        overflow: "hidden",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
};
