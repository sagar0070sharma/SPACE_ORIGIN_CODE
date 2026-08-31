"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const FAQS = [
  {
    q: "What grade levels are Space Origin workshops suitable for?",
    a: "Space Origin programs are pedagogical modules tailored for students starting from Grade 3 up to Grade 12. Junior cohorts focus on experiential observation, rocketry principles, and simple circuits, while senior students tackle computational astronomy, deep space optics, AI prompt engineering, and microcontroller rovers.",
  },
  {
    q: "Does our school need to supply telescopes, robotics kits, or rocketry apparatus?",
    a: "Not at all. Space Origin provides all professional equipment—including computerized Newtonians, solar observation filters, Arduino/ESP32 kits, sensors, launch pads, and activity kits. The school simply provides a standard classroom or auditorium and open grounds for outdoor stargazing and rocket launches.",
  },
  {
    q: "Can we schedule a Free Demonstration session at our campus first?",
    a: "Yes! We offer a live, engaging demonstration session at your school or organization so that school directors, teachers, and students can experience our hands-on pedagogy and telescope gear firsthand before finalizing the curriculum plan.",
  },
  {
    q: "Do participating students receive official certificates?",
    a: "Yes. Every student who participates receives an official, verified Space Origin Certificate of Completion and Achievement, recognized by our partner competitions and educational ecosystem.",
  },
  {
    q: "How does Space Origin align with CBSE, ICSE, Cambridge & NEP 2020 guidelines?",
    a: "Our curriculum is designed specifically to fulfill the National Education Policy (NEP 2020) mandate for experiential, hands-on, and interdisciplinary STEM learning, enhancing physics, mathematics, computational thinking, and design innovation without placing extra burden on school teachers.",
  },
];

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>Frequently Asked Questions</span>
        </div>
        <h3 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white">
          Everything Schools Need to Know
        </h3>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/30 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-orbitron font-bold text-sm sm:text-base text-white hover:text-cyan-300 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
