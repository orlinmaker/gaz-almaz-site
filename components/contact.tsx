"use client"

import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      value: "+7 (495) 868-33-99",
      link: "tel:+74958683399",
    },
    {
      icon: Mail,
      title: "Email",
      value: "gaz.almaz1@yandex.ru",
      link: "mailto:gaz.almaz1@yandex.ru",
    },
    {
      icon: MapPin,
      title: "Адрес",
      value: "Москва, Россия",
      link: "https://yandex.com/maps/geo/moskva/53000094/?ll=37.385272%2C55.584227&z=9.56",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Готовы сделать заказ или есть вопросы? Мы всегда на связи и рады помочь вам.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <Card className="glass-effect p-8 border-primary/20">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-6">Контактная информация</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    <div className="p-3 rounded-full bg-primary/20">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </Card>

          <Card className="glass-effect p-8 border-primary/20">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-6">Часто задаваемые вопросы</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">Как быстро доставка?</h4>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Мы доставляем заказы от 30 минут по Москве и области.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Есть ли минимальный заказ?</h4>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Минимальный заказ — 1 баллон. Для оптовых заказов от 5 баллонов действуют специальные цены.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Нужен ли рецепт?</h4>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Нет, наша продукция предназначена для легального развлекательного применения.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
