import { Card } from "@/components/ui/card"
import { AlertCircle, CheckCircle, Info, ShieldCheck } from "lucide-react"

export function Safety() {
  const safetyRules = [
    {
      icon: ShieldCheck,
      title: "Используйте ответственно",
      description: "Следуйте инструкциям и не превышайте рекомендованную дозировку",
    },
    {
      icon: CheckCircle,
      title: "Проверяйте качество",
      description: "Убедитесь, что баллон имеет все необходимые сертификаты",
    },
    {
      icon: Info,
      title: "Храните правильно",
      description: "Держите баллоны в прохладном месте вдали от источников тепла",
    },
    {
      icon: AlertCircle,
      title: "Не смешивайте",
      description: "Не употребляйте одновременно с алкоголем или другими веществами",
    },
  ]

  const instructions = [
    "Прочитайте инструкцию перед использованием",
    "Используйте только в хорошо проветриваемых помещениях",
    "Не используйте при наличии медицинских противопоказаний",
    "Храните в недоступном для детей месте",
    "При возникновении дискомфорта прекратите использование",
    "Утилизируйте пустые баллоны согласно инструкции",
  ]

  return (
    <section id="safety" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Безопасность и инструкции
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Ваша безопасность — наш приоритет. Пожалуйста, внимательно ознакомьтесь с правилами использования.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {safetyRules.map((rule, index) => {
            const Icon = rule.icon
            return (
              <Card
                key={index}
                className="glass-effect p-6 border-primary/20 hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-2xl bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-heading)]">{rule.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{rule.description}</p>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect p-8 md:p-12 border-primary/20">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-6 text-center">
              Инструкция по использованию
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {instructions.map((instruction, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold text-primary">{index + 1}</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{instruction}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm text-center text-muted-foreground">
                <strong className="text-foreground">Важно:</strong> Продукция предназначена только для совершеннолетних.
                Перед использованием проконсультируйтесь с врачом при наличии хронических заболеваний.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
