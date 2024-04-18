import { getAllSession } from '../controllers/session'
import { Router } from 'express'

const sessionRouter = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
sessionRouter.get('', getAllSession)

export default sessionRouter
