import type { Material } from "@/lib/supabase/types"

function timeAgo(iso: string): string {
  const now = new Date()
  const then = new Date(iso)
  const diff = Math.floor((now.getTime() - then.getTime()) / 1000)

  if (diff < 60) return "agora"
  if (diff < 3600) return `${Math.floor(diff / 60)}min atrás`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h atrás`
  if (diff < 2592000) return `${Math.floor(diff / 86400)}d atrás`
  return then.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })
}

export function ActivityFeed({ items }: { items: Material[] }) {
  return (
    <div className="space-y-2.5">
      {items.map(item => {
        const isNew = Math.abs(
          new Date(item.updated_at).getTime() - new Date(item.created_at).getTime()
        ) < 2000
        return (
          <div key={item.id} className="flex items-start gap-3 text-body-sm">
            <span className="text-imv-copper font-bold shrink-0 mt-0.5">·</span>
            <span className="text-imv-muted leading-[1.5]">
              <span className="font-semibold text-imv-text">{item.author}</span>
              {" "}{isNew ? "adicionou" : "atualizou"}{" "}
              <span className="text-imv-text">{item.title}</span>
            </span>
            <span className="text-imv-copper text-meta shrink-0 ml-auto mt-0.5">
              {timeAgo(item.updated_at)}
            </span>
          </div>
        )
      })}
    </div>
  )
}
