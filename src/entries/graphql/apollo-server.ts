import { ApolloServer, gql } from 'apollo-server-express'

export const makeApolloServer = (): ApolloServer => {
  const typeDefs = gql` type Query { hello: String } `
  const resolvers = { Query: { hello: () => 'world!' } }

  return new ApolloServer({ typeDefs, resolvers })
}
