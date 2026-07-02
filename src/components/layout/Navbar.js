"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Coaches", href: "#coaches" },
  { label: "Packages", href: "#packages" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-offwhite/95 backdrop-blur-md shadow-sm"
            : "bg-offwhite"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#hero"
              className="font-heading text-2xl md:text-3xl tracking-tighter"
            >
              <span className="text-primary">S</span>PARTAN
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm font-medium text-dark/80 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <Button onClick={() => handleNav("#contact")}>
                Join Now
              </Button>
            </div>

            <button
              className="lg:hidden text-dark"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-offwhite lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex items-center justify-between h-16">
                <span className="font-heading text-3xl tracking-tighter">
                  <span className="text-primary">S</span>PARTAN
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center gap-8 mt-16">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="font-heading text-4xl uppercase tracking-wide text-dark hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  className="mt-8"
                  onClick={() => handleNav("#contact")}
                >
                  Join Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
