"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Flame, Target, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const dietPlans = [
  {
    id: "fat-loss",
    goal: "Lean Definition & Fat Loss",
    planName: "Thermogenic Caloric Deficit",
    mealName: "Zesty Seared Salmon & Greens",
    macros: "1,800 kcal • 160g Protein • 130g Carbs • 55g Fat",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Accelerates fat oxidation while preserving lean skeletal muscle",
      "Balances high dietary protein to keep you satiated throughout the day",
      "Low glycemic index carbs to prevent insulin and energy spikes",
    ],
    sampleIngredients: "Fresh Wild Salmon, Steam Broccoli, Avocado slices, Wild Rice, Lemon drizzle",
  },
  {
    id: "hypertrophy",
    goal: "Muscle Gain & Mass",
    planName: "Hypertrophic Caloric Surplus",
    mealName: "Prime Beef Sirloin & Mash",
    macros: "2,900 kcal • 190g Protein • 310g Carbs • 85g Fat",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Elevates glycogen reserves to maximize lifting performance",
      "Triggers high muscle protein synthesis (MPS) rates post-training",
      "Packed with essential amino acids and healthy fats for joint recovery",
    ],
    sampleIngredients: "Seared Beef Strips, Whipped Sweet Potatoes, Sauteed Asparagus, Virgin Olive Oil",
  },
  {
    id: "performance",
    goal: "Athletic Endurance",
    planName: "Isocaloric Performance Balance",
    mealName: "Marinated Chicken & Quinoa Salad",
    macros: "2,400 kcal • 170g Protein • 240g Carbs • 70g Fat",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Maintains optimal glucose levels during intense athletic conditioning",
      "Anti-inflammatory ingredients support cardiovascular performance",
      "Rich in complex minerals to support electrolyte replenishment",
    ],
    sampleIngredients: "Shredded Organic Chicken, Toasted Quinoa, Mixed Baby Greens, Almond slivers, Raspberries",
  },
];

export default function Nutrition() {
  const [activePlanId, setActivePlanId] = useState("fat-loss");
  
  const activePlan = dietPlans.find((plan) => plan.id === activePlanId);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="nutrition" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="NUTRITION SYSTEM"
          title="Performance Diet Blueprints"
          subtext="Training stimualtes. Nutrition builds. Select your athletic goal to view sample nutrient splits mapped out by our staff nutritionists."
          className="mb-16"
        />

        {/* Dynamic Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {dietPlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActivePlanId(plan.id)}
              className={`px-6 py-3 rounded-2xl font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                activePlanId === plan.id
                  ? "bg-dark text-white border-dark shadow-lg shadow-dark/15"
                  : "bg-offwhite border-dark/5 text-muted hover:text-dark hover:border-dark/10"
              }`}
            >
              {plan.goal}
            </button>
          ))}
        </div>

        {/* Active Content Display Card */}
        <div className="bg-offwhite rounded-3xl border border-dark/5 p-6 md:p-10 shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlanId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              
              {/* Left Column: Image */}
              <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-dark shadow-md">
                <Image
                  src={activePlan.image}
                  alt={activePlan.mealName}
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Image Overlay Tag */}
                <div className="absolute bottom-4 left-4 bg-dark/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/5">
                  <span className="font-heading text-xs text-white uppercase tracking-wider block">
                    Sample Meal
                  </span>
                  <span className="font-body text-[10px] text-white/50 mt-0.5 block truncate max-w-[200px]">
                    {activePlan.mealName}
                  </span>
                </div>
              </div>

              {/* Right Column: Nutrition Plan Details */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  {/* Plan Tag */}
                  <span className="font-body text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                    {activePlan.planName}
                  </span>

                  <h3 className="font-heading text-2xl md:text-3xl uppercase tracking-wider text-dark mt-1">
                    {activePlan.mealName}
                  </h3>

                  {/* Macros info */}
                  <div className="inline-flex items-center gap-2.5 bg-white border border-dark/5 px-4 py-2.5 rounded-2xl shadow-sm mt-4">
                    <Flame size={14} className="text-primary flex-shrink-0" />
                    <span className="font-body text-xs font-bold text-dark tracking-wide">
                      {activePlan.macros}
                    </span>
                  </div>

                  <p className="font-body text-xs text-muted leading-relaxed mt-6">
                    <strong>Primary ingredients:</strong> {activePlan.sampleIngredients}.
                  </p>

                  <hr className="border-dark/5 my-6" />

                  {/* Plan benefits checklist */}
                  <h4 className="font-heading text-xs uppercase tracking-[0.15em] text-dark/70 mb-3">
                    Nutritional Strategy:
                  </h4>
                  <div className="space-y-3">
                    {activePlan.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={11} className="text-primary" />
                        </div>
                        <span className="font-body text-xs md:text-sm text-dark/85 leading-relaxed">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inquire Action Button */}
                <div className="mt-8 pt-6 border-t border-dark/5 flex flex-col sm:flex-row items-center gap-4">
                  <Button
                    onClick={() => handleScroll("#contact")}
                    className="w-full sm:w-auto shadow-xl shadow-primary/10"
                  >
                    Request Custom Diet
                  </Button>
                  <button
                    onClick={() => handleScroll("#pricing")}
                    className="inline-flex items-center gap-1 font-body text-xs font-bold uppercase tracking-wider text-dark hover:text-primary transition-colors py-3 px-4 cursor-pointer"
                  >
                    <span>View Pricing Plans</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
