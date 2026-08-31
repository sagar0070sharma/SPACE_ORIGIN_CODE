"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Sparkles, ArrowRight } from "lucide-react";
import HeroVisual from "../ui/HeroVisual";
import { SITE_CONFIG } from "../../data/content";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Nebulae */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-600/15 via-purple-600/15 to-transparent rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full filter blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Mission Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span>{SITE_CONFIG.slogan}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="font-orbitron font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
                SPACE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">ORIGIN</span>
              </h1>
              <p className="font-orbitron font-semibold text-lg sm:text-2xl text-cyan-200/90 tracking-wide">
                Advanced Space Education & Future Skills
              </p>
            </div>

            {/* Quote / Subtitle */}
            <blockquote className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 border-l-2 lg:border-cyan-400/60 lg:pl-4">
              "{SITE_CONFIG.heroQuote}"
            </blockquote>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/workshops"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-base font-orbitron font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] hover:scale-105 transition-all duration-300"
              >
                <Rocket className="w-5 h-5 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Explore Workshops</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base font-medium text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-cyan-400/60 hover:text-white hover:bg-slate-800/80 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0 border-t border-slate-800/80">
              {SITE_CONFIG.stats.map((item, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-slate-800/60 p-2.5 rounded-xl text-center">
                  <p className="font-orbitron font-bold text-lg sm:text-xl text-cyan-300">{item.value}</p>
                  <p className="text-[11px] text-slate-400 font-mono tracking-tight">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Space Globe & Orbit System */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
