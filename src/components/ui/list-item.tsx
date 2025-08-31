import { cn } from "@/lib/utils/cn";
import React from "react";

export type ListItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  className?: string;
  children: React.ReactNode;
};

export const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <li
      className={cn("text-sm leading-relaxed text-gray-700", className)}
      {...rest}
    >
      {children}
    </li>
  );
};
