"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"

const deals = [
  {
    id: "free-balloons",
    title: "5 500 ₽",
    description: "Заказать 2 баллона 3,5 л выгоднее!",
    image: "/deals/deals1.webp",
  },  
  {
    id: "two-35",
    title: "6 500 ₽",
    description: "Три баллона 3,5 л — выгодный набор!",
    image: "/deals/deals2.webp",
  },
  {
    id: "three-35",
    title: "500 ₽",
    description: "Скидка на День Рождения!",
    image: "/deals/deals3.webp",
  },
  {
    id: "refill-bonus",
    title: "300 ₽",
    description: "Скидка с Понедельника по Четверг с 9 до 17 часов.",
    image: "/deals/deals4.webp",
  },
  {
    id: "late-discount",
    title: "Бесплатный обмен",
    description: "10 л на 2 баллона 3,5 л",
    image: "/deals/deals5.webp",
  },
  {
    id: "vip-offer",
    title: "2 700 ₽",
    description: "Баллон 3,5 л + Попперс",
    image: "/deals/deals6.webp",
  },
] as const

export function Deals() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleCards((prev) => new Set(prev).add(index))
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.2 }
    )

    cardRefs.current.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="deals" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">

        {/* Заголовок блока */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Акции
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Самые выгодные предложения для клиентов
          </p>
        </div>

        {/* Сетка 3 × 2 = 6 карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {deals.map((deal, index) => (
            <div
              key={deal.id}
              data-index={index}
              ref={(el: HTMLDivElement | null) => { cardRefs.current[index] = el }}
              className={`flex flex-col items-center text-center opacity-0 translate-y-8 transition-all duration-700 ${
                visibleCards.has(index) && "opacity-100 translate-y-0"
              }`}
            >
              {/* картинка */}

              <div className="relative w-full h-80 rounded-2xl overflow-hidden flex items-center justify-center bg-transparent">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  className="object-contain"
                  loading="lazy"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* заголовок */}
              <h3 className="text-2xl font-bold mt-6 mb-2">{deal.title}</h3>

              {/* описание */}
              <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-[260px]">
                {deal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
