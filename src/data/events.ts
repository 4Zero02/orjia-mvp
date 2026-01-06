import prisma from "@/lib/prisma"

export async function getEvents() {
  return prisma.event.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getEventById(eventId: number) {
  return prisma.event.findUnique({
    where: {
      id: eventId,
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