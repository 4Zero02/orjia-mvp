// app/layout.tsx
import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { Navbar } from "@/components/navbar";

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
