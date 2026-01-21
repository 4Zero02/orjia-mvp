import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { Plus, Pencil, Trash2 } from "lucide-react"
import Link from "next/link"

const res = await fetch("/api/admin/atleticas", {
    cache: "no-store",
});

const atleticas = await res.json();

export default function AtleticasPage() {


    return (
        <div className="flex-1 overflow-auto">
            <div className="p-8">
                <PageHeader
                    title="Atléticas"
                    description="Gerencie as atléticas cadastradas na plataforma"
                    action={
                        <Button asChild>
                            <Link href="/admin/atleticas/adicionar">
                                <Plus className="w-4 h-4 mr-2" />
                                Nova Atlética
                            </Link>
                        </Button>
                    }
                />

                <Card>
                    <CardHeader>
                        <CardTitle>Lista de Atléticas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Nome</TableHead>
                                    <TableHead>Universidade</TableHead>
                                    <TableHead>Membros</TableHead>
                                    <TableHead className="text-right">Ações</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {atleticas.map((atletica: any) => (
                                    <TableRow key={atletica.id}>
                                        <TableCell className="font-medium">{atletica.name}</TableCell>
                                        <TableCell>{atletica.course}</TableCell>
                                        <TableCell>{atletica.instagram}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="ghost" size="icon" asChild>
                                                    <Link href={`/admin/atleticas/${atletica.id}`}>
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
        </div>
    )
}
