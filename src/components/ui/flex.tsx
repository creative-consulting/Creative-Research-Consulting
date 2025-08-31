import React from "react";
import { cn } from "@/lib/utils/cn";

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  gap?: string; // e.g. 'gap-4', 'gap-x-2 gap-y-6'
  fullWidth?: boolean;
  fullHeight?: boolean;
  children: React.ReactNode;
};

export const Flex: React.FC<FlexProps> = ({
  children,
  className,
  direction = "row",
  justify = "start",
  align = "center",
  wrap = "wrap",
  gap = "gap-2",
  fullWidth = false,
  fullHeight = false,
  ...rest
}) => {
  return (
    <div
      className={cn(
        "flex",
        `flex-${direction}`,
        `justify-${justify}`,
        `items-${align}`,
        wrap !== "wrap" ? `flex-${wrap}` : "flex-wrap",
        gap,
        fullWidth && "w-full",
        fullHeight && "h-full",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
