import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Certificates } from "@/components/certificates"

export const metadata: Metadata = {
  title: "Сертификат — гарантия вашей безопасности — ГАЗ АЛМАЗ",
  description:
    "Газ Алмаз работает только с сертифицированной пищевой закисью азота и оригинальными заводскими баллонами. Узнайте подробнее о сертификатах и гарантиях качества.",
  alternates: {
    canonical: "/certificates",
  },
}

export default function CertificatesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 pt-8 pb-24">
        <Certificates />
      </div>

      <Footer />
    </main>
  )
}
