"use client"

import Link from "next/link"
import Image from "next/image"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export function Header() {

    return (
        <header className="sticky top-0 z-50 bg-green-700/70 backdrop-blur-sm border-b border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
            <div className="mx-auto max-w-7xl h-20 px-4 grid grid-cols-[1fr_auto_1fr] items-center">
                <Link href="/" className="justify-self-start flex items-center gap-2">
                    <Image src="/logos/orjia-2022.png" alt="Liga" width={80} height={80} priority />
                </Link>
                <NavigationMenu>
                    <NavigationMenuList className="justify-self-center">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/eventos">Eventos</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/torneios">Torneios</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem >
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/atleticas">Atléticas</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/documentacao">Documentação</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}
