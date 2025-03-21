import express, { json } from 'express'
import { PORT } from './config/config.js'
import { CreateInventarioRouter } from './routes/inventario.js'
import { dbConnect } from './connection.js'
import cors from 'cors'

export const createApp = async ({ inventarioModel }) => {
  const app = express()
  app.use(json())
  app.use(cors())

  app.get('/', (req, res) => {
    res.send('connected')
  })

  dbConnect()

  app.use('/inventario', CreateInventarioRouter({ inventarioModel }))

  app.listen(PORT, () => {
    console.log(`listen on port:${PORT}`)
  })
}
