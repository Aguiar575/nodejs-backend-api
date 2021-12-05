import mongoose from 'mongoose'
import routes from './routes'
import express from 'express'
import cors from 'cors'
import './lib/env'

class App {
    public express: express.Application;

    public constructor () {
      this.express = express()
      this.middlewares()
      this.database()
      this.routes()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database (): void {
      mongoose.connect(process.env.MONGO_DB_URI)
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express
