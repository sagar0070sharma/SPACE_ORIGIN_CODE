"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Telescope,
  Cpu,
  Rocket,
  Code2,
  Users,
  Sparkles,
  ArrowRight,
  Sliders,
  TrendingUp,
} from "lucide-react";
import { DOMAINS } from "../../data/content";

const ICONS: Record<string, React.ReactNode> = {
  astronomy: <Telescope className="w-5 h-5" />,
  robotics: <Cpu className="w-5 h-5" />,
  "space-science": <Rocket className="w-5 h-5 -rotate-45" />,
  "ai-coding": <Code2 className="w-5 h-5" />,
  "personality-development": <Users className="w-5 h-5" />,
};

export default function DomainCurriculumMatrix() {
  const [selectedDomainId, setSelectedDomainId] = useState("astronomy");
  const [selectedCurriculum, setSelectedCurriculum] = useState<"foundational" | "progressive">("progressive");

  const activeDomain = DOMAINS.find((d) => d.id === selectedDomainId) || DOMAINS[0];

  return (
    <div className="space-y-8 p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/90 to-space-950/95 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.7)]">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive Matrix</span>
        </div>
        <h3 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white">
          Domain × Curriculum Experience
        </h3>
        <p className="text-xs sm:text-sm text-slate-300">
          Select any domain and curriculum model to explore tailored learning outcomes.
        </p>
      </div>

      {/* Domain Selection Tabs (5 Domains) */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {DOMAINS.map((domain) => {
          const isSelected = domain.id === selectedDomainId;
          return (
            <button
              key={domain.id}
              onClick={() => setSelectedDomainId(domain.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-orbitron font-semibold transition-all duration-300 ${
                isSelected
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.6)] scale-105"
                  : "bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-white"
              }`}
            >
              <span className={isSelected ? "text-slate-950" : "text-cyan-400"}>
                {ICONS[domain.id]}
              </span>
              <span>{domain.name}</span>
            </button>
          );
        })}
      </div>

      {/* Curriculum Model Switcher: Foundational ↔ Progressive */}
      <div className="flex items-center justify-center gap-4 py-2">
        <div className="p-1.5 rounded-full bg-slate-950 border border-slate-800 flex items-center gap-2">
          <button
            onClick={() => setSelectedCurriculum("foundational")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-orbitron font-bold transition-all ${
              selectedCurriculum === "foundational"
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>FOUNDATIONAL</span>
          </button>

          <span className="text-slate-600 text-xs">↔</span>

          <button
            onClick={() => setSelectedCurriculum("progressive")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-orbitron font-bold transition-all ${
              selectedCurriculum === "progressive"
                ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>PROGRESSIVE</span>
          </button>
        </div>
      </div>

      {/* Dynamic Display Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedDomainId}-${selectedCurriculum}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-4"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-orbitron font-extrabold text-lg sm:text-xl text-white">
                {activeDomain.name}
              </span>
              <span className="text-slate-500 font-mono">+</span>
              <span
                className={`font-orbitron font-bold text-sm px-2.5 py-0.5 rounded-full uppercase ${
                  selectedCurriculum === "foundational"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                    : "bg-purple-500/20 text-purple-300 border border-purple-400/30"
                }`}
              >
                {selectedCurriculum} Pathway
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {activeDomain.tagline}
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {selectedCurriculum === "foundational"
              ? activeDomain.progressiveMatrix.foundational
              : activeDomain.progressiveMatrix.progressive}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Includes experimental hardware kits, observation gear & certificates</span>
            </div>
            <Link
              href={`/contact?domain=${activeDomain.id}&curriculum=${selectedCurriculum}`}
              className="inline-flex items-center gap-2 text-xs font-orbitron font-bold text-cyan-400 hover:text-cyan-300 hover:underline"
            >
              <span>Consult with Curriculum Director</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
