"use client";

import React, { useState } from "react";
import { HelpCircle, Sliders, TrendingUp } from "lucide-react";
import { COMPARISON_DATA } from "../../data/content";

export default function CurriculumComparison() {
  const [activeTab, setActiveTab] = useState<"both" | "foundational" | "progressive">("both");

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>Decision Guide</span>
        </div>
        <h2 className="font-orbitron font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
          Which Curriculum Is Right For Your School?
        </h2>
        <p className="text-sm sm:text-base text-slate-300">
          Compare our two learning models side-by-side to select the ideal pathway for your institution.
        </p>

        {/* View Toggle on smaller devices / desktop filter */}
        <div className="inline-flex p-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-orbitron mt-3">
          <button
            onClick={() => setActiveTab("both")}
            className={`px-4 py-1.5 rounded-full transition-all ${
              activeTab === "both"
                ? "bg-slate-800 text-cyan-300 shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Side-by-Side
          </button>
          <button
            onClick={() => setActiveTab("foundational")}
            className={`px-4 py-1.5 rounded-full transition-all ${
              activeTab === "foundational"
                ? "bg-cyan-500 text-slate-950 font-bold shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Foundational
          </button>
          <button
            onClick={() => setActiveTab("progressive")}
            className={`px-4 py-1.5 rounded-full transition-all ${
              activeTab === "progressive"
                ? "bg-purple-600 text-white font-bold shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Progressive
          </button>
        </div>
      </div>

      {/* Comparison Table / Cards */}
      <div className="overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80">
                <th className="p-4 sm:p-6 font-orbitron text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider w-1/4">
                  Feature
                </th>
                {(activeTab === "both" || activeTab === "foundational") && (
                  <th className="p-4 sm:p-6 font-orbitron text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-wider bg-cyan-950/20 border-l border-slate-800">
                    <div className="flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-cyan-400" />
                      <span>Foundational Model</span>
                    </div>
                  </th>
                )}
                {(activeTab === "both" || activeTab === "progressive") && (
                  <th className="p-4 sm:p-6 font-orbitron text-xs sm:text-sm font-bold text-purple-300 uppercase tracking-wider bg-purple-950/20 border-l border-slate-800">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-purple-400" />
                      <span>Progressive Model</span>
                    </div>
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70 text-xs sm:text-sm">
              {COMPARISON_DATA.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-800/40 transition-colors group"
                >
                  <td className="p-4 sm:p-6 font-orbitron font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {row.feature}
                  </td>
                  {(activeTab === "both" || activeTab === "foundational") && (
                    <td className="p-4 sm:p-6 text-slate-300 border-l border-slate-800/80 bg-cyan-950/5 leading-relaxed">
                      {row.foundational}
                    </td>
                  )}
                  {(activeTab === "both" || activeTab === "progressive") && (
                    <td className="p-4 sm:p-6 text-slate-300 border-l border-slate-800/80 bg-purple-950/5 leading-relaxed">
                      {row.progressive}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
