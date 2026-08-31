"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  Building,
  User,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG, FOUNDER_INFO } from "../../data/content";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [domainInterest, setDomainInterest] = useState("all");
  const [curriculumType, setCurriculumType] = useState("foundational");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Launch Confetti
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#00f0ff", "#a855f7", "#3b82f6", "#fbbf24"],
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 800);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      
      {/* Left Column: Direct Contact Details & Location */}
      <div className="lg:col-span-5 space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Connect Directly</span>
          </div>
          <h2 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Contact Information
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Reach out directly to our founding team and pedagogical consultants to bring space tech into your school.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-4 text-sm">
          {/* Address */}
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-start gap-3.5 hover:border-cyan-500/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-orbitron font-bold text-xs text-slate-400 uppercase">Headquarters</p>
              <p className="text-white font-medium mt-0.5">Shiv Nagar, Kashipur</p>
              <p className="text-xs text-slate-400">Uttarakhand, India</p>
            </div>
          </div>

          {/* Email */}
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-start gap-3.5 hover:border-cyan-500/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-400/30 text-purple-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="font-orbitron font-bold text-xs text-slate-400 uppercase">Official Email</p>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-white hover:text-cyan-300 font-mono block mt-0.5">
                {SITE_CONFIG.email}
              </a>
              <a href={`mailto:${SITE_CONFIG.ceoEmail}`} className="text-xs text-cyan-400/90 font-mono block mt-0.5">
                CEO: {SITE_CONFIG.ceoEmail}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-start gap-3.5 hover:border-cyan-500/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-400/30 text-blue-400 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-orbitron font-bold text-xs text-slate-400 uppercase">Phone & WhatsApp</p>
              <a href="tel:9258077284" className="text-white hover:text-cyan-300 font-mono block mt-0.5">
                +91 9258077284
              </a>
              <a href="tel:9992888429" className="text-slate-300 hover:text-cyan-300 font-mono block mt-0.5">
                +91 9992888429
              </a>
            </div>
          </div>
        </div>

        {/* Founder Direct Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-space-950 border border-cyan-500/30 flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.4)] shrink-0">
            <Image
              src={FOUNDER_INFO.image}
              alt={FOUNDER_INFO.name}
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="font-orbitron font-bold text-sm text-white">
              {FOUNDER_INFO.name}
            </p>
            <p className="text-xs text-cyan-300 font-mono">
              Co-Founder & CEO, Space Origin
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Direct discussions for school partnerships & demos.
            </p>
          </div>
        </div>

      </div>

      {/* Right Column: Modern Contact / Booking Form */}
      <div className="lg:col-span-7">
        <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)]">
          {submitted ? (
            <div className="text-center py-12 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.5)] animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-orbitron font-extrabold text-2xl text-white">
                Message & Request Dispatched!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-cyan-300 font-bold">{fullName}</span>. Our pedagogical coordinator and CEO will contact your institution within 24 hours to schedule your demo or consultation.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-orbitron font-bold text-cyan-300 border border-slate-700 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="font-orbitron font-bold text-xl text-white">
                  Schedule a Demo or Plan Workshops
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill out the form below to receive customized curriculum proposals for your campus.
                </p>
              </div>

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-orbitron font-semibold text-slate-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-cyan-400" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Principal Rajesh Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-orbitron font-semibold text-slate-300 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-purple-400" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. principal@school.edu.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                  />
                </div>
              </div>

              {/* Row 2: Phone & School */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-orbitron font-semibold text-slate-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-orbitron font-semibold text-slate-300 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-amber-400" />
                    School / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Delhi Public School"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                </div>
              </div>

              {/* Row 3: Domain Interest & Curriculum Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-orbitron font-semibold text-slate-300">
                    Domain Interested In
                  </label>
                  <select
                    value={domainInterest}
                    onChange={(e) => setDomainInterest(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="all">All 5 Core Domains</option>
                    <option value="astronomy">Astronomy & Sky Observation</option>
                    <option value="robotics">Robotics & Engineering</option>
                    <option value="space-science">Space Science & Rocketry</option>
                    <option value="ai-coding">AI & Coding</option>
                    <option value="personality-development">Personality Development</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-orbitron font-semibold text-slate-300">
                    Curriculum Model Preference
                  </label>
                  <select
                    value={curriculumType}
                    onChange={(e) => setCurriculumType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-400"
                  >
                    <option value="foundational">Foundational (5–15 Workshops)</option>
                    <option value="progressive">Progressive (Year-long Subject)</option>
                    <option value="custom">Free Demonstration First</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-orbitron font-semibold text-slate-300 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                  Additional Details / Grade Levels
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your student cohorts, preferred workshop dates, or specific questions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-orbitron font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-[1.01] transition-all disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Transmitting Flight Plan...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message & Request Proposal</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

    </div>
  );
}
