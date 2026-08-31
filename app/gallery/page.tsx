"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Eye, Camera, Rocket, ArrowRight } from "lucide-react";
import GalleryGrid from "../../components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="space-y-16 pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
          <Camera className="w-3.5 h-3.5 text-cyan-400" />
          <span>Visual Documentation</span>
        </div>

        <h1 className="font-orbitron font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
          Workshop <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">Gallery</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
          Explore real moments of wonder, celestial observation, rocket liftoffs, student robotics innovations, and proud certificate ceremonies across partner schools.
        </p>
      </section>

      {/* Main Gallery Grid with Category Filters & Lightbox */}
      <section>
        <GalleryGrid />
      </section>

      {/* Bottom CTA */}
      <section className="relative py-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl text-center space-y-4 max-w-4xl mx-auto">
          <h2 className="font-orbitron font-bold text-2xl sm:text-3xl text-white">
            Create Unforgettable Memories at Your School
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Book an Astronomy Night Camp or a Rocketry STEM Day to give your students a real scientific experience.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-orbitron font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-all"
            >
              <Rocket className="w-4 h-4 -rotate-45" />
              <span>Book an Astronomy Camp</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
