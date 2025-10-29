import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PoppersCatalog } from "@/components/poppers-catalog"

export const metadata: Metadata = {
  title: "Попперсы — ГАЗ АЛМАЗ",
  description: "Широкий выбор попперсов высокого качества. Быстрая доставка, гарантия качества.",
  alternates: { canonical: "/poppers" },
}

export default function PoppersPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Попперсы
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Качественные попперсы для вашего удовольствия
          </p>
        </div>

        <PoppersCatalog />
      </div>

      <Footer />
    </main>
  )
}
