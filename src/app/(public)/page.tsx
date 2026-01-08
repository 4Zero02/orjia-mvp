import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/status-badge"
import { Trophy, Medal, ArrowRight } from "lucide-react"
import { getEvents } from "@/data/events"
import { getTournamentsByEventId } from "@/data/tournaments"
import { getEventResultsByEvent } from "@/data/eventResult"


export default async function HomePage() {
  const events = await getEvents()
  const featuredEvent = events.find((e) => e.status === "ONGOING") || events[0]
  const eventRanking = await getEventResultsByEvent(featuredEvent.id)
  const eventTournaments = await getTournamentsByEventId(featuredEvent.id)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance drop-shadow-lg">{featuredEvent.name}</h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-6 text-pretty drop-shadow-md">
              Descricao do evento
            </p>
            <div className="flex items-center gap-4 mb-8">
              <StatusBadge status={featuredEvent.status} />
              <span className="text-sm text-foreground/70">
                {new Date(featuredEvent.dateStart).toLocaleDateString("pt-BR")} - {" "}
                {new Date(featuredEvent.dateEnd).toLocaleDateString("pt-BR")}
              </span>
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg">
                <Link href={`/eventos/${featuredEvent.id}`}>
                  Ver Detalhes do Evento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/eventos">Todos os Eventos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rankings Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Event Ranking */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <Link href={`/eventos/${featuredEvent.id}/ranking`}>
                  <CardTitle>Ranking Geral do Evento</CardTitle>
                </Link>
              </div>
              <CardDescription>Top 5 atléticas na competição geral</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {eventRanking.map((rank) => (
                  <div
                    key={rank.position}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                        {rank.position}
                      </div>
                      <div>
                        <Link
                          href={`/teams/${rank.team.id}`}
                          className="font-semibold hover:text-primary transition-colors"
                        >
                          {rank.team.name}
                        </Link>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{rank.points}</div>
                      <div className="text-xs text-muted-foreground">pontos</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild variant="ghost" className="w-full mt-4">
                <Link href={`/events/${featuredEvent.id}`}>
                  Ver Ranking Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Top Teams Summary */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Medal className="h-5 w-5 text-primary" />
                <CardTitle>Modalidades</CardTitle>
              </div>
              <CardDescription>Conheça modalidades da competição</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {eventTournaments.map((tournament) => (
                  <Link
                    key={tournament.id}
                    href={`/eventos/${featuredEvent.id}/torneios/${tournament.id}`}
                    className="block p-4 rounded-lg border bg-card hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">{tournament.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">Modalidade</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <StatusBadge status={tournament.status} />
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
