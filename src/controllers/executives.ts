import type { Request, Response } from 'express'
import { prisma } from '..'
// import { presidentId, vicePresidentId } from '@/constants'

const FacultyPresidentAndVicePresident = async (req: Request, res: Response): Promise<void> => {
  // const sessionFacultyPresidentAndVicePresident = {}
  const sessions = await prisma.session.findMany()

  // sessions.map(async (session) => {
  //   sessionFacultyPresidentAndVicePresident[session.session] = await prisma.leadershipHistory.findMany({
  //     where: {
  //       position: {
  //         in: [presidentId, vicePresidentId]
  //       }
  //     }
  //   })
  // })

  console.log(sessions)
}

export { FacultyPresidentAndVicePresident }
