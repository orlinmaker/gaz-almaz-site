"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Search } from "lucide-react"

export function Certificates() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative py-16 md:py-24">
      <div className="grid gap-10 md:gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 items-start">
        {/* Текстовый блок */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Сертификат — гарантия вашей безопасности
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
            Веселящий газ безопасен только тогда, когда он поставляется проверенным и ответственным
            поставщиком. Компания «Газ Алмаз» работает исключительно с сертифицированной пищевой
            закисью азота и поставляет продукцию в оригинальных заводских баллонах. Мы не идём на
            компромиссы, когда речь идёт о вашем здоровье.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Почему «Газ Алмаз» — это доверие и качество
          </h2>

          <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Мы гарантируем подлинность, чистоту и безопасность каждого баллона.
              <br />
              <br />
              <span className="font-semibold text-foreground">
                Что вы получаете при заказе:
              </span>
            </p>

            <div>
              <p className="font-semibold text-foreground mb-1">— Прямые поставки от завода</p>
              <p>
                Мы работаем только с официальным производителем и закупаем продукцию напрямую. Никаких
                посредников и сомнительных источников.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-1">— Чистая пищевая закись азота</p>
              <p>
                Состав соответствует нормам пищевой промышленности: безопасное соотношение кислорода и
                азота, отсутствие посторонних примесей.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-1">— Оригинальные сертификаты</p>
              <p>
                Все документы передаются вам вместе с заказом — их привозит курьер. Сертификаты
                оформлены на газ и на ёмкости, в которых он поставляется.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-1">
                — Заводская пломба — знак надежности
              </p>
              <p>
                Каждый баллон опечатывается на производстве. Если пломба повреждена или сорвана — это
                прямой сигнал отказаться от покупки, поскольку ёмкость могла быть вскрыта или
                неправильно заправлена.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-1">
                Не рискуйте — выбирайте проверенного поставщика
              </p>
              <p>
                Наличие официальных документов — это гарантия того, что пищевая закись азота произведена
                и заправлена на заводе, а не в домашних или кустарных условиях. Заказывая в «Газ Алмаз»,
                вы защищаете себя от подделок и получаете продукт премиального качества с полной
                документацией.
              </p>
            </div>
          </div>
        </div>

        {/* Блок с сертификатом */}
        <div className="flex justify-center lg:justify-end">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative w-full max-w-md md:max-w-lg rounded-3xl overflow-hidden shadow-2xl ring-1 ring-primary/30 group bg-gradient-to-b from-background/80 to-background/40"
          >
            {/* Подсветка за картинкой */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative p-4 sm:p-6">
              <div className="relative w-full rounded-2xl overflow-hidden bg-background">
                <Image
                  src="/certificates/certificate.webp"
                  alt="Сертификат соответствия"
                  width={900}
                  height={1200}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 40vw"
                  priority
                />

                {/* Иконка лупы при наведении */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                      <Search className="w-5 h-5" />
                    </span>
                    <span className="hidden sm:inline text-sm font-medium text-primary-foreground">
                      Нажмите, чтобы увеличить
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Модальное окно с увеличенным изображением */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-2 sm:px-6"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            aria-label="Закрыть"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-primary transition-colors"
          >
            <X className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>

          {/* ВАЖНО: контейнер ограничен по высоте, картинка вписывается внутрь */}
          <div
            className="relative w-full max-w-5xl max-h-[92vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-4xl h-[92vh] max-h-[92vh] aspect-[3/4]">
              <Image
                src="/certificates/certificate.webp"
                alt="Сертификат соответствия — увеличенное изображение"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 70vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
