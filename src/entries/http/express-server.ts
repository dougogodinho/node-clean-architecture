import express, { Express } from 'express'

export const makeExpressServer = (): Express => {
  const app = express()
  app.get('/', (_, res) => res.send('hello world!'))
  return app
}
