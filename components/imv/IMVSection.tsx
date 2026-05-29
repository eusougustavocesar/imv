import { cn } from "@/lib/utils";

interface IMVSectionProps {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function IMVSection({ eyebrow, title, children, id, className }: IMVSectionProps) {
  return (
    <section
      id={id}
      className={cn("py-14 border-b border-[#DDD5C8] last:border-none [break-inside:avoid]", className)}
    >
      <div className="mb-5">
        <span className="block text-[9px] font-semibold tracking-[0.22em] uppercase text-[#B5894A] mb-1.5">
          {eyebrow}
        </span>
        <h2 className="font-serif text-[28px] font-bold text-[#1C1C1A] leading-[1.2]">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
