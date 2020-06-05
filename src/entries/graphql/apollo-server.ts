import { ApolloServer, gql } from 'apollo-server-express'

const typeDefs = gql` type Query { hello: String } `
export const resolvers = {
  Query: {
    hello: () => 'world!'
  }
}

export const makeApolloServer = (): ApolloServer => {
  return new ApolloServer({ typeDefs, resolvers })
}
