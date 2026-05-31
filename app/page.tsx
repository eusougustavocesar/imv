import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { MaterialCard } from "@/components/hub/MaterialCard"
import { ActivityFeed } from "@/components/hub/ActivityFeed"
import { LogoutButton } from "@/components/hub/LogoutButton"
import type { Material } from "@/lib/supabase/types"

export default async function HomePage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/login")

  const [{ data: profileData }, { data: materialsData }] = await Promise.all([
    supabase.from("profiles").select("role, name").eq("id", user.id).single(),
    supabase.from("materials").select("*").order("featured", { ascending: false }).order("updated_at", { ascending: false }),
  ])

  const isAdmin = profileData?.role === "admin"
  const materials: Material[] = materialsData ?? []
  const featured = materials.filter(m => m.featured && m.status === "ativo")
  const regular = materials.filter(m => !m.featured && m.status !== "arquivado")
  const archived = materials.filter(m => m.status === "arquivado")
  const recent = [...materials].sort((a, b) =>
    new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  ).slice(0, 6)

  return (
    <div className="min-h-screen bg-[#FEFCF9]">

      {/* Header */}
      <header className="bg-[#1C1C1A] border-b border-[#353530] sticky top-0 z-10">
        <div className="max-w-[940px] mx-auto px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/LOGO - ASSINATURA - BRANCO@4x.png"
              alt="IMV"
              width={100}
              height={30}
              className="object-contain"
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 border-l border-white/10 pl-3">
              Hub
            </span>
          </div>
          <div className="flex items-center gap-5">
            {isAdmin && (
              <Link
                href="/admin"
                className="text-[11px] font-semibold text-[#B5894A] hover:text-[#C4956A] transition-colors"
              >
                Painel Admin
              </Link>
            )}
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="max-w-[940px] mx-auto px-8 py-10">

        {/* Em Destaque */}
        {featured.length > 0 && (
          <section className="mb-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#B5894A] mb-4">
              Em Destaque
            </p>
            <div className="grid gap-4">
              {featured.map(m => <MaterialCard key={m.id} material={m} featured />)}
            </div>
          </section>
        )}

        {/* Todos os materiais */}
        {regular.length > 0 && (
          <section className="mb-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#7A706A] mb-4">
              Materiais · {regular.length + featured.length}
            </p>
            <div className="grid gap-3">
              {regular.map(m => <MaterialCard key={m.id} material={m} />)}
            </div>
          </section>
        )}

        {/* Arquivados */}
        {archived.length > 0 && (
          <section className="mb-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#B5B0AA] mb-4">
              Arquivados · {archived.length}
            </p>
            <div className="grid gap-3 opacity-60">
              {archived.map(m => <MaterialCard key={m.id} material={m} />)}
            </div>
          </section>
        )}

        {/* Sem materiais */}
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

      </main>
    </div>
  )
}
