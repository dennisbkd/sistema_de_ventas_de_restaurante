/* eslint-disable camelcase */
import db from '../config/db/db.js'
import { pedidosColumns, detallePedidosColumns } from '../services/pedidos.js'

export class PedidosModel {
  static Pedido = db.define('Pedido', pedidosColumns, {
    timestamps: false,
    freezeTableName: true // Habilita createdAt y updatedAt automáticamente
  })

  static detallePedido = db.define('DetallePedido', detallePedidosColumns, {
    timestamps: false
  })

  static async create ({ input }) {
    console.log(input)
    const {
      ClienteID,
      MeseroID,
      CocineroID,
      Fecha,
      Hora,
      Estado,
      Reserva
    } = input
    try {
      const nuevoPedido = await this.Pedido.create({
        ClienteID,
        MeseroID,
        CocineroID,
        Fecha,
        Hora,
        Estado,
        Reserva
      })
      return nuevoPedido
    } catch (error) {
      throw new Error(`Error al crear un nuevo pedido: ${error}`)
    }
  }

  static async update ({ id, input }) {
    console.log(input)
    const {
      ClienteID,
      MeseroID,
      CocineroID,
      Fecha,
      Hora,
      Estado,
      Reserva
    } = input
    try {
      await this.Pedido.update({
        ClienteID,
        MeseroID,
        CocineroID,
        Fecha,
        Hora,
        Estado,
        Reserva
      },
      {
        where: { id }
      })
      const updatePedido = this.Pedido.findByPk(id)
      return updatePedido
    } catch (error) {
      throw new Error(`Error al actualizar el pedido: ${error}`)
    }
  }
}
