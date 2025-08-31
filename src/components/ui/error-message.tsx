"use client";

import React from "react";
import { cn } from "@/lib/utils/cn";
import { gsap } from "gsap";

export interface ErrorMessageProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  animate?: boolean;
  animationDelay?: number;
  showIcon?: boolean;
  icon?: React.ReactNode;
}

const ErrorMessage = React.forwardRef<HTMLParagraphElement, ErrorMessageProps>(
  ({
    className,
    animate = true,
    animationDelay = 0.1,
    showIcon = true,
    icon,
    children,
    ...props
  }) =>
    // ref
    {
      const errorRef = React.useRef<HTMLParagraphElement>(null);

      React.useEffect(() => {
        if (!animate || !errorRef.current) return;

        gsap.from(errorRef.current, {
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
          ref={errorRef}
          className={cn(
            "flex items-start gap-2 text-sm text-destructive",
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
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              )}
            </span>
          )}
          <span>{children}</span>
        </p>
      );
    }
);

ErrorMessage.displayName = "ErrorMessage";

export { ErrorMessage };
