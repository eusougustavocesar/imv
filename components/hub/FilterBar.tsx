"use client"

import type { MaterialType, MaterialStatus } from "@/lib/supabase/types"

const TYPES: { value: MaterialType | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "pesquisa", label: "Pesquisa" },
  { value: "pauta", label: "Pauta" },
  { value: "estrategia", label: "Estratégia" },
  { value: "campanha", label: "Campanha" },
  { value: "outro", label: "Outro" },
]

const STATUSES: { value: MaterialStatus | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "ativo", label: "Ativo" },
  { value: "rascunho", label: "Rascunho" },
  { value: "arquivado", label: "Arquivado" },
]

type Props = {
  type: MaterialType | "todos"
  status: MaterialStatus | "todos"
  onType: (v: MaterialType | "todos") => void
  onStatus: (v: MaterialStatus | "todos") => void
  total: number
}

export function FilterBar({ type, status, onType, onStatus, total }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-imv-beige">
      <div className="flex items-center gap-1.5 flex-wrap">
        {TYPES.map(t => (
          <button
            key={t.value}
            onClick={() => onType(t.value as MaterialType | "todos")}
            className={[
              "text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-lg border transition-all",
              type === t.value
                ? "bg-imv-dark text-white border-imv-dark"
                : "bg-white text-imv-muted border-imv-border hover:border-imv-copper/40 hover:text-imv-text",
            ].join(" ")}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="h-4 w-px bg-imv-border hidden sm:block" />

      <div className="flex items-center gap-1.5 flex-wrap">
        {STATUSES.map(s => (
          <button
            key={s.value}
            onClick={() => onStatus(s.value as MaterialStatus | "todos")}
            className={[
              "text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-lg border transition-all",
              status === s.value
                ? "bg-imv-copper text-white border-imv-copper"
                : "bg-white text-imv-muted border-imv-border hover:border-imv-copper/40 hover:text-imv-text",
            ].join(" ")}
          >
            {s.label}
          </button>
        ))}
      </div>

      <span className="text-[10px] text-imv-subtle ml-auto">
        {total} {total === 1 ? "material" : "materiais"}
      </span>
    </div>
  )
}
