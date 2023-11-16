import { PagoService } from "../../services/maestros/pago.js";

const pagoService = new PagoService();

export class PagoController {
  constructor() {}

  async getAll(req, res) {
    try {
      const data = await pagoService.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await pagoService.getById(id);
      if (data) return res.json(data);
      res.status(404).json({ message: "Información no encontrada" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  create = async (req, res) => {
    const {
      monto,
      fechapago,
      idcolegiado,
      idrecibo,
      idformapago,
      idconceptolist,
      idconcepto,
      conceptotext,
      description,
    } = req.body;
    try {
      const data = await pagoService.create(
        monto,
        fechapago,
        idcolegiado,
        idrecibo,
        idformapago,
        idconceptolist,
        idconcepto,
        conceptotext,
        description
      );
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Error creando la información pago." });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const data = await pagoService.delete(id);

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
      const data = await pagoService.update(id, estado);
      return res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error actualizando la información." });
    }
  };
}
