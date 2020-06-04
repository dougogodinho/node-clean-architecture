import { asFunction, asValue, createContainer } from 'awilix'
import { makeExpressServer } from './entries/http/express-server'
import { makeApolloServer } from './entries/graphql/apollo-server'

export const container = createContainer()

// core
container.register({
  env: asValue(process.env),
})

// entries
container.register({
  expressServer: asFunction(makeExpressServer),
  apolloServer: asFunction(makeApolloServer),
})

// app services
container.register({
  logger: asValue(console),
})
