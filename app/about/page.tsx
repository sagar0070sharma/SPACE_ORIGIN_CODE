"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Rocket,
  Sparkles,
  Target,
  Telescope,
  Compass,
  Cpu,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

import WhyChooseSection from "../../components/home/WhyChooseSection";
import FounderSpotlight from "../../components/home/FounderSpotlight";
import PartnersMarquee from "../../components/home/PartnersMarquee";
import EnrollmentTimeline from "../../components/home/EnrollmentTimeline";
import HeroVisual from "../../components/ui/HeroVisual";
import { SITE_CONFIG } from "../../data/content";

export default function AboutPage() {
  return (
    <div className="space-y-24 pt-24 pb-20">
      
      {/* 1. About Hero Banner */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/15 via-purple-600/15 to-transparent rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{SITE_CONFIG.slogan}</span>
              </div>

              <h1 className="font-orbitron font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                SPACE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">ORIGIN</span>
              </h1>

              <p className="font-orbitron font-semibold text-lg sm:text-2xl text-cyan-200">
                Advanced Space Education & Future Skills
              </p>

              <blockquote className="text-base sm:text-lg text-slate-300 font-light leading-relaxed border-l-2 lg:border-cyan-400/60 lg:pl-4">
                "{SITE_CONFIG.heroQuote}"
              </blockquote>

              <div className="pt-2">
                <Link
                  href="/workshops"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-orbitron font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] hover:scale-105 transition-all"
                >
                  <Rocket className="w-5 h-5 -rotate-45" />
                  <span>Explore Workshops</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center"
            >
              <HeroVisual />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Deep Dive: About Space Origin & Mission Story */}
      <section className="relative py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>Our Pedagogical Purpose</span>
            </div>

            <h2 className="font-orbitron font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug">
              Transforming Classrooms into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Experiential Space Observatories
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              <p>
                <strong className="text-white font-medium">Space Origin</strong> is an innovative space education organization committed to igniting curiosity and preparing students for the future through immersive STEM education and emerging technologies. Our mission is to make space science engaging, practical, and accessible by transforming classrooms into exciting learning environments where imagination meets innovation.
              </p>
              <p>
                Our workshops combine <strong className="text-cyan-300 font-medium">astronomy, rocketry, artificial intelligence, engineering, and hands-on experimentation</strong> to create unforgettable learning experiences. Rather than simply teaching scientific concepts, we encourage students to think critically, solve real-world problems, collaborate effectively, and explore beyond conventional boundaries.
              </p>
              <p>
                Students get the opportunity to build rockets, operate telescopes, observe the Sun safely, identify constellations, understand asteroids, explore the Solar System, and learn practical AI tools that will shape tomorrow's world.
              </p>
              <p>
                Designed by experienced educators and industry professionals, every workshop is interactive, inspiring, and aligned with modern STEM learning objectives. Whether conducted in schools, educational institutions, science clubs, or community programs, Space Origin empowers young minds to dream bigger, innovate fearlessly, and develop the confidence to become the scientists, engineers, entrepreneurs, and explorers of the future.
              </p>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-cyan-500/30 space-y-3 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 w-fit">
                <Telescope className="w-6 h-6" />
              </div>
              <h3 className="font-orbitron font-bold text-base text-white">Observational Astronomy</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Operating motorized telescopes, charting stars, and safe sunspot tracking with solar filters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-purple-500/30 space-y-3 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-400/30 text-purple-400 w-fit">
                <Rocket className="w-6 h-6 -rotate-45" />
              </div>
              <h3 className="font-orbitron font-bold text-base text-white">Rocketry & Aerodynamics</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fabricating ballistic rockets, calculating thrust trajectories, and testing CanSat payloads.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-emerald-500/30 space-y-3 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 w-fit">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-orbitron font-bold text-base text-white">Robotics & IoT Sensors</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prototyping planetary rovers, wiring microcontrollers, and coding autonomous obstacle avoidance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-amber-500/30 space-y-3 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-400 w-fit">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="font-orbitron font-bold text-base text-white">AI & Future Skills</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mastering generative AI tools, prompt engineering, Python algorithms, and scientific public speaking.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Vision Section */}
      <section className="relative py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#080e2e] via-slate-900 to-[#04081c] border border-cyan-500/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(6,182,212,0.25)] space-y-6 overflow-hidden">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs font-mono uppercase tracking-widest">
              <Target className="w-3.5 h-3.5 text-cyan-400" />
              <span>Our Vision</span>
            </div>

            <h2 className="font-orbitron font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
              To Become India's Leading Space Education Platform
            </h2>

            <div className="space-y-3 text-sm sm:text-base text-slate-200 leading-relaxed">
              <p>
                To become India's leading space education platform by inspiring millions of young learners to explore the universe, embrace scientific thinking, and develop future-ready skills in science, technology, engineering, artificial intelligence, and innovation.
              </p>
              <p>
                We envision a future where every student, regardless of background, has the opportunity to experience the excitement of space exploration and contribute to solving humanity's greatest challenges through creativity, knowledge, and technology.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Why Choose Space Origin (6 Cards) */}
      <WhyChooseSection />

      {/* 5. Founder Spotlight */}
      <FounderSpotlight />

      {/* 6. Our Partners Infinite Slider */}
      <PartnersMarquee />

      {/* 7. How to Enroll Timeline */}
      <EnrollmentTimeline />

      {/* 8. Call To Action */}
      <section className="relative py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 rounded-3xl bg-slate-900/80 border border-cyan-500/30 space-y-4">
          <h2 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white">
            Ready to Partner With Space Origin?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Contact our director today to organize a free demonstration workshop for your school or science club.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-orbitron font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-all"
            >
              <span>Book a Workshop</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
