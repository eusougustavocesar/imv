import { createClient } from "@/lib/supabase/server"
import { createAdminClient } from "@/lib/supabase/admin"
import { redirect } from "next/navigation"
import { HubNavBar } from "@/components/hub/HubNavBar"
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
    <div className="min-h-screen bg-imv-white">
      <HubNavBar variant="admin" />

      <main className="hub-wrap py-10">

        <div className="flex items-baseline justify-between mb-6">
          <h1 className="font-serif text-display text-imv-dark">Materiais</h1>
          <span className="text-caption text-imv-subtle">{materials?.length ?? 0} cadastrados</span>
        </div>

        <AdminMaterialsTable materials={materials ?? []} />

        <div className="mt-12 pt-8 border-t border-imv-border">
          <h2 className="font-serif text-subhead text-imv-dark mb-6">Novo Material</h2>
          <NewMaterialForm />
        </div>

        <div className="mt-12 pt-8 border-t border-imv-border">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-serif text-subhead text-imv-dark">Usuários</h2>
            <span className="text-caption text-imv-subtle">{users.length} membros</span>
          </div>
          <UsersTable users={users} />
          <p className="text-meta text-imv-subtle mt-3">
            Clique no role para alternar entre viewer e admin. Novos usuários são criados no{" "}
            <a
              href="https://supabase.com/dashboard/project/mdwnsmelijqyzfewey/auth/users"
              target="_blank"
              rel="noopener noreferrer"
              className="text-imv-copper hover:underline"
            >
              Supabase Dashboard
            </a>.
          </p>
        </div>

      </main>
    </div>
  )
}
