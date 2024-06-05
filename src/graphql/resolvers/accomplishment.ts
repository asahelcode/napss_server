const accomplishmentResolver = {
  Query: {
 
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
    allFacultyAccomplishments: (_: any, __: any, { prisma }: any) => {
      return prisma.facultyAccomplishment.findMany()
    }
  },
  Mutation: {
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
