import "@/app/globals.css";
import { Header } from "@/components/header";

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
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
