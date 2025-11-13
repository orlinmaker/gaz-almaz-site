import { Card } from "@/components/ui/card"
import { PartyPopper, Home, Users, Music } from "lucide-react"

export function Applications() {
  const applications = [
    {
      icon: PartyPopper,
      title: "Мероприятия",
      description: "Идеально для вечеринок, праздников и корпоративов",
      image: "/party-event-with-people-celebrating-and-colorful-l.jpg",
    },
    {
      icon: Home,
      title: "Домашние вечеринки",
      description: "Создайте незабываемую атмосферу в кругу друзей",
      image: "/cozy-home-party-with-friends-relaxing-and-enjoying.jpg",
    },
    {
      icon: Users,
      title: "Chill-сессии",
      description: "Расслабьтесь и насладитесь моментом с близкими",
      image: "/friends-chilling-together-in-relaxed-atmosphere.jpg",
    },
    {
      icon: Music,
      title: "Музыкальные фестивали",
      description: "Усильте впечатления от любимой музыки",
      image: "/music-festival-crowd-enjoying-concert-with-lights.jpg",
    },
  ]

  return (
    <section id="applications" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Где использовать
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Газ Алмаз подходит для любых мероприятий, где вы хотите создать особую атмосферу и подарить незабываемые
            впечатления.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {applications.map((app, index) => {
            const Icon = app.icon
            return (
              <Card
                key={index}
                className="glass-effect overflow-hidden hover:scale-105 transition-transform duration-300 border-primary/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={app.image || "/placeholder.svg"} alt={app.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute bottom-4 left-4 p-3 rounded-full bg-primary/90 glow-effect">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-3">{app.title}</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{app.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
