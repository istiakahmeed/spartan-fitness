"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const galleryImages = [
  {
    id: 0,
    category: "facility",
    title: "Luxury Gym Interior",
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 1,
    category: "facility",
    title: "Premium Locker Room & Showers",
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    category: "strength",
    title: "Workout Area & Squat Platforms",
    src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    category: "strength",
    title: "Olympic Lifting Equipment",
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    category: "boxing",
    title: "Members Strike Training",
    src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    category: "mobility",
    title: "Yoga & Group Classes Studio",
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    category: "facility",
    title: "Spartan Premium Reception",
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
  },
];

const categories = [
  { id: "all", label: "View All" },
  { id: "facility", label: "Facility" },
  { id: "strength", label: "Strength" },
  { id: "boxing", label: "Boxing" },
  { id: "mobility", label: "Mobility" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="GYM INTERIORS"
          title="Inside the Spartan Arena"
          subtext="Take a virtual tour of our high-end training zones, recovery suites, boxing ring, and boutique yoga rooms."
          className="mb-16"
        />

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-dark text-white border-dark shadow-md"
                  : "bg-offwhite border-dark/5 text-muted hover:text-dark"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Masonry Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                onClick={() => openLightbox(idx)}
                className="relative aspect-square rounded-3xl overflow-hidden shadow-md group cursor-pointer bg-dark border border-dark/5"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Visual hover mask */}
                <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all duration-500">
                    <Maximize2 size={16} />
                  </div>
                </div>

                {/* Text tag bottom */}
                <div className="absolute bottom-4 left-4 right-4 z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-dark/80 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/5">
                    <span className="font-body text-[8px] font-bold text-primary uppercase tracking-[0.2em]">
                      {img.category}
                    </span>
                    <h4 className="font-heading text-sm text-white uppercase tracking-wider mt-0.5">
                      {img.title}
                    </h4>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/5 border border-white/10 rounded-full p-2.5 hover:scale-105 transition-all focus:outline-none cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>

              {/* Prev Button */}
              <button
                onClick={showPrev}
                className="absolute left-6 text-white/50 hover:text-white bg-white/5 border border-white/10 rounded-full p-3.5 hover:scale-105 transition-all focus:outline-none cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Main lightbox frame */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative max-w-4xl max-h-[80vh] aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl bg-dark border border-white/10 cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={filteredImages[lightboxIndex].src}
                  alt={filteredImages[lightboxIndex].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
                
                {/* Detail caption overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dark via-dark/70 to-transparent p-6 text-left">
                  <span className="font-body text-[9px] font-bold text-primary uppercase tracking-[0.2em]">
                    {filteredImages[lightboxIndex].category}
                  </span>
                  <h3 className="font-heading text-xl text-white uppercase tracking-wider mt-1">
                    {filteredImages[lightboxIndex].title}
                  </h3>
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={showNext}
                className="absolute right-6 text-white/50 hover:text-white bg-white/5 border border-white/10 rounded-full p-3.5 hover:scale-105 transition-all focus:outline-none cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
