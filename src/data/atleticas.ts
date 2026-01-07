import prisma from "@/lib/prisma";

export async function getAtleticas() {
    return prisma.atletica.findMany();
}

export async function getAtleticaById(atleticaId: number) {
    return prisma.atletica.findUnique({
        where: {
            id: atleticaId,
        },
    });
}

export async function getAlteticaParticipations(atleticaId: number) {
    const participatedEvents = await prisma.event.findMany({
        where: {
            tournaments: {
                some: {
                    results: {
                        some: {
                            teamId: atleticaId,
                        },
                    },
                },
            },
        },
        include: {
            tournaments: {
                where: {
                    results: {
                        some: {
                            teamId: atleticaId,
                        },
                    },
                },
                include: {
                    results: {
                        where: {
                            teamId: atleticaId,
                        },
                    },
                },
            },
        },
    })

    return {
        participatedEvents,
        participatedTournaments: participatedEvents.flatMap(event => event.tournaments)
    }
}

export async function getParticipatedEvents(atleticaId: number) {
    return prisma.event.findMany({
        where: {
            tournaments: {
                some: {
                    results: {
                        some: {
                            teamId: atleticaId,
                        },
                    },
                },
            },
        },
        include: {
            tournaments: {
                where: {
                    results: {
                        some: {
                            teamId: atleticaId,
                        },
                    },
                },
                include: {
                    results: {
                        where: {
                            teamId: atleticaId,
                        },
                    },
                },
            },
        },
    })
}

export async function getParticipatedTournaments(atleticaId: number) {
    return prisma.tournament.findMany({
        where: {
            results: {
                some: {
                    teamId: atleticaId,
                },
            },
        },
        include: {
            event: true, // Adiciona informação do evento
            results: {
                where: {
                    teamId: atleticaId,
                },
            },
        },
    })
}