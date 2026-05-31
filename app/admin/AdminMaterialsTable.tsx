"use client"

import { useState } from "react"
import type { Material, MaterialStatus } from "@/lib/supabase/types"
import { updateMaterialStatus, toggleFeatured, updateResultado, deleteMaterial } from "./actions"

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
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [resultadoSaved, setResultadoSaved] = useState(false)

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

  async function handleDelete() {
    if (!confirm(`Remover "${material.title}"?`)) return
    setDeleting(true)
    await deleteMaterial(material.id)
  }

  return (
    <div className={["rounded-xl border bg-white p-5 transition-opacity", deleting ? "opacity-40" : "border-[#DDD5C8]"].join(" ")}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-serif text-[15px] text-[#1C1C1A] truncate">{material.title}</h3>
            {saving && <span className="text-[9px] text-[#B5B0AA] shrink-0">Salvando...</span>}
          </div>
          <p className="text-[10px] text-[#B5B0AA] font-mono">{material.path}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
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
            onClick={handleDelete}
            disabled={deleting}
            className="text-[10px] text-[#B5B0AA] hover:text-red-400 transition-colors ml-1"
          >
            Remover
          </button>
        </div>
      </div>

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
        <div className="flex justify-end mt-1.5">
          {resultadoSaved && (
            <span className="text-[10px] text-emerald-600 mr-2">Salvo!</span>
          )}
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
