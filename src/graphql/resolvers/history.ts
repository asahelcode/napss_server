
const historyResolver = {
  Query: {
    searchOfficials: async (_: any, args: any, { prisma }: any) => {
      const { name } = args
      return prisma.leadershipHistory.findMany({
        where: {
          studentName: {
            contains: name,
            mode: 'insensitive'
          }
        },
        include: {
          department: true,
          position: true,
          session: true
        }
      })
    },
  },
  Mutation: {
    createHistory: async (_: any, args: any, { prisma }: any) => {
      const { sessionId, studentName, level, positionId, departmentId, studentImage } = args
      return prisma.leadershipHistory.create({
        data: {
          sessionId,
          studentName,
          positionId,
          departmentId,
          studentImage,
          level
        }
      })
    }
  }
}

export default historyResolver
