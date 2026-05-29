import { IMVSection, IMVTable, IMVBlockquote, IMVSubheading } from "@/components/imv";
import { VANTAGENS, APRENDIZADOS, FASES_CAMPANHA, PUBLICO_GABRIEL, FRASES_CRIATIVOS } from "../data";

export function EstrategiaSection() {
  return (
    <IMVSection eyebrow="Síntese" title="Síntese e Recomendações" id="estrategia">

      <IMVSubheading first>3 vantagens estruturais confirmadas</IMVSubheading>
      <IMVTable headers={["Vantagem", "Detalhe"]} rows={VANTAGENS} />

      <IMVSubheading>O que os anúncios do mercado ensinam para a estratégia IMV</IMVSubheading>
      <IMVTable headers={["Aprendizado", "Aplicação na estratégia IMV"]} rows={APRENDIZADOS} />

      <IMVSubheading>Público do Dr. Gabriel = lead qualificado para o IMV</IMVSubheading>
      <IMVTable headers={["Dimensão", "Análise"]} rows={PUBLICO_GABRIEL} />
      <IMVBlockquote>
        <strong>O campo está aberto no Meta.</strong> Os concorrentes diretos (pós-graduações
        de R$ 18k a 49k) não estão rodando anúncios. O IMV Academy pode entrar na Fase 1
        (Junho) sem concorrência direta no feed, usando o público do Dr. Gabriel como
        audiência semente para escalar mais rápido.
      </IMVBlockquote>

      <IMVSubheading>Plano de campanha: Fases de Mídia Paga 2026</IMVSubheading>
      <IMVTable
        headers={["Mês", "Fase", "Objetivo e tática", "Formatos principais"]}
        rows={FASES_CAMPANHA}
      />

      <IMVSubheading>Insumos de mercado para criativos de topo de funil</IMVSubheading>
      <p className="text-[12px] text-[#7A706A] mb-3">
        Dados extraídos da análise de mercado, prontos para uso em copy de anúncios e conteúdo orgânico:
      </p>
      <ul className="flex flex-col gap-2">
        {FRASES_CRIATIVOS.map((f, i) => (
          <li key={i} className="flex gap-2 text-[12px] text-[#2E2B28] leading-[1.6]">
            <span className="text-[#B5894A] shrink-0 font-bold">"</span>
            <span><strong>{f}</strong>"</span>
          </li>
        ))}
      </ul>

    </IMVSection>
  );
}
