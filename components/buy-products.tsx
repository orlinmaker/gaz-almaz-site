"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

/* NEW: Секция "Выкуп" — стиль соответствует components/products.tsx */
type BuyProduct = {
  slug: string
  title: string
  image: string
  price: string
  volume?: string
  weight?: string
}

export function BuyProducts() {
  const products: BuyProduct[] = [
    {
      slug: "buy-10",
      title: "Баллон 10 литров",
      image: "/products/refill.png",
      price: "3 000 ₽",
      volume: "10 л",
      weight: "6,2 кг",
    },
    {
      slug: "buy-5",
      title: "Баллон 5 литров",
      image: "/products/party.png",
      price: "1 000 ₽",
      volume: "5 л",
      weight: "2,8 кг",
    },
    {
      slug: "buy-2",
      title: "Баллон 2 литра",
      image: "/products/classic.png",
      price: "800 ₽",
      volume: "2 л",
      weight: "1,2 кг",
    },
    {
      slug: "buy-35",
      title: "Баллон 3,5 литра",
      image: "/products/premium.png",
      price: "200 ₽",
      volume: "3,5 л",
      weight: "650 г",
    },
  ]

  return (
    <section id="buy" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Выкупим пустые баллоны
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Продаёте пустые баллоны? Принимем по фиксированной цене — выберите вашу модель и оформите продажу.
          </p>
        </div>

        {/* Сетка и карточки в том же стиле, что и products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full mx-auto">
          {products.map((p) => (
            <Card
              key={p.slug}
              className="relative overflow-hidden rounded-2xl p-0 bg-gradient-to-b from-background/60 to-transparent group hover:scale-[1.02] transition-transform duration-300 h-full min-h-[34rem]"
            >
              <div className="p-6 flex flex-col h-full">
                {/* Верх — изображение (увеличенная область, чтобы картинка была выразительнее) */}
                <div className="relative h-72 mb-4 overflow-hidden rounded-xl bg-transparent flex items-center justify-center mt-6">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width:768px) 80vw, 25vw"
                    priority={false}
                  />

                  {/* BADGES: компактные бейджи справа сверху */}
                  <div className="absolute top-3 right-3 flex flex-col items-end gap-2 z-10">
                    {p.volume && (
                      <div className="inline-flex justify-center items-center h-8 min-w-[2rem] px-2 rounded-full bg-transparent ring-1 ring-white/10 text-white text-xs font-medium shadow-sm">
                        <span className="leading-none">{p.volume}</span>
                      </div>
                    )}
                    {p.weight && (
                      <div className="inline-flex justify-center items-center h-8 min-w-[2rem] px-2 rounded-full bg-transparent ring-1 ring-white/10 text-white text-xs font-medium shadow-sm">
                        <span className="leading-none">{p.weight}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Название — центрировано и во всю ширину */}
                <div className="mb-3">
                  <h3 className="text-lg md:text-xl font-bold w-full leading-tight text-center">
                    {p.title}
                  </h3>
                </div>

                {/* Цена — перенесена вниз, перед кнопками (центрально) */}
                <div className="mb-4 text-center">
                  <div className="text-primary font-semibold text-lg">{p.price}</div>
                </div>

                {/* Кнопки — большая основная кнопка "Продать", под ней ссылка "Подробнее" */}
                <div className="mt-auto">
                  <div className="mb-3">
                    <Button
                      className="w-full bg-emerald-500 hover:brightness-95 text-white"
                      asChild
                    >
                      <a
                        href={'tel:+74958683399'}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Продать
                      </a>
                    </Button>
                  </div>

                  <div className="text-center">
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
/* END NEW */
