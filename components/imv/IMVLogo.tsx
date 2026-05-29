import Image from "next/image";
import { cn } from "@/lib/utils";

type Variant = "dark" | "light" | "copper";

interface IMVLogoProps {
  variant?: Variant;
  width?: number;
  className?: string;
}

// Logo paths — usar a assinatura principal do vault
const LOGO_PATHS: Record<Variant, string> = {
  dark:   "/logos/LOGO - ASSINATURA - PRETO@4x.png",
  light:  "/logos/LOGO - ASSINATURA - BRANCO@4x.png",
  copper: "/logos/LOGO - ASSINATURA - PRINCIPAL@4x.png",
};

export function IMVLogo({ variant = "copper", width = 160, className }: IMVLogoProps) {
  return (
    <Image
      src={LOGO_PATHS[variant]}
      alt="IMV Academy — Instituto Medicina de Vanguarda"
      width={width}
      height={Math.round(width * 0.28)}
      className={cn("object-contain", className)}
      priority
    />
  );
}
