import { IMVHero, IMVFooter } from "@/components/imv";
import { ResumoSection }       from "./sections/ResumoSection";
import { MercadoSection }      from "./sections/MercadoSection";
import { ProdutoSection }      from "./sections/ProdutoSection";
import { CompetidoresSection } from "./sections/CompetidoresSection";
import { AnunciosSection }     from "./sections/AnunciosSection";
import { EstrategiaSection }   from "./sections/EstrategiaSection";

export const metadata = {
  title: "Inteligência Competitiva de Mercado | IMV Academy",
};

export default function InteligenciaCompetitivaPage() {
  return (
    <div className="min-h-screen bg-[#FEFCF9]">

      <IMVHero
        eyebrow="Inteligência Competitiva · Maio 2026"
        title={
          <>
            Inteligência<br />
            <em className="text-[#C4956A] not-italic">Competitiva</em><br />
            de Mercado
          </>
        }
        subtitle="Análise estratégica do mercado de pós-graduações médicas em medicina metabólica, mapeamento de concorrentes e análise de anúncios via Meta Ad Library."
        badges={["IMV Academy", "Turma 2026", "35 ads analisados", "10 concorrentes mapeados"]}
      />

      <main>
        <div className="imv-wrap">
          <ResumoSection />
          <MercadoSection />
          <ProdutoSection />
          <CompetidoresSection />
          <AnunciosSection />
          <EstrategiaSection />
        </div>
      </main>

      <IMVFooter />

    </div>
  );
}
