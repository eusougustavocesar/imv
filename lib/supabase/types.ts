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
