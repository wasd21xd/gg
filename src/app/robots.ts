import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Yandexbot",
        allow: "/",
        crawlDelay: 2,
      },
    ],
    sitemap: "https://gorizont-spb.ru/sitemap.xml",
    host: "https://gorizont-spb.ru",
  };
}
