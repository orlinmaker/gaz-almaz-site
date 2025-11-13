import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ShoppingCart, Check, ChevronRight } from "lucide-react"

type Breadcrumb = {
  label: string
  href: string
  icon?: React.ReactNode
}

type DetailPageProps = {
  title: string
  description: string
  // старое поле оставляем, чтобы не сломать другие страницы
  price?: number
  priceLabel?: string
  // новые поля цен
  priceBuy?: number
  priceExchange?: number
  // изображение
  image: string
  features?: string[]
  breadcrumbs: Breadcrumb[]
  backHref: string
  backLabel: string
  orderType: string
  itemId: string

  // NEW: отдельные поля для плашек (не зависят от features)
  volumeLabel?: string   // пример "10 л"
  weightLabel?: string   // пример "6,2 кг"
  piecesLabel?: string   // пример "160 шаров"
}

export function DetailPage({
  title,
  description,
  price,
  priceLabel,
  priceBuy,
  priceExchange,
  image,
  features = [],
  breadcrumbs,
  backHref,
  backLabel,
  orderType,
  itemId,
  volumeLabel,
  weightLabel,
  piecesLabel,
}: DetailPageProps) {
  // это на случай, если придёт только старое поле
  const fallbackPrice = priceLabel || (price ? `${price.toLocaleString("ru-RU")} ₽` : "")

  return (
    <main className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-24 md:py-32">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-base text-muted-foreground flex items-center gap-2">
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.href} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-4 h-4" />}
              <Link href={crumb.href} className="hover:text-primary transition-colors flex items-center gap-1">
                {crumb.icon}
                <span>{crumb.label}</span>
              </Link>
            </div>
          ))}
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{title}</span>
        </nav>

        {/* Product Details Grid */}
        <div className="grid gap-8 lg:gap-12 md:grid-cols-2 max-w-6xl mx-auto">
          {/* Image Section with Glow Effect */}
          <div className="relative aspect-square rounded-2xl glass-effect p-8 overflow-hidden group image-glow-container">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative w-full h-full">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            {/* BADGES */}
            <div className="absolute top-6 right-4 flex flex-col items-center gap-3 z-20">
              {volumeLabel ? (
                <div className="inline-flex justify-center items-center h-9 min-w-[2rem] px-3 rounded-full bg-gray-900/70 ring-1 ring-white/10 text-white text-sm font-medium shadow-sm">
                  <span className="leading-none">{volumeLabel}</span>
                </div>
              ) : null}

              {weightLabel ? (
                <div className="inline-flex justify-center items-center h-9 min-w-[2rem] px-3 rounded-full bg-gray-900/70 ring-1 ring-white/10 text-white text-sm font-medium shadow-sm">
                  <span className="leading-none">{weightLabel}</span>
                </div>
              ) : null}

              {piecesLabel ? (
                <div className="inline-flex justify-center items-center h-9 min-w-[2rem] px-3 rounded-full bg-gray-900/70 ring-1 ring-white/10 text-white text-sm font-medium shadow-sm">
                  <span className="leading-none">{piecesLabel}</span>
                </div>
              ) : null}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              {description}
            </p>

            {/* Блок цен */}
            {(priceBuy || priceExchange || fallbackPrice) && (
              <div className="mb-10 glass-effect px-7 py-6 rounded-xl border-2 border-primary/20 w-fit space-y-4">
                {priceBuy ? (
                  <div className="flex items-center gap-4">
                    <span className="text-lg text-muted-foreground">Цена при покупке:</span>
                    <span className="text-3xl font-bold text-primary">
                      {priceBuy.toLocaleString("ru-RU")} ₽
                    </span>
                  </div>
                ) : null}

                {priceExchange ? (
                  <div className="flex items-center gap-4">
                    <span className="text-lg text-muted-foreground">Цена при обмене:</span>
                    <span className="text-3xl font-bold text-secondary">
                      {priceExchange.toLocaleString("ru-RU")} ₽
                    </span>
                  </div>
                ) : null}

                {/* fallback-цена, если нет новых полей */}
                {!priceBuy && !priceExchange && fallbackPrice ? (
                  <div className="flex items-center gap-4">
                    <span className="text-lg text-muted-foreground">Стоимость:</span>
                    <span className="text-3xl font-bold text-primary">{fallbackPrice}</span>
                  </div>
                ) : null}
              </div>
            )}

            {features.length > 0 && (
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Характеристики</h2>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-lg">
                      <div className="mt-1 p-1.5 rounded-full bg-primary/20 border border-primary/30">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto relative z-20">
              <Button
                size="lg"
                className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground text-lg font-semibold"
                asChild
              >
                <a
                  href={`https://wa.me/79990000000?text=${encodeURIComponent(
                    `Здравствуйте! Хочу заказать: ${title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Заказать
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="flex-1 border-primary/50 hover:bg-primary/10 bg-transparent text-lg font-semibold"
                asChild
              >
                <Link href={backHref}>
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  {backLabel}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
