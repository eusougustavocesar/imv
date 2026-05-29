export function IMVFooter() {
  return (
    <footer className="bg-[#F8F4EE] border-t border-[#DDD5C8]">
      <div className="imv-wrap py-8 flex items-center justify-between gap-6 text-[11px] text-[#7A706A]">
        <div>
          IMV Academy · Inteligência Competitiva de Mercado · 28 de maio de 2026<br />
          Gustavo Cesar Fortkamp · Head de Marketing
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/LOGO - ASSINATURA - PRINCIPAL@4x.png"
          alt="IMV"
          className="h-8 opacity-40"
        />
      </div>
    </footer>
  );
}
