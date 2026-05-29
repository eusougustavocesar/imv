import { cn } from "@/lib/utils";
import { IMVBadge } from "./IMVBadge";

interface IMVHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  badges?: string[];
  className?: string;
}

export function IMVHero({ eyebrow, title, subtitle, badges, className }: IMVHeroProps) {
  return (
    <header
      className={cn(
        "w-full bg-[#1C1C1A] flex items-center justify-center",
        "min-h-[70vh] print:min-h-[297mm]",
        "border-b border-[#B5894A]/40",
        className
      )}
    >
      <div className="imv-wrap py-24 flex flex-col items-center text-center">

        {/* Logo mark */}
        <div className="w-8 h-px bg-[#B5894A] mb-8" />

        <span className="block text-[9px] font-semibold tracking-[0.3em] uppercase text-[#C4956A] mb-6">
          {eyebrow}
        </span>

        <div className="font-serif text-[52px] font-bold text-white leading-[1.05] mb-6">
          {title}
        </div>

        {subtitle && (
          <p className="text-[13px] text-white/40 leading-[1.9] max-w-[420px] mx-auto">
            {subtitle}
          </p>
        )}

        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-10 justify-center">
            {badges.map((b) => (
              <IMVBadge key={b}>{b}</IMVBadge>
            ))}
          </div>
        )}

        {/* Bottom mark */}
        <div className="w-8 h-px bg-[#B5894A] mt-10" />
      </div>
    </header>
  );
}
