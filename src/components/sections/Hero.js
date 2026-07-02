"use client";

import StatCard from "@/components/ui/StatCard";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-offwhite flex flex-col items-center justify-center pt-20 pb-12 md:pb-16 overflow-hidden">
      {/* Ghost background text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 flex items-end justify-center overflow-hidden pointer-events-none select-none translate-y-[10%]">
        <h2
          className="font-heading uppercase leading-none whitespace-nowrap"
          style={{
            fontSize: "clamp(4rem, 13vw, 13rem)",
            letterSpacing: "0.01em",
            color: "rgba(79,77,77,0.4)",
          }}>
          NO PAIN NO GAIN
        </h2>
      </div>

      {/* Cloudy white mist rising over the ghost text */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[1] h-[45vh] pointer-events-none select-none"
        style={{
          background:
            "linear-gradient(to top, rgba(248,245,240,1) 0%, rgba(248,245,240,0.85) 30%, rgba(248,245,240,0.4) 60%, rgba(248,245,240,0) 100%)",
        }}
      />

      {/* Soft blurred cloud blobs for texture */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[1] h-[30vh] pointer-events-none select-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 20% 100%, rgba(248,245,240,0.9), transparent 70%), radial-gradient(ellipse 50% 100% at 55% 100%, rgba(248,245,240,0.85), transparent 65%), radial-gradient(ellipse 65% 100% at 85% 100%, rgba(248,245,240,0.9), transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div
            {...fadeUp(0.1)}
            className="lg:col-span-3 lg:row-start-1 lg:col-start-1 flex flex-col justify-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight text-dark leading-[1.1]">
              Transform Your Body, Transform Your Life
            </h1>
            <p className="font-body text-muted text-base md:text-lg mt-4 leading-relaxed">
              Train with world-class coaches in a facility built for results.
              Whether you&apos;re starting fresh or pushing limits, Spartan Gym
              is where champions are made.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.2)}
            className="lg:col-span-6 lg:row-start-1 lg:col-start-4 lg:row-span-2 flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-auto lg:h-[620px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero/hero-main.svg"
                alt="Athlete training at Spartan Gym"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.3)}
            className="lg:col-span-3 lg:row-start-2 lg:col-start-1 flex items-center justify-center lg:justify-start">
            <div className="flex items-center gap-6 md:gap-10">
              <StatCard number="500+" label="Active Members" />
              <div className="w-px h-12 bg-gray-300" />
              <StatCard number="10+" label="Years Experience" />
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.35)}
            className="lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:row-span-2 flex items-center justify-center lg:justify-end">
            <div className="relative w-72 md:w-80 bg-surface rounded-2xl shadow-xl p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                <Image
                  src="/images/hero/hero-card.svg"
                  alt="Certified personal trainer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 20vw"
                />
              </div>
              <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-body font-semibold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                Certified Trainers
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
