import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import Image from "next/image"
import { LogoutButton } from "./LogoutButton"

type Props = {
  variant?: "hub" | "admin"
  isAdmin?: boolean
}

export async function HubNavBar({ variant = "hub", isAdmin: isAdminProp }: Props) {
  let isAdmin = isAdminProp ?? false

  // Fetch role only when variant=hub and caller didn't provide isAdmin
  if (variant === "hub" && isAdminProp === undefined) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single()
      isAdmin = profile?.role === "admin"
    }
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
          <span className={[
            "text-[10px] font-bold uppercase tracking-[0.2em] border-l border-white/10 pl-3 transition-colors",
            variant === "admin"
              ? "text-imv-copper"
              : "text-white/30 group-hover:text-white/50",
          ].join(" ")}>
            {variant === "admin" ? "Admin" : "Hub"}
          </span>
        </Link>

        <div className="flex items-center gap-5">
          {variant === "hub" && isAdmin && (
            <Link
              href="/admin"
              className="text-[10px] font-semibold uppercase tracking-[0.12em] text-imv-copper hover:text-imv-copper-mid transition-colors"
            >
              Admin
            </Link>
          )}
          {variant === "admin" && (
            <Link
              href="/"
              className="text-[11px] text-white/40 hover:text-white/60 transition-colors"
            >
              ← Hub
            </Link>
          )}
          <LogoutButton />
        </div>

      </div>
    </nav>
  )
}
