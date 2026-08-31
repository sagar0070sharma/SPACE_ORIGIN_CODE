"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Rocket,
  Sparkles,
  ArrowRight,
  Telescope,
  ChevronRight,
  Eye,
} from "lucide-react";

import HeroSection from "../components/home/HeroSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import FounderSpotlight from "../components/home/FounderSpotlight";
import PartnersMarquee from "../components/home/PartnersMarquee";
import EnrollmentTimeline from "../components/home/EnrollmentTimeline";
import DomainsGrid from "../components/workshops/DomainsGrid";
import CurriculumModels from "../components/workshops/CurriculumModels";
import { GALLERY_ITEMS } from "../data/content";

export default function HomePage() {
  const featuredGallery = GALLERY_ITEMS.slice(0, 6);

  return (
    <div className="space-y-24">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Why Choose Space Origin (6 Glassmorphism Animated Cards) */}
      <WhyChooseSection />

      {/* 3. 5 Core Domains Preview */}
      <section className="relative py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Telescope className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Space Labs</span>
          </div>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Our 5 Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">STEM Domains</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Where curiosity meets future skills. Click any domain to explore topics, telescope handling, and experimental kits.
          </p>
        </div>

        <DomainsGrid />

        <div className="mt-10 text-center">
          <Link
            href="/workshops"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-orbitron text-xs sm:text-sm font-bold text-cyan-300 bg-slate-900/90 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)]"
          >
            <span>Explore Complete Curriculum Matrix & Syllabi</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. Two Curriculum Models */}
      <section className="relative py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CurriculumModels />
      </section>

      {/* 5. Institutional Partners Infinite Slider */}
      <PartnersMarquee />

      {/* 6. How to Enroll 5-Step Timeline */}
      <EnrollmentTimeline />

      {/* 7. Founder Spotlight (Sarvsrest Belwal) */}
      <FounderSpotlight />

      {/* 8. Workshop Moments Gallery Teaser */}
      <section className="relative py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-2">
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>Real Campus Photos</span>
            </div>
            <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white">
              Workshop Highlights
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-orbitron text-xs sm:text-sm font-bold text-cyan-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-cyan-400 transition-all"
          >
            <span>View All 23 Photos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGallery.map((item) => (
            <Link
              key={item.id}
              href="/gallery"
              className="group relative h-64 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-400/80 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono text-cyan-300 uppercase bg-slate-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                  {item.categoryLabel}
                </span>
                <p className="font-orbitron font-bold text-sm text-white mt-1.5 line-clamp-1 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 9. High Impact Call to Action Banner */}
      <section className="relative py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-cyan-950/80 via-slate-900/95 to-purple-950/80 border border-cyan-400/40 backdrop-blur-2xl shadow-[0_0_60px_rgba(6,182,212,0.3)] text-center space-y-6 overflow-hidden">
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-xs font-mono uppercase tracking-widest">
              <Rocket className="w-4 h-4 text-cyan-400 -rotate-45" />
              <span>Ignite Your School's Space Lab</span>
            </div>

            <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Ready to Inspire Your Students?
            </h2>

            <p className="font-orbitron text-lg sm:text-xl text-cyan-300/90 font-medium">
              "Let's bring the Universe into your classroom."
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Book an interactive demonstration or customize a progressive STEM curriculum with our certified astronomy and robotics educators.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-orbitron font-extrabold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:shadow-[0_0_45px_rgba(6,182,212,0.9)] hover:scale-105 transition-all"
              >
                <Rocket className="w-5 h-5 -rotate-45" />
                <span>Book a Workshop</span>
              </Link>

              <Link
                href="/workshops"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-orbitron text-sm font-semibold text-white bg-slate-900/90 border border-slate-700 hover:border-cyan-400 hover:bg-slate-800 transition-all"
              >
                <span>View Curriculum Models</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
