export type Popper = {
  id: string
  name: string
  description: string
  priceLabel: string
  image: string
  features: string[]
}

export const poppers: Popper[] = [
  {
    id: "alpha",
    name: "Alpha Popper",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    priceLabel: "от 890 ₽",
    image: "/poppers/alpha.jpg",
    features: ["Высокое качество компонентов", "Длительный эффект действия", "Сертифицировано и безопасно"],
  },
  {
    id: "beta",
    name: "Beta Popper",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    priceLabel: "от 1290 ₽",
    image: "/poppers/beta.jpg",
    features: ["Премиум формула состава", "Быстрое начало действия", "Оптимальная концентрация"],
  },
  {
    id: "gamma",
    name: "Gamma Popper",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
    priceLabel: "от 1590 ₽",
    image: "/poppers/gamma.jpg",
    features: ["Максимальная интенсивность", "Улучшенная формула 2024", "Экономичная упаковка"],
  },
]

export function getPopperById(id: string) {
  return poppers.find((p) => p.id === id)
}
