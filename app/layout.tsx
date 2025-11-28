import type React from "react"
import type { Metadata } from "next"
import { Exo_2, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import AnimatedBackground from "@/components/AnimatedBackground";
import Script from "next/script"

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
  title: "Газ Алмаз | Веселящий газ премиум качества",
  description:
    "Ощути чистоту. Открой грани удовольствия с Газ Алмаз. Веселящий газ для легального развлекательного применения.",
  generator: "GAZ ALMAZ SWAGGA",
  keywords: "Газ Алмаз, медицинский газ, веселящий газ, развлекательный газ, закись азота, N2O, купить веселящий газ, газ для вечеринок, газовые баллоны, баллон с газом, газ для мероприятий, чистый медицинский газ, безопасные газы, медицинский кислород, ингаляционные газы, закись азота медицинская, гелий, баллон Газ Алмаз, аренда баллонов, доставка газов, продажа баллонов, газ высокого давления, премиум газы, чистота газа, сертифицированные газы, медицинские стандарты, весёлые вечеринки, чистый газ, гелиевые баллоны, купить баллон с газом, газ для шара, газ для кафе, газ для студий, медицинская закись азота, газ N2O для ресторанов, газ для караоке, газ для ивентов, газ высокого качества, газ с доставкой, Газ Алмаз официальный сайт, алмазный газ, газовые аксессуары, редукторы для баллонов, насадки для газа, баллон 2 литра, баллон 3.5 литра, баллон 5 литров, баллон 10 литров, бирюзовый баллон, алмазный дизайн, бренд Газ Алмаз, чистота и качество, весёлое настроение, чистый продукт, закись азота премиум, купить N2O, заказать баллон Газ Алмаз, газы для баров, доставка по России, доставка по Москве, безопасное использование, сертифицированное оборудование, оригинальные баллоны, легальный газ, чистый N2O, безопасный развлекательный газ ",
  icons: {
    icon: [
      { url: '/icons_pack/favicon.ico' },
      { url: '/icons_pack/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons_pack/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons_pack/favicon-48x48.png', sizes: '48x48', type: 'image/png' }
    ],
    apple: '/icons_pack/apple-touch-icon.png',
    other: [
      { rel: 'manifest', url: '/icons_pack/site.webmanifest' }
    ]
  },
  themeColor: '#032a3f'
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        {/* Яндекс Вебмастер */}
        <meta name="yandex-verification" content="f46aeab7aa40e5e1" />

        {/* Яндекс.Метрика */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=105534020', 'ym');

            ym(105534020, 'init', {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/105534020"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </head>

      <body className={`${manrope.variable} ${exo2.variable} font-sans antialiased`}>
        {/* Фон */}
        <AnimatedBackground />

        {/* Контент */}
        {children}

        {/* Аналитика */}
        <Analytics />
      </body>
    </html>
  )
}
