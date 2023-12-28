import { VotacionDetalleService } from "../../services/maestros/votacionDetalle.js";

const votacionDetalleService = new VotacionDetalleService();

export class VotacionDetalleController {
  constructor() {}

  async getAll(req, res) {
    try {
      const data = await votacionDetalleService.getAll();
      console.log(data);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await votacionDetalleService.getById(id);
      if (data) return res.json(data);
      res.status(404).json({ message: "Información no encontrada" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  create = async (req, res) => {
    const {
      fecha,
      monto,
      cod_colegiado_descripcion,
      motivo,
      descripcion,
      num_comprobante,
      tipo_recibo,
    } = req.body;
    try {
      const data = await votacionDetalleService.create(
        fecha,
        monto,
        cod_colegiado_descripcion,
        motivo,
        descripcion,
        num_comprobante,
        tipo_recibo
      );
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: "Error creando la información." });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const data = await votacionDetalleService.delete(id);

      if (!data) {
        return res.status(404).json({ message: "Información no encontrada" });
      }
      return res.json({ message: "Información eliminada" });
    } catch (error) {
      res.status(500).json({ error: "Error eliminando la información." });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;
    try {
      const data = await votacionDetalleService.update(id, estado);
      return res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error actualizando la información." });
    }
  };
}
