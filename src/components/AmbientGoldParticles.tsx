"use client";

import React, { useEffect, useRef } from "react";

interface AmbientGoldParticlesProps {
  density?: number; // Number of particles, default ~35
  colorScheme?: "gold" | "white" | "mixed";
  className?: string;
  speed?: number; // Default 0.4
}

export default function AmbientGoldParticles({
  density = 35,
  colorScheme = "mixed",
  className = "absolute inset-0 pointer-events-none select-none z-0",
  speed = 0.4,
}: AmbientGoldParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Particle definition
    interface Particle {
      x: number;
      y: number;
      radius: number;
      baseAlpha: number;
      twinklePhase: number;
      twinkleSpeed: number;
      vx: number;
      vy: number;
      hue: "gold" | "ivory" | "champagne";
    }

    const particles: Particle[] = [];

    const hues = {
      gold: "197, 160, 89", // #C5A059
      ivory: "245, 239, 230", // #F5EFE6
      champagne: "223, 204, 163", // #DFCCA3
    };

    const createParticle = (): Particle => {
      const selectedHue =
        colorScheme === "gold"
          ? "gold"
          : colorScheme === "white"
          ? "ivory"
          : Math.random() > 0.4
          ? "gold"
          : Math.random() > 0.5
          ? "champagne"
          : "ivory";

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6, // 0.6px to 2.4px
        baseAlpha: Math.random() * 0.35 + 0.15,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        vx: (Math.random() - 0.5) * 0.25 * speed,
        vy: -(Math.random() * 0.35 + 0.15) * speed, // Gentle upward floating
        hue: selectedHue,
      };
    };

    // Populate initial particles
    for (let i = 0; i < density; i++) {
      particles.push(createParticle());
    }

    // Resize observer
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update positions
        p.x += p.vx;
        p.y += p.vy;
        p.twinklePhase += p.twinkleSpeed;

        // Wrap around boundaries
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Calculate opacity with smooth sinusoidal twinkle
        const alpha = Math.max(
          0.05,
          p.baseAlpha + Math.sin(p.twinklePhase) * 0.18
        );

        const rgb = hues[p.hue];

        // Draw soft outer glow for larger particles
        if (p.radius > 1.4) {
          const glowGrad = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.radius * 3.5
          );
          glowGrad.addColorStop(0, `rgba(${rgb}, ${alpha * 0.4})`);
          glowGrad.addColorStop(1, `rgba(${rgb}, 0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = glowGrad;
          ctx.fill();
        }

        // Draw core particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [density, colorScheme, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
}
