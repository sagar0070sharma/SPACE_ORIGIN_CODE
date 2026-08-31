"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Rocket,
  Sparkles,
  Telescope,
  Cpu,
  Code2,
  Users,
  Compass,
  Layers,
  ArrowRight,
} from "lucide-react";

import DomainsGrid from "../../components/workshops/DomainsGrid";
import CurriculumModels from "../../components/workshops/CurriculumModels";
import CurriculumComparison from "../../components/workshops/CurriculumComparison";
import DomainCurriculumMatrix from "../../components/workshops/DomainCurriculumMatrix";
import WorkshopsCTA from "../../components/workshops/WorkshopsCTA";

export default function WorkshopsPage() {
  return (
    <div className="space-y-24 pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Page Header */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Where Curiosity Meets Future Skills</span>
        </div>

        <h1 className="font-orbitron font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">Domains & Curriculum</span>
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
          At Space Origin, we work across five major domains that help students understand the world around them, explore the universe, build technology, and develop the skills needed for the future. Our programs combine hands-on learning, scientific exploration, technology, creativity, problem-solving, and personal growth.
        </p>
      </section>

      {/* 2. 5 Core Domains Editorial Grid (with Expandable Modals) */}
      <section className="space-y-8">
        <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
          <div>
            <h2 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white">
              Our 5 Core Domains
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Click any domain card to view detailed syllabi, practical hardware kits, and telescope activities.
            </p>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
            Interactive Panels
          </span>
        </div>

        <DomainsGrid />
      </section>

      {/* 3. Two Curriculum Models (Foundational vs. Progressive) */}
      <section className="pt-8">
        <CurriculumModels />
      </section>

      {/* 4. Curriculum Comparison Matrix */}
      <section className="pt-8">
        <CurriculumComparison />
      </section>

      {/* 5. Domain × Curriculum Interactive Visual Experience */}
      <section className="pt-8">
        <DomainCurriculumMatrix />
      </section>

      {/* 6. Section Call To Action */}
      <section className="pt-8">
        <WorkshopsCTA />
      </section>

    </div>
  );
}
