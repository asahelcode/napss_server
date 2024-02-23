/*
  Warnings:

  - You are about to drop the column `level` on the `LeadershipPosition` table. All the data in the column will be lost.
  - Added the required column `level` to the `LeadershipHistory` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PositionLevel" AS ENUM ('FACULTY', 'DEPARTMENT');

-- AlterTable
ALTER TABLE "LeadershipHistory" ADD COLUMN     "level" "PositionLevel" NOT NULL;

-- AlterTable
ALTER TABLE "LeadershipPosition" DROP COLUMN "level";
