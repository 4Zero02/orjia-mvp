import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Pencil, Trash2 } from "lucide-react"
import Link from "next/link"

const mockEvents = [
    {
        id: "1",
        name: "InterMed 2024",
        date: "2024-05-15",
        location: "Ribeirão Preto",
        status: "active",
    },
    {
        id: "2",
        name: "Copa Universitária",
        date: "2024-06-20",
        location: "São Paulo",
        status: "upcoming",
    },
    {
        id: "3",
        name: "Torneio de Verão",
        date: "2024-01-10",
        location: "Campinas",
        status: "completed",
    },
]

export default function EventsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Eventos</h1>
                    <p className="text-muted-foreground">Gerencie os eventos da plataforma</p>
                </div>
                <Button asChild>
                    <Link href="/admin/events/new">
                        <Plus className="mr-2 h-4 w-4" />
                        Novo Evento
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Lista de Eventos</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nome</TableHead>
                                <TableHead>Data</TableHead>
                                <TableHead>Local</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockEvents.map((event) => (
                                <TableRow key={event.id}>
                                    <TableCell className="font-medium">{event.name}</TableCell>
                                    <TableCell>{new Date(event.date).toLocaleDateString("pt-BR")}</TableCell>
                                    <TableCell>{event.location}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                event.status === "active" ? "default" : event.status === "upcoming" ? "secondary" : "outline"
                                            }
                                        >
                                            {event.status === "active" ? "Ativo" : event.status === "upcoming" ? "Próximo" : "Finalizado"}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" asChild>
                                                <Link href={`/admin/eventos/${event.id}`}>
                                                    <Pencil className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                            <Button variant="ghost" size="icon">
                                                <Trash2 className="h-4 w-4 text-destructive" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
