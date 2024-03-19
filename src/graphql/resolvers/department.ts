import { presidentId, vicePresidentId } from '../../constants/index'

const departmentResolver = {
  Department: {
    officials: async (parent: any, __: any, { prisma }: any) => {
      return prisma.leadershipHistory.findMany({
        where: {
          departmentId: parent.id,
          level: 'DEPARTMENT'
        },
        include: {
          position: true
        }
      })
    },
    president: async (parent: any, __: any, { prisma }: any) => {
      return prisma.leadershipHistory.findFirst({
        where: {
          departmentId: parent.id,
          positionId: presidentId,
          level: 'DEPARTMENT'
        }
      })
    },
    vicePresident: async (parent: any, __: any, { prisma }: any) => {
      return prisma.leadershipHistory.findFirst({
        where: {
          departmentId: parent.id,
          positionId: vicePresidentId,
          level: 'DEPARTMENT'
        }
      })
    }
  },
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
