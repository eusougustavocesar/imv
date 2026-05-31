export type Role = "viewer" | "admin"

export type Profile = {
  id: string
  name: string
  role: Role
}

export type MaterialType = "pesquisa" | "pauta" | "estrategia" | "campanha" | "outro"
export type MaterialStatus = "rascunho" | "ativo" | "arquivado"

export type Material = {
  id: string
  title: string
  description: string
  type: MaterialType
  status: MaterialStatus
  author: string
  path: string
  featured: boolean
  tags: string[]
  resultado: string | null
  share_token: string | null
  share_expires_at: string | null
  created_at: string
  updated_at: string
}

export const TYPE_LABELS: Record<string, string> = {
  pesquisa:   "Pesquisa",
  pauta:      "Pauta",
  estrategia: "Estratégia",
  campanha:   "Campanha",
  outro:      "Outro",
}

export const STATUS_LABELS: Record<string, string> = {
  ativo:     "Ativo",
  rascunho:  "Rascunho",
  arquivado: "Arquivado",
}

export const STATUS_STYLE: Record<string, string> = {
  ativo:     "bg-emerald-50 text-emerald-700 border-emerald-200",
  rascunho:  "bg-imv-beige text-imv-muted border-imv-border",
  arquivado: "bg-gray-50 text-gray-400 border-gray-200",
}
