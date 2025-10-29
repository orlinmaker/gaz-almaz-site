import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Home, Sparkles } from "lucide-react"

export default function PopperNotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-24 md:py-32 flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md">
          <div className="text-6xl font-bold text-primary">404</div>
          <h1 className="text-3xl font-bold text-foreground">Поппер не найден</h1>
          <p className="text-muted-foreground">К сожалению, запрашиваемый поппер не существует или был удалён.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild variant="default" size="lg">
              <Link href="/poppers">
                <Sparkles className="w-5 h-5 mr-2" />К попперсам
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                На главную
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
