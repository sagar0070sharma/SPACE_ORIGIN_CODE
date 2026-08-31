"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "../../data/content";

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function LightboxModal({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxModalProps) {
  const isAvailable = currentIndex !== null && items[currentIndex] !== undefined;
  const currentItem = isAvailable ? items[currentIndex] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isAvailable) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isAvailable, handleKeyDown]);

  if (!isAvailable || !currentItem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-5xl w-full max-h-[92vh] flex flex-col rounded-3xl bg-slate-900 border border-cyan-500/40 overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.4)] z-10"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between p-4 bg-slate-950/80 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono">
                {currentIndex + 1} / {items.length}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {currentItem.categoryLabel}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Photo Area */}
          <div className="relative flex-1 min-h-[360px] sm:min-h-[480px] lg:min-h-[540px] bg-slate-950 flex items-center justify-center overflow-hidden">
            <Image
              src={currentItem.src}
              alt={currentItem.title}
              fill
              className="object-contain p-2 sm:p-4"
              priority
            />

            {/* Left Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-cyan-500 hover:text-slate-950 text-white border border-slate-700 transition-all shadow-[0_0_15px_rgba(0,0,0,0.6)]"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-cyan-500 hover:text-slate-950 text-white border border-slate-700 transition-all shadow-[0_0_15px_rgba(0,0,0,0.6)]"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption Area */}
          <div className="p-4 sm:p-5 bg-slate-950/90 border-t border-slate-800 space-y-1">
            <h3 className="font-orbitron font-bold text-base sm:text-lg text-white">
              {currentItem.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {currentItem.description}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
