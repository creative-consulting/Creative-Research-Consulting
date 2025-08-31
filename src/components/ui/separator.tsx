"use client";

import React from "react";
import { cn } from "@/lib/utils/cn";
import { gsap } from "gsap";

const Separator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: "horizontal" | "vertical";
    animate?: boolean;
    animationDelay?: number;
  }
>(
  ({
    className,
    orientation = "horizontal",
    animate = true,
    animationDelay = 0,
    ...props
  }) => {
    const separatorRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (!animate || !separatorRef.current) return;

      gsap.from(separatorRef.current, {
        scaleX: orientation === "horizontal" ? 0 : 1,
        scaleY: orientation === "vertical" ? 0 : 1,
        duration: 0.8,
        delay: animationDelay,
        ease: "power3.out",
        transformOrigin:
          orientation === "horizontal" ? "left center" : "center top",
      });
    }, [animate, animationDelay, orientation]);

    return (
      <div
        ref={separatorRef}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )}
        {...props}
      />
    );
  }
);
Separator.displayName = "Separator";

export { Separator };
