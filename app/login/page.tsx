"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import Image from "next/image"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError("Email ou senha incorretos.")
      setLoading(false)
      return
    }

    router.push("/")
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-imv-dark flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        <div className="flex justify-center mb-10">
          <Image
            src="/logos/LOGO - ASSINATURA - BRANCO@4x.png"
            alt="IMV"
            width={160}
            height={48}
            className="object-contain"
          />
        </div>

        <div className="bg-imv-surface border border-imv-dark-border rounded-2xl px-8 py-8">
          <h1 className="font-serif text-[20px] text-white text-center mb-1">IMV Hub</h1>
          <p className="text-[10px] text-white/30 text-center mb-8 tracking-[0.15em] uppercase">
            Acesso Restrito
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full bg-imv-dark border border-imv-dark-input rounded-lg px-4 py-2.5 text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-imv-copper transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 mb-1.5">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full bg-imv-dark border border-imv-dark-input rounded-lg px-4 py-2.5 text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-imv-copper transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-[11px] text-red-400 text-center pt-1">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-imv-copper hover:bg-imv-copper-mid text-white font-bold text-[13px] py-2.5 rounded-lg transition-colors disabled:opacity-50 mt-2"
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>

        <p className="text-center text-[10px] text-white/20 mt-6 tracking-[0.05em]">
          Instituto Medicina de Vanguarda · Acesso por convite
        </p>
      </div>
    </div>
  )
}
