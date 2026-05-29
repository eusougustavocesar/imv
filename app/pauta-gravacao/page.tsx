import { IMVHero, IMVFooter, IMVSubheading, IMVPautaCard } from "@/components/imv";
import {
  CONTEXTO_BULLETS, COMO_USAR, NOTAS_GRAVACAO, PRIORIDADE,
  POSTS_ACADEMY, POSTS_IMV,
} from "./data";

export const metadata = {
  title: "Pauta de Gravação · 29 de Maio de 2026 | IMV",
};

function SectionHeader({
  parte, posts, titulo, subtitulo,
}: {
  parte: string;
  posts: string;
  titulo: string;
  subtitulo: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#B5894A] mb-1">
        {parte} · {posts}
      </p>
      <h2 className="font-serif text-[26px] font-bold text-[#1C1C1A] leading-[1.2] mb-1.5">
        {titulo}
      </h2>
      <p className="text-[12px] italic text-[#7A706A]">{subtitulo}</p>
    </div>
  );
}

export default function PautaGravacaoPage() {
  return (
    <div className="min-h-screen bg-[#FEFCF9]">

      <IMVHero
        eyebrow="Pauta de Gravação · 29 de Maio de 2026"
        institution="Dr. Diogo Antonielo · IMV"
        title={<>10 Posts<br /><em className="text-[#C4956A] not-italic">Sessão de Gravação</em></>}
        subtitle="5 posts IMV Academy · 5 posts IMV — conteúdo orgânico e criativos de ad para Junho."
        badges={["5 Reels IMV Academy", "5 Reels IMV", "Vertical 9:16", "Turma Set/2026"]}
      />

      <main>
        <div className="imv-wrap">

          {/* Contexto */}
          <section className="py-10 border-b border-[#DDD5C8]">
            <IMVSubheading first>Por Que Gravar Isso Hoje</IMVSubheading>
            <p className="text-[12px] italic text-[#7A706A] mb-5">
              Dados que justificam a urgência do conteúdo desta sessão
            </p>
            <div className="bg-[#1C1C1A] rounded-xl px-6 py-5">
              <p className="text-[8.5px] font-bold uppercase tracking-[0.22em] text-[#B5894A] mb-4">
                Inteligência de Mercado · Maio 2026
              </p>
              <ul className="space-y-3.5">
                {CONTEXTO_BULLETS.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[12px] text-white/80 leading-[1.65]">
                    <span className="text-[#B5894A] shrink-0 mt-0.5 font-bold">·</span>
                    <span>
                      <strong className="text-white font-semibold">{b.bold}</strong>
                      {b.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Como usar */}
          <section className="py-8 border-b border-[#DDD5C8]">
            <IMVSubheading first>Como Usar Esta Pauta</IMVSubheading>
            <div className="grid grid-cols-2 gap-3">
              {COMO_USAR.map((item) => (
                <div key={item.label} className="bg-[#F8F4EE] rounded-lg px-4 py-3 flex gap-3">
                  <span className="text-[#B5894A] font-bold text-[12px] shrink-0 mt-0.5">→</span>
                  <p className="text-[12px] text-[#2E2B28] leading-[1.55]">
                    <strong>{item.label}</strong> = {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Parte 1: IMV Academy */}
          <section className="py-10 border-b border-[#DDD5C8]">
            <SectionHeader
              parte="Parte 1"
              posts="5 Posts · IMV Academy"
              titulo="Reels IMV Academy"
              subtitulo="Conteúdo orgânico com potencial de ad criativo em junho. CTA sempre suave: conhecer a formação, link na bio. Nunca mencionar preço."
            />
            <div className="flex flex-col gap-5">
              {POSTS_ACADEMY.map((p) => (
                <IMVPautaCard key={p.code} post={p} />
              ))}
            </div>
          </section>

          {/* Parte 2: IMV */}
          <section className="py-10 border-b border-[#DDD5C8]">
            <SectionHeader
              parte="Parte 2"
              posts="5 Posts · IMV"
              titulo="Reels IMV · Instituto Medicina de Vanguarda"
              subtitulo="Conteúdo orgânico institucional. Construção de autoridade clínica e brand awareness do IMV."
            />
            <div className="flex flex-col gap-5">
              {POSTS_IMV.map((p) => (
                <IMVPautaCard key={p.code} post={p} />
              ))}
            </div>
          </section>

          {/* Notas de Gravação */}
          <section className="py-10">
            <IMVSubheading first>Notas de Gravação</IMVSubheading>

            {/* 2×2 grid de referência */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { label: "Cenário",      text: NOTAS_GRAVACAO.cenario },
                { label: "Formato",      text: NOTAS_GRAVACAO.formato },
                { label: "Tom",          text: NOTAS_GRAVACAO.tom },
                { label: "Ad Creatives", text: NOTAS_GRAVACAO.adCreatives },
              ].map((n) => (
                <div key={n.label} className="border border-[#DDD5C8] rounded-lg p-4 bg-white">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#B5894A] mb-1.5">
                    {n.label}
                  </p>
                  <p className="text-[12px] text-[#2E2B28] leading-[1.6]">{n.text}</p>
                </div>
              ))}
            </div>

            {/* Prioridade de gravação */}
            <IMVSubheading>Prioridade de Gravação</IMVSubheading>
            <div className="overflow-x-auto rounded-lg border border-[#DDD5C8] shadow-sm">
              <table className="w-full border-collapse text-[12px]">
                <thead>
                  <tr>
                    {["#", "Tipo", "Post", "Razão"].map((h) => (
                      <th key={h} className="bg-[#1C1C1A] text-white text-left px-3.5 py-2.5 text-[10px] font-semibold tracking-[0.04em] uppercase first:rounded-tl-lg last:rounded-tr-lg">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PRIORIDADE.map((p, i) => (
                    <tr
                      key={p.pos}
                      className={[
                        "transition-colors hover:bg-[#EDE6DC]",
                        i % 2 === 1 ? "bg-[#F8F4EE]" : "bg-white",
                        i === PRIORIDADE.length - 1 ? "[&_td]:border-b-0" : "",
                      ].join(" ")}
                    >
                      <td className="px-3.5 py-2.5 border-b border-[#DDD5C8] font-bold text-[#7A706A] w-8">
                        {p.pos}
                      </td>
                      <td className="px-3.5 py-2.5 border-b border-[#DDD5C8]">
                        <span className={[
                          "text-[9px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded",
                          p.tipo === "AD"
                            ? "bg-[#B5894A]/15 text-[#7A5C2A] border border-[#B5894A]/30"
                            : "bg-[#EDE6DC] text-[#7A706A] border border-[#DDD5C8]",
                        ].join(" ")}>
                          {p.tipo}
                        </span>
                      </td>
                      <td className="px-3.5 py-2.5 border-b border-[#DDD5C8] text-[#2E2B28] leading-[1.5]">
                        {p.post}
                      </td>
                      <td className="px-3.5 py-2.5 border-b border-[#DDD5C8] text-[#7A706A] leading-[1.5]">
                        {p.razao}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </main>

      <IMVFooter />
    </div>
  );
}
