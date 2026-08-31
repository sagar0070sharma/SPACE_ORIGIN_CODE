"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Telescope,
  Cpu,
  Rocket,
  Code2,
  Users,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { DOMAINS, DomainInfo } from "../../data/content";
import DomainCardModal from "./DomainCardModal";

const ICONS: Record<string, React.ReactNode> = {
  astronomy: <Telescope className="w-5 h-5 text-cyan-400" />,
  robotics: <Cpu className="w-5 h-5 text-purple-400" />,
  "space-science": <Rocket className="w-5 h-5 text-blue-400 -rotate-45" />,
  "ai-coding": <Code2 className="w-5 h-5 text-emerald-400" />,
  "personality-development": <Users className="w-5 h-5 text-pink-400" />,
};

export default function DomainsGrid() {
  const [selectedDomain, setSelectedDomain] = useState<DomainInfo | null>(null);

  const astronomy = DOMAINS.find((d) => d.id === "astronomy")!;
  const robotics = DOMAINS.find((d) => d.id === "robotics")!;
  const spaceScience = DOMAINS.find((d) => d.id === "space-science")!;
  const aiCoding = DOMAINS.find((d) => d.id === "ai-coding")!;
  const personality = DOMAINS.find((d) => d.id === "personality-development")!;

  return (
    <div className="space-y-12">
      {/* Editorial Grid */}
      <div className="space-y-8">
        
        {/* Row 1: Astronomy (Large Feature - 7 cols) + Robotics (Medium - 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 1. Astronomy Large Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedDomain(astronomy)}
            className="lg:col-span-7 group relative rounded-3xl bg-slate-900/70 border border-cyan-500/30 hover:border-cyan-400/80 p-7 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[440px]"
          >
            {/* Background image area with generous spacing */}
            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
              <Image
                src={astronomy.image}
                alt={astronomy.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              {/* Star sparkles badge on image */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Domain 01</span>
              </div>

              {/* Tagline Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-orbitron font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  {astronomy.tagline}
                </p>
              </div>
            </div>

            {/* Content info */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/30">
                    {ICONS[astronomy.id]}
                  </div>
                  <h3 className="font-orbitron font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                    {astronomy.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-xs font-orbitron font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {astronomy.shortDesc}
              </p>
            </div>
          </motion.div>

          {/* 2. Robotics Medium Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedDomain(robotics)}
            className="lg:col-span-5 group relative rounded-3xl bg-slate-900/70 border border-purple-500/30 hover:border-purple-400/80 p-7 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[440px]"
          >
            {/* Image Area */}
            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-slate-800 group-hover:border-purple-500/40 transition-colors">
              <Image
                src={robotics.image}
                alt={robotics.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-purple-400/40 text-purple-300 text-xs font-mono backdrop-blur-md">
                <Cpu className="w-3.5 h-3.5" />
                <span>Domain 02</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-orbitron font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                  {robotics.tagline}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-400/30">
                    {ICONS[robotics.id]}
                  </div>
                  <h3 className="font-orbitron font-bold text-2xl text-white group-hover:text-purple-300 transition-colors">
                    {robotics.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-xs font-orbitron font-semibold text-purple-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {robotics.shortDesc}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Space Science (6 cols) + AI & Coding (6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 3. Space Science Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedDomain(spaceScience)}
            className="lg:col-span-6 group relative rounded-3xl bg-slate-900/70 border border-blue-500/30 hover:border-blue-400/80 p-7 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[440px]"
          >
            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-slate-800 group-hover:border-blue-500/40 transition-colors">
              <Image
                src={spaceScience.image}
                alt={spaceScience.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-blue-400/40 text-blue-300 text-xs font-mono backdrop-blur-md">
                <Rocket className="w-3.5 h-3.5 -rotate-45" />
                <span>Domain 03</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-orbitron font-bold text-lg text-white group-hover:text-blue-300 transition-colors">
                  {spaceScience.tagline}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-400/30">
                    {ICONS[spaceScience.id]}
                  </div>
                  <h3 className="font-orbitron font-bold text-2xl text-white group-hover:text-blue-300 transition-colors">
                    {spaceScience.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-xs font-orbitron font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {spaceScience.shortDesc}
              </p>
            </div>
          </motion.div>

          {/* 4. AI & Coding Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedDomain(aiCoding)}
            className="lg:col-span-6 group relative rounded-3xl bg-slate-900/70 border border-emerald-500/30 hover:border-emerald-400/80 p-7 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[440px]"
          >
            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-slate-800 group-hover:border-emerald-500/40 transition-colors">
              <Image
                src={aiCoding.image}
                alt={aiCoding.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-emerald-400/40 text-emerald-300 text-xs font-mono backdrop-blur-md">
                <Code2 className="w-3.5 h-3.5" />
                <span>Domain 04</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-orbitron font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                  {aiCoding.tagline}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-400/30">
                    {ICONS[aiCoding.id]}
                  </div>
                  <h3 className="font-orbitron font-bold text-2xl text-white group-hover:text-emerald-300 transition-colors">
                    {aiCoding.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-xs font-orbitron font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {aiCoding.shortDesc}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Row 3: Personality Development (Full Width Feature Card) */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedDomain(personality)}
          className="group relative rounded-3xl bg-slate-900/70 border border-pink-500/30 hover:border-pink-400/80 p-7 sm:p-8 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.35)] cursor-pointer transition-all duration-300 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Area */}
            <div className="lg:col-span-6 relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-800 group-hover:border-pink-500/40 transition-colors">
              <Image
                src={personality.image}
                alt={personality.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-pink-400/40 text-pink-300 text-xs font-mono backdrop-blur-md">
                <Users className="w-3.5 h-3.5" />
                <span>Domain 05 (Core Soft Skills)</span>
              </div>
            </div>

            {/* Copy Area */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-pink-500/10 border border-pink-400/30">
                  {ICONS[personality.id]}
                </div>
                <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-white group-hover:text-pink-300 transition-colors">
                  {personality.name}
                </h3>
              </div>

              <p className="font-orbitron font-semibold text-base text-pink-300">
                "{personality.tagline}"
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {personality.longDesc}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-orbitron font-bold text-pink-400 group-hover:text-pink-300">
                <span>Click to Expand Full Curriculum & Activities</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Interactive Modal Dialog */}
      <DomainCardModal
        domain={selectedDomain}
        onClose={() => setSelectedDomain(null)}
      />
    </div>
  );
}
