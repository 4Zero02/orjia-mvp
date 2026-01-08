import prisma from "@/lib/prisma"

export async function getEventResults() {
    return prisma.eventResult.findMany({
        include: {
            event: true,
        },
        orderBy: {
            eventId: "asc",
            position: "asc",
        },
    });
}

export async function getEventResultsByEvent(eventId: number) {
    return prisma.eventResult.findMany({
        where: {
            eventId,
        },
        include: {
            team: true,
        },
        orderBy: {
            position: "asc",
        },
    });
}

export async function getEventRanking(eventId: number) {
    const results = await getEventResultsByEvent(eventId);
    return results.map(result => ({
        position: result.position,
        team: result.team,
        points: result.points,
    }));
}

export async function getEventResultByAtletica(eventId: number, teamId: number) {
    return prisma.eventResult.findFirst({
        where: {
            eventId,
            teamId,
        },
    });
}