"use client"

import { useState } from "react"
import { createMaterial } from "./actions"
import { Button } from "@/components/hub/Button"

const TYPE_OPTIONS = [
  { value: "pesquisa",   label: "Pesquisa" },
  { value: "pauta",      label: "Pauta" },
  { value: "estrategia", label: "Estratégia" },
  { value: "campanha",   label: "Campanha" },
  { value: "outro",      label: "Outro" },
]

const STATUS_OPTIONS = [
  { value: "rascunho",  label: "Rascunho" },
  { value: "ativo",     label: "Ativo" },
  { value: "arquivado", label: "Arquivado" },
]

export function NewMaterialForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await createMaterial({
        title:  data.get("title")  as string,
        description: data.get("description") as string,
        type:   data.get("type")   as string,
        status: data.get("status") as string,
        author: data.get("author") as string,
        path:   data.get("path")   as string,
        tags: (data.get("tags") as string)
          .split(",").map(t => t.trim()).filter(Boolean),
      })

      form.reset()
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao criar material.")
    }

    setLoading(false)
  }

  const inputClass = "w-full bg-white border border-imv-border rounded-lg px-3 py-2.5 text-body-sm text-imv-text focus:outline-none focus:border-imv-copper transition-colors placeholder-imv-subtle"
  const labelClass = "block text-label font-bold uppercase tracking-[0.15em] text-imv-muted mb-1.5"

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">

        <div className="col-span-2">
          <label className={labelClass}>Título</label>
          <input name="title" required className={inputClass} placeholder="Ex: Pauta de Gravação — Junho 2026" />
        </div>

        <div className="col-span-2">
          <label className={labelClass}>Descrição</label>
          <input name="description" required className={inputClass} placeholder="Descrição curta para o card da home" />
        </div>

        <div>
          <label className={labelClass}>Tipo</label>
          <select name="type" className={inputClass}>
            {TYPE_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        <div>
          <label className={labelClass}>Status</label>
          <select name="status" className={inputClass}>
            {STATUS_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        <div>
          <label className={labelClass}>Autor</label>
          <input name="author" required className={inputClass} placeholder="Gustavo Cesar" defaultValue="Gustavo Cesar" />
        </div>

        <div>
          <label className={labelClass}>Rota</label>
          <input name="path" required className={inputClass} placeholder="/nome-do-material" />
        </div>

        <div className="col-span-2">
          <label className={labelClass}>Tags (separadas por vírgula)</label>
          <input name="tags" className={inputClass} placeholder="Junho 2026, Dr. Diogo, Turma 2026" />
        </div>

      </div>

      {error && <p className="text-caption text-red-500">{error}</p>}

      <div className="flex items-center gap-3 pt-2">
        <Button type="submit" size="md" disabled={loading}>
          {loading ? "Criando..." : "Criar Material"}
        </Button>
        {success && (
          <span className="text-caption text-emerald-600 font-semibold">Material criado!</span>
        )}
      </div>
    </form>
  )
}
