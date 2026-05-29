import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FEFCF9] flex flex-col items-center justify-center gap-4">
      <h1 className="font-serif text-3xl text-[#1C1C1A]">IMV Hub</h1>
      <Link
        href="/inteligencia-competitiva"
        className="text-[#B5894A] hover:underline text-sm"
      >
        → Inteligência Competitiva de Mercado
      </Link>
    </main>
  );
}
