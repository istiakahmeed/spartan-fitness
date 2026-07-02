"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Fitness Avenue, New York, NY 10001",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@spartangym.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri: 5am – 11pm | Sat–Sun: 7am – 9pm",
  },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const inputClass =
    "w-full px-4 py-3 bg-white border border-gray-200 rounded-lg font-body text-sm text-dark placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200";

  const errorClass = "font-body text-xs text-primary mt-1";

  return (
    <section id="contact" className="bg-offwhite py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Contact Us"
          subtext="Have a question or ready to start your journey? We would love to hear from you."
          className="mb-12 lg:mb-16"
        />

        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="font-body text-sm font-medium text-dark mb-1.5 block">
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
                <label className="font-body text-sm font-medium text-dark mb-1.5 block">
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

              <div>
                <label className="font-body text-sm font-medium text-dark mb-1.5 block">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className={inputClass}
                  {...register("phone")}
                />
              </div>

              <div>
                <label className="font-body text-sm font-medium text-dark mb-1.5 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals..."
                  className={`${inputClass} resize-none`}
                  {...register("message", {
                    required: "Message is required",
                  })}
                />
                {errors.message && (
                  <p className={errorClass}>{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="bg-dark rounded-2xl p-8 md:p-10 h-full">
              <h3 className="font-heading text-2xl uppercase tracking-tight text-white">
                Contact Info
              </h3>
              <p className="font-body text-sm text-white/50 mt-2 leading-relaxed">
                Reach out and we will get back to you within 24 hours.
              </p>

              <div className="space-y-6 mt-8">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-body text-sm font-medium text-white">
                          {item.label}
                        </p>
                        <p className="font-body text-sm text-white/50 mt-0.5 leading-relaxed">
                          {item.value}
                        </p>
                      </div>
                    </div>
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
