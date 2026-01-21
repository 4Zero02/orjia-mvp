import "@/app/globals.css"

export const metadata = {
    title: "Login | LAUFAC",
    description: "Plataforma oficial da Liga das Atléticas da UFAC",
    openGraph: {
        title: "Login | LAUFAC",
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
}: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    )
}
