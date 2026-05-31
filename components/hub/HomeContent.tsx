"use client"

import { useState } from "react"
import type { Material, MaterialType, MaterialStatus } from "@/lib/supabase/types"
import { FilterBar } from "./FilterBar"
import { MaterialCard } from "./MaterialCard"
import { ActivityFeed } from "./ActivityFeed"
import Link from "next/link"

type Props = {
  materials: Material[]
  isAdmin: boolean
}

export function HomeContent({ materials, isAdmin }: Props) {
  const [typeFilter, setTypeFilter] = useState<MaterialType | "todos">("todos")
  const [statusFilter, setStatusFilter] = useState<MaterialStatus | "todos">("todos")

  const filtered = materials.filter(m => {
    const matchType = typeFilter === "todos" || m.type === typeFilter
    const matchStatus = statusFilter === "todos" || m.status === statusFilter
    return matchType && matchStatus
  })

  const isFiltering = typeFilter !== "todos" || statusFilter !== "todos"

  const featured = filtered.filter(m => m.featured && m.status === "ativo")
  const regular = filtered.filter(m => !m.featured && m.status !== "arquivado")
  const archived = filtered.filter(m => m.status === "arquivado")

  const recent = [...materials]
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .slice(0, 6)

  return (
    <>
      {materials.length > 0 && (
        <FilterBar
          type={typeFilter}
          status={statusFilter}
          onType={setTypeFilter}
          onStatus={setStatusFilter}
          total={filtered.length}
        />
      )}

      {/* Em Destaque — só quando não está filtrando por tipo */}
      {!isFiltering && featured.length > 0 && (
        <section className="mb-10">
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#B5894A] mb-4">
            Em Destaque
          </p>
          <div className="grid gap-4">
            {featured.map(m => <MaterialCard key={m.id} material={m} featured />)}
          </div>
        </section>
      )}

      {/* Materiais */}
      {(isFiltering ? filtered : regular).length > 0 && (
        <section className="mb-10">
          {!isFiltering && (
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#7A706A] mb-4">
              Materiais · {regular.length + featured.length}
            </p>
          )}
          <div className="grid gap-3">
            {(isFiltering ? filtered.filter(m => m.status !== "arquivado") : regular).map(m => (
              <MaterialCard key={m.id} material={m} />
            ))}
          </div>
        </section>
      )}

      {/* Arquivados — só quando não há filtro ativo */}
      {!isFiltering && archived.length > 0 && (
        <section className="mb-10">
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#B5B0AA] mb-4">
            Arquivados · {archived.length}
          </p>
          <div className="grid gap-3 opacity-60">
            {archived.map(m => <MaterialCard key={m.id} material={m} />)}
          </div>
        </section>
      )}

      {/* Sem resultados */}
      {filtered.length === 0 && materials.length > 0 && (
        <div className="text-center py-16 text-[#B5B0AA]">
          <p className="text-[13px]">Nenhum material com esse filtro.</p>
        </div>
      )}

      {materials.length === 0 && (
        <div className="text-center py-20 text-[#B5B0AA]">
          <p className="text-[13px]">Nenhum material ainda.</p>
          {isAdmin && (
            <Link href="/admin" className="text-[12px] text-[#B5894A] mt-2 inline-block hover:underline">
              Adicionar material no painel admin →
            </Link>
          )}
        </div>
      )}

      {/* Activity Feed */}
      {recent.length > 0 && (
        <section className="mt-4 pt-8 border-t border-[#DDD5C8]">
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#B5B0AA] mb-4">
            Atividade Recente
          </p>
          <ActivityFeed items={recent} />
        </section>
      )}
    </>
  )
}
