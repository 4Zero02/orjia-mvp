-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFinal" TIMESTAMP(3) NOT NULL,
    "ano" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Torneio" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "eventoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Torneio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partida" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER,
    "atleticaAId" INTEGER NOT NULL,
    "atleticaBId" INTEGER NOT NULL,
    "placarA" INTEGER,
    "placarB" INTEGER,
    "torneioId" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "local" TEXT,

    CONSTRAINT "Partida_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atletica" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sigla" TEXT,
    "email" TEXT,
    "curso" TEXT,
    "instagram" TEXT,
    "twitter" TEXT,
    "logo" TEXT,

    CONSTRAINT "Atletica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pontuacao" (
    "id" SERIAL NOT NULL,
    "pontos" INTEGER NOT NULL,
    "atleticaId" INTEGER NOT NULL,
    "torneioId" INTEGER,

    CONSTRAINT "Pontuacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ranking" (
    "id" SERIAL NOT NULL,
    "torneioId" INTEGER NOT NULL,

    CONSTRAINT "Ranking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RankingItem" (
    "id" SERIAL NOT NULL,
    "rankingId" INTEGER NOT NULL,
    "atleticaId" INTEGER NOT NULL,
    "posicao" INTEGER NOT NULL,
    "pontos" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "RankingItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Torneio" ADD CONSTRAINT "Torneio_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_atleticaAId_fkey" FOREIGN KEY ("atleticaAId") REFERENCES "Atletica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_atleticaBId_fkey" FOREIGN KEY ("atleticaBId") REFERENCES "Atletica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pontuacao" ADD CONSTRAINT "Pontuacao_atleticaId_fkey" FOREIGN KEY ("atleticaId") REFERENCES "Atletica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pontuacao" ADD CONSTRAINT "Pontuacao_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ranking" ADD CONSTRAINT "Ranking_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RankingItem" ADD CONSTRAINT "RankingItem_rankingId_fkey" FOREIGN KEY ("rankingId") REFERENCES "Ranking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RankingItem" ADD CONSTRAINT "RankingItem_atleticaId_fkey" FOREIGN KEY ("atleticaId") REFERENCES "Atletica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
