"use client";

import React from "react";
import Image from "next/image";
import { Building, Sparkles } from "lucide-react";
import { PARTNERS_LIST } from "../../data/content";

export default function PartnersMarquee() {
  // Duplicate list to achieve continuous seamless loop
  const marqueeItems = [...PARTNERS_LIST, ...PARTNERS_LIST];

  return (
    <section className="relative py-20 bg-[#030614] border-y border-cyan-500/15 overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center space-y-2 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Institutional Trust</span>
        </div>
        <h2 className="font-orbitron font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
          Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Schools & Organizations</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Collaborating with educational institutions and organizations to inspire the next generation.
        </p>
      </div>

      {/* Infinite Marquee Track with CSS Animation */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max items-center gap-6 py-4 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
          {marqueeItems.map((partner, idx) => (
            <div
              key={idx}
              className="group relative flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] backdrop-blur-xl transition-all duration-300 hover:scale-108 cursor-pointer select-none shrink-0"
            >
              {/* Partner Logo / Badge */}
              <div className="relative w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 p-1 flex items-center justify-center overflow-hidden shrink-0 group-hover:border-cyan-400/60">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-0.5"
                  />
                ) : (
                  <Building className="w-6 h-6 text-cyan-400" />
                )}
              </div>

              {/* Partner Name & Tag */}
              <div className="flex flex-col pr-2">
                <span className="font-orbitron font-semibold text-xs sm:text-sm text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-tight">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary reverse slow subtle track */}
      <div className="relative w-full overflow-hidden mt-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max items-center gap-6 py-2 animate-[marquee-reverse_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...marqueeItems].reverse().map((partner, idx) => (
            <div
              key={`rev-${idx}`}
              className="group flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-950/60 border border-slate-900 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-105 shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-purple-400 transition-colors" />
              <span className="text-xs text-slate-300 group-hover:text-white font-medium whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
}
