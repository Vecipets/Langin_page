import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Obligatorio porque GitHub Pages no soporta el servidor de imágenes de Next.js
  },
};

export default nextConfig;