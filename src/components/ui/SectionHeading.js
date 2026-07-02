"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtext, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      <span className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase">
        {eyebrow}
      </span>
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-dark mt-2">
        {title}
      </h2>
      {subtext && (
        <p className="text-muted font-body text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
          {subtext}
        </p>
      )}
    </motion.div>
  );
}
