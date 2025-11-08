import "@/app/globals.css"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

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

export default function RootLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <body>
                <SidebarProvider
                    style={
                        {
                            "--sidebar-width": "calc(var(--spacing) * 72)",
                            "--header-height": "calc(var(--spacing) * 12)",
                        } as React.CSSProperties
                    }
                >
                    <AppSidebar variant="inset" />
                    <SidebarInset>
                        <SiteHeader />
                        {children}
                    </SidebarInset>
                </SidebarProvider>
            </body>
        </html>
    )
}
