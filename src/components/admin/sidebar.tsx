"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Trophy, Users, CalendarDays, BarChart3 } from "lucide-react"

const links = [
    { href: "/admin", label: "Dashboard", icon: Home },
    { href: "/admin/torneios", label: "Torneios", icon: Trophy },
    { href: "/admin/partidas", label: "Partidas", icon: CalendarDays },
    { href: "/admin/atleticas", label: "Atléticas", icon: Users },
    { href: "/admin/rankings", label: "Rankings", icon: BarChart3 },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 bg-muted/30 border-r border-border flex flex-col">
            <div className="h-16 flex items-center justify-center font-semibold text-lg border-b">
                Liga das Atléticas
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {links.map(({ href, label, icon: Icon }) => (
                    <Link
                        key={href}
                        href={href}
                        className={cn(
                            "flex items-center gap-3 px-3 py-2 rounded-md transition",
                            pathname === href
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                        )}
                    >
                        <Icon className="w-5 h-5" />
                        {label}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}
