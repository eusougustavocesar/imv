import { cn } from "@/lib/utils";

interface IMVBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function IMVBadge({ children, className }: IMVBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full border text-[9px] font-semibold tracking-[0.08em] uppercase",
        "border-[#C4956A]/40 text-[#C4956A]",
        className
      )}
    >
      {children}
    </span>
  );
}
