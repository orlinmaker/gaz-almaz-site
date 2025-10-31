import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Poppers } from "@/components/poppers"

export const metadata: Metadata = {
  title: "Попперсы — ГАЗ АЛМАЗ",
  description: "Широкий выбор попперсов высокого качества. Быстрая доставка, гарантия качества.",
  alternates: { canonical: "/#poppers" },
}

export default function PoppersPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* уменьшаем отступ сверху */}
      <div className="container mx-auto px-4 pt-8 pb-24">
        <Poppers />
      </div>

      <Footer />
    </main>
  )
}
