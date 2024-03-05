const departmentResolver = {
  Query: {
    departmentsPresidentAndVicePresident: async (_: any, __: any, { prisma }: any) => {
      return prisma.department.findMany({
        include: {
          history: {
            where: {
              positionId: {
                in: ['f6c7d0e8-c8ec-48f4-8d48-5627e490f1d2', 'af804803-beb0-4e8f-a56a-74441bd428fb']
              },
              level: 'DEPARTMENT'
            },
            include: {
              session: true
            }
          }
        }
      }
      )
    }
  },
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
