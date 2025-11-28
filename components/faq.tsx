"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

export function FAQ({ pageMode = "home" }: { pageMode?: "home" | "page" }) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "Как быстро осуществляется доставка?",
      answer:
        "Мы доставляем заказы от 30 минут по Москве и Московской области. Для других регионов сроки доставки уточняются индивидуально.",
    },
    {
      question: "Есть ли минимальный объем заказа?",
      answer:
        "Минимальный заказ составляет 1 баллон. Для оптовых заказов от 5 баллонов действуют специальные цены и условия.",
    },
    {
      question: "Нужен ли рецепт для покупки?",
      answer:
        "Нет, наша продукция предназначена для легального развлекательного применения и не требует рецепта. Продажа осуществляется только совершеннолетним.",
    },
    {
      question: "Какие гарантии качества вы предоставляете?",
      answer:
        "Весь наш газ имеет сертификаты качества и соответствует медицинским стандартам.",
    },
    {
      question: "Можно ли вернуть пустые баллоны?",
      answer:
        "Да, мы принимаем пустые баллоны обратно. Прайс в разделе 'Выкуп'.",
    },
    {
      question: "Какие способы оплаты доступны?",
      answer:
        "Мы принимаем оплату наличными, банковскими картами и безналичную оплату для юрлиц.",
    }
  ]

  return (
    <section
      id="faq"
      className={`py-24 ${
        pageMode === "page" ? "" : "bg-gradient-to-b from-background to-muted/20"
      }`}
    >
      <div className="container mx-auto px-4">

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ответы на самые популярные вопросы
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="glass-effect border-primary/20 overflow-hidden transition-all duration-300 hover:border-primary/40"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 group"
              >
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${
                    openIndexes.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndexes.includes(index)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
