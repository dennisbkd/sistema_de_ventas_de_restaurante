export class InventarioController {
  constructor ({ inventarioModel }) {
    this.InventarioModel = inventarioModel
  }

  getAll = async (req, res) => {
    const { estado } = req.query
    const inventario = await this.InventarioModel.getAll({ estado })
    res.json(inventario)
  }
}
