import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eajqpivrggvisuqfrvid.supabase.co",
      },
    ],
  },
};

export default nextConfig;
