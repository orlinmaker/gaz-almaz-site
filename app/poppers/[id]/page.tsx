import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { poppers, getPopperById } from "@/lib/poppers"
import { DetailPage } from "@/components/detail-page"
import { Home, Sparkles } from "lucide-react"

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  return poppers.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const popper = getPopperById(id)
  if (!popper) return { title: "Поппер не найден — ГАЗ АЛМАЗ" }

  return {
    title: `${popper.name} — ГАЗ АЛМАЗ`,
    description: popper.description,
    alternates: { canonical: `/poppers/${popper.id}` },
    openGraph: {
      title: popper.name,
      description: popper.description,
      images: [{ url: popper.image }],
    },
  }
}

export default async function PopperPage({ params }: Props) {
  const { id } = await params
  const popper = getPopperById(id)
  if (!popper) notFound()

  return (
    <>
      <DetailPage
        title={popper.name}
        description={popper.description}
        priceLabel={popper.priceLabel}
        image={popper.image}
        features={popper.features}
        breadcrumbs={[
          { label: "Главная", href: "/", icon: <Home className="w-4 h-4" /> },
          { label: "Попперсы", href: "/poppers", icon: <Sparkles className="w-4 h-4" /> },
        ]}
        backHref="/poppers"
        backLabel="Назад к попперсам"
        orderType="poppers"
        itemId={popper.id}
      />

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: popper.name,
            description: popper.description,
            image: popper.image,
            offers: {
              "@type": "Offer",
              price: popper.priceLabel,
              priceCurrency: "RUB",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </>
  )
}
