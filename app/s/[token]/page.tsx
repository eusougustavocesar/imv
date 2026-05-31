import { createClient } from "@supabase/supabase-js"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { TYPE_LABELS, STATUS_LABELS } from "@/lib/supabase/types"

async function getMaterial(token: string) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const { data } = await supabase
    .from("materials")
    .select("title, description, type, status, author, tags, created_at, share_expires_at")
    .eq("share_token", token)
    .gt("share_expires_at", new Date().toISOString())
    .single()
  return data
}

export async function generateMetadata({ params }: { params: Promise<{ token: string }> }): Promise<Metadata> {
  const { token } = await params
  const material = await getMaterial(token)
  if (!material) return { title: "IMV Hub" }
  return {
    title: `${material.title} — IMV Hub`,
    description: material.description,
    openGraph: {
      title: material.title,
      description: material.description,
    },
  }
}

export default async function SharePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params
  const material = await getMaterial(token)
  if (!material) notFound()

  const expiresAt = new Date(material.share_expires_at)
  const createdAt = new Date(material.created_at)

  return (
    <div className="min-h-screen bg-imv-dark flex flex-col">

      <header className="border-b border-imv-dark-border px-6 py-4 flex items-center justify-between">
        <Image
          src="/logos/LOGO - ASSINATURA - BRANCO@4x.png"
          alt="IMV"
          width={100}
          height={30}
          className="object-contain"
        />
        <span className="text-meta font-bold uppercase tracking-[0.2em] text-white/30">
          Documento Compartilhado
        </span>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-lg">

          <div className="bg-imv-surface border border-imv-dark-border rounded-2xl overflow-hidden">

            <div className="px-8 pt-8 pb-6 border-b border-imv-dark-border">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-label font-bold uppercase tracking-[0.18em] text-imv-copper bg-imv-copper/15 border border-imv-copper/30 px-2.5 py-1 rounded">
                  {TYPE_LABELS[material.type] ?? material.type}
                </span>
                <span className="text-label font-bold uppercase tracking-[0.1em] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded">
                  {STATUS_LABELS[material.status] ?? material.status}
                </span>
              </div>

              <h1 className="font-serif text-display text-white leading-[1.3] mb-3">
                {material.title}
              </h1>

              <p className="text-body text-white/60 leading-[1.6]">
                {material.description}
              </p>
            </div>

            <div className="px-8 py-5 space-y-3">
              {material.tags?.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {material.tags.map((tag: string) => (
                    <span key={tag} className="text-label bg-white/5 text-white/40 border border-white/10 px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="text-meta text-white/30 uppercase tracking-[0.1em] mb-0.5">Elaborado por</p>
                  <p className="text-body-sm font-semibold text-white/70">{material.author}</p>
                </div>
                <div className="text-right">
                  <p className="text-meta text-white/30 uppercase tracking-[0.1em] mb-0.5">Produzido em</p>
                  <p className="text-body-sm text-white/50">
                    {createdAt.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-8 py-6 bg-imv-dark border-t border-imv-dark-border">
              <p className="text-caption text-white/40 text-center mb-4">
                Para acesso ao documento completo, entre em contato com a equipe de marketing IMV Academy.
              </p>
              <Link
                href="/"
                className="block text-center text-body-sm font-bold text-imv-copper hover:text-imv-copper-mid transition-colors"
              >
                hub.imvacademy.com →
              </Link>
            </div>

          </div>

          <p className="text-center text-meta text-white/20 mt-5">
            Link válido até {expiresAt.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
          </p>
        </div>
      </main>

    </div>
  )
}
