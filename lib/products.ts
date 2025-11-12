export type Product = {
  slug: string
  title: string
  description: string
  // новая цена: при покупке
  priceBuy: number
  // новая цена: при обмене
  priceExchange: number
  image: string
  features?: string[]
}

export const products: Product[] = [
  {

    slug: "refill",
    title: "Refill",
    description: "N2O - пищевая закись азота, ГОСТ - 949-73, Сертификация - № РОСС RU.HX05.H00746",
    priceBuy: 14000,
    priceExchange: 8500,
    image: "/products/refill.png",
    features: ["Вес - 6,2 кг", "Ëмкость - 10 литров", "Изготовитель - MGS (Череповец)"]
  },
  {
    slug: "party",
    title: "Party",
    description: "N2O - пищевая закись азота, ГОСТ - 949-73, Сертификация - № РОСС RU.HX05.H00746",
    priceBuy: 8000,
    priceExchange: 6000,
    image: "/products/party.png",
    features: ["Вес - 2,8 кг", "Ëмкость - 5 литров", "Изготовитель - MGS (Череповец)"]

  },
  {
    slug: "premium",
    title: "Premium",
    description: "N2O - пищевая закись азота, ГОСТ - 949-73, Сертификация - № РОСС RU.HX05.H00746",
    priceBuy: 3200,
    priceExchange: 3000,
    image: "/products/premium.png",
    features: ["Вес - 650 г", "Ëмкость - 3,5 литра", "Изготовитель - MGS (Череповец)"]
  },
  {
    slug: "classic",
    title: "Classic",
    description: "N2O - пищевая закись азота, ГОСТ - 949-73, Сертификация - № РОСС RU.HX05.H00746",
    priceBuy: 5500,
    priceExchange: 4500,
    image: "/products/classic.png",
    features: ["Вес - 1,2 кг", "Ёмкость - 2 литра", "Изготовитель - MGS (Череповец)"]
  }
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
