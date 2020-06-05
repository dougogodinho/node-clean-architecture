import express, { Express, RequestHandler } from 'express'

export const makeExpressServer = (): Express => {
  const app = express()
  app.get('/', helloWorldResolver)
  return app
}

export const helloWorldResolver: RequestHandler = (req, res) => {
  res.send('hello world!')
}
