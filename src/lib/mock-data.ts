export interface Team {
  id: string
  name: string
  course: string
  shortName: string
  logo: string
}

export interface Match {
  id: string
  tournamentId: string
  round: string
  teamA: Team
  teamB: Team
  scoreA: number | null
  scoreB: number | null
  status: "scheduled" | "ongoing" | "finished"
  date: string
}

export interface TournamentRanking {
  position: number
  team: Team
  points: number
}

// Ranking top 8 de cada torneio
export interface TournamentRankingTest {
  tournamentId: number
  teamId: number | null  // null = posição ainda não preenchida
  position: number        // 1 a 8
  points: number
  createdAt: Date
  updatedAt: Date
}

export interface Tournament {
  id: string
  eventId: string
  name: string
  sport: string
  status: "upcoming" | "ongoing" | "finished"
}

// vai deixar de ser usado
export interface EventRanking {
  // eventId: string
  position: number
  team: Team
  totalPoints: number
}

export interface Event {
  id: string
  name: string
  year: number
  status: "upcoming" | "ongoing" | "finished"
  startDate: string
  endDate: string
  description: string
}

// Mock Teams
export const teams: Team[] = [
  { id: "1", name: "Imperial", shortName: "IMP", course: "Sistemas de Informacao", logo: "/logos/imperial.png"},
  { id: "2", name: "Blecaute", shortName: "BCT", course: "Engenharia Eletrica", logo: "/logos/blecaute.png" },
  { id: "3", name: "Sinistra", shortName: "SNT", course: "Medicina", logo: "/logos/sinistra.png" },
  { id: "4", name: "Strix", shortName: "STR", course: "Letras e Pedagogia", logo: "/logos/strix.png" },
  { id: "5", name: "Devastadora", shortName: "DVT", course: "Engenharia Civil", logo: "/logos/devastadora.png" },
  { id: "6", name: "Sensacionalista", shortName: "SEN", course: "Jornalismo", logo: "/logos/sensacionalista.png" },
  { id: "7", name: "Fúria", shortName: "FUR", course: "Economia", logo: "/logos/furia.png" },
  { id: "8", name: "Ceres", shortName: "CRS", course: "Engenharia Agronomica", logo: "/logos/ceres.png" },
]

// Mock Events
export const events: Event[] = [
  {
    id: "1",
    name: "ORJIA 2025",
    year: 2025,
    status: "ongoing",
    startDate: "2025-10-17",
    endDate: "2025-12-27",
    description: "O maior evento esportivo universitário do ano!",
  },
  {
    id: "2",
    name: "Jogos Atléticos 2024",
    year: 2024,
    status: "finished",
    startDate: "2024-03-10",
    endDate: "2024-05-25",
    description: "Retrospectiva dos jogos do ano passado",
  },
  {
    id: "3",
    name: "Jogos Atléticos 2026",
    year: 2026,
    status: "upcoming",
    startDate: "2026-03-20",
    endDate: "2026-06-05",
    description: "Prepare-se para a próxima edição",
  },
]

// Mock Tournaments
export const tournaments: Tournament[] = [
  { id: "1", eventId: "1", name: "Futebol Masculino", sport: "Futebol", status: "ongoing" },
  { id: "2", eventId: "1", name: "Basquete Feminino", sport: "Basquete", status: "ongoing" },
  { id: "3", eventId: "1", name: "Vôlei Masculino", sport: "Vôlei", status: "finished" },
  { id: "4", eventId: "1", name: "Handebol Feminino", sport: "Handebol", status: "upcoming" },
  { id: "5", eventId: "2", name: "Futebol Masculino", sport: "Futebol", status: "finished" },
  { id: "6", eventId: "2", name: "Basquete Feminino", sport: "Basquete", status: "finished" },
]

