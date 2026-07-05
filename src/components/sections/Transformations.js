"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingDown, Flame, Calendar, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const stories = [
  {
    id: 1,
    name: "Tanvir Rahman",
    program: "1-on-1 Strength Coaching",
    quote: "I tried countless gyms in Mirpur, but Spartan's scientific tracking made the difference. The coaches built a customized program around my knee constraints, and the results followed.",
    timeline: "12 Weeks",
    metrics: [
      { label: "Weight Loss", value: "-30 lbs", icon: TrendingDown },
      { label: "Body Fat", value: "26% to 14%", icon: Flame },
    ],
    beforeImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400",
    afterImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    name: "Sarah Khan",
    program: "Athletic Performance Zone",
    quote: "I wanted to gain core strength and athletic agility. Spartan pushed me past mental barriers I didn't know existed. I have never felt more powerful or functional.",
    timeline: "16 Weeks",
    metrics: [
      { label: "Lean Muscle", value: "+8 lbs", icon: Flame },
      { label: "Body Fat", value: "22% to 15%", icon: TrendingDown },
    ],
    beforeImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=400",
    afterImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400",
  },
];

export default function Transformations() {
  const [activeStates, setActiveStates] = useState({ 1: "after", 2: "after" });

  const toggleState = (id, state) => {
    setActiveStates((prev) => ({ ...prev, [id]: state }));
  };

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".transform-card",
        { opacity: 0, scale: 0.95, y: 35 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".transform-card",
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="transformations" className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="TRANSFORMATIONS"
          title="Proven Member Success"
          subtext="Real members, real work, real results. See what is possible with science-backed tracking and relentless consistency."
          className="mb-16"
        />

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {stories.map((story) => {
            const activeImg = activeStates[story.id] === "before" ? story.beforeImage : story.afterImage;
            return (
              <div
                key={story.id}
                className="transform-card bg-offwhite rounded-3xl p-8 border border-dark/5 shadow-xl flex flex-col md:flex-row gap-8 items-stretch opacity-0"
              >
                
                {/* Image & Toggle Controls */}
                <div className="w-full md:w-[45%] flex flex-col justify-between items-center gap-4">
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-dark shadow-md">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeStates[story.id]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={activeImg}
                          alt={`${story.name} transformation`}
                          fill
                          className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge */}
                    <div className="absolute bottom-4 left-4 bg-dark/70 backdrop-blur-sm px-3 py-1 rounded-md border border-white/10">
                      <span className="font-heading text-xs text-white uppercase tracking-wider">
                        {activeStates[story.id]}
                      </span>
                    </div>
                  </div>

                  {/* Toggle Button Switcher */}
                  <div className="flex items-center bg-white p-1 rounded-xl border border-dark/5 shadow-sm w-full">
                    <button
                      onClick={() => toggleState(story.id, "before")}
                      className={`flex-1 py-2 rounded-lg font-body text-[10px] font-bold uppercase tracking-wider transition-all ${
                        activeStates[story.id] === "before"
                          ? "bg-dark text-white"
                          : "text-muted hover:text-dark"
                      }`}
                    >
                      Before
                    </button>
                    <button
                      onClick={() => toggleState(story.id, "after")}
                      className={`flex-1 py-2 rounded-lg font-body text-[10px] font-bold uppercase tracking-wider transition-all ${
                        activeStates[story.id] === "after"
                          ? "bg-dark text-white"
                          : "text-muted hover:text-dark"
                      }`}
                    >
                      After
                    </button>
                  </div>
                </div>

                {/* Content & Metrics */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest font-body">
                      {story.program}
                    </span>
                    <h3 className="font-heading text-2xl uppercase tracking-wider text-dark mt-1">
                      {story.name}
                    </h3>

                    <p className="font-body text-xs md:text-sm text-muted italic mt-4 leading-relaxed relative pl-4 border-l-2 border-primary">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                  </div>

                  {/* Stats Block */}
                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-dark/5">
                    {story.metrics.map((metric, midx) => {
                      const MetricIcon = metric.icon;
                      return (
                        <div key={midx} className="flex gap-2.5 items-center">
                          <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                            <MetricIcon size={14} className="text-primary" />
                          </div>
                          <div>
                            <p className="font-body text-[9px] text-muted uppercase tracking-wider font-semibold">
                              {metric.label}
                            </p>
                            <p className="font-heading text-base text-dark mt-0.5 leading-none">
                              {metric.value}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Program duration indicator */}
                  <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-dark/5">
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                      <Calendar size={13} className="text-primary flex-shrink-0" />
                      <span>{story.timeline} timeline</span>
                    </div>

                    <button
                      onClick={() => handleScroll("#contact")}
                      className="inline-flex items-center gap-1 font-body text-[10px] font-bold uppercase tracking-wider text-dark hover:text-primary transition-colors group cursor-pointer"
                    >
                      <span>Inquire Blueprint</span>
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-dark text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-xl">
            <h4 className="font-heading text-2xl uppercase tracking-wider text-white">
              Ready to write your success story?
            </h4>
            <p className="font-body text-xs text-white/50 mt-2 leading-relaxed">
              Every member transformation starts with a free body evaluation. Our trainers will audit your fat percentage, joint ranges, and endurance levels.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <Button
              variant="primary"
              onClick={() => handleScroll("#contact")}
              className="shadow-xl shadow-primary/10 hover:shadow-primary/20"
            >
              Start Your Journey
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
