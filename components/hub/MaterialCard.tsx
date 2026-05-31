import Link from "next/link"
import type { Material } from "@/lib/supabase/types"

const TYPE_LABELS: Record<string, string> = {
  pesquisa: "Pesquisa",
  pauta: "Pauta",
  estrategia: "Estratégia",
  campanha: "Campanha",
  outro: "Outro",
}

const STATUS_STYLE: Record<string, string> = {
  ativo: "bg-emerald-50 text-emerald-700 border-emerald-200",
  rascunho: "bg-imv-beige text-imv-muted border-imv-border",
  arquivado: "bg-gray-50 text-gray-400 border-gray-200",
}

const STATUS_LABELS: Record<string, string> = {
  ativo: "Ativo",
  rascunho: "Rascunho",
  arquivado: "Arquivado",
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })
}

export function MaterialCard({ material, featured = false }: { material: Material; featured?: boolean }) {
  return (
    <Link
      href={material.path}
      className={[
        "block rounded-xl border bg-white transition-all hover:shadow-md group",
        featured
          ? "border-imv-copper/40 shadow-sm hover:border-imv-copper/60"
          : "border-imv-border hover:border-imv-copper/30",
      ].join(" ")}
    >
      <div className="px-6 py-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-imv-copper bg-imv-copper/10 border border-imv-copper/20 px-2 py-0.5 rounded">
              {TYPE_LABELS[material.type] ?? material.type}
            </span>
            <span className={[
              "text-[9px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded border",
              STATUS_STYLE[material.status] ?? STATUS_STYLE.rascunho,
            ].join(" ")}>
              {STATUS_LABELS[material.status] ?? material.status}
            </span>
            {material.featured && (
              <span className="text-imv-copper text-[11px]" title="Em destaque">★</span>
            )}
          </div>
          <span className="text-[10px] text-imv-subtle shrink-0 mt-0.5">
            {formatDate(material.updated_at)}
          </span>
        </div>

        <h3 className={[
          "font-serif text-imv-dark leading-[1.3] mb-1.5",
          featured ? "text-[18px]" : "text-[15px]",
        ].join(" ")}>
          {material.title}
        </h3>

        <p className="text-[12px] text-imv-muted leading-[1.55]">
          {material.description}
        </p>

        {material.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {material.tags.map(tag => (
              <span key={tag} className="text-[9px] bg-imv-cream text-imv-muted px-2 py-0.5 rounded border border-imv-beige">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-imv-line">
          <span className="text-[10px] text-imv-subtle">Por {material.author}</span>
          <span className="text-[11px] font-semibold text-imv-copper group-hover:translate-x-0.5 transition-transform">
            Abrir →
          </span>
        </div>
      </div>
    </Link>
  )
}
