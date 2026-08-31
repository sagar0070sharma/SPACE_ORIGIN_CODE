"use client";

import React from "react";
import Link from "next/link";
import { Rocket, PhoneCall, Sparkles, ArrowRight } from "lucide-react";

export default function WorkshopsCTA() {
  return (
    <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-900/90 to-purple-950/60 border border-cyan-500/40 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.25)] text-center space-y-6 overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Transform Your Campus</span>
        </div>

        <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
          Your School. Your Students. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
            Their Future.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Whether your school wants focused premium workshops or a year-long progressive curriculum, Space Origin can create a tailored learning pathway around your exact academic requirements.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-orbitron font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] hover:scale-105 transition-all"
          >
            <PhoneCall className="w-4 h-4 text-slate-950" />
            <span>Talk to Our Team</span>
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-orbitron text-sm font-semibold text-white bg-slate-900 border border-slate-700 hover:border-cyan-400/60 hover:bg-slate-800 transition-all"
          >
            <span>Learn About Our Mission</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>
      </div>
    </div>
  );
}
