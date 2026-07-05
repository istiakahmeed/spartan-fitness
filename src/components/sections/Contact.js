"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Star, Map, Compass } from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const branches = [
  {
    id: "mirpur-7",
    name: "Spartan Fitness Mirpur-7",
    rating: "4.5+",
    reviews: "320+ Reviews",
    address: "Block-3, 1/1 Milk Vita Road, Plot-B, Section-7, Avenue-4, Mirpur, Dhaka",
    phone: "01688-664545",
    hours: "6:00 AM – 11:30 PM (Everyday)",
    mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0982705164104!2d90.3621415!3d23.8151246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1264c126d4b%3A0xc31cb0270a6c9cf1!2sMirpur%20Section%207!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd",
    directionsUrl: "https://maps.google.com/?q=Spartan+Fitness+Mirpur+7+Dhaka",
  },
  {
    id: "mirpur-14",
    name: "Spartan Fitness Mirpur-14",
    rating: "4.2+",
    reviews: "180+ Reviews",
    address: "Level-4, Rofiq Tower, 211/8 Kachukhet Road, Mirpur-14, Dhaka",
    phone: "01688-664545",
    hours: "6:00 AM – 11:30 PM (Everyday)",
    mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.597652758137!2d90.3888365!3d23.7972846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a95cd8c847%3A0x6b245037d04a6011!2sMirpur%2014%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd",
    directionsUrl: "https://maps.google.com/?q=Spartan+Fitness+Mirpur+14+Kachukhet+Road+Dhaka",
  },
];

const socialLinks = [
  { icon: (props) => <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>, href: "https://facebook.com", label: "Facebook" },
  { icon: (props) => <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, href: "https://instagram.com", label: "Instagram" },
  { icon: (props) => <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" {...props}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>, href: "https://twitter.com", label: "Twitter" },
];

export default function Contact() {
  const [activeBranchId, setActiveBranchId] = useState("mirpur-7");
  const [submitted, setSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact submission:", { ...data, branch: activeBranchId });
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const activeBranch = branches.find((b) => b.id === activeBranchId);

  const inputClass =
    "w-full px-4 py-3 bg-white border border-dark/10 rounded-xl font-body text-sm text-dark placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 shadow-sm";

  const errorClass = "font-body text-xs text-primary mt-1.5 font-semibold";

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Connect With Spartan"
          subtext="Have questions about classes, trainers, or pricing? Reach out or visit one of our two premium branches in Mirpur."
          className="mb-16"
        />

        {/* Branch Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {branches.map((b) => (
            <button
              key={b.id}
              onClick={() => setActiveBranchId(b.id)}
              className={`px-6 py-3 rounded-2xl font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                activeBranchId === b.id
                  ? "bg-dark text-white border-dark shadow-md"
                  : "bg-offwhite border-dark/5 text-muted hover:text-dark hover:border-dark/10"
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-offwhite p-8 md:p-10 rounded-3xl border border-dark/5 shadow-xl shadow-dark/[0.01]"
          >
            <h3 className="font-heading text-2xl uppercase tracking-wider text-dark mb-2">
              Send a Message
            </h3>
            <p className="font-body text-xs text-muted mb-6">
              Inquire about active plans, freezes, or schedule a free trial class at {activeBranch.name}.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-500/30 text-emerald-900 rounded-2xl p-6 flex flex-col items-center text-center gap-2"
              >
                <CheckCircle size={32} className="text-emerald-500" />
                <h4 className="font-heading text-lg uppercase tracking-wide">Submission Successful!</h4>
                <p className="font-body text-xs text-emerald-800 leading-relaxed">
                  Thank you for reaching out. A fitness advisor from {activeBranch.name} will call you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-xs font-bold uppercase tracking-wider text-dark/70 mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className={inputClass}
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className={errorClass}>{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="font-body text-xs font-bold uppercase tracking-wider text-dark/70 mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className={inputClass}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className={errorClass}>{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs font-bold uppercase tracking-wider text-dark/70 mb-2 block">
                    Phone (01XXXX-XXXXXX)
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 01711-223344"
                    className={inputClass}
                    {...register("phone", { required: "Phone number is required" })}
                  />
                  {errors.phone && (
                    <p className={errorClass}>{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="font-body text-xs font-bold uppercase tracking-wider text-dark/70 mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your fitness level and goals..."
                    className={`${inputClass} resize-none`}
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <p className={errorClass}>{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="items-center justify-center w-full gap-2 px-4  shadow-lg shadow-primary/10 hover:shadow-primary/20"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}

                </Button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Branch Cards & Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-8 w-full"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBranchId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-8 w-full"
              >
                {/* Branch Card Details */}
                <div className="bg-dark text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                  
                  {/* Rating row */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="flex items-center text-primary-light">
                      <Star size={14} className="fill-current" />
                      <span className="font-heading text-sm ml-1 font-bold">{activeBranch.rating}</span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="font-body text-[10px] text-white/50">{activeBranch.reviews}</span>
                  </div>

                  <h3 className="font-heading text-2xl uppercase tracking-wider text-white mb-6">
                    {activeBranch.name}
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                        <MapPin size={15} className="text-primary-light" />
                      </div>
                      <div>
                        <p className="font-body text-[9px] font-bold uppercase tracking-wider text-white/40">Address</p>
                        <p className="font-body text-xs text-white/80 mt-0.5 leading-relaxed">{activeBranch.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                        <Phone size={15} className="text-primary-light" />
                      </div>
                      <div>
                        <p className="font-body text-[9px] font-bold uppercase tracking-wider text-white/40">Phone</p>
                        <p className="font-body text-xs text-white/80 mt-0.5">{activeBranch.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                        <Clock size={15} className="text-primary-light" />
                      </div>
                      <div>
                        <p className="font-body text-[9px] font-bold uppercase tracking-wider text-white/40">Business Hours</p>
                        <p className="font-body text-xs text-white/80 mt-0.5">{activeBranch.hours}</p>
                      </div>
                    </div>
                  </div>

                  {/* External links buttons inside card */}
                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
                    <a
                      href={activeBranch.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-body text-xs font-bold uppercase tracking-wider border border-white/5 transition-all duration-300"
                    >
                      <Map size={14} />
                      Google Maps
                    </a>
                    <a
                      href={activeBranch.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-body text-xs font-bold uppercase tracking-wider transition-all duration-300"
                    >
                      <Compass size={14} />
                      Get Directions
                    </a>
                  </div>
                </div>

                {/* Styled Map frame */}
                <div className="h-[250px] w-full rounded-3xl overflow-hidden border border-dark/5 shadow-lg relative bg-dark/5">
                  <iframe
                    title={activeBranch.name}
                    src={activeBranch.mapIframe}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Social Links Row */}
            <div className="flex items-center justify-center gap-6 mt-2 pt-2">
              <span className="font-body text-[10px] font-bold text-muted uppercase tracking-[0.2em]">
                Follow Spartan
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-offwhite hover:bg-primary border border-dark/5 flex items-center justify-center text-muted hover:text-white transition-all duration-350"
                      aria-label={s.label}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
