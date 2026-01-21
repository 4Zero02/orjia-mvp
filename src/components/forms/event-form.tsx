"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface EventFormProps {
    event?: {
        id: string
        name: string
        startDate: string
        endDate: string
        location: string
        status: string
    }
}

export function EventForm({ event }: EventFormProps) {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: event?.name || "",
        startDate: event?.startDate || "",
        endDate: event?.endDate || "",
        location: event?.location || "",
        status: event?.status || "upcoming",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("[v0] Form submitted:", formData)
        // Mock save action
        router.push("/admin/events")
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>Informações do Evento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nome do Evento</Label>
                        <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Ex: Interatléticas São Paulo 2024"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="location">Local</Label>
                        <Input
                            id="location"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            placeholder="Ex: São Paulo"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="startDate">Data de Início</Label>
                            <Input
                                id="startDate"
                                type="date"
                                value={formData.startDate}
                                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="endDate">Data de Término</Label>
                            <Input
                                id="endDate"
                                type="date"
                                value={formData.endDate}
                                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="status">Status</Label>
                        <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                            <SelectTrigger id="status">
                                <SelectValue placeholder="Selecione o status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="upcoming">Próximo</SelectItem>
                                <SelectItem value="active">Em Andamento</SelectItem>
                                <SelectItem value="finished">Finalizado</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <Button type="submit">{event ? "Salvar Alterações" : "Criar Evento"}</Button>
                        <Button type="button" variant="outline" onClick={() => router.back()}>
                            Cancelar
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </form>
    )
}
