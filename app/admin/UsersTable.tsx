"use client"

import { useState } from "react"
import { updateUserRole } from "./actions"

type UserRow = {
  id: string
  email: string
  name: string
  role: "viewer" | "admin"
  created_at: string
}

export function UsersTable({ users }: { users: UserRow[] }) {
  if (users.length === 0) {
    return <p className="text-[12px] text-imv-subtle text-center py-6">Nenhum usuário.</p>
  }

  return (
    <div className="rounded-xl border border-imv-border overflow-hidden">
      <table className="w-full text-[12px]">
        <thead>
          <tr className="bg-imv-dark">
            {["Usuário", "Role", "Desde"].map(h => (
              <th key={h} className="text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/60 first:rounded-tl-xl last:rounded-tr-xl">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-imv-beige">
          {users.map(u => <UserRow key={u.id} user={u} />)}
        </tbody>
      </table>
    </div>
  )
}

function UserRow({ user }: { user: UserRow }) {
  const [role, setRole] = useState(user.role)
  const [saving, setSaving] = useState(false)

  async function handleToggle() {
    const newRole = role === "admin" ? "viewer" : "admin"
    setSaving(true)
    setRole(newRole)
    await updateUserRole(user.id, newRole)
    setSaving(false)
  }

  return (
    <tr className="bg-white hover:bg-imv-cream transition-colors">
      <td className="px-4 py-3">
        <p className="font-semibold text-imv-dark">{user.name || "—"}</p>
        <p className="text-[10px] text-imv-subtle">{user.email}</p>
      </td>
      <td className="px-4 py-3">
        <button
          onClick={handleToggle}
          disabled={saving}
          className={[
            "text-[10px] font-bold uppercase tracking-[0.08em] px-3 py-1 rounded border transition-all disabled:opacity-50",
            role === "admin"
              ? "bg-imv-copper/15 text-imv-copper-dark border-imv-copper/40 hover:bg-imv-copper/25"
              : "bg-imv-beige text-imv-muted border-imv-border hover:border-imv-copper/30",
          ].join(" ")}
        >
          {saving ? "..." : role}
        </button>
      </td>
      <td className="px-4 py-3 text-imv-subtle">
        {new Date(user.created_at).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
      </td>
    </tr>
  )
}
