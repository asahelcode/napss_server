const departmentResolver = {
  Mutation: {
    createDepartment: async (_: any, args: any, { prisma }: any) => {
      const { name } = args
      return prisma.department.create({
        data: {
          name
        }
      })
    }
  }
}

export default departmentResolver
