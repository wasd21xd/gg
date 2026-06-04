import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Сжатие для лучшей скорости
  compress: true,

  // Заголовки для безопасности и производительности
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
      {
        source: "/(.*).(jpg|jpeg|png|gif|webp|svg|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // Редиректы для SEO
  async redirects() {
    return [
      // Редирект с www на без www (или наоборот — выбрать одно)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.gorizont-spb.ru" }],
        destination: "https://gorizont-spb.ru/:path*",
        permanent: true,
      },
    ];
  },

  // Оптимизация изображений
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  // Экспериментальные оптимизации
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
