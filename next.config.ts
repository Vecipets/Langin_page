import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Langin_page", // Este es el nombre exacto de tu repo en GitHub
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;