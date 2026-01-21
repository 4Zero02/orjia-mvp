import Link from "next/link"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Users } from "lucide-react"
import { getAtleticas } from "@/data/atleticas"

export default async function TeamsPage() {
    const atleticas = await getAtleticas();
    return (
        <main className="container mx-auto px-4 py-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Atléticas" }]} />

            <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <Users className="h-8 w-8 text-primary" />
                    <h1 className="text-4xl font-bold">Atléticas</h1>
                </div>
                <p className="text-muted-foreground text-lg">Conheça todas as atléticas universitárias participantes</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {atleticas.map((team) => (
                    <Link key={team.id} href={`/atleticas/${team.slug}`}>
                        <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                            <CardHeader>
                                <img src={team.logo || "/logos/liga.png"} alt={team.name} className="w-16 h-16 object-contain mb-4 rounded-full" />
                                <div className="absolute top-4 right-4 bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-semibold">
                                    {team.acronym}
                                </div>
                                <CardTitle className="text-lg">{team.name}</CardTitle>
                                <p className="text-sm text-muted-foreground">{team.acronym}</p>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </main>
    )
}
