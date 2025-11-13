"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { accessories } from "@/lib/accessories"

// Локальный тип + поддержка баннера
type AccessoryBase = {
  id: string
  name: string
  description: string
  priceLabel: string
  image: string
}
type AccessoryCard = AccessoryBase & { isBanner?: boolean }

export function Accessories() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

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

  // Добавляем баннер 18+ последней карточкой
  const cards: AccessoryCard[] = [
    ...(accessories as AccessoryBase[]),
    {
      id: "banner18",
      name: "",
      description: "",
      priceLabel: "",
      image: "/accessories/18years.webp",
      isBanner: true,
    },
  ]

  return (
    <section id="accessories" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Аксессуары и комплектующие
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Всё необходимое для комфортного использования веселящего газа
          </p>
        </div>

        {/* 4 колонки на lg, как в products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full mx-auto">
          {cards.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => { cardRefs.current[index] = el }}
              className={`transition-all duration-700 h-full ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Карточка */}
              <Card
                className={`relative overflow-hidden rounded-2xl p-0 h-full min-h-[26rem] border-primary/10 ${
                  item.isBanner ? "" : "bg-gradient-to-b from-background/60 to-transparent group hover:scale-[1.02] transition-transform duration-300"
                }`}
              >
                {/* --- БАННЕР: только картинка, без текста/кнопок --- */}
                {item.isBanner ? (
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt="18+ баннер"
                      width={900}
                      height={1200}
                      className="w-full h-full object-cover"
                      quality={100}
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                      priority
                    />
                  </div>
                ) : (
                  <div className="p-5 flex flex-col h-full">
                    {/* Картинка ближе к верху */}
                    <div className="relative h-56 mb-3 overflow-hidden rounded-xl bg-transparent flex items-center justify-center">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={900}
                        height={1200}
                        className="w-full h-full object-contain"
                        sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 25vw"
                        quality={92}
                        loading="lazy"
                      />
                    </div>

                    {/* Заголовок */}
                    <div className="mb-2">
                      <h3 className="text-xl md:text-xl font-bold w-full leading-tight text-center">
                        {item.name}
                      </h3>
                    </div>

                    {/* Описание (если есть) */}
                    {item.description ? (
                      <p className="text-xl text-muted-foreground mb-3 leading-relaxed text-center">
                        {item.description}
                      </p>
                    ) : null}

                    {/* Стоимость — стиль как в products (подпись слева, цена справа) */}
                    {item.priceLabel ? (
                      <div className="mb-4">
                        <div className="flex items-center justify-between">
                          <div className="text-lg text-muted-foreground">Стоимость</div>
                          <div className="text-lg font-semibold text-right">
                            {item.priceLabel}
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {/* Кнопки: Купить + Подробнее (две строки) */}
                    <div className="mt-auto">
                      <div className="mb-3">
                        <Button
                          className="text-base w-full bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30"
                          asChild
                        >
                          <a href="tel:+74958683399" rel="noopener noreferrer">
                            Купить
                          </a>
                        </Button>
                      </div>
                      <div className="text-center">
                        <Link
                          href={`/accessories/${item.id}`}
                          className="text-base text-muted-foreground hover:text-primary"
                        >
                          Подробнее
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