// Mock Matches
export const matches: Match[] = [
  {
    id: "1",
    tournamentId: "1",
    round: "Quartas de Final",
    teamA: teams[0],
    teamB: teams[1],
    scoreA: 3,
    scoreB: 2,
    status: "finished",
    date: "2025-04-15",
  },
  {
    id: "2",
    tournamentId: "1",
    round: "Quartas de Final",
    teamA: teams[2],
    teamB: teams[3],
    scoreA: 1,
    scoreB: 1,
    status: "finished",
    date: "2025-04-15",
  },
  {
    id: "3",
    tournamentId: "1",
    round: "Semifinal",
    teamA: teams[0],
    teamB: teams[2],
    scoreA: null,
    scoreB: null,
    status: "scheduled",
    date: "2025-04-22",
  },
  {
    id: "4",
    tournamentId: "2",
    round: "Fase de Grupos",
    teamA: teams[4],
    teamB: teams[5],
    scoreA: 65,
    scoreB: 58,
    status: "finished",
    date: "2025-04-10",
  },
  {
    id: "5",
    tournamentId: "2",
    round: "Fase de Grupos",
    teamA: teams[6],
    teamB: teams[7],
    scoreA: 45,
    scoreB: 48,
    status: "ongoing",
    date: "2025-04-18",
  },
]

// Mock Tournament Rankings
export const tournamentRankings: Record<string, TournamentRanking[]> = {
  "1": [
    { position: 1, team: teams[0], points: 15 },
    { position: 2, team: teams[2], points: 13 },
    { position: 3, team: teams[1], points: 10 },
    { position: 4, team: teams[3], points: 8 },
    { position: 5, team: teams[4], points: 6 },
    { position: 6, team: teams[5], points: 4 },
    { position: 7, team: teams[6], points: 3 },
    { position: 8, team: teams[7], points: 1 },
  ],
  "2": [
    { position: 1, team: teams[4], points: 12 },
    { position: 2, team: teams[7], points: 10 },
    { position: 3, team: teams[5], points: 8 },
    { position: 4, team: teams[6], points: 6 },
    { position: 5, team: teams[0], points: 4 },
    { position: 6, team: teams[1], points: 4 },
    { position: 7, team: teams[2], points: 2 },
    { position: 8, team: teams[3], points: 0 },
  ],
}

// Mock Event Rankings
export const eventRankings: Record<string, EventRanking[]> = {
  "1": [
    { position: 1, team: teams[0], totalPoints: 450 },
    { position: 2, team: teams[2], totalPoints: 420 },
    { position: 3, team: teams[4], totalPoints: 385 },
    { position: 4, team: teams[1], totalPoints: 360 },
    { position: 5, team: teams[3], totalPoints: 340 },
    { position: 6, team: teams[7], totalPoints: 310 },
    { position: 7, team: teams[5], totalPoints: 285 },
    { position: 8, team: teams[6], totalPoints: 260 },
  ],
  "2": [
    { position: 1, team: teams[2], totalPoints: 480 },
    { position: 2, team: teams[0], totalPoints: 445 },
    { position: 3, team: teams[1], totalPoints: 410 },
    { position: 4, team: teams[4], totalPoints: 390 },
    { position: 5, team: teams[3], totalPoints: 365 },
    { position: 6, team: teams[5], totalPoints: 330 },
    { position: 7, team: teams[7], totalPoints: 295 },
    { position: 8, team: teams[6], totalPoints: 270 },
  ],
}

export function getEventById(id: string) {
  return events.find((e) => e.id === id)
}

export function getTournamentById(id: string) {
  return tournaments.find((t) => t.id === id)
}

export function getTeamById(id: string) {
  return teams.find((t) => t.id === id)
}

export function getTournamentsByEventId(eventId: string) {
  return tournaments.filter((t) => t.eventId === eventId)
}

export function getMatchesByTournamentId(tournamentId: string) {
  return matches.filter((m) => m.tournamentId === tournamentId)
}

export function getTournamentRanking(tournamentId: string) {
  return tournamentRankings[tournamentId] || []
}

export function getEventRanking(eventId: string) {
  return eventRankings[eventId] || []
}
