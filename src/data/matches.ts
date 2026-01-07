import prisma from "@/lib/prisma"

export async function getMatchesByTournament(tournamentId: number) {
    return prisma.match.findMany({
        where: {
            tournamentId,
        },
        orderBy: {
            scheduledAt: "asc",
        },
        include: {
            team1: true,
            team2: true,
        },
    });
}

export async function getMatchById(matchId: number) {
    return prisma.match.findUnique({
        where: {
            id: matchId,
        },
        include: {
            team1: true,
            team2: true,
        },
    });
}

export async function getMatches() {
    return prisma.match.findMany({
        orderBy: {
            scheduledAt: "desc",
        },
        include: {
            team1: true,
            team2: true,
        },
    });
}

export async function getMatchesByTeamId(teamId: number) {
    return prisma.match.findMany({
        where: {
            OR: [
                { team1Id: teamId },
                { team2Id: teamId },
            ],
        },
        orderBy: {
            scheduledAt: "desc",
        },
        include: {
            team1: true,
            team2: true,
        },
    });
}