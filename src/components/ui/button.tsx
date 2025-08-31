"use client";

import React, { forwardRef, type ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

// Custom button design system
const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all duration-300",
  {
    variants: {
      variant: {
        primaryLink:
          "bg-[#1c1c1d] text-white border border-[#1c1c1d] hover:bg-transparent hover:border-primary hover:text-primary rounded-[4px] px-5 py-2.5 w-fit ",
        secondaryLink:
          "bg-transparent hover:text-white border hover:bg-primary hover:border-primary px-4 py-2.5 lg:px-3.5 lg:py-2 xl:px-6 xl:py-3.5 shadow-sm rounded-full text-primary/90 border-primary/90",
        primary: "bg-primary text-white hover:bg-primary",
        faq: "sm:px-8 sm:py-3 px-4 py-2 sm:text-lg text-base bg-white text-primary hover:bg-gray-100 cursor-pointer",
        about:
          "bg-primary text-white hover:bg-primary rounded-[4px] px-5 py-2.5 w-fit",
        secondary:
          "border border-[#1c1c1d] text-[#1c1c1d] hover:bg-[#1c1c1d] hover:text-white",
        outline:
          "bg-transparent border border-current text-[#1c1c1d] hover:bg-[#1c1c1d] hover:text-white hover:border-[#1c1c1d]",
      },
      size: {
        default: "px-4 py-2.5 rounded-[4px]",
        sm: "px-3 py-2 rounded-[4px] text-sm",
        lg: "px-6 py-3 rounded-[4px] text-lg",
        xl: "px-8 py-4 rounded-[4px] text-xl",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      href,
      children,
      ...props
    },
    ref
  ) => {
    // Decide which element to render
    const isLinkVariant =
      variant === "primaryLink" ||
      variant === "secondaryLink" ||
      variant === "faq" ||
      variant === "about";

    const Comp: React.ElementType =
      isLinkVariant && href ? Link : asChild ? Slot : "button";

    const MotionComp = motion(Comp);

    return (
      <MotionComp
        ref={ref}
        {...(isLinkVariant && href ? { href } : {})}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </MotionComp>
    );
  }
);

Button.displayName = "Button";
