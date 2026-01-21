import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, Trophy, Gamepad2 } from "lucide-react"
import { getAtleticas } from "@/data/atleticas"
import { getEvents } from "@/data/events"
import { getTournaments } from "@/data/tournaments"
import { getMatches } from "@/data/matches"


export default async function AdminDashboard() {
  const stats = [
    {
      title: "Atléticas",
      value: (await getAtleticas()).length.toString(),
      description: "Atléticas cadastradas",
      icon: Users,
    },
    {
      title: "Eventos",
      value: (await getEvents()).length.toString(),
      description: "Eventos cadastrados",
      icon: Calendar,
    },
    {
      title: "Torneios",
      value: (await getTournaments()).length.toString(),
      description: "Torneios cadastrados",
      icon: Trophy,
    },
    {
      title: "Partidas",
      value: (await getMatches()).length.toString(),
      description: "Partidas cadastradas",
      icon: Gamepad2,
    },
  ]

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Visão geral da plataforma de eventos esportivos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
