import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StatusBadge } from "@/components/status-badge"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Trophy, Calendar } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getTournamentById } from "@/data/tournaments"
import { getEventById } from "@/data/events"
import { getMatchesByTournament } from "@/data/matches"
import { getTournamentResultsByTournament } from "@/data/tournamentResult"

type TournamentDetailPageProps = {
    params: {
        eventoId: string
        torneioId: string
    }
}

export default async function TournamentDetailPage({ params }: TournamentDetailPageProps) {
    const { torneioId } = await params
    const tournament = await getTournamentById(parseInt(torneioId))

    if (!tournament) {
        notFound()
    }

    const event = await getEventById(tournament.eventId)
    const matches = await getMatchesByTournament(tournament.id)
    const ranking = await getTournamentResultsByTournament(tournament.id)

    if (!event) {
        notFound()
    }

    // Group matches by round
    const matchesByRound = matches.reduce(
        (acc, match) => {
            if (!acc[match.round]) {
                acc[match.round] = []
            }
            acc[match.round].push(match)
            return acc
        },
        {} as Record<string, typeof matches>,
    )

    return (
        <main className="container mx-auto px-4 py-8">
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Eventos", href: "/eventos" },
                    { label: event.name, href: `/eventos/${event.id}` },
                    { label: tournament.name },
                ]}
            />

            {/* Tournament Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30">Modalidade</Badge>
                    <StatusBadge status={tournament.status} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-3">{tournament.name}</h1>
                <p className="text-muted-foreground">
                    <Link href={`/eventos/${event.id}`} className="hover:text-primary transition-colors">
                        {event.name}
                    </Link>
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Matches */}
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-primary" />
                                <CardTitle>Partidas</CardTitle>
                            </div>
                            <CardDescription>Histórico e agenda de jogos</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {Object.entries(matchesByRound).map(([round, roundMatches]) => (
                                    <div key={round}>
                                        <h3 className="font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                                            {round}
                                        </h3>
                                        <div className="space-y-3">
                                            {roundMatches.map((match) => (
                                                <div key={match.id} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                                                    <div className="flex items-center gap-4 flex-1">
                                                        <div className="flex items-center gap-2 flex-1">
                                                            <Link
                                                                href={`/atleticas/${match.team1?.id || ""}`}
                                                                className="font-medium hover:text-primary transition-colors">
                                                                <img src={match.team1?.logo || "/logos/liga.png"} alt={match.team1?.name} className="h-6 w-6 object-contain mr-1 inline-block rounded-full" />
                                                                {match.team1?.acronym}
                                                            </Link>
                                                        </div>
                                                        <div className="flex items-center justify-center gap-4">
                                                            <span className={`text-4xl font-bold`}>
                                                                {match.scoreTeam1 !== null && <span className="text-xl font-bold">{match.scoreTeam1}</span>}
                                                            </span>
                                                            <span className="text-2xl mt-3 text-muted-foreground"> - </span>
                                                            <span
                                                                className={`text-4xl font-bold ${match.scoreTeam2 !== null && match.scoreTeam2 > (match.scoreTeam1 || 0)
                                                                    ? "text-primary"
                                                                    : "text-foreground"
                                                                    }`}>
                                                                {match.scoreTeam2 !== null && <span className="text-xl font-bold">{match.scoreTeam2}</span>}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2 flex-1 justify-end">
                                                            <Link
                                                                href={`/atleticas/${match.team2?.id || ""}`}
                                                                className="font-medium hover:text-primary transition-colors">
                                                                {match.team2?.acronym}
                                                                <img src={match.team2?.logo || "/logos/liga.png"} alt={match.team2?.name} className="h-6 w-6 object-contain ml-1 inline-block rounded-full" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4 text-right">
                                                        <StatusBadge status={match.status} />
                                                        <div className="text-xs text-muted-foreground mt-1">
                                                            {new Date(match.scheduledAt).toLocaleDateString("pt-BR")}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Tournament Ranking (Top 8) */}
                <div>
                    <Card className="sticky top-20">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Trophy className="h-5 w-5 text-primary" />
                                <CardTitle>Classificação</CardTitle>
                            </div>
                            <CardDescription>Top 8 do torneio</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-12">#</TableHead>
                                        <TableHead>Time</TableHead>
                                        <TableHead className="text-right">Pts</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {ranking.slice(0, 8).map((rank) => (
                                        <TableRow key={rank.position}>
                                            <TableCell className="font-bold">{rank.position}</TableCell>
                                            <TableCell>
                                                <Link href={`/atleticas/${rank.atleticaId}`} className="hover:text-primary transition-colors">
                                                    <div className="font-medium">{rank.atletica.acronym}</div>
                                                </Link>
                                            </TableCell>
                                            <TableCell className="text-right font-bold">{rank.points}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}
