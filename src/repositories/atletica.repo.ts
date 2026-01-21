import prisma from "@/lib/prisma"

export function listAtleticas() {
  return prisma.atletica.findMany({
    orderBy: { name: "asc" },
  });
}

export function getAtleticaById(id: number) {
  return prisma.atletica.findUnique({
    where: { id },
  });
}

export function createAtletica(data: {
  name: string;
  acronym?: string;
  course?: string;
}) {
  return prisma.atletica.create({ data });
}

export function updateAtletica(
  id: number,
  data: Partial<{
    name: string;
    acronym: string;
    course: string;
  }>
) {
  return prisma.atletica.update({
    where: { id },
    data,
  });
}

export function deleteAtletica(id: number) {
  return prisma.atletica.delete({
    where: { id },
  });
}
