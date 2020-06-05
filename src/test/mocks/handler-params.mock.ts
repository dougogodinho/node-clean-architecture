import { Request, Response } from 'express'

export const reqMock: Request = {} as any
export const resMock: Response = { send: jest.fn() } as any
export const nextMock = jest.fn()
