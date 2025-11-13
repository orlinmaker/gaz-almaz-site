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
    name: "Iron Fist 24 ml",
    description:
      "Большой флакончик «Железного кулака». Попперс из Люксембурга на основе изоамилнитрита обладает мощной силой и способен в считанные мгновенья расслабить не только ваше сознание, но и ваши мышцы",
    priceLabel: "1 899 ₽",
    image: "/poppers/alpha.png",
    features: ["Страна: Люксембург", "Состав: Изоамилнитрит", "Сила: Мощный", "Объём: 24 ml"],
  },
  {
    id: "beta",
    name: "Blue Boy",
    description:
      "Перед вами один из самых «старых» канадских ароматов – мощный, освежающий Blue Boy. Дерзкая и эффективная формула на основе пентилнитрита – средство для вашего релакса.",
    priceLabel: "899 ₽",
    image: "/poppers/beta.png",
    features: ["Страна: Канада", "Состав: Пентилнитрит", "Сила: Мощный", "Объём: 10 ml"],
  },
  {
    id: "gamma",
    name: "Bolt",
    description:
      "Его ароматные пары способны зарядить вас мощной энергией, пробудить самые потаённые желания и подарить ни с чем не сравнимое удовольствие. И всё, что от вас требуется – один глубокий вдох!",
    priceLabel: "949 ₽",
    image: "/poppers/gamma.png",
    features: ["Страна: США", "Состав: Изобутилнитрит", "Сила: Мощный", "Объём: 10 ml"],
  },
]

export function getPopperById(id: string) {
  return poppers.find((p) => p.id === id)
}
