import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getAtleticaById } from "@/data/atleticas"

type AtleticaProps = {
    params: { id: string }
}

export default async function EditAtleticaPage({ params }: AtleticaProps) {
    const { id } = await params
    const atletica = await getAtleticaById(parseInt(id))

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/admin/atleticas">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Editar Atlética</h1>
                    <p className="text-muted-foreground">Atualize as informações da atlética</p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Informações da Atlética</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nome da Atlética</Label>
                            <Input id="name" defaultValue={atletica?.name} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="university">Universidade</Label>
                            <Input id="university" defaultValue={atletica?.course ?? ""} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="members">Número de Membros</Label>
                            <Input id="members" type="number" defaultValue={atletica?.instagram ?? ""} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Descrição</Label>
                            <Textarea id="description" defaultValue={atletica?.email ?? ""} rows={4} />
                        </div>

                        <div className="flex gap-2">
                            <Button type="submit">Salvar Alterações</Button>
                            <Button variant="outline" asChild>
                                <Link href="/admin/atleticas">Cancelar</Link>
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
