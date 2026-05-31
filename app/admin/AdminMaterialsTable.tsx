"use client"

import { useState } from "react"
import type { Material, MaterialStatus, MaterialType } from "@/lib/supabase/types"
import { updateMaterialStatus, toggleFeatured, updateResultado, updateMaterial, deleteMaterial } from "./actions"

const TYPE_OPTIONS = [
  { value: "pesquisa", label: "Pesquisa" },
  { value: "pauta", label: "Pauta" },
  { value: "estrategia", label: "Estratégia" },
  { value: "campanha", label: "Campanha" },
  { value: "outro", label: "Outro" },
]

const STATUS_OPTIONS = [
  { value: "rascunho", label: "Rascunho" },
  { value: "ativo", label: "Ativo" },
  { value: "arquivado", label: "Arquivado" },
]

const STATUS_STYLE: Record<string, string> = {
  ativo: "bg-emerald-50 text-emerald-700 border-emerald-200",
  rascunho: "bg-[#EDE6DC] text-[#7A706A] border-[#DDD5C8]",
  arquivado: "bg-gray-50 text-gray-400 border-gray-200",
}

const inputClass = "w-full bg-white border border-[#DDD5C8] rounded-lg px-3 py-2 text-[12px] text-[#2E2B28] focus:outline-none focus:border-[#B5894A] transition-colors placeholder-[#C5C0BB]"
const labelClass = "block text-[9px] font-bold uppercase tracking-[0.15em] text-[#7A706A] mb-1.5"

export function AdminMaterialsTable({ materials }: { materials: Material[] }) {
  if (materials.length === 0) {
    return (
      <p className="text-[12px] text-[#B5B0AA] text-center py-8">
        Nenhum material cadastrado.
      </p>
    )
  }

  return (
    <div className="space-y-3">
      {materials.map(m => <MaterialRow key={m.id} material={m} />)}
    </div>
  )
}

