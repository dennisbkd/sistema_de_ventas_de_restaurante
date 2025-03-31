import { DataTypes } from 'sequelize'
import db from '../config/db/db.js'

export const pedidosColumns = {

  ClienteID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  MeseroID: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  CocineroID: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  Fecha: {
    type: DataTypes.DATE,
    defaultValue: db.literal('NOW()')
  },
  Hora: {
    type: DataTypes.TIME,
    allowNull: false
  },
  Estado: {
    type: DataTypes.ENUM('Pendiente', 'En preparación', 'Listo', 'Entregado', 'Cancelado'),
    defaultValue: 'Pendiente'
  },
  Reserva: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}

export const detallePedidosColumns = {
  PedidoID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ProductoID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}
