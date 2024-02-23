import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { PrismaClient } from '@prisma/client'
import schema from './graphql/schema'

const app = express()
app.use(cors())

const prisma = new PrismaClient()

const startServer = async (): Promise<void> => {
  const server = new ApolloServer({
    schema,
    context: { prisma },
    introspection: true
  })

  await server.start().then(() => { console.log('successfully start graphql server') })
  server.applyMiddleware({ app, path: '/graphql' })
}

const main = async (): Promise<void> => {
  await startServer()
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
