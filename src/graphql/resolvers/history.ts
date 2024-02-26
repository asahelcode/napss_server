const historyResolver = {
  Query: {
    histories: async (_: any, __: any, { prisma }: any) => {
      return prisma.leadershipHistory.findMany({
        include: {
          position: true,
          session: true
        }
      })
    },
    departmentOfficials: async (_: any, args: any, { prisma }: any) => {
      const { departmentId, sessionId } = args
      return prisma.leadershipHistory.findMany({
        where: {
          departmentId,
          sessionId,
          level: 'DEPARTMENT'
        },
        include: {
          position: true
        }
      })
    },
    facultyOfficials: async (_: any, args: any, { prisma }: any) => {
      const { sessionId } = args
      return prisma.leadershipHistory.findMany({
        where: {
          sessionId,
          level: 'FACULTY'
        },
        include: {
          department: true,
          position: true
        }
      })
    }
  },
  Mutation: {
    createHistory: async (_: any, args: any, { prisma }: any) => {
      const { sessionId, studentName, level, positionId, departmentId } = args
      return prisma.leadershipHistory.create({
        data: {
          sessionId,
          studentName,
          positionId,
          departmentId,
          level
        }
      })
    }
  }
}

export default historyResolver
