/* eslint-disable @typescript-eslint/no-misused-promises */
import { FacultyMembers, FacultyPresidentAndVicePresident } from '../controllers/executives'
import { Router } from 'express'

const executivesRouter = Router()

executivesRouter.get('/sessions/leaders', FacultyPresidentAndVicePresident)
executivesRouter.get('/session/:sessionId/leaders/all', FacultyMembers)

export default executivesRouter
