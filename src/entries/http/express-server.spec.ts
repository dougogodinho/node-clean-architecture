import { helloWorldResolver, makeExpressServer } from './express-server'
import { nextMock, reqMock, resMock } from '../../test/mocks/handler-params.mock'

test('happy path', () => {
  const expressServer = makeExpressServer()
  expect(expressServer).toHaveProperty('listen')
})

test('helloWorldResolver', () => {
  helloWorldResolver(reqMock, resMock, nextMock)
  expect(resMock.send).toBeCalledWith(expect.any(String))
})
