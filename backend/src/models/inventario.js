import { DataTypes } from 'sequelize'
import db from '../config/db/db.js'

export class InventarioModel {
  static async getAll ({ estado }) {
    const Platos = db.define('Platos', {
      nombre: {
        type: DataTypes.STRING
      },
      descripcion: {
        type: DataTypes.TEXT
      },
      precio: {
        type: DataTypes.DECIMAL
      },
      cantidad_disponible: {
        type: DataTypes.INTEGER
      }
    })
    const inventarios = await Platos.findAll()
    return inventarios
  }
}
