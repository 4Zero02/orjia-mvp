import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewTournamentPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/admin/tournaments">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Novo Torneio</h1>
                    <p className="text-muted-foreground">Cadastre um novo torneio</p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Informações do Torneio</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nome do Torneio</Label>
                            <Input id="name" placeholder="Ex: Futebol Masculino" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="event">Evento</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecione o evento" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">InterMed 2024</SelectItem>
                                    <SelectItem value="2">Copa Universitária</SelectItem>
                                    <SelectItem value="3">Torneio de Verão</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="sport">Modalidade</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="futebol">Futebol</SelectItem>
                                        <SelectItem value="volei">Vôlei</SelectItem>
                                        <SelectItem value="basquete">Basquete</SelectItem>
                                        <SelectItem value="futsal">Futsal</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="status">Status</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione o status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="scheduled">Agendado</SelectItem>
                                        <SelectItem value="in_progress">Em andamento</SelectItem>
                                        <SelectItem value="completed">Finalizado</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Descrição</Label>
                            <Textarea id="description" placeholder="Descrição do torneio..." rows={4} />
                        </div>

                        <div className="flex gap-2">
                            <Button type="submit">Salvar</Button>
                            <Button variant="outline" asChild>
                                <Link href="/admin/tournaments">Cancelar</Link>
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
