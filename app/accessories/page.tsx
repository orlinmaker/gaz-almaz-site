"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { accessories } from "@/lib/accessories"

export default function AccessoriesPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Аксессуары</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {accessories.map((a) => (
          <Link key={a.id} href={`/accessories/${a.id}`} className="group block">
            <Card className="overflow-hidden transition-shadow group-hover:shadow-lg">
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src={a.image}
                  alt={a.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold group-hover:underline">{a.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{a.description}</p>
                <div className="mt-3 font-medium">{a.priceLabel}</div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
