"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, Truck, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const deals = [
  {
    id: "party-set",
    title: "Набор Party −10%",
    description: "Баллон + насадки + шарики. −10% до конца месяца.",
    badge: "АКЦИЯ",
    icon: Sparkles,
    gradient: "from-primary via-secondary to-accent",
    image: "/deals/party10.png",
    whatsappText: "Здравствуйте! Хочу набор Party −10%",
    detailsLabel: "Подробнее",
    orderLabel: "Заказать",
  },
  {
    id: "free-delivery",
    title: "Бесплатная доставка от 5000 ₽",
    description: "По Москве и МО. Подробности у менеджера.",
    badge: "АКЦИЯ",
    icon: Truck,
    gradient: "from-secondary via-accent to-primary",
    image: "/deals/free-delivery.png",
    whatsappText: "Здравствуйте! Вопрос по бесплатной доставке",
    detailsLabel: "Связаться",
    orderLabel: "Написать",
  },
  {
    id: "event-discount",
    title: "Скидка для мероприятий",
    description: "От 3 баллонов — спецусловия.",
    badge: "АКЦИЯ",
    icon: Users,
    gradient: "from-accent via-primary to-secondary",
    image: "/deals/event-discount.png",
    whatsappText: "Здравствуйте! Интересуют условия для мероприятия",
    detailsLabel: "Подробнее",
    orderLabel: "Заказать",
  },
] as const

export function Deals() {
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
            observerRef.current?.unobserve(entry.target as Element)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    )

    // подписываем ВСЕ карточки после инициализации observer
    cardRefs.current.forEach((el) => el && observerRef.current!.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const contact = document.getElementById("contact")
    if (contact) {
      const headerHeight = 80
      window.scrollTo({ top: contact.offsetTop - headerHeight, behavior: "smooth" })
    }
  }

  return (
    <section id="deals" className="py-24 md:py-32 relative sparkle-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Акции
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Выгодные предложения для наших клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {deals.map((deal, index) => {
            const Icon = deal.icon
            return (
              <div
                key={deal.id}
                data-index={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`relative glass-effect rounded-2xl px-8 pb-8 pt-14 border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 card-shine group overflow-hidden ${
                  visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${deal.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Badge */}
                <div className="absolute top-3 right-4 z-20 bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-xs font-bold text-primary-foreground neon-glow backdrop-blur-sm">
                  {deal.badge}
                </div>


                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-full h-40 mt-2 mb-6 rounded-xl overflow-hidden relative">
                    <Image
                      src={deal.image || "/placeholder.svg"}
                      alt={deal.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>


                  <h3 className="text-2xl font-bold mb-4 text-foreground">{deal.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed min-h-[60px]">{deal.description}</p>

                  <div className="flex flex-col sm:flex-row gap-3 w-full mt-auto">
                    <Button
                      variant="outline"
                      className="flex-1 border-primary/50 hover:bg-primary/10 bg-transparent"
                      onClick={handleDetailsClick}
                    >
                      {deal.detailsLabel}
                    </Button>
                    <Button
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground"
                      asChild
                    >
                      <a
                        href={`https://wa.me/79990000000?text=${encodeURIComponent(deal.whatsappText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {deal.orderLabel}
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
