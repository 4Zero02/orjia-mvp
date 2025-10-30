import { prisma } from "@/lib/prisma";
import { Evento } from "@prisma/client";

export const torneioService = {
  listar: async () => {
    return prisma.torneio.findMany({
      orderBy: { id: "desc" },
    });
  },

  // criar: async (data: { nome: string; evento: Evento; descricao?: string }) => {
  //   return prisma.torneio.create({ data });
  // },

  deletar: async (id: number) => {
    return prisma.torneio.delete({ where: { id } });
  },
};
