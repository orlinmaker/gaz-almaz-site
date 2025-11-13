"use client"

import { useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"

export function Certificates() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section id="certificates" className="py-16 md:py-24">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
          {/* ТЕКСТ СЛЕВА */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Сертификат — гарантия вашей безопасности
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              Веселящий газ безопасен только тогда, когда он поставляется проверенным и ответственным
              поставщиком. Компания&nbsp;«Газ Алмаз» работает исключительно с сертифицированной пищевой
              закисью азота и поставляет продукцию в оригинальных заводских баллонах. Мы не идём на
              компромиссы, когда речь идёт о вашем здоровье.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Почему «Газ Алмаз» — это доверие и качество
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Мы гарантируем подлинность, чистоту и безопасность каждого баллона. Что вы получаете при
              заказе:
            </p>

            <ul className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <li>
                <span className="font-semibold text-foreground">Прямые поставки от завода.</span>{" "}
                Мы работаем только с официальным производителем и закупаем продукцию напрямую. Никаких
                посредников и сомнительных источников.
              </li>

              <li>
                <span className="font-semibold text-foreground">Чистая пищевая закись азота.</span>{" "}
                Состав соответствует нормам пищевой промышленности: безопасное соотношение кислорода и
                азота, отсутствие посторонних примесей.
              </li>

              <li>
                <span className="font-semibold text-foreground">Оригинальные сертификаты.</span>{" "}
                Все документы передаются вам вместе с заказом — их привозит курьер. Сертификаты
                оформлены и на газ, и на ёмкости, в которых он поставляется.
              </li>

              <li>
                <span className="font-semibold text-foreground">Заводская пломба — знак надёжности.</span>{" "}
                Каждый баллон опечатывается на производстве. Если пломба повреждена или сорвана — это
                прямой сигнал отказаться от покупки, поскольку ёмкость могла быть вскрыта или
                неправильно заправлена.
              </li>
            </ul>

            <p className="text-lg md:text-xl text-foreground mt-8 font-semibold">
              Не рискуйте — выбирайте проверенного поставщика.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-3">
              Наличие официальных документов — это гарантия того, что пищевая закись азота произведена и
              заправлена на заводе, а не в домашних или кустарных условиях. Заказывая в&nbsp;«Газ Алмаз»,
              вы защищаете себя от подделок и получаете продукт премиального качества с полной
              документацией.
            </p>
          </div>

          {/* КАРТИНКА СПРАВА — БОЛЬШАЯ, БЕЗ РАМКИ */}
          <div className="w-full flex justify-center lg:justify-end">
            <div
              className="relative w-[420px] md:w-[520px] lg:w-[620px] cursor-pointer transition-transform duration-300 hover:scale-[1.02] group"
              onClick={() => setOpen(true)}
            >
              {/* Иконка лупы при наведении */}
              <div className="absolute top-3 right-3 bg-black/70 text-white p-2 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <Search className="w-5 h-5" />
              </div>

              <Image
                src="/certificates/certificate.webp"
                alt="Сертификат соответствия"
                width={2000}
                height={2600}
                className="w-full h-auto object-contain rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* МОДАЛКА С УВЕЛИЧЕННЫМ СЕРТИФИКАТОМ */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-[95vw] max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/certificates/certificate.webp"
              alt="Сертификат соответствия"
              width={2000}
              height={2600}
              className="w-auto h-auto max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
              priority
            />

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 bg-black/80 text-white px-3 py-2 rounded-full text-2xl leading-none hover:bg-black"
              aria-label="Закрыть"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </>
  )
}
