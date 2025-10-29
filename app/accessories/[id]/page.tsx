import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { accessories, getAccessoryById } from "@/lib/accessories"
import { Button } from "@/components/ui/button"

type Props = { params: { id: string } }

export async function generateStaticParams() {
  return accessories.map((a) => ({ id: a.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const acc = getAccessoryById(params.id)
  if (!acc) return { title: "Аксессуар не найден — GAZ ALMAZ" }

  return {
    title: `${acc.name} — GAZ ALMAZ`,
    description: acc.description,
    alternates: { canonical: `/accessories/${acc.image}` },
    openGraph: {
      title: acc.name,
      description: acc.description,
      images: [{ url: acc.image }]
    }
  }
}

export default function AccessoryPage({ params }: Props) {
  const acc = getAccessoryById(params.id)
  if (!acc) notFound()

  return (
    <div className="container mx-auto py-10">
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:underline">Главная</Link>
        {" / "}
        <Link href="/accessories" className="hover:underline">Аксессуары</Link>
        {" / "}
        <span className="text-foreground">{acc!.name}</span>
      </nav>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-[4/3] rounded-xl bg-white">
          <Image
            src={acc!.image}
            alt={acc!.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-3">{acc!.name}</h1>
          <p className="text-base text-muted-foreground">{acc!.description}</p>

          <div className="mt-6 text-xl font-semibold">{acc!.priceLabel}</div>

          {acc!.features?.length ? (
            <ul className="mt-6 space-y-2 list-disc list-inside">
              {acc!.features.map((f) => (
                <li key={f} className="text-sm">{f}</li>
              ))}
            </ul>
          ) : null}

          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link href={`/order?accessory=${acc!.id}`}>Заказать</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/accessories">Назад к аксессуарам</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
