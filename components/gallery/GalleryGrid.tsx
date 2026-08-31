"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Maximize2,
  Telescope,
  Rocket,
  Cpu,
  GraduationCap,
  Award,
} from "lucide-react";
import { GALLERY_ITEMS } from "../../data/content";
import LightboxModal from "./LightboxModal";

const CATEGORIES = [
  { id: "all", label: "All Moments (23)", icon: Sparkles },
  { id: "astronomy", label: "Astronomy & Telescopes", icon: Telescope },
  { id: "rocketry", label: "Rocketry & Physics", icon: Rocket },
  { id: "robotics", label: "Robotics & AI", icon: Cpu },
  { id: "classroom", label: "Classroom Labs", icon: GraduationCap },
  { id: "awards", label: "Awards & Joy", icon: Award },
];

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev! + 1 >= filteredItems.length ? 0 : prev! + 1
    );
  };

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev! - 1 < 0 ? filteredItems.length - 1 : prev! - 1
    );
  };

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-orbitron font-semibold transition-all duration-300 ${
                isSelected
                  ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.5)] scale-105"
                  : "bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-white"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/90 hover:border-cyan-400/80 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] cursor-pointer transition-all duration-300"
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 rounded-full bg-slate-950/80 border border-cyan-400/30 text-cyan-300 text-[10px] font-mono backdrop-blur-md">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h4 className="font-orbitron font-bold text-sm text-white line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                  <div className="p-2 rounded-xl bg-cyan-500 text-slate-950 shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
