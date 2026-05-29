import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IMV Academy",
  description: "Instituto Medicina de Vanguarda",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
