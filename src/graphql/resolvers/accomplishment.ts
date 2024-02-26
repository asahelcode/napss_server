const accomplishmentResolver = {
  Mutation: {
    createDepartmentAccomplishment: async (_: any, args: any, { prisma }: any) => {
      const { departmentId, sessionId, description, imageUrl } = args
      return prisma.departmentAccomplishment.create({
        data: {
          departmentId,
          sessionId,
          description,
          imageUrl
        }
      })
    },
    createFacultyAccomplishment: async (_: any, args: any, { prisma }: any) => {
      const { sessionId, description, imageUrl } = args
      return prisma.facultyAccomplishment.create({
        data: {
          sessionId,
          description,
          imageUrl
        }
      })
    }
  }
}

export default accomplishmentResolver
