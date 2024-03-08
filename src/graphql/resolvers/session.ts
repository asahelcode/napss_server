const sessionResolver = {
  Query: {
    sessions: (_: any, __: any, { prisma }: any) => {
      return prisma.session.findMany()
    },
    sessionFacultyAndDeptPresident: (_: any, __: any, { prisma }: any) => {
      return prisma.session.findMany({
        include: {
          history: {
            where: {
              level: {
                in: ['FACULTY', 'DEPARTMENT']
              },
              positionId: 'f6c7d0e8-c8ec-48f4-8d48-5627e490f1d2'
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
                in: ['f6c7d0e8-c8ec-48f4-8d48-5627e490f1d2', 'af804803-beb0-4e8f-a56a-74441bd428fb']
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
                in: ['f6c7d0e8-c8ec-48f4-8d48-5627e490f1d2', 'af804803-beb0-4e8f-a56a-74441bd428fb']
              }
            },
            include: {
              position: true,
              department: true,
              session: true
            }
          }
        }
      })
    },
    getSessionFacultyPresidentAndVice: async (_: any, args: any, { prisma }: any) => {
      const { sessionId } = args

      return prisma.session.findUnique({
        where: {
          id: sessionId
        },
        include: {
          history: {
            where: {
              level: 'FACULTY',
              positionId: {
                in: ['f6c7d0e8-c8ec-48f4-8d48-5627e490f1d2', 'af804803-beb0-4e8f-a56a-74441bd428fb']
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
    getSessionFacultyAndDeptPresident: async (_: any, args: any, { prisma }: any) => {
      const { sessionId } = args

      return prisma.session.findMany({
        where: {
          id: sessionId
        },
        include: {
          history: {
            where: {
              level: {
                in: ['FACULTY', 'DEPARTMENT']
              },
              positionId: 'f6c7d0e8-c8ec-48f4-8d48-5627e490f1d2'
            },
            include: {
              department: true,
              position: true
            }
          }
        }
      })
    },
    getSessionDepartmentPresidentAndVice: async (_: any, args: any, { prisma }: any) => {
      const { sessionId } = args

      return prisma.session.findMany({
        where: {
          id: sessionId
        },
        include: {
          history: {
            where: {
              level: 'DEPARTMENT',
              positionId: {
                in: ['f6c7d0e8-c8ec-48f4-8d48-5627e490f1d2', 'af804803-beb0-4e8f-a56a-74441bd428fb']
              }
            },
            include: {
              department: true,
              position: true,
              session: true
            }
          }
        }
      })
    }
  },
  Mutation: {
    createSession: async (_: any, args: any, { prisma }: any) => {
      const { session, status } = args
      return prisma.session.create({
        data: {
          session,
          status
        }
      })
    }
  }
}

export default sessionResolver
