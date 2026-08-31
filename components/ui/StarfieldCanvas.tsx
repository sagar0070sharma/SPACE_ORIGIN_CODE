"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
  color: string;
  twinkleSpeed: number;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Star Colors
    const colors = [
      "rgba(255, 255, 255, ",
      "rgba(147, 197, 253, ", // Blue-300
      "rgba(192, 132, 252, ", // Purple-400
      "rgba(34, 211, 238, ",  // Cyan-400
      "rgba(253, 224, 71, ",  // Yellow-300
    ];

    const starCount = Math.min(180, Math.floor((width * height) / 8000));
    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.02 + 0.005,
      color: colors[Math.floor(Math.random() * colors.length)],
      twinkleSpeed: Math.random() * 0.03 + 0.008,
    }));

    // Meteors / Shooting Stars
    const meteors: Meteor[] = Array.from({ length: 3 }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height / 2),
      length: Math.random() * 80 + 50,
      speed: Math.random() * 10 + 12,
      angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
      opacity: 0,
      active: false,
    }));

    let meteorTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Twinkling Stars
      stars.forEach((star) => {
        star.alpha += Math.sin(Date.now() * star.twinkleSpeed) * 0.01;
        if (star.alpha > 1) star.alpha = 1;
        if (star.alpha < 0.2) star.alpha = 0.2;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${star.alpha})`;
        ctx.shadowBlur = star.size > 1.8 ? 8 : 2;
        ctx.shadowColor = "#38bdf8";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Spawn Meteors
      meteorTimer++;
      if (meteorTimer > 180) {
        meteorTimer = 0;
        const inactiveMeteor = meteors.find((m) => !m.active);
        if (inactiveMeteor) {
          inactiveMeteor.x = Math.random() * width * 0.9;
          inactiveMeteor.y = Math.random() * (height * 0.4);
          inactiveMeteor.opacity = 1;
          inactiveMeteor.active = true;
        }
      }

      // Render Meteors
      meteors.forEach((m) => {
        if (!m.active) return;

        const endX = m.x - Math.cos(m.angle) * m.length;
        const endY = m.y - Math.sin(m.angle) * m.length;

        const gradient = ctx.createLinearGradient(m.x, m.y, endX, endY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${m.opacity})`);
        gradient.addColorStop(0.3, `rgba(56, 189, 248, ${m.opacity * 0.8})`);
        gradient.addColorStop(1, `rgba(168, 85, 247, 0)`);

        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.opacity -= 0.015;

        if (m.opacity <= 0 || m.x > width || m.y > height) {
          m.active = false;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
}
