import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Products } from "@/components/products"
import { BuyProducts } from "@/components/buy-products"

export const metadata: Metadata = {
  title: "Каталог — ГАЗ АЛМАЗ",
  description: "Каталог баллонов веселящего газа. Продажа, обмен, выгодные цены.",
  alternates: { canonical: "/#products" },
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* отступы такие же, как на попперсах */}
      <div className="container mx-auto px-4 pt-8 pb-24">
        <Products />
        <BuyProducts />
      </div>

      <Footer />
    </main>
  )
}
