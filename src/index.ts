import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const app = express()
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient()

app.use('/api/')

const main = async (): Promise<void> => {
  app.listen({ port: 4000 }, () => {
    console.log('dev server up')
  })
}

main().catch((err) => {
  console.error(err)
// eslint-disable-next-line @typescript-eslint/no-misused-promises
}).finally(async () => {
  await prisma.$disconnect()
})
