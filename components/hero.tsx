"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { DiamondLogo } from "./diamond-logo"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновые мягкие круги секции */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Логотип со свечением */}
          <div className="flex justify-center mb-8">
            <div className="relative flex items-center justify-center">
              {/* ВНЕШНИЙ ОРЕОЛ */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-10 rounded-full blur-3xl z-0"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(0,217,255,0.28), rgba(0,191,179,0.20) 45%, rgba(0,0,0,0) 75%)",
                  animation: "ga-breathe 3.5s ease-in-out infinite",
                }}
              />
              {/* ЯДРО СВЕЧЕНИЯ */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-4 rounded-full blur-xl z-0"
                style={{
                  background: "radial-gradient(closest-side, rgba(76,255,248,0.35), rgba(0,0,0,0) 70%)",
                }}
              />
              {/* Сам логотип */}
              <div className="relative z-10">
                <DiamondLogo size={140} />
              </div>
            </div>
          </div>

          {/* Заголовок */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Открой грани удовольствия с «Газ Алмаз»
            </span>
          </h1>

          {/* 🎁 Бейдж акции с иконкой /gifts.png */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xl font-bold text-primary-foreground bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/30 animate-pulse">
              <Image
                src="/gifts.webp"
                alt="Подарок"
                width={20}
                height={20}
                className="shrink-0"
                priority
              />
              Подарок каждому новому клиенту!
            </span>
          </div>

          {/* Подзаголовок */}
          <p className="text-base md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Веселящий газ премиум качества для легального развлекательного применения. Безопасность, чистота и
            незабываемые впечатления на ваших мероприятиях.
          </p>

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#products">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground text-xl px-8 py-6 group"
              >
                Каталог
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="tel:+74958683399">
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-8 py-6 border-primary/50 hover:bg-primary/10 bg-transparent text-foreground"
              >
                Связаться
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Индикатор прокрутки */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
