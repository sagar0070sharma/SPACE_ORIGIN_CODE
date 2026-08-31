"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Sparkles, Star, ShieldCheck } from "lucide-react";
import { FOUNDER_INFO } from "../../data/content";

export default function FounderSpotlight() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#050816] via-[#080d28] to-[#050816] overflow-hidden">
      {/* Background Nebular Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Container Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Founder Image */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Outer Glow Halo */}
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-300 to-purple-600 filter blur-xl transition-all duration-500 ${
                  isHovered ? "opacity-90 scale-110 blur-2xl" : "opacity-50 scale-100"
                }`}
              />

              {/* Sparkle Stars on Hover */}
              {isHovered && (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -top-3 -right-2 text-cyan-300 z-20"
                  >
                    <Star className="w-6 h-6 fill-cyan-300 animate-spin-slow" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -bottom-2 -left-2 text-purple-300 z-20"
                  >
                    <Star className="w-5 h-5 fill-purple-400 animate-spin-reverse-slow" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-1/2 -left-6 text-amber-300 z-20"
                  >
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </motion.div>
                </>
              )}

              {/* Circular Border Container */}
              <motion.div
                animate={{ rotate: isHovered ? 2 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_40px_rgba(6,182,212,0.4)]"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-300/60 bg-slate-950">
                  <Image
                    src={FOUNDER_INFO.image}
                    alt={FOUNDER_INFO.name}
                    fill
                    className={`object-cover object-top transition-transform duration-500 ${
                      isHovered ? "scale-105" : "scale-100"
                    }`}
                    priority
                  />
                </div>
              </motion.div>

              {/* Founder Title Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-max px-4 py-1.5 rounded-full bg-slate-900/95 border border-cyan-400/50 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.4)] text-center">
                <p className="font-orbitron font-bold text-xs sm:text-sm text-white">
                  {FOUNDER_INFO.name}
                </p>
                <p className="text-[10px] text-cyan-300 font-mono">
                  {FOUNDER_INFO.role} • {FOUNDER_INFO.company}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Founder's Message */}
          <div className="lg:col-span-7 space-y-6">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
              <Quote className="w-3.5 h-3.5 text-purple-400" />
              <span>Founder's Message</span>
            </div>

            <h2 className="font-orbitron font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug">
              Transforming Curiosity Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Future Innovation
              </span>
            </h2>

            {/* Message Quote Card */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.6)]">
              <Quote className="absolute top-4 right-4 w-10 h-10 text-cyan-500/15 pointer-events-none" />
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                "{FOUNDER_INFO.quote}"
              </p>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-orbitron font-bold text-white text-sm sm:text-base">
                    — {FOUNDER_INFO.name}
                  </h4>
                  <p className="text-xs text-cyan-400 font-mono">
                    {FOUNDER_INFO.role}, {FOUNDER_INFO.company}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Leadership</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Astronomy Educator
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                STEM Innovator
              </span>
              <span>•</span>
              <span>Kashipur, Uttarakhand</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
