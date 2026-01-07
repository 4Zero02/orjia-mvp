import prisma from "@/lib/prisma"

export async function getTournaments() {
    return prisma.tournament.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
}

export async function getTournamentById(tournamentId: number) {
    return prisma.tournament.findUnique({
        where: {
            id: tournamentId,
        },
    });
}

export async function getTournamentsByEventId(eventId: number) {
    return prisma.tournament.findMany({
        where: {
            eventId,
        },
        orderBy: {
            createdAt: "asc",
        },
    });
}