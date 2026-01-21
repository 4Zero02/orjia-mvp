import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const mockEvent = {
    id: "1",
    name: "InterMed 2024",
    date: "2024-05-15",
    location: "Ribeirão Preto",
    status: "active",
    description: "Competição InterMed 2024",
}

export default function EditEventPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/admin/events">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Editar Evento</h1>
                    <p className="text-muted-foreground">Atualize as informações do evento</p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Informações do Evento</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nome do Evento</Label>
                            <Input id="name" defaultValue={mockEvent.name} />
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="date">Data</Label>
                                <Input id="date" type="date" defaultValue={mockEvent.date} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="location">Local</Label>
                                <Input id="location" defaultValue={mockEvent.location} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="status">Status</Label>
                            <Select defaultValue={mockEvent.status}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="upcoming">Próximo</SelectItem>
                                    <SelectItem value="active">Ativo</SelectItem>
                                    <SelectItem value="completed">Finalizado</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Descrição</Label>
                            <Textarea id="description" defaultValue={mockEvent.description} rows={4} />
                        </div>

                        <div className="flex gap-2">
                            <Button type="submit">Salvar Alterações</Button>
                            <Button variant="outline" asChild>
                                <Link href="/admin/events">Cancelar</Link>
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
