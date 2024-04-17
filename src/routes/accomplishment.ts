import { getAccomplishments } from '../controllers/accomplishment'
import { Router } from 'express'

const accomplishmentRouter = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
accomplishmentRouter.get('/:sessionId', getAccomplishments)

export default accomplishmentRouter
