"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const articles = [
  {
    id: 1,
    category: "Training",
    title: "The Physics of Progressive Overload",
    excerpt: "Understand the biological mechanisms behind muscle hypertrophy. Learn how tracking total set volume and bar velocity drives absolute power.",
    date: "Jul 2, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600",
    author: {
      name: "Marcus Reid",
      avatar: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=100",
    },
  },
  {
    id: 2,
    category: "Nutrition",
    title: "Optimal Macros for Body Recomposition",
    excerpt: "Calorie counts dictate scale weight, but macronutrient ratios structure body composition. Unlock the exact protein-fat formulas for lean muscle mass.",
    date: "Jun 28, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600",
    author: {
      name: "Aisha Patel",
      avatar: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?auto=format&fit=crop&q=80&w=100",
    },
  },
  {
    id: 3,
    category: "Recovery",
    title: "Unlocking Kinetic Mobility & Fascial Release",
    excerpt: "Stiff joint capsules and fascia limit muscle fibers recruitment. Try these five myofascial active stretching positions to optimize skeletal depth.",
    date: "Jun 22, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600",
    author: {
      name: "Sofia Chen",
      avatar: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=100",
    },
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Blog() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="blog" className="bg-offwhite py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="SPARTAN JOURNAL"
            title="Read Our Fitness Blog"
            subtext="Stay educated with evidence-based articles detailing movement patterns, nutrition facts, and athletic recovery protocols."
            className="md:max-w-2xl mb-0"
          />

          <button
            onClick={() => handleScroll("#contact")}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-dark hover:text-primary transition-colors group cursor-pointer"
          >
            <span>Subscribe to articles</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {articles.map((article) => (
            <motion.div
              key={article.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden border border-dark/5 shadow-xl shadow-dark/[0.01] flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Image Wrap */}
                <div className="relative aspect-[16/10] overflow-hidden bg-dark">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white font-body text-[9px] font-bold tracking-wider px-3 py-1.5 rounded-lg shadow-md uppercase">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6">
                  {/* Meta date */}
                  <div className="flex items-center gap-4 text-[10px] font-bold text-muted uppercase tracking-wider mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-primary" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} className="text-primary" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl uppercase tracking-wider text-dark group-hover:text-primary transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="font-body text-xs text-muted leading-relaxed mt-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-dark/5 mt-4">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-dark">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                  <span className="font-body text-xs font-semibold text-dark">
                    By {article.author.name}
                  </span>
                </div>
                
                <span className="font-body text-xs font-bold text-primary group-hover:translate-x-1 transition-transform duration-300">
                  Read Article &rarr;
                </span>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
