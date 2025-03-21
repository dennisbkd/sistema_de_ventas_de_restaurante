import { Router } from 'express'
import { InventarioController } from '../controllers/inventario.js'

export const CreateInventarioRouter = ({ inventarioModel }) => {
  const inventarioRouter = Router()
  const inventarioController = new InventarioController({ inventarioModel })

  inventarioRouter.get('/', inventarioController.getAll)
  return inventarioRouter
}
