-- CreateEnum
CREATE TYPE "PositionLevel" AS ENUM ('FACULTY', 'DEPARTMENT');

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "session" TEXT NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeadershipPosition" (
    "id" TEXT NOT NULL,
    "position" TEXT NOT NULL,

    CONSTRAINT "LeadershipPosition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeadershipHistory" (
    "id" TEXT NOT NULL,
    "studentName" TEXT NOT NULL,
    "studentImage" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "positionId" TEXT NOT NULL,
    "level" "PositionLevel" NOT NULL,

    CONSTRAINT "LeadershipHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DepartmentAccomplishment" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "DepartmentAccomplishment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacultyAccomplishment" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "FacultyAccomplishment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Department_name_key" ON "Department"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Session_session_key" ON "Session"("session");

-- CreateIndex
CREATE UNIQUE INDEX "LeadershipPosition_position_key" ON "LeadershipPosition"("position");

-- AddForeignKey
ALTER TABLE "LeadershipHistory" ADD CONSTRAINT "LeadershipHistory_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeadershipHistory" ADD CONSTRAINT "LeadershipHistory_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeadershipHistory" ADD CONSTRAINT "LeadershipHistory_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "LeadershipPosition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepartmentAccomplishment" ADD CONSTRAINT "DepartmentAccomplishment_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
