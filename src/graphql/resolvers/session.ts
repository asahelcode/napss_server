const sessionResolver = {
  Query: {
    sessions: async (_: any, __: any, { prisma }: any) => {
      return prisma.session.findMany({
        include: {
          history: {
            include: {
              student: {
                include: {
                  department: true
                }
              },
              position: true
            }
          }
        }
      })
    },
    sessionPresidents: async (_: any, __: any, { prisma }: any) => {
      return prisma.session.findMany({
        include: {
          history: {
            where: {
              positionId: 'bf3ee85e-ef77-4fdf-b14a-fccfd93e9f16'
            },
            include: {
              student: true
            }
          }
        }
      })
    }
  },
  Mutation: {
    createSession: async (_: any, args: any, { prisma }: any) => {
      const { session } = args
      return prisma.session.create({
        data: {
          session
        }
      })
    }
  }
}

export default sessionResolver
