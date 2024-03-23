import { presidentId, vicePresidentId } from '../../constants/index'

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
    departmentPresidents: async (_: any, args: any, { prisma }: any) => {
      const { sessionId } = args

      return prisma.leadershipHistory.findMany({
        where: {
          sessionId,
          level: 'DEPARTMENT',
          positionId: presidentId
        },
        include: {
          department: true
        }
      })
    },
    departmentPresidentAndVicePresident: async (_: any, args: any, { prisma }: any) => {
      const { sessionId, departmentId } = args

      return prisma.leadershipHistory.findMany({
        where: {
          sessionId,
          level: 'DEPARTMENT',
          positionId: {
            in: [presidentId, vicePresidentId]
          },
          departmentId
        },
        include: {
          position: true
        }
      })
    },
    departmentOfficials: async (_: any, args: any, { prisma }: any) => {
      const { sessionId, departmentId } = args

      return prisma.leadershipHistory.findMany({
        where: {
          sessionId,
          level: 'DEPARTMENT',
          departmentId
        },
        include: {
          position: true
        }
      })
    }
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
