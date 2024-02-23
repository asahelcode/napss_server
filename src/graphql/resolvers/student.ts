const studentResolver = {
  Mutation: {
    createStudent: async (_: any, args: any, { prisma }: any) => {
      const { name, departmentId } = args
      console.log(departmentId)
      return prisma.student.create({
        data: {
          name,
          departmentId
        }
      })
    }
  }
}

export default studentResolver
