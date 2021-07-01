import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import router from './routes'
import exceptionHandler from './config/exceptionHandler'

class App {
  constructor() {
    this.server = express()
  }

  _middlewares() {
    this.server.use(express.json())
    this.server.use(helmet())
    this.server.use(cors())
  }

  _routes() {
    this.server.use(router())
  }

  _execptionHandler() {
    this.server.use(exceptionHandler)
  }

  init() {
    this._middlewares()
    this._routes()
    this._execptionHandler()
    return this.server
  }
}

export default App
