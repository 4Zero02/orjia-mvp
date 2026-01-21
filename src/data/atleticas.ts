import prisma from "@/lib/prisma"

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

export async function getAtleticaBySlug(atleticaSlug: string) {
    return prisma.atletica.findUnique({
        where: {
            slug: atleticaSlug,
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
                            atleticaId: atleticaId,
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
                            atleticaId: atleticaId,
                        },
                    },
                },
                include: {
                    results: {
                        where: {
                            atleticaId: atleticaId,
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
                            atleticaId: atleticaId,
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
                            atleticaId: atleticaId,
                        },
                    },
                },
                include: {
                    results: {
                        where: {
                            atleticaId: atleticaId,
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
                    atleticaId: atleticaId,
                },
            },
        },
        include: {
            event: true, // Adiciona informação do evento
            results: {
                where: {
                    atleticaId: atleticaId,
                },
            },
        },
    })
}

export async function getAtleticaFullPerformance(atleticaId: number) {
    const [events, tournaments] = await Promise.all([
        prisma.event.findMany({
            where: {
                results: {
                    some: { atleticaId: atleticaId }
                }
            },
            include: {
                results: {
                    where: { atleticaId: atleticaId }
                }
            }
        }),
        
        prisma.tournament.findMany({
            where: {
                results: {
                    some: { atleticaId: atleticaId }
                }
            },
            include: {
                results: {
                    where: { atleticaId: atleticaId }
                },
                event: {
                    select: {
                        id: true,
                        name: true,
                        year: true
                    }
                }
            }
        })
    ])
    
    return {
        eventPerformance: events.map(event => ({
            event,
            ranking: event.results[0]
        })),
        
        tournamentPerformance: tournaments.map(tournament => ({
            tournament,
            ranking: tournament.results[0]
        }))
    }
}