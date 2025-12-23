import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface StatusBadgeProps {
    status: "upcoming" | "ongoing" | "finished" | "scheduled"
    className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
    const variants = {
        upcoming: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
        ongoing: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
        finished: "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20",
        scheduled: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    }

    const labels = {
        upcoming: "Em breve",
        ongoing: "Em andamento",
        finished: "Finalizado",
        scheduled: "Agendado",
    }

    return (
        <Badge variant="outline" className={cn(variants[status], className)}>
            {labels[status]}
        </Badge>
    )
}
