import { IMVSection, IMVTable, IMVSubheading } from "@/components/imv";
import { TURMA_DADOS, KEY_FINDINGS } from "../data";

export function ResumoSection() {
  return (
    <IMVSection eyebrow="Resumo Executivo" title="Resumo Executivo" id="resumo" className="py-10">

      <p className="text-[13px] text-[#7A706A] leading-[1.85] mb-7">
        Inteligência competitiva desenvolvida em maio/2026 para orientar a estratégia de
        marketing e comunicação da Turma 2026 do IMV Academy. Cobre panorama de mercado,
        mapeamento de concorrentes diretos e indiretos, e análise de anúncios via Meta
        Ad Library extraída pelo Recon.
      </p>

      {/* Key findings — 2×2 */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {KEY_FINDINGS.map((f) => (
          <div
            key={f.label}
            className="rounded-lg border border-[#DDD5C8] bg-white p-4"
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#B5894A] mb-1.5">
              {f.label}
            </p>
            <p className="text-[14px] font-bold text-[#1C1C1A] leading-[1.25] mb-1.5">
              {f.value}
            </p>
            <p className="text-[11px] text-[#7A706A] leading-[1.55]">{f.detail}</p>
          </div>
        ))}
      </div>

      <IMVSubheading first>Dados da Turma 2026</IMVSubheading>
      <IMVTable headers={["Item", "Dado"]} rows={TURMA_DADOS} compact />

    </IMVSection>
  );
}
