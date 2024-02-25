/*
  Warnings:

  - You are about to drop the column `departmentId` on the `LeadershipHistory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "LeadershipHistory" DROP CONSTRAINT "LeadershipHistory_departmentId_fkey";

-- AlterTable
ALTER TABLE "LeadershipHistory" DROP COLUMN "departmentId";
