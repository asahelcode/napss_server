import { makeExecutableSchema } from '@graphql-tools/schema'
import { readFileSync } from 'fs'
import studentResolver from './resolvers/student'
import positionResolver from './resolvers/position'
import departmentResolver from './resolvers/department'
import sessionResolver from './resolvers/session'
import path from 'path'

const departmentType = readFileSync(path.join(__dirname, './typedefs/department.graphql'), 'utf8')
const positionType = readFileSync(path.join(__dirname, './typedefs/position.graphql'), 'utf8')
const studentType = readFileSync(path.join(__dirname, './typedefs/student.graphql'), 'utf8')
const sessionType = readFileSync(path.join(__dirname, './typedefs/session.graphql'), 'utf8')

const typeDefs = [departmentType, positionType, studentType, sessionType]
const resolvers = [departmentResolver, positionResolver, studentResolver, sessionResolver]

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema
