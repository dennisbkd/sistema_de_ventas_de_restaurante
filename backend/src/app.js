import express, { json } from 'express'
import { PORT } from './config/config.js'
import { CreateInventarioRouter } from './routes/inventario.js'
import { createPedidoRouter } from './routes/pedidos.js'
import { createAuthUserRouter } from './routes/auth.js'
import { dbConnect } from './connection.js'
import cors from 'cors'

export const createApp = async ({ inventarioModel, pedidosModel, userModel }) => {
  const app = express()
  app.use(json())
  app.use(cors())
  app.use(express.json())

  app.get('/', (req, res) => {
    res.send('connected')
  })
  dbConnect()

  app.use('/inventario', CreateInventarioRouter({ inventarioModel }))
  app.use('/pedidos', createPedidoRouter({ pedidosModel }))
  app.use('/auth', createAuthUserRouter({ userModel }))

  app.listen(PORT, () => {
    console.log(`listen on port:${PORT}`)
  })
}
