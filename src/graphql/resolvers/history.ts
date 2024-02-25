const historyResolver = {
  Query: {
    histories: async (_: any, __: any, { prisma }: any) => {
      return prisma.leadershipHistory.findMany({
        include: {
          student: {
            include: {
              department: true
            }
          },
          position: true
        }
      })
    }
  },
  Mutation: {
    createHistory: async (_: any, args: any, { prisma }: any) => {
      const { sessionId, studentId, level, positionId } = args
      return prisma.leadershipHistory.create({
        data: {
          sessionId,
          studentId,
          positionId,
          level
        }
      })
    }
  }
}

export default historyResolver
