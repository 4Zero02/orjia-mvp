import prisma from "@/lib/prisma"

export async function getTournamentResults() {
    return prisma.tournamentResult.findMany({
        include: {
            tournament: true,
        },
        orderBy: {
            tournamentId: "asc",
            position: "asc",
        },
    });
}

export async function getTournamentResultsByTournament(tournamentId: number) {
    return prisma.tournamentResult.findMany({
        where: {
            tournamentId,
        },
        include: {
            atletica: true,
        },
        orderBy: {
            position: "asc",
        },
    });
}

// verificar q porra eh essa
// export async function getTournamentRanking(tournamentId: number) {
//     const results = await getTournamentResultsByTournament(tournamentId);
//     return results.map(result => ({
//         position: result.position,
//         team: result.team,
//         points: result.points,
//     }));
// }

export async function getTournamentResultByAtletica(tournamentId: number, atleticaId: number) {
    return prisma.tournamentResult.findFirst({
        where: {
            tournamentId,
            atleticaId,
        },
    });
}