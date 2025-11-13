"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { poppers } from "@/lib/poppers"

type PopperItem = {
  id: string
  name: string
  description: string
  priceLabel: string
  image: string
}

export function Poppers() {
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

  return (
    <section id="poppers" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Попперсы
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Премиальные попперсы для незабываемых впечатлений
          </p>
        </div>

        {/* сетка 3 колонки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full mx-auto">
          {(poppers as PopperItem[]).map((item, index) => (
            <div
              key={item.id}
              ref={(el) => { cardRefs.current[index] = el }}
              className={`transition-all duration-700 h-full ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Card className="relative overflow-hidden rounded-2xl p-0 bg-gradient-to-b from-background/60 to-transparent group hover:scale-[1.02] transition-transform duration-300 h-full min-h-[26rem] border-primary/10">
                <div className="p-5 flex flex-col h-full">
                  
                  {/* изображение */}
                  <div className="relative h-56 mb-3 overflow-hidden rounded-xl bg-transparent flex items-center justify-center">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 25vw"
                      quality={92}
                      loading="lazy"
                    />
                  </div>

                  {/* заголовок */}
                  <div className="mb-2">
                    <h3 className="text-lg md:text-xl font-bold w-full leading-tight text-center">
                      {item.name}
                    </h3>
                  </div>

                  {/* описание */}
                  {item.description ? (
                    <p className="text-muted-foreground mb-3 text-base leading-relaxed text-center">
                      {item.description}
                    </p>
                  ) : null}

                  {/* цена — стиль как в products.tsx */}
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

                  {/* кнопки */}
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
                        href={`/poppers/${item.id}`}
                        className="text-base text-muted-foreground hover:text-primary"
                      >
                        Подробнее
                      </Link>
                    </div>
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
