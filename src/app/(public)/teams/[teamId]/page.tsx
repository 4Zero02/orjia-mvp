import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getTeamById, events, tournaments, eventRankings, tournamentRankings } from "@/lib/mock-data"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Trophy, Medal } from "lucide-react"

type TeamDetailPageProps = {
    params: {
        teamId: string
    }
}

export default async function TeamDetailPage({ params }: TeamDetailPageProps) {
    const { teamId } = await params
    const team = getTeamById(teamId)

    if (!team) {
        notFound()
    }

    // Find all events this team participated in
    const participatedEvents = events.filter((event) => eventRankings[event.id]?.some((rank) => rank.team.id === team.id))

    // Find all tournaments this team participated in
    const participatedTournaments = tournaments.filter((tournament) =>
        tournamentRankings[tournament.id]?.some((rank) => rank.team.id === team.id),
    )

    // Get team performance in events
    const eventPerformance = participatedEvents
        .map((event) => {
            const ranking = eventRankings[event.id]?.find((rank) => rank.team.id === team.id)
            return { event, ranking }
        })
        .filter((item) => item.ranking)

    // Get team performance in tournaments
    const tournamentPerformance = participatedTournaments
        .map((tournament) => {
            const ranking = tournamentRankings[tournament.id]?.find((rank) => rank.team.id === team.id)
            return { tournament, ranking }
        })
        .filter((item) => item.ranking)

    return (
        <main className="container mx-auto px-4 py-8">
            <Breadcrumbs
                items={[{ label: "Home", href: "/" }, { label: "Atléticas", href: "/teams" }, { label: team.name }]}
            />

            {/* Team Header */}
            <div className="mb-8 flex items-start gap-6">
                <img src={team.logo} alt={team.name} className="w-16 h-16 object-contain mb-4" />
                <div className="absolute top-4 right-4 bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-semibold">
                    {team.shortName}
                </div>
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">{team.name}</h1>
                    <p className="text-lg text-muted-foreground">{team.shortName}</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Team Info */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="bg-card border-border">
                        <CardHeader>
                            <CardTitle className="text-foreground">Sobre o Time</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">{team.course}</p>
                        </CardContent>
                    </Card>

                    {/* Tournament Participation */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Medal className="h-5 w-5 text-primary" />
                                <CardTitle>Participação em Torneios</CardTitle>
                            </div>
                            <CardDescription>Desempenho por modalidade</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {tournamentPerformance.map(({ tournament, ranking }) => {
                                    const event = events.find((e) => e.id === tournament.eventId)
                                    return (
                                        <Link key={tournament.id} href={`/events/${tournament.eventId}/tournaments/${tournament.id}`}>
                                            <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all hover:border-primary/50">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div>
                                                        <h3 className="font-semibold">{tournament.name}</h3>
                                                        <p className="text-sm text-muted-foreground">{event?.name}</p>
                                                    </div>
                                                    <Badge className="bg-primary/10 text-primary border-primary/30">{ranking!.position}º</Badge>
                                                </div>
                                                <div className="flex items-center gap-4 mt-3 text-sm">
                                                    <div>
                                                        <span className="font-bold">{ranking!.points}</span>
                                                        <span className="text-muted-foreground"> pts</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                                {tournamentPerformance.length === 0 && (
                                    <p className="text-sm text-muted-foreground text-center py-8">Nenhuma participação em torneios ainda</p>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-6">
                    {/* Side content */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Trophy className="h-5 w-5 text-primary" />
                                <CardTitle>Participação em Eventos</CardTitle>
                            </div>
                            <CardDescription>Desempenho geral nos eventos</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4 gap-4">
                                {eventPerformance.map(({ event, ranking }) => (
                                    <Link key={event.id} href={`/events/${event.id}`}>
                                        <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all hover:border-primary/50">
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <h3 className="font-semibold">{event.name}</h3>
                                                    <p className="text-sm text-muted-foreground">{new Date(event.startDate).getFullYear()}</p>
                                                </div>
                                                <Badge className="bg-primary/10 text-primary border-primary/30">{ranking!.position}º lugar</Badge>
                                            </div>
                                            <div className="flex items-center gap-4 mt-3">
                                                <div className="text-sm">
                                                    <span className="font-bold">{ranking!.totalPoints}</span>
                                                    <span className="text-muted-foreground"> pontos</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                                {eventPerformance.length === 0 && (
                                    <p className="text-sm text-muted-foreground text-center py-8">Nenhuma participação em eventos ainda</p>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}
