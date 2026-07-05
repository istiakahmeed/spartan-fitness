"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Star, Shield, Award, ChevronDown } from "lucide-react";
import gsap from "gsap";
import SplitType from "split-type";
import Button from "@/components/ui/Button";

export default function Hero() {
  const headingRef = useRef(null);
  const bgImgContainerRef = useRef(null);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Line-by-line text splitting
      let split;
      if (headingRef.current) {
        split = new SplitType(headingRef.current, { types: "lines" });
        // Wrap each line in a overflow-hidden wrapper container to hide line entry transition
        split.lines.forEach((line) => {
          const wrap = document.createElement("div");
          wrap.style.overflow = "hidden";
          line.parentNode.insertBefore(wrap, line);
          wrap.appendChild(line);
        });
      }

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 2. Background image zoom reveal
      if (bgImgContainerRef.current) {
        tl.fromTo(
          bgImgContainerRef.current.querySelector("img"),
          { scale: 1.15, filter: "blur(8px)" },
          { scale: 1, filter: "blur(0px)", duration: 1.6 }
        );
      }

      // 3. Line by line heading reveal
      if (split && split.lines.length > 0) {
        tl.fromTo(
          split.lines,
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.12 },
          "-=1.2"
        );
      }

      // 4. Subtitle paragraph reveal
      tl.fromTo(
        ".hero-desc",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.6"
      );

      // 5. CTA Buttons reveal
      tl.fromTo(
        ".hero-ctas > *",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.15 },
        "-=0.6"
      );

      // 6. Statistics counter animation
      const statItems = document.querySelectorAll(".stat-number");
      statItems.forEach((item) => {
        const targetVal = parseInt(item.getAttribute("data-target"), 10);
        const suffix = item.getAttribute("data-suffix") || "";
        tl.fromTo(
          item,
          { textContent: "0" },
          {
            textContent: targetVal,
            duration: 1.5,
            snap: { textContent: 1 },
            ease: "power2.out",
            onUpdate: function () {
              const currentVal = Math.ceil(parseFloat(item.textContent));
              item.textContent = currentVal.toLocaleString() + suffix;
            },
          },
          "-=1.2"
        );
      });

      // 7. Trust Badges reveal
      tl.fromTo(
        ".hero-trust-badges > *",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
        "-=0.9"
      );

      // 8. Floating reviews card animation loop
      gsap.to(".hero-floating-card", {
        y: "-=10",
        x: "+=4",
        rotation: "-=1.5",
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Cleanup
      return () => {
        if (split) split.revert();
      };
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-offwhite flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative background gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/3 blur-[100px] pointer-events-none" />

      {/* Hero background watermark text */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full overflow-hidden select-none pointer-events-none z-0 opacity-[0.03]">
        <h1 className="font-heading text-[16vw] text-dark leading-none text-center uppercase tracking-tighter">
          SPARTAN
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-10 h-0.5 bg-primary" />
              <span className="text-primary font-body text-xs font-bold tracking-[0.25em] uppercase">
                Dhaka&apos;s Leading Premium Fitness Center
              </span>
            </div>

            <h1
              ref={headingRef}
              className="font-heading text-5xl sm:text-6xl lg:text-7.5xl uppercase tracking-tight text-dark leading-[0.95]"
            >
              Stronger Every Day <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                Healthier for Life
              </span>
            </h1>

            <p className="hero-desc font-body text-muted text-base md:text-lg mt-6 max-w-xl leading-relaxed opacity-0">
              Transform your lifestyle at Spartan Fitness. Equipped with world-class gym facilities, certified elite coaches, and customized coaching plans tailored for Mirpur professionals and fitness enthusiasts.
            </p>

            {/* CTAs */}
            <div className="hero-ctas flex flex-wrap items-center gap-4 mt-8">
              <Button
                variant="primary"
                onClick={() => handleScroll("#contact")}
                className="shadow-xl shadow-primary/20 hover:shadow-primary/30 opacity-0"
              >
                Join Spartan Now
              </Button>
              <Button
                variant="outline"
                onClick={() => handleScroll("#programs")}
                className="border-dark text-dark hover:bg-dark hover:text-white opacity-0"
              >
                Explore Services
              </Button>
            </div>

            {/* Localized Trust Badges & Stats */}
            <div className="hero-trust-badges grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-dark/10">
              <div>
                <p className="stat-number font-heading text-3xl md:text-4xl text-dark" data-target="1200" data-suffix="+">
                  0+
                </p>
                <p className="font-body text-[10px] md:text-xs text-muted uppercase tracking-wider mt-1">
                  Active Members
                </p>
              </div>
              <div>
                <p className="stat-number font-heading text-3xl md:text-4xl text-dark" data-target="20" data-suffix="+">
                  0+
                </p>
                <p className="font-body text-[10px] md:text-xs text-muted uppercase tracking-wider mt-1">
                  Certified Trainers
                </p>
              </div>
              <div>
                <p className="stat-number font-heading text-3xl md:text-4xl text-dark" data-target="2" data-suffix="">
                  0
                </p>
                <p className="font-body text-[10px] md:text-xs text-muted uppercase tracking-wider mt-1">
                  Dhaka Branches
                </p>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-dark/70">
                <Shield size={16} className="text-primary" />
                <span>World-Class Equipment</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-dark/70">
                <Award size={16} className="text-primary" />
                <span>Top-Rated Gym in Mirpur</span>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] max-w-md lg:max-w-none">
              {/* Outer border box for depth */}
              <div className="absolute inset-4 border border-dark/10 rounded-3xl translate-x-3 translate-y-3 -z-10 pointer-events-none" />

              {/* Main Image container */}
              <div ref={bgImgContainerRef} className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-dark">
                <Image
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1200"
                  alt="Elite trainer coaching a client at Spartan Fitness Dhaka"
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating review card */}
              <div className="hero-floating-card absolute bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 border border-dark/5">
                <div className="flex -space-x-2">
                  <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-dark">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                      alt="Member 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-dark">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                      alt="Member 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-dark">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                      alt="Member 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-heading text-sm text-dark">4.5+</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className="fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="font-body text-[10px] text-muted font-bold">Mirpur Branches Rating</p>
                </div>
              </div>

              {/* Floating Coach Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-2xl shadow-xl hover:bg-primary-dark transition-all duration-300">
                Since 2016
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer select-none pointer-events-auto" onClick={() => handleScroll("#about")}>
          <span className="font-body text-[9px] font-semibold text-muted uppercase tracking-[0.25em]">
            Scroll Down
          </span>
          <div className="text-muted hover:text-primary transition-colors">
            <ChevronDown size={16} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
