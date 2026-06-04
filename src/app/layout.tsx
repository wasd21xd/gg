import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gorizont-spb.ru"),
  title: {
    default: "Горизонт — Бесплатный подбор квартир в Санкт-Петербурге | Новостройки СПб 2024",
    template: "%s | Горизонт — Центр недвижимости СПб",
  },
  description:
    "Бесплатный подбор новостроек в Санкт-Петербурге. Ипотека по паспорту, 300+ ЖК в базе, сопровождение сделки «под ключ». Официальные партнёры застройщиков СПб с 2017 года. 1500+ семей с ключами.",
  keywords: [
    "купить квартиру санкт-петербург",
    "новостройки спб",
    "подбор квартиры спб бесплатно",
    "ипотека без подтверждения дохода спб",
    "агентство недвижимости санкт-петербург",
    "купить квартиру в новостройке спб",
    "ипотека по паспорту спб",
    "жилые комплексы санкт-петербург",
    "центр недвижимости санкт-петербург",
    "горизонт недвижимость спб",
  ],
  authors: [{ name: "Горизонт — Центр недвижимости" }],
  creator: "Горизонт — Центр недвижимости",
  publisher: "Горизонт — Центр недвижимости",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://gorizont-spb.ru",
    siteName: "Горизонт — Центр недвижимости",
    title: "Горизонт — Бесплатный подбор квартир в Санкт-Петербурге",
    description:
      "Профессиональный подбор новостроек, одобрение ипотеки и сопровождение сделки. 300+ ЖК, 7 лет на рынке, 1500+ семей. Услуги бесплатны для покупателя.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Горизонт — Центр недвижимости Санкт-Петербург",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Горизонт — Бесплатный подбор квартир в СПб",
    description:
      "Подбираем квартиры в новостройках Санкт-Петербурга. Ипотека по паспорту. Бесплатно.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://gorizont-spb.ru",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        {/* Google Fonts — подключаются через <link> для совместимости с любым окружением */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Manrope:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-[#f5f4f0] text-[#0a0a0a] overflow-x-hidden antialiased" style={{ fontFamily: "'Manrope', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
