import Link from "next/link"
import type { Material } from "@/lib/supabase/types"
import { TYPE_LABELS, STATUS_LABELS, STATUS_STYLE } from "@/lib/supabase/types"

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
            <span className="text-label font-bold uppercase tracking-[0.15em] text-imv-copper bg-imv-copper/10 border border-imv-copper/20 px-2 py-0.5 rounded">
              {TYPE_LABELS[material.type] ?? material.type}
            </span>
            <span className={[
              "text-label font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded border",
              STATUS_STYLE[material.status] ?? STATUS_STYLE.rascunho,
            ].join(" ")}>
              {STATUS_LABELS[material.status] ?? material.status}
            </span>
            {material.featured && (
              <span className="text-imv-copper text-caption" title="Em destaque">★</span>
            )}
          </div>
          <span className="text-meta text-imv-subtle shrink-0 mt-0.5">
            {formatDate(material.updated_at)}
          </span>
        </div>

        <h3 className={[
          "font-serif text-imv-dark leading-[1.3] mb-1.5",
          featured ? "text-subhead" : "text-card",
        ].join(" ")}>
          {material.title}
        </h3>

        <p className="text-body-sm text-imv-muted leading-[1.55]">
          {material.description}
        </p>

        {material.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {material.tags.map(tag => (
              <span key={tag} className="text-label bg-imv-cream text-imv-muted px-2 py-0.5 rounded border border-imv-beige">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-imv-line">
          <span className="text-meta text-imv-subtle">Por {material.author}</span>
          <span className="text-caption font-semibold text-imv-copper group-hover:translate-x-0.5 transition-transform">
            Abrir →
          </span>
        </div>
      </div>
    </Link>
  )
}
