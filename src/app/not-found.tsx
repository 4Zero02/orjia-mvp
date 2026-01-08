import { Button } from "@/components/ui/button";
import Link from "next/link"


export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-10 space-y-4">
            <h1 className="text-4xl font-bold mt-9 text-6xl">Página não encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <Link href="/">
                <Button className="cursor-pointer">
                    Voltar para a página inicial
                </Button>
            </Link>
        </div>
    );
}
