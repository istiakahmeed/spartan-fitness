"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import packages from "@/data/packages";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Packages() {
  return (
    <section id="packages" className="bg-offwhite py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="MEMBERSHIP"
          title="Choose Your Plan"
          subtext="Flexible plans designed to fit your goals. No hidden fees, no long-term contracts."
          className="mb-12 lg:mb-16"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={cardAnim}
              className={`relative bg-surface rounded-2xl shadow-md border p-8 flex flex-col ${
                pkg.isFeatured
                  ? "border-primary md:scale-105 ring-2 ring-primary shadow-xl"
                  : "border-gray-100"
              }`}
            >
              {pkg.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-body font-semibold uppercase tracking-wider px-5 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className="font-heading text-2xl uppercase tracking-tight text-dark">
                {pkg.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-5xl text-primary">
                  ${pkg.price}
                </span>
                <span className="font-body text-sm text-muted">
                  {pkg.billing}
                </span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    <span className="font-body text-sm text-muted leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.isFeatured ? "primary" : "outline"}
                className="w-full mt-8"
              >
                Choose {pkg.name}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
