"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layers,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Sliders,
  Award,
  BookOpen,
} from "lucide-react";

export default function CurriculumModels() {
  const [selectedPlan, setSelectedPlan] = useState<5 | 10 | 15>(10);

  const planDetails = {
    5: {
      title: "5 Workshops Intensive Track",
      hours: "15+ Hours Hands-On Labs",
      domains: ["Astronomy Sky Observation", "Hydro-Rocketry Launch", "Basic Sensors & Circuits"],
      desc: "Perfect for science month celebrations, STEM introduction camps, or focused hands-on intervention.",
    },
    10: {
      title: "10 Workshops Comprehensive Track",
      hours: "30+ Hours Hands-On Labs",
      domains: ["Telescope Mastery & Sunspots", "Rocketry & Payload Balancing", "Robotics Rover Prototyping", "AI & Prompt Engineering"],
      desc: "Our most popular package for annual activity schedules covering Astronomy, Rocketry, Robotics, and AI.",
    },
    15: {
      title: "15 Workshops Mastery Immersion",
      hours: "45+ Hours Hands-On Labs",
      domains: ["All 5 Core Domains", "Citizen Science Asteroid Hunting", "Autonomous Rover Maze Challenge", "Mission Control Pitching"],
      desc: "Deep-dive immersion spanning astronomy camps, rocketry launch competitions, robotics rovers, and public presentation drills.",
    },
  };

  const currentPlan = planDetails[selectedPlan];

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>Flexible Pedagogical Models</span>
        </div>
        <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Two Curriculum Models. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            One Goal: Future-Ready Students
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Schools can choose the approach that best fits their academic structure, calendar duration, and student development targets.
        </p>
      </div>

      {/* Two Premium Cards Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* 01 — Foundational Curriculum */}
        <motion.div
          whileHover={{ y: -4 }}
          className="relative p-7 sm:p-8 rounded-3xl bg-slate-900/80 border border-cyan-500/40 backdrop-blur-xl shadow-[0_0_35px_rgba(6,182,212,0.2)] flex flex-col justify-between"
        >
          <div className="space-y-6">
            {/* Header Badge */}
            <div className="flex items-center justify-between">
              <span className="font-orbitron font-bold text-xs tracking-widest text-cyan-400 uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
                01 — Foundational Curriculum
              </span>
              <Sliders className="w-5 h-5 text-cyan-400" />
            </div>

            <div>
              <h3 className="font-orbitron font-bold text-2xl text-white mb-2">
                Focused Learning Through Premium Workshops
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Designed for schools that want selected, high-impact learning experiences without making the programs part of the entire academic year.
              </p>
            </div>

            {/* Interactive Progression Selector: 5 -> 10 -> 15 */}
            <div className="space-y-3 p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                <span>SELECT WORKSHOP TIER:</span>
                <span className="text-cyan-300 font-bold">{selectedPlan} Workshops Tier</span>
              </div>

              {/* Number Buttons */}
              <div className="grid grid-cols-3 gap-3">
                {[5, 10, 15].map((num) => {
                  const isSelected = selectedPlan === num;
                  return (
                    <button
                      key={num}
                      onClick={() => setSelectedPlan(num as 5 | 10 | 15)}
                      className={`py-3 rounded-xl font-orbitron font-bold text-sm sm:text-base transition-all duration-300 flex flex-col items-center ${
                        isSelected
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.6)] scale-105"
                          : "bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-white"
                      }`}
                    >
                      <span>{num} Workshops</span>
                      <span className="text-[10px] font-mono opacity-80">
                        {num === 5 ? "Intro" : num === 10 ? "Popular" : "Immersion"}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Live Info for Selected Plan */}
              <motion.div
                key={selectedPlan}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="pt-3 border-t border-slate-800/80 space-y-2 text-xs"
              >
                <div className="flex items-center justify-between text-cyan-300 font-mono">
                  <span>{currentPlan.title}</span>
                  <span className="bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-400/30">
                    {currentPlan.hours}
                  </span>
                </div>
                <p className="text-slate-300">{currentPlan.desc}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentPlan.domains.map((dom, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-slate-900 text-[11px] text-cyan-200 border border-slate-800"
                    >
                      ✓ {dom}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Best For Bullets */}
            <div className="space-y-2 pt-2">
              <h4 className="font-orbitron text-xs font-bold text-slate-400 uppercase tracking-wider">
                Best For
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Focused school interventions</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Annual activity enrichment</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Flexible topic customization</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Short-term STEM camps</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6 mt-6 border-t border-slate-800">
            <Link
              href={`/contact?curriculum=foundational&plan=${selectedPlan}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-orbitron font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] hover:scale-102 transition-all"
            >
              <span>Design My School's Foundation Plan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* 02 — Progressive Curriculum */}
        <motion.div
          whileHover={{ y: -4 }}
          className="relative p-7 sm:p-8 rounded-3xl bg-slate-900/80 border border-purple-500/40 backdrop-blur-xl shadow-[0_0_35px_rgba(168,85,247,0.2)] flex flex-col justify-between"
        >
          <div className="space-y-6">
            {/* Header Badge */}
            <div className="flex items-center justify-between">
              <span className="font-orbitron font-bold text-xs tracking-widest text-purple-400 uppercase bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/30">
                02 — Progressive Curriculum
              </span>
              <TrendingUp className="w-5 h-5 text-purple-400" />
            </div>

            <div>
              <h3 className="font-orbitron font-bold text-2xl text-white mb-2">
                Learning That Evolves Every Year
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Year-long learning model where Space Origin's programs become part of the school's curriculum as a continuous subject that builds competency year after year.
              </p>
            </div>

            {/* Staircase Trajectory Visualization */}
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
              <div className="text-xs font-mono text-slate-400 mb-2">
                PROGRESSIVE STAIRCASE LEARNING TRAJECTORY:
              </div>

              <div className="space-y-2">
                {/* Step 1 */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono font-bold">
                      Class 6
                    </span>
                    <span className="font-orbitron font-bold text-white">DISCOVER</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">Foundational Astronomy & Circuits</span>
                </div>

                {/* Step 2 */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono font-bold">
                      Class 7
                    </span>
                    <span className="font-orbitron font-bold text-white">BUILD</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">Robotics & CanSat Payload Telemetry</span>
                </div>

                {/* Step 3 */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-950/50 border border-purple-500/40 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono font-bold">
                      Class 8
                    </span>
                    <span className="font-orbitron font-bold text-white">ADVANCE</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">Python AI, Orbital Physics & rovers</span>
                </div>

                {/* Step 4 */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-900/50 border border-purple-400/50 text-xs shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-purple-400 text-slate-950 font-mono font-extrabold">
                      Class 9+
                    </span>
                    <span className="font-orbitron font-extrabold text-white">MASTER</span>
                  </div>
                  <span className="text-purple-200 text-[11px] font-semibold">Asteroid Hunting & Hackathon Pitching</span>
                </div>
              </div>
            </div>

            {/* What Makes It Different */}
            <div className="space-y-2 pt-2">
              <h4 className="font-orbitron text-xs font-bold text-slate-400 uppercase tracking-wider">
                What Makes It Different
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Year-long structured curriculum</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Continuous learning progression</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Concepts build year-after-year</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Deep subject competency</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6 mt-6 border-t border-slate-800">
            <Link
              href="/contact?curriculum=progressive"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-orbitron font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:scale-102 transition-all"
            >
              <span>Build a Progressive Curriculum</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
