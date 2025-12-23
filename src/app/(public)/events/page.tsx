import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { events } from "@/lib/mock-data"
import { StatusBadge } from "@/components/status-badge"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Calendar } from "lucide-react"

export default function EventsPage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Eventos" }]} />

            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Eventos</h1>
                <p className="text-muted-foreground text-lg">Navegue por todos os eventos esportivos universitários</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <Link key={event.id} href={`/events/${event.id}`}>
                        <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                            <CardHeader>
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-5 w-5 text-muted-foreground" />
                                        <span className="text-sm font-medium text-muted-foreground">{event.year}</span>
                                    </div>
                                    <StatusBadge status={event.status} />
                                </div>
                                <CardTitle className="text-2xl">{event.name}</CardTitle>
                                <CardDescription className="text-base">{event.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm text-muted-foreground">
                                    <div className="font-medium">
                                        {new Date(event.startDate).toLocaleDateString("pt-BR", { day: "numeric", month: "long" })} -{" "}
                                        {new Date(event.endDate).toLocaleDateString("pt-BR", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </main>
    )
}
