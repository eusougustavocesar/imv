import { cn } from "@/lib/utils";

interface IMVSubheadingProps {
  children: React.ReactNode;
  first?: boolean;
  className?: string;
}

export function IMVSubheading({ children, first, className }: IMVSubheadingProps) {
  return (
    <h3
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1C1C1A]",
        "mb-3 pb-2 border-b border-[#DDD5C8]",
        !first && "mt-8",
        className
      )}
    >
      {children}
    </h3>
  );
}
