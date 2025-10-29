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
  price?: number
  priceLabel?: string
  image: string
  features?: string[]
  breadcrumbs: Breadcrumb[]
  backHref: string
  backLabel: string
  orderType: string
  itemId: string
}

export function DetailPage({
  title,
  description,
  price,
  priceLabel,
  image,
  features = [],
  breadcrumbs,
  backHref,
  backLabel,
  orderType,
  itemId,
}: DetailPageProps) {
  const displayPrice = priceLabel || (price ? `${price.toLocaleString("ru-RU")} ₽` : "")

  return (
    <main className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-24 md:py-32">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-muted-foreground flex items-center gap-2">
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
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {title}
            </h1>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-pretty">{description}</p>

            {displayPrice && (
              <div className="mb-8 inline-flex items-baseline gap-2 glass-effect px-6 py-4 rounded-xl border-2 border-primary/30 w-fit">
                <span className="text-4xl font-bold text-primary">{displayPrice}</span>
              </div>
            )}

            {features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-foreground">Характеристики</h2>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-base">
                      <div className="mt-1 p-1 rounded-full bg-primary/20 border border-primary/30">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Buttons with proper z-index */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto relative z-20">
              <Button
                size="lg"
                className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground text-base font-semibold"
                asChild
              >
                <a
                  href={`https://wa.me/79990000000?text=${encodeURIComponent(`Здравствуйте! Хочу заказать: ${title}`)}`}
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
                className="flex-1 border-primary/50 hover:bg-primary/10 bg-transparent text-base font-semibold"
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
