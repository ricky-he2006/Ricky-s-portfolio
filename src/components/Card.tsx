import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Clean, flat card — a crisp 1px border that firms up slightly on hover.
 * No glow, no blur, no mouse-tracking: it reads as ink on paper.
 */
export function Card({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card/60 p-6 transition-colors duration-200",
        hover && "hover:border-foreground/30",
        className,
      )}
    >
      {children}
    </div>
  );
}
