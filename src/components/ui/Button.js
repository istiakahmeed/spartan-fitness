"use client";

import { cn } from "@/lib/utils";

export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-body font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    outline:
      "border-2 border-dark text-dark hover:border-primary hover:text-primary",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
