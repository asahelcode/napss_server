/*
  Warnings:

  - A unique constraint covering the columns `[session]` on the table `Session` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Session_session_key" ON "Session"("session");
