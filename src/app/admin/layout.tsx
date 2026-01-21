import "@/app/globals.css"
import type React from "react"
import Link from "next/link"
import { LayoutDashboard, Trophy, Calendar, Users, Gamepad2 } from "lucide-react"


export const metadata = {
    title: "Dashboard | LAUFAC",
    description: "Plataforma oficial da Liga das Atléticas da UFAC",
    openGraph: {
        title: "Dashboard | LAUFAC",
        description: "Plataforma oficial da Liga das Atléticas da UFAC",
        url: "https://orjia.com.br",
        siteName: "ORJIA | LAUFAC",
        type: "website",
    }
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-background">
            {/* Sidebar */}
            <aside className="w-64 bg-background border-r border-border flex flex-col">
                <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/admin"
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                            >
                                <LayoutDashboard className="w-5 h-5" />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/atleticas"
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                                <Users className="w-5 h-5" />
                                <span>Atléticas</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/eventos"
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                                <Calendar className="w-5 h-5" />
                                <span>Eventos</span>
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                href="/admin/partidas"
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                                <Gamepad2 className="w-5 h-5" />
                                <span>Partidas</span>
                            </Link>
                        </li> */}
                    </ul>
                </nav>

                <div className="p-4 border-t border-border">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        ← Voltar ao Site
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
        </div>
    )
}
