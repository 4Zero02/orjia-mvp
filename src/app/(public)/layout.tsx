import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Navbar } from "@/components/navbar"
import "../globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
export const metadata = {
  title: "ORJIA | LAUFAC",
  description: "Plataforma oficial da Liga das Atléticas da UFAC",
  openGraph: {
    title: "ORJIA | LAUFAC",
    description: "Plataforma oficial da Liga das Atléticas da UFAC",
    url: "https://orjia.com.br",
    siteName: "ORJIA | LAUFAC",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
