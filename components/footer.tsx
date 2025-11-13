import { Sparkles } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: "О нас", href: "#about" },
      { label: "Продукты", href: "#products" },
      { label: "Контакты", href: "#contact" },
    ],
    legal: [
      { label: "Политика конфиденциальности", href: "#" },
      { label: "Условия использования", href: "#" },
      { label: "Сертификаты", href: "#" },
    ],
  }

  return (
    <footer className="bg-gradient-to-b from-muted/20 to-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-primary diamond-shimmer" />
              <span className="text-2xl font-bold font-[family-name:var(--font-heading)] bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                ГАЗ АЛМАЗ
              </span>
            </Link>
            <p className="text-base text-muted-foreground text-pretty leading-relaxed">
              Веселящий газ премиум качества для незабываемых впечатлений. Безопасность, чистота, удовольствие.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4">Компания</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <a
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold mb-4">Правовая информация</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <a
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-muted-foreground">
              © {currentYear} Газ Алмаз. Все права защищены.
            </p>
            <p className="text-base text-muted-foreground text-center">
              Продукция предназначена только для совершеннолетних. Используйте ответственно.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
