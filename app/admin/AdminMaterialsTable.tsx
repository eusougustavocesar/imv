"use client"

import { useState } from "react"
import type { Material, MaterialType } from "@/lib/supabase/types"
import { TYPE_LABELS, STATUS_LABELS, STATUS_STYLE } from "@/lib/supabase/types"
import { Button } from "@/components/hub/Button"
import {
  updateMaterialStatus, toggleFeatured, updateResultado,
  updateMaterial, deleteMaterial, generateShareLink, revokeShareLink,
} from "./actions"

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

const inputClass = "w-full bg-white border border-imv-border rounded-lg px-3 py-2 text-body-sm text-imv-text focus:outline-none focus:border-imv-copper transition-colors placeholder-imv-subtle"
const labelClass = "block text-label font-bold uppercase tracking-[0.15em] text-imv-muted mb-1.5"

export function AdminMaterialsTable({ materials }: { materials: Material[] }) {
  if (materials.length === 0) {
    return <p className="text-body-sm text-imv-subtle text-center py-8">Nenhum material cadastrado.</p>
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
  const [confirmDelete, setConfirmDelete] = useState(false)

  const [shareToken, setShareToken] = useState(material.share_token)
  const [shareExpiry, setShareExpiry] = useState(material.share_expires_at)
  const [shareUrl, setShareUrl] = useState("")
  const [copied, setCopied] = useState(false)
  const [sharingOpen, setSharingOpen] = useState(false)

  const [editTitle,  setEditTitle]  = useState(material.title)
  const [editDesc,   setEditDesc]   = useState(material.description)
  const [editType,   setEditType]   = useState(material.type)
  const [editAuthor, setEditAuthor] = useState(material.author)
  const [editPath,   setEditPath]   = useState(material.path)
  const [editTags,   setEditTags]   = useState(material.tags.join(", "))
  const [editError,  setEditError]  = useState("")

  const isShareActive = shareToken && shareExpiry && new Date(shareExpiry) > new Date()

  async function handleStatus(newStatus: string) {
    setSaving(true)
    setStatus(newStatus as typeof status)
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
        title:  editTitle.trim(),
        description: editDesc.trim(),
        type:   editType,
        author: editAuthor.trim(),
        path:   editPath.trim(),
        tags:   editTags.split(",").map(t => t.trim()).filter(Boolean),
      })
      setEditing(false)
    } catch (err) {
      setEditError(err instanceof Error ? err.message : "Erro ao salvar.")
    }
    setSaving(false)
  }

  async function handleGenerateShare() {
    setSaving(true)
    const token = await generateShareLink(material.id)
    const expiry = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    setShareToken(token)
    setShareExpiry(expiry)
    const url = `${window.location.origin}/s/${token}`
    setShareUrl(url)
    setSharingOpen(true)
    setSaving(false)
  }

  async function handleRevoke() {
    setSaving(true)
    await revokeShareLink(material.id)
    setShareToken(null)
    setShareExpiry(null)
    setShareUrl("")
    setSaving(false)
  }

  function handleCopy() {
    const url = shareUrl || `${window.location.origin}/s/${shareToken}`
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  async function handleDelete() {
    setDeleting(true)
    await deleteMaterial(material.id)
  }

  return (
    <div className={["rounded-xl border bg-white p-5 transition-opacity", deleting ? "opacity-40 pointer-events-none" : "border-imv-border"].join(" ")}>

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="min-w-0">
          <h3 className="font-serif text-card text-imv-dark truncate mb-0.5">{editTitle}</h3>
          <p className="text-meta text-imv-subtle font-mono">{editPath}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end">
          {saving && <span className="text-label text-imv-subtle">Salvando...</span>}

          <button
            onClick={handleFeatured}
            title={featured ? "Remover destaque" : "Destacar"}
            className={["text-[16px] transition-colors", featured ? "text-imv-copper" : "text-imv-border hover:text-imv-copper/50"].join(" ")}
          >★</button>

          <select
            value={status}
            onChange={e => handleStatus(e.target.value)}
            className={["text-meta font-bold uppercase tracking-[0.06em] border rounded px-2 py-1 focus:outline-none focus:border-imv-copper cursor-pointer", STATUS_STYLE[status]].join(" ")}
          >
            {STATUS_OPTIONS.map(o => <option key={o.value} value={o.value}>{STATUS_LABELS[o.value]}</option>)}
          </select>

          <button
            onClick={() => { setSharingOpen(o => !o); if (!sharingOpen && isShareActive) setShareUrl(`${window.location.origin}/s/${shareToken}`) }}
            className={["text-meta font-semibold transition-colors", (sharingOpen || isShareActive) ? "text-imv-copper" : "text-imv-muted hover:text-imv-dark"].join(" ")}
          >
            {isShareActive ? "🔗 Ativo" : "Compartilhar"}
          </button>

          <button
            onClick={() => setEditing(e => !e)}
            className={["text-meta font-semibold transition-colors", editing ? "text-imv-copper" : "text-imv-muted hover:text-imv-dark"].join(" ")}
          >
            {editing ? "Cancelar" : "Editar"}
          </button>

          {confirmDelete ? (
            <div className="flex items-center gap-1.5">
              <button onClick={handleDelete} disabled={deleting} className="text-meta font-bold text-red-500 hover:text-red-700 transition-colors">
                Confirmar
              </button>
              <button onClick={() => setConfirmDelete(false)} className="text-meta text-imv-subtle hover:text-imv-muted transition-colors">
                Cancelar
              </button>
            </div>
          ) : (
            <button onClick={() => setConfirmDelete(true)} className="text-meta text-imv-subtle hover:text-red-400 transition-colors">
              Remover
            </button>
          )}
        </div>
      </div>

      {/* Share panel */}
      {sharingOpen && (
        <div className="mb-4 p-4 bg-imv-cream rounded-lg border border-imv-beige">
          {isShareActive ? (
            <div className="space-y-2">
              <p className="text-label font-bold uppercase tracking-[0.15em] text-imv-copper mb-2">Link ativo</p>
              <div className="flex gap-2">
                <input
                  readOnly
                  value={shareUrl || `${window.location.origin}/s/${shareToken}`}
                  className="flex-1 text-caption bg-white border border-imv-border rounded-lg px-3 py-2 text-imv-text font-mono truncate"
                />
                <Button onClick={handleCopy} className="shrink-0 px-3">
                  {copied ? "Copiado!" : "Copiar"}
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-meta text-imv-subtle">
                  Expira em {new Date(shareExpiry!).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
                </p>
                <button onClick={handleRevoke} disabled={saving} className="text-meta text-red-400 hover:text-red-600 transition-colors disabled:opacity-50">
                  Revogar link
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <p className="text-body-sm text-imv-muted">Gera um link público com validade de 30 dias.</p>
              <Button onClick={handleGenerateShare} disabled={saving}>
                Gerar link
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Edit form */}
      {editing && (
        <div className="mb-5 p-4 bg-imv-cream rounded-lg border border-imv-beige space-y-3">
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
                {TYPE_OPTIONS.map(o => <option key={o.value} value={o.value}>{TYPE_LABELS[o.value]}</option>)}
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
          {editError && <p className="text-caption text-red-500">{editError}</p>}
          <div className="flex justify-end pt-1">
            <Button onClick={handleSaveEdit} disabled={saving}>
              {saving ? "Salvando..." : "Salvar alterações"}
            </Button>
          </div>
        </div>
      )}

      {/* Resultado */}
      <div>
        <label className="block text-label font-bold uppercase tracking-[0.15em] text-imv-copper mb-1.5">Resultado</label>
        <textarea
          value={resultado}
          onChange={e => setResultado(e.target.value)}
          rows={2}
          placeholder="Observações pós-uso: CTR, candidaturas, resultado da campanha..."
          className="w-full text-body-sm bg-imv-cream border border-imv-border rounded-lg px-3 py-2 text-imv-text placeholder-imv-subtle focus:outline-none focus:border-imv-copper resize-none transition-colors"
        />
        <div className="flex justify-end mt-1.5 items-center gap-3">
          {resultadoSaved && <span className="text-meta text-emerald-600">Salvo!</span>}
          <button onClick={handleSaveResultado} disabled={saving} className="text-caption font-semibold text-imv-copper hover:text-imv-copper-mid transition-colors disabled:opacity-50">
            Salvar resultado
          </button>
        </div>
      </div>

    </div>
  )
}
