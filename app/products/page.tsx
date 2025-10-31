"use client"

import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/products"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Каталог продукции</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Card key={p.slug} className="overflow-hidden transition-shadow hover:shadow-lg">
            <div className="relative aspect-[4/3] bg-white">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
              />
            </div>

            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{p.description}</p>
                <div className="flex flex-col gap-1 text-sm">
                  <span className="font-medium">
                    Цена при покупке: {p.priceBuy.toLocaleString("ru-RU")} ₽
                  </span>
                  <span className="text-muted-foreground">
                    Цена при обмене: {p.priceExchange.toLocaleString("ru-RU")} ₽
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <Button asChild>
                  <Link href={`/products/${p.slug}`}>Подробнее</Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