function MaterialRow({ material }: { material: Material }) {
  const [status, setStatus] = useState(material.status)
  const [featured, setFeatured] = useState(material.featured)
  const [resultado, setResultado] = useState(material.resultado ?? "")
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [resultadoSaved, setResultadoSaved] = useState(false)

  // edit form state
  const [editTitle, setEditTitle] = useState(material.title)
  const [editDesc, setEditDesc] = useState(material.description)
  const [editType, setEditType] = useState(material.type)
  const [editAuthor, setEditAuthor] = useState(material.author)
  const [editPath, setEditPath] = useState(material.path)
  const [editTags, setEditTags] = useState(material.tags.join(", "))
  const [editError, setEditError] = useState("")

  async function handleStatus(newStatus: string) {
    setSaving(true)
    setStatus(newStatus as MaterialStatus)
    await updateMaterialStatus(material.id, newStatus)
    setSaving(false)
  }

  async function handleFeatured() {
    setSaving(true)
    setFeatured(f => !f)
    await toggleFeatured(material.id, !featured)
    setSaving(false)
  }

  async function handleSaveResultado() {
    setSaving(true)
    await updateResultado(material.id, resultado)
    setSaving(false)
    setResultadoSaved(true)
    setTimeout(() => setResultadoSaved(false), 2000)
  }

  async function handleSaveEdit() {
    setSaving(true)
    setEditError("")
    try {
      await updateMaterial(material.id, {
        title: editTitle.trim(),
        description: editDesc.trim(),
        type: editType,
        author: editAuthor.trim(),
        path: editPath.trim(),
        tags: editTags.split(",").map(t => t.trim()).filter(Boolean),
      })
      setEditing(false)
    } catch (err) {
      setEditError(err instanceof Error ? err.message : "Erro ao salvar.")
    }
    setSaving(false)
  }

  async function handleDelete() {
    if (!confirm(`Remover "${material.title}"?`)) return
    setDeleting(true)
    await deleteMaterial(material.id)
  }

  return (
    <div className={["rounded-xl border bg-white p-5 transition-opacity", deleting ? "opacity-40 pointer-events-none" : "border-[#DDD5C8]"].join(" ")}>

      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="min-w-0">
          <h3 className="font-serif text-[15px] text-[#1C1C1A] truncate mb-0.5">{editTitle}</h3>
          <p className="text-[10px] text-[#B5B0AA] font-mono">{editPath}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {saving && <span className="text-[9px] text-[#B5B0AA]">Salvando...</span>}

          <button
            onClick={handleFeatured}
            title={featured ? "Remover destaque" : "Destacar"}
            className={["text-[16px] transition-colors", featured ? "text-[#B5894A]" : "text-[#DDD5C8] hover:text-[#B5894A]/50"].join(" ")}
          >
            ★
          </button>

          <select
            value={status}
            onChange={e => handleStatus(e.target.value)}
            className={[
              "text-[10px] font-bold uppercase tracking-[0.06em] border rounded px-2 py-1 focus:outline-none focus:border-[#B5894A] cursor-pointer",
              STATUS_STYLE[status],
            ].join(" ")}
          >
            {STATUS_OPTIONS.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>

          <button
            onClick={() => setEditing(e => !e)}
            className={["text-[10px] font-semibold transition-colors", editing ? "text-[#B5894A]" : "text-[#7A706A] hover:text-[#1C1C1A]"].join(" ")}
          >
            {editing ? "Cancelar" : "Editar"}
          </button>

          <button
            onClick={handleDelete}
            disabled={deleting}
            className="text-[10px] text-[#B5B0AA] hover:text-red-400 transition-colors"
          >
            Remover
          </button>
        </div>
      </div>

      {/* Edit form (expandable) */}
      {editing && (
        <div className="mb-5 p-4 bg-[#F8F4EE] rounded-lg border border-[#EDE6DC] space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className={labelClass}>Título</label>
              <input value={editTitle} onChange={e => setEditTitle(e.target.value)} className={inputClass} />
            </div>
            <div className="col-span-2">
              <label className={labelClass}>Descrição</label>
              <input value={editDesc} onChange={e => setEditDesc(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Tipo</label>
              <select value={editType} onChange={e => setEditType(e.target.value as MaterialType)} className={inputClass}>
                {TYPE_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>Autor</label>
              <input value={editAuthor} onChange={e => setEditAuthor(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Rota</label>
              <input value={editPath} onChange={e => setEditPath(e.target.value)} className={inputClass} placeholder="/nome-do-material" />
            </div>
            <div>
              <label className={labelClass}>Tags (vírgula)</label>
              <input value={editTags} onChange={e => setEditTags(e.target.value)} className={inputClass} placeholder="Tag 1, Tag 2" />
            </div>
          </div>

          {editError && <p className="text-[11px] text-red-500">{editError}</p>}

          <div className="flex justify-end pt-1">
            <button
              onClick={handleSaveEdit}
              disabled={saving}
              className="bg-[#1C1C1A] text-white text-[11px] font-bold px-5 py-2 rounded-lg hover:bg-[#2E2B28] transition-colors disabled:opacity-50"
            >
              {saving ? "Salvando..." : "Salvar alterações"}
            </button>
          </div>
        </div>
      )}

      {/* Resultado */}
      <div>
        <label className="block text-[9px] font-bold uppercase tracking-[0.15em] text-[#B5894A] mb-1.5">
          Resultado
        </label>
        <textarea
          value={resultado}
          onChange={e => setResultado(e.target.value)}
          rows={2}
          placeholder="Observações pós-uso: CTR, candidaturas, resultado da campanha..."
          className="w-full text-[12px] bg-[#F8F4EE] border border-[#DDD5C8] rounded-lg px-3 py-2 text-[#2E2B28] placeholder-[#C5C0BB] focus:outline-none focus:border-[#B5894A] resize-none transition-colors"
        />
        <div className="flex justify-end mt-1.5 items-center gap-3">
          {resultadoSaved && <span className="text-[10px] text-emerald-600">Salvo!</span>}
          <button
            onClick={handleSaveResultado}
            disabled={saving}
            className="text-[11px] font-semibold text-[#B5894A] hover:text-[#C4956A] transition-colors disabled:opacity-50"
          >
            Salvar resultado
          </button>
        </div>
      </div>

    </div>
  )
}
