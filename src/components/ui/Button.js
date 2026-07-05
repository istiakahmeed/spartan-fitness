"use client";

import { cn } from "@/lib/utils";

export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}) {
  const base =
    "relative overflow-hidden group inline-flex items-center justify-center font-body font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    outline:
      "border-2 border-dark text-dark hover:border-primary hover:text-primary",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      <span className="relative z-10">{children}</span>
      {/* Shine sweep overlay */}
      <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
    </button>
  );
}
