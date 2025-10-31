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
    description: "Шарики торговой марки GEMAR",
    priceLabel: "5 шт. - 700 ₽, 25 шт. - 1500 ₽",
    image: "/accessories/balloons.png",
    features: ["Латекс", "Разные цвета", "Размер (Д × Ш × В) — 30 см х 20 см х 2 см"]
  },
  {
    id: "nozzles",
    name: "Заглушка для баллонов",
    description: "Совместимы со всеми моделями",
    priceLabel: "7000 ₽",
    image: "/accessories/nozzles.png",
    features: ["Вес — 61 (г)", "Материал корпуса — алюминий"]
  },
  {
    id: "stand",
    name: "Подставка для баллона",
    description: "Стойка для безопасной фиксации баллона.",
    priceLabel: "1500 ₽",
    image: "/accessories/stand.png",
    features: ["Вес — 0.8 (кг)", "Диаметр, см — 18,5", "Материал — резина"]
  }
]

export function getAccessoryById(id: string) {
  return accessories.find(a => a.id === id)
}
