"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Calendar, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

const benefits = [
  "Custom Strength & Conditioning Blueprint",
  "Real-Time Biomechanics & Form Correction",
  "Individualized Macro & Diet Structure Mapping",
  "Bi-Weekly Body Composition Diagnostics & Diagnostics",
];

export default function PersonalTraining() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="personal-training" className="bg-offwhite py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Collage / Single Frame */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-dark"
            >
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"
                alt="Personal trainer supporting member bench press"
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Overlapping Transformation Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:right-6 bg-white rounded-2xl p-5 shadow-2xl border border-dark/5 max-w-[280px]"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                    alt="David Martinez portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading text-sm text-dark">David Martinez</h4>
                  <p className="font-body text-[9px] text-primary uppercase font-bold tracking-wider">
                    Member Transformation
                  </p>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-2 text-center border-t border-dark/5 pt-3">
                <div>
                  <span className="font-heading text-lg text-dark">-30 lbs</span>
                  <p className="font-body text-[9px] text-muted uppercase tracking-wider">Weight Loss</p>
                </div>
                <div className="border-l border-dark/5">
                  <span className="font-heading text-lg text-dark">12 Weeks</span>
                  <p className="font-body text-[9px] text-muted uppercase tracking-wider">Duration</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-10 h-0.5 bg-primary" />
              <span className="text-primary font-body text-xs font-bold tracking-[0.25em] uppercase">
                One-On-One Training
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-dark leading-none"
            >
              Elite Personal Training <br />
              Built for your metrics
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-muted text-sm md:text-base leading-relaxed mt-6 mb-8"
            >
              Generic templates lead to generic plateaus. Our certified elite coaches perform individual kinetic assessments, mapping your skeletal leverage and cardiovascular zones to create a program built strictly for your physiology.
            </motion.p>

            {/* Benefits Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                  <span className="font-body text-sm font-semibold text-dark/95">
                    {benefit}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                variant="primary"
                onClick={() => handleScroll("#contact")}
                className="shadow-xl shadow-primary/10 hover:shadow-primary/20"
              >
                Inquire PT Program
              </Button>
              <button
                onClick={() => handleScroll("#trainers")}
                className="inline-flex items-center gap-1 font-body text-xs font-bold uppercase tracking-wider text-dark hover:text-primary transition-colors py-3 px-6 cursor-pointer"
              >
                <span>View Trainers</span>
                <ChevronRight size={16} />
              </button>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
