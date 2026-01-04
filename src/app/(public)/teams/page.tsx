import Link from "next/link"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { teams } from "@/lib/mock-data"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Users } from "lucide-react"

export default function TeamsPage() {
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
                {teams.map((team) => (
                    <Link key={team.id} href={`/teams/${team.id}`}>
                        <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                            <CardHeader>
                                <img src={team.logo || "/logos/liga.png"} alt={team.name} className="w-16 h-16 object-contain mb-4" />
                                <div className="absolute top-4 right-4 bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-semibold">
                                    {team.shortName}
                                </div>
                                <CardTitle className="text-lg">{team.name}</CardTitle>
                                <p className="text-sm text-muted-foreground">{team.shortName}</p>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </main>
    )
}
