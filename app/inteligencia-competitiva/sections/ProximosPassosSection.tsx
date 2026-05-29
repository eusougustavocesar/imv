import { IMVSection } from "@/components/imv";
import { PROXIMOS_PASSOS } from "../data";

function StatusBadge({ entrega }: { entrega: string | null }) {
  if (entrega) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
        <span className="text-[13px]">✓</span>
        {entrega}
      </span>
    );
  }
  return (
    <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.08em] text-[#7A706A] bg-[#EDE6DC] px-2 py-0.5 rounded-full">
      Pendente
    </span>
  );
}

export function ProximosPassosSection() {
  const concluidos = PROXIMOS_PASSOS.filter((p) => p.entrega).length;
  const total = PROXIMOS_PASSOS.length;

  return (
    <IMVSection eyebrow="Execução" title="Próximos Passos" id="proximos-passos">

      {/* Progresso */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-1.5 bg-[#EDE6DC] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#B5894A] rounded-full transition-all"
            style={{ width: `${(concluidos / total) * 100}%` }}
          />
        </div>
        <span className="text-[11px] font-semibold text-[#7A706A] shrink-0">
          {concluidos} de {total} concluídos
        </span>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto rounded-lg border border-[#DDD5C8] shadow-sm">
        <table className="w-full border-collapse text-[12px]">
          <thead>
            <tr>
              {["#", "Ação", "Responsável", "Prazo previsto", "Entrega real"].map((h) => (
                <th
                  key={h}
                  className="bg-[#1C1C1A] text-white text-left px-3.5 py-2.5 text-[10px] font-semibold tracking-[0.04em] uppercase first:rounded-tl-lg last:rounded-tr-lg"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PROXIMOS_PASSOS.map((p, i) => (
              <tr
                key={i}
                className={[
                  "transition-colors duration-150 hover:bg-[#EDE6DC]",
                  p.entrega
                    ? "bg-emerald-50/60"
                    : i % 2 === 1
                    ? "bg-[#F8F4EE]"
                    : "bg-white",
                ].join(" ")}
              >
                <td className="px-3.5 py-2.5 border-b border-[#DDD5C8] text-[#7A706A] font-semibold w-8">
                  {i + 1}
                </td>
                <td className="px-3.5 py-2.5 border-b border-[#DDD5C8] text-[#2E2B28] leading-[1.55]">
                  {p.acao}
                </td>
                <td className="px-3.5 py-2.5 border-b border-[#DDD5C8] text-[#7A706A] whitespace-nowrap">
                  {p.responsavel}
                </td>
                <td className="px-3.5 py-2.5 border-b border-[#DDD5C8] text-[#7A706A] whitespace-nowrap">
                  {p.prazo}
                </td>
                <td className="px-3.5 py-2.5 border-b border-[#DDD5C8]">
                  <StatusBadge entrega={p.entrega} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </IMVSection>
  );
}
