export type Product = {
  slug: string
  title: string
  description: string
  price: number
  image: string
  features?: string[]
}

export const products: Product[] = [
  {
    slug: "classic",
    title: "Classic",
    description: "Базовый комплект для небольших мероприятий и домашнего использования.",
    price: 1990,
    image: "/products/classic.png",
    features: ["Лёгкий старт", "Оптимальная цена", "Сертифицировано"]
  },
  {
    slug: "premium",
    title: "Premium",
    description: "Повышенная чистота и стабильный поток для требовательных задач.",
    price: 5490,
    image: "/products/premium.png",
    features: ["Высшая чистота", "Совместимость с насадками", "Гарантия качества"]
  },
  {
    slug: "party",
    title: "Party",
    description: "Решение для вечеринок и ивентов — хватит на долгую сессию.",
    price: 6990,
    image: "/products/party.png",
    features: ["Увеличенный объём", "Удобная транспортировка", "Надёжные соединения"]
  },
  {
    slug: "refill",
    title: "Refill",
    description: "Услуга заправки — экономно и экологично.",
    price: 990,
    image: "/products/refill.png",
    features: ["Быстро", "Выезд/приём", "Выгодно по подписке"]
  }
]

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug)
}
