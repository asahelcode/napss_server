import { FacultyPresidentAndVicePresident } from '../controllers/executives'
import { Router } from 'express'

const userRouter = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
userRouter.get('/members', FacultyPresidentAndVicePresident)

export default userRouter
