import type { Request, Response } from 'express'
import { prisma } from '..'

const getAllSession = async (req: Request, res: Response): Promise<void> => {
  try {
    const sessions = await prisma.session.findMany()

    res.status(200).json(sessions)
  } catch (err) {
    console.log(err)
  }
}

export { getAllSession }
