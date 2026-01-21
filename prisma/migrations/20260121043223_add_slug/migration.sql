/*
  Warnings:

  - The values [PRELIMINAR,SEMI] on the enum `MatchRound` will be removed. If these variants are still used in the database, this will fail.
  - The `status` column on the `Event` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `teamId` on the `EventResult` table. All the data in the column will be lost.
  - The `status` column on the `Match` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `Tournament` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `teamId` on the `TournamentResult` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Atletica` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Atletica` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[eventId,atleticaId]` on the table `EventResult` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[eventId,slug]` on the table `Tournament` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tournamentId,atleticaId]` on the table `TournamentResult` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Atletica` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atleticaId` to the `EventResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atleticaId` to the `TournamentResult` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT', 'SCHEDULED', 'ONGOING', 'FINISHED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "TournamentGender" AS ENUM ('M', 'F', 'MISTO');

-- AlterEnum
BEGIN;
CREATE TYPE "MatchRound_new" AS ENUM ('GRUPOS', 'OITAVAS', 'QUARTAS', 'SEMIFINAL', 'TERCEIRO_LUGAR', 'FINAL', 'DESEMPATE_7_8', 'DESEMPATE_5_6');
ALTER TABLE "Match" ALTER COLUMN "round" TYPE "MatchRound_new" USING ("round"::text::"MatchRound_new");
ALTER TYPE "MatchRound" RENAME TO "MatchRound_old";
ALTER TYPE "MatchRound_new" RENAME TO "MatchRound";
DROP TYPE "public"."MatchRound_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "EventResult" DROP CONSTRAINT "EventResult_teamId_fkey";

-- DropForeignKey
ALTER TABLE "TournamentResult" DROP CONSTRAINT "TournamentResult_teamId_fkey";

-- DropIndex
DROP INDEX "EventResult_eventId_teamId_key";

-- DropIndex
DROP INDEX "EventResult_teamId_idx";

-- DropIndex
DROP INDEX "Match_tournamentId_idx";

-- DropIndex
DROP INDEX "TournamentResult_teamId_idx";

-- DropIndex
DROP INDEX "TournamentResult_tournamentId_teamId_key";

-- AlterTable
ALTER TABLE "Atletica" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "banner" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "logo" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "EventResult" DROP COLUMN "teamId",
ADD COLUMN     "atleticaId" INTEGER NOT NULL,
ADD COLUMN     "bronzeMedals" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "goldMedals" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "silverMedals" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "points" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "address" TEXT,
ADD COLUMN     "field" TEXT,
ADD COLUMN     "finishedAt" TIMESTAMP(3),
ADD COLUMN     "group" TEXT,
ADD COLUMN     "matchNumber" INTEGER,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "startedAt" TIMESTAMP(3),
ADD COLUMN     "venue" TEXT,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'SCHEDULED';

-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "gender" "TournamentGender",
ADD COLUMN     "slug" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "TournamentResult" DROP COLUMN "teamId",
ADD COLUMN     "atleticaId" INTEGER NOT NULL,
ADD COLUMN     "draws" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "losses" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "wins" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "points" SET DEFAULT 0;

-- DropEnum
DROP TYPE "StatusTime";

-- CreateIndex
CREATE UNIQUE INDEX "Atletica_slug_key" ON "Atletica"("slug");

-- CreateIndex
CREATE INDEX "Atletica_slug_idx" ON "Atletica"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Atletica_name_key" ON "Atletica"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Event_slug_key" ON "Event"("slug");

-- CreateIndex
CREATE INDEX "Event_year_status_idx" ON "Event"("year", "status");

-- CreateIndex
CREATE INDEX "Event_slug_idx" ON "Event"("slug");

-- CreateIndex
CREATE INDEX "EventResult_atleticaId_idx" ON "EventResult"("atleticaId");

-- CreateIndex
CREATE INDEX "EventResult_eventId_position_idx" ON "EventResult"("eventId", "position");

-- CreateIndex
CREATE UNIQUE INDEX "EventResult_eventId_atleticaId_key" ON "EventResult"("eventId", "atleticaId");

-- CreateIndex
CREATE INDEX "Match_tournamentId_round_idx" ON "Match"("tournamentId", "round");

-- CreateIndex
CREATE INDEX "Match_tournamentId_status_idx" ON "Match"("tournamentId", "status");

-- CreateIndex
CREATE INDEX "Match_scheduledAt_idx" ON "Match"("scheduledAt");

-- CreateIndex
CREATE INDEX "Tournament_eventId_status_idx" ON "Tournament"("eventId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "Tournament_eventId_slug_key" ON "Tournament"("eventId", "slug");

-- CreateIndex
CREATE INDEX "TournamentResult_atleticaId_idx" ON "TournamentResult"("atleticaId");

-- CreateIndex
CREATE INDEX "TournamentResult_tournamentId_position_idx" ON "TournamentResult"("tournamentId", "position");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentResult_tournamentId_atleticaId_key" ON "TournamentResult"("tournamentId", "atleticaId");

-- AddForeignKey
ALTER TABLE "TournamentResult" ADD CONSTRAINT "TournamentResult_atleticaId_fkey" FOREIGN KEY ("atleticaId") REFERENCES "Atletica"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventResult" ADD CONSTRAINT "EventResult_atleticaId_fkey" FOREIGN KEY ("atleticaId") REFERENCES "Atletica"("id") ON DELETE CASCADE ON UPDATE CASCADE;
