"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Star, Zap, Crown } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

type Product = {
  slug: "classic" | "premium" | "party" | "refill"
  name: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  description: string
  features: string[]
  price: string
  image: string
  alt: string
  featured?: boolean
}

export function Products() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const products: Product[] = [
    {
      slug: "classic",
      name: "Алмаз Classic",
      icon: Sparkles,
      description: "Идеальный выбор для начинающих. Чистота и качество в каждом вдохе.",
      features: ["Медицинская чистота", "Сертифицирован", "Безопасен"],
      price: "от 1 500 ₽",
      image: "/products/classic.png",
      alt: "Алмаз Classic — фирменный баллон",
    },
    {
      slug: "premium",
      name: "Алмаз Premium",
      icon: Star,
      description: "Для настоящих ценителей. Максимальная чистота и длительный эффект.",
      features: ["Премиум качество", "Увеличенный объем", "Эксклюзивный дизайн"],
      price: "от 2 500 ₽",
      featured: true,
      image: "/products/premium.png",
      alt: "Алмаз Premium — фирменный баллон",
    },
    {
      slug: "party",
      name: "Алмаз Party Kit",
      icon: Zap,
      description: "Специально для мероприятий. Яркие впечатления для большой компании.",
      features: ["Для компаний", "Экономичный", "Быстрая доставка"],
      price: "от 3 500 ₽",
      image: "/products/party.png",
      alt: "Алмаз Party Kit — фирменный баллон",
    },
    {
      slug: "refill",
      name: "Алмаз Refill Station",
      icon: Crown,
      description: "Высший уровень роскоши. Эксклюзивная формула для особых случаев.",
      features: ["VIP качество", "Максимальный объем", "Персональный сервис"],
      price: "от 5 000 ₽",
      image: "/products/refill.png",
      alt: "Алмаз Refill Station — фирменный баллон",
    },
  ]

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => {
                const next = [...prev]
                next[index] = true
                return next
              })
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 }
      )
      observer.observe(card)
      return observer
    })

    return () => {
      observers.forEach((o) => o?.disconnect())
    }
  }, [])

  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Наши продукты
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Каждый баллон — это произведение искусства. Выберите идеальный вариант для ваших потребностей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon
            const isFeatured = Boolean(product.featured)

            return (
              <div
                key={product.slug}
                ref={(el) => { cardRefs.current[index] = el }}
                className={`transition-all duration-700 ${
                  visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <Card
                  className={`glass-effect overflow-hidden group hover:scale-105 transition-all duration-300 shine-overlay ${
                    isFeatured ? "border-primary border-2" : "border-primary/20"
                  } hover:border-primary hover:shadow-[0_0_30px_rgba(0,217,255,0.5)]`}
                >
                  {isFeatured && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs md:text-sm font-bold px-4 py-1 rounded-full shadow-lg z-10">
                      ПОПУЛЯРНЫЙ ВЫБОР
                    </div>
                  )}

                  <div className="p-6">
                    {/* КАРТИНКА ТОВАРА */}
                    <div className="mb-6 relative overflow-hidden rounded-xl h-48">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>

                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-primary/20 border border-primary/30">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{product.price}</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                    <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{product.description}</p>

                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-3">
                      {/* КНОПКА: ведёт на страницу товара */}
                      <Button
                        variant="outline"
                        className="flex-1 border-primary/50 hover:bg-primary/10 bg-transparent"
                        asChild
                      >
                        <Link href={`/products/${product.slug}`} prefetch={false}>
                          Подробнее
                        </Link>
                      </Button>

                      {/* КНОПКА ЗАКАЗА В WHATSAPP */}
                      <Button
                        className={`flex-1 ${
                          isFeatured
                            ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground"
                            : "bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30"
                        }`}
                        asChild
                      >
                        <a
                          href={`https://wa.me/79990000000?text=${encodeURIComponent(
                            `Здравствуйте! Хочу заказать: ${product.name}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Заказать
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
