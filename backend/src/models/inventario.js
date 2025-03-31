import { DataTypes } from 'sequelize'
import db from '../config/db/db.js'

export class InventarioModel {
  static Platos = db.define('Platos', {
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

  static async getAll ({ estado }) {
    try {
      const inventarios = await this.Platos.findAll()
      return inventarios
    } catch (error) {
      throw new Error('Error al lograr obtener el inventario', error)
    }
  }

  static async getById ({ id }) {
    try {
      const plato = await this.Platos.findByPk(id)
      if (plato) return plato
      throw new Error('Plato no encontrado')
    } catch (error) {
      throw new Error('Error al buscar el plato', error)
    }
  }
}
