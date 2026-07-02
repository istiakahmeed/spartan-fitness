"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Users, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import coaches from "@/data/coaches";

const socialIcons = {
  instagram: Camera,
  facebook: Users,
  twitter: MessageCircle,
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Coaches() {
  return (
    <section id="coaches" className="bg-offwhite py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="MEET THE TEAM"
          title="Our Expert Coaches"
          subtext="Every coach at Spartan is certified, experienced, and deeply invested in your success."
          className="mb-12 lg:mb-16"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {coaches.map((coach) => (
            <motion.div
              key={coach.id}
              variants={card}
              className="bg-surface rounded-2xl overflow-hidden shadow-md border border-gray-100 group"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-5">
                <h3 className="font-heading text-xl uppercase tracking-tight text-dark">
                  {coach.name}
                </h3>
                <p className="font-body text-sm text-muted mt-1">
                  {coach.specialty}
                </p>

                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                  {Object.entries(coach.social).map(([platform, url]) => {
                    const Icon = socialIcons[platform];
                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-primary transition-colors duration-200"
                        aria-label={platform}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
