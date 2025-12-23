import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getEventById, getTournamentsByEventId, getEventRanking } from "@/lib/mock-data"
import { StatusBadge } from "@/components/status-badge"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Trophy, Calendar, Medal } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type EventDetailPageProps = {
    params: {
        eventId: string
    }
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
    const { eventId } = await params
    const event = getEventById(eventId)

    if (!event) {
        notFound()
    }

    const tournaments = getTournamentsByEventId(event.id)
    const eventRanking = getEventRanking(event.id)

    return (
        <main className="container mx-auto px-4 py-8">
            <Breadcrumbs
                items={[{ label: "Home", href: "/" }, { label: "Eventos", href: "/events" }, { label: event.name }]}
            />

            {/* Event Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                        <Calendar className="h-3 w-3 mr-1" />
                        {event.year}
                    </Badge>
                    <StatusBadge status={event.status} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-3 text-balance">{event.name}</h1>
                <p className="text-lg text-muted-foreground mb-4">{event.description}</p>
                <div className="text-sm text-muted-foreground">
                    {new Date(event.startDate).toLocaleDateString("pt-BR", { day: "numeric", month: "long" })} -{" "}
                    {new Date(event.endDate).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Tournaments */}
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Trophy className="h-5 w-5 text-primary" />
                                <CardTitle>Torneios</CardTitle>
                            </div>
                            <CardDescription>Modalidades esportivas deste evento</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-4">
                                {tournaments.map((tournament) => (
                                    <Link key={tournament.id} href={`/events/${event.id}/tournaments/${tournament.id}`}>
                                        <Card className="hover:shadow-md transition-all hover:border-primary/50">
                                            <CardHeader className="pb-3">
                                                <div className="flex items-center justify-between mb-2">
                                                    <Badge variant="outline" className="text-xs">
                                                        {tournament.sport}
                                                    </Badge>
                                                    <StatusBadge status={tournament.status} />
                                                </div>
                                                <CardTitle className="text-lg">{tournament.name}</CardTitle>
                                            </CardHeader>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Event Ranking */}
                <div>
                    <Card className="sticky top-20">
                        <Link href={`/events/${event.id}/ranking`}>
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Medal className="h-5 w-5 text-primary" />
                                    <CardTitle>Ranking Geral</CardTitle>
                                </div>
                                <CardDescription>Classificação geral do evento</CardDescription>
                            </CardHeader>
                        </Link>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-12">#</TableHead>
                                        <TableHead>Atlética</TableHead>
                                        <TableHead className="text-right">Pts</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {eventRanking.map((rank) => (
                                        <TableRow key={rank.position}>
                                            <TableCell className="font-bold">{rank.position}</TableCell>
                                            <TableCell>
                                                <Link href={`/teams/${rank.team.id}`} className="hover:text-primary transition-colors">
                                                    <div className="font-medium">{rank.team.name}</div>
                                                    <div className="text-xs text-muted-foreground">{rank.team.course}</div>
                                                </Link>
                                            </TableCell>
                                            <TableCell className="text-right font-bold">{rank.totalPoints}</TableCell>
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
