import React from "react";
import { cn } from "../lib/utils";

export default function HeadingMedium({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-5xl md:text-7xl font-bold max-w-md tracking-tight md:leading-16",
        className,
      )}
    >
      {children}
    </h2>
  );
}
