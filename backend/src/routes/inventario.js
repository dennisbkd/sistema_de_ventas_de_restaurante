import { Router } from 'express'
import { InventarioController } from '../controllers/inventario'

const pedidosRouter = Router()

pedidosRouter.get('/', InventarioController.getAll)

pedidosRouter.get('/', InventarioController.getById)
