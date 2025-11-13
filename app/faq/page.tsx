import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQ } from "@/components/faq"

export const metadata: Metadata = {
  title: "Часто задаваемые вопросы — ГАЗ АЛМАЗ",
  description: "Ответы на популярные вопросы о доставке, оплате, качестве и условиях заказа.",
  alternates: { canonical: "/#faq" },
}

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Такой же отступ */}
      <div className="container mx-auto px-4 pt-8 pb-24">
        <FAQ pageMode="page"/>
      </div>

      <Footer />
    </main>
  )
}
