import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { accessories, getAccessoryById } from "@/lib/accessories"
import { DetailPage } from "@/components/detail-page"
import { Home, Wrench } from "lucide-react"

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  return accessories.map((a) => ({ id: a.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const acc = getAccessoryById(id)
  if (!acc) return { title: "Аксессуар не найден — ГАЗ АЛМАЗ" }

  return {
    title: `${acc.name} — ГАЗ АЛМАЗ`,
    description: acc.description,
    alternates: { canonical: `/accessories/${acc.id}` },
    openGraph: {
      title: acc.name,
      description: acc.description,
      images: [{ url: acc.image }],
    },
  }
}

export default async function AccessoryPage({ params }: Props) {
  const { id } = await params
  const acc = getAccessoryById(id)
  if (!acc) notFound()

  return (
    <>
      <DetailPage
        title={acc.name}
        description={acc.description}
        priceLabel={acc.priceLabel}
        image={acc.image}
        features={acc.features}
        breadcrumbs={[
          { label: "Главная", href: "/", icon: <Home className="w-4 h-4" /> },
          { label: "Аксессуары", href: "/#accessories", icon: <Wrench className="w-4 h-4" /> },
        ]}
        backHref="/#accessories"
        backLabel="Назад к аксессуарам"
        orderType="accessory"
        itemId={acc.id}
      />

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: acc.name,
            description: acc.description,
            image: acc.image,
            offers: {
              "@type": "Offer",
              price: acc.priceLabel,
              priceCurrency: "RUB",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </>
  )
}
