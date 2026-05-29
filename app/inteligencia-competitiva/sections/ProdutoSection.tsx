import { IMVSection, IMVTable, IMVSubheading, IMVBlockquote } from "@/components/imv";
import { CORPO_DOCENTE, MODULOS, DIFERENCIAIS_LP } from "../data";

export function ProdutoSection() {
  return (
    <IMVSection eyebrow="Produto" title="O Produto" id="produto">

      <IMVSubheading first>Corpo Docente — 9 especialistas</IMVSubheading>
      <IMVTable headers={["Professor", "Especialidade"]} rows={CORPO_DOCENTE} compact />

      <IMVSubheading>Grade Curricular: 12 Módulos</IMVSubheading>
      <IMVTable headers={["#", "Módulo"]} rows={MODULOS} compact />

      <IMVSubheading>Diferenciais comunicados na página de vendas</IMVSubheading>
      <ul className="grid grid-cols-2 gap-x-8 gap-y-2 mt-1">
        {DIFERENCIAIS_LP.map((d, i) => (
          <li key={i} className="flex gap-2 text-[12px] text-[#2E2B28] leading-[1.6]">
            <span className="text-[#B5894A] mt-0.5 shrink-0">→</span>
            {d}
          </li>
        ))}
      </ul>

      <IMVBlockquote>
        "O médico não compra uma vaga na IMV Academy. Ele é selecionado para fazer
        parte de uma formação que não está aberta para qualquer um. A candidatura
        é o primeiro ato de pertencimento."
      </IMVBlockquote>

    </IMVSection>
  );
}
