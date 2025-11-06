"use client"

import { Card } from "@/components/ui/card"
import { Shield, Award, Heart, Sparkles } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Shield,
      title: "Безопасность",
      description: "Строгое соблюдение всех регламентов и стандартов качества",
    },
    {
      icon: Award,
      title: "Премиум качество",
      description: "Только сертифицированные медицинские газы высшей чистоты",
    },
    {
      icon: Heart,
      title: "Удовольствие",
      description: "Незабываемые впечатления и яркие эмоции на ваших мероприятиях",
    },
    {
      icon: Sparkles,
      title: "Чистота",
      description: "Кристально чистый продукт без примесей и добавок",
    },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Газ Алмаз — это сочетание безупречного качества, безопасности и заботы о ваших впечатлениях. Мы предлагаем
            только лучшие веселящие газы для вашего комфорта и удовольствия.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="glass-effect p-6 hover:scale-105 transition-transform duration-300 border-primary/20"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-2xl bg-primary/10 glow-effect">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-heading)]">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto glass-effect rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-4 text-balance">
                О компании Газ Алмаз
              </h3>
              <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">
                Мы специализируемся на поставке веселящих газов премиум качества для легального развлекательного
                применения. Наша миссия — обеспечить безопасность, чистоту и незабываемые впечатления на ваших
                мероприятиях.
              </p>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Каждый баллон проходит строгий контроль качества и соответствует всем необходимым стандартам и
                регламентам. Мы гордимся нашей репутацией и доверием клиентов.
              </p>
            </div>

            <div className="relative">
              {/* Заменён линк на новое изображение */}
              <img
                src="/gas-balloon-with-logo.png"
                alt="Газ Алмаз — баллон и шар с логотипом"
                className="w-full h-auto rounded-2xl shadow-lg shadow-primary/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
