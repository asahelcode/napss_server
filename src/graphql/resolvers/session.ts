const sessionResolver = {
  Query: {
    sessionFacultyAndDeptPresident: (_: any, __: any, { prisma }: any) => {
      return prisma.session.findMany({
        include: {
          history: {
            where: {
              level: {
                in: ['FACULTY', 'DEPARTMENT']
              },
              positionId: 'c85e2fb9-827e-46a7-9cae-498fec337cf7'
            },
            include: {
              department: true,
              position: true
            }
          }
        }
      })
    },
    sessionFacultyPresidentAndVice: (_: any, __: any, { prisma }: any) => {
      return prisma.session.findMany({
        include: {
          history: {
            where: {
              level: 'FACULTY',
              positionId: {
                in: ['c85e2fb9-827e-46a7-9cae-498fec337cf7', '74fd8ba6-ddb8-439d-ba8a-aff060c40987']
              }
            },
            include: {
              department: true,
              position: true
            }
          }
        }
      })
    },
    sessionDepartmentPresidentAndVice: (_: any, __: any, { prisma }: any) => {
      return prisma.session.findMany({
        include: {
          history: {
            where: {
              level: 'DEPARTMENT',
              positionId: {
                in: ['c85e2fb9-827e-46a7-9cae-498fec337cf7', '74fd8ba6-ddb8-439d-ba8a-aff060c40987']
              }
            },
            include: {
              position: true,
              department: true
            }
          }
        }
      })
    }
  },
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
