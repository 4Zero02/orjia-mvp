import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { getEventBySlug } from "@/data/events"
import { getEventRanking } from "@/data/eventResults"

type pageProps = {
    params: {
        eventoSlug: string
    }
}

export default async function EventRankingPage({ params }: pageProps) {
    const { eventoSlug } = await params
    const event = await getEventBySlug(eventoSlug)
    if (!event) {
        notFound()
    }

    const eventRanking = await getEventRanking(event.id)

    return (
        <main className="container mx-auto px-4 py-8">
            <Button asChild variant="ghost" className="mb-6 hover:bg-muted hover:text-foreground">
                <Link href={`/eventos/${event.slug}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar para Evento
                </Link>
            </Button>

            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <Trophy className="h-8 w-8 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Ranking do Torneio</h1>
                </div>
                <p className="text-lg text-muted-foreground">Classificação geral do Campeonato Nacional 2025</p>
            </div>

            <div className="mb-8 grid gap-4 md:grid-cols-3">
                {eventRanking.slice(0, 3).map((teamRank) => (
                    <Link key={teamRank.position} href={`/atleticas/${teamRank.atletica.id}`}>
                        <Card
                            key={teamRank.position}
                            className={`relative overflow-hidden bg-card transition-shadow hover:shadow-md ${teamRank.position === 1
                                ? "border-[#F2C94C] border-2"
                                : teamRank.position === 3
                                    ? "border-[#B5521E] border-2"
                                    : "border-border"
                                }`}>
                            <div className="p-6">
                                <div className="mb-4 flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        {teamRank.position === 1 && <Trophy className="h-6 w-6 text-[#F2C94C]" />}
                                        {teamRank.position === 2 && <Medal className="h-6 w-6 text-muted-foreground" />}
                                        {teamRank.position === 3 && <Medal className="h-6 w-6 text-[#B5521E]" />}
                                        <span className="text-2xl font-bold text-foreground">#{teamRank.position}</span>
                                    </div>
                                    <img
                                        src={teamRank.atletica.logo || "logos/liga.png"}
                                        alt={teamRank.atletica.name}
                                        className="h-12 w-12 rounded-full border-2 border-border"
                                    />
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-balance text-foreground">{teamRank.atletica.name}</h3>
                                <div className="space-y-1">
                                    <p className="text-3xl font-bold text-primary">{teamRank.points}</p>
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>

            <Card className="overflow-hidden bg-card border-border">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b border-border bg-muted">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Posição</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Time</th>
                                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Pontos</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {eventRanking.map((teamRank) => (
                                <tr key={teamRank.position} className="transition-colors hover:bg-muted/50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${teamRank.position === 1
                                                    ? "bg-[#F2C94C] text-[#0E0E0E]"
                                                    : teamRank.position === 2
                                                        ? "bg-muted text-[#0E0E0E] border-2 border-border"
                                                        : teamRank.position === 3
                                                            ? "bg-[#B5521E] text-white"
                                                            : "bg-muted text-muted-foreground"
                                                    }`}>
                                                {teamRank.position}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link
                                            href={`/atleticas/${teamRank.atletica.id}`}
                                            className="flex items-center gap-3 hover:text-primary transition-colors">
                                            <img
                                                src={teamRank.atletica.logo || "/placeholder.svg"}
                                                alt={teamRank.atletica.name}
                                                className="h-10 w-10 rounded-full border-2 border-border" />
                                            <span className="font-medium text-foreground">{teamRank.atletica.name}</span>
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <span className="text-xl font-bold text-foreground">{teamRank.points.toLocaleString()}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </main>
    )
}
