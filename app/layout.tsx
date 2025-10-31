import type React from "react"
import type { Metadata } from "next"
import { Exo_2, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import AnimatedBackground from "@/components/AnimatedBackground";

const exo2 = Exo_2({
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700", "800"],
})

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Газ Алмаз | Медицинские газы премиум качества",
  description:
    "Ощути чистоту. Открой грани удовольствия с Газ Алмаз. Медицинские газы для легального развлекательного применения.",
  generator: "v0.app",
  keywords: "медицинские газы, газ алмаз, развлекательные газы, качество, безопасность",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${exo2.variable} font-sans antialiased`}>
        {/* наш фон */}
        <AnimatedBackground />

        {/* твой контент */}
        {children}

        {/* аналитика */}
        <Analytics />
      </body>
    </html>
  );
}