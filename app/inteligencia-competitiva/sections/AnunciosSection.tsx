"use client";

import { IMVSection, IMVTable, IMVBlockquote, IMVSubheading, IMVAdCard } from "@/components/imv";
import { CRIATIVOS, COBERTURA_ADS, ANATOMIA_CRIATIVO, FUNIL_GABRIEL, GABRIEL_VS_IMV } from "../data";

export function AnunciosSection() {
  return (
    <IMVSection eyebrow="Mídia" title="Inteligência de Anúncios: Meta Ad Library" id="anuncios">
      <p>
        Extração realizada em 28/05/2026 via <strong>Recon</strong> (ferramenta própria
        de inteligência de anúncios). Dos 10 concorrentes pesquisados, apenas o{" "}
        <strong>Dr. Gabriel Almeida</strong> foi encontrado com paid media ativo no Meta.
        Os concorrentes diretos (pós-graduações) não estão rodando anúncios.
      </p>

      <IMVTable headers={["Concorrente", "Ads ativos", "Resultado"]} rows={COBERTURA_ADS} />

      <IMVSubheading>Anatomia do criativo de melhor performance</IMVSubheading>
      <p>
        O Dr. Gabriel roda um único modelo de copy com variações visuais.
        A estrutura é consistente nos 30 ads ativos:
      </p>
      <IMVBlockquote>
        <strong>Estrutura:</strong> 🚨 Urgência → Qualificação do avatar → Checklist ✅ →
        Data hard deadline → Exclusividade → Escassez → Credencial CRM/RQE
      </IMVBlockquote>
      <IMVTable headers={["Elemento", "Função de persuasão"]} rows={ANATOMIA_CRIATIVO} />

      <IMVSubheading>Funil de conversão: Dr. Gabriel Almeida</IMVSubheading>
      <p>
        Dois funis paralelos rodando simultaneamente: produto de alto engajamento
        (mentoria 2 dias) e produto de LTV (GAFlix). A mentoria aquece o lead;
        o GAFlix o mantém na base.
      </p>
      <IMVTable headers={["CTA do anúncio", "Destino", "Ação esperada"]} rows={FUNIL_GABRIEL} />

      <IMVSubheading>O que Gabriel faz que o IMV Academy ainda não faz</IMVSubheading>
      <IMVTable
        headers={["Dimensão", "Dr. Gabriel Almeida", "IMV Academy"]}
        rows={GABRIEL_VS_IMV}
      />

      <IMVSubheading>Criativos Campeões: Biblioteca de Anúncios · Recon</IMVSubheading>
      <p className="text-[13px] text-[#7A706A] mb-6">
        Anúncios mais relevantes identificados via Meta Ad Library (extração 28/05/2026).
        Ordenados por dias ativos: mais tempo no ar = mais validado pelo algoritmo Meta.
      </p>
      <div className="imv-ad-grid grid grid-cols-3 print:grid-cols-2 gap-5">
        {CRIATIVOS.map((c) => (
          <IMVAdCard key={c.snapshotUrl} {...c} />
        ))}
      </div>
    </IMVSection>
  );
}
