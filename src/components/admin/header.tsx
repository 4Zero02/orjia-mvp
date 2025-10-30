"use client"

import { ModeToggle } from "@/components/ui/mode-toggle"

export function Header() {
    return (
        <header className="h-16 border-b flex items-center justify-between px-6 bg-background/80 backdrop-blur-md">
            <h1 className="text-xl font-semibold">Painel Administrativo</h1>
            <ModeToggle />
        </header>
    )
}
