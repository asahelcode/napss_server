import { presidentId, vicePresidentId } from '../../constants/index'

const sessionResolver = {
  Session: {
    departments: async (parent: any, __: any, { prisma }: any) => {
      return prisma.department.findMany({
        include: {
          history: {
            where: {
              sessionId: parent.id,
              positionId: {
                in: [presidentId, vicePresidentId]
              },
              level: 'DEPARTMENT'
            },
            include: {
              position: true,
              department: true
            }
          }
        }
      })
    },
    officials: async (parent: any, __: any, { prisma }: any) => {
      return prisma.leadershipHistory.findMany({
        where: {
          sessionId: parent.id,
          level: 'FACULTY',
          positionId: {
            not: {
              in: [presidentId, vicePresidentId]
            }
          }
        }
      })
    },
    president: (parent: any, __: any, { prisma }: any) => {
      return prisma.leadershipHistory.findFirst({
        where: {
          sessionId: parent.id,
          positionId: presidentId
        },
        include: {
          department: true
        }
      })
    },
    vicePresident: (parent: any, __: any, { prisma }: any) => {
      return prisma.leadershipHistory.findFirst({
        where: {
          sessionId: parent.id,
          positionId: vicePresidentId
        },
        include: {
          department: true
        }
      })
    }
  },
  Query: {
    sessions: (_: any, __: any, { prisma }: any) => {
      return prisma.session.findMany()
    },
    session: (_: any, args: any, { prisma }: any) => {
      const { sessionId } = args
      return prisma.session.findUnique({
        where: {
          id: sessionId
        }
      })
    }
  },
  Mutation: {
    createSession: async (_: any, args: any, { prisma }: any) => {
      const { session, status } = args
      return prisma.session.create({
        data: {
          session,
          status
        }
      })
    }
  }
}

export default sessionResolver
