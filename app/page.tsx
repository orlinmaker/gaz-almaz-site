import dynamic from "next/dynamic"

import { Hero } from "@/components/hero"
import { BuyProducts } from "@/components/buy-products"
import { Poppers } from "@/components/poppers"
import { Accessories } from "@/components/accessories"
import { About } from "@/components/about"
import { Safety } from "@/components/safety"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Акции и каталог грузим лениво на клиенте, чтобы не мешать LCP Hero
const Deals = dynamic(() => import("@/components/deals").then((m) => m.Deals), {
  ssr: false,
  loading: () => (
    <section id="deals" className="py-24" />
  ),
})

const Products = dynamic(() => import("@/components/products").then((m) => m.Products), {
  ssr: false,
  loading: () => (
    <section id="products" className="py-24" />
  ),
})


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Deals />
      <Products />
      <BuyProducts />
      <Accessories />
      <Poppers />
      <About />
      <Safety />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
