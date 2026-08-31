"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG } from "../../data/content";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="relative bg-[#020512] border-t border-cyan-500/20 text-slate-300 pt-16 pb-12 overflow-hidden z-10">
      {/* Background glowing gradients */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-blue-500/20 p-1 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300">
                <Image
                  src="/images/About/Space_Origin_LOGO.png"
                  alt="Space Origin Logo"
                  fill
                  className="object-contain p-0.8 scale-[1.75] sm:scale-[1.95]"
                />
              </div>
              <span className="font-orbitron font-extrabold text-xl text-white tracking-wider">
                SPACE ORIGIN
              </span>
            </Link>
            <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              {SITE_CONFIG.slogan}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Transforming classrooms into futuristic space observatories & STEM laboratories through hands-on rocketry, astronomy, AI, and robotics.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/80 border border-slate-800 rounded-lg p-2.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Certified STEM & Space Curriculum for Grades 3–12</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-orbitron text-sm font-bold text-white tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-cyan-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-cyan-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  About Space Origin
                </Link>
              </li>
              <li>
                <Link
                  href="/workshops"
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-cyan-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Workshops & Domains
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-cyan-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Workshop Gallery (23+ Moments)
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-cyan-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Contact & Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="space-y-4">
            <h3 className="font-orbitron text-sm font-bold text-white tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Direct Contacts
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Shiv Nagar, Kashipur, Uttarakhand, India</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-cyan-300 font-mono">
                    {SITE_CONFIG.email}
                  </a>
                  <span className="text-[11px] text-slate-400">CEO: {SITE_CONFIG.ceoEmail}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:9258077284" className="hover:text-cyan-300 font-mono">
                    +91 9258077284
                  </a>
                  <a href="tel:9992888429" className="hover:text-cyan-300 font-mono">
                    +91 9992888429
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: School Newsletter & Booking Alert */}
          <div className="space-y-4">
            <h3 className="font-orbitron text-sm font-bold text-white tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              School Space Bulletin
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to get announcements for annual astronomy camps, meteor shower viewings, and regional school STEM events.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! We have added your school to the bulletin.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter school email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Space Origin. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-cyan-400/80 font-mono text-[11px]">
              Co-Founder & CEO: Sarvsrest Belwal
            </span>
            <Link href="/contact" className="hover:text-cyan-300 transition-colors">
              Book Demo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
