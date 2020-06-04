import { Express } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { Logger } from '../app/services/logger'
import { container } from '../container'
import ProcessEnv = NodeJS.ProcessEnv

interface deps {
  expressServer: Express
  apolloServer: ApolloServer
  env: ProcessEnv
  logger: Logger
}

export function startApi ({ expressServer, apolloServer, env, logger }: deps): void {
  apolloServer.applyMiddleware({ app: expressServer })
  const port = env.API_PORT || 3333
  expressServer.listen(port, () => {
    logger.log(`🚀 Serving Express at http://0.0.0.0:${port}`)
    logger.log(`🚀 Serving GraphQL at http://0.0.0.0:${port}/graphql`)
  })
}

container.build(startApi)
