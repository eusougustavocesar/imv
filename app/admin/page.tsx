import { createClient } from "@/lib/supabase/server"
import { createAdminClient } from "@/lib/supabase/admin"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { LogoutButton } from "@/components/hub/LogoutButton"
import { AdminMaterialsTable } from "./AdminMaterialsTable"
import { NewMaterialForm } from "./NewMaterialForm"
import { UsersTable } from "./UsersTable"

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/login")

  const db = createAdminClient()

  const [
    { data: materials },
    { data: { users: authUsers } },
    { data: profiles },
  ] = await Promise.all([
    supabase.from("materials").select("*").order("created_at", { ascending: false }),
    db.auth.admin.listUsers(),
    db.from("profiles").select("id, name, role"),
  ])

  const users = (authUsers ?? []).map(u => ({
    id: u.id,
    email: u.email ?? "",
    name: profiles?.find(p => p.id === u.id)?.name ?? "",
    role: (profiles?.find(p => p.id === u.id)?.role ?? "viewer") as "viewer" | "admin",
    created_at: u.created_at,
  }))

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
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B5894A] border-l border-white/10 pl-3">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/" className="text-[11px] text-white/40 hover:text-white/60 transition-colors">
              ← Hub
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="max-w-[940px] mx-auto px-8 py-10">

        {/* Materiais */}
        <div className="flex items-baseline justify-between mb-6">
          <h1 className="font-serif text-[22px] text-[#1C1C1A]">Materiais</h1>
          <span className="text-[11px] text-[#B5B0AA]">{materials?.length ?? 0} cadastrados</span>
        </div>

        <AdminMaterialsTable materials={materials ?? []} />

        {/* Novo material */}
        <div className="mt-12 pt-8 border-t border-[#DDD5C8]">
          <h2 className="font-serif text-[18px] text-[#1C1C1A] mb-6">Novo Material</h2>
          <NewMaterialForm />
        </div>

        {/* Usuários */}
        <div className="mt-12 pt-8 border-t border-[#DDD5C8]">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-serif text-[18px] text-[#1C1C1A]">Usuários</h2>
            <span className="text-[11px] text-[#B5B0AA]">{users.length} membros</span>
          </div>
          <UsersTable users={users} />
          <p className="text-[10px] text-[#B5B0AA] mt-3">
            Clique no role para alternar entre viewer e admin. Novos usuários são criados no{" "}
            <a
              href="https://supabase.com/dashboard/project/mdwnsmelijqyzfewey/auth/users"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B5894A] hover:underline"
            >
              Supabase Dashboard
            </a>.
          </p>
        </div>

      </main>
    </div>
  )
}
