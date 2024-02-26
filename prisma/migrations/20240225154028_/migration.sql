/*
  Warnings:

  - Added the required column `departmentId` to the `LeadershipHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LeadershipHistory" ADD COLUMN     "departmentId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "LeadershipHistory" ADD CONSTRAINT "LeadershipHistory_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
