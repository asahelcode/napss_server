const positionResolver = {
  Query: {
    positions: async (_: any, __: any, { prisma }: any) => {
      return prisma.leadershipPosition.findMany()
    }
  },
  Mutation: {
    createPosition: async (_: any, args: any, { prisma }: any) => {
      const { position, level } = args
      return prisma.leadershipPosition.create({
        data: {
          position,
          level
        }
      })
    }
  }
}

export default positionResolver
