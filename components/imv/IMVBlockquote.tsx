import { cn } from "@/lib/utils";

interface IMVBlockquoteProps {
  children: React.ReactNode;
  className?: string;
}

export function IMVBlockquote({ children, className }: IMVBlockquoteProps) {
  return (
    <blockquote
      className={cn(
        "border-l-[3px] border-[#B5894A] pl-5 py-3 my-5 rounded-r-md",
        "bg-[#F8F4EE] text-[13px] italic text-[#1C1C1A] leading-[1.8]",
        className
      )}
    >
      {children}
    </blockquote>
  );
}
