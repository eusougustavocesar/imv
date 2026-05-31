import { createClient } from "@supabase/supabase-js"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

const TYPE_LABELS: Record<string, string> = {
  pesquisa: "Pesquisa",
  pauta: "Pauta",
  estrategia: "Estratégia",
  campanha: "Campanha",
  outro: "Outro",
}

export default async function SharePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { data: material } = await supabase
    .from("materials")
    .select("title, description, type, status, author, tags, created_at, share_expires_at")
    .eq("share_token", token)
    .gt("share_expires_at", new Date().toISOString())
    .single()

  if (!material) notFound()

  const expiresAt = new Date(material.share_expires_at)
  const createdAt = new Date(material.created_at)

  return (
    <div className="min-h-screen bg-[#1C1C1A] flex flex-col">

      {/* Top bar */}
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <Image
          src="/logos/LOGO - ASSINATURA - BRANCO@4x.png"
          alt="IMV"
          width={100}
          height={30}
          className="object-contain"
        />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
          Documento Compartilhado
        </span>
      </header>

      {/* Card */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-lg">

          <div className="bg-[#252522] border border-[#353530] rounded-2xl overflow-hidden">

            {/* Card header */}
            <div className="px-8 pt-8 pb-6 border-b border-[#353530]">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#B5894A] bg-[#B5894A]/15 border border-[#B5894A]/30 px-2.5 py-1 rounded">
                  {TYPE_LABELS[material.type] ?? material.type}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded">
                  {material.status}
                </span>
              </div>

              <h1 className="font-serif text-[22px] text-white leading-[1.3] mb-3">
                {material.title}
              </h1>

              <p className="text-[13px] text-white/60 leading-[1.6]">
                {material.description}
              </p>
            </div>

            {/* Meta */}
            <div className="px-8 py-5 space-y-3">
              {material.tags?.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {material.tags.map((tag: string) => (
                    <span key={tag} className="text-[9px] bg-white/5 text-white/40 border border-white/10 px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.1em] mb-0.5">Elaborado por</p>
                  <p className="text-[12px] font-semibold text-white/70">{material.author}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.1em] mb-0.5">Produzido em</p>
                  <p className="text-[12px] text-white/50">
                    {createdAt.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="px-8 py-6 bg-[#1C1C1A] border-t border-[#353530]">
              <p className="text-[11px] text-white/40 text-center mb-4">
                Para acesso ao documento completo, entre em contato com a equipe de marketing IMV Academy.
              </p>
              <Link
                href="https://hub.imvacademy.com"
                className="block text-center text-[12px] font-bold text-[#B5894A] hover:text-[#C4956A] transition-colors"
              >
                hub.imvacademy.com →
              </Link>
            </div>

          </div>

          {/* Expiry note */}
          <p className="text-center text-[10px] text-white/20 mt-5">
            Link válido até {expiresAt.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
          </p>
        </div>
      </main>

    </div>
  )
}
