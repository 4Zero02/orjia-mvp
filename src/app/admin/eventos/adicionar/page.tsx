import { EventForm } from "@/components/forms/event-form"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewEventPage() {
    return (
        <div className="flex-1 overflow-auto">
            <div className="p-8">
                <Button variant="ghost" asChild className="mb-4">
                    <Link href="/admin/events">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Voltar
                    </Link>
                </Button>

                <PageHeader title="Novo Evento" description="Cadastre um novo evento esportivo no sistema" />

                <div className="max-w-2xl">
                    <EventForm />
                </div>
            </div>
        </div>
    )
}
