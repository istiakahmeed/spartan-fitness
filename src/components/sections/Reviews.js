"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import testimonials from "@/data/testimonials";

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
    <section id="reviews" className="bg-offwhite py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title="What Our Members Say"
          subtext="Real stories from real members who transformed their lives at Spartan Gym."
          className="mb-12 lg:mb-16"
        />

        <div className="relative">
          <div className="overflow-hidden -mx-2" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-2 pr-2"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-surface rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 h-full flex flex-col"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-primary text-primary"
                        />
                      ))}
                    </div>

                    <p className="font-body text-sm md:text-base text-dark/80 leading-relaxed italic flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
                      <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <p className="font-body text-sm font-semibold text-dark">
                          {t.name}
                        </p>
                        <p className="font-body text-xs text-muted">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 lg:-translate-x-6 bg-surface border border-gray-200 rounded-full p-2 shadow-md hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 z-10 hidden sm:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 lg:translate-x-6 bg-surface border border-gray-200 rounded-full p-2 shadow-md hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 z-10 hidden sm:block"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "bg-primary w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
