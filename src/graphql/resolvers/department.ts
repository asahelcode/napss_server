const departmentResolver = {
  Query: {
    departmentsPresidentAndVicePresident: async (_: any, __: any, { prisma }: any) => {
      return prisma.department.findMany({
        include: {
          history: {
            where: {
              positionId: {
                in: ['c85e2fb9-827e-46a7-9cae-498fec337cf7', '74fd8ba6-ddb8-439d-ba8a-aff060c40987']
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
