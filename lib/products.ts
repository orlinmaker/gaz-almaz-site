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
    priceBuy: 13000,
    priceExchange: 7500,
    image: "/products/refill.png",
    features: ["Вес - 6,2 кг", "Ëмкость - 10 литров", "Изготовитель - MGS (Череповец)"]
  },
  {
    slug: "party",
    title: "Party",
    description: "N2O - пищевая закись азота, ГОСТ - 949-73, Сертификация - № РОСС RU.HX05.H00746",
    priceBuy: 7000,
    priceExchange: 5000,
    image: "/products/party.png",
    features: ["Вес - 2,8 кг", "Ëмкость - 5 литров", "Изготовитель - MGS (Череповец)"]

  },
  {
    slug: "premium",
    title: "Premium",
    description: "N2O - пищевая закись азота, ГОСТ - 949-73, Сертификация - № РОСС RU.HX05.H00746",
    priceBuy: 2700,
    priceExchange: 2500,
    image: "/products/premium.png",
    features: ["Вес - 650 г", "Ëмкость - 650 г", "Изготовитель - MGS (Череповец)"]
  },
  {
    slug: "classic",
    title: "Classic",
    description: "N2O - пищевая закись азота, ГОСТ - 949-73, Сертификация - № РОСС RU.HX05.H00746",
    priceBuy: 5000,
    priceExchange: 4000,
    image: "/products/classic.png",
    features: ["Вес - 1,2 кг", "Ёмкость - 2 литра", "Изготовитель - MGS (Череповец)"]
  }
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
