"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Rocket, Telescope, Cpu, Code2, Users, ArrowRight, Sparkles } from "lucide-react";
import { DomainInfo } from "../../data/content";

interface DomainCardModalProps {
  domain: DomainInfo | null;
  onClose: () => void;
}

const DOMAIN_ICONS: Record<string, React.ReactNode> = {
  astronomy: <Telescope className="w-6 h-6 text-cyan-400" />,
  robotics: <Cpu className="w-6 h-6 text-purple-400" />,
  "space-science": <Rocket className="w-6 h-6 text-blue-400 -rotate-45" />,
  "ai-coding": <Code2 className="w-6 h-6 text-emerald-400" />,
  "personality-development": <Users className="w-6 h-6 text-pink-400" />,
};

export default function DomainCardModal({ domain, onClose }: DomainCardModalProps) {
  if (!domain) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-cyan-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.35)] z-10 text-white space-y-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-cyan-500/20 text-slate-400 hover:text-white border border-slate-700 transition-colors"
            aria-label="Close domain modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Area */}
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-slate-800 border border-cyan-500/30">
              {DOMAIN_ICONS[domain.id]}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
                  STEM Domain Module
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-xs font-mono text-slate-400">Grades 3–12</span>
              </div>
              <h2 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white">
                {domain.name}
              </h2>
            </div>
          </div>

          {/* Top Image Banner */}
          <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-slate-800">
            <Image
              src={domain.image}
              alt={domain.name}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-orbitron font-bold text-lg text-cyan-300">
                "{domain.tagline}"
              </p>
            </div>
          </div>

          {/* Long Description */}
          <div className="space-y-2">
            <h3 className="font-orbitron text-sm font-bold text-slate-300 uppercase tracking-wider">
              About This Domain
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {domain.longDesc}
            </p>
          </div>

          {/* Two-Column Details: Topics & Hands-on */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Key Topics */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3">
              <h4 className="font-orbitron text-sm font-bold text-cyan-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Core Conceptual Syllabus
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {domain.keyTopics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hands-On Experiments */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3">
              <h4 className="font-orbitron text-sm font-bold text-purple-400 flex items-center gap-2">
                <Rocket className="w-4 h-4 text-purple-400 -rotate-45" />
                Hands-on Lab Experiments
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {domain.handsOnActivities.map((act, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Progressive Progression Box */}
          <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-2">
            <h4 className="font-orbitron text-xs font-bold text-cyan-300 uppercase tracking-widest">
              Multi-Year Progressive Trajectory
            </h4>
            <p className="text-xs sm:text-sm font-mono text-cyan-200/90 leading-relaxed">
              {domain.progressiveMatrix.progressive}
            </p>
          </div>

          {/* Footer CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <button
              onClick={onClose}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              ← Back to All Domains
            </button>
            <Link
              href={`/contact?domain=${domain.id}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-orbitron font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] hover:scale-105 transition-all"
            >
              <span>Book {domain.name} Workshop</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
