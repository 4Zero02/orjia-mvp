import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Pencil, Trash2 } from "lucide-react"
import Link from "next/link"

const mockTournaments = [
    {
        id: "1",
        name: "Futebol Masculino",
        event: "InterMed 2024",
        teams: 8,
        status: "in_progress",
    },
    {
        id: "2",
        name: "Vôlei Feminino",
        event: "InterMed 2024",
        teams: 6,
        status: "in_progress",
    },
    {
        id: "3",
        name: "Basquete Masculino",
        event: "Copa Universitária",
        teams: 10,
        status: "scheduled",
    },
]

export default function TournamentsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Torneios</h1>
                    <p className="text-muted-foreground">Gerencie os torneios dos eventos</p>
                </div>
                <Button asChild>
                    <Link href="/admin/tournaments/new">
                        <Plus className="mr-2 h-4 w-4" />
                        Novo Torneio
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Lista de Torneios</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nome</TableHead>
                                <TableHead>Evento</TableHead>
                                <TableHead>Times</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockTournaments.map((tournament) => (
                                <TableRow key={tournament.id}>
                                    <TableCell className="font-medium">{tournament.name}</TableCell>
                                    <TableCell>{tournament.event}</TableCell>
                                    <TableCell>{tournament.teams} times</TableCell>
                                    <TableCell>
                                        <Badge variant={tournament.status === "in_progress" ? "default" : "secondary"}>
                                            {tournament.status === "in_progress" ? "Em andamento" : "Agendado"}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" asChild>
                                                <Link href={`/admin/tournaments/${tournament.id}`}>
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
