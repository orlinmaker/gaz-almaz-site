import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getProductBySlug, products } from "@/lib/products"
import { Button } from "@/components/ui/button"

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return { title: "Товар не найден — GAZ ALMAZ" }

  return {
    title: `${product.title} — GAZ ALMAZ`,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.title,
      description: product.description,
      images: [{ url: product.image }]
    }
  }
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  return (
    <div className="container mx-auto py-10">
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:underline">Главная</Link>
        {" / "}
        <Link href="/products" className="hover:underline">Каталог</Link>
        {" / "}
        <span className="text-foreground">{product!.title}</span>
      </nav>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-[4/3] rounded-xl bg-white">
          <Image
            src={product!.image}
            alt={product!.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-3">{product!.title}</h1>
          <p className="text-base text-muted-foreground">{product!.description}</p>

          <div className="mt-6 text-2xl font-semibold">
            {product!.price.toLocaleString("ru-RU")} ₽
          </div>

          {product!.features?.length ? (
            <ul className="mt-6 space-y-2 list-disc list-inside">
              {product!.features.map((f) => (
                <li key={f} className="text-sm">{f}</li>
              ))}
            </ul>
          ) : null}

          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link href={`/order?product=${product!.slug}`}>Заказать</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/products">Назад в каталог</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
