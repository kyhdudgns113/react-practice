import {createServer} from 'http'
import {getPublicDirPath} from './config'
import {makeDir} from './utils'
import {createExpressApp} from './express'
import type {MongoDB} from './mongodb'
import {connectAndUseDB} from './mongodb'

makeDir(getPublicDirPath())

const connectCallback = (db: MongoDB) => {
  const hostname = '127.0.0.1'
  const port = 4000

  createServer(createExpressApp(db)).listen(port, () =>
    console.log(`GKD connect http://${hostname}:${port}`)
  )
}

connectAndUseDB(connectCallback, 'ch07')
