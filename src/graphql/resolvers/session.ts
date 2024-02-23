const sessionResolver = {
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
