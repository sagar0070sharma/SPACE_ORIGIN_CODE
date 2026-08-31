"use client";

import React from "react";
import { Sparkles, Mail, Phone, MapPin, Rocket } from "lucide-react";
import ContactForm from "../../components/contact/ContactForm";
import FAQAccordion from "../../components/contact/FAQAccordion";

export default function ContactPage() {
  return (
    <div className="space-y-24 pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
          <Rocket className="w-3.5 h-3.5 text-cyan-400 -rotate-45" />
          <span>Launch Your Collaboration</span>
        </div>

        <h1 className="font-orbitron font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">Touch</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
          Whether you want to organize a free school demonstration, schedule a night astronomy camp, or implement our progressive STEM curriculum, we are here to help.
        </p>
      </section>

      {/* Main Split Layout: Contact Info + Booking Form */}
      <section>
        <ContactForm />
      </section>

      {/* FAQ Section */}
      <section className="pt-8">
        <FAQAccordion />
      </section>

    </div>
  );
}
