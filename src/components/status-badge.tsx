import { StatusTime } from "@/app/generated/prisma/enums"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface StatusBadgeProps {
    status: StatusTime
    className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
    const variants = {
        PLANNING: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
        UPCOMING: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
        ONGOING: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
        FINISHED: "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20",
        SCHEDULED: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
        COMPLETED: "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20",
        ACTIVE: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
    }

    const labels = {
        UPCOMING: "Em breve",
        ONGOING: "Em andamento",
        FINISHED: "Finalizado",
        SCHEDULED: "Agendado",
        PLANNING: "Planejando",
        COMPLETED: "Concluído",
        ACTIVE: "Ativo",
    }

    return (
        <Badge variant="outline" className={cn(variants[status], className)}>
            {labels[status]}
        </Badge>
    )
}
