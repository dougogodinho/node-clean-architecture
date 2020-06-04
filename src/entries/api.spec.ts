import { startApi } from './api'
import { loggerMock } from '../test/mocks/logger.mock'

const expressServer = { listen: jest.fn((_, c) => c()) }
const apolloServer = { applyMiddleware: jest.fn() }
const logger = loggerMock
const env = { API_PORT: 1234 }

test('happy path', () => {
  startApi({ apolloServer, env, expressServer, logger } as any)
  expect(expressServer.listen).toBeCalledWith(env.API_PORT, expect.any(Function))
  expect(apolloServer.applyMiddleware).toBeCalledWith({ app: expressServer })
  expect(logger.log).toBeCalledTimes(2)
})

test('default api port to 3333', () => {
  startApi({ apolloServer, env: {}, expressServer, logger } as any)
  expect(expressServer.listen).toBeCalledWith(3333, expect.any(Function))
})
