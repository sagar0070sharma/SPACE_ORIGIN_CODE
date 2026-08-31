"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Compass, Radio } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* Outer Glow Nebula Background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-600/20 to-blue-500/10 filter blur-3xl animate-pulse-glow" />

      {/* Orbit Ring 1 - Deep outer */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[94%] h-[94%] rounded-full border border-cyan-500/20 border-dashed"
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400/80 shadow-[0_0_12px_#00f0ff] flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>

      {/* Orbit Ring 2 duplicate for layered effect */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute w-[78%] h-[78%] rounded-full border border-purple-500/30"
      >
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-slate-900/90 border border-purple-400/60 px-2 py-0.5 rounded-full text-[10px] text-purple-200 font-mono shadow-[0_0_15px_rgba(168,85,247,0.6)]">
          <Radio className="w-2.5 h-2.5 text-purple-400 animate-pulse" />
          <span>SO-2026</span>
        </div>

        <div className="absolute -bottom-2 right-1/4 w-3 h-3 rounded-full bg-purple-400/60 shadow-[0_0_8px_#a855f7]" />
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute w-[78%] h-[78%] rounded-full border border-purple-500/30"
      >
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-slate-900/90 border border-purple-400/60 px-2 py-0.5 rounded-full text-[10px] text-purple-200 font-mono shadow-[0_0_15px_rgba(168,85,247,0.6)]">
          <Radio className="w-2.5 h-2.5 text-purple-400 animate-pulse" />
          <span>SO2-2026</span>
        </div>

        <div className="absolute -bottom-2 right-1/4 w-3 h-3 rounded-full bg-purple-400/60 shadow-[0_0_8px_#a855f7]" />
      </motion.div>

      {/* Orbit Ring 3 - Inner Gold Accent */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute w-[62%] h-[62%] rounded-full border border-amber-400/25 border-dotted"
      >
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-400/90 shadow-[0_0_10px_#fbbf24]" />
      </motion.div>

      {/* Core Glowing Holographic Earth / Planet Sphere */}
      <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full p-1 bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 shadow-[0_0_60px_rgba(6,182,212,0.45)]">
        <div className="w-full h-full rounded-full bg-[#070e28] overflow-hidden relative flex items-center justify-center">
          {/* Internal planetary grid textures */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.4),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.3),transparent_60%)]" />

          {/* Latitude & Longitude lines */}
          <div className="absolute inset-2 rounded-full border border-cyan-400/20 opacity-70" />
          <div className="absolute inset-6 rounded-full border border-cyan-400/15 opacity-60" />
          <div className="absolute w-full h-[1px] bg-cyan-400/30 top-1/2" />
          <div className="absolute h-full w-[1px] bg-cyan-400/30 left-1/2" />

          {/* Central Logo / Mission Badge */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 flex flex-col items-center text-center p-4"
          >
            <div className="p-3 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.5)] mb-1 flex items-center justify-center">
              <Image
                src="/images/About/LOGO_Round.png"
                alt="Space Origin Logo"
                width={88}
                height={88}
                className="object-contain"
                priority
              />
            </div>

            <span className="font-orbitron font-bold text-xs tracking-widest text-white uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              Space Origin
            </span>
            <span className="text-[9px] font-mono text-cyan-300/80 tracking-wider">
              EST. INDIA
            </span>
          </motion.div>
        </div>
      </div>

      {/* Floating Interactive Badges */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-2 right-4 sm:right-8 bg-slate-900/85 border border-cyan-500/40 px-3 py-1.5 rounded-xl backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.25)] flex items-center gap-2"
      >
        <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
        <div>
          <p className="text-[10px] text-slate-400 font-mono">Curriculum</p>
          <p className="text-xs font-semibold text-cyan-200">5 STEM Domains</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-2 left-4 sm:left-6 bg-slate-900/85 border border-purple-500/40 px-3 py-1.5 rounded-xl backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.25)] flex items-center gap-2"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        <div>
          <p className="text-[10px] text-slate-400 font-mono">Experience</p>
          <p className="text-xs font-semibold text-purple-200">100% Hands-on Labs</p>
        </div>
      </motion.div>
    </div>
  );
}