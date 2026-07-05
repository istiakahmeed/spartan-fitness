"use client";

import { motion } from "framer-motion";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTA() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-dark text-white text-center">
      {/* Full bleed image backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200"
          alt="Motivated Spartan athlete focusing in dark gym"
          className="w-full h-full object-cover object-center grayscale opacity-20"
        />
        {/* Gradients to blend edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        {/* Glow point */}
        <div className="w-40 h-40 bg-primary/20 rounded-full blur-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Eyebrow */}
          <span className="text-primary font-body text-xs font-bold tracking-[0.3em] uppercase block mb-4">
            Unleash Your Potential
          </span>

          {/* Headline */}
          <h2 className="font-heading text-4xl sm:text-6xl uppercase tracking-tight text-white leading-[0.95] mb-6">
            Start Your Fitness <br />
            Journey Today
          </h2>

          {/* Supporting Subtitle */}
          <p className="font-body text-xs sm:text-sm text-white/60 leading-relaxed max-w-xl mx-auto mb-10">
            Join Spartan Fitness Dhaka today and get access to elite trainers, customized strength training plans, and a supportive, relentless community that doesn&apos;t settle for average.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              onClick={() => handleScroll("#contact")}
              className="shadow-2xl shadow-primary/20 hover:shadow-primary/30"
            >
              Join Now
            </Button>
            
            <Button
              variant="outline"
              onClick={() => handleScroll("#contact")}
              className="border-white text-white hover:bg-white hover:text-dark transition-all duration-300"
            >
              Book Free Trial
            </Button>

            <a
              href="tel:01688-664545"
              className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-wider text-white hover:text-primary transition-colors py-3 px-6 rounded-full border-2 border-white/20 hover:border-primary"
            >
              <Phone size={14} />
              <span>Call Now</span>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
