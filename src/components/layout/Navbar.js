"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Services", href: "#programs", id: "programs" },
  { label: "Trainers", href: "#trainers", id: "trainers" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "Blog", href: "#blog", id: "blog" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Intersection Observer for scroll-linked active states
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -50% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/90 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl text-white"
            : "bg-transparent border-b border-transparent py-6 text-dark"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <a
              href="#hero"
              className="font-heading text-2xl md:text-3xl tracking-tighter uppercase focus:outline-none flex items-center gap-1 group"
            >
              <span className="text-primary font-bold transition-transform duration-300 group-hover:scale-110">S</span>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">partan</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className={`font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 relative py-2 ${
                      scrolled
                        ? isActive
                          ? "text-primary"
                          : "text-white/70 hover:text-white"
                        : isActive
                        ? "text-primary"
                        : "text-dark/70 hover:text-dark"
                    }`}
                  >
                    {link.label}
                    
                    {/* Sliding active line */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                variant="primary"
                onClick={() => handleNav("#contact")}
                className="shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Join Now
              </Button>
            </div>

            {/* Mobile Hamburger Icon morphing */}
            <button
              className={`lg:hidden focus:outline-none transition-colors duration-300 ${
                scrolled ? "text-white hover:text-primary" : "text-dark hover:text-primary"
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between h-16">
                <span className="font-heading text-3xl tracking-tighter uppercase text-white">
                  <span className="text-primary">S</span>partan
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white hover:text-primary focus:outline-none"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6 mt-16 text-center">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.a
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(link.href);
                      }}
                      className={`font-heading text-3xl uppercase tracking-wider transition-colors duration-200 ${
                        isActive ? "text-primary" : "text-white hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mb-12 flex flex-col items-center">
              <Button
                className="w-full max-w-xs shadow-xl"
                onClick={() => handleNav("#contact")}
              >
                Join Now
              </Button>
              <p className="font-body text-xs text-white/40 mt-6 uppercase tracking-widest">
                Stronger Every Day • Healthier for Life
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
