import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Certificates } from "@/components/certificates"

export const metadata: Metadata = {
  title: "Сертификаты — ГАЗ АЛМАЗ",
  description:
    "Официальные сертификаты на пищевую закись азота и заводские баллоны. Безопасность и качество продукции Газ Алмаз подтверждены документально.",
  alternates: { canonical: "/certificates" },
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
