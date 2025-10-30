import "@/app/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Liga das Atléticas",
    description: "Painel administrativo da liga universitária",
};

export default function RootLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body className="bg-background text-foreground">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
