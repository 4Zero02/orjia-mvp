import Link from "next/link"
import { Trophy } from "lucide-react"

export function Navbar() {
    return (
        <header className="border-b border-border bg-background sticky top-0 z-50">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                    <Trophy className="h-6 w-6 text-primary" />
                    <span>Liga das atléticas</span>
                </Link>

                <div className="flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link href="/eventos" className="text-sm font-medium hover:text-primary transition-colors">
                        Eventos
                    </Link>
                    <Link href="/atleticas" className="text-sm font-medium hover:text-primary transition-colors">
                        Atléticas
                    </Link>
                </div>
            </nav>
        </header>
    )
}
