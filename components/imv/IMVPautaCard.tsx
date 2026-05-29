import { cn } from "@/lib/utils";

type SpeechSection = {
  label: string;
  timing: string;
  type: "speech";
  text: string;
};

type BulletsSection = {
  label: string;
  timing: string;
  type: "bullets";
  items: string[];
};

export type PautaSection = SpeechSection | BulletsSection;

export type PautaPost = {
  code: string;
  title: string;
  isAd: boolean;
  stars?: 2 | 3;
  duration: number;
  filmmakerNote: string;
  pergunta?: {
    label: string;
    role: string;
    text: string;
  };
  sections: PautaSection[];
};

function StarBadge({ stars }: { stars: 2 | 3 }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-[10px] font-bold border border-[#B5894A]/50 text-[#C4956A] px-2 py-0.5 rounded tracking-wide">
      AD {"★".repeat(stars)}{"☆".repeat(3 - stars)}
    </span>
  );
}

export function IMVPautaCard({ post, className }: { post: PautaPost; className?: string }) {
  return (
    <div className={cn("rounded-xl border border-[#DDD5C8] overflow-hidden bg-white shadow-sm", className)}>

      {/* Header */}
      <div className="bg-[#1C1C1A] px-5 py-4 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#B5894A] text-white font-bold text-[13px] font-mono leading-none">
            {post.code}
          </span>
          <h3 className="text-white font-bold text-[14px] leading-[1.35] pt-1.5">
            {post.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 shrink-0 pt-1.5">
          {post.isAd && post.stars && <StarBadge stars={post.stars} />}
          <span className="text-[10px] font-semibold text-white/40 bg-white/8 border border-white/10 px-2 py-0.5 rounded">
            {post.duration}s
          </span>
        </div>
      </div>

      {/* Filmmaker note */}
      <div className="px-5 py-3 border-b border-[#DDD5C8] bg-[#F8F4EE]">
        <p className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-[#B5894A] mb-1">
          Nota para o filmmaker
        </p>
        <p className="text-[11px] italic text-[#7A706A] leading-[1.65]">
          {post.filmmakerNote}
        </p>
      </div>

      {/* Pergunta (optional) */}
      {post.pergunta && (
        <div className="px-5 py-3.5 border-b border-[#DDD5C8] bg-[#B5894A]/10">
          <p className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-[#7A5C2A] mb-0.5">
            {post.pergunta.label}
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#B5894A] mb-2">
            {post.pergunta.role}
          </p>
          <p className="text-[12px] italic text-[#2E2B28] leading-[1.65]">
            "{post.pergunta.text}"
          </p>
        </div>
      )}

      {/* Sections */}
      <div className="divide-y divide-[#EDE6DC]">
        {post.sections.map((s, i) => (
          <div key={i} className="px-5 py-4">
            <div className="flex items-baseline gap-2 mb-2.5">
              <span className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-[#B5894A]">
                {s.label}
              </span>
              <span className="text-[9px] text-[#7A706A]">
                · {s.timing}
              </span>
            </div>

            {s.type === "speech" && (
              <blockquote className="border-l-2 border-[#B5894A] bg-[#F8F4EE] pl-4 pr-4 py-2.5 rounded-r text-[12px] italic text-[#2E2B28] leading-[1.7]">
                "{s.text}"
              </blockquote>
            )}

            {s.type === "bullets" && (
              <ul className="space-y-1.5">
                {s.items.map((item, j) => (
                  <li key={j} className="flex gap-2.5 text-[12px] text-[#2E2B28] leading-[1.6]">
                    <span className="text-[#B5894A] shrink-0 font-bold mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
