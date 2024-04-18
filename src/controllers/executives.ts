import type { Request, Response } from 'express'
import { prisma } from '..'
import { presidentId, vicePresidentId } from '../constants'

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const FacultyPresidentAndVicePresident: (req: Request, res: Response) => void = async (_req, res) => {
  try {
    const sessions = await prisma.session.findMany({
      include: {
        history: {
          where: {
            OR: [
              { positionId: presidentId },
              { positionId: vicePresidentId }
            ],
            level: 'FACULTY'
          },
          include: {
            department: true,
            position: true
          }
        }
      }
    })

    sessions.map((session) => ({
      ...session,
      history: session.history.map(h => ({
        studentName: h.studentName,
        studentImage: h.studentImage,
        department: h.department.name,
        position: h.position.position
      }))
    }))

    res.status(200).json(sessions)

    // console.log(JSON.stringify(sessions), { depth: null })
  } catch (error) {
    console.error('Error fetching sessions with leadership history:', error)
    throw error
  }
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const FacultyMembers: (req: Request, res: Response) => void = async (req, res) => {
  const { sessionId } = req.params

  const sessionMembers = await prisma.leadershipHistory.findMany({
    where: { sessionId, level: 'FACULTY' },
    include: {
      department: true,
      position: true
    }
  })

  console.log(sessionId)
  res.status(200).json(sessionMembers)
}

const SearchMember: (req: Request, res: Response) => Promise<void> = async (req, res) => {
  const name: string | undefined = typeof req.query.name === 'string' ? req.query.name : undefined

  const searchResult = await prisma.leadershipHistory.findMany({
    where: {
      studentName: {
        contains: name,
        mode: 'insensitive'
      }
    },
    include: {
      department: true,
      position: true,
      session: true
    }
  })
  res.status(200).json(searchResult)
}

export { FacultyPresidentAndVicePresident, FacultyMembers, SearchMember }
