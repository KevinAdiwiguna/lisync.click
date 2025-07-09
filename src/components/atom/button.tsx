"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Color =
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "info"
  | "warning"
  | "success"
  | "ghost"
  | "outline"
  | "error";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: Color;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const colorClassMap: Record<Color, { bg: string; fg: string }> = {
  primary: {
    bg: "bg-primary hover:bg-primary/75",
    fg: "text-primary-content",
  },
  secondary: {
    bg: "bg-secondary hover:bg-secondary/75",
    fg: "text-secondary-content",
  },
  accent: {
    bg: "bg-accent hover:bg-accent/75",
    fg: "text-accent-content",
  },
  neutral: {
    bg: "bg-neutral hover:bg-neutral/75",
    fg: "text-neutral-content",
  },
  info: {
    bg: "bg-info hover:bg-info/75",
    fg: "text-info-content",
  },
  warning: {
    bg: "bg-warning hover:bg-warning/75",
    fg: "text-warning-content",
  },
  success: {
    bg: "bg-success hover:bg-success/75",
    fg: "text-success-content",
  },
  error: {
    bg: "bg-error hover:bg-error/75",
    fg: "text-error-content",
  },
  ghost: {
    bg: "bg-transparent hover:bg-neutral/10",
    fg: "text-base-content",
  },
  outline: {
    bg: "bg-transparent hover:bg-neutral/10 border border-base-content/50",
    fg: "text-base-content",
  }
};

export default function Button({
  children,
  iconLeft,
  iconRight,
  className = "",
  color = "primary",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-field text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none gap-2 px-4 py-2 cursor-pointer";

  const colorClasses = colorClassMap[color];

  return (
    <button
      className={cn(base, colorClasses.bg, colorClasses.fg, className)}
      {...props}
    >
      {iconLeft && <span className="flex items-center">{iconLeft}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span className="flex items-center">{iconRight}</span>}
    </button>
  );
}
