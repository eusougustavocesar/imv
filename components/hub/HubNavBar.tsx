import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { LogoutButton } from "./LogoutButton"

export async function HubNavBar() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let isAdmin = false
  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single()
    isAdmin = profile?.role === "admin"
  }

  return (
    <nav className="bg-[#1C1C1A] border-b border-[#353530] sticky top-0 z-10 print:hidden">
      <div className="imv-wrap h-11 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors group"
        >
          <span className="text-[11px] group-hover:-translate-x-0.5 transition-transform">←</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em]">IMV Hub</span>
        </Link>
        <div className="flex items-center gap-5">
          {isAdmin && (
            <Link
              href="/admin"
              className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#B5894A] hover:text-[#C4956A] transition-colors"
            >
              Admin
            </Link>
          )}
          <LogoutButton />
        </div>
      </div>
    </nav>
  )
}
