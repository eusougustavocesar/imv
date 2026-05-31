import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import Image from "next/image"
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
    <nav className="bg-imv-dark border-b border-imv-dark-border sticky top-0 z-10 print:hidden">
      <div className="hub-wrap h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logos/LOGO - ASSINATURA - BRANCO@4x.png"
            alt="IMV"
            width={88}
            height={26}
            className="object-contain"
          />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 border-l border-white/10 pl-3 group-hover:text-white/50 transition-colors">
            Hub
          </span>
        </Link>
        <div className="flex items-center gap-5">
          {isAdmin && (
            <Link
              href="/admin"
              className="text-[10px] font-semibold uppercase tracking-[0.12em] text-imv-copper hover:text-imv-copper-mid transition-colors"
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
