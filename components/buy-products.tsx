"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

type BuyProduct = {
  id: string
  name: string
  priceLabel: string
  image: string
  volume?: string
  weight?: string
  pieces?: string
}

export function BuyProducts() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const buyProducts: BuyProduct[] = [
    {
      id: "refill10",
      name: "Баллон 10 литров",
      priceLabel: "3 000 ₽",
      image: "/products/refill.png",
      volume: "10 л",
      weight: "6,2 кг",
    },
    {
      id: "party5",
      name: "Баллон 5 литров",
      priceLabel: "1 000 ₽",
      image: "/products/party.png",
      volume: "5 л",
      weight: "2,8 кг",
    },
    {
      id: "classic2",
      name: "Баллон 2 литра",
      priceLabel: "800 ₽",
      image: "/products/classic.png",
      volume: "2 л",
      weight: "1,2 кг",
    },
    {
      id: "premium35",
      name: "Баллон 3,5 литра",
      priceLabel: "200 ₽",
      image: "/products/premium.png",
      volume: "3,5 л",
      weight: "650 г",
    },
  ]

  useEffect(() => {
    const observers = cardRefs.current.map((el, idx) => {
      if (!el) return null
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setVisibleCards((prev) => {
                const next = [...prev]
                next[idx] = true
                return next
              })
              io.unobserve(e.target)
            }
          })
        },
        { threshold: 0.1 },
      )
      io.observe(el)
      return io
    })

    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <section id="buy" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Выкупим пустые баллоны
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Продаёте пустые баллоны? Принимаем по фиксированной цене — выберите вашу модель и оформите продажу.
          </p>
        </div>

        {/* карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full mx-auto">
          {buyProducts.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`transition-all duration-700 h-full ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Card className="relative overflow-hidden rounded-2xl p-0 bg-gradient-to-b from-background/60 to-transparent group hover:scale-[1.02] transition-transform duration-300 h-full min-h-[28rem] border-primary/10">
                <div className="p-5 flex flex-col h-full">
                  
                  {/* изображение — размер как в products */}
                  <div className="relative h-72 mb-4 overflow-hidden rounded-xl bg-transparent flex items-center justify-center">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width:768px) 80vw, 25vw"
                      quality={92}
                      loading="lazy"
                    />

                    {/* объём и вес */}
                    <div className="absolute top-3 right-3 flex flex-col items-end gap-2 z-10">
                      {item.volume && (
                        <div className="inline-flex justify-center items-center h-8 min-w-[2rem] px-2 rounded-full bg-transparent ring-1 ring-white/10 text-white text-xs font-medium shadow-sm">
                          <span>{item.volume}</span>
                        </div>
                      )}
                      {item.weight && (
                        <div className="inline-flex justify-center items-center h-8 min-w-[2rem] px-2 rounded-full bg-transparent ring-1 ring-white/10 text-white text-xs font-medium shadow-sm">
                          <span>{item.weight}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* название */}
                  <div className="mb-2">
                    <h3 className="text-lg md:text-xl font-bold w-full leading-tight text-center">
                      {item.name}
                    </h3>
                  </div>

                  {/* стоимость */}
                  <div className="mb-1">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">Стоимость</div>
                      <div className="text-sm font-semibold text-primary">{item.priceLabel}</div>
                    </div>
                  </div>

                  {/* кнопка — ближе к низу */}
                  <div className="mt-1 mb-1">
                    <Button
                      className="w-full bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30"
                      asChild
                    >
                      <a href="tel:+74958683399" rel="noopener noreferrer">
                        Продать
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
