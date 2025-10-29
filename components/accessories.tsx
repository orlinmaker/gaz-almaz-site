"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Package, Wrench, Layers } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const accessories = [
  {
    id: "balloons",
    name: "Шарики",
    description: "Прочные латексные, подходят для ивентов и вечеринок.",
    price: "от 350 ₽",
    icon: Package,
    // РЕКОМЕНДУЮ заменить на большой источник (например, /accessories/balloons-2400.webp)
    image: "/accessories/balloons.png",
  },
  {
    id: "nozzles",
    name: "Насадки на баллон",
    description: "Совместимы с моделями Diamond 1L / 5L.",
    price: "от 490 ₽",
    icon: Wrench,
    image: "/accessories/nozzles.png",
  },
  {
    id: "stand",
    name: "Подставка для баллона",
    description: "Устойчивая, антискользящее основание.",
    price: "от 990 ₽",
    icon: Layers,
    image: "/accessories/stand.png",
  },
]

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
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    )

    cardRefs.current.forEach((el) => {
      if (el) observerRef.current!.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const contact = document.getElementById("contact")
    if (contact) {
      const header = 80
      window.scrollTo({ top: contact.offsetTop - header, behavior: "smooth" })
    }
  }

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

        {/* max-w-6xl ≈ 1152px: на lg 3 колонки (~360–380px на карточку), на md 2 колонки (~560px), на sm 1 колонка (100vw). */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {accessories.map((accessory, index) => {
            const Icon = accessory.icon
            return (
              <div
                key={accessory.id}
                data-index={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`glass-effect rounded-2xl p-6 border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 card-shine group ${
                  visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-full aspect-[16/9] mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={accessory.image}
                      alt={accessory.id === "balloons" ? "Шарики для мероприятий" : accessory.name}
                      fill
                      /*
                        ВАЖНО: sizes сопоставлен сетке:
                        - ≥1024px (lg): ~380px на карточку
                        - ≥768px (md): ~560px
                        - иначе: 100vw
                        Это заставит Next отдавать достаточно крупные источники для DPR=2.
                      */
                      sizes="(min-width:1024px) 380px, (min-width:768px) 560px, 100vw"
                      /*
                        Для фотографий quality ~85–90 оптимален. 100 даёт лишний вес.
                        Если заменишь ассеты на .webp/.avif 2400×1350 — мыло уйдёт на ретинах.
                      */
                      quality={88}
                      className="object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-foreground">{accessory.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{accessory.description}</p>
                  <p className="text-xl font-semibold text-primary mb-6">{accessory.price}</p>

                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Button
                      variant="outline"
                      className="flex-1 border-primary/50 hover:bg-primary/10 bg-transparent"
                      onClick={handleDetailsClick}
                    >
                      Подробнее
                    </Button>
                    <Button
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground"
                      asChild
                    >
                      <a
                        href={`https://wa.me/79990000000?text=${encodeURIComponent(
                          `Здравствуйте! Хочу аксессуар: ${accessory.name}`
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
