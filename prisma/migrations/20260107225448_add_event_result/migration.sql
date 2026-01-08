-- CreateTable
CREATE TABLE "EventResult" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventResult_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "EventResult_eventId_idx" ON "EventResult"("eventId");

-- CreateIndex
CREATE INDEX "EventResult_teamId_idx" ON "EventResult"("teamId");

-- CreateIndex
CREATE UNIQUE INDEX "EventResult_eventId_teamId_key" ON "EventResult"("eventId", "teamId");

-- CreateIndex
CREATE UNIQUE INDEX "EventResult_eventId_position_key" ON "EventResult"("eventId", "position");

-- AddForeignKey
ALTER TABLE "EventResult" ADD CONSTRAINT "EventResult_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventResult" ADD CONSTRAINT "EventResult_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Atletica"("id") ON DELETE CASCADE ON UPDATE CASCADE;
