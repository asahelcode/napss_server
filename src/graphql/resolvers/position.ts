const positionResolver = {
  Mutation: {
    createPosition: async (_: any, args: any, { prisma }: any) => {
      const { position } = args
      return prisma.leadershipPosition.create({
        data: {
          position
        }
      })
    }
  }
}

export default positionResolver
