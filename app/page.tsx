import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { HubNavBar } from "@/components/hub/HubNavBar"
import { HomeContent } from "@/components/hub/HomeContent"
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
    <div className="min-h-screen bg-imv-white">
      <HubNavBar isAdmin={isAdmin} />
      <main className="hub-wrap py-10">
        <HomeContent materials={materials} isAdmin={isAdmin} />
      </main>
    </div>
  )
}
