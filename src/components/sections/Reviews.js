"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Sarah Khan",
    role: "Member since 2023 • Banker",
    quote:
      "This gym completely transformed my approach to fitness. The coaches at Mirpur-7 are incredible and the community keeps me motivated every single day. I have never felt stronger or more confident.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    verified: true,
  },
  {
    id: 2,
    name: "Tanvir Rahman",
    role: "Member since 2021 • Software Engineer",
    quote:
      "After trying countless gyms in Dhaka, I finally found a place that feels like home. The training programs are science-backed and the results speak for themselves. Down 30 pounds and still going.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    verified: true,
  },
  {
    id: 3,
    name: "Tasnim Ahmed",
    role: "Member since 2022 • Entrepreneur",
    quote:
      "The coaches here don't just train you — they educate you. I have learned more about proper form and nutrition in one year than I did in a decade of working out on my own.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    verified: true,
  },
  {
    id: 4,
    name: "Rashed Chowdhury",
    role: "Member since 2020 • Corporate Manager",
    quote:
      "From the moment you walk into the Mirpur-14 branch, you feel the energy. This isn't just a gym — it's a family. The accountability and support system here is completely unmatched.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    verified: true,
  },
];

export default function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section id="reviews" className="bg-offwhite py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="TESTIMONIALS"
            title="Shattering Expectations"
            subtext="Read real growth stories from our dedicated members who transformed their bodies and minds at Spartan Fitness."
            className="md:max-w-2xl mb-0"
          />

          {/* Slider controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={scrollPrev}
              className="bg-white border border-dark/5 text-dark hover:bg-dark hover:text-white rounded-full p-3 shadow-md transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="bg-white border border-dark/5 text-dark hover:bg-dark hover:text-white rounded-full p-3 shadow-md transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative">
          <div className="overflow-hidden -mx-4" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-3xl shadow-xl shadow-dark/[0.02] border border-dark/5 p-8 h-full flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Big quotation mark */}
                    <div className="absolute right-6 top-6 text-primary/5 pointer-events-none">
                      <Quote size={56} className="fill-current" />
                    </div>

                    <div>
                      {/* Star rating row */}
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-primary text-primary"
                          />
                        ))}
                      </div>

                      {/* Quote text */}
                      <p className="font-body text-sm md:text-base text-dark/80 leading-relaxed italic mb-8 relative z-10">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    {/* Member Profile */}
                    <div className="flex items-center gap-3 pt-6 border-t border-dark/5">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-dark flex-shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <p className="font-body text-sm font-bold text-dark">
                            {t.name}
                          </p>
                          {t.verified && (
                            <CheckCircle2 size={13} className="text-emerald-500 fill-emerald-50" />
                          )}
                        </div>
                        <p className="font-body text-[10px] text-muted uppercase tracking-wider font-semibold">
                          {t.role}
                        </p>
                      </div>
                    </div>

                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-350 ${
                i === selectedIndex
                  ? "bg-primary w-8"
                  : "bg-dark/10 hover:bg-dark/20 w-2"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
