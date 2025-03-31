import { createApp } from './app.js'

import { InventarioModel } from './models/inventario.js'
import { PedidosModel } from './models/pedidos.js'

createApp({ inventarioModel: InventarioModel, pedidosModel: PedidosModel })
