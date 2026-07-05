"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Award, Calendar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";

// Custom SVG Social Icons to prevent package version dependency errors
const Instagram = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const trainers = [
  {
    id: 1,
    name: "Marcus Reid",
    role: "Head Coach & Founder",
    specialty: "Strength & Conditioning",
    experience: "12+ Years Experience",
    certificates: ["CSCS", "NASM-PES", "USAW-L2"],
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 2,
    name: "Sofia Chen",
    role: "Senior Coach",
    specialty: "Yoga & Core Mobility",
    experience: "8+ Years Experience",
    certificates: ["RYT-500", "FMS Level 2", "PN-L1 Nutrition"],
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=600",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 3,
    name: "James Carter",
    role: "Lead Performance Coach",
    specialty: "CrossFit & Athletic HIIT",
    experience: "10+ Years Experience",
    certificates: ["CF-L3 Trainer", "USAW-L1", "NASM-CES"],
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 4,
    name: "Aisha Patel",
    role: "Nutrition Specialist & Coach",
    specialty: "Body Composition & Dietetics",
    experience: "7+ Years Experience",
    certificates: ["RD (Registered Dietitian)", "CSSD", "NASM-CNC"],
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?auto=format&fit=crop&q=80&w=600",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
];

export default function Coaches() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Stagger scroll reveal for coach cards
      gsap.fromTo(
        ".coach-card",
        { opacity: 0, y: 50, filter: "blur(2px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".coach-card",
            start: "top 85%",
          },
        }
      );

      // 3D Card tilt effect on mouse hover
      const cards = document.querySelectorAll(".coach-card");
      cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const xc = rect.width / 2;
          const yc = rect.height / 2;
          const dx = x - xc;
          const dy = y - yc;

          gsap.to(card, {
            transformPerspective: 800,
            rotateY: dx / 12,
            rotateX: -dy / 12,
            ease: "power2.out",
            duration: 0.4,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            ease: "power3.out",
            duration: 0.6,
          });
        });
      });
    }
  }, []);

  return (
    <section id="trainers" className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="EXPERT TEAM"
          title="Meet Our Elite Trainers"
          subtext="Every trainer at Spartan holds industry-leading certifications, years of competitive athletic experience, and is dedicated to your transformation."
          className="mb-16"
        />

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="coach-card bg-offwhite rounded-3xl overflow-hidden shadow-lg border border-dark/5 flex flex-col group transition-all duration-300 opacity-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              
              {/* Image Container with Hover reveal */}
              <div className="relative aspect-[4/5] overflow-hidden bg-dark">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Dynamic Certifications Overlay */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 pointer-events-none">
                  {trainer.certificates.slice(0, 2).map((cert) => (
                    <span
                      key={cert}
                      className="bg-dark/80 backdrop-blur-sm text-white font-body text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-md border border-white/10 uppercase"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between" style={{ transform: "translateZ(30px)" }}>
                <div>
                  {/* Specialty tag */}
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest font-body">
                    {trainer.specialty}
                  </span>

                  <h3 className="font-heading text-xl uppercase tracking-wider text-dark mt-1">
                    {trainer.name}
                  </h3>
                  
                  <p className="font-body text-xs text-muted font-medium mt-1">
                    {trainer.role}
                  </p>
                </div>

                {/* Additional metrics */}
                <div className="mt-4 pt-4 border-t border-dark/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Calendar size={13} className="text-primary flex-shrink-0" />
                    <span>{trainer.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Award size={13} className="text-primary flex-shrink-0" />
                    <span className="truncate">{trainer.certificates.join(", ")}</span>
                  </div>
                </div>

                {/* Social links with transition-up effect */}
                <div className="flex items-center gap-4 mt-6 overflow-hidden">
                  {trainer.social.instagram && (
                    <a
                      href={trainer.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-primary transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75"
                      aria-label="Instagram"
                    >
                      <Instagram />
                    </a>
                  )}
                  {trainer.social.facebook && (
                    <a
                      href={trainer.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-primary transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                      aria-label="Facebook"
                    >
                      <Facebook />
                    </a>
                  )}
                  {trainer.social.twitter && (
                    <a
                      href={trainer.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-primary transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150"
                      aria-label="Twitter"
                    >
                      <Twitter />
                    </a>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
