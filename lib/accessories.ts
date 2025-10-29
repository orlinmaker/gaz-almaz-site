export type Accessory = {
  id: string
  name: string
  description: string
  priceLabel: string
  image: string
  features?: string[]
}

export const accessories: Accessory[] = [
  {
    id: "balloons",
    name: "Шарики",
    description: "Прочные латексные, подходят для ивентов и вечеринок.",
    priceLabel: "от 350 ₽",
    image: "/accessories/balloons.png",
    features: ["Латекс", "Разные цвета", "Совместимы с гелием"]
  },
  {
    id: "nozzles",
    name: "Насадки на баллон",
    description: "Совместимы с моделями Diamond 1L / 5L.",
    priceLabel: "от 490 ₽",
    image: "/accessories/nozzles.png",
    features: ["Быстрая смена", "Надёжная фиксация"]
  },
  {
    id: "stand",
    name: "Стойка",
    description: "Удобная стойка для безопасной фиксации баллона.",
    priceLabel: "от 1 990 ₽",
    image: "/accessories/stand.png",
    features: ["Устойчивая база", "Компактное хранение"]
  }
]

export function getAccessoryById(id: string) {
  return accessories.find(a => a.id === id)
}
