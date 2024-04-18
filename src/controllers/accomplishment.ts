import type { Request, Response } from 'express'
import { prisma } from '..'

const getAccomplishments: (req: Request, res: Response) => Promise<void> = async (req, res) => {
  const { sessionId } = req.params

  const accomplishments = await prisma.facultyAccomplishment.findMany({
    where: { sessionId }
  })

  console.log(sessionId)
  res.status(200).json(accomplishments)
}

export { getAccomplishments }
