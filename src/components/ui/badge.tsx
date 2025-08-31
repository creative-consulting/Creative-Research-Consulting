"use client";

import React from "react";
import { cn } from "@/lib/utils/cn";
import { gsap } from "gsap";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  animate?: boolean;
  animationDelay?: number;
}

function Badge({
  className,
  variant,
  animate = true,
  animationDelay = 0.1,
  ...props
}: BadgeProps) {
  const badgeRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!animate || !badgeRef.current) return;

    gsap.from(badgeRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      delay: animationDelay,
      ease: "elastic.out(1, 0.5)",
    });
  }, [animate, animationDelay]);

  return (
    <div
      className={cn(badgeVariants({ variant, className }))}
      ref={badgeRef}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
