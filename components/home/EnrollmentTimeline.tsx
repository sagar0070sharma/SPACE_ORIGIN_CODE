"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PhoneCall,
  CalendarCheck,
  Sparkles,
  Sliders,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { ENROLLMENT_STEPS } from "../../data/content";

const STEP_ICONS = [
  <PhoneCall key="1" className="w-5 h-5 text-cyan-400" />,
  <CalendarCheck key="2" className="w-5 h-5 text-purple-400" />,
  <Sparkles key="3" className="w-5 h-5 text-amber-400" />,
  <Sliders key="4" className="w-5 h-5 text-blue-400" />,
  <Rocket key="5" className="w-5 h-5 text-emerald-400 -rotate-45" />,
];

export default function EnrollmentTimeline() {
  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-600/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Rocket className="w-3.5 h-3.5 text-cyan-400 -rotate-45" />
            <span>Seamless Onboarding</span>
          </div>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Enroll Your School</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            From initial consultation to live campus launch in 5 simple, guided steps.
          </p>
        </div>

        {/* 5-Step Timeline Grid / Vertical on mobile, connected cards on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
          {ENROLLMENT_STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group relative p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] flex flex-col justify-between"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 font-orbitron font-extrabold text-base flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                  {step.step}
                </div>
                <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700">
                  {STEP_ICONS[idx]}
                </div>
              </div>

              {/* Title & Desc */}
              <div className="space-y-2 mb-4">
                <h3 className="font-orbitron font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300">
                  {step.description}
                </p>
              </div>

              {/* Contact / Highlight Badge */}
              <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-cyan-400/90 truncate">
                {step.contactDetails}
              </div>

              {/* Desktop arrow connector */}
              {idx < 4 && (
                <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 text-cyan-400/60 group-hover:text-cyan-300 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA button */}
        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-orbitron font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-105 transition-all"
          >
            <span>Start Step 01: Schedule a Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
