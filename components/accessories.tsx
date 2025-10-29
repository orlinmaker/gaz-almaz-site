"use client"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { accessories } from "@/lib/accessories"
import Link from "next/link"

export function Accessories() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"))
            setVisibleCards((prev) => {
              const next = new Set(prev)
              next.add(idx)
              return next
            })
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    )

    cardRefs.current.forEach((el) => {
      if (el) observerRef.current!.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section id="accessories" className="py-24 md:py-32 relative sparkle-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Аксессуары и комплектующие
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Всё необходимое для комфортного использования медицинских газов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {accessories.map((accessory, index) => {
            return (
              <div
                key={accessory.id}
                data-index={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`relative glass-effect rounded-2xl p-6 border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 card-shine group ${
                  visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-full aspect-[16/9] mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={accessory.image || "/placeholder.svg"}
                      alt={accessory.id === "balloons" ? "Шарики для мероприятий" : accessory.name}
                      fill
                      sizes="(min-width:1024px) 380px, (min-width:768px) 560px, 100vw"
                      quality={88}
                      className="object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-foreground">{accessory.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{accessory.description}</p>
                  <p className="text-xl font-semibold text-primary mb-6">{accessory.priceLabel}</p>

                  <div className="relative z-20 flex flex-col sm:flex-row gap-3 w-full">
                    <Button
                      variant="outline"
                      className="flex-1 border-primary/50 hover:bg-primary/10 bg-transparent"
                      asChild
                    >
                      <Link href={`/accessories/${accessory.id}`}>Подробнее</Link>
                    </Button>
                    <Button
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground"
                      asChild
                    >
                      <a
                        href={`https://wa.me/79990000000?text=${encodeURIComponent(
                          `Здравствуйте! Хочу аксессуар: ${accessory.name}`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Заказать
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
