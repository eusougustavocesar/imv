"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { IMVTag } from "./IMVTag";

interface IMVAdCardProps {
  advertiser: string;
  product: string;
  type: "video" | "image" | "carousel";
  daysRunning: number;
  variations: number;
  cta: string;
  body: string;
  thumbnail: string;
  insight: string;
  tags: string[];
  snapshotUrl: string;
  className?: string;
}

const TYPE_LABEL = { video: "▶ vídeo", image: "imagem", carousel: "⧉ carrossel" } as const;

export function IMVAdCard({
  advertiser, product, type, daysRunning, variations,
  cta, body, thumbnail, insight, tags, snapshotUrl, className,
}: IMVAdCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border border-[#DDD5C8] bg-white overflow-hidden",
        "shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[4/3] bg-[#EDE6DC] flex-shrink-0">
        <Image
          src={thumbnail}
          alt={`Criativo — ${advertiser}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <span className="absolute top-2 left-2 bg-[#1C1C1A] text-white text-[8px] font-bold tracking-[0.08em] uppercase px-2 py-1 rounded">
          {TYPE_LABEL[type]}
        </span>
        <span className="absolute top-2 right-2 bg-[#B5894A]/90 text-white text-[8px] font-bold px-2 py-1 rounded">
          {daysRunning}d ativo
        </span>
      </div>

      {/* Corpo */}
      <div className="flex flex-col gap-2.5 p-4 flex-1">
        <div>
          <p className="text-[11px] font-bold text-[#1C1C1A]">{advertiser}</p>
          <p className="text-[10px] text-[#7A706A] mt-0.5">{product}</p>
        </div>

        {/* Texto do ad com fade */}
        <p
          className="text-[11px] leading-[1.6] text-[#2E2B28] whitespace-pre-line overflow-hidden"
          style={{
            maxHeight: 140,
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        >
          {body}
        </p>

        {/* Insight */}
        <div className="border-l-2 border-[#B5894A] pl-3 py-2 bg-[#F8F4EE] rounded-r text-[10.5px] italic text-[#2E2B28] leading-[1.6]">
          {insight}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => <IMVTag key={t}>{t}</IMVTag>)}
        </div>

        {/* CTA row */}
        <div className="flex items-center justify-between mt-auto pt-2.5 border-t border-[#DDD5C8]">
          <span className="bg-[#1C1C1A] text-white text-[9px] font-bold px-2.5 py-1 rounded tracking-[0.03em]">
            {cta}
          </span>
          <a
            href={snapshotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] font-semibold text-[#B5894A] hover:underline cursor-pointer"
          >
            Ver na biblioteca →
          </a>
        </div>
      </div>
    </div>
  );
}
