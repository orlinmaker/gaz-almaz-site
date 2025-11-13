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
    name: "Шарики GEMAR",
    description: "",
    priceLabel: "5 шт. - 200 ₽, 25 шт. - 700 ₽",
    image: "/accessories/balloons.webp",
    features: ["Латекс", "Разные цвета", "Размер (Д × Ш × В) — 30 см х 20 см х 2 см"]
  },
  {
    id: "nozzles",
    name: "Заглушка для баллонов",
    description: "",
    priceLabel: "2 000 ₽",
    image: "/accessories/nozzles.webp",
    features: ["Вес — 61 (г)", "Материал корпуса — алюминий"]
  },
  {
    id: "stand",
    name: "Подставка для баллона",
    description: "",
    priceLabel: "1 500 ₽",
    image: "/accessories/stand.webp",
    features: ["Вес — 0.8 (кг)", "Диаметр, см — 18,5", "Материал — резина"]
  }
]

export function getAccessoryById(id: string) {
  return accessories.find(a => a.id === id)
}
