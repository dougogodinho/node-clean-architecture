import { Logger } from '../../app/services/logger'

export const loggerMock: Logger = {
  log: jest.fn(),
  error: jest.fn(),
}
