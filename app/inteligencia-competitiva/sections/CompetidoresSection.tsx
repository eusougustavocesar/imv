import { IMVSection, IMVTable, IMVSubheading, IMVBlockquote } from "@/components/imv";
import { CONCORRENTES_DIRETOS, CONCORRENTES_INDIRETOS, DIFERENCIAIS, POSICIONAMENTO_SANTACASA } from "../data";

export function CompetidoresSection() {
  return (
    <IMVSection eyebrow="Competidores" title="Mapeamento Competitivo" id="competidores">

      <IMVSubheading first>Concorrentes Diretos: Pós-graduações Médicas</IMVSubheading>
      <IMVTable
        headers={["Instituição", "Programa", "Ticket", "Formato", "Ameaça"]}
        rows={CONCORRENTES_DIRETOS}
      />
      <IMVBlockquote>
        <strong>Nenhum concorrente direto está rodando anúncios no Meta.</strong> O campo
        de paid media está completamente aberto para pós-graduações médicas em metabologia.
      </IMVBlockquote>

      <IMVSubheading>Concorrentes Indiretos: Cursos e Mentorias</IMVSubheading>
      <IMVTable
        headers={["Nome", "Tipo", "Ticket", "Observação"]}
        rows={CONCORRENTES_INDIRETOS}
      />

      <IMVSubheading>Análise comparativa: IMV Academy vs. Santa Casa SP</IMVSubheading>
      <p>
        A Santa Casa tem o maior ticket do mercado (R$ 49.000) e é a referência
        mais próxima em termos de presencialidade. A comparação revela onde o IMV Academy
        supera o concorrente mais premium.
      </p>
      <IMVTable
        headers={["Dimensão", "Santa Casa SP", "IMV Academy"]}
        rows={POSICIONAMENTO_SANTACASA}
      />

      <IMVSubheading>O que o IMV Academy tem que os concorrentes não têm</IMVSubheading>
      <IMVTable
        headers={["Diferencial IMV Academy", "Status nos concorrentes"]}
        rows={DIFERENCIAIS}
      />
    </IMVSection>
  );
}
