import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accessories } from "@/components/accessories"

export const metadata: Metadata = {
  title: "Аксессуары — ГАЗ АЛМАЗ",
  description: "Шарики, насадки, комплектующие и дополнительные аксессуары для веселящего газа.",
  alternates: { canonical: "/#accessories" },
}

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* такой же контейнер, как на /products и /poppers */}
      <div className="container mx-auto px-4 pt-8 pb-24">
        <Accessories />
      </div>

      <Footer />
    </main>
  )
}
