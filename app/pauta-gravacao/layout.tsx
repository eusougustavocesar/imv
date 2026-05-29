import { IMVPasswordGate } from "@/components/imv";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <IMVPasswordGate>{children}</IMVPasswordGate>;
}
