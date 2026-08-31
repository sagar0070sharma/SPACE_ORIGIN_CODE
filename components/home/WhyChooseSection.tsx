"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  GraduationCap,
  Telescope,
  Cpu,
  School,
  Award,
  Sparkles,
} from "lucide-react";
import { WHY_CHOOSE_US } from "../../data/content";

const ICON_MAP: Record<string, React.ReactNode> = {
  Hammer: <Wrench className="w-6 h-6 text-cyan-400" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-purple-400" />,
  Telescope: <Telescope className="w-6 h-6 text-blue-400" />,
  Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
  School: <School className="w-6 h-6 text-amber-400" />,
  Award: <Award className="w-6 h-6 text-violet-400" />,
};

export default function WhyChooseSection() {
  return (
    <section className="relative py-24 bg-[#04081c]/60 overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Excellence in STEM Pedagogy</span>
          </div>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Space Origin</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We move beyond standard textbooks to create high-octane experiential laboratories where students build, simulate, and observe the universe firsthand.
          </p>
        </div>

        {/* 6 Animated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] flex flex-col justify-between"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Icon Container */}
                <div className="w-13 h-13 rounded-xl p-3 bg-slate-800/80 border border-slate-700/60 inline-flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-cyan-400/60 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.4)]">
                  {ICON_MAP[card.icon]}
                </div>

                {/* Title */}
                <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {card.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                <span>PILLAR 0{idx + 1}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">ACTIVE</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
