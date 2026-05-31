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
    return <p className="text-[12px] text-[#B5B0AA] text-center py-6">Nenhum usuário.</p>
  }

  return (
    <div className="rounded-xl border border-[#DDD5C8] overflow-hidden">
      <table className="w-full text-[12px]">
        <thead>
          <tr className="bg-[#1C1C1A]">
            {["Usuário", "Role", "Desde"].map(h => (
              <th key={h} className="text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/60 first:rounded-tl-xl last:rounded-tr-xl">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#EDE6DC]">
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
    <tr className="bg-white hover:bg-[#F8F4EE] transition-colors">
      <td className="px-4 py-3">
        <p className="font-semibold text-[#1C1C1A]">{user.name || "—"}</p>
        <p className="text-[10px] text-[#B5B0AA]">{user.email}</p>
      </td>
      <td className="px-4 py-3">
        <button
          onClick={handleToggle}
          disabled={saving}
          className={[
            "text-[10px] font-bold uppercase tracking-[0.08em] px-3 py-1 rounded border transition-all disabled:opacity-50",
            role === "admin"
              ? "bg-[#B5894A]/15 text-[#7A5C2A] border-[#B5894A]/40 hover:bg-[#B5894A]/25"
              : "bg-[#EDE6DC] text-[#7A706A] border-[#DDD5C8] hover:border-[#B5894A]/30",
          ].join(" ")}
        >
          {saving ? "..." : role}
        </button>
      </td>
      <td className="px-4 py-3 text-[#B5B0AA]">
        {new Date(user.created_at).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
      </td>
    </tr>
  )
}
