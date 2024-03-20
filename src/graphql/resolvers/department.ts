import { presidentId, vicePresidentId } from '../../constants/index'

const departmentResolver = {
  Department: {
    officials: async (parent: any, __: any, { prisma }: any) => {
      console.log(parent.parent)
      return prisma.leadershipHistory.findMany({
        where: {
          departmentId: parent.id
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
                in: [presidentId, vicePresidentId]
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
