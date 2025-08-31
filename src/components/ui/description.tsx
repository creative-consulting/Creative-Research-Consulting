"use client";

import React from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils/cn";

export interface DescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  animate?: boolean;
  animationDelay?: number;
  showIcon?: boolean;
  icon?: React.ReactNode;
}

const Description = React.forwardRef<HTMLParagraphElement, DescriptionProps>(
  (
    {
      className,
      animate = true,
      animationDelay = 0.1,
      showIcon = false,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const descRef = React.useRef<HTMLParagraphElement>(null);

    React.useEffect(() => {
      if (!animate || !descRef.current) return;

      gsap.from(descRef.current, {
        opacity: 0,
        y: -3,
        duration: 0.3,
        delay: animationDelay,
        ease: "power2.out",
      });
    }, [animate, animationDelay]);

    if (!children) return null;

    return (
      <p
        ref={(node) => {
          descRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref && node)
            (ref as React.MutableRefObject<HTMLParagraphElement>).current =
              node;
        }}
        className={cn(
          "flex items-start gap-2 text-sm text-muted-foreground",
          className
        )}
        {...props}
      >
        {showIcon && (
          <span className="inline-flex mt-0.5">
            {icon || (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            )}
          </span>
        )}
        <span>{children}</span>
      </p>
    );
  }
);

Description.displayName = "Description";

export { Description };
