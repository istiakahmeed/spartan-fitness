"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 30,
  x = 0,
  scale = 1,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1], // Luxury cubic-bezier easing curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
