/*
  Warnings:

  - You are about to drop the column `studentId` on the `LeadershipHistory` table. All the data in the column will be lost.
  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LeadershipHistory" DROP CONSTRAINT "LeadershipHistory_studentId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_departmentId_fkey";

-- AlterTable
ALTER TABLE "LeadershipHistory" DROP COLUMN "studentId",
ADD COLUMN     "studentName" TEXT NOT NULL DEFAULT 'henry';

-- DropTable
DROP TABLE "Student";
