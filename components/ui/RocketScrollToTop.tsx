"use client";

import React, { useState, useEffect } from "react";
import { Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RocketScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleLaunch = () => {
    setIsLaunching(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsLaunching(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: isLaunching ? -400 : 0,
            transition: { duration: isLaunching ? 0.8 : 0.3, ease: isLaunching ? "easeIn" : "easeOut" },
          }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          className="fixed bottom-8 right-8 z-50 flex flex-col items-center group cursor-pointer"
          onClick={handleLaunch}
          role="button"
          aria-label="Scroll to top"
        >
          {/* Flame Exhaust when launching */}
          {isLaunching && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 60 }}
              className="absolute top-12 w-3 bg-gradient-to-b from-amber-400 via-orange-500 to-transparent rounded-full filter blur-[1px] animate-pulse"
            />
          )}

          <div className="relative p-3.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.35)] backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(6,182,212,0.7)]">
            <Rocket className={`w-6 h-6 transition-transform duration-300 ${isLaunching ? "-rotate-45" : "-rotate-45 group-hover:-translate-y-1"}`} />
            
            {/* Pulsing ring */}
            <span className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping opacity-40" />
          </div>

          <span className="mt-1 text-[10px] font-orbitron tracking-widest text-cyan-300/80 opacity-0 group-hover:opacity-100 transition-opacity uppercase">
            Top Orbit
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
