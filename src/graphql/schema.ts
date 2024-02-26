import { makeExecutableSchema } from '@graphql-tools/schema'
import { readFileSync } from 'fs'
// import studentResolver from './resolvers/student'
import positionResolver from './resolvers/position'
import departmentResolver from './resolvers/department'
import sessionResolver from './resolvers/session'
import historyResolver from './resolvers/history'
import accomplishmentResolver from './resolvers/accomplishment'
import path from 'path'

const departmentType = readFileSync(path.join(__dirname, './typedefs/department.graphql'), 'utf8')
const positionType = readFileSync(path.join(__dirname, './typedefs/position.graphql'), 'utf8')
// const studentType = readFileSync(path.join(__dirname, './typedefs/student.graphql'), 'utf8')
const sessionType = readFileSync(path.join(__dirname, './typedefs/session.graphql'), 'utf8')
const historyType = readFileSync(path.join(__dirname, './typedefs/history.graphql'), 'utf8')
const accomplishmentType = readFileSync(path.join(__dirname, './typedefs/accomplishment.graphql'), 'utf8')

const typeDefs = [departmentType, positionType, sessionType, historyType, accomplishmentType]
const resolvers = [departmentResolver, positionResolver, sessionResolver, historyResolver, accomplishmentResolver]

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema
