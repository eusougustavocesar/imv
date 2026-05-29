import { IMVSection, IMVTable, IMVBlockquote, IMVSubheading } from "@/components/imv";
import { MERCADO_DADOS, EPIDEMIOLOGIA, MERCADO_FINANCEIRO } from "../data";

export function MercadoSection() {
  return (
    <IMVSection eyebrow="Mercado" title="Panorama de Mercado" id="mercado">

      <IMVSubheading first>Força de Trabalho Médica e Pós-Graduações</IMVSubheading>
      <p>
        O Brasil tem <strong>575.930 médicos ativos</strong> (CFM, 2024), dos quais
        244 mil ainda não têm título de especialista, o maior reservatório de público
        para pós-graduações médicas do país. A especialidade com maior número de cursos
        ativos é <strong>Endocrinologia e Metabologia, com 147 cursos</strong>, sinal
        direto de demanda crescente e validação de mercado.
      </p>
      <IMVTable headers={["Indicador", "Dado", "Fonte"]} rows={MERCADO_DADOS} />

      <IMVSubheading>Epidemiologia da Obesidade no Brasil</IMVSubheading>
      <p>
        A obesidade é a maior demanda latente para médicos formados em metabologia.
        O mercado de pacientes cresce mais rápido do que a formação de profissionais para atendê-los.
      </p>
      <IMVTable headers={["Indicador", "Dado", "Fonte"]} rows={EPIDEMIOLOGIA} />

      <IMVSubheading>Dados Financeiros do Segmento</IMVSubheading>
      <IMVTable headers={["Indicador", "Valor", "Fonte"]} rows={MERCADO_FINANCEIRO} />
      <IMVBlockquote>
        O IMV Academy, com ticket de R$ 41.000, está <strong>56% acima do topo do mercado
        presencial premium</strong> mapeado, sem concorrente equivalente no nicho de
        metabologia e emagrecimento.
      </IMVBlockquote>

      <IMVSubheading>A Janela de Oportunidade de 2026</IMVSubheading>
      <p>
        O vencimento da patente do Ozempic em <strong>março/2026</strong> e a entrada
        de biossimilares nacionais vai democratizar o acesso e escalar o volume de
        prescrições. Médicos de todas as especialidades passarão a receber demanda por
        tratamento de obesidade sem formação adequada.
      </p>
      <IMVBlockquote>
        A turma do IMV Academy que começa em setembro/2026 entra no mercado
        exatamente no pico dessa demanda.
      </IMVBlockquote>

    </IMVSection>
  );
}
