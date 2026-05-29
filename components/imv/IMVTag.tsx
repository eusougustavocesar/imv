import { cn } from "@/lib/utils";

interface IMVTagProps {
  children: React.ReactNode;
  className?: string;
}

export function IMVTag({ children, className }: IMVTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full border text-[8px] font-bold tracking-[0.06em] uppercase",
        "border-[#B5894A] text-[#B5894A]",
        className
      )}
    >
      {children}
    </span>
  );
}
