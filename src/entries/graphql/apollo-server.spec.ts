import { makeApolloServer, resolvers } from './apollo-server'
import { ApolloServer } from 'apollo-server-express'

test('happy path', () => {
  const apolloServer = makeApolloServer()
  expect(apolloServer).toBeInstanceOf(ApolloServer)
})

test('resolvers', () => {
  const called = resolvers.Query.hello()
  expect(called).toMatch('world')
})
