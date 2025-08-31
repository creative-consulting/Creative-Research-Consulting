import React from "react";
import { cn } from "@/lib/utils/cn";

export type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  className?: string;
  children: React.ReactNode;
  ref?: React.Ref<HTMLUListElement>;
};

export const List: React.FC<ListProps> = ({ children, className, ...rest }) => {
  return (
    <ul
      role="list"
      className={cn("list-none pl-0 space-y-1 text-gray-800", className)}
      {...rest}
    >
      {children}
    </ul>
  );
};
