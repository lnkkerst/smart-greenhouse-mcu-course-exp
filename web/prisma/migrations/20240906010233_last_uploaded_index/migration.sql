-- DropIndex
DROP INDEX "Client_createdAt_updatedAt_idx";

-- CreateIndex
CREATE INDEX "Client_createdAt_updatedAt_lastUploaded_idx" ON "Client"("createdAt" DESC, "updatedAt" DESC, "lastUploaded" DESC);
