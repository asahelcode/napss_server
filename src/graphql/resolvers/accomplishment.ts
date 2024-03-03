const accomplishmentResolver = {
  Query: {
    departmentAccomplishments: (_: any, args: any, { prisma }: any) => {
      const { departmentId, sessionId } = args

      return prisma.departmentAccomplishment.findMany({
        where: {
          departmentId,
          sessionId
        }
      })
    },
    facultyAccomplishments: (_: any, args: any, { prisma }: any) => {
      const { sessionId } = args

      return prisma.facultyAccomplishment.findMany({
        where: {
          sessionId
        }
      })
    },
    allDepartmentAccomplishments: (_: any, __: any, { prisma }: any) => {
      return prisma.departmentAccomplishment.findMany({
        include: {
          department: true
        }
      })
    },
    allFacultyAccomplishments: (_: any, __: any, { prisma }: any ) => {
      return prisma.facultyAccomplishment.findMany()
    }
  },
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
