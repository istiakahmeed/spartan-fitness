"use client";

import { useState } from "react";
import { Camera, Users, MessageCircle, Send } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Coaches", href: "#coaches" },
  { label: "Packages", href: "#packages" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Camera, href: "https://instagram.com", label: "Instagram" },
  { icon: Users, href: "https://facebook.com", label: "Facebook" },
  { icon: MessageCircle, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="font-heading text-2xl tracking-tighter">
              <span className="text-primary">S</span>PARTAN
            </span>
            <p className="font-body text-sm text-white/40 mt-4 leading-relaxed max-w-xs">
              Premium fitness training for the relentless. Build strength, forge
              discipline, transform your life.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-primary transition-colors duration-200"
                    aria-label={s.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/40 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-3 font-body text-sm text-white/40">
              <li>123 Fitness Avenue</li>
              <li>New York, NY 10001</li>
              <li className="pt-2">+1 (555) 123-4567</li>
              <li>hello@spartangym.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-white mb-5">
              Newsletter
            </h4>
            <p className="font-body text-sm text-white/40 mb-4 leading-relaxed">
              Get fitness tips and exclusive offers straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/10 rounded-lg font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2.5 rounded-lg hover:bg-primary-dark transition-colors duration-200 flex-shrink-0"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="font-body text-sm text-white/30 text-center">
            &copy; {new Date().getFullYear()} Spartan Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
