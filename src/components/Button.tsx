import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { cn } from "../lib/utils";

export default function Button({
  children,
  className,
  ghost,
}: {
  children: React.ReactNode;
  className?: string;
  ghost?: boolean;
}) {
  return (
    <button
      className={cn(
        "md:px-8 md:py-3 px-6 py-2 text-nowrap text-white text-lg font-bold gap-6 bg-primary hover:bg-greyDark transition duration-200 flex items-center",
        className,
        ghost && "bg-transparent text-primary hover:bg-greyLightest",
      )}
    >
      {children}
      <IoIosArrowRoundForward size={48} />
    </button>
  );
}
