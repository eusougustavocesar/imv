import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { HomeContent } from "@/components/hub/HomeContent"
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

  return (
    <div className="min-h-screen bg-[#FEFCF9]">

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
              <Link href="/admin" className="text-[11px] font-semibold text-[#B5894A] hover:text-[#C4956A] transition-colors">
                Painel Admin
              </Link>
            )}
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="max-w-[940px] mx-auto px-8 py-10">
        <HomeContent materials={materials} isAdmin={isAdmin} />
      </main>

    </div>
  )
}
