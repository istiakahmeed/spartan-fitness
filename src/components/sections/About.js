"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Dumbbell, Users, Clock, Target } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  { icon: Dumbbell, label: "Modern Equipment" },
  { icon: Users, label: "Certified Coaches" },
  { icon: Clock, label: "Flexible Hours" },
  { icon: Target, label: "Personalized Plans" },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="bg-offwhite py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="WHO WE ARE"
          title="About Our Gym"
          subtext="Spartan Gym was built for those who refuse to settle. Since day one, we have been committed to providing elite training, top-tier equipment, and a community that pushes you to be your best."
          className="mb-12 lg:mb-16"
        />

        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/about-gym.svg"
                alt="Inside Spartan Gym"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full"
          >
            <p className="font-body text-muted text-base md:text-lg leading-relaxed mb-8">
              We believe fitness is more than just lifting weights — it is about
              building discipline, confidence, and a lifestyle that lasts. Every
              inch of our facility is designed to help you unlock your full
              potential.
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.label}
                    variants={item}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <span className="font-body text-sm md:text-base font-medium text-dark">
                      {f.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
