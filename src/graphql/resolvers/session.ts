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
              positionId: '9af3d1a4-fe3f-4a32-82b3-8f5db3beecf0'
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
                in: ['9af3d1a4-fe3f-4a32-82b3-8f5db3beecf0', '1d83474e-de7c-41c0-8220-3cc51984384c']
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
                in: ['9af3d1a4-fe3f-4a32-82b3-8f5db3beecf0', '1d83474e-de7c-41c0-8220-3cc51984384c']
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
