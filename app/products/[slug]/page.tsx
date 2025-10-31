import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getProductBySlug, products } from "@/lib/products"
import { DetailPage } from "@/components/detail-page"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: "Товар не найден — ГАЗ АЛМАЗ" }

  return {
    title: `${product.title} — ГАЗ АЛМАЗ`,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.title,
      description: product.description,
      images: [{ url: product.image }],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  return (
    <>
      <DetailPage
        title={product.title}
        description={product.description}
        // передаём НОВЫЕ поля
        priceBuy={product.priceBuy}
        priceExchange={product.priceExchange}
        image={product.image}
        features={product.features}
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Каталог", href: "/#products" },
        ]}
        backHref="/#products"
        backLabel="Назад в каталог"
        orderType="product"
        itemId={product.slug}
      />

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.title,
            description: product.description,
            image: product.image,
            offers: [
              {
                "@type": "Offer",
                price: product.priceBuy,
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                price: product.priceExchange,
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock",
              },
            ],
          }),
        }}
      />
    </>
  )
}
