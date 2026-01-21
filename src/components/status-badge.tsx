import { Status } from "@/app/generated/prisma/enums"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface StatusBadgeProps {
    status: Status
    className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
    const variants = {
        DRAFT: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
        ONGOING: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
        FINISHED: "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20",
        SCHEDULED: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
        CANCELLED: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
    }

    const labels = {
        DRAFT: "Rascunho",
        ONGOING: "Em Andamento",
        FINISHED: "Finalizado",
        SCHEDULED: "Agendado",
        CANCELLED: "Cancelado",
    }

    return (
        <Badge variant="outline" className={cn(variants[status], className)}>
            {labels[status]}
        </Badge>
    )
}
