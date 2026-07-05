"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "What are the gym operating hours?",
    answer: "Our standard staffed hours are Monday through Friday from 5:00 AM to 11:00 PM, and Saturday/Sunday from 7:00 AM to 9:00 PM. Elite members receive personalized keycard access for 24/7 gym entry.",
  },
  {
    question: "Can I freeze or cancel my membership online?",
    answer: "Yes, you can freeze or cancel your subscription directly through the member portal or app, or by writing to hello@spartangym.com. We require a 5-day notice before your next billing cycle to prevent automatic renews.",
  },
  {
    question: "What is included in the Pro Plan's personal training?",
    answer: "The Pro Plan includes 4 private 60-minute personal training sessions per billing month. These sessions are scheduled directly with your coach and do not roll over to the subsequent billing month.",
  },
  {
    question: "Is there secure parking at the facility?",
    answer: "Absolutely. Spartan has monitored secure underground parking free for all active members. Simply validate your parking card at the main reception desk when entering the gym.",
  },
  {
    question: "How do I book athletic group classes?",
    answer: "Classes can be booked online via our member app up to 7 days in advance. Basic tier allows standard bookings, while Pro and Elite plans receive priority 24-hour early booking windows.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="COMMON QUESTIONS"
          title="Frequently Asked Questions"
          subtext="Find answers to baseline inquiries regarding our facilities, private training, and membership billing cycles."
          className="mb-16 text-center mx-auto"
        />

        {/* Accordion Layout */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-offwhite rounded-2xl border border-dark/5 shadow-md overflow-hidden transition-all duration-300"
              >
                
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={16} className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-heading text-sm sm:text-base uppercase tracking-wider text-dark group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted group-hover:text-dark"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-dark/5 font-body text-xs sm:text-sm text-muted leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
