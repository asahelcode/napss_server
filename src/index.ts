import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import executivesRouter from './routes/executives'
import sessionRouter from './routes/session'
import accomplishmentRouter from './routes/accomplishment'

const app = express()
app.use(express.json())
app.use(cors())

export const prisma = new PrismaClient()

app.use('/api/faculty', executivesRouter)
app.use('/api/sessions', sessionRouter)
app.use('/api/accomplishments', accomplishmentRouter)

const main = async (): Promise<void> => {
  app.listen({ port: 4005 }, () => {
    console.log('dev server up')
  })
}

main().catch((err) => {
  console.error(err)
// eslint-disable-next-line @typescript-eslint/no-misused-promises
}).finally(async () => {
  await prisma.$disconnect()
})
