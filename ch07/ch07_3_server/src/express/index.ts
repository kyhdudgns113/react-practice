import express from 'express'
import cors from 'cors'
import {setupRouters} from './setupRouters'

export const createExpressApp = (...args: any[]) => {
  const app = express()

  app.use((req, res, next) => {
    console.log(`GKD url='${req.url}, method=${req.method}`)
    next()
  })
  app.use(express.static('public'))
  app.use(express.json())
  app.use(cors())

  app.get('/', (req, res) => {
    res.json({message: 'Hello GKD express world!'})
  })

  return setupRouters(app, ...args)
}
