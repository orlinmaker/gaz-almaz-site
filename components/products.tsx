"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

type Product = {
  slug: "classic" | "premium" | "party" | "refill"
  name: string
  description?: string
  features?: string[]
  // старое поле оставляем на совместимость
  price: string
  // NEW: явные числовые поля для продаж/обмена
  sellPrice?: number
  exchangePrice?: number

  image: string
  alt: string
  featured?: boolean

  volume?: string
  weight?: string
  pieces?: string
}

function capitalizeFirst(s: string) {
  if (!s) return s
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
}

export function Products() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const products: Product[] = [
    {
      slug: "refill",
      name: "Баллон 10 литров веселящего газа",
      description: "",
      features: [],
      featured: true,
      price: "от 8 500 ₽",
      sellPrice: 14000,      // NEW
      exchangePrice: 8500,   // NEW
      image: "/products/refill.png",
      alt: "Баллон 10 л",
      volume: "10 л",
      weight: "6,2 кг",
      pieces: "100 шаров",
    },
    {
      slug: "party",
      name: "Баллон 5 литров веселящего газа",
      description: "",
      features: [],
      price: "от 6 000 ₽",
      sellPrice: 8000,
      exchangePrice: 6000,
      image: "/products/party.png",
      alt: "Баллон 5 л",
      volume: "5 л",
      weight: "2,8 кг",
      pieces: "50 шаров",
    },
    {
      slug: "classic",
      name: "Баллон 2 литра веселящего газа",
      description: "",
      features: [],
      price: "от 4 500 ₽",
      sellPrice: 5500,
      exchangePrice: 4500,
      image: "/products/classic.png",
      alt: "Баллон 2 л",
      volume: "2 л",
      weight: "1,2 кг",
      pieces: "30 шаров",
    },
    {
      slug: "premium",
      name: "Баллон 3,5 литра веселящего газа",
      description: "",
      features: [],
      price: "от 3 000 ₽",
      sellPrice: 3200,
      exchangePrice: 3000,
      image: "/products/premium.png",
      alt: "Баллон 3,5 л",
      volume: "3,5 л",
      weight: "650 г",
      pieces: "12 шаров",
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
        { threshold: 0.1 },
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

        {/* сетка: 4 колонки на lg, карточки одинаковой высоты */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full mx-auto">
          {products.map((product, index) => {
            const isFeatured = Boolean(product.featured)

            return (
              <div
                key={product.slug}
                ref={(el) => { cardRefs.current[index] = el }}
                className={`transition-all duration-700 h-full ${visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                {/* карточка */}
                <Card
                  className={`relative overflow-hidden rounded-2xl p-0 bg-gradient-to-b from-background/60 to-transparent group hover:scale-[1.02] transition-transform duration-300 h-full min-h-[34rem] ${isFeatured ? "border-primary border" : "border-primary/10"}`}
                >
                  {/* метка "Популярный выбор" */}
                  {isFeatured && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30">
                      <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                        {capitalizeFirst("популярный выбор")}
                      </div>
                    </div>
                  )}

                  <div className="p-6 flex flex-col h-full">
                    {/* изображение */}
                    <div className="relative h-72 mb-4 overflow-hidden rounded-xl bg-transparent flex items-center justify-center mt-6">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.alt}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width:768px) 80vw, 25vw"
                        loading="lazy"
                      />

                      {/* BADGES (правый верхний угол) */}
                      <div className="absolute top-3 right-3 flex flex-col items-end gap-2 z-10">
                        {product.volume ? (
                          <div className="inline-flex justify-center items-center h-8 min-w-[2rem] px-2 rounded-full bg-transparent ring-1 ring-white/10 text-white text-xs font-medium shadow-sm">
                            <span className="leading-none">{product.volume}</span>
                          </div>
                        ) : null}
                        {product.weight ? (
                          <div className="inline-flex justify-center items-center h-8 min-w-[2rem] px-2 rounded-full bg-transparent ring-1 ring-white/10 text-white text-xs font-medium shadow-sm">
                            <span className="leading-none">{product.weight}</span>
                          </div>
                        ) : null}
                        {product.pieces ? (
                          <div className="inline-flex justify-center items-center h-8 min-w-[2rem] px-2 rounded-full bg-transparent ring-1 ring-white/10 text-white text-xs font-medium shadow-sm">
                            <span className="leading-none">{product.pieces}</span>
                          </div>
                        ) : null}
                      </div>
                    </div>

                    {/* название центрировано */}
                    <div className="mb-3">
                      <h3 className="text-lg md:text-xl font-bold w-full leading-tight text-center">
                        {product.name}
                      </h3>
                    </div>

                    {/* описание по необходимости */}
                    {product.description ? (
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{product.description}</p>
                    ) : null}

                    {/* NEW: Блок двух цен (Продажа | Обмен) — выровнены: подписи слева, суммы справа */}
                    {(product.sellPrice !== undefined || product.exchangePrice !== undefined) && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm text-muted-foreground">Продажа</div>
                          <div className="text-sm font-semibold text-right">
                            {product.sellPrice !== undefined ? product.sellPrice.toLocaleString("ru-RU") + " ₽" : "-"}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">Обмен</div>
                          <div className="text-sm font-semibold text-right">
                            {product.exchangePrice !== undefined ? product.exchangePrice.toLocaleString("ru-RU") + " ₽" : "-"}
                          </div>
                        </div>
                      </div>
                    )}
                    {/* END NEW */}

                    {/* Кнопки: Купить + Подробнее */}
                    <div className="mt-auto">
                      <div className="mb-3">
                        <Button
                          className={`w-full ${isFeatured ? "bg-gradient-to-r from-primary to-secondary hover:opacity-95 text-primary-foreground" : "bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30"}`}
                          asChild
                        >
                          <a href={`tel:+74958683399`} rel="noopener noreferrer">
                            Купить
                          </a>
                        </Button>
                      </div>

                      <div className="text-center">
                        <Link href={`/products/${product.slug}`} className="text-sm text-muted-foreground hover:text-primary">
                          Подробнее
                        </Link>
                      </div>
                    </div>
                    {/* END Кнопки */}
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
