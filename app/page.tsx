import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { BuyProducts } from "@/components/buy-products"
import { Poppers } from "@/components/poppers"
import { Accessories } from "@/components/accessories"
import { Deals } from "@/components/deals"
import { About } from "@/components/about"
import { Safety } from "@/components/safety"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
