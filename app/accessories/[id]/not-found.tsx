import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-3xl font-bold mb-2">Аксессуар не найден</h1>
      <p className="text-muted-foreground mb-6">Возможно, он был переименован или удалён.</p>
      <Button asChild>
        <Link href="/accessories">Вернуться в каталог аксессуаров</Link>
      </Button>
    </div>
  )
}
