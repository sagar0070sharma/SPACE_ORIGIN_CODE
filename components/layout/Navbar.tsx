"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Rocket, Sparkles, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/workshops", label: "Workshops" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-space-950/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-blue-500/20 p-1 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300">
              <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-slate-950">
                <Image
                  src="/images/About/Space_Origin_LOGO.png"
                  alt="Space Origin Logo"
                  fill
                  className="object-contain p-0.8"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                SPACE ORIGIN
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono hidden sm:block">
                Future Skills & Space Tech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-cyan-300 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold font-orbitron tracking-wide text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] hover:scale-105"
            >
              <Rocket className="w-4 h-4 text-slate-950 -rotate-45" />
              <span>Book Workshop</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 p-4 md:hidden bg-space-950/95 backdrop-blur-2xl border-b border-cyan-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          >
            <div className="flex flex-col gap-2 pt-2 pb-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? "bg-cyan-500/15 text-cyan-300 border border-cyan-400/30"
                        : "text-slate-300 hover:bg-slate-900/60 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                );
              })}
              <div className="pt-3">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-orbitron text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  <Rocket className="w-4 h-4 -rotate-45" />
                  <span>Book a Workshop</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
